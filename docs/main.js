"use strict";(self.webpackChunkAngular_demo=self.webpackChunkAngular_demo||[]).push([["main"],{3098:(c,m,s)=>{var p=s(1481),e=s(4650);var a=s(2997),A=s(2655),i=(s(825),(()=>{return(t=i||(i={})).NAV_OPEN="[Global] NAV: open",t.NAV_CLOSE="[Global] NAV: close",t.NAV_TOGGLE="[Global] NAV: toggle",t.LAST_URL="[Global] NAV: Last url",i;var t})());class N{constructor(){this.type=i.NAV_OPEN}}class O{constructor(){this.type=i.NAV_CLOSE}}class f{constructor(){this.type=i.NAV_TOGGLE}}const C={entities:{isNavOpen:!1,lastUrlVisited:"/"}},h=(0,a.ZF)("navigation"),M=(0,a.P1)(h,t=>(console.log("state: ",t),t.entities)),l=((0,a.P1)(h,t=>t.entities.lastUrlVisited),(0,a.P1)(M,t=>t.isNavOpen)),T={navigation:function _(t=C,o){switch(o.type){case i.NAV_OPEN:return{...t,entities:{...t.entities,isNavOpen:!0}};case i.NAV_CLOSE:return{...t,entities:{...t.entities,isNavOpen:!1}};case i.NAV_TOGGLE:return{...t,entities:{...t.entities,isNavOpen:!t.entities.isNavOpen}};case i.LAST_URL:return{...t,entities:o.payload};default:return t}}},S=[];var u=s(8704);const x=[];let L=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forRoot(x),u.Bz]}),t})();var v=s(1416),d=s(6895);let Z=(()=>{class t{constructor(n){this.store=n}ngOnInit(){this.menuState$=this.store.pipe((0,a.Ys)(l))}toggleMenu(){this.store.dispatch(new f)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],decls:8,vars:3,consts:[[1,"header"],[1,"header__title"],["routerLink","/",1,"app-a"],[1,"header__navigation"],[1,"button-clear",3,"click"],[3,"innerText"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"section",1)(2,"a",2),e._uU(3," Angular demo "),e.qZA()(),e.TgZ(4,"section",3)(5,"button",4),e.NdJ("click",function(){return r.toggleMenu()}),e._UZ(6,"mat-icon",5),e.ALo(7,"async"),e.qZA()()()),2&n&&(e.xp6(6),e.Q6J("innerText",e.lcZ(7,1,r.menuState$)?"menu_open":"menu"))},dependencies:[u.yS,v.Hw,d.Ov],styles:["section[_ngcontent-%COMP%]{padding:.8rem 1.2rem;display:flex;align-items:center}.header[_ngcontent-%COMP%]{background-color:#fff;display:flex;justify-content:space-between;position:fixed;width:100%;z-index:4;height:6.4rem}.header__navigation[_ngcontent-%COMP%]{margin-right:1rem}.header__navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),t})(),b=(()=>{class t{constructor(n){this.store=n}ngOnInit(){this.menuState$=this.store.pipe((0,a.Ys)(l))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-main-menu"]],decls:4,vars:4,consts:[[1,"app-main-nav"]],template:function(n,r){1&n&&(e.TgZ(0,"nav",0),e.ALo(1,"async"),e.TgZ(2,"div"),e._uU(3," Coucou les amis "),e.qZA()()),2&n&&e.ekj("app-main-nav-open",e.lcZ(1,2,r.menuState$))},dependencies:[d.Ov],styles:[".app-main-nav[_ngcontent-%COMP%]{position:fixed;width:300px;right:0;left:initial;display:flex;background:red;z-index:6;flex-direction:column;height:100%;overflow:hidden;transform:translate(100%);transition-property:transform;-webkit-backdrop-filter:none;backdrop-filter:none}.app-main-nav-open[_ngcontent-%COMP%]{transform:translate(0);left:initial}"]}),t})(),w=(()=>{class t{constructor(n){this.store=n,this.title="Angular-demo"}ngOnInit(){this.menuState$=this.store.pipe((0,a.Ys)(l))}openNav(){this.store.dispatch(new N)}closeNav(){this.store.dispatch(new O)}toggleNav(){this.store.dispatch(new f)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-root"]],decls:8,vars:4,consts:[[1,"app-page"],[1,"app-wrapper"]],template:function(n,r){1&n&&(e._UZ(0,"app-header"),e.TgZ(1,"div",0),e.ALo(2,"async"),e.TgZ(3,"div",1)(4,"aside"),e._UZ(5,"app-main-menu"),e.qZA(),e.TgZ(6,"main"),e._uU(7," Test "),e.qZA()()()),2&n&&(e.xp6(1),e.ekj("app-menu-open",e.lcZ(2,2,r.menuState$)))},dependencies:[Z,b,d.Ov]}),t})();const V=[];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t,bootstrap:[w]}),t.\u0275inj=e.cJS({imports:[p.b2,L,v.Ps,a.Aw.forRoot(T,{runtimeChecks:{strictStateImmutability:!0,strictActionImmutability:!0}}),A.sQ.forRoot(S),V]}),t})();(0,e.G48)(),p.q6().bootstrapModule(P).catch(t=>console.error(t))}},c=>{c.O(0,["vendor"],()=>c(c.s=3098)),c.O()}]);