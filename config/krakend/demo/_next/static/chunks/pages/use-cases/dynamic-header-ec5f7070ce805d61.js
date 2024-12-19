(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1856],{4231:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/use-cases/dynamic-header",function(){return t(1612)}])},1612:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(5893),r=t(1644),c=t(8563);let s=function(e){let{children:n}=e;return(0,i.jsx)(c.Z,{children:n})};function o(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{children:"Endpoint"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"/dynamic/header\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Dynamic routing"}),"\n",(0,i.jsxs)(n.p,{children:["Dynamic routing extends the routing capabilities to add header, tokens, and query string processing to assemble the final upstream URL you want to reach. This use case demonstrates how to route to a specific URL, taking into account the value of the ",(0,i.jsx)(n.code,{children:"X-Route"})," header."]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration introduces a variable ",(0,i.jsx)(n.code,{children:"{input_headers.x-route}"})," that injects the value of the header. This kind of routing should always be accompanied by a ",(0,i.jsx)(n.a,{href:"https://www.krakend.io/docs/enterprise/security-policies/policy-language/",children:"Security Policy"})," that enforces the passing of the header to accept the request."]}),"\n",(0,i.jsx)(n.p,{children:"You can test this configuration with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -iG -H 'X-Route: hello' 'http://localhost:8080/dynamic/header'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"https://www.krakend.io/docs/enterprise/endpoints/dynamic-routing/",children:"Dynamic Routing documentation"})," for more details."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})})}}},function(e){e.O(0,[9814,2681,182,6103,2888,9774,179],function(){return e(e.s=4231)}),_N_E=e.O()}]);