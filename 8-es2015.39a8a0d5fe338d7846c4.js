(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{fmXw:function(l,n,e){"use strict";e.r(n);var a=e("8Y7J");class i{constructor(){this.menus=[{name:"\u5e03\u5c40 Layout",icon:"icon_nav_form",show:!1,items:[{label:"Flex",id:"flex"},{label:"Grid",id:"grid"},{label:"Article",id:"article"},{label:"Footer",id:"footer"},{label:"Preview",id:"preview"},{label:"Panel",id:"panel"}]},{name:"\u5bfc\u822a Navigation",icon:"icon_nav_nav",show:!1,items:[{label:"Navbar",id:"navbar"},{label:"Tabbar",id:"tabbar"},{label:"Sidebar",id:"sidebar"},{label:"Popup",id:"popup"},{label:"Pagination \u5206\u9875\u5668",id:"pagination"}]},{name:"\u6570\u636e\u5f55\u5165 Data Entry",icon:"icon_nav_form",show:!1,items:[{label:"Button",id:"button"},{label:"Input",id:"input"},{label:"Slider",id:"slider"},{label:"Picker",id:"picker"},{label:"Uploader",id:"uploader"},{label:"Rating",id:"rating"},{label:"Loadmore",id:"loadmore"},{label:"Progress",id:"progress"},{label:"Stepper \u6b65\u8fdb\u5668",id:"stepper"}]},{name:"\u6570\u636e\u5c55\u793a Data Display",icon:"icon_nav_form",show:!1,items:[{label:"Accordion",id:"accordion"},{label:"Badge",id:"badge"},{label:"Icons",id:"icons"},{label:"List",id:"list"},{label:"Gallery",id:"gallery"},{label:"Swiper",id:"swiper"}]},{name:"\u64cd\u4f5c\u53cd\u9988 Feedback",icon:"icon_nav_feedback",show:!1,items:[{label:"Actionsheet",id:"actionsheet"},{label:"Dialog",id:"dialog"},{label:"Msg",id:"msg"},{label:"Msg",id:"msg_fail",show:!1},{label:"Msg",id:"msg_success",show:!1},{label:"Toast",id:"toast"},{label:"Toptips",id:"toptips"}]},{name:"\u624b\u52bf Gesture",icon:"icon_nav_feedback",show:!1,items:[{label:"Pull To Refresh",id:"ptr"},{label:"Infinite Loader",id:"infiniteloader"}]},{name:"\u7ec4\u5408\u7ec4\u4ef6 Combination",icon:"icon_nav_search",show:!1,items:[{label:"Search Bar",id:"searchbar"}]},{name:"\u5176\u4ed6 Other",icon:"icon_nav_layout",show:!1,items:[{label:"\u5fae\u4fe1JS-SDK",id:"jweixin"},{label:"Mask",id:"mask"}]},{name:"Third Party",icon:"icon_nav_layout",show:!1,items:[{label:"Chart G2-Mobile",id:"chart-g2"},{label:"Countdown",id:"countdown"},{label:"Gesture Password",id:"gesture-password"},{label:"QQ Map",id:"map-qq"}]}]}getMenu(l){for(let n of this.menus){const e=n.items.find(n=>n.id===l);if(e)return e}}}class u{constructor(l,n){this.route=l,this.menuService=n}ngOnInit(){this.route.params.subscribe(l=>{this.menu=this.menuService.getMenu(l.id)})}}class t{constructor(l){this.menuService=l,this.title='<img src="./assets/images/logo.png" alt="weui" height="21px" />'}onSelecte(l){this.menuService.menus.forEach((n,e)=>{n.show=e===l})}}class o{}var b=e("pMnS"),c=e("5Mnm"),r=e("kB3H"),s=e("zk85"),d=e("9A9F"),m=e("P5mi"),p=e("thgZ"),g=e("heCg"),f=e("ptQX"),h=e("rjgI"),z=e("GN5d"),w=e("Or9Q"),v=e("M4gm"),_=e("TGMw"),q=e("VohW"),x=e("XePT"),y=e("hq6F"),k=e("iInd"),S=e("SVse"),M=e("lnSZ"),O=e("fdnq"),F=e("J+xj"),P=e("ZZ2P"),I=e("eGU2"),C=e("n6mn"),K=a.pb({encapsulation:2,styles:[],data:{}});function L(l){return a.Kb(0,[(l()(),a.rb(0,0,null,null,6,"a",[["class","weui-cell weui-cell_access js_item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var i=!0;return"click"===n&&(i=!1!==a.Bb(l,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&i),i},null,null)),a.qb(1,671744,null,0,k.p,[k.m,k.a,S.j],{routerLink:[0,"routerLink"]},null),a.Cb(2,2),(l()(),a.rb(3,0,null,null,2,"div",[["class","weui-cell__bd"]],null,null,null,null,null)),(l()(),a.rb(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ib(5,null,["",""])),(l()(),a.rb(6,0,null,null,0,"div",[["class","weui-cell__ft"]],null,null,null,null,null))],function(l,n){var e=l(n,2,0,"/example",n.parent.context.$implicit.id);l(n,1,0,e)},function(l,n){l(n,0,0,a.Bb(n,1).target,a.Bb(n,1).href),l(n,5,0,n.parent.context.$implicit.label)})}function B(l){return a.Kb(0,[(l()(),a.gb(16777216,null,null,1,null,L)),a.qb(1,16384,null,0,S.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.gb(0,null,null,0))],function(l,n){l(n,1,0,!1!==n.context.$implicit.show)},null)}function T(l){return a.Kb(0,[(l()(),a.rb(0,0,null,null,8,"weui-accordion-panel",[["class","weui-accordion-panel"]],[[2,"weui-accordion-panel-disabled",null],[2,"weui-accordion-active",null]],null,null,M.b,M.a)),a.qb(1,245760,null,0,O.a,[F.a],{active:[0,"active"]},null),(l()(),a.rb(2,0,null,0,3,"div",[["class","weui-flex js_category"],["heading",""]],null,null,null,null,null)),(l()(),a.rb(3,0,null,null,1,"p",[["class","weui-flex__item"]],null,null,null,null,null)),(l()(),a.Ib(4,null,["",""])),(l()(),a.rb(5,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),a.rb(6,0,null,1,2,"div",[["class","weui-cells page__category-content"]],null,null,null,null,null)),(l()(),a.gb(16777216,null,null,1,null,B)),a.qb(8,278528,null,0,S.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.context.$implicit.show),l(n,8,0,n.context.$implicit.items)},function(l,n){l(n,0,0,a.Bb(n,1).disabled,a.Bb(n,1).active),l(n,4,0,n.context.$implicit.name),l(n,5,0,a.tb(1,"./assets/images/",n.context.$implicit.icon,".png"))})}function j(l){return a.Kb(0,[(l()(),a.rb(0,0,null,null,7,"Page",[["class","page"]],null,null,null,y.c,y.b)),a.Fb(512,null,S.x,S.y,[a.r,a.s,a.k,a.D]),a.qb(2,278528,null,0,S.k,[S.x],{ngClass:[0,"ngClass"]},null),a.qb(3,49152,null,0,P.a,[],{title:[0,"title"],subTitle:[1,"subTitle"]},null),(l()(),a.rb(4,0,null,0,3,"weui-accordion",[["class","home-accordion"]],[[1,"aria-multiselectable",0]],[[null,"select"]],function(l,n,e){var a=!0;return"select"===n&&(a=!1!==l.component.onSelecte(e)&&a),a},I.b,I.a)),a.qb(5,49152,null,0,F.a,[C.a],{activeFirst:[0,"activeFirst"]},{select:"select"}),(l()(),a.gb(16777216,null,0,1,null,T)),a.qb(7,278528,null,0,S.l,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,2,0,"home"),l(n,3,0,e.title,"A UI library by WeChat official design team, includes the most useful widgets/modules in mobile web applications."),l(n,5,0,!1),l(n,7,0,e.menuService.menus)},function(l,n){l(n,4,0,a.Bb(n,5).closeOthers)})}function A(l){return a.Kb(0,[(l()(),a.rb(0,0,null,null,1,"example-home",[],null,null,null,j,K)),a.qb(1,49152,null,0,t,[i],null,null)],null,null)}var G=a.nb("example-home",t,A,{},{},[]),Q=e("Ux7r"),J=e("p/Uq"),D=a.pb({encapsulation:2,styles:[],data:{}});function $(l){return a.Kb(0,[(l()(),a.rb(0,0,null,null,1,"component-container",[],null,null,null,Q.b,Q.a)),a.qb(1,49152,null,0,J.a,[],{url:[0,"url"],menu:[1,"menu"]},null)],function(l,n){l(n,1,0,"example",n.component.menu)},null)}function H(l){return a.Kb(0,[(l()(),a.gb(16777216,null,null,1,null,$)),a.qb(1,16384,null,0,S.m,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,1,0,n.component.menu)},null)}function N(l){return a.Kb(0,[(l()(),a.rb(0,0,null,null,1,"example-container",[],null,null,null,H,D)),a.qb(1,114688,null,0,u,[k.a,i],null,null)],function(l,n){l(n,1,0)},null)}var U=a.nb("example-container",u,N,{},{},[]),E=e("s7LF"),Z=e("hve6"),W=e("pQl/"),X=e("qZho"),R=e("Qq/9"),V=e("n3qy"),Y=e("GF59"),ll=e("fW6c"),nl=e("HTOY"),el=e("pBd7"),al=e("OH1h"),il=e("IAeb"),ul=e("Og6a"),tl=e("oLrO"),ol=e("zJXQ"),bl=e("oQMQ"),cl=e("40A0"),rl=e("EAT4"),sl=e("HDdL"),dl=e("MuSp"),ml=e("gcpJ"),pl=e("jNO0"),gl=e("MqU+"),fl=e("FAwr"),hl=e("k+GR"),zl=e("soHK"),wl=e("iWge"),vl=e("g2n/"),_l=e("dCss"),ql=e("aS+2"),xl=e("p779"),yl=e("purJ"),kl=e("EApP"),Sl=e("uM/V"),Ml=e("PCNd"),Ol=e("dH7C");e.d(n,"ExampleModuleNgFactory",function(){return Fl});var Fl=a.ob(o,[],function(l){return a.yb([a.zb(512,a.j,a.bb,[[8,[b.a,c.a,r.a,s.a,d.a,m.a,p.a,g.a,f.a,h.a,z.a,w.b,v.b,_.a,q.a,x.a,y.a,G,U]],[3,a.j],a.w]),a.zb(4608,S.o,S.n,[a.t,[2,S.C]]),a.zb(4608,E.u,E.u,[]),a.zb(4608,E.e,E.e,[]),a.zb(4608,Z.a,Z.a,[]),a.zb(4608,W.c,W.c,[]),a.zb(4608,X.e,X.e,[X.b]),a.zb(4608,i,i,[]),a.zb(1073742336,S.c,S.c,[]),a.zb(1073742336,E.t,E.t,[]),a.zb(1073742336,E.f,E.f,[]),a.zb(1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),a.zb(1073742336,E.q,E.q,[]),a.zb(1073742336,R.a,R.a,[]),a.zb(1073742336,V.a,V.a,[]),a.zb(1073742336,Y.a,Y.a,[]),a.zb(1073742336,ll.a,ll.a,[]),a.zb(1073742336,nl.a,nl.a,[]),a.zb(1073742336,el.a,el.a,[]),a.zb(1073742336,al.a,al.a,[]),a.zb(1073742336,il.a,il.a,[]),a.zb(1073742336,ul.a,ul.a,[]),a.zb(1073742336,tl.a,tl.a,[]),a.zb(1073742336,ol.a,ol.a,[]),a.zb(1073742336,bl.a,bl.a,[]),a.zb(1073742336,cl.a,cl.a,[]),a.zb(1073742336,rl.a,rl.a,[]),a.zb(1073742336,sl.a,sl.a,[]),a.zb(1073742336,dl.a,dl.a,[]),a.zb(1073742336,ml.a,ml.a,[]),a.zb(1073742336,pl.a,pl.a,[]),a.zb(1073742336,gl.a,gl.a,[]),a.zb(1073742336,fl.a,fl.a,[]),a.zb(1073742336,hl.a,hl.a,[]),a.zb(1073742336,zl.a,zl.a,[]),a.zb(1073742336,wl.a,wl.a,[]),a.zb(1073742336,vl.a,vl.a,[]),a.zb(1073742336,_l.a,_l.a,[]),a.zb(1073742336,ql.a,ql.a,[]),a.zb(1073742336,xl.a,xl.a,[]),a.zb(1073742336,yl.a,yl.a,[]),a.zb(1073742336,W.b,W.b,[]),a.zb(1073742336,kl.i,kl.i,[]),a.zb(1073742336,Sl.c,Sl.c,[]),a.zb(1073742336,X.c,X.c,[]),a.zb(1073742336,Ml.a,Ml.a,[]),a.zb(1073742336,Ol.a,Ol.a,[]),a.zb(1073742336,o,o,[]),a.zb(1024,k.j,function(){return[[{path:"",component:t},{path:":id",component:u}]]},[])])})}}]);