(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(157),l=t(171),i=t(3),s=t(159),o=t.n(s),m=t(164),u=t(21),b=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),l=Object(m.useHistory)(),i=Object(u.default)().siteConfig,s=(void 0===i?{}:i).baseUrl,b=function(){a.current||(Promise.all([fetch(s+"search-doc.json").then((function(e){return e.json()})),fetch(s+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(88),t.e(93)]).then(t.bind(null,259)),t.e(62).then(t.t.bind(null,258,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=s+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},d=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:d,onBlur:d,ref:c}))},d=t(172),h=t(165),v=t(158),f=t(173),E=t(166),p=t(167),g=t(178),N=t(170),_=t(169),k=t(54),j=t.n(k),O="right";var C=function(){var e,a,t=Object(v.useThemeConfig)(),l=t.navbar,s=l.items,o=l.hideOnScroll,m=l.style,u=t.colorMode.disableSwitch,k=Object(n.useState)(!1),C=k[0],w=k[1],y=Object(n.useState)(!1),S=y[0],x=y[1],I=Object(h.a)(),T=I.isDarkTheme,B=I.setLightTheme,D=I.setDarkTheme,L=Object(f.a)(o),H=L.navbarRef,M=L.isNavbarVisible;Object(E.a)(C);var P=Object(n.useCallback)((function(){w(!0)}),[w]),R=Object(n.useCallback)((function(){w(!1)}),[w]),F=Object(n.useCallback)((function(e){return e.target.checked?D():B()}),[B,D]),J=Object(p.a)();Object(n.useEffect)((function(){J===p.b.desktop&&w(!1)}),[J]);var K=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:O)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:O)}))}}(s),U=K.leftItems,V=K.rightItems;return r.a.createElement("nav",{ref:H,className:Object(c.a)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===m,"navbar--primary":"primary"===m,"navbar-sidebar--show":C},e[j.a.navbarHideable]=o,e[j.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=s&&0!==s.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:P,onKeyDown:P},r.a.createElement(_.a,null)),r.a.createElement(N.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(a={},a[j.a.hideLogoText]=S,a))}),U.map((function(e,a){return r.a.createElement(g.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},V.map((function(e,a){return r.a.createElement(g.a,Object(i.a)({},e,{key:a}))})),!u&&r.a.createElement(d.a,{className:j.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:T,onChange:F}),r.a.createElement(b,{handleSearchBarToggle:x,isSearchBarExpanded:S}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:R}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:R}),!u&&C&&r.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:T,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},s.map((function(e,a){return r.a.createElement(g.a,Object(i.a)({mobile:!0},e,{onClick:R,key:a}))})))))))},w=t(174),y=t(175),S=t(177),x=(t(55),t(176));a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName,i=1,s=1;try{i=document.body.scrollHeight-window.innerHeight,s=Math.min(1,window.scrollY/i)}catch(m){}var o=Object(x.a)()[0];return r.a.createElement(y.a,null,r.a.createElement(S.a,e),r.a.createElement(l.a,null),r.a.createElement(C,{scrollPercent:s}),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n),ref:o},a),!t&&r.a.createElement(w.a,null))}},184:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(0),r=t.n(n),c=t(157),l=t(160),i=t(68),s=t.n(i);function o(e){var a=e.sidebar;return 0===a.items.length?null:r.a.createElement("div",{className:Object(c.a)(s.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:s.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:s.a.sidebarItemList},a.items.map((function(e){return r.a.createElement("li",{key:e.permalink,className:s.a.sidebarItem},r.a.createElement(l.a,{isNavLink:!0,to:e.permalink,className:s.a.sidebarItemLink,activeClassName:s.a.sidebarItemLinkActive},e.title))}))))}},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(161),l=t(160),i=t(184);a.default=function(e){var a=e.tags,t=e.sidebar,n={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));var s=Object.entries(n).sort((function(e,a){var t=e[0],n=a[0];return t===n?0:t>n?1:-1})).map((function(e){var t=e[0],n=e[1];return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((function(e){return r.a.createElement(l.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.a.createElement("hr",null))})).filter((function(e){return null!=e}));return r.a.createElement(c.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},s)))))}}}]);