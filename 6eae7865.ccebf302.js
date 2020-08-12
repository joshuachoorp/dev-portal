(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(2),r=n(6),i=(n(0),n(199)),s=n(201),o={id:"basics-zil-sharding",title:"Sharding Mechanism",keywords:["types of sharding","network sharding","transaction sharding","transaction types","zilliqa"],description:"Zilliqa Sharding Mechanism"},c={id:"basics/basics-zil-sharding",isDocsHomePage:!1,title:"Sharding Mechanism",description:"Zilliqa Sharding Mechanism",source:"@site/docs/basics/basics-zil-sharding.mdx",permalink:"/docs/basics/basics-zil-sharding",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/basics/basics-zil-sharding.mdx",sidebar:"BasicsSideBar",previous:{title:"Types of Nodes",permalink:"/docs/basics/basics-zil-nodes"},next:{title:"Consensus Mechanism",permalink:"/docs/basics/basics-zil-consensus"}},l=[{value:"Network Sharding",id:"network-sharding",children:[]},{value:"Transaction Sharding",id:"transaction-sharding",children:[{value:"Type I",id:"type-i",children:[]},{value:"Type II",id:"type-ii",children:[]},{value:"Type III",id:"type-iii",children:[]},{value:"Assignment Strategy",id:"assignment-strategy",children:[]}]}],d={rightToc:l};function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"In this section, we present the core idea of sharding that makes Zilliqa scale. Sharding in Zilliqa takes many forms: ",Object(i.b)("em",{parentName:"p"},"network sharding"),", ",Object(i.b)("em",{parentName:"p"},"transaction sharding"),", and ",Object(i.b)("em",{parentName:"p"},"computational sharding"),". The most important among these is network sharding as the other sharding mechanisms are built atop the network sharding layer."),Object(i.b)("h2",{id:"network-sharding"},"Network Sharding"),Object(i.b)("img",{alt:"Network sharding",src:Object(s.a)("img/basics/networksharding.png")}),Object(i.b)("p",null,"Network sharding (which will be referred to simply as ",Object(i.b)("em",{parentName:"p"},"sharding")," in this context) is a mechanism that allows the Zilliqa network to be divided into smaller groups of nodes each referred to as a ",Object(i.b)("em",{parentName:"p"},"shard"),". Simply put, imagine a network of 1,000 nodes, then, one may divide the network into 10 shards each composed of 100 nodes."),Object(i.b)("p",null,"Network sharding is the secret sauce that makes Zilliqa truly scalable. Imagine our example network of 1,000 nodes. Zilliqa would automatically divide the network into 10 shards each with 100 nodes. Now, these shards can process transactions in parallel. If each shard is capable of processing 10 transactions per second, then all shards together can process 100 transactions per second. The ability to process transactions in parallel due to the sharded architecture ensures that the throughput in Zilliqa linearly increases with the size of the network."),Object(i.b)("p",null,"The idea of sharding is certainly not new, and it can be traced back to the field of databases, where it is employed to improve performance, scalability and I/O bandwidth. The idea of sharding in the context of blockchains however was first put forth in an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://dl.acm.org/doi/10.1145/2976749.2978389"}),"academic paper")," co-authored by Zilliqa team members in 2015."),Object(i.b)("h2",{id:"transaction-sharding"},"Transaction Sharding"),Object(i.b)("p",null,"As discussed above, network sharding opens up avenues for parallel transaction processing \u2014 each shard should now be able to independently process transactions and hence yield high throughput. Whenever a transaction reaches the network, it gets assigned to a specific shard. The assignment is determined by the first few bits of the sending address of the transaction. This is called ",Object(i.b)("em",{parentName:"p"},"transaction sharding"),"."),Object(i.b)("p",null,"For example, to assign transactions in a network with two shards S1 and S2, we first check the sender\u2019s address. If the sender\u2019s address ends with 0, then the transaction should be assigned to S1, else it should be assigned to S2."),Object(i.b)("p",null,"This assignment strategy, however, only works with payment transactions. To properly handle both payment and smart contract transactions, a different solution is employed by categorizing transactions so that we can have a separate assignment strategy for each category."),Object(i.b)("p",null,"Transactions received by the network can be classified into the following categories depending on the type of accounts involved. Below, we call an account a ",Object(i.b)("em",{parentName:"p"},"user account")," (or a non-contract account) if it is controlled by a user and does not hold contract code. As an extension, an account that holds contract code will be referred to as a ",Object(i.b)("em",{parentName:"p"},"contract account"),"."),Object(i.b)("img",{alt:"Transaction sharding",src:Object(s.a)("img/basics/txnsharding.png")}),Object(i.b)("h3",{id:"type-i"},"Type I"),Object(i.b)("p",null,"Type I (U1 -> U2): A user account sending some money to another user account, i.e., regular payment transactions that do not involve smart contracts. An example transaction would be a user Alice sending some $ZILs to another user Bob."),Object(i.b)("h3",{id:"type-ii"},"Type II"),Object(i.b)("p",null,"Type II (U -> C): A user calling a smart contract that does not call any other smart contract, neither does the contract transfer funds to another user. I.e., transactions that involve only a user account and a smart contract. An example transaction would be a user Alice donating 5 $ZIL to a crowdfunding contract."),Object(i.b)("h3",{id:"type-iii"},"Type III"),Object(i.b)("p",null,"Type III (U1 -> C1 -> \u2026 -> Cn ","[-> U2]","): Any other transaction. This category includes transactions originating from a user that can invoke a chain of contracts and potentially terminate with a user account. An example transaction will be Alice calling a travel agent contract (C1) that calls an airline contract (C2) that in turn calls an insurance contract (C3)."),Object(i.b)("h3",{id:"assignment-strategy"},"Assignment Strategy"),Object(i.b)("p",null,"At any given time, each shard will only handle transactions of Type I and II, while the DS committee will handle transactions of Type III only after transactions of Categories I and II have been validated by the rest of the shards. The DS committee may also handle certain transactions of Type I or II. Do note that the DS committee will not handle transactions in parallel (to the shards); otherwise, it will become possible to double spend."),Object(i.b)("p",null,"The exact assignment strategy is as follows:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For a network with k = 2^n shards, each shard will only process transactions of Type I and II in which both the sender\u2019s and the recipient\u2019s address have the same last n bits.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Any other transaction (including of Type III)) will be processed by the DS committee after the other shards have finished processing transactions meant for them."))))}h.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=d(n),b=a,u=h["".concat(s,".").concat(b)]||h[b]||p[b]||i;return n?r.a.createElement(u,o(o({ref:t},l),{},{components:n})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";var a=n(0),r=n(35);t.a=function(){return Object(a.useContext)(r.a)}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(200),r=n(202);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:s}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(r.a)(e))return e;const o=i+e.replace(/^\//,"");return n?s+o:o}},202:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);