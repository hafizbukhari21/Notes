(this["webpackJsonptodolist-deploy"]=this["webpackJsonptodolist-deploy"]||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),i=(a(16),a(17),a(18),a(6)),s=a(2),c=a.n(s),m=a(3),u=a(7),h=a(8),d=a(1),p=a(10),g=a(9),b=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={pushTitle:"",pushDesc:"",pushCategory:"",pushCity:"",pushCity_temp:"",pushDone:!1,todo_list:[],pushItem:{index:0,title:"",desc:"",category:"",city:"",city_temp:"",done:!1},int:[],getIndex:0,loading:!1},n.handlechage=n.handlechage.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.delete=n.delete.bind(Object(d.a)(n)),n.getTemprature=n.getTemprature.bind(Object(d.a)(n)),n.searchingCategory=n.searchingCategory.bind(Object(d.a)(n)),n.checkFinish=n.checkFinish.bind(Object(d.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("backup"));console.log(e),null!=e&&this.setState({todo_list:e})}},{key:"checkFinish",value:function(e){var t=Object.values(this.state.todo_list);t[e].category=t[e].category+" - Finished",this.setState({todo_list:t})}},{key:"delete",value:function(e){var t=this.state.todo_list;t.splice(e,1),this.setState({todo_list:t}),localStorage.setItem("backup",JSON.stringify(this.state.todo_list))}},{key:"getTemprature",value:function(){var e=Object(m.a)(c.a.mark((function e(t){var a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!=t&&void 0!=t&&null!=t||(t="jakarta,id"),e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=bf0b89e563a6be270297ec0e20ac8d05");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=JSON.stringify(n.main.temp),sessionStorage.setItem("temp",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"handlechage",value:function(e){this.setState(Object(i.a)({},e.target.name,e.target.value))}},{key:"searchingCategory",value:function(){}},{key:"handleSubmit",value:function(){var e=Object(m.a)(c.a.mark((function e(){var t,a,n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=this.state.pushTitle&&""!=this.state.pushDesc&&""!=this.state.pushCategory&&""!=this.state.pushCity){e.next=4;break}alert("Mohon Diisi Data yang masih kosong"),e.next=16;break;case 4:return this.setState({loading:!0}),setTimeout((function(){n.setState({loading:!1})}),1e3),t=this.state.todo_list,e.next=9,this.getTemprature(this.state.pushCity);case 9:a=(a=sessionStorage.getItem("temp")-273.15).toFixed(2),this.state.pushItem={index:this.state.getIndex,title:this.state.pushTitle,desc:this.state.pushDesc,category:this.state.pushCategory,city:this.state.pushCity,city_temp:a,done:!1},sessionStorage.removeItem("temp"),t.unshift(this.state.pushItem),this.setState({todo_list:t}),localStorage.setItem("backup",JSON.stringify(this.state.todo_list));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.loading;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{class:"container mt-5 "},r.a.createElement("div",{class:"card",style:{border:"0.5px solid gray"}},r.a.createElement("div",{class:"card-header text-light bg-dark"},"Todo List -"),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Title"),r.a.createElement("input",{type:"text",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Something Might be Happen",name:"pushTitle",onChange:this.handlechage})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleFormControlTextarea1"},"Description"),r.a.createElement("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3",name:"pushDesc",onChange:this.handlechage})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"Category"),r.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect1",name:"pushCategory",onChange:this.handlechage},r.a.createElement("option",null),r.a.createElement("option",{value:"Hollyday"},"Hollyday"),r.a.createElement("option",{value:"Work"},"Work"),r.a.createElement("option",{value:"School"},"School"),r.a.createElement("option",{value:"Urgent"},"Urgent"),r.a.createElement("option",{value:"Other"},"Other.."))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleFormControlSelect1"},"City"),r.a.createElement("select",{class:"form-control",id:"exampleFormControlSelect1",name:"pushCity",onChange:this.handlechage},r.a.createElement("option",null),r.a.createElement("option",{value:"jakarta,id"},"Jakarta"),r.a.createElement("option",{value:"berlin,de"},"Berlin"),r.a.createElement("option",{value:"london,uk"},"London"),r.a.createElement("option",{value:"tokyo,jp"},"Tokyo"),r.a.createElement("option",{value:"surabaya,id"},"Surabaya"),r.a.createElement("option",{value:"medan,id"},"Medan"),r.a.createElement("option",{value:"bandung,id"},"Bandung"),r.a.createElement("option",{value:"tangerang,id"},"tangerang"))),!t&&r.a.createElement("button",{class:"btn btn-primary",onClick:this.handleSubmit,disabled:t},"Add Todo"),t&&r.a.createElement("div",{class:"spinner-border text-primary",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading...")))),r.a.createElement("div",{class:"alert alert-dark mt-4",role:"alert"},"By ",r.a.createElement("a",{href:"https://hafizbukhari21.github.io/portofolio/"},"M. Hafiz B.")," - Ini gak pake api. Paling cuma api cuaca doang..")),r.a.createElement("div",{class:"container "},r.a.createElement("div",{class:"row"},this.state.todo_list.map((function(t,a){return r.a.createElement("div",{class:"col-sm-6 mt-3"},r.a.createElement("div",{class:"card"},r.a.createElement("h5",{class:"card-header bg-primary text-white"},t.title," - ",t.category),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"}," ",t.desc," "),r.a.createElement("p",{class:"card-text text-secondary"}," ",t.city,",\xa0 ",t.city_temp,r.a.createElement("sup",null,"0")," "),r.a.createElement("div",{class:"form-check"},r.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1",onClick:function(){return e.checkFinish(parseInt(a))},value:a}),r.a.createElement("label",{class:"form-check-label",for:"exampleCheck1"},"Finish")),r.a.createElement("a",{class:"btn btn-danger text-white",value:a,onClick:function(){return e.delete(parseInt(a))}},"Delete"))))})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(r.a.Component);var y=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.e6faea8e.chunk.js.map