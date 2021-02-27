(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(166)),i={id:"klone",title:"Klone Soft Launch",author:"Nam Pho",author_title:"Director for Research Computing",author_url:"https://github.com/npho",author_image_url:"https://avatars3.githubusercontent.com/u/1252858?s=400&v=4",tags:["klone","hyak","hpc","supercomputer","launch","features"]},c={permalink:"/blog/2021/02/25/klone-soft-launch",source:"@site/blog/2021-02-25-klone-soft-launch.md",description:"[pytorch-cuda10]: /img/blog/pytorch-cuda10.png 'Pytorch install instructions for pip with CUDA10'",date:"2021-02-25T00:00:00.000Z",tags:[{label:"klone",permalink:"/blog/tags/klone"},{label:"hyak",permalink:"/blog/tags/hyak"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"supercomputer",permalink:"/blog/tags/supercomputer"},{label:"launch",permalink:"/blog/tags/launch"},{label:"features",permalink:"/blog/tags/features"}],title:"Klone Soft Launch",readingTime:2.145,truncated:!1,nextItem:{title:"Pytorch and CUDA11",permalink:"/blog/2021/01/10/pytorch-cuda11"}},l=[{value:"February 25, 2021",id:"february-25-2021",children:[]},{value:"March 1, 2021",id:"march-1-2021",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This page will be updated in the evening once every few days starting from soft launch on February 25, 2021 through the full launch to the UW community. Please check back regularly and scroll to the bottom (or click the latest date on the right) for the latest updates."))),Object(o.b)("h3",{id:"february-25-2021"},"February 25, 2021"),Object(o.b)("p",null,"The UW research computing team celebrates the soft launch of project KLONE, the 3rd generation HYAK supercomputer. Welcome to those researchers invited to participate in the early access program \ud83e\udd73 \ud83c\udf89"),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There will be weekly maintenance days on Tuesday during the soft launch period after which we will move back to our regular cadence of monthly maintenance windows."))),Object(o.b)("p",null,"The user documentation [",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/"}),"link"),"] has been updated to reflect the changes and new features of KLONE but this will be an ongoing process."),Object(o.b)("h4",{id:"compute"},"Compute"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Soft launch with 1,920 compute cores over 48 nodes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"27 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem1")," nodes (192GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute")," partition,"),Object(o.b)("li",{parentName:"ul"},"4 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem2")," nodes (384GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute-bigmem")," partition,"),Object(o.b)("li",{parentName:"ul"},"16 x ",Object(o.b)("inlineCode",{parentName:"li"},"mem3")," nodes (768GB of memory each) in the ",Object(o.b)("inlineCode",{parentName:"li"},"compute-hugemem")," partition."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"build")," nodes no longer exist on klone as they did on mox. All instances have the potential to be interactive and all have internet routing by default (even non-interactive jobs).")),Object(o.b)("h4",{id:"storage"},"Storage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gscratch")," on klone is 1.4PB total capacity with a ",Object(o.b)("strong",{parentName:"li"},"new")," 500TB NVMe flash tier. Data tiering happens automagically, if you use a file frequently it will be moved to the faster storage."),Object(o.b)("li",{parentName:"ul"},"Storage quota is still charged back at the same rate ($10 / TB / month). Researchers receive 1TB per node purchased and contributed to klone.")),Object(o.b)("h4",{id:"data"},"Data"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"gscratch")," is ",Object(o.b)("strong",{parentName:"li"},"not backed up")," that is the responsibility of the researcher (e.g., LOLO, the cloud, external hard drive). Feel free to ",Object(o.b)("a",{href:"mailto:help@uw.edu?subject=hyak archive"},"email")," us if you have any questions."),Object(o.b)("li",{parentName:"ul"},"While all nodes have internet access now, transfer data using the login nodes. Login nodes have full 2 x 40 Gbps bandwidth. If you transfer using a compute node interactive session you are limited to 1 x 1 Gbps connection.")),Object(o.b)("h4",{id:"software"},"Software"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"modules works the same as it did on mox. This is an improved implementation called LMOD on klone compared to environment modules on mox."),Object(o.b)("li",{parentName:"ul"},"We provide the basic compilers (e.g., GNU, Intel) as modules."),Object(o.b)("li",{parentName:"ul"},"The HYAK team is encouraging a container first world (i.e., use Singularity).")),Object(o.b)("h3",{id:"march-1-2021"},"March 1, 2021"),Object(o.b)("p",null,"Next update expected in the evening on this date."))}s.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(h,c(c({ref:t},b),{},{components:n})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);