(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{241:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(48),n(58)),o=n.n(c),l={data:function(){return{sighting:{}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Accept:"application/json"}},e.prev=1,e.next=4,o.a.get("http://localhost:3004/s/${this.$route.params.id}",n);case 4:r=e.sent,t.sighting=r.data.sighting,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},h=n(28),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:"/list"}},[t._v("Back to sightings")]),t._v(" "),n("h2",[t._v(t._s(t.sighting))]),t._v(" "),n("hr"),t._v(" "),n("small",[t._v("Sighting ID: "+t._s(t.$route.params.id))])],1)}),[],!1,null,null,null);e.default=component.exports}}]);