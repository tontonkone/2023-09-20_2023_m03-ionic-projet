"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6917],{6917:(M,c,o)=>{o.r(c),o.d(c,{SessionsPageModule:()=>T});var g=o(6814),u=o(95),a=o(6761),r=o(3044),d=o(5861),e=o(6689),m=o(983),p=o(1074);const S=function(s){return["/session",s]};function f(s,i){if(1&s&&(e.TgZ(0,"ion-item",2)(1,"ion-label"),e._uU(2),e.qZA()()),2&s){const t=i.$implicit;e.Q6J("routerLink",e.VKq(2,S,t.id)),e.xp6(2),e.hij(" ",t.title," ")}}const v=[{path:"",component:(()=>{var s;class i{constructor(n,l){this._sessionService=n,this._loadingCtrl=l,this.pageTitle="Sessions",this.sessions=[]}ngOnInit(){this.loadSessions()}loadSessions(){var n=this;return(0,d.Z)(function*(){const l=yield n._loadingCtrl.create({message:"chargement...",spinner:"bubbles"});yield l.present(),n._sessionService.getAllSessions().subscribe(y=>{l.dismiss(),n.sessions=Object.values(y),console.log(n.sessions)})})()}}return(s=i).\u0275fac=function(n){return new(n||s)(e.Y36(m.m),e.Y36(a.HT))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-sessions"]],decls:4,vars:2,consts:[[3,"pageTitle"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,l){1&n&&(e._UZ(0,"app-header",0),e.TgZ(1,"ion-content")(2,"ion-list"),e.YNc(3,f,3,4,"ion-item",1),e.qZA()()),2&n&&(e.Q6J("pageTitle",l.pageTitle),e.xp6(3),e.Q6J("ngForOf",l.sessions))},dependencies:[g.sg,a.W2,a.Ie,a.Q$,a.q_,a.YI,r.rH,p.G]}),i})()}];let h=(()=>{var s;class i{}return(s=i).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[r.Bz.forChild(v),r.Bz]}),i})();var P=o(1383);let T=(()=>{var s;class i{}return(s=i).\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.ez,u.u5,a.Pc,h,P.m]}),i})()}}]);