(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n),c=t(136),l=t(139);function i(e){return e?e.map((function(e){return e.link?r.a.createElement("a",{key:e.caption,href:e.link},r.a.createElement(l.a.img,{src:Object(c.a)(e.image),alt:e.caption,whileHover:{scale:1.2},whileTap:{scale:.8}})):r.a.createElement("img",{key:e.caption,src:Object(c.a)(e.image),alt:e.caption})})):[]}},140:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(134),l=t(148),i=t(2),s=t(135),o=t(132),m=t(137),u=t.n(m),d=t(143),b=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),l=Object(d.useHistory)(),i=Object(o.a)().siteConfig,s=(void 0===i?{}:i).baseUrl,m=function(){a.current||(Promise.all([fetch(s+"search-doc.json").then((function(e){return e.json()})),fetch(s+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(73),t.e(75)]).then(t.bind(null,230)),t.e(54).then(t.t.bind(null,229,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=s+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:u()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:u()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:b,onBlur:b,ref:c}))},v=t(149),h=t(141),f=t(155),E=t(145),g=t(146),p=t(147),k=t(47),N=t.n(k),_=t(150);t(48);function O(e){return r.a.createElement("div",{className:"scroll-notifier",style:{visibility:e.useScrollNotifier?"visible":"hidden",width:100*e.scrollPercent+"%"}})}var j=t(46),w="right";var y=function(e){var a,t,l=Object(o.a)().siteConfig,m=void 0===l?{}:l,u=!1;try{u=window.location.pathname!=m.baseUrl}catch(me){}var d=Object(o.a)(),k=d.siteConfig.themeConfig,y=k.navbar,C=(y=void 0===y?{}:y).title,S=void 0===C?"":C,x=y.items,I=void 0===x?[]:x,L=y.hideOnScroll,B=void 0!==L&&L,T=y.style,M=void 0===T?void 0:T,P=k.colorMode,D=(P=void 0===P?{}:P).disableSwitch,H=void 0!==D&&D,F=d.isClient,U=Object(n.useState)(!1),A=U[0],R=U[1],G=Object(n.useState)(!1),J=G[0],K=G[1],V=Object(h.a)(),W=V.isDarkTheme,Y=V.setLightTheme,q=V.setDarkTheme,z=Object(f.a)(B),Q=z.navbarRef,X=z.isNavbarVisible,Z=Object(p.a)(),$=Z.logoLink,ee=Z.logoLinkProps,ae=Z.logoImageUrl,te=Z.logoAlt;Object(E.a)(A);var ne=Object(n.useCallback)((function(){R(!0)}),[R]),re=Object(n.useCallback)((function(){R(!1)}),[R]),ce=Object(n.useCallback)((function(e){return e.target.checked?q():Y()}),[Y,q]),le=Object(g.a)();Object(n.useEffect)((function(){le===g.b.desktop&&R(!1)}),[le]);var ie=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:w)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:w)}))}}(I),se=ie.leftItems,oe=ie.rightItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{ref:Q,className:Object(c.a)("navbar","navbar--fixed-top",(a={"navbar--dark":"dark"===M,"navbar--primary":"primary"===M,"navbar-sidebar--show":A},a[N.a.navbarHideable]=B,a[N.a.navbarHidden]=!X,a)),style:{position:"sticky"}},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=I&&0!==I.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:ne,onKeyDown:ne},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(s.a,Object(i.a)({className:"navbar__brand",to:$},ee),null!=ae&&r.a.createElement("img",{key:F,className:"navbar__logo",src:ae,alt:te}),null!=S&&r.a.createElement("strong",{className:Object(c.a)("navbar__title",(t={},t[N.a.hideLogoText]=J,t))},S)),se.map((function(e,a){return r.a.createElement(_.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},oe.map((function(e,a){return r.a.createElement(_.a,Object(i.a)({},e,{key:a}))})),r.a.createElement(j.default,null),!H&&r.a.createElement(v.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:W,onChange:ce}),r.a.createElement(b,{handleSearchBarToggle:K,isSearchBarExpanded:J}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:re}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(s.a,Object(i.a)({className:"navbar__brand",onClick:re,to:$},ee),null!=ae&&r.a.createElement("img",{key:F,className:"navbar__logo",src:ae,alt:te}),null!=S&&r.a.createElement("strong",{className:"navbar__title"},S)),!H&&A&&r.a.createElement(v.a,{"aria-label":"Dark mode toggle in sidebar",checked:W,onChange:ce})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},I.map((function(e,a){return r.a.createElement(_.a,Object(i.a)({mobile:!0},e,{onClick:re,key:a}))}))))))),r.a.createElement(O,{useScrollNotifier:u,scrollPercent:e.scrollPercent}))},C=t(151),S=t(152),x=t(154),I=(t(49),t(153));a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName,i=1,s=1;try{i=document.body.scrollHeight-window.innerHeight,s=Math.min(1,window.scrollY/i)}catch(m){}var o=Object(I.a)()[0];return r.a.createElement(S.a,null,r.a.createElement(x.a,e),r.a.createElement(l.a,null),r.a.createElement(y,{scrollPercent:s}),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n),ref:o},a),!t&&r.a.createElement(C.a,null))}},161:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t.n(n),c=t(135),l=t(64),i=t.n(l);function s(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:i.a.sidebar},r.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},46:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var n=t(0),r=t.n(n),c=t(132),l=t(45),i=t.n(l),s=t(138);function o(){var e=Object(c.a)().siteConfig,a=void 0===e?{}:e;return r.a.createElement("div",{className:i.a.splashLogo},Object(s.a)(a.customFields.Graphics.SPLASH_LOGOS))}},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(140),l=t(135),i=t(161);a.default=function(e){var a=e.tags,t=e.sidebar,n={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));var s=Object.entries(n).sort((function(e,a){var t=e[0],n=a[0];return t===n?0:t>n?1:-1})).map((function(e){var t=e[0],n=e[1];return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((function(e){return r.a.createElement(l.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(c.a,{title:"Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},s)))))}}}]);