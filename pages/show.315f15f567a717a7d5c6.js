webpackJsonp([0],{"5QA1":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"code"},[s("ul",{staticClass:"list pa2"},t._l(t.items,function(e){return s("li",{key:e.id,staticClass:"list__item f6"},[s("div",{staticClass:"score b f4"},[t._v(t._s(e.score))]),s("div",{staticClass:"title"},[s("span",[t._v(t._s(e.title))]),e.url?[t._v("\n           - "),s("a",{staticClass:"f7",attrs:{href:e.url}},[t._v(t._s(t._f("hostname")(e.url)))])]:t._e()],2),s("div",{staticClass:"details"},[t._v("by "),s("nuxt-link",{attrs:{to:"/user/"+e.by}},[t._v(t._s(e.by))]),t._v(" - "),s("span",{staticClass:"ma0 i f7"},[t._v(t._s(t._f("timeSince")(e.time))+" ago")])],1),s("div",{staticClass:"comments"},[s("nuxt-link",{attrs:{to:"/item/"+e.id}},[t._v(t._s(e.descendants?e.descendants:"0")+" comments")])],1)])}))])},n=[],i={render:a,staticRenderFns:n};e.a=i},Eh2o:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Items")],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},MBjo:function(t,e,s){"use strict";function a(t){s("hrY0")}var n=s("N/RL"),i=s("5QA1"),r=s("VU/8"),c=a,l=r(n.a,i.a,!1,c,"data-v-81cab99c",null);e.a=l.exports},"N/RL":function(t,e,s){"use strict";var a=s("NYxO");e.a={computed:Object(a.mapState)(["users","ids","items"])}},Nsh7:function(t,e,s){"use strict";var a=s("Xxa5"),n=s.n(a),i=s("exGp"),r=s.n(i),c=s("MBjo");e.a={components:{Items:c.a},fetch:function(){function t(t){return e.apply(this,arguments)}var e=r()(n.a.mark(function t(e){var s=e.store;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.dispatch("LOAD_ITEMS","showstories.json");case 2:case"end":return t.stop()}},t,this)}));return t}()}},hrY0:function(t,e,s){var a=s("p8BL");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("2b46e22e",a,!0)},p8BL:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".list__item[data-v-81cab99c]{display:grid;grid:repeat(4,1.5em)/repeat(10,1fr);grid-row-gap:1em}.list__item[data-v-81cab99c]:nth-of-type(2n){background:rgba(0,0,0,.2)}.score[data-v-81cab99c]{grid-row:1/-1;grid-column:span 1;-ms-flex-item-align:center;align-self:center;justify-self:center}.title[data-v-81cab99c]{grid-row:1/3;grid-column:2/-2;-ms-flex-item-align:end;align-self:end}.comments[data-v-81cab99c],.details[data-v-81cab99c]{grid-row:3/-1}.comments[data-v-81cab99c]{grid-column:2/6}.details[data-v-81cab99c]{grid-column:6/-2;justify-self:end}",""])},yOyD:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Nsh7"),n=s("Eh2o"),i=s("VU/8"),r=i(a.a,n.a,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=show.315f15f567a717a7d5c6.js.map