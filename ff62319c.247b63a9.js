(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{125:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var n=t(0),r=t.n(n),l=t(139),c=t(164),i=t(165);function o(){return r.a.createElement(l.a,{title:"systems"},r.a.createElement("div",{class:"container"},r.a.createElement("br",null),r.a.createElement("div",{class:"row"},r.a.createElement("p",null,"Hyak \u2014 \u2018fast\u2019 in Chinook jargon \u2014 is one of many tools that are part of the University\u2019s cyberinfrastructure plan to support world-class research in fields as varied as astronomy, biology, climate science, computer science, engineering, medicine, physics, and others. The plan is helping drive the University\u2019s research mission on multiple levels, from recruiting to leadership in many fields.")),r.a.createElement("div",{class:"row"},r.a.createElement(c.a,{className:"unique-tabs",defaultValue:"klone",values:[{label:"3. klone",value:"klone"},{label:"2. mox",value:"mox"},{label:"1. ikt",value:"ikt"}]},r.a.createElement(i.a,{value:"klone"},"This is an apple \ud83c\udf4e"),r.a.createElement(i.a,{value:"mox"},"This is an orange \ud83c\udf4a"),r.a.createElement(i.a,{value:"ikt"},"This is a banana \ud83c\udf4c")))))}},137:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),l=t(135),c=t(138);function i(e){return e?e.map((function(e){return e.link?r.a.createElement("a",{key:e.caption,href:e.link},r.a.createElement(c.a.img,{src:Object(l.a)(e.image),alt:e.caption,whileHover:{scale:1.2},whileTap:{scale:.8}})):r.a.createElement("img",{key:e.caption,src:Object(l.a)(e.image),alt:e.caption})})):[]}},139:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(133),c=t(147),i=t(2),o=t(134),s=t(131),u=t(136),m=t.n(u),d=t(142),b=function(e){var a=Object(n.useRef)(!1),l=Object(n.useRef)(null),c=Object(d.useHistory)(),i=Object(s.a)().siteConfig,o=(void 0===i?{}:i).baseUrl,u=function(){a.current||(Promise.all([fetch(o+"search-doc.json").then((function(e){return e.json()})),fetch(o+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(73),t.e(75)]).then(t.bind(null,226)),t.e(55).then(t.t.bind(null,225,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=o+t.url;document.createElement("a").href=n,c.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(n.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:m()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:m()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:b,onBlur:b,ref:l}))},v=t(148),f=t(140),h=t(154),p=t(144),E=t(145),g=t(146),k=t(47),w=t.n(k),y=t(149);t(48);function O(e){return r.a.createElement("div",{className:"scroll-notifier",style:{visibility:e.useScrollNotifier?"visible":"hidden",width:100*e.scrollPercent+"%"}})}var _=t(46),j="right";var N=function(e){var a,t,c=Object(s.a)().siteConfig,u=void 0===c?{}:c,m=!1;try{m=window.location.pathname!=u.baseUrl}catch(ue){}var d=Object(s.a)(),k=d.siteConfig.themeConfig,N=k.navbar,C=(N=void 0===N?{}:N).title,x=void 0===C?"":C,S=N.items,L=void 0===S?[]:S,I=N.hideOnScroll,T=void 0!==I&&I,B=N.style,D=void 0===B?void 0:B,P=k.colorMode,H=(P=void 0===P?{}:P).disableSwitch,M=void 0!==H&&H,K=d.isClient,F=Object(n.useState)(!1),U=F[0],G=F[1],V=Object(n.useState)(!1),A=V[0],R=V[1],J=Object(f.a)(),q=J.isDarkTheme,z=J.setLightTheme,W=J.setDarkTheme,Y=Object(h.a)(T),Q=Y.navbarRef,X=Y.isNavbarVisible,Z=Object(g.a)(),$=Z.logoLink,ee=Z.logoLinkProps,ae=Z.logoImageUrl,te=Z.logoAlt;Object(p.a)(U);var ne=Object(n.useCallback)((function(){G(!0)}),[G]),re=Object(n.useCallback)((function(){G(!1)}),[G]),le=Object(n.useCallback)((function(e){return e.target.checked?W():z()}),[z,W]),ce=Object(E.a)();Object(n.useEffect)((function(){ce===E.b.desktop&&G(!1)}),[ce]);var ie=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:j)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:j)}))}}(L),oe=ie.leftItems,se=ie.rightItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{ref:Q,className:Object(l.a)("navbar","navbar--fixed-top",(a={"navbar--dark":"dark"===D,"navbar--primary":"primary"===D,"navbar-sidebar--show":U},a[w.a.navbarHideable]=T,a[w.a.navbarHidden]=!X,a)),style:{position:"sticky"}},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=L&&0!==L.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:ne,onKeyDown:ne},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:$},ee),null!=ae&&r.a.createElement("img",{key:K,className:"navbar__logo",src:ae,alt:te}),null!=x&&r.a.createElement("strong",{className:Object(l.a)("navbar__title",(t={},t[w.a.hideLogoText]=A,t))},x)),oe.map((function(e,a){return r.a.createElement(y.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},se.map((function(e,a){return r.a.createElement(y.a,Object(i.a)({},e,{key:a}))})),r.a.createElement(_.default,null),!M&&r.a.createElement(v.a,{className:w.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:q,onChange:le}),r.a.createElement(b,{handleSearchBarToggle:R,isSearchBarExpanded:A}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:re}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:re,to:$},ee),null!=ae&&r.a.createElement("img",{key:K,className:"navbar__logo",src:ae,alt:te}),null!=x&&r.a.createElement("strong",{className:"navbar__title"},x)),!M&&U&&r.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:q,onChange:le})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},L.map((function(e,a){return r.a.createElement(y.a,Object(i.a)({mobile:!0},e,{onClick:re,key:a}))}))))))),r.a.createElement(O,{useScrollNotifier:m,scrollPercent:e.scrollPercent}))},C=t(150),x=t(151),S=t(153),L=(t(49),t(152));a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName,i=1,o=1;try{i=document.body.scrollHeight-window.innerHeight,o=Math.min(1,window.scrollY/i)}catch(u){}var s=Object(L.a)()[0];return r.a.createElement(x.a,null,r.a.createElement(S.a,e),r.a.createElement(c.a,null),r.a.createElement(N,{scrollPercent:o}),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n),ref:s},a),!t&&r.a.createElement(C.a,null))}},164:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(163),c=t(133),i=t(67),o=t.n(i),s=37,u=39;a.a=function(e){var a=e.block,t=e.children,i=e.defaultValue,m=e.values,d=e.groupId,b=e.className,v=Object(l.a)(),f=v.tabGroupChoices,h=v.setTabGroupChoices,p=Object(n.useState)(i),E=p[0],g=p[1],k=Object(n.useState)(!1),w=k[0],y=k[1];if(null!=d){var O=f[d];null!=O&&O!==E&&m.some((function(e){return e.value===O}))&&g(O)}var _=function(e){g(e),null!=d&&h(d,e)},j=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},C=function(){y(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},b)},m.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===a,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":E===a}),style:w?{}:{outline:"none"},key:a,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case u:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(j,e.target,e),N(e)},onFocus:function(){return _(a)},onClick:function(){_(a),y(!1)},onPointerDown:function(){return y(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===E}))[0]))}},165:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}},46:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t(0),r=t.n(n),l=t(131),c=t(45),i=t.n(c),o=t(137);function s(){var e=Object(l.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement("div",{className:i.a.splashLogo},Object(o.a)(a.customFields.Graphics.SPLASH_LOGOS))}}}]);