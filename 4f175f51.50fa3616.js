/*! For license information please see 4f175f51.50fa3616.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{112:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},51:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(0),a=r.n(n),i=r(113),o=r(112),s=r.n(o),l=r(7),u=r.n(l),h=r(45),p=r.n(h);function d(e){var t=e.x,r=e.y,n=e.width,a=e.height;return["M"+t+" "+(r+a/4),"L"+(t+n/2)+" "+r,"L"+(t+n)+" "+(r+a/4),"L"+(t+n/2)+" "+(r+a/2),"Z"].join(" ")}function c(e){var t=e.width,r=e.height;return-1*Math.atan(r/4/(t/2))*(180/Math.PI)}function f(e){return a.a.createElement(i.a.g,{whileHover:{scale:1.05},whileTap:{scale:.95},animate:{y:e.yTransition||0},transition:{duration:.2}},a.a.createElement("a",{className:p.a.splashTextContainer,href:e.linkTo,target:"_blank"},a.a.createElement("path",{fill:e.sideColor,d:(t=e,r=t.x,n=t.y,o=t.width,l=t.height,["M"+r+" "+(n+l/4),"L"+r+" "+(n+3/4*l),"L"+(r+o/2)+" "+(n+l),"L"+(r+o)+" "+(n+3/4*l),"L"+(r+o)+" "+(n+l/4),"L"+(r+o/2)+" "+(n+l/2),"Z"].join(" "))}),a.a.createElement("path",{fill:e.topColor,d:d(e)}),a.a.createElement("text",{className:s()(p.a.splashText,p.a.splashBoxText),x:e.x+.7*e.width-e.y/5,y:e.y+e.height,dominantBaseline:"middle",textAnchor:"middle",transform:"rotate("+c(e)+")"},e.text)));var t,r,n,o,l}f.propTypes={x:u.a.number.isRequired,y:u.a.number.isRequired,width:u.a.number.isRequired,height:u.a.number.isRequired,yTransition:u.a.number,topColor:u.a.string.isRequired,sideColor:u.a.string.isRequired,linkTo:u.a.string,text:u.a.string}}}]);