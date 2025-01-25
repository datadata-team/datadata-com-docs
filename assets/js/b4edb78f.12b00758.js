"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[2409],{3173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(86070),r=n(11100),s=n(56327),d=n(56551);const l={tags:[],draft:!1,title:"\u5d4c\u5165\u7f16\u8f91\u5668",sidebar_label:"\u5d4c\u5165\u7f16\u8f91\u5668",sidebar_position:3,last_update:{date:new Date("2024-03-04T00:00:00.000Z"),author:"hungtcs"}},o=void 0,i={id:"embedded-components/embedded-editor",title:"\u5d4c\u5165\u7f16\u8f91\u5668",description:"\u5d4c\u5165\u7f16\u8f91\u5668\u7ec4\u4ef6\u53ef\u4ee5\u8ba9\u60a8\u65b9\u4fbf\u7684\u96c6\u6210 Datadata \u5e73\u53f0\u7684\u6838\u5fc3\u529f\u80fd\u3002",source:"@site/development/embedded-components/embedded-editor.mdx",sourceDirName:"embedded-components",slug:"/embedded-components/embedded-editor",permalink:"/datadata-com-docs/development/embedded-components/embedded-editor",draft:!1,unlisted:!1,editUrl:"https://github.com/datadata-team/datadata-com-docs/tree/master/development/embedded-components/embedded-editor.mdx",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:17095104e5,sidebarPosition:3,frontMatter:{tags:[],draft:!1,title:"\u5d4c\u5165\u7f16\u8f91\u5668",sidebar_label:"\u5d4c\u5165\u7f16\u8f91\u5668",sidebar_position:3,last_update:{date:"2024-03-04T00:00:00.000Z",author:"hungtcs"}},sidebar:"development",previous:{title:"\u5feb\u901f\u96c6\u6210",permalink:"/datadata-com-docs/development/embedded-components/quickstart"},next:{title:"\u5d4c\u5165\u67e5\u770b\u7ec4\u4ef6",permalink:"/datadata-com-docs/development/embedded-components/embedded-viewer"}},c={},u=[{value:"Web Components",id:"web-components",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Default View",id:"default-view",level:3},{value:"Events",id:"events",level:2},{value:"\u6846\u67b6\u96c6\u6210",id:"\u6846\u67b6\u96c6\u6210",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\u5d4c\u5165\u7f16\u8f91\u5668\u7ec4\u4ef6\u53ef\u4ee5\u8ba9\u60a8\u65b9\u4fbf\u7684\u96c6\u6210 Datadata \u5e73\u53f0\u7684\u6838\u5fc3\u529f\u80fd\u3002"}),"\n",(0,a.jsx)(t.h2,{id:"web-components",children:"Web Components"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<datadata-embedded-editor api-token="<your-token>" default-view="chart:new">\n  <div>loading...</div>\n</datadata-embedded-editor>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Attribute"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"theme"}),(0,a.jsxs)(t.td,{children:["\u53ef\u9009\uff0c\u6307\u5b9a\u914d\u7f6e\u65b9\u6848\uff0c\u7528\u6765\u9002\u914d\u7f51\u7ad9\u7684\u989c\u8272\u6a21\u5f0f\uff0c\u503c\u6709 ",(0,a.jsx)(t.code,{children:"light"}),"\u3001",(0,a.jsx)(t.code,{children:"dark"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"language"}),(0,a.jsxs)(t.td,{children:["\u53ef\u9009\uff0c\u6307\u5b9a\u7ec4\u4ef6\u7684\u8bed\u8a00\uff0c\u503c\u6709 ",(0,a.jsx)(t.code,{children:"zh-CN"}),"\u3001",(0,a.jsx)(t.code,{children:"en-US"})]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"api-token *"}),(0,a.jsx)(t.td,{children:"\u5fc5\u987b\uff0c\u6267\u884c API-Token"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"default-view"}),(0,a.jsxs)(t.td,{children:["\u53ef\u9009\uff0c\u6307\u5b9a\u9ed8\u8ba4\u89c6\u56fe\u3002\u89c1",(0,a.jsx)(t.a,{href:"#default-view",children:"Default View"}),"\u90e8\u5206"]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"upload-tables"}),(0,a.jsx)(t.td,{children:"\u53ef\u9009\uff0c\u662f\u5426\u5f00\u542f\u4e0a\u4f20\u529f\u80fd\u3002\u53ef\u4ee5\u7701\u7565\u503c"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"enable-sharing"}),(0,a.jsx)(t.td,{children:"\u53ef\u9009\uff0c\u662f\u5426\u5f00\u542f\u5206\u4eab\u529f\u80fd\u3002\u89c1 \u5206\u4eab\u4e8b\u4ef6\u3002"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"enable-list-button"}),(0,a.jsx)(t.td,{children:"\u53ef\u9009\uff0c\u662f\u5426\u663e\u793a\u5217\u8868\u6309\u94ae"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"default-view",children:"Default View"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"default-view"})," \u5c5e\u6027\u53ef\u4ee5\u6307\u5b9a\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u89c6\u56fe\uff0c\u53ef\u9009\u7684\u503c\u6709\uff1a"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"list:queries"})," \u9ed8\u8ba4\u663e\u793a Chart \u5217\u8868"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"list:uploads"})," \u9ed8\u8ba4\u663e\u793a\u4e0a\u4f20\u5217\u8868"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"chart:new"})," \u9ed8\u8ba4\u663e\u793a\u65b0\u5efa\u89c6\u56fe"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"chart:<query-id>"})," \u9ed8\u8ba4\u663e\u793a\u6307\u5b9a Chart \u7684\u7f16\u8f91\u89c6\u56fe"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Event Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"sharechart"}),(0,a.jsx)(t.td,{children:"\u5206\u4eab\u4e8b\u4ef6\uff0c\u5728\u7528\u6237\u70b9\u51fb\u5206\u4eab\u6309\u94ae\u540e\u89e6\u53d1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"savechart"}),(0,a.jsx)(t.td,{children:"\u4fdd\u5b58\u4e8b\u4ef6\uff0c\u5728 Chart \u88ab\u4fdd\u5b58\u540e\u89e6\u53d1"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u6846\u67b6\u96c6\u6210",children:"\u6846\u67b6\u96c6\u6210"}),"\n",(0,a.jsx)(t.p,{children:"Web-Components \u53ef\u4ee5\u652f\u6301\u4efb\u4f55\u524d\u6bb5\u6846\u67b6\uff0c\u5176\u4ed6\u6846\u67b6\u96c6\u6210\u53c2\u8003\u5b98\u65b9\u7684\u4f7f\u7528 Web-Components \u6d41\u7a0b\u5373\u53ef\u3002"}),"\n",(0,a.jsxs)(d.A,{children:[(0,a.jsx)(s.A,{value:"react",label:"React",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { forwardRef, useEffect, useLayoutEffect, useState, type HTMLAttributes, type PropsWithChildren } from \"react\";\n\nexport type DatadataEmbeddedEditorProps = HTMLAttributes<HTMLElement> &\n  PropsWithChildren<{\n    theme?: 'dark' | 'light';\n    queryId: string;\n    apiToken: string;\n    language?: 'zh-CN' | 'en-US';\n    defaultView?: string;\n    uploadTables?: true | string;\n    enableSharing?: boolean;\n    enableListButton?: boolean;\n    onSaveChart?: (chart: Chart) => void;\n    onShareChart?: (chart: Chart) => void;\n  }>;\n\nexport const DatadataEmbeddedEditor = forwardRef<HTMLElement, DatadataEmbeddedEditorProps>((props, ref) => {\n  const {\n    theme, queryId, apiToken, language, defaultView, uploadTables, enableSharing, enableListButton,\n    onSaveChart, onShareChart,\n    children, ...htmlProps,\n  } = props;\n\n  const [hostElement, setHostElement] = useState<HTMLElement>(null);\n\n  useLayoutEffect(() => {\n    // import(/* webpackIgnore: true */ \"https://www.datadata.cn/web-components/embedded-editor/index.mjs\");\n    loadDatadataComponents();\n  }, []);\n\n  useEffect(() => {\n    if (typeof ref === \"function\") {\n      ref(hostElement);\n    } else if (ref) {\n      ref.current = hostElement;\n    }\n  }, [hostElement]);\n\n  useEffect(() => {\n    if (!hostElement) {\n      return;\n    }\n    const handleSaveChart = (event) => {\n      const chart = (event as CustomEvent).detail.chart;\n      onSaveChart?.(chart);\n    };\n    const handleShareChart = (event) => {\n      const chart = (event as CustomEvent).detail.chart;\n      onShareChart?.(chart);\n    };\n    hostElement.addEventListener('savechart', handleSaveChart);\n    hostElement.addEventListener('sharechart', handleShareChart);\n    return () => {\n      hostElement.removeEventListener('savechart', handleSaveChart);\n      hostElement.removeEventListener('sharechart', handleShareChart);\n    };\n  }, [hostElement, onSaveChart, onShareChart])\n\n  return (\n    <datadata-embedded-editor\n      {...htmlProps}\n      ref={setHostElement}\n      theme={theme}\n      query-id={queryId}\n      language={language}\n      api-token={apiToken}\n      default-view={defaultView}\n      upload-tables={uploadTables === true ? 'Uploads' : uploadTables}\n      enable-sharing={enableSharing}\n      enable-list-button={enableListButton}\n    >\n      {children}\n    </datadata-embedded-editor>\n  );\n});\n\nasync function loadDatadataComponents() {\n  await eval(`import(\"https://www.datadata.cn/web-components/embedded-editor/index.mjs\")`);\n}\n\ndeclare global {\n  namespace React {\n    namespace JSX {\n      interface IntrinsicElements {\n        \"datadata-embedded-editor\": any;\n      }\n    }\n  }\n}\n"})})}),(0,a.jsx)(s.A,{value:"vue",label:"Vue",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"// TODO\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},56327:(e,t,n)=>{n.d(t,{A:()=>d});n(30758);var a=n(13526);const r={tabItem:"tabItem_bv57"};var s=n(86070);function d(e){let{children:t,hidden:n,className:d}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,d),hidden:n,children:t})}},56551:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(30758),r=n(13526),s=n(50254),d=n(25557),l=n(11882),o=n(74755),i=n(44128),c=n(83902);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,d.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[d,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=p({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=i??b;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:d,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=n(98306);const v={tabList:"tabList_Gb2u",tabItem:"tabItem_pPvi"};var x=n(86070);function j(e){let{className:t,block:n,selectedValue:a,selectValue:d,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(i(t),d(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=d.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:d.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function E(e){const t=(0,f.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(t))}},11100:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var a=n(30758);const r={},s=a.createContext(r);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);