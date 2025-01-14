"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[5364],{39965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(86070),r=a(11100),s=a(56327),o=a(56551);const l={tags:[],draft:!1,title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:1,last_update:{date:new Date("2024-03-04T00:00:00.000Z"),author:"hungtcs"}},u=void 0,i={id:"quickstart/index",title:"\u5feb\u901f\u5f00\u59cb",description:"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6765\u6a21\u62df\u83b7\u53d6\u60a8\u521b\u5efa\u7684 Charts\uff0c\u5373\u901a\u8fc7 GET \u65b9\u6cd5\u8bf7\u6c42 /api/v1/charts\u3002",source:"@site/development/quickstart/index.mdx",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/datadata-docs/en-US/development/quickstart/",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-docs/tree/master/development/quickstart/index.mdx",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:17095104e5,sidebarPosition:1,frontMatter:{tags:[],draft:!1,title:"\u5feb\u901f\u5f00\u59cb",sidebar_label:"\u5feb\u901f\u5f00\u59cb",sidebar_position:1,last_update:{date:"2024-03-04T00:00:00.000Z",author:"hungtcs"}},sidebar:"development",previous:{title:"FAQ",permalink:"/datadata-docs/en-US/development/overview/faq"},next:{title:"Go SDK",permalink:"/datadata-docs/en-US/development/sdks/golang"}},c={},d=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u6765\u6a21\u62df\u83b7\u53d6\u60a8\u521b\u5efa\u7684 Charts\uff0c\u5373\u901a\u8fc7 ",(0,n.jsx)(t.code,{children:"GET"})," \u65b9\u6cd5\u8bf7\u6c42 ",(0,n.jsx)(t.code,{children:"/api/v1/charts"}),"\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728 ",(0,n.jsx)(t.a,{href:"../overview/authentication",children:"\u6982\u89c8/\u8eab\u4efd\u8ba4\u8bc1"})," \u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u8be6\u7ec6\u4e86\u89e3\u4e86\u5982\u4f55\u83b7\u53d6 API-Token\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u73b0\u5728\u51c6\u5907\u597d\u60a8\u7684 API-Token \uff0c\u4ece\u4e0b\u9762\u7684\u65b9\u6cd5\u4e2d\u4efb\u9009\u4e00\u79cd\uff0c\u7acb\u5373\u5c1d\u8bd5\u4e00\u4e0b\u5427\u3002"}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(s.A,{value:"curl",label:"Curl",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"curl https://www.datadata.cn/api/v1/charts \\\n  -H 'x-datadata-api-token: <your-token>'\n"})})}),(0,n.jsx)(s.A,{value:"node",label:"Node",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const response = await fetch('https://www.datadata.cn/api/v1/charts', {\n  headers: {\n    'x-datadata-api-token': '<your token>'\n  }\n})\nconst data = await response.json();\nconsole.log(data);\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"\u66f4\u591a API \u7aef\u70b9\u8bf7\u67e5\u770b API-Endpoints \u7ae0\u8282\u3002"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},56327:(e,t,a)=>{a.d(t,{A:()=>o});a(30758);var n=a(13526);const r={tabItem:"tabItem_bv57"};var s=a(86070);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:a,children:t})}},56551:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(30758),r=a(13526),s=a(50254),o=a(25557),l=a(11882),u=a(74755),i=a(44128),c=a(83902);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:a,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),v=(()=>{const e=i??b;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=a(98306);const v={tabList:"tabList_Gb2u",tabItem:"tabItem_pPvi"};var g=a(86070);function x(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},11100:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>l});var n=a(30758);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);