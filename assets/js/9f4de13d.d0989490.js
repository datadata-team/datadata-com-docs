"use strict";(self.webpackChunkdatadata_docs=self.webpackChunkdatadata_docs||[]).push([[9117],{35611:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var d=s(86070),l=s(11100);const r={title:"\u5168\u5c40\u51fd\u6570",sidebar_position:1},i=void 0,c={id:"query/dql/global",title:"\u5168\u5c40\u51fd\u6570",description:"\u5168\u5c40\u51fd\u6570",source:"@site/docs/03_query/02_dql/global.md",sourceDirName:"03_query/02_dql",slug:"/query/dql/global",permalink:"/datadata-com-docs/docs/query/dql/global",draft:!1,unlisted:!1,editUrl:"https://github.com/hungtcs/datadata-com-docs/tree/master/docs/03_query/02_dql/global.md",tags:[],version:"current",lastUpdatedBy:"ianzeng217",lastUpdatedAt:1735527523e3,sidebarPosition:1,frontMatter:{title:"\u5168\u5c40\u51fd\u6570",sidebar_position:1},sidebar:"docs",previous:{title:"DQL \u67e5\u8be2\u811a\u672c",permalink:"/datadata-com-docs/docs/query/dql/"},next:{title:"Series",permalink:"/datadata-com-docs/docs/query/dql/series"}},t={},h=[{value:"\u5168\u5c40\u51fd\u6570",id:"\u5168\u5c40\u51fd\u6570",level:2},{value:"<code>query</code>",id:"query",level:3},{value:"<code>fetch</code>",id:"fetch",level:3},{value:"\u53c2\u6570\u8bf4\u660e\uff1a",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd4\u56de\u503c\uff1a",id:"\u8fd4\u56de\u503c",level:3},{value:"<code>Series</code>",id:"series",level:3},{value:"<code>DataFrame</code> (alias <code>table</code>)",id:"dataframe-alias-table",level:3},{value:"<code>Timestamp</code>",id:"timestamp",level:3},{value:"\u5168\u5c40\u6a21\u5757",id:"\u5168\u5c40\u6a21\u5757",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u5168\u5c40\u51fd\u6570",children:"\u5168\u5c40\u51fd\u6570"}),"\n",(0,d.jsx)(n.h3,{id:"query",children:(0,d.jsx)(n.code,{children:"query"})}),"\n",(0,d.jsx)(n.p,{children:"\u6267\u884c SQL \u67e5\u8be2"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"query(sql, *args)\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"name"}),(0,d.jsx)(n.th,{children:"type"}),(0,d.jsx)(n.th,{children:"description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sql"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"SQL \u5b57\u7b26\u4e32"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"args"}),(0,d.jsx)(n.td,{children:"...args"}),(0,d.jsx)(n.td,{children:"SQL \u53c2\u6570\uff0c\u7528\u4e8e SQL \u63d2\u503c"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"fetch",children:(0,d.jsx)(n.code,{children:"fetch"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"fetch"})," \u51fd\u6570\u7528\u4e8e\u6267\u884c HTTP \u8bf7\u6c42\uff0c\u901a\u8fc7\u4e0d\u540c\u7684 HTTP \u65b9\u6cd5\uff08\u5982 ",(0,d.jsx)(n.code,{children:"GET"}),"\u3001",(0,d.jsx)(n.code,{children:"POST"}),"\u3001",(0,d.jsx)(n.code,{children:"PUT"}),"\u3001",(0,d.jsx)(n.code,{children:"PATCH"}),"\u3001",(0,d.jsx)(n.code,{children:"DELETE"})," \u7b49\uff09\u8bbf\u95ee\u6307\u5b9a\u7684 URL\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u4f20\u5165\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u4f53\u548c\u8d85\u65f6\u65f6\u95f4\uff0c\u5e76\u83b7\u53d6\u54cd\u5e94\u7684\u72b6\u6001\u7801\u3001\u54cd\u5e94\u5934\u548c\u54cd\u5e94\u4f53\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'fetch(url: str, method=Literal["GET", "PUT", "POST", "HEAD", "DELETE"], headers: Dict[str, str]=None, body: Any=None, timeout: int=30)\n'})}),"\n",(0,d.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"url"})," (str)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6c42\u7684\u76ee\u6807 URL\u3002"}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u793a\u4f8b"}),": ",(0,d.jsx)(n.code,{children:'"https://api.example.com/data"'})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"method"}),' (Literal["GET", "PUT", "POST", "HEAD", "DELETE", "PATCH"])']})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTTP \u65b9\u6cd5\uff0c\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"GET"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652f\u6301\u7684 HTTP \u65b9\u6cd5\u5305\u62ec\uff1a",(0,d.jsx)(n.code,{children:"GET"}),"\u3001",(0,d.jsx)(n.code,{children:"POST"}),"\u3001",(0,d.jsx)(n.code,{children:"PUT"}),"\u3001",(0,d.jsx)(n.code,{children:"PATCH"}),"\u3001",(0,d.jsx)(n.code,{children:"HEAD"})," \u548c ",(0,d.jsx)(n.code,{children:"DELETE"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"headers"})," (Dict[str, str], \u53ef\u9009)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTTP \u8bf7\u6c42\u5934\uff0c\u683c\u5f0f\u4e3a\u5b57\u5178\u3002\u5982\u679c\u6ca1\u6709\u7279\u6b8a\u8981\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,d.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u793a\u4f8b"}),": ",(0,d.jsx)(n.code,{children:'{"Content-Type": "application/json", "Authorization": "Bearer token"}'})]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"body"})," (Any, \u53ef\u9009)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["HTTP \u8bf7\u6c42\u7684\u8bf7\u6c42\u4f53\uff0c\u901a\u5e38\u5728 ",(0,d.jsx)(n.code,{children:"POST"}),"\u3001",(0,d.jsx)(n.code,{children:"PUT"})," \u548c ",(0,d.jsx)(n.code,{children:"PATCH"})," \u8bf7\u6c42\u4e2d\u4f7f\u7528\u3002\u9ed8\u8ba4\u4e3a ",(0,d.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u793a\u4f8b"}),":","\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["JSON \u5b57\u7b26\u4e32: ",(0,d.jsx)(n.code,{children:'{"name": "John", "age": 30}'})]}),"\n",(0,d.jsxs)(n.li,{children:["\u666e\u901a\u6587\u672c: ",(0,d.jsx)(n.code,{children:'"Hello World"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"timeout"})," (int, \u53ef\u9009)"]})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u8bf7\u6c42\u7684\u8d85\u65f6\u65f6\u95f4\uff08\u5355\u4f4d\uff1a\u6beb\u79d2\uff09\uff0c\u9ed8\u8ba4\u4e3a 30\uff08\u5373 30 \u79d2\uff09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,d.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"status"})," (int):"]})," HTTP \u54cd\u5e94\u72b6\u6001\u7801\uff0c\u4f8b\u5982 ",(0,d.jsx)(n.code,{children:"200"})," \u8868\u793a\u8bf7\u6c42\u6210\u529f\uff0c",(0,d.jsx)(n.code,{children:"404"})," \u8868\u793a\u8d44\u6e90\u672a\u627e\u5230\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"headers"})," (dict):"]})," HTTP \u54cd\u5e94\u5934\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsxs)(n.strong,{children:[(0,d.jsx)(n.code,{children:"body"})," (str | None):"]})," HTTP \u54cd\u5e94\u4f53\u7684\u5185\u5bb9\u3002\u5982\u679c\u6ca1\u6709\u54cd\u5e94\u4f53\uff0c\u5219\u4e3a ",(0,d.jsx)(n.code,{children:"None"}),"\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"series",children:(0,d.jsx)(n.code,{children:"Series"})}),"\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a Series\uff0cSeries \u8868\u793a\u4e00\u4e2a\u6570\u636e\u5217"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"Series([], dtype='string', name='string')\n"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"name"}),(0,d.jsx)(n.th,{children:"type"}),(0,d.jsx)(n.th,{children:"description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"list"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u5217\u8868"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dtype"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u7c7b\u578b"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"name"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"\u6570\u636e\u5217\u540d\u79f0"})]})]})]}),"\n",(0,d.jsxs)(n.h3,{id:"dataframe-alias-table",children:[(0,d.jsx)(n.code,{children:"DataFrame"})," (alias ",(0,d.jsx)(n.code,{children:"table"}),")"]}),"\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa DataFrame \uff0cDataFrame \u8868\u793a\u4e00\u4e2a\u6570\u636e\u8868\u683c\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:'DataFrame([\n  { "name": "a" },\n  { "name": "b" },\n  { "name": "c" },\n])\nDataFrame({"name": ["a", "b", "c"]})\n\n# use alias name\ntable({"name": ["a", "b", "c"]})\n'})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"name"}),(0,d.jsx)(n.th,{children:"type"}),(0,d.jsx)(n.th,{children:"description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"list|dict"}),(0,d.jsx)(n.td,{children:"\u6570\u636e"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"columns"}),(0,d.jsx)(n.td,{children:"list"}),(0,d.jsx)(n.td,{children:"\u6267\u884c\u5217\u540d\u79f0"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"timestamp",children:(0,d.jsx)(n.code,{children:"Timestamp"})}),"\n",(0,d.jsx)(n.p,{children:"Timestamp \u7528\u4e8e\u8868\u793a\u65f6\u95f4\u3001\u65e5\u671f\u3001\u65f6\u95f4\u6233\u7b49\u7c7b\u578b\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"Timestamp('11:12:13')\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u5168\u5c40\u6a21\u5757",children:"\u5168\u5c40\u6a21\u5757"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"math"}),"\n",(0,d.jsx)(n.li,{children:"time"}),"\n",(0,d.jsx)(n.li,{children:"json"}),"\n",(0,d.jsx)(n.li,{children:"assert"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},11100:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var d=s(30758);const l={},r=d.createContext(l);function i(e){const n=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);