"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[867],{94656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(86070),n=a(11100),s=a(56327),l=a(56551);const o={tags:[],draft:!1,title:"Javascript SDK",sidebar_label:"Javascript SDK",sidebar_position:2,last_update:{date:new Date("2024-01-01T00:00:00.000Z"),author:"Author"}},u=void 0,i={id:"sdks/javascript",title:"Javascript SDK",description:"Javascript SDK \u9002\u7528\u4e8e Browser \u548c NodeJS \u73af\u5883\u3002",source:"@site/development/sdks/javascript.mdx",sourceDirName:"sdks",slug:"/sdks/javascript",permalink:"/datadata-com-docs/development/sdks/javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/datadata-team/datadata-com-docs/tree/master/development/sdks/javascript.mdx",tags:[],version:"current",lastUpdatedBy:"Author",lastUpdatedAt:17040672e5,sidebarPosition:2,frontMatter:{tags:[],draft:!1,title:"Javascript SDK",sidebar_label:"Javascript SDK",sidebar_position:2,last_update:{date:"2024-01-01T00:00:00.000Z",author:"Author"}},sidebar:"development",previous:{title:"Go SDK",permalink:"/datadata-com-docs/development/sdks/golang"},next:{title:"\u4ecb\u7ecd",permalink:"/datadata-com-docs/development/embedded-components/introduction"}},c={},d=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Javascript SDK \u9002\u7528\u4e8e Browser \u548c NodeJS \u73af\u5883\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6dfb\u52a0 Javascript SDK \u5230\u60a8\u7684\u9879\u76ee\u4f9d\u8d56\u3002"}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(s.A,{value:"npm",label:"npm",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npm install @datadata/sdk-javascript\n"})})}),(0,r.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"pnpm add @datadata/sdk-javascript\n"})})}),(0,r.jsx)(s.A,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"yarn add @datadata/sdk-javascript\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},56327:(e,t,a)=>{a.d(t,{A:()=>l});a(30758);var r=a(13526);const n={tabItem:"tabItem_bv57"};var s=a(86070);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,l),hidden:a,children:t})}},56551:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(30758),n=a(13526),s=a(50254),l=a(25557),o=a(11882),u=a(74755),i=a(44128),c=a(83902);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=h({queryString:a,groupId:n}),[b,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=i??b;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&u(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(98306);const f={tabList:"tabList_Gb2u",tabItem:"tabItem_pPvi"};var g=a(86070);function x(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=o[a].value;n!==r&&(i(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function k(e){const t=(0,v.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},11100:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var r=a(30758);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);