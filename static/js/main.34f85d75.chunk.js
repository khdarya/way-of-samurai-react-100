(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/user.5eaf6836.png"},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(39),r=n(4),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi, how are you?"},{id:2,message:"How is your IT"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i={sendMessageActionCreator:function(e){return{type:"SEND-MESSAGE",text:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:(new Date).getTime(),message:t.text};return Object(r.a)(Object(r.a)({},e),{},{messages:[n].concat(Object(a.a)(e.messages))});default:return e}return e}},132:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1m2iX",selectedPage:"Users_selectedPage__J4Xec"}},133:function(e,t,n){e.exports=n.p+"static/media/preloader.27fc27b6.svg"},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(131),r=n.n(a).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"979d9ce7-5a57-44f9-9b9c-37da1881885c"}}),o={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object "),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/"+e)},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},162:function(e,t,n){e.exports=n(288)},167:function(e,t,n){},168:function(e,t,n){},21:function(e,t,n){e.exports={nav:"Navbar_nav__3terb",item:"Navbar_item__3-vLz",activeLink:"Navbar_activeLink__2KqzE"}},288:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(62),i=n.n(o),c=(n(167),n(34)),u=n(35),s=n(37),l=n(36),m=(n(168),n(9)),f=n(12),p=n(21),d=n.n(p),g=function(){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/users",activeClassName:d.a.activeLink},"Users")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/news"},"News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/music"},"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/settings"},"Settings")))},E=n(16),h=n(11),b=n.n(h),v=n(24),O=n(39),S=n(4),w=n(14),j={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},P=function(e){return{type:"FOLOW",userId:e}},C=function(e){return{type:"UNFOLLOW",userId:e}},y=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},_=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},k=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},I=function(){var e=Object(v.a)(b.a.mark((function e(t,n,a,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(k(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAKE":return Object(S.a)(Object(S.a)({},e),{},{fake:e.fake+1});case"FOLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)(Object(S.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(S.a)(Object(S.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(S.a)(Object(S.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(S.a)(Object(S.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(S.a)(Object(S.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(S.a)(Object(S.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},T=n(132),U=n.n(T),A=n(104),L=n.n(A),F=n(128),x=n(43),z=n.n(x),R=function(e){for(var t=e.pageSize,n=e.totalUsersCount,o=e.currentPage,i=e.onPageChanged,c=e.portionSize,u=void 0===c?10:c,s=Math.ceil(n/t),l=[],m=1;m<=s;m++)l.push(m);var f=Math.ceil(s/u),p=Object(a.useState)(1),d=Object(F.a)(p,2),g=d[0],E=d[1],h=(g-1)*u+1,b=g*u,v=function(e){return o===e?"".concat(z.a.pageNumber,"  ").concat(z.a.selectedPage):z.a.pageNumber};return r.a.createElement("div",{className:z.a.paginator},g>1?r.a.createElement("span",null,r.a.createElement("button",{onClick:function(){return E(1)}},"to start"),r.a.createElement("button",{onClick:function(){return E(g-1)}},"PREV")):"",l.filter((function(e){return e>=h&&e<=b})).map((function(e){return r.a.createElement("span",{className:v(e),key:e,onClick:function(t){i(e)}},e)})),f>g?r.a.createElement("span",null,r.a.createElement("button",{className:z.a.paginator_btn,onClick:function(){return E(g+1)}},"NEXT"),r.a.createElement("button",{onClick:function(){return E(f)}},"to end")):"")},G=function(e){var t=e.pageSize,n=e.totalUsersCount,a=e.currentPage,o=e.onPageChanged;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(R,{currentPage:a,onPageChanged:o,pageSize:t,totalUsersCount:n,portionSize:5})),e.users.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:L.a,className:U.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city")))})))},D=n(63),M=n(8),H=n(134),W=Object(H.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),B=function(e){return e.usersPage.pageSize},Y=function(e){return e.usersPage.totalUsersCount},J=function(e){return e.usersPage.currentPage},q=function(e){return e.usersPage.isFetching},K=function(e){return e.usersPage.followingInProgress},V=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(D.a,null):null,r.a.createElement(G,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,toggleFollowingProgress:this.props.toggleFollowingProgress}))}}]),n}(r.a.Component),X=Object(M.d)(Object(E.b)((function(e){return{users:W(e),pageSize:B(e),totalUsersCount:Y(e),currentPage:J(e),isFetching:q(e),followingInProgress:K(e)}}),{follow:function(e){return function(){var t=Object(v.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=w.c.follow.bind(w.c),I(n,e,a,P);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:I(n,e,w.c.unfollow.bind(w.c),C);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:y,toggleFollowingProgress:k,getUsers:function(e,t){return function(n){n(_(!0)),n(y(e)),w.c.getUsers(e,t).then((function(e){n(_(!1)),n({type:"SET-USERS",users:e.items}),n({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:e.totalCount})}))}}}))(V),Z=n(89),Q=n.n(Z),$=function(e){return r.a.createElement("header",{className:Q.a.header},r.a.createElement("img",{src:"https://www.epicentrofestival.com/wp-content/uploads/2019/12/zen-buddhism-drawing-circle-logo-hd-hakuinampaposs-circle-circle-of-life-chine-720x736.jpg"}),r.a.createElement("div",{className:Q.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(f.b,{to:"/login"},"Login")))},ee=n(53),te={email:null,login:null,isAuth:!1,userId:null},ne=function(e,t,n,a){return{type:"SET-AUTH-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},ae=function(){return function(){var e=Object(v.a)(b.a.mark((function e(t){var n,a,r,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,i=a.login,t(ne(r,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(S.a)(Object(S.a)({},e),t.payload);default:return e}},oe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement($,{login:this.props.login,isAuth:this.props.isAuth,logout:this.props.logout})}}]),n}(r.a.Component),ie=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){w.a.logout().then((function(t){0===t.data.resultCode&&e(ne(null,null,null,!1))}))}}})(oe),ce=n(126),ue=n(127),se=n(64),le=n(71),me=n(32),fe=n.n(me),pe=Object(ue.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(ce.a,{placeholder:"Email",name:"email",validate:[le.b],component:se.a})),r.a.createElement("div",null,r.a.createElement(ce.a,{placeholder:"Password",name:"password",type:"password",validate:[le.b],component:se.a})),r.a.createElement("div",null,r.a.createElement(ce.a,{component:se.a,name:"rememberMe",type:"checkbox"})," remember me"),n&&r.a.createElement("div",{className:fe.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),de=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(v.a)(b.a.mark((function a(r){var o,i;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(ae()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(ee.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ge={initialized:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{initialized:!0});default:return e}},he=n(93),be=n(125),ve=n(136),Oe=n(129),Se=Object(M.c)({profilePage:he.b,dialogsPage:be.b,usersPage:N,auth:re,form:Oe.a,app:Ee}),we=Object(M.e)(Se,Object(M.a)(ve.a)),je=r.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),Pe=r.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),Ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ie,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(je,null))}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:(e=Pe,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))})}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(de,null)}})))):r.a.createElement(D.a,null);var e}}]),n}(r.a.Component),ye=Object(M.d)(m.g,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(ae());case 2:t({type:"INITIALIZED_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Ce),_e=function(){return r.a.createElement(f.a,null,r.a.createElement(E.a,{store:we},r.a.createElement(ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=document.createElement("h1");ke.innerHTML="Hello",document.querySelector("body").appendChild(ke),r.a.createElement("h1",[r.a.createElement(_e)]),i.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){e.exports={formControl:"FormsControls_formControl__fPHY-",error:"FormsControls_error__2JZrf",formSummaryError:"FormsControls_formSummaryError__2_YFN"}},43:function(e,t,n){e.exports={paginator:"Paginator_paginator__3r4sg",pageNumber:"Paginator_pageNumber__3IApo",selectedPage:"Paginator_selectedPage__1LjfB",paginator_btn:"Paginator_paginator_btn__Qkhmh"}},63:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(133),i=n.n(o);t.a=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:i.a}))}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(92),r=n(0),o=n.n(r),i=n(32),c=n.n(i),u=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:c.a.formControl+" "+(i?c.a.error:"")},o.a.createElement("div",null,o.a.createElement("textarea",Object.assign({},t,r))),i&&o.a.createElement("span",null,n.error))},s=function(e){var t=e.input,n=e.meta,r=Object(a.a)(e,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:c.a.formControl+" "+(i?c.a.error:"")},o.a.createElement("div",null,o.a.createElement("input",Object.assign({},t,r))),i&&o.a.createElement("span",null,n.error))}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={header:"Header_header__JC3Hd",loginBlock:"Header_loginBlock__2LWjY"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return m}));var a=n(39),r=n(4),o=n(14),i={posts:[{id:1,message:"Hi how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:10},{id:3,message:"Bla",likesCount:11},{id:4,message:"Dada",likesCount:14}],profile:null,status:""},c=function(e){return{type:"ADD-POST",message:e}},u=function(e){return{type:"SET-STATUS",status:e}},s=function(e){return function(t){o.c.getProfile(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e.data})}))}},l=function(e){return function(t){o.b.getStatus(e).then((function(e){t(u(e.data))}))}},m=function(e){return function(t){o.b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(u(e))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:(new Date).getTime(),message:t.message,likesCount:0};return Object(r.a)(Object(r.a)({},e),{},{posts:[n].concat(Object(a.a)(e.posts))});case"SET-STATUS":return Object(r.a)(Object(r.a)({},e),{},{status:t.status});case"SET-USER-PROFILE":return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});case"DELETE-POST":return Object(r.a)(Object(r.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}return e}}},[[162,1,2]]]);
//# sourceMappingURL=main.34f85d75.chunk.js.map