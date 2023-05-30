package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"gopkg.in/olahol/melody.v1"
)

func main() {
	r := gin.Default()
	m := melody.New()

	m.Upgrader = &websocket.Upgrader{
		ReadBufferSize:  102400,
		WriteBufferSize: 102400,
		CheckOrigin:     m.Upgrader.CheckOrigin,
	}

	m.Config = &melody.Config{
		WriteWait:         m.Config.WriteWait,
		PongWait:          m.Config.PongWait,
		PingPeriod:        m.Config.PingPeriod,
		MaxMessageSize:    1024 * 1024 * 32,
		MessageBufferSize: 102400,
	}

	r.GET("/", func(c *gin.Context) {
		http.ServeFile(c.Writer, c.Request, "index.html")
	})

    r.GET("/ws/:room", func(c *gin.Context) {
		m.HandleRequest(c.Writer, c.Request)
	})

	m.HandleMessage(func(s *melody.Session, msg []byte) {
		// check if this is a handshake
		if string(msg) == newConnection {
			s.Write(newConnectionResponse)
			return
		}

		decoded := Message{}
		if err := json.Unmarshal(msg, &decoded); err != nil {
			log.Print("unformatted msg. broadcasting it")
			m.Broadcast(msg)
			return
		}

		// check the message from gateway
		switch decoded.Event {

		case "connected":
			log.Print("new client connected")
			// add session to the list with the decoded.Session
			resp := Message{
				Session: map[string]string{"uuid": decoded.Session["uuid"]},
				Body:    greetings,
			}
			b, _ := json.Marshal(resp)
			s.Write(b)
			return

		case "disconnected":
			log.Print("client disconnected")
			// remove session from the list

		case "":
            log.Printf("msg received through the gateway (body size: %d) room: %s. broadcasting it back", len(decoded.Body), decoded.URL)
			log.Println(string(decoded.Body))
            bMsg := Message{
                URL: decoded.URL,
                Body: decoded.Body,
            }
			b, _ := json.Marshal(bMsg)
			s.Write(b)
		}
	})

	r.Run(":8888")
}

type Message struct {
	URL     string            `json:"url,omitempty"`
	Session map[string]string `json:"session,omitempty"`
	Body    []byte            `json:"body,omitempty"`
	Event   string            `json:"event,omitempty"`
}

const newConnection = `{"msg":"KrakenD WS proxy starting"}`

var newConnectionResponse = []byte(`OK`)
var greetings = []byte(`Greetings, visitor`)
