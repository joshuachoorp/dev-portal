(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(199)),i=n(201),l={id:"core-guard-mode",title:"Guard Mode",keywords:["core","guard","mode"],description:"Core protocol design - guard mode."},d={id:"contributors/core-guard-mode",isDocsHomePage:!1,title:"Guard Mode",description:"Core protocol design - guard mode.",source:"@site/docs/contributors/core-guard-mode.mdx",permalink:"/docs/contributors/core-guard-mode",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-guard-mode.mdx",sidebar:"ContributorsSidebar",previous:{title:"Coinbase Rewards",permalink:"/docs/contributors/core-coinbase"},next:{title:"Rejoin Mechanism",permalink:"/docs/contributors/core-rejoin-mechanism"}},c=[{value:"Terminology",id:"terminology",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Normal Operation",id:"normal-operation",children:[]},{value:"View Change Operation",id:"view-change-operation",children:[]},{value:"Shard Guard Design",id:"shard-guard-design",children:[]},{value:"Shard Rebalancing",id:"shard-rebalancing",children:[]},{value:"Shard Leader Selection",id:"shard-leader-selection",children:[]},{value:"Runtime Validation",id:"runtime-validation",children:[]},{value:"Changing Network Information of DS Guards",id:"changing-network-information-of-ds-guards",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Guard mode is a special operating mode in Zilliqa that can be used to maintain stability of the Mainnet until the protocol has been made perfectly robust. Guard mode ensures the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A maximum of ",Object(o.b)("inlineCode",{parentName:"li"},"n")," nodes (e.g., 2/3) in the DS committee are nodes operated by Zilliqa Research"),Object(o.b)("li",{parentName:"ul"},"A maximum of ",Object(o.b)("inlineCode",{parentName:"li"},"n")," nodes (e.g., 1/3) across all shards are nodes operated by Zilliqa Research"),Object(o.b)("li",{parentName:"ul"},"DS leader selection (in either normal or view change situations) will only include nodes operated by Zilliqa Research")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Guard mode is designed to be toggleable and does not interfere with the standard protocol whether or not it is enabled."))),Object(o.b)("h2",{id:"terminology"},"Terminology"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DS guard - DS node operated by Zilliqa Research"),Object(o.b)("li",{parentName:"ul"},"Shard guard - Shard node operated by Zilliqa Research")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To enable guard mode, set ",Object(o.b)("inlineCode",{parentName:"li"},"GUARD_MODE")," to ",Object(o.b)("inlineCode",{parentName:"li"},"true")," in ",Object(o.b)("inlineCode",{parentName:"li"},"constants.xml")),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"n")," DS guard public keys to the ",Object(o.b)("inlineCode",{parentName:"li"},"ds_guard.DSPUBKEY")," section in ",Object(o.b)("inlineCode",{parentName:"li"},"constants.xml")),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("inlineCode",{parentName:"li"},"n")," shard guard public keys to the ",Object(o.b)("inlineCode",{parentName:"li"},"shard_guard.SHARDPUBKEY")," section in ",Object(o.b)("inlineCode",{parentName:"li"},"constants.xml")),Object(o.b)("li",{parentName:"ol"},"Adjust ",Object(o.b)("inlineCode",{parentName:"li"},"SHARD_GUARD_TOL")," in ",Object(o.b)("inlineCode",{parentName:"li"},"constants.xml")," to control the minimum percentage of shard guards in each shard")),Object(o.b)("h2",{id:"normal-operation"},"Normal Operation"),Object(o.b)("p",null,"A DS guard is designed to be statically placed inside the DS committee. Given ",Object(o.b)("inlineCode",{parentName:"p"},"n")," DS guards, the first ",Object(o.b)("inlineCode",{parentName:"p"},"n")," slots in the DS committee will be allocated for those DS guards. While in guard mode, these positions do not change or shift during each DS consensus or view change."),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{colspan:"2"},"DS Committee")),Object(o.b)("tr",null,Object(o.b)("td",null,"1 ... n = DS guards (operated by Zilliqa Research)"),Object(o.b)("td",null,"n+1 ... m = non-guard nodes"))),Object(o.b)("p",null,"The DS leader is selected from these DS guards by doing ",Object(o.b)("inlineCode",{parentName:"p"},"mod n")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"mod m"),"."),Object(o.b)("p",null,"A non-guard node joins the DS committee via ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contributors/core-pow"}),"PoW")," as usual. If selected, it is inserted in the committee starting at index ",Object(o.b)("inlineCode",{parentName:"p"},"n+1"),". Following the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contributors/core-ds-mimo"}),"DS MIMO")," convention, the last few DS nodes (non-guards) are ejected from the DS committee to preserve the committee size."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The DS reputation feature (starting Zilliqa version 5.0.0) also impacts DS committee member placement. Please refer to both ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contributors/core-ds-mimo"}),"DS MIMO")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/contributors/core-ds-reputation"}),"DS Reputation")," sections for more information on how the DS committee membership is managed."))),Object(o.b)("h2",{id:"view-change-operation"},"View Change Operation"),Object(o.b)("p",null,"When a view change occurs, it is likely that the DS leader (a DS guard) is faulty or the network failed to agree with what the DS leader proposed. In such a case, the view change candidate leader will be selected from among the ",Object(o.b)("inlineCode",{parentName:"p"},"n")," DS guards by doing ",Object(o.b)("inlineCode",{parentName:"p"},"mod n")," rather than ",Object(o.b)("inlineCode",{parentName:"p"},"mod m"),"."),Object(o.b)("p",null,"Upon view change completion, there is no shifting of the DS guard nodes, i.e., the DS guards stay in place (even the faulty ones). The shard nodes who receive the generated VC block will also not adjust these nodes in their own view of the DS committee."),Object(o.b)("p",null,"After the view change, the DS committee updates their ",Object(o.b)("inlineCode",{parentName:"p"},"m_consensusLeaderID")," to the new leader and the protocol resumes."),Object(o.b)("h2",{id:"shard-guard-design"},"Shard Guard Design"),Object(o.b)("p",null,"Shard guards are placed within shards in a manner such that there is a sufficient number of these Zilliqa-operated nodes in every shard. Shard guards are special as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"They only do PoW with difficulty 1"),Object(o.b)("li",{parentName:"ul"},"They cannot join the DS committee (hence, they only perform PoW to enter a shard)"),Object(o.b)("li",{parentName:"ul"},"Their PoW submissions are given priority by the DS committee over normal shard nodes' submissions")),Object(o.b)("p",null,"After the PoW window is over, the DS committee will begin to compose the sharding structure. The DS leader, as per the protocol, will trim the list of nodes such that each shard will be expected to have exactly ",Object(o.b)("inlineCode",{parentName:"p"},"COMM_SIZE")," number of nodes. In guard mode, shard guards are given priority during the trimming, which means non-guard nodes are trimmed away first. With the trimmed list, the DS leader will then randomly assign each node (shard guard and non-shard guard) to its respective shard."),Object(o.b)("h2",{id:"shard-rebalancing"},"Shard Rebalancing"),Object(o.b)("p",null,"When determining the shard composition - particularly in the event that the number of shards in the new DS epoch is lower than in the previous one - we must ensure that the newly composed shards will not be entirely made up of guards."),Object(o.b)("p",null,"To do this, we trim the overall number of shard guards to 2/3 of the expected population (e.g., 1200 out of 1800), and then complete the count with non-shard guards. In the case where there are insufficient non-guard nodes, shard guard nodes will fill up the remaining slots."),Object(o.b)("p",null,"Keywords to look for in the logs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"DS leader:\ntrimmedGuardCount: [some value] trimmedNonGuardCount: [some value] Total number of accepted soln: [some value]\n\nExample:\ntrimmedGuardCount: 80 trimmedNonGuardCount: 40 Total number of accepted soln: 120\n")),Object(o.b)("h2",{id:"shard-leader-selection"},"Shard Leader Selection"),Object(o.b)("p",null,"A best effort approach for selecting a shard guard as the shard leader was introduced in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/Zilliqa/pull/1513"}),"PR 1513"),"."),Object(o.b)("p",null,"Whether or not guard mode is enabled, the basic formula for calculating the new shard leader is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"Leader index = last block hash % shard size\n")),Object(o.b)("p",null,"In guard mode, the calculation is invoked repeatedly as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-console"}),"Leader index = last block hash % shard size\n\nwhile leader is not a shard guard (iterate up to SHARD_LEADER_SELECT_TOL times)\n  Hash = sha2(last block hash)\n  Leader index = Hash % shard size\n")),Object(o.b)("h2",{id:"runtime-validation"},"Runtime Validation"),Object(o.b)("p",null,"Guard mode is designed to work when the following assumption holds:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"number of new DS nodes injected into the shards >= number of allowed non-guard shard nodes")),Object(o.b)("p",null,"Using a simple local run as an example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of nodes: 20"),Object(o.b)("li",{parentName:"ul"},"DS nodes: 10"),Object(o.b)("li",{parentName:"ul"},"Shard size: 5"),Object(o.b)("li",{parentName:"ul"},"DS MIMO: 2")),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{colspan:"2"},"DS Committee")),Object(o.b)("tr",null,Object(o.b)("td",null,"DS guards (8)"),Object(o.b)("td",null,"Non-guards (2)"))),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{colspan:"2"},"Shard 1")),Object(o.b)("tr",null,Object(o.b)("td",null,"Shard guards (4)"),Object(o.b)("td",null,"Non-guards (1)"))),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{colspan:"2"},"Shard 2")),Object(o.b)("tr",null,Object(o.b)("td",null,"Shard guards (4)"),Object(o.b)("td",null,"Non-guards (1)"))),Object(o.b)("p",null,"In this example, if the network is reduced from 2 shards to 1, the DS MIMO process will inject more nodes (the 2 oldest non-guard DS nodes) into the shard than the shard limit (5)."),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{colspan:"2"},"DS Committee")),Object(o.b)("tr",null,Object(o.b)("td",null,"DS guards (8)"),Object(o.b)("td",null,"Non-guards (2)"))),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",{colspan:"2"},"Shard 1")),Object(o.b)("tr",null,Object(o.b)("td",null,"Shard guards (4)"),Object(o.b)("td",null,Object(o.b)("b",null,"Non-guards (2)")))),Object(o.b)("p",null,"There is no easy solution around it. Hence, ",Object(o.b)("inlineCode",{parentName:"p"},"ValidateRunTimeEnvironment()")," checks for such a condition and terminates the node with a log message if it happens."),Object(o.b)("h2",{id:"changing-network-information-of-ds-guards"},"Changing Network Information of DS Guards"),Object(o.b)("p",null,"It is not uncommon for nodes in the network to go down and then attempt to rejoin under a different IP address. Under normal operation without guard mode, faulty DS nodes can be gracefully kicked out of the DS committee using regular shifting and view change if necessary. However, in guard mode, DS guards do not shift and stay in the DS committee indefinitely. As such, we can possibly lose a node forever if the DS guard has gone down and changed its IP address."),Object(o.b)("p",null,"To address this situation, we have devised a simple protocol for the DS guard to rejoin and update the network about its new information."),Object(o.b)("p",null,"The steps are:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"DS guard goes down and restarts with (possibly) a different IP address"),Object(o.b)("li",{parentName:"ol"},"DS guard completes rejoin sequence and enters ",Object(o.b)("inlineCode",{parentName:"li"},"FinishRejoinAsDS()")),Object(o.b)("li",{parentName:"ol"},"DS guard broadcasts its updated information (pubkey, network info, and timestamp) to the lookups, and gossips the same to the DS committee"),Object(o.b)("li",{parentName:"ol"},"DS committee and lookup update their view of the DS committee"),Object(o.b)("li",{parentName:"ol"},"Lookup stores the updated information"),Object(o.b)("li",{parentName:"ol"},"At the next vacuous epoch, all shard nodes query the lookup for any updated DS guard network information"),Object(o.b)("li",{parentName:"ol"},"Lookup will not respond if there is no new information"),Object(o.b)("li",{parentName:"ol"},"Otherwise, lookup sends the information to the requesting shard nodes"),Object(o.b)("li",{parentName:"ol"},"The requesting shard nodes verify the message and update their view of the DS committee")),Object(o.b)("img",{alt:"Guard Mode Image 1",src:Object(i.a)("img/contributors/core/guard-mode/image01.png")}))}b.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,h=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(200),r=n(202);function o(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:o="/",url:i}={}}=Object(a.a)();if(!e)return e;if(t)return o+e;if(!Object(r.a)(e))return e;const l=o+e.replace(/^\//,"");return n?i+l:l}},202:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);