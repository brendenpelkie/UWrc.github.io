(window.webpackJsonp=window.webpackJsonp||[]).push([[26,13],{114:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(111),i=t(113);function c(e){return e?e.map((function(e){return e.link?r.a.createElement("a",{key:e.caption,href:e.link},r.a.createElement(i.a.img,{src:Object(l.a)(e.image),alt:e.caption,whileHover:{scale:1.2},whileTap:{scale:.8}})):r.a.createElement("img",{key:e.caption,src:Object(l.a)(e.image),alt:e.caption})})):[]}},116:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(108),i=t(124),c=t(2),o=t(110),s=t(107),u=t(112),m=t.n(u),d=t(118),h=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),i=Object(d.useHistory)(),c=Object(s.a)().siteConfig,o=(void 0===c?{}:c).baseUrl,u=function(){a.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(50),t.e(52)]).then(t.bind(null,201)),t.e(38).then(t.t.bind(null,200,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=o+t.url;document.createElement("a").href=n,i.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},h=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:m()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:m()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:h,onBlur:h,ref:l}))},b=t(125),p=t(119),f=t(132),E=t(120),v=t(121),g=t(122),y=t(47),k=t.n(y),w=t(126);t(48);function N(e){return r.a.createElement("div",{className:"scroll-notifier",style:{visibility:e.useScrollNotifier?"visible":"hidden",width:100*e.scrollPercent+"%"}})}var S=t(46),O="right";var j=function(e){var a,t,i=Object(s.a)().siteConfig,u=void 0===i?{}:i,m=!1;try{m=window.location.pathname!=u.baseUrl}catch(ue){}var d=Object(s.a)(),y=d.siteConfig.themeConfig,j=y.navbar,C=(j=void 0===j?{}:j).title,_=void 0===C?"":C,H=j.items,x=void 0===H?[]:H,T=j.hideOnScroll,A=void 0!==T&&T,I=j.style,P=void 0===I?void 0:I,B=y.colorMode,D=(B=void 0===B?{}:B).disableSwitch,M=void 0!==D&&D,R=d.isClient,L=Object(n.useState)(!1),U=L[0],W=L[1],F=Object(n.useState)(!1),G=F[0],K=F[1],Y=Object(p.a)(),q=Y.isDarkTheme,J=Y.setLightTheme,V=Y.setDarkTheme,z=Object(f.a)(A),Q=z.navbarRef,X=z.isNavbarVisible,Z=Object(g.a)(),$=Z.logoLink,ee=Z.logoLinkProps,ae=Z.logoImageUrl,te=Z.logoAlt;Object(E.a)(U);var ne=Object(n.useCallback)((function(){W(!0)}),[W]),re=Object(n.useCallback)((function(){W(!1)}),[W]),le=Object(n.useCallback)((function(e){return e.target.checked?V():J()}),[J,V]),ie=Object(v.a)();Object(n.useEffect)((function(){ie===v.b.desktop&&W(!1)}),[ie]);var ce=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:O)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:O)}))}}(x),oe=ce.leftItems,se=ce.rightItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{ref:Q,className:Object(l.a)("navbar","navbar--fixed-top",(a={"navbar--dark":"dark"===P,"navbar--primary":"primary"===P,"navbar-sidebar--show":U},a[k.a.navbarHideable]=A,a[k.a.navbarHidden]=!X,a)),style:{position:"sticky"}},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=x&&0!==x.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:ne,onKeyDown:ne},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(c.a)({className:"navbar__brand",to:$},ee),null!=ae&&r.a.createElement("img",{key:R,className:"navbar__logo",src:ae,alt:te}),null!=_&&r.a.createElement("strong",{className:Object(l.a)("navbar__title",(t={},t[k.a.hideLogoText]=G,t))},_)),oe.map((function(e,a){return r.a.createElement(w.a,Object(c.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},se.map((function(e,a){return r.a.createElement(w.a,Object(c.a)({},e,{key:a}))})),r.a.createElement(S.default,null),!M&&r.a.createElement(b.a,{className:k.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:q,onChange:le}),r.a.createElement(h,{handleSearchBarToggle:K,isSearchBarExpanded:G}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:re}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(c.a)({className:"navbar__brand",onClick:re,to:$},ee),null!=ae&&r.a.createElement("img",{key:R,className:"navbar__logo",src:ae,alt:te}),null!=_&&r.a.createElement("strong",{className:"navbar__title"},_)),!M&&U&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:q,onChange:le})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},x.map((function(e,a){return r.a.createElement(w.a,Object(c.a)({mobile:!0},e,{onClick:re,key:a}))}))))))),r.a.createElement(N,{useScrollNotifier:m,scrollPercent:e.scrollPercent}))},C=t(128),_=t(129),H=t(131),x=(t(49),t(130));a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName,c=1,o=1;try{c=document.body.scrollHeight-window.innerHeight,o=Math.min(1,window.scrollY/c)}catch(u){}var s=Object(x.a)()[0];return r.a.createElement(_.a,null,r.a.createElement(H.a,e),r.a.createElement(i.a,null),r.a.createElement(j,{scrollPercent:o}),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n),ref:s},a),!t&&r.a.createElement(C.a,null))}},145:function(e,a,t){"use strict";t.d(a,"c",(function(){return o})),t.d(a,"b",(function(){return s})),t.d(a,"e",(function(){return u})),t.d(a,"a",(function(){return m})),t.d(a,"d",(function(){return d}));var n=t(0),r=t.n(n),l=t(54),i=t.n(l),c=t(53),o="Home",s="HYAK Next Gen Supercomputer Homepage",u={"CPU Cores":"18,376","GPU Cores":"35,840","Terabytes of Memory":"3000 TB",Users:"100","Terabytes of Data":"4000 TB"},m=r.a.createElement("p",null,"Hyak \u2014 \u2018fast\u2019 in Chinook jargon \u2014 is one of many tools that are part of the University\u2019s cyberinfrastructure plan to support world-class research in fields as varied as astronomy, biology, climate science, computer science, engineering, medicine, physics, and others. The plan is helping drive the University\u2019s research mission on multiple levels, from recruiting to leadership in many fields."),d={UserInterface:{HEADER:r.a.createElement("h2",null,"A user interface for everyone"),SECTIONS:[r.a.createElement("p",{key:0},"We support a wide range of user interfaces, whether you're a seasoned command-line interface (CLI) user  who only needs to know the hostname to SSH to, a novice who likes the comfort of a graphical user interface (GUI) desktop, or maybe you just prefer the convenience of a modern web-browser based experience."),r.a.createElement("p",{key:1},"We serve a web-based ",r.a.createElement("b",null,"Visual Studio Code")," instance for developers (also ",r.a.createElement("code",null,"emacs")," or ",r.a.createElement("code",null,"vim")," if that's your thing). We have ",r.a.createElement("b",null,"Jupyter Notebooks")," and ",r.a.createElement("b",null,"RStudio")," server (both browser based) for data scientists interested in using bigger infrastructure. Even an ",r.a.createElement("b",null,"Xfce")," GUI for a full on Linux desktop.")]},ProgrammingLangs:{HEADER:r.a.createElement("h2",null,"We speak your language"),SECTIONS:[r.a.createElement("p",{key:0},"Any programming language that runs on an ",r.a.createElement("code",null,"x86-64")," processor can be supported on HYAK. The predominant ones are ",r.a.createElement("b",null,"C/C++")," as a part of widely deployed scientific applications or ",r.a.createElement("b",null,"Python")," and ",r.a.createElement("b",null,"R")," for data science and analytics.  If you're a C/C++ or Python user, we have a license for ",r.a.createElement("b",null,"Intel Parallel Studio")," with optimized compilers (e.g. ",r.a.createElement("code",null,"icc"),") to speed up those codebases."),r.a.createElement("p",{key:1},"Other languages such as Go, Perl, Julia, and countless others are used every day on HYAK and you're welcome to bring your own to the community and make the platform yours.")]},AppStore:{HEADER:r.a.createElement("h2",null,"Research App Store"),SECTIONS:[r.a.createElement("p",{key:0},"Not a developer? Not a problem! There is a rich ",r.a.createElement("b",null,"scientific app store")," on HYAK. There are are a number of HYAK maintained modules like ",r.a.createElement("b",null,"MATLAB"),". Community maintained compiled software modules include things like ",r.a.createElement("b",null,"Gaussian"),", ",r.a.createElement("b",null,"star-ccm"),", and",r.a.createElement("b",null," bowtie"),". We're also seeing increasing use of machine learning frameworks like",r.a.createElement("b",null," TensorFlow")," and ",r.a.createElement("b",null,"PyTorch")," and we encourage each user to maintain their own versioned library using ",r.a.createElement("b",null,"Anaconda"),"."),r.a.createElement("p",{key:1},"Interested in computational best practices?  Don't want to be locked into a platform? The best option is to use containers for your code.  We specifically support",r.a.createElement("b",null," Singularity")," which is usually interoperable with the more ubiquitous ",r.a.createElement("b",null,"Docker"),". By developing your code locally in a Singularity container, it becomes easily portable to HYAK or beyond to national supercomputing centers and the cloud. Your research goes wherever you go.")]},Help:{HEADER:r.a.createElement("h2",null,"Need help?"),SECTIONS:[r.a.createElement("p",{key:0},"Shoot us an ",r.a.createElement("a",{className:"purple-link",href:"mailto:help@uw.edu?subject=Hyak question"},"e-mail"),", join our ",r.a.createElement("a",{className:"purple-link",href:"https://uw-rcc.slack.com/"},"Slack"),", or show up to our in-person research hangouts every Tuesday from 1:30 PM to 3:00 PM at our global headquarters in the ",r.a.createElement("a",{className:"purple-link",href:"https://escience.washington.edu"},"eScience Institute")," at the University of Washington.  We're also able to meet individually upon request."),r.a.createElement("div",{key:1,className:i.a.mapContainer},r.a.createElement("div",{className:i.a.blankMap}),r.a.createElement(c.default,{key:"1",title:"Intergalactic HQ",name:"4545 Building",align:"right",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.179163071817!2d-122.31451588483776!3d47.66151577918835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490148afd210277%3A0x378526e9274172e1!2sForty-Five%20Forty-Five%20Building%2C%204545%2015th%20Ave%20NE%2C%20Seattle%2C%20WA%2098105!5e0!3m2!1sen!2sus!4v1572905266626!5m2!1sen!2sus"}),r.a.createElement(c.default,{key:"2",title:"Global HQ",name:"UW eScience Institute",align:"left",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5986053468737!2d-122.31397348483813!3d47.653366479187774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549014f277b0f15d%3A0x7c2434f079426d8c!2seScience%20Institute!5e0!3m2!1sen!2sus!4v1572905032160!5m2!1sen!2sus"}),r.a.createElement("div",{className:i.a.blankMap}))]},BuiltWith:{HEADER:r.a.createElement("h2",null,"Our tech stack")},PoweredBy:{HEADER:r.a.createElement("h2",null,"Powered by")}}},46:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t(0),r=t.n(n),l=t(107),i=t(45),c=t.n(i),o=t(114);function s(){var e=Object(l.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement("div",{className:c.a.splashLogo},Object(o.a)(a.customFields.Graphics.SPLASH_LOGOS))}},53:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=t(54),o=t.n(c);function s(e){return r.a.createElement("div",{className:o.a.map+" "+e.align},r.a.createElement("div",null,r.a.createElement("p",{className:o.a.mapTitle},e.title),r.a.createElement("iframe",{src:e.src}),r.a.createElement("p",null,e.name)))}s.propTypes={align:i.a.string.isRequired,src:i.a.string.isRequired,title:i.a.string,name:i.a.string}},87:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return c}));var n=t(0),r=t.n(n),l=t(116),i=t(145);function c(){return r.a.createElement(l.a,{title:"Hello"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",width:"80%",fontSize:"20px"}},i.a))}}}]);