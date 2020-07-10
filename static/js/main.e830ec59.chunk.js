(this.webpackJsonpcronastats=this.webpackJsonpcronastats||[]).push([[0],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),u=(a(78),a(2)),s=a.n(u),i=a(4),l=a(59),d=a(60),p=a(72),f=a(71),h=a(61),m=a.n(h),v=a(9),b=a.n(v),_=a(62),g=a.n(_),y=a(63),C=a.n(y),k=a(64),E=a.n(k),w=a(65),j=a.n(w),x=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths;if(!a)return"loading...";var o=[E.a,j.a,C.a],u=[a,n,c];return u[0].name="infected",u[1].name="recovered",u[2].name="deaths",r.a.createElement("div",{className:b.a.container},u.map((function(e,t){return r.a.createElement("div",{key:e.name,className:g()(b.a.card,b.a[e.name])},r.a.createElement("img",{src:o[t],alt:e.name,className:b.a.cardIcon}),r.a.createElement("h3",{className:b.a.cardValue},r.a.createElement(m.a,{start:0,end:e.value,duration:2.5,separator:"."})),r.a.createElement("h2",{className:b.a.cardTitle},e.name))})))},O=a(14),D=a(21),N=a.n(D),I="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I,t&&(a="".concat(I,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(I,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(22),F=a(67),T=a.n(F);A.c.global.legend.display=!1;var z=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,l=Object(n.useState)([]),d=Object(O.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=p.length?r.a.createElement(A.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),borderColor:"rgba(255, 162, 0, 1)",fill:!0,backgroundColor:"rgba(255, 162, 0, 0.1"},{data:p.map((function(e){return e.deaths})),borderColor:"rgba(238, 60, 60, 1)",backgroundColor:"rgba(238, 60, 60, 0.1)",fill:!0}]}}):null,m=a?r.a.createElement(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255, 162, 0, .5)","rgba(52, 198, 53, .5)","rgba(238, 60, 60, .5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1}}}):null;return r.a.createElement("div",{className:T.a.container},u?m:h)},P=a(70),Z=a(68),G=a.n(Z),J=function(e){var t=e.handleCountryChange,a=e.country,c=Object(n.useState)([]),o=Object(O.a)(c,2),u=o[0],l=o[1],d=Object(n.useState)(a),p=Object(O.a)(d,2),f=p[0],h=p[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,V();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]);var m=[{value:"",label:"Global"}];return u.map((function(e){return m.push({value:e,label:e})})),r.a.createElement("div",{className:G.a.picker},r.a.createElement(P.a,{placeholder:"by Country",value:f,onChange:function(e){h(e.value),t(e.value)},options:m}))},M=a(23),Q=a.n(M),q=(a(192),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setFetchedData(a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setFetchedData=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a||"");case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setFetchedData(a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setFetchedData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:Q.a.container},r.a.createElement("header",{className:Q.a.header},r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement("p",null,"Last Update on "," ",r.a.createElement("span",null,new Date(t.lastUpdate).toDateString()))),r.a.createElement(x,{data:t}),r.a.createElement("div",{className:Q.a.picker},r.a.createElement("h2",null,"Cases"),r.a.createElement(J,{country:a,handleCountryChange:this.handleCountryChange})),r.a.createElement(z,{data:t,country:a}))}}]),a}(r.a.Component));o.a.render(r.a.createElement(q,null),document.getElementById("root"))},23:function(e,t,a){e.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",picker:"App_picker__2V-Du"}},63:function(e,t,a){e.exports=a.p+"static/media/deaths.b604feeb.svg"},64:function(e,t,a){e.exports=a.p+"static/media/infected.2ace55b1.svg"},65:function(e,t,a){e.exports=a.p+"static/media/recovered.c809f6a4.svg"},67:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},68:function(e,t,a){e.exports={picker:"CountryPicker_picker__Ndewb"}},73:function(e,t,a){e.exports=a(193)},78:function(e,t,a){},9:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",cardTitle:"Cards_cardTitle__29IaC",cardValue:"Cards_cardValue__1cu9w",cardIcon:"Cards_cardIcon__Wzed_",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}}},[[73,1,2]]]);
//# sourceMappingURL=main.e830ec59.chunk.js.map