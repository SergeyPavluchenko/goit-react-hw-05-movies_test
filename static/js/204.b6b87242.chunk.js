"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[204],{7575:function(e,n,t){t.d(n,{Ai:function(){return h},Bt:function(){return f},Tg:function(){return s},d5:function(){return p},iQ:function(){return o}});var r=t(5861),a=t(7757),u=t.n(a),c=t(3016);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="ce944bb11a9efac75ddff7e953af9ce2",s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat(i,"&include_adult=false&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},6204:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,u=t(5861),c=t(9439),i=t(7757),s=t.n(i),o=t(7575),p=t(2791),f=t(5218),h=t(7689),d=t(168),l=t(5867),v=l.default.li(r||(r=(0,d.Z)(["\n  list-style: none;\n"]))),g=l.default.span(a||(a=(0,d.Z)(["\n  font-weight: bold;\n"]))),x=t(184),m=function(){var e=(0,h.UO)().filmId,n=(0,p.useState)([]),t=(0,c.Z)(n,2),r=t[0],a=t[1];(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.Bt)(e);case 3:return t=n.sent,a(t.data.results),n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),f.ZP.error("This didn't work.");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]);var i=r.length;return(0,x.jsx)(x.Fragment,{children:0!==i?(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Reviews:"}),(0,x.jsx)("ul",{children:r.map((function(e){var n=e.id,t=e.author,r=e.author_details.rating,a=e.content;return(0,x.jsxs)(v,{children:[(0,x.jsxs)("p",{children:[(0,x.jsx)(g,{children:"Author: "}),t]}),(0,x.jsxs)("p",{children:[(0,x.jsx)(g,{children:"Raiting:"})," ",r," "]}),(0,x.jsxs)("p",{children:[(0,x.jsxs)("p",{children:[(0,x.jsx)(g,{children:"Content:"})," "]}),a]})]},n)}))})]}):(0,x.jsx)("h3",{children:"Reviews: no result"})})}}}]);
//# sourceMappingURL=204.b6b87242.chunk.js.map