(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7089],{6286:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/use-cases/git-user",function(){return s(6824)}])},6824:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return a}});var t=s(5893),r=s(1644),i=s(8563),l=s(8113);let o=function(e){let{children:n}=e;return(0,t.jsx)(i.Z,{children:n})};function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:"Endpoint"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-http",children:"/git/{user}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"How aggregation works"}),"\n",(0,t.jsxs)(n.p,{children:["When a user calls ",(0,t.jsx)(n.code,{children:"/git/{user}"}),", KrakenD connects in parallel to the two ",(0,t.jsx)(n.code,{children:"backend"})," objects defined, which are:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"https://api.github.com/users/{user}"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"https://api.github.com/users/{user}/repos"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The first backend returns information about the ",(0,t.jsx)(n.code,{children:"{user}"}),", and the second their associated repositories. The information of the two backends is merged into a single response."]}),"\n",(0,t.jsx)(n.h2,{children:"Basic manipulation"}),"\n",(0,t.jsxs)(n.p,{children:["In addition, the first backend only takes a few properties from the response, and the rest are discarded, thanks to the ",(0,t.jsx)(n.code,{children:"allow"})," manipulation. It also renames the field ",(0,t.jsx)(n.code,{children:"blog"})," to ",(0,t.jsx)(n.code,{children:"website"}),", and finally puts the whole response under a new object ",(0,t.jsx)(n.code,{children:"user"}),", thanks to the ",(0,t.jsx)(n.code,{children:"group"})," modifier."]}),"\n",(0,t.jsx)(n.p,{children:"The second backend does not return an object, but an array, so we tell KrakenD that this is a collection of elements."}),"\n",(0,t.jsx)(n.p,{children:"Write an existing GitHub username below, and open the link in the browser or cURL:"}),"\n",(0,t.jsx)(l.Z,{endpoint:"http://localhost:8080/git/",placeholder:"username"})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})})}},8113:function(e,n,s){"use strict";var t=s(5893),r=s(3292),i=s(7294);n.Z=e=>{let{endpoint:n,placeholder:s,helpText:l,isStatic:o=!1}=e,c=(0,i.useRef)(null),[a,d]=(0,i.useState)(n||"");return(0,t.jsxs)("div",{className:"not-prose",children:[(0,t.jsxs)("div",{className:"bg-white py-4 px-4 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between relative",onClick:()=>{c.current&&c.current.focus()},children:[(0,t.jsxs)("div",{className:"flex text-brand-neutral-600 w-full",children:[(0,t.jsx)("p",{className:"shrink-0",children:n||""}),!o&&(0,t.jsx)("input",{ref:c,type:"text",placeholder:s,className:"focus:outline-none w-full",onChange:e=>{let s=e.target.value;d(n?"".concat(n.replace(/\/$/,""),"/").concat(s):s)}})]}),(0,t.jsxs)("a",{className:"bg-brand-neutral-900 text-white rounded-md px-6 py-2 absolute top-2 right-2 flex items-center gap-1",href:a,target:"_blank",rel:"noopener",children:["View",(0,t.jsx)(r.Z,{})]})]}),l&&(0,t.jsx)("small",{className:"mt-2 text-sm font-normal",children:l})]})}}},function(e){e.O(0,[9814,4729,6103,2888,9774,179],function(){return e(e.s=6286)}),_N_E=e.O()}]);