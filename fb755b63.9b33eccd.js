(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{132:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),c=(r(0),r(141)),i={id:"compilers",title:"Compilers"},a={unversionedId:"tools/compilers",id:"tools/compilers",isDocsHomePage:!1,title:"Compilers",description:"The compilers are provided using environment modules, you can review modules here.",source:"@site/docs/tools/compilers.md",slug:"/tools/compilers",permalink:"/docs/tools/compilers",version:"current",sidebar:"someSidebar",previous:{title:"Modules",permalink:"/docs/tools/modules"},next:{title:"Containers, Docker, Singularity",permalink:"/docs/tools/containers"}},l=[{value:"GNU Compiler",id:"gnu-compiler",children:[]},{value:"Intel Compiler",id:"intel-compiler",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The compilers are provided using environment modules, you can review modules ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tools/modules"}),"here"),". "),Object(c.b)("p",null,"A lot of software you may want to use and compile yourself could be written in C, C++, or Fortran. We support two compiler flavors for you to try: the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#gnu-compiler"}),"GNU compiler")," or the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#intel-compiler"}),"Intel compiler"),". "),Object(c.b)("h2",{id:"gnu-compiler"},"GNU Compiler"),Object(c.b)("p",null,"The latest GNU compiler provided as a module is version 10.1 [",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://gcc.gnu.org/gcc-10/"}),"source"),"]. This was built with the ",Object(c.b)("inlineCode",{parentName:"p"},"--enable-languages=c,c++,fortran")," flag."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"module load gcc/10.1.1\n")),Object(c.b)("p",null,'There are older GNU compiler versions and combinations with MPI support. Additional (not listed below) modules prefixed with "contrib" are community provided and maintained.'),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"$ module avail gcc\n----- /sw/modules-1.775/modulefiles -----\ngcc/6.3.1  \ngcc/8.2.1  \ngcc/10.1.0  \ngcc_4.8.5-impi_2017  \ngcc_8.2.1-ompi_3.1.4  \ngcc_8.2.1-ompi_4.0.1  \ngcc_8.2.1-ompi_4.0.2  \n$\n")),Object(c.b)("h2",{id:"intel-compiler"},"Intel Compiler"),Object(c.b)("p",null,"The latest Intel compiler is the 2020 version."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"module load icc_20u1 \n")),Object(c.b)("p",null,"Also with Intel MPI support."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"module load icc_20u1-impi_2020u1\n")),Object(c.b)("p",null,"There are various Intel compilers with different MPI libraries available."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell-session",metastring:"terminal=true",terminal:"true"}),"$ module avail icc\n----- /sw/modules-1.775/modulefiles -----\nicc_19-ompi_4.0.1           \nicc_19u5-impi_2019u5  \nicc_19-ompi_2.1.6     \nicc_19-ompi_4.0.1-cuda_9.2  \nicc_20u1              \nicc_19             \nicc_19-ompi_3.1.2\nicc_20u1-impi_2020u1  \nicc_19-impi_2019   \nicc_19-ompi_3.1.4     \nicc_19u5                    \n$ \n")))}u.isMDXComponent=!0},141:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||c;return r?o.a.createElement(d,a(a({ref:t},p),{},{components:r})):o.a.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);