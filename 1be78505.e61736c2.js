(window.webpackJsonp=window.webpackJsonp||[]).push([[12,60,76],{172:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(168),l=t(182),i=t(3),s=t(170),o=t.n(s),u=t(175),m=t(21),d=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),l=Object(u.useHistory)(),i=Object(m.default)().siteConfig,s=(void 0===i?{}:i).baseUrl,d=function(){a.current||(Promise.all([fetch(s+"search-doc.json").then((function(e){return e.json()})),fetch(s+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(97),t.e(102)]).then(t.bind(null,280)),t.e(66).then(t.t.bind(null,279,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=s+t.url;document.createElement("a").href=n,l.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},b=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:b,onBlur:b,ref:c}))},b=t(183),h=t(176),v=t(169),f=t(184),g=t(177),p=t(178),j=t(189),E=t(181),k=t(180),y=t(54),O=t.n(y);t(55);function _(e){return r.a.createElement("div",{className:"scroll-notifier",style:{visibility:e.useScrollNotifier?"visible":"hidden",width:100*e.scrollPercent+"%"}})}var N="right";var x=function(e){var a,t,l=Object(m.default)().siteConfig,s=void 0===l?{}:l,o=!1;try{o=window.location.pathname!=s.baseUrl}catch(G){}var u=Object(v.useThemeConfig)(),y=u.navbar,x=y.items,C=y.hideOnScroll,w=y.style,B=u.colorMode.disableSwitch,S=Object(n.useState)(!1),T=S[0],I=S[1],L=Object(n.useState)(!1),P=L[0],D=L[1],R=Object(h.a)(),H=R.isDarkTheme,F=R.setLightTheme,M=R.setDarkTheme,$=Object(f.a)(C),A=$.navbarRef,J=$.isNavbarVisible;Object(g.a)(T);var K=Object(n.useCallback)((function(){I(!0)}),[I]),U=Object(n.useCallback)((function(){I(!1)}),[I]),V=Object(n.useCallback)((function(e){return e.target.checked?M():F()}),[F,M]),W=Object(p.a)();Object(n.useEffect)((function(){W===p.b.desktop&&I(!1)}),[W]);var Y=function(e){return{leftItems:e.filter((function(e){var a;return"left"===(null!==(a=e.position)&&void 0!==a?a:N)})),rightItems:e.filter((function(e){var a;return"right"===(null!==(a=e.position)&&void 0!==a?a:N)}))}}(x),q=Y.leftItems,z=Y.rightItems;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{ref:A,className:Object(c.a)("navbar","navbar--fixed-top",(a={"navbar--dark":"dark"===w,"navbar--primary":"primary"===w,"navbar-sidebar--show":T},a[O.a.navbarHideable]=C,a[O.a.navbarHidden]=!J,a))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=x&&0!==x.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:K,onKeyDown:K},r.a.createElement(k.a,null)),r.a.createElement(E.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",(t={},t[O.a.hideLogoText]=P,t))}),q.map((function(e,a){return r.a.createElement(j.a,Object(i.a)({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},z.map((function(e,a){return r.a.createElement(j.a,Object(i.a)({},e,{key:a}))})),!B&&r.a.createElement(b.a,{className:O.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:H,onChange:V}),r.a.createElement(d,{handleSearchBarToggle:D,isSearchBarExpanded:P}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:U}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(E.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:U}),!B&&T&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:H,onChange:V})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},x.map((function(e,a){return r.a.createElement(j.a,Object(i.a)({mobile:!0},e,{onClick:U,key:a}))}))))))),r.a.createElement(_,{useScrollNotifier:o,scrollPercent:e.scrollPercent}))},C=t(185),w=t(186),B=t(188),S=(t(56),t(187));a.a=function(e){var a=e.children,t=e.noFooter,n=e.wrapperClassName,i=1,s=1;try{i=document.body.scrollHeight-window.innerHeight,s=Math.min(1,window.scrollY/i)}catch(u){}var o=Object(S.a)()[0];return r.a.createElement(w.a,null,r.a.createElement(B.a,e),r.a.createElement(l.a,null),r.a.createElement(x,{scrollPercent:s}),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n),ref:o},a),!t&&r.a.createElement(C.a,null))}},206:function(e,a,t){"use strict";var n=t(3),r=t(0),c=t.n(r),l=t(168),i=t(208),s=t(198),o=t.n(s),u=t(199),m=t.n(u),d=t(207),b=t(71),h=t.n(b),v=t(169);function f(e){return c.a.createElement("div",{style:{width:"12px",height:"12px",marginBottom:"16px",borderRadius:"50%",backgroundColor:e.color,marginLeft:e.margin?"8px":"0"}})}var g=/{([\d,-]+)}/,p=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var a={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},t=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+a[e].start+"\\s*("+t+")\\s*"+a[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},j=/(?:title=")(.*)(?:")/;a.a=function(e){var a=e.children,t=e.className,s=e.metastring,u=Object(v.useThemeConfig)().prism,b=Object(r.useState)(!1),E=b[0],k=b[1],y=Object(r.useState)(!1),O=y[0],_=y[1];Object(r.useEffect)((function(){_(!0)}),[]);var N=Object(r.useRef)(null),x=[],C="",w=!1,B=Object(d.a)(),S=Array.isArray(a)?a.join(""):a;if(s&&g.test(s)){var T=s.match(g)[1];x=m()(T).filter((function(e){return e>0}))}s&&j.test(s)&&(C=s.match(j)[1]),s&&s.includes("terminal=true")&&(w=!0);var I=t&&t.replace(/language-/,"");!I&&u.defaultLanguage&&(I=u.defaultLanguage);var L=S.replace(/\n$/,"");if(0===x.length&&void 0!==I){for(var P,D="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return p(["js","jsBlock"]);case"jsx":case"tsx":return p(["js","jsBlock","jsx"]);case"html":return p(["js","jsBlock","html"]);case"python":case"py":return p(["python"]);default:return p()}}(I),H=S.replace(/\n$/,"").split("\n"),F=0;F<H.length;){var M=F+1,$=H[F].match(R);if(null!==$){switch($.slice(1).reduce((function(e,a){return e||a}),void 0)){case"highlight-next-line":D+=M+",";break;case"highlight-start":P=M;break;case"highlight-end":D+=P+"-"+(M-1)+","}H.splice(F,1)}else F+=1}x=m()(D),L=H.join("\n")}var A=function(){o()(L),k(!0),setTimeout((function(){return k(!1)}),2e3)};return c.a.createElement(i.a,Object(n.a)({},i.b,{key:String(O),theme:B,code:L,language:I}),(function(e){var a,t=e.className,r=e.style,i=e.tokens,s=e.getLineProps,o=e.getTokenProps;return c.a.createElement(c.a.Fragment,null,C&&c.a.createElement("div",{style:r,className:h.a.codeBlockTitle},C),c.a.createElement("div",{className:h.a.codeBlockContent},c.a.createElement("div",{tabIndex:0,className:Object(l.a)(t,h.a.codeBlock,"thin-scrollbar",(a={},a[h.a.codeBlockWithTitle]=C,a))},c.a.createElement("div",{className:h.a.codeBlockLines,style:r},w&&c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(f,{color:"#ff5f56",margin:!1}),c.a.createElement(f,{color:"#ffbd2e",margin:!0}),c.a.createElement(f,{color:"#27c93f",margin:!0})),i.map((function(e,a){1===e.length&&""===e[0].content&&(e[0].content="\n");var t=s({line:e,key:a});return x.includes(a+1)&&(t.className=t.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(n.a)({key:a},t),e.map((function(e,a){return c.a.createElement("span",Object(n.a)({key:a},o({token:e,key:a})))})))})))),c.a.createElement("button",{ref:N,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(h.a.copyButton),onClick:A},E?"Copied":"Copy")))}))}}}]);