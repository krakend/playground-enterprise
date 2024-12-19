(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2677],{2295:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/use-cases/chat-ws-room",function(){return t(8220)}])},8220:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var s=t(5893),o=t(1644),c=t(8563),r=t(7294),l=()=>{let[e,n]=(0,r.useState)(""),[t,o]=(0,r.useState)([]),[c,l]=(0,r.useState)(""),[a,i]=(0,r.useState)(!1),[d,u]=(0,r.useState)(null),h=(0,r.useRef)(null);return(0,s.jsx)("div",{className:"flex flex-col text-white my-10",children:(0,s.jsxs)("div",{className:"p-6 bg-[#1d1f21] rounded-md shadow-lg",children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("label",{className:"text-sm",children:["localhost:8080/chat/ws/",(0,s.jsx)("input",{placeholder:"create meeting",type:"text",value:c,onChange:e=>l(e.target.value),className:"ml-2 px-2 py-1 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),(0,s.jsx)("button",{onClick:()=>{if(!c.trim()){u("Room name cannot be empty");return}u(null),i(!1),h.current&&h.current.close();let e="ws://localhost:8080/chat/ws/".concat(c);h.current=new WebSocket(e),h.current.onopen=()=>{i(!0),console.log("Connected to room: ".concat(c))},h.current.onerror=()=>{u("Failed to connect to WebSocket. Please try again."),console.log("Connection error in room: ".concat(c))},h.current.onclose=()=>{i(!1),console.log("Disconnected from room: ".concat(c))},h.current.onmessage=e=>{let n=e.data;o(e=>[...e,n])}},className:"button--primary",children:"Connect"})]}),d&&(0,s.jsx)("p",{className:"text-red-500 text-sm mb-2",children:d}),a&&(0,s.jsxs)("p",{className:"text-green-500 text-sm mb-2",children:["Connected to room: ",c]})]}),a&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"h-64 bg-black p-4 rounded-lg overflow-y-auto mb-4",children:0===t.length?(0,s.jsx)("p",{className:"text-gray-400",children:"No messages yet..."}):t.map((e,n)=>(0,s.jsx)("div",{className:"p-2 mb-2 bg-[#1d1f21] rounded-md",children:e},n))})}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("input",{type:"text",value:e,onChange:e=>n(e.target.value),placeholder:"Type a message...",className:"flex-grow px-4 py-2 mr-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,s.jsx)("button",{onClick:()=>{h.current&&""!==e.trim()&&(h.current.send(e),n(""))},className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300",children:"Send"})]})]})]})})};let a=function(e){let{children:n}=e;return(0,s.jsx)(c.Z,{children:n})};function i(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{children:"Endpoint"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/chat/ws/{room}\n"})}),"\n",(0,s.jsx)(n.h2,{children:"Chat room using WebSockets"}),"\n",(0,s.jsxs)(n.p,{children:["The endpoint ",(0,s.jsx)(n.code,{children:"/chat/ws/{room}"})," creates a WebSockets connection to the selected ",(0,s.jsx)(n.code,{children:"{room}"})," using Multiplexing."]}),"\n",(0,s.jsx)(n.p,{children:"Choose a room name and connect the two clients below to create two independent WS connections. You can open multiple times the same page."}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://www.krakend.io/docs/enterprise/websockets/",children:"WebSockets documentation"}),"."]}),"\n",(0,s.jsx)(n.h3,{children:"Client 1"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(n.h3,{children:"Client 2"}),"\n",(0,s.jsx)(l,{})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,{...e,children:(0,s.jsx)(i,{...e})})}}},function(e){e.O(0,[9814,2681,182,6103,2888,9774,179],function(){return e(e.s=2295)}),_N_E=e.O()}]);