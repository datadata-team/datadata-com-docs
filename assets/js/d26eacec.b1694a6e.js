"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[4302],{15930:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>_});var a=t(86070),n=t(11100),s=t(26252);const o={tags:[],draft:!1,title:"\u5feb\u901f\u96c6\u6210",sidebar_label:"\u5feb\u901f\u96c6\u6210",sidebar_position:2,last_update:{date:new Date("2024-03-04T00:00:00.000Z"),author:"hungtcs"}},r=void 0,c={id:"embedded-components/quickstart",title:"\u5feb\u901f\u96c6\u6210",description:"\u901a\u8fc7\u5f15\u7528\u4e00\u4e2a ESModule \u6a21\u5757\uff0c\u5373\u53ef\u4f7f\u7528 Datadata Component\u3002",source:"@site/development/embedded-components/quickstart.mdx",sourceDirName:"embedded-components",slug:"/embedded-components/quickstart",permalink:"/datadata-com-docs/development/embedded-components/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-com-docs/tree/master/development/embedded-components/quickstart.mdx",tags:[],version:"current",lastUpdatedBy:"hungtcs",lastUpdatedAt:17095104e5,sidebarPosition:2,frontMatter:{tags:[],draft:!1,title:"\u5feb\u901f\u96c6\u6210",sidebar_label:"\u5feb\u901f\u96c6\u6210",sidebar_position:2,last_update:{date:"2024-03-04T00:00:00.000Z",author:"hungtcs"}},sidebar:"development",previous:{title:"\u4ecb\u7ecd",permalink:"/datadata-com-docs/development/embedded-components/introduction"},next:{title:"\u5d4c\u5165\u7f16\u8f91\u5668",permalink:"/datadata-com-docs/development/embedded-components/embedded-editor"}},i={},_=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function l(e){const d={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.p,{children:["\u901a\u8fc7\u5f15\u7528\u4e00\u4e2a ",(0,a.jsx)(d.a,{href:"https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules",children:"ESModule"})," \u6a21\u5757\uff0c\u5373\u53ef\u4f7f\u7528 Datadata Component\u3002"]}),"\n",(0,a.jsx)(d.p,{children:"\u76ee\u524d\uff0c\u6709 4 \u79cd\u53ef\u7528\u7684\u5f15\u7528\u65b9\u6cd5\uff0c\u5206\u522b\u662f\uff1a"}),"\n",(0,a.jsxs)(d.ol,{children:["\n",(0,a.jsxs)(d.li,{children:["\n",(0,a.jsxs)(d.p,{children:["\u76f4\u63a5\u5728\u60a8\u7684 ",(0,a.jsx)(d.code,{children:"index.html"})," \u4e2d\u5f15\u7528\uff0c\u8fd9\u79cd\u65b9\u5f0f\u6700\u7b80\u5355\uff0c\u60a8\u4e0d\u9700\u8981\u7f16\u5199\u4efb\u4f55 js \u4ee3\u7801\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-html",children:'<script\n  src="https://www.datadata.cn/web-components/embedded-editor/index.mjs"\n  type="module"><\/script>\n'})}),"\n"]}),"\n",(0,a.jsxs)(d.li,{children:["\n",(0,a.jsxs)(d.p,{children:["\u5728\u60a8\u7684 js, ts \u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u7528\uff0c\u5982 ",(0,a.jsx)(d.code,{children:"(main|index).(js|ts)"})," \u4e2d\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-js",children:'import "https://www.datadata.cn/web-components/embedded-editor/index.mjs";\n'})}),"\n",(0,a.jsx)(d.admonition,{type:"warning",children:(0,a.jsx)(d.p,{children:"\u8bf7\u786e\u4fdd\u60a8\u7684\u73af\u5883\u652f\u6301 ESModule \uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u6253\u5305\u5de5\u5177\u5de5\u5177\u8f93\u51fa\u7684\u4e0d\u662f ESModule \u683c\u5f0f\uff0c\u5219\u8be5\u65b9\u6cd5\u53ef\u80fd\u4f1a\u5931\u6548\u3002\n\u53e6\u5916\u8bf7\u786e\u4fdd\u60a8\u7684\u6253\u5305\u5de5\u5177\u4e0d\u8f6c\u6362\u6b64\u4ee3\u7801\uff0c\u4e0d\u8981\u5c06\u8fdc\u7a0b\u6587\u4ef6\u76f4\u63a5\u6253\u5305\u5230\u60a8\u7684\u4ee3\u7801\u4e2d\u3002"})}),"\n"]}),"\n",(0,a.jsxs)(d.li,{children:["\n",(0,a.jsx)(d.p,{children:"ESModule \u63d0\u4f9b\u4e86\u975e\u5e38\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5728\u4efb\u4f55\u65f6\u5019\u52a8\u6001\u52a0\u8f7d\u8be5\u8d44\u6e90\uff0c\u5982\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-js",children:"async function loadDatadataComponents() {\n  await import('https://www.datadata.cn/web-components/embedded-editor/index.mjs')\n}\n"})}),"\n",(0,a.jsxs)(d.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528 Webpack \u6253\u5305\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u6dfb\u52a0 ",(0,a.jsx)(d.code,{children:"/* webpackIgnore: true */"})," \u6ce8\u89e3\u786e\u4fdd\u4ece\u8fdc\u7a0b\u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u800c\u4e0d\u662f\u6253\u5305\u5230\u60a8\u7684\u4ee3\u7801\u4e2d\uff0c\u8fd9\u975e\u5e38\u91cd\u8981\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-js",children:"async function loadDatadataComponents() {\n  await import(/* webpackIgnore: true */'https://www.datadata.cn/web-components/embedded-editor/index.mjs')\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(d.li,{children:["\n",(0,a.jsx)(d.p,{children:"\u5982\u679c\u4e0a\u8ff0\u65b9\u6cd5\u5bf9\u60a8\u6765\u8bf4\u5747\u4e0d\u9002\u7528\uff0c\u6216\u8005\u60a8\u7684\u6253\u5305\u5de5\u5177\u65e0\u6cd5\u5904\u7406\u5f15\u7528\u8fdc\u7a0b URL \uff0c\u6211\u4eec\u8fd8\u6709\u4e00\u79cd\u4e0d\u63a8\u8350\uff0c\u4f46\u662f\u7684\u786e\u6709\u6548\u7684\u65b9\u6cd5\u3002"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-js",children:'async function loadDatadataComponents() {\n  await eval(`import("https://www.datadata.cn/web-components/embedded-editor/index.mjs");`);\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(d.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,a.jsx)(d.p,{children:"\u73b0\u5728\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u96c6\u6210\u67e5\u770b\u5668\u7684\u793a\u4f8b\u3002"}),"\n",(0,a.jsx)(d.p,{children:"\u9996\u5148\uff0c\u6211\u4eec\u5728\u5e73\u53f0\u4e0a\uff0c\u4f7f\u7528\u4e0b\u9762\u7684 SQL \u8bed\u53e5\u67e5\u8be2\u51fa\u6c7d\u6cb9\u548c\u67f4\u6cb9\u7684\u5386\u53f2\u4ef7\u683c\uff0c\u5e76\u4f7f\u7528\u53ef\u89c6\u5316\u9009\u9879\uff0c\u6e32\u67d3\u4e3a\u6298\u7ebf\u56fe\u3002"}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-sql",children:"select * from futures_data.oilprice order by time desc\n"})}),"\n",(0,a.jsxs)(d.p,{children:["\u63a5\u7740\uff0c\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,a.jsx)(d.code,{children:"index.html"})," \u6587\u4ef6\uff0c\u586b\u5165\u4e00\u4e0b\u5185\u5bb9\uff0c\u6ce8\u610f\u66ff\u6362 query-id \u548c api-token \u4e3a\u60a8\u7684\u503c\u3002"]}),"\n",(0,a.jsx)(d.pre,{children:(0,a.jsx)(d.code,{className:"language-html",children:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Chart Viewer Demo</title>\n    <script src="https://www.datadata.cn/web-components/embedded-editor/index.mjs" type="module"><\/script>\n  </head>\n  <body>\n    <datadata-embedded-viewer\n      style="height: 500px; border: 1px solid lightgray; overflow: hidden; resize: both"\n      query-id="<query-id>"\n      api-token="<your-api-token>"\n    ></datadata-embedded-viewer>\n  </body>\n</html>\n'})}),"\n",(0,a.jsx)(d.p,{children:"\u5c06\u6b64\u6587\u4ef6\u653e\u5230\u9759\u6001\u8d44\u6e90\u670d\u52a1\u5668\u4e0a\uff0c\u5e76\u5728\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u770b\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u5185\u5bb9\uff1a"}),"\n",(0,a.jsx)(s.h,{style:{height:"500px",border:"1px solid lightgray",marginBottom:"16px"},queryId:"e7a50f9a-04e6-4ad8-899d-59e524b06810",region:"cn"}),"\n",(0,a.jsx)(d.admonition,{type:"tip",children:(0,a.jsxs)(d.p,{children:["\u66f4\u591a\u5173\u4e8e datadata-embedded-viewer \u7ec4\u4ef6\u7684\u914d\u7f6e\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,a.jsx)(d.a,{href:"./embedded-viewer",children:"\u5d4c\u5165\u67e5\u770b\u7ec4\u4ef6"})," \u7ae0\u8282\u3002"]})})]})}function m(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,a.jsx)(d,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},26252:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>DatadataEmbeddedViewer});var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(95723),_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24555),_site_src_config__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(59712),clsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13526),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(30758),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(86070);const DatadataEmbeddedViewer=(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(((e,d)=>{const{queryId:t,children:a,bordered:n,...s}=e,{colorMode:o}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__.G)(),{i18n:{currentLocale:r}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_0__.A)(),[c,i]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)((()=>{loadDatadataComponents()}),[]),(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((()=>{"function"==typeof d?d(c):d&&(d.current=c)}),[c,d]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("datadata-embedded-viewer",{...s,ref:i,class:(0,clsx__WEBPACK_IMPORTED_MODULE_5__.A)("mb-4",s.className,{"border-none":!n,"border border-solid border-gray-200 dark:border-gray-800":n}),theme:o,"query-id":t,language:r,"api-token":_site_src_config__WEBPACK_IMPORTED_MODULE_1__.Ow,children:a})}));async function loadDatadataComponents(){await eval(`import("${_site_src_config__WEBPACK_IMPORTED_MODULE_1__.l5}");`)}DatadataEmbeddedViewer.displayName="DatadataEmbeddedViewer"},59712:(e,d,t)=>{t.d(d,{Ow:()=>n,l5:()=>s});const a="cn",n={cn:"4eca924e75873b3aa27905f681db108a.0a43e525f70c337f8ba8efc5beaddd1511f99805f6eb05a09b74a65bc9fd212deb786a43ff685c2ee2b259e025fcba9d27ed95d8d0a1b755963f24ec274db817fc3c0361a46b0b8b79faf22ada84d161",global:"4eca924e75873b3aa27905f681db108a.04e22cadb6742e20bfe2d7f010407f9457efcc1bd5533886acdffe60331ae1c19b827b20aed2dd7459027ee378636d03ac4a3b68e64a8ed3688dfdf2a4b26cbbd068be1ebc8e142b906836696bf404ee"}[a],s={cn:"https://www.datadata.cn/web-components/embedded-editor/index.mjs",global:"https://www.datadata.com/web-components/embedded-editor/index.mjs"}[a]},11100:(e,d,t)=>{t.d(d,{R:()=>o,x:()=>r});var a=t(30758);const n={},s=a.createContext(n);function o(e){const d=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:d},e.children)}}}]);