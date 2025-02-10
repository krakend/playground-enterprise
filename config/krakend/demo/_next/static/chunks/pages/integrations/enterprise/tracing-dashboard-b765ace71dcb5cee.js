(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7384:function(e,n,t){"use strict";var a,r=t(7294);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(null,arguments)}n.Z=function(e){return r.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",className:"copy_svg__h-6 copy_svg__w-6 copy_svg__inline",viewBox:"0 0 24 24"},e),a||(a=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M0 .13h24v24H0z"}),r.createElement("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2},r.createElement("path",{d:"M16.2 7.538v-.91a1.2 1.2 0 0 0-.351-.849L13.55 3.482a1.2 1.2 0 0 0-.848-.352H6.2A1.2 1.2 0 0 0 5 4.33v11.2a1.2 1.2 0 0 0 1.2 1.2h2.397",opacity:.7}),r.createElement("path",{d:"M19.8 19.93a1.2 1.2 0 0 1-1.2 1.2H9.8a1.2 1.2 0 0 1-1.2-1.2V8.73a1.2 1.2 0 0 1 1.2-1.2h6.504a1.2 1.2 0 0 1 .848.352l2.297 2.297a1.2 1.2 0 0 1 .351.848z"})))))}},1061:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integrations/enterprise/tracing-dashboard",function(){return t(2576)}])},2576:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a=t(5893),r=t(1644),s=t(3652);let o=function(e){let{children:n}=e;return(0,a.jsx)(s.Z,{children:n})};function i(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{children:"About this demo"}),"\n",(0,a.jsx)(n.p,{children:"Jaeger collects traces and shows the complete funnel from user request to the impact in the backend."}),"\n",(0,a.jsx)(n.h2,{children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://localhost:16686/search\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(o,{...e,children:(0,a.jsx)(i,{...e})})}},343:function(e,n,t){"use strict";var a=t(5893),r=t(1079),s=t(1163);n.Z=function(e){let{wrapperClassname:n=""}=e,t=(0,s.useRouter)();return(0,a.jsx)("div",{className:"flex".concat(n?" ".concat(n):""),children:(0,a.jsxs)("button",{onClick:function(){t.back()},className:"button--primary flex items-center gap-1",children:[(0,a.jsx)(r.Z,{className:"size-6"}),(0,a.jsx)("span",{className:"text-base",children:"Go back"})]})})}},3652:function(e,n,t){"use strict";var a=t(5893),r=t(1822),s=t(5675),o=t.n(s),i=t(1163),c=t(343),l=t(5022),d=t(6340),h=t(5030);n.Z=e=>{let{children:n}=e,t=(0,i.useRouter)().asPath.replace(/\/$/,"").split("/").pop(),s=r.l.find(e=>e.slug===t);return s?(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(h.Z,{title:"".concat(s.title," | KrakenD Playground"),description:s.description}),(0,a.jsx)("section",{className:"section--sm",children:(0,a.jsxs)("div",{className:"container--boxed",children:[(0,a.jsx)(c.Z,{}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[s.iconUrl&&(0,a.jsx)(o(),{src:s.iconUrl,alt:"".concat(s.name," logo"),width:30,height:30,className:"object-contain"}),(0,a.jsx)("span",{className:"uppercase tracking-wider text-sm text-brand-neutral-300",children:s.name})]}),(0,a.jsx)("h1",{className:"heading--h2 mb-10 text-white",children:s.title})]}),(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"prose--mdx",style:{maxWidth:"none"},children:n})})]})}),(0,a.jsx)(l.Z,{})]}):(0,a.jsx)("div",{children:"Integration not found"})}},1644:function(e,n,t){"use strict";t.d(n,{a:function(){return i}});var a=t(5893),r=t(7384),s=t(7294);let o=e=>{let{children:n,...t}=e,[o,i]=(0,s.useState)(!1);return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("pre",{...t,children:n}),(0,a.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n.props.children).then(()=>{i(!0),setTimeout(()=>i(!1),1e3)}).catch(e=>console.error("Failed to copy!",e))},className:"absolute right-2 top-2 ".concat(o?"text-green-500":"text-brand-neutral-200"),children:(0,a.jsx)(r.Z,{width:20,height:20})})]})};function i(e){return{pre:o,...e}}},1822:function(e){"use strict";e.exports=JSON.parse('{"l":[{"name":"Jaeger","title":"Tracing Dashboard","description":["Jaeger collects traces and shows the complete funnel from user request to the impact in the backend"],"url":"http://localhost:16686/search","iconUrl":"/demo/demo/images/icons/jaegertracingio.svg","slug":"tracing-dashboard","license":["enterprise","open-source"]},{"name":"Kibana","title":"Logging","description":["Kibana stores KrakenD logs and allows analysis"],"url":"http://localhost:5601/app/home#/","iconUrl":"/demo/demo/images/icons/kibana.svg","slug":"logging","license":["open-source","enterprise"]},{"name":"Grafana","title":"Monitoring & metrics","description":["Grafana Monitoring shows the usage of KrakenD and reveals low-level metrics."],"url":"http://localhost:4000","iconUrl":"/demo/demo/images/icons/grafana.svg","slug":"monitoring-and-metrics","license":["open-source","enterprise"]},{"name":"OpenAPI","title":"Documentation","description":["OpenAPI/Swagger documentation can be generated with <code>krakend generate openapi</code>"],"url":"http://localhost:16686/search","command":"docker-compose exec krakend_ee krakend openapi export -c /etc/krakend/krakend.json -o /etc/krakend/demo/swagger.json","iconUrl":"/demo/demo/images/icons/openapis.svg","slug":"documentation","license":["open-source","enterprise"]},{"name":"Postman","title":"Postman","description":["OpenAPI/Swagger documentation can be generated with <code>krakend generate openapi</code>"],"url":"http://localhost:16686/search","command":"docker-compose exec krakend_ee krakend generate postman -c /etc/krakend/krakend.json -o /etc/krakend/demo/postman.json","iconUrl":"/demo/demo/images/icons/postman.svg","slug":"postman","license":["open-source","enterprise"]},{"name":"Keycloak","title":"Identity Providers","description":["Keycloak and many other identity providers can be integrated with KrakenD."],"url":"","iconUrl":"/demo/demo/images/icons/keyclock.svg","slug":"identity-providers","license":["open-source","enterprise"]},{"name":"API-Key authentication","title":"API-Key authentication","description":["The API key authentication enables a Role-Based Access Control (RBAC) mechanism by reading the Authorization header of incoming requests."],"url":"http://localhost:16686/search","command":"curl -iG -H \'Authorization: Bearer 58427514-be32-0b52-b7c6-d01fada30497\' http://localhost:8080/api-key","iconUrl":"/demo/demo/images/icons/apikey.png","slug":"api-key-authentication","license":["open-source","enterprise"]}]}')}},function(e){e.O(0,[2675,8535,2888,9774,179],function(){return e(e.s=1061)}),_N_E=e.O()}]);