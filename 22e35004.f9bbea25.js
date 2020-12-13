(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{132:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,u=m["".concat(c,".").concat(p)]||m[p]||l[p]||o;return a?r.a.createElement(u,i(i({ref:t},b),{},{components:a})):r.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(132)),c={id:"mox",title:"Storage on MOX"},i={unversionedId:"storage/mox",id:"storage/mox",isDocsHomePage:!1,title:"Storage on MOX",description:'mox is the 2nd generation Hyak cluster. Storage mounted on mox is sometimes referred to as gscratch due to that being the mount point on the cluster (i.e., /gscratch/somefolder/anotherfolder) and a reminder to our researchers that anything here is "scratch" or NOT BACKED UP. Refer to the storage introduction page for details on how to manage your data life cycle.',source:"@site/docs/storage/mox.md",slug:"/storage/mox",permalink:"/docs/storage/mox",version:"current",sidebar:"someSidebar",previous:{title:"Storage on KLONE",permalink:"/docs/storage/klone"},next:{title:"Data Transfer",permalink:"/docs/storage/transfer"}},s=[{value:"User Home Directory",id:"user-home-directory",children:[]},{value:"Group or Lab Directories",id:"group-or-lab-directories",children:[]},{value:"Scrubbed",id:"scrubbed",children:[]}],b={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mox")," is the 2nd generation Hyak cluster. Storage mounted on ",Object(o.b)("inlineCode",{parentName:"p"},"mox")," is sometimes referred to as ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," due to that being the mount point on the cluster (i.e., ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/somefolder/anotherfolder"),') and a reminder to our researchers that anything here is "scratch" or ',Object(o.b)("strong",{parentName:"p"},"NOT BACKED UP"),". Refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"data"}),"storage introduction page")," for details on how to manage your data life cycle."),Object(o.b)("p",null,"Every user has a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#user-home-directory"}),"home directory")," by default, most users have a ",Object(o.b)("inlineCode",{parentName:"p"},"mox")," account by virtue of being the member of some lab with dedicated nodes so you have access to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#group-or-lab-directories"}),"lab dedicated storage"),", and there's also ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#scrubbed"}),"scrubbed")," storage for temporary overflow use."),Object(o.b)("h2",{id:"user-home-directory"},"User Home Directory"),Object(o.b)("p",null,"Each users' home directory is located at the folder path ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/home/netID")," where ",Object(o.b)("inlineCode",{parentName:"p"},"netID")," is your UW netID. You are placed here by default when you log into ",Object(o.b)("inlineCode",{parentName:"p"},"mox"),". You can always refer to it using the usual Linux shortcuts of ",Object(o.b)("inlineCode",{parentName:"p"},"$HOME")," or ",Object(o.b)("inlineCode",{parentName:"p"},"~"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your home directory quota is 10 GB or 250,000 files."))),Object(o.b)("p",null,"You can check your live home directory usage using the following command."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"mmlsquota --block-size G gscratch:home\n")),Object(o.b)("p",null,"Ideally you only keep personal code bases or smaller data sets here. This quota can not be changed, if you need more data one of the other storage spots on ",Object(o.b)("inlineCode",{parentName:"p"},"gscratch")," are better suited."),Object(o.b)("h2",{id:"group-or-lab-directories"},"Group or Lab Directories"),Object(o.b)("p",null,"If you run the ",Object(o.b)("inlineCode",{parentName:"p"},"groups")," command on ",Object(o.b)("inlineCode",{parentName:"p"},"mox")," you'll see what groups you are a member of. For example, one of my groups is ",Object(o.b)("inlineCode",{parentName:"p"},"hyak-stf"),', which means I\'m a member of the "stf" group (i.e., the Research Computing Club). Whatever groups you are seeing here you can access your lab storage at ',Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/mylab/")," where ",Object(o.b)("inlineCode",{parentName:"p"},"mylab")," is any group you're a member of. In this example that means I have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/stf/")," and only members of the ",Object(o.b)("inlineCode",{parentName:"p"},"hyak-stf")," group have access to this folder."),Object(o.b)("p",null,"Your lab gets 500 GB per node that your group has contributed to ",Object(o.b)("inlineCode",{parentName:"p"},"mox")," (or 2 TB per node in the case of a GPU node)."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Your lab quota can be increased for $10 / TB / month."))),Object(o.b)("p",null,"Your lab storage quota can be increased (or decreased) in 1 TB granularity and adjusted on a month-to-month basis as your needs require. If you hit file limits, ",Object(o.b)("a",{href:"help@uw.edu"},"email us")," and we can increase those limits for no additional cost."),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Check group quotas and current use by looking at the ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/mylab/usage_report.txt")," file."))),Object(o.b)("h2",{id:"scrubbed"},"Scrubbed"),Object(o.b)("p",null,"If you need space but only temporarily (i.e., less than 1 month) then you can make use of the scrubbed folder. The scrubbed folder lives at ",Object(o.b)("inlineCode",{parentName:"p"},"/gscratch/scrubbed/")," and anything underneath this folder is a free-for-all space. You can create a folder for yourself and do whatever you need. Please note it's completely open "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Auto-delete: "))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Privacy: "))))}d.isMDXComponent=!0}}]);