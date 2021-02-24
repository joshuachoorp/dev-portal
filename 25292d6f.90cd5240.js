(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),c=a(6),r=(a(0),a(283)),l=a(287),b=a(288),o={id:"api-blockchain-get-tx-block",title:"GetTxBlock"},i={id:"apis/api-blockchain-get-tx-block",isDocsHomePage:!1,title:"GetTxBlock",description:"---",source:"@site/docs/apis/api-blockchain-get-tx-block.mdx",permalink:"/docs/apis/api-blockchain-get-tx-block",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/apis/api-blockchain-get-tx-block.mdx",sidebar:"APIsSideBar",previous:{title:"GetTransactionRate",permalink:"/docs/apis/api-blockchain-get-tx-rate"},next:{title:"GetTxBlockRate",permalink:"/docs/apis/api-blockchain-get-tx-block-rate"}},s=[{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]},{value:"HTTP Request",id:"http-request",children:[]},{value:"Arguments",id:"arguments",children:[]}],p={rightToc:s};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"Returns the details of a specified Transaction block."),Object(r.b)("h3",{id:"example-request"},"Example Request"),Object(r.b)(l.a,{defaultValue:"cURL",values:[{label:"cURL",value:"cURL"},{label:"node.js",value:"node.js"},{label:"java",value:"java"},{label:"python",value:"python"},{label:"go",value:"go"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"cURL",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl -d \'{\n    "id": "1",\n    "jsonrpc": "2.0",\n    "method": "GetTxBlock",\n    "params": ["1002353"]\n}\' -H "Content-Type: application/json" -X POST "https://api.zilliqa.com/"\n'))),Object(r.b)(b.a,{value:"node.js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const txBlock = await zilliqa.blockchain.getTxBlock("40");\nconsole.log(txBlock.result);\n'))),Object(r.b)(b.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class App {\n    public static void main(String[] args) throws IOException {\n        HttpProvider client = new HttpProvider("https://api.zilliqa.com/");\n        Rep<TxBlock> txBlock = client.getTxBlock("40");\n        System.out.println(new Gson().toJson(txBlock));\n    }\n}\n'))),Object(r.b)(b.a,{value:"python",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'from pyzil.zilliqa import chain\nchain.set_active_chain(chain.MainNet)\nprint(chain.active_chain.api.GetTxBlock("40"))\n'))),Object(r.b)(b.a,{value:"go",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'func GetTxBlock(t *testing.T) {\n    provider := NewProvider("https://api.zilliqa.com/")\n    response := provider.GetTxBlock("40")\n    result, _ := json.Marshal(response)\n    fmt.Println(string(result))\n}\n')))),Object(r.b)("h3",{id:"example-response"},"Example Response"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"  From Zilliqa ",Object(r.b)("inlineCode",{parentName:"p"},"V7.2.0")," onwards, an additional ",Object(r.b)("inlineCode",{parentName:"p"},"NumPages")," field is included in the ",Object(r.b)("inlineCode",{parentName:"p"},"header")," response section.\nThis field is used by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/apis/api-transaction-get-txs-for-txblock-ex"}),"GetTransactionsForTxBlockEx")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/apis/api-transaction-get-txbodies-for-txblock-ex"}),"GetTxnBodiesForTxBlockEx"),"."))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "body": {\n      "BlockHash": "53a24881823dd5f2a3dfda5902d1b79710e2bec5477ed3aa7325d74e30436b58",\n      "HeaderSign": "8E0C73945CC2282173CF8CF44D7EB55E5DAD9B2D6D3437C6AC09DE8CF0D6B698575E535168AA898B6B3A3107603BDFC4BC671A4621E77C9004369FC3513F53A0",\n      "MicroBlockInfos": [\n        {\n          "MicroBlockHash": "ebadc2d6e80b749e6e322ae54467d516618ea79d1ae495f26f3592c70b4de71a",\n          "MicroBlockShardId": 0,\n          "MicroBlockTxnRootHash": "165049b84c5f4499ce781aab63cba06aa31ed4e1b556f0aac643f01eb5814da4"\n        },\n        {\n          "MicroBlockHash": "7111f32a526a381ecb3492e21a382f2dc5ad10c346340aaae3addd1a349cc559",\n          "MicroBlockShardId": 1,\n          "MicroBlockTxnRootHash": "640a7019993fcdaec2bfd10b50f5f9faea92920a1a4c0cb931ae56e061f983d9"\n        },\n        {\n          "MicroBlockHash": "1a914f52aaef51fa3d585c666e56ae55c2dc5e3b8c759c66d1b79b211b783d0e",\n          "MicroBlockShardId": 2,\n          "MicroBlockTxnRootHash": "aea9eafc983f75947ef63d0aedd14c0c138025cbbaa5934f3ef327b2116bfd68"\n        },\n        {\n          "MicroBlockHash": "cf095207f2f3cece2bc21f172022e2e3473c8a9279ba67a4d9bd1e352890f496",\n          "MicroBlockShardId": 3,\n          "MicroBlockTxnRootHash": "d97261b9c32ca9d1cfc8431a64523c9e3d26beff7e5265c5d431d5a41b416e49"\n        }\n      ]\n    },\n    "header": {\n      "BlockNum": "1002353",\n      "DSBlockNum": "10024",\n      "GasLimit": "650000",\n      "GasUsed": "25517",\n      "MbInfoHash": "b2a862649507a9d86b21246b1538aa237c75f65cf7ef9a512e03ba39d0e62933",\n      "MinerPubKey": "0x02134CC19B594B1571916AABBA4475026D1B2021C19045CB2065E0D3B12706768E",\n      "NumMicroBlocks": 4,\n      "NumPages": 5,\n      "NumTxns": 10022,\n      "PrevBlockHash": "18426f28438c500dd8b424f7923844290f4f082d43e84262ce629eebce68b82c",\n      "Rewards": "0",\n      "StateDeltaHash": "9e2c6b2b542219e421792892e8d42923f30fd3e4d4c55369feb89e3979b5a3a7",\n      "StateRootHash": "57710511d91f7ec765c264babd53d6b607b320167029cc88c477fafd78c14632",\n      "Timestamp": "1612477810820092",\n      "TxnFees": "51138500000000",\n      "Version": 1\n    }\n  }\n}\n')),Object(r.b)("h3",{id:"http-request"},"HTTP Request"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Chain(s)"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"URL(s)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Zilliqa mainnet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://api.zilliqa.com/"}),"https://api.zilliqa.com/"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Developer testnet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://dev-api.zilliqa.com/"}),"https://dev-api.zilliqa.com/"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Local testnet")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"http://localhost:4201/")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Isolated server")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://zilliqa-isolated-server.zilliqa.com/"}),"https://zilliqa-isolated-server.zilliqa.com/"))))),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"1"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"jsonrpc")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"2.0"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"method")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},'"GetTxBlock"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"params")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Specifed TX block number to return. Example: ",Object(r.b)("inlineCode",{parentName:"td"},'"1002353"'))))))}d.isMDXComponent=!0},283:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),s=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?c.a.createElement(m,b(b({ref:t},i),{},{components:a})):c.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<r;i++)l[i]=a[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},284:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},285:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=c},286:function(e,t,a){"use strict";var n=a(0),c=a(285);t.a=function(){return Object(n.useContext)(c.a)}},287:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(286),l=a(284),b=a(92),o=a.n(b);const i=37,s=39;t.a=function(e){const{block:t,children:a,defaultValue:b,values:p,groupId:d}=e,{tabGroupChoices:u,setTabGroupChoices:m}=Object(r.a)(),[j,O]=Object(n.useState)(b);if(null!=d){const e=u[d];null!=e&&e!==j&&p.some(t=>t.value===e)&&O(e)}const f=e=>{O(e),null!=d&&m(d,e)},h=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===e,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case s:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case i:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===j)[0]))}},288:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,e.children)}}}]);