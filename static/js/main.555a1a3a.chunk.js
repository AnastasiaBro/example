(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),s=a.n(l),c=(a(14),a(1)),r=a(2),i=a(4),u=a(3),m=a(5),p=(a(16),a(8)),d=a.n(p);a(22);localStorage.setItem("next",1);var h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,hasMoreItems:!0,nextHref:a.props.next},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"loadContent",value:function(){var e=this;console.log("-------------------------------------"),this._isMounted=!0;var t="https://swapi.co/api/people?page=1",a=this;console.log(t),1!=localStorage.getItem("next")&&(t="https://swapi.co/api/people?page="+localStorage.getItem("next"),console.log("\u0441\u0441\u044b\u043b\u043a\u0430 \u0438\u0437\u043c",t)),fetch(t).then(function(e){return e.json()}).then(function(n){var o=e.state.data;n.results.map(function(e){o.push(e)}),console.log(n.count,">",10*Number(localStorage.getItem("next"))),console.log(o),n.count>10*localStorage.getItem("next")?(console.log(e.state.data.length,10*localStorage.getItem("next")),localStorage.setItem("next",Number(localStorage.getItem("next"))+1),t="https://swapi.co/api/people?page="+localStorage.getItem("next"),console.log(t),a.setState({data:o}),console.log("\u0441\u0441\u044b\u043b\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0430\u0441\u044c?",localStorage.getItem("next"))):e.setState({hasMoreItems:!1}),console.log(e.state.data)}).catch(function(e){return console.log("err "+e)})}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidMount",value:function(){this.loadContent(),this._isMounted=!0}},{key:"render",value:function(){var e=this,t=o.a.createElement("div",{className:"loader"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...");console.log(this.state.data);var a=null;return void 0!==this.state.data?(a=this.state.data.map(function(e){return o.a.createElement("div",{className:"item",key:e.created},e.name)}),o.a.createElement("div",null,o.a.createElement(d.a,{pageStart:0,loadMore:this.loadContent.bind(this),hasMore:this.state.hasMoreItems,loader:t,key:this.props.id},o.a.createElement("ul",{className:"product__list",onScroll:function(t){return e.onScrollList(t)},transition:"ease 0.5s"},a)))):o.a.createElement("div",{className:"spinner"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(h,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.555a1a3a.chunk.js.map