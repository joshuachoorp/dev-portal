(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),a=(n(0),n(199)),o=n(201),c={id:"core-difficulty-adjustment",title:"Difficulty Adjustment",keywords:["core","difficulty","adjustment"],description:"Core protocol design - difficulty adjustment."},l={id:"contributors/core-difficulty-adjustment",isDocsHomePage:!1,title:"Difficulty Adjustment",description:"Core protocol design - difficulty adjustment.",source:"@site/docs/contributors/core-difficulty-adjustment.mdx",permalink:"/docs/contributors/core-difficulty-adjustment",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-difficulty-adjustment.mdx",sidebar:"ContributorsSidebar",previous:{title:"PoW Algorithm",permalink:"/docs/contributors/core-pow"},next:{title:"Proof of Reputation",permalink:"/docs/contributors/core-por"}},u=[{value:"Adjustment Procedure",id:"adjustment-procedure",children:[]},{value:"Adjustment Formula and Parameters",id:"adjustment-formula-and-parameters",children:[]},{value:"Difficulty Subdivision",id:"difficulty-subdivision",children:[]},{value:"References",id:"references",children:[]}],s={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"Zilliqa has a dynamic difficulty level adjustment mechanism. The goal of this mechanism is to adjust the difficulty level according to the number of PoW submissions received."),Object(a.b)("p",null,"When the network receives a low number of PoW submissions, the mechanism will reduce the difficulty so that more nodes can join and maintain the network. On the other hand, when the network receives a high number of PoW submissions, the mechanism will increase the difficulty level, making it harder for Sybil attacks to be executed."),Object(a.b)("h2",{id:"adjustment-procedure"},"Adjustment Procedure"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"When we bootstrap the system, every node reads the initial difficulty level from ",Object(a.b)("inlineCode",{parentName:"li"},"constants.xml"),". After that, the nodes will update the difficulty level at the first transaction epoch of each DS epoch"),Object(a.b)("li",{parentName:"ol"},"At the beginning of each DS epoch, every DS node receives PoW submissions and records them. When the DS leader proposes the next DS block, it calls ",Object(a.b)("inlineCode",{parentName:"li"},"CalculateNewDifficulty()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"CalculateNewDSDifficulty()")," to calculate the new difficulty levels. These difficulty levels are placed in the ",Object(a.b)("inlineCode",{parentName:"li"},"m_dsDifficulty")," and ",Object(a.b)("inlineCode",{parentName:"li"},"m_difficulty")," fields in the DS block. Finally, the DS leader announces the DS block to start the consensus"),Object(a.b)("li",{parentName:"ol"},"The DS backup nodes receive the announcement, and calculate the new difficulty by similarly calling ",Object(a.b)("inlineCode",{parentName:"li"},"CalculateNewDifficulty()")," and ",Object(a.b)("inlineCode",{parentName:"li"},"CalculateNewDSDifficulty()")," then comparing the results with those proposed by the DS leader"),Object(a.b)("li",{parentName:"ol"},"Once the DS committee completes consensus over the DS block containing the new difficulty level, the committee broadcasts the block to the shards. The shard nodes accept the new difficulty and use it to do PoW for the next DS epoch"),Object(a.b)("li",{parentName:"ol"},"New nodes that are not part of the network can get the latest difficulty from the lookup nodes by retrieving the latest DS block")),Object(a.b)("h2",{id:"adjustment-formula-and-parameters"},"Adjustment Formula and Parameters"),Object(a.b)("p",null,"There are 4 parameters in ",Object(a.b)("inlineCode",{parentName:"p"},"constants.xml")," that are used to calculate the difficulty:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"POW_CHANGE_TO_ADJ_DIFF")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"POW_CHANGE_TO_ADJ_DS_DIFF")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"EXPECTED_SHARD_NODE_NUM")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"NUM_DS_ELECTION"))),Object(a.b)("p",null,"Additionally, there are two dynamic parameters that are used to calculate the difficulty:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The number of shard PoW submissions"),Object(a.b)("li",{parentName:"ul"},"The number of DS PoW submissions")),Object(a.b)("p",null,"The basic formulas used to calculate the new difficulty are:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-C++"}),"New shard difficulty = Current Difficulty + (Shard PoW Submissions - EXPECTED_SHARD_NODE_NUM) / POW_CHANGE_TO_ADJ_DIFF\nNew DS difficulty = Current DS Difficulty + (DS PoW Submissions - NUM_DS_ELECTION) / POW_CHANGE_TO_ADJ_DS_DIFF\n")),Object(a.b)("p",null,"The rationale of the formulas is when there are more PoW submissions than the expected number, increase the difficulty. When there are less PoW submissions than the expected number, decrease the difficulty."),Object(a.b)("h2",{id:"difficulty-subdivision"},"Difficulty Subdivision"),Object(a.b)("p",null,"When the difficulty increases by one, the required hash power to finish PoW will be doubled. When the difficulty is already very high, adjusting the difficulty by doubling the hash power causes a lot of miners to fail to do PoW. This in turn affects the stability and throughput of the blockchain."),Object(a.b)("p",null,"To address this situation, we added a threshold to ",Object(a.b)("strong",{parentName:"p"},"subdivide")," the difficulty. There are two constant parameters ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START")," and ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED")," defined for this purpose. When the current difficulty exceeds ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START"),", every difficulty level will subdivide to ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED")," sub-levels. The required hash power increase will only be by ",Object(a.b)("inlineCode",{parentName:"p"},"1/POW_BOUNDARY_N_DIVIDED")," of the current hash power. This makes the hash power increase more smoothly in increments."),Object(a.b)("p",null,"The rationale behind this is we changed the method to calculate the target boundary from ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START"),". When the difficulty is below ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START"),", we put one more ",Object(a.b)("inlineCode",{parentName:"p"},"0")," at the MSB of the target boundary every time we increase the difficulty. On the other hand, if the difficulty exceeds ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START"),", we put ",Object(a.b)("inlineCode",{parentName:"p"},"0"),"s at the LSB of the target boundary."),Object(a.b)("p",null,"This process is implemented in the function ",Object(a.b)("inlineCode",{parentName:"p"},"DifficultyLevelInIntDevided()"),"."),Object(a.b)("p",null,"The graphs below illustrate the benchmarks of the hash power required if ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START")," is 32 and ",Object(a.b)("inlineCode",{parentName:"p"},"POW_BOUNDARY_N_DIVIDED_START")," is 1, 2, 4, 6, and 8."),Object(a.b)("img",{alt:"Difficulty Adjustment Image 1",src:Object(o.a)("img/contributors/core/difficulty-adjustment/image01.png")}),Object(a.b)("img",{alt:"Difficulty Adjustment Image 2",src:Object(o.a)("img/contributors/core/difficulty-adjustment/image02.png")}),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"https://mybinder.org/v2/gh/deepgully/jupyter/master?filepath=Zilliqa%2Fdifficulty.ipynb"}),"Difficulty divide"))))}d.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,h=d["".concat(o,".").concat(f)]||d[f]||b[f]||a;return n?r.a.createElement(h,c(c({ref:t},u),{},{components:n})):r.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";var i=n(0),r=n(35);t.a=function(){return Object(i.useContext)(r.a)}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(200),r=n(202);function a(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:a="/",url:o}={}}=Object(i.a)();if(!e)return e;if(t)return a+e;if(!Object(r.a)(e))return e;const c=a+e.replace(/^\//,"");return n?o+c:c}},202:function(e,t,n){"use strict";function i(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return i}))}}]);