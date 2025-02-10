"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4544],{7384:function(e,t,n){var a,o=n(7294);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(null,arguments)}t.Z=function(e){return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",className:"copy_svg__h-6 copy_svg__w-6 copy_svg__inline",viewBox:"0 0 24 24"},e),a||(a=o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{d:"M0 .13h24v24H0z"}),o.createElement("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},o.createElement("path",{d:"M16.2 7.538v-.91a1.2 1.2 0 0 0-.351-.849L13.55 3.482a1.2 1.2 0 0 0-.848-.352H6.2A1.2 1.2 0 0 0 5 4.33v11.2a1.2 1.2 0 0 0 1.2 1.2h2.397",opacity:.7}),o.createElement("path",{d:"M19.8 19.93a1.2 1.2 0 0 1-1.2 1.2H9.8a1.2 1.2 0 0 1-1.2-1.2V8.73a1.2 1.2 0 0 1 1.2-1.2h6.504a1.2 1.2 0 0 1 .848.352l2.297 2.297a1.2 1.2 0 0 1 .351.848z"})))))}},343:function(e,t,n){var a=n(5893),o=n(1079),i=n(1163);t.Z=function(e){let{wrapperClassname:t=""}=e,n=(0,i.useRouter)();return(0,a.jsx)("div",{className:"flex".concat(t?" ".concat(t):""),children:(0,a.jsxs)("button",{onClick:function(){n.back()},className:"button--primary flex items-center gap-1",children:[(0,a.jsx)(o.Z,{className:"size-6"}),(0,a.jsx)("span",{className:"text-base",children:"Go back"})]})})}},6654:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(5893),o=n(5030),i=JSON.parse('{"Hv":[{"@comment":"Feature: Aggregation and basic transformation","endpoint":"/git/{user}","backend":[{"host":["https://api.github.com"],"url_pattern":"/users/{user}","allow":["avatar_url","name","company","blog","location","mail","hireable","followers","public_repos","public_gists"],"mapping":{"blog":"website"},"group":"user"},{"host":["https://api.github.com"],"url_pattern":"/users/{user}/repos","mapping":{"collection":"repos"},"is_collection":true}],"extra_config":{"documentation/openapi":{"summary":"Merges two calls from github and serves under a single endpoint","description":"This endpoint fetches in parallel the user information and the repository information from Githuib and returns it together. Non interesting fields are removed.","tags":["Aggregation"]}}},{"@comment":"EE only feature: Advanced transformation with query language","endpoint":"/cryptos/{currency}","output_encoding":"json-collection","backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency={currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson"}],"extra_config":{"modifier/jmespath":{"@comment":"Get first 5 crypto by market capitalization, then reverse sort them by name, finally filter and rename some fields","expr":"reverse(sort_by(collection[:5], &name))[*].{name: name, token: symbol,price: current_price, price_change: price_change_percentage_24h, market_cap: market_cap}"},"documentation/openapi":{"summary":"Get TOP 5 crypto capitalization & price data for a given currency","description":"This endpoint fetches some crypto capitalization data from Coingecko for a given currency.","tags":["Aggregation"]}}},{"@comment":"EE only feature: Regular expression manipulation","endpoint":"/user/creditcard","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json","allow":["credit_card"],"extra_config":{"plugin/req-resp-modifier":{"name":["content-replacer"],"content-replacer":{"credit_card.number":{"@comment":"Ridiculous card masking. Show last 4 digits and remove the rest. Credit card number is nested.","find":"^.*(\\\\d{4})","replace":"XXXX-${1}","regexp":true}}}}}]},{"@comment":"Feature: Security policy engine for requests, responses and claim checking","endpoint":"/track-user","@test_with":"curl -iG -H\'Cookie: GDPR=yes\' \'http://localhost:8080/track-user\'","input_headers":["Cookie"],"backend":[{"host":["http://localhost:8080"],"url_pattern":"/__debug/cookie"}],"extra_config":{"security/policies":{"req":{"policies":["getCookie(\'GDPR\') == \'yes\'"],"error":{"body":"User did not accept the cookie and tracking is not allowed","status":403}}}}},{"@comment":"Feature: Aggregation + backend rate limiting + endpoint rate limiting","endpoint":"/shop","backend":[{"host":["http://fake_api"],"url_pattern":"/shop/campaigns.json","allow":["campaigns"]},{"host":["http://fake_api"],"url_pattern":"/shop/products.json","allow":["products"],"extra_config":{"qos/ratelimit/proxy":{"max_rate":1,"capacity":1}}}],"extra_config":{"qos/ratelimit/router":{"max_rate":2}}},{"@comment":"Feature: Backend cache","endpoint":"/market/cached","backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson","mapping":{"collection":"coins"},"extra_config":{"qos/http-cache":{"shared":true}}}]},{"@comment":"Feature: GraphQL to REST","endpoint":"/starwars_films/{movie_id}","backend":[{"host":["https://swapi-graphql.netlify.app/"],"url_pattern":"/.netlify/functions/index","target":"data.film","extra_config":{"backend/graphql":{"type":"query","query":"query Query ($movie_id: ID!) {\\nfilm (filmID: $movie_id) {\\nid\\nepisodeID\\ntitle\\ndirector\\nreleaseDate\\nspeciesConnection {\\nspecies {\\nname\\nclassification\\nhomeworld {\\nname\\n}\\n}\\n}\\n}\\n}","variables":{"movie_id":"{movie_id}"}}}}]},{"@comment":"Feature: Concurrent calls - Not enabled","endpoint":"/market/simple","backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson","mapping":{"collection":"coins"}}],"extra_config":{"documentation/openapi":{"summary":"Get crypto market information with a single call","description":"This endpoint fetches crypto market information from Coingecko using a single non-concurrent call.","tags":["Concurrent calls"]}}},{"@comment":"Feature: Concurrent calls - Enabled","endpoint":"/market/concurrent","concurrent_calls":3,"backend":[{"host":["https://api.coingecko.com"],"url_pattern":"/api/v3/coins/markets?vs_currency=eur&ids=bitcoin%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false","encoding":"safejson","mapping":{"collection":"coins"}}],"extra_config":{"documentation/openapi":{"summary":"Get crypto market information with 3 concurrent calls","description":"This endpoint fetches crypto market information from Coingecko using 3 concurrent calls.","tags":["Concurrent calls"]}}},{"@comment":"Feature: Sequential calls, using values from 1st call response into 2nd call request","endpoint":"/sequential","backend":[{"host":["http://fake_api"],"url_pattern":"/hotels/1.json","allow":["destination_id"]},{"host":["http://fake_api"],"url_pattern":"/destinations/{resp0_destination_id}.json"}],"extra_config":{"proxy":{"sequential":true}}},{"@comment":"Feature: A failing request from a non-existent backend","endpoint":"/fail","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json","group":"user"},{"host":["http://fake_url_that_should_not_resolve.tld"],"url_pattern":"/","group":"none"}]},{"@comment":"Feature: Expose a GET REST endpoint from POST to SOAP service","endpoint":"/capital-of/{country}","backend":[{"host":["http://webservices.oorsprong.org"],"url_pattern":"/websamples.countryinfo/CountryInfoService.wso","encoding":"xml","method":"POST","target":"Envelope.Body.CapitalCityResponse","mapping":{"CapitalCityResult":"capital"},"deny":["-m"],"extra_config":{"backend/soap":{"@comment":"The XML template with variables is in the following path:","path":"./extended/templates/soap_request_capital_city.tmpl.xml"}}}]},{"@comment":"EE only feature: Wildcard to our fake API, open","endpoint":"/fake-api/*","backend":[{"host":["http://fake_api"],"url_pattern":"/"}],"extra_config":{"documentation/openapi":{"summary":"Calls to internal service with wildcard","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api path","tags":["Wildcard"]}}},{"@comment":"EE only feature: Wildcard to our fake API, protected with Basic Auth","endpoint":"/fake-api-auth/*","@test_with":"curl -iG \'http://admin:admin@localhost:8080/fake-api-auth/articles.json\'","output_encoding":"no-op","backend":[{"host":["http://fake_api"],"url_pattern":"/"}],"extra_config":{"@comment":"The simple inclusion of the Auth Basic component enables it for this endpoint","auth/basic":{},"documentation/openapi":{"summary":"Calls to internal service with wildcard, adding auth","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api-auth path, adding Basic Authentication","tags":["Wildcard"]}}},{"@comment":"EE only feature: Wildcard with geofencing - Allow visits only from Spain","endpoint":"/fake-api-geofence/*","input_headers":["X-Geoip"],"backend":[{"host":["http://fake_api"],"url_pattern":"/"}],"extra_config":{"validation/cel":[{"check_expr":"req_headers[\'X-Geoip\'][0].matches(\'\\"IsoCode\\":\\"ES\\"\')"}],"documentation/openapi":{"summary":"Calls to internal service with wildcard, using geofencing","description":"This endpoint will send all requests to a designed backend including everything after the /fake-api-geofence path, adding geofencing (allowing calls only from Spain)","tags":["Wildcard"]}}},{"@comment":"EE only feature: Dynamic routing based on headers (token claim and cookie also available)","endpoint":"/dynamic/header","backend":[{"@comment":"We will route to the backend using the content of the \'X-Route\' header","@test_with":"curl -iG -H \'X-Route: hello\' \'http://localhost:8080/dynamic/header\'","url_pattern":"/__debug/{input_headers.x-route}"}]},{"@comment":"EE only feature: Dynamic routing based on query strings","endpoint":"/dynamic/qs","backend":[{"@comment":"We will route to the backend using the content of the \'X-Route\' header","@test_with":"curl -iG \'http://localhost:8080/dynamic/qs?route=hello\'","url_pattern":"/__debug/{input_query_strings.route}"}]},{"@comment":"Feature: A public endpoint that requires no authentication","endpoint":"/public","backend":[{"host":["http://fake_api"],"url_pattern":"/hotels/1.json"}]},{"@comment":"Feature: Authorization based on JWT (using Auth0)","endpoint":"/private/auth0","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json"}],"extra_config":{"auth/validator":{"alg":"RS256","audience":["http://api.example.com"],"roles_key":"http://api.example.com/custom/roles","roles":["user","admin"],"jwk_url":"https://albert-test.auth0.com/.well-known/jwks.json"},"documentation/openapi":{"summary":"Some information behind JWT authentication protection (Auth0)","description":"This endpoint uses JWT authentication with Auth0","tags":["Authentication"]}}},{"@comment":"Feature: Authorization based on JWT (using KrakenD JOSE signer)","endpoint":"/private/custom","backend":[{"host":["http://fake_api"],"url_pattern":"/user/1.json"}],"extra_config":{"auth/validator":{"alg":"HS256","audience":["http://api.example.com"],"roles_key":"roles","issuer":"https://krakend.io","roles":["role_a","role_c"],"jwk_local_path":"/opt/krakend/jwk-symmetric.json","disable_jwk_security":true}}},{"@comment":"Feature: JWT signing, as described at https://www.krakend.io/docs/authorization/jwt-signing/","endpoint":"/token","backend":[{"host":["http://fake_api"],"url_pattern":"/token.json"}],"extra_config":{"auth/signer":{"alg":"HS256","kid":"sim2","keys_to_sign":["access_token","refresh_token"],"jwk_local_path":"/opt/krakend/jwk-symmetric.json","disable_jwk_security":true}}},{"@comment":"EE only feature: Authorization based on API Keys","endpoint":"/api-key","backend":[{"url_pattern":"/__debug/admin","host":["http://localhost:8080"]}],"extra_config":{"auth/api-keys":{"roles":["admin"]},"documentation/openapi":{"summary":"Some information behind API-Keys authentication protection","description":"This endpoint uses API-Key authentication","tags":["Authentication"]}}},{"@comment":"Feature: Only POST method allowed","endpoint":"/post","method":"POST","backend":[{"url_pattern":"/__debug/post"}]},{"@comment":"Feature: Mocked response","endpoint":"/mocked-response","method":"GET","output_encoding":"json","backend":[{"host":["http://unexistent_backend"],"url_pattern":"/"}],"extra_config":{"proxy":{"static":{"data":{"an_integer":123,"an_array":["arr1","arr2"],"an_object":{"obj":"obj1"}},"strategy":"always"}}}},{"@comment":"EE only feature: GRPC","endpoint":"/travel","input_query_strings":["lat","lon"],"backend":[{"host":["grpc_flights:4242"],"group":"flights","url_pattern":"/flight_finder.Flights/FindFlight","extra_config":{"backend/grpc":{"input_mapping":{"lat":"where.latitude","lon":"where.longitude"}}}},{"host":["grpc_trains:4243"],"group":"trains","url_pattern":"/train_finder.Trains/FindTrains","extra_config":{"backend/grpc":{"input_mapping":{"lat":"origin.position.latitude","lon":"origin.position.longitude"},"response_naming_convention":"camelCase","output_enum_as_string":true,"output_timestamp_as_string":true,"output_duration_as_string":true,"client_tls":{"allow_insecure_connections":true}}}},{"group":"hotels","url_pattern":"/hotels/1.json"},{"host":["grpc_trains:4243"],"group":"trains_classes","url_pattern":"/train_finder.Trains/GetTrainClasses","extra_config":{"backend/grpc":{"response_naming_convention":"camelCase","output_remove_unset_values":true,"client_tls":{"allow_insecure_connections":true}}}}]},{"@comment":"EE only feature: GRPC Payload in Body","endpoint":"/travel_book_flight/{id_flight}/{main_passenger}","method":"POST","backend":[{"host":["grpc_flights:4242"],"group":"flights","url_pattern":"/flight_finder.Flights/BookFlight","extra_config":{"backend/grpc":{"input_mapping":{"Id_flight":"flight_id","Main_passenger":"main_passenger.full_name"},"use_request_body":true}}}]},{"@comment":"EE only feature: WebSockets (chat example)","endpoint":"/chat/ws/{room}","input_query_strings":["*"],"input_headers":["*"],"backend":[{"url_pattern":"/ws/{room}","disable_host_sanitize":true,"host":["ws://chat:8888"]}],"extra_config":{"websocket":{"input_headers":["Cookie","Authorization"],"connect_event":true,"disconnect_event":true,"read_buffer_size":4096,"write_buffer_size":4096,"message_buffer_size":4096,"max_message_size":3200000,"write_wait":"10s","pong_wait":"60s","ping_period":"54s","max_retries":0,"backoff_strategy":"exponential"}}},{"@comment":"EE only feature: WebSockets (chat example web interface)","endpoint":"/chat","output_encoding":"no-op","backend":[{"url_pattern":"/","host":["http://chat:8888"],"encoding":"no-op"}]},{"@comment":"EE only feature: Web Server - Static content","endpoint":"/demo/*","output_encoding":"no-op","backend":[{"url_pattern":"/","extra_config":{"backend/static-filesystem":{"directory_listing":false,"path":"./demo/"}},"host":["http://localhost:8080"],"encoding":"no-op"}]}]}'),r=n(7384),s=n(1163),c=n(5660),l=n.n(c),p=n(7294),d=n(343),u=n(5022),m=n(6340);function h(e){var t,n,c,h;let{children:g}=e,_=(0,s.useRouter)().asPath.replace(/\/$/,"").replace("/use-cases/",""),[f,k]=(0,p.useState)(!1),b=i.Hv.find(e=>{let[t,n]=e["@comment"].split(":"),a=e.endpoint;return n=n.trim(),t=t.trim(),a.toLowerCase().replace(/ /g,"-").replace(/_/g,"-").replace(/[^a-z0-9/-]/g,"").replace(/(?!^)\//g,"-").replace(/--+/g,"-").replace(/-$/g,"").replace("/","")===_}),y=null==b?void 0:b["@comment"].split(":")[0].trim(),x=null==b?void 0:b["@comment"].split(":")[1].trim();return((0,p.useEffect)(()=>{l().highlightAll()},[]),b)?(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(o.Z,{title:"".concat(x," | KrakenD Playground"),description:(null==b?void 0:null===(n=b.extra_config)||void 0===n?void 0:null===(t=n["documentation/openapi"])||void 0===t?void 0:t.summary)||(null==b?void 0:null===(h=b.extra_config)||void 0===h?void 0:null===(c=h["documentation/openapi"])||void 0===c?void 0:c.description)}),(0,a.jsx)("section",{className:"section--sm",children:(0,a.jsxs)("div",{className:"container--boxed",children:[(0,a.jsx)(d.Z,{wrapperClassname:"mb-7"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text--lg text-brand-neutral-300 mb-2",children:y}),(0,a.jsx)("h1",{className:"heading--h3 mb-5 text-white",children:x}),(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row gap-12",children:[(0,a.jsxs)("div",{className:"lg:w-1/2 overflow-auto",children:[(0,a.jsx)("p",{className:"text--lg text-white font-semibold mb-5",children:"Endpoint Configuration"}),(0,a.jsxs)("pre",{className:"text-sm relative",children:[(0,a.jsx)("button",{className:"absolute right-2 top-3 sm:right-6 sm:top-4 icon ".concat(f?"text-green-500":"text-brand-neutral-200"),onClick:()=>{navigator.clipboard.writeText(JSON.stringify(b,null,2)).then(()=>{k(!0),setTimeout(()=>k(!1),1e3)}).catch(e=>console.error("Failed to copy!",e))},children:(0,a.jsx)(r.Z,{width:20,height:20})}),(0,a.jsx)("code",{className:"language-json",children:JSON.stringify(b,null,2)})]})]}),(0,a.jsx)("div",{className:"lg:w-1/2",children:(0,a.jsx)("div",{className:"prose--mdx",children:g})})]})]})]})}),(0,a.jsx)(u.Z,{})]}):(0,a.jsx)("p",{children:"Use-Case not found"})}n(4277)},1644:function(e,t,n){n.d(t,{a:function(){return s}});var a=n(5893),o=n(7384),i=n(7294);let r=e=>{let{children:t,...n}=e,[r,s]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("pre",{...n,children:t}),(0,a.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(t.props.children).then(()=>{s(!0),setTimeout(()=>s(!1),1e3)}).catch(e=>console.error("Failed to copy!",e))},className:"absolute right-2 top-2 ".concat(r?"text-green-500":"text-brand-neutral-200"),children:(0,a.jsx)(o.Z,{width:20,height:20})})]})};function s(e){return{pre:r,...e}}}}]);