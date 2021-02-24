(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{172:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(2),i=t(6),a=(t(0),t(283)),o={id:"basics-zil-schnorr-signatures",title:"Schnorr Signatures",keywords:["schnorr signatures","zilliqa"],description:"Schnorr Signatures"},s={id:"basics/basics-zil-schnorr-signatures",isDocsHomePage:!1,title:"Schnorr Signatures",description:"Schnorr Signatures",source:"@site/docs/basics/basics-zil-schnorr-signatures.md",permalink:"/docs/basics/basics-zil-schnorr-signatures",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/basics/basics-zil-schnorr-signatures.md",sidebar:"BasicsSideBar",previous:{title:"Consensus Mechanism",permalink:"/docs/basics/basics-zil-consensus"},next:{title:"Reward Mechanism",permalink:"/docs/basics/basics-zil-reward"}},c=[],l={rightToc:c};function u(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"Zilliqa employs Elliptic Curve Based Schnorr Signature Algorithm (EC-Schnorr) as the base signing algorithm. Schnorr allows for multisignatures, is faster than ECDSA, and has a smaller signature size (64 bytes)."),Object(a.b)("p",null,"The Schnorr algorithm was initially based on section 4.2.3 page 24 of version 1.0 of BSI TR-03111 Elliptic Curve Cryptography (ECC). A more complete discussion of the algorithm is also contained in the Zilliqa ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.zilliqa.com/whitepaper.pdf"}),"whitepaper"),"."),Object(a.b)("p",null,"The Schnorr algorithm is used during the consensus protocol, message signing, and generally anywhere where a signature is needed within the protocol. Zilliqa nodes are also identified by their Schnorr public keys, alongside their IP information."))}u.isMDXComponent=!0},283:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var r=i.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return i.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},d=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,f=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return t?i.a.createElement(f,s(s({ref:r},l),{},{components:t})):i.a.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);