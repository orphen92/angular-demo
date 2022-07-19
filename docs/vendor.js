"use strict";(self.webpackChunkAngular_demo=self.webpackChunkAngular_demo||[]).push([["vendor"],{1135:(Y,F,y)=>{y.d(F,{X:()=>D});var p=y(7579);class D extends p.x{constructor(ne){super(),this._value=ne}get value(){return this.getValue()}_subscribe(ne){const P=super._subscribe(ne);return!P.closed&&ne.next(this._value),P}getValue(){const{hasError:ne,thrownError:P,_value:G}=this;if(ne)throw P;return this._throwIfClosed(),G}next(ne){super.next(this._value=ne)}}},8306:(Y,F,y)=>{y.d(F,{y:()=>J});var p=y(930),D=y(727),X=y(8822),ne=y(4671);var j=y(2416),$=y(576),L=y(2806);let J=(()=>{class ee{constructor(Se){Se&&(this._subscribe=Se)}lift(Se){const pe=new ee;return pe.source=this,pe.operator=Se,pe}subscribe(Se,pe,Oe){const We=function _e(ee){return ee&&ee instanceof p.Lv||function q(ee){return ee&&(0,$.m)(ee.next)&&(0,$.m)(ee.error)&&(0,$.m)(ee.complete)}(ee)&&(0,D.Nn)(ee)}(Se)?Se:new p.Hp(Se,pe,Oe);return(0,L.x)(()=>{const{operator:Ge,source:Ae}=this;We.add(Ge?Ge.call(We,Ae):Ae?this._subscribe(We):this._trySubscribe(We))}),We}_trySubscribe(Se){try{return this._subscribe(Se)}catch(pe){Se.error(pe)}}forEach(Se,pe){return new(pe=Q(pe))((Oe,We)=>{const Ge=new p.Hp({next:Ae=>{try{Se(Ae)}catch(Ee){We(Ee),Ge.unsubscribe()}},error:We,complete:Oe});this.subscribe(Ge)})}_subscribe(Se){var pe;return null===(pe=this.source)||void 0===pe?void 0:pe.subscribe(Se)}[X.L](){return this}pipe(...Se){return function G(ee){return 0===ee.length?ne.y:1===ee.length?ee[0]:function(Se){return ee.reduce((pe,Oe)=>Oe(pe),Se)}}(Se)(this)}toPromise(Se){return new(Se=Q(Se))((pe,Oe)=>{let We;this.subscribe(Ge=>We=Ge,Ge=>Oe(Ge),()=>pe(We))})}}return ee.create=le=>new ee(le),ee})();function Q(ee){var le;return null!==(le=ee??j.v.Promise)&&void 0!==le?le:Promise}},4707:(Y,F,y)=>{y.d(F,{t:()=>X});var p=y(7579),D=y(6063);class X extends p.x{constructor(P=1/0,G=1/0,j=D.l){super(),this._bufferSize=P,this._windowTime=G,this._timestampProvider=j,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=G===1/0,this._bufferSize=Math.max(1,P),this._windowTime=Math.max(1,G)}next(P){const{isStopped:G,_buffer:j,_infiniteTimeWindow:$,_timestampProvider:L,_windowTime:J}=this;G||(j.push(P),!$&&j.push(L.now()+J)),this._trimBuffer(),super.next(P)}_subscribe(P){this._throwIfClosed(),this._trimBuffer();const G=this._innerSubscribe(P),{_infiniteTimeWindow:j,_buffer:$}=this,L=$.slice();for(let J=0;J<L.length&&!P.closed;J+=j?1:2)P.next(L[J]);return this._checkFinalizedStatuses(P),G}_trimBuffer(){const{_bufferSize:P,_timestampProvider:G,_buffer:j,_infiniteTimeWindow:$}=this,L=($?1:2)*P;if(P<1/0&&L<j.length&&j.splice(0,j.length-L),!$){const J=G.now();let Q=0;for(let q=1;q<j.length&&j[q]<=J;q+=2)Q=q;Q&&j.splice(0,Q+1)}}}},7579:(Y,F,y)=>{y.d(F,{x:()=>j});var p=y(8306),D=y(727);const ne=(0,y(3888).d)(L=>function(){L(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var P=y(8737),G=y(2806);let j=(()=>{class L extends p.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(Q){const q=new $(this,this);return q.operator=Q,q}_throwIfClosed(){if(this.closed)throw new ne}next(Q){(0,G.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const q of this.currentObservers)q.next(Q)}})}error(Q){(0,G.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=Q;const{observers:q}=this;for(;q.length;)q.shift().error(Q)}})}complete(){(0,G.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:Q}=this;for(;Q.length;)Q.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var Q;return(null===(Q=this.observers)||void 0===Q?void 0:Q.length)>0}_trySubscribe(Q){return this._throwIfClosed(),super._trySubscribe(Q)}_subscribe(Q){return this._throwIfClosed(),this._checkFinalizedStatuses(Q),this._innerSubscribe(Q)}_innerSubscribe(Q){const{hasError:q,isStopped:_e,observers:ee}=this;return q||_e?D.Lc:(this.currentObservers=null,ee.push(Q),new D.w0(()=>{this.currentObservers=null,(0,P.P)(ee,Q)}))}_checkFinalizedStatuses(Q){const{hasError:q,thrownError:_e,isStopped:ee}=this;q?Q.error(_e):ee&&Q.complete()}asObservable(){const Q=new p.y;return Q.source=this,Q}}return L.create=(J,Q)=>new $(J,Q),L})();class $ extends j{constructor(J,Q){super(),this.destination=J,this.source=Q}next(J){var Q,q;null===(q=null===(Q=this.destination)||void 0===Q?void 0:Q.next)||void 0===q||q.call(Q,J)}error(J){var Q,q;null===(q=null===(Q=this.destination)||void 0===Q?void 0:Q.error)||void 0===q||q.call(Q,J)}complete(){var J,Q;null===(Q=null===(J=this.destination)||void 0===J?void 0:J.complete)||void 0===Q||Q.call(J)}_subscribe(J){var Q,q;return null!==(q=null===(Q=this.source)||void 0===Q?void 0:Q.subscribe(J))&&void 0!==q?q:D.Lc}}},930:(Y,F,y)=>{y.d(F,{Hp:()=>Se,Lv:()=>q});var p=y(576),D=y(727),X=y(2416),ne=y(7849),P=y(5032);const G=L("C",void 0,void 0);function L(Ae,Ee,ke){return{kind:Ae,value:Ee,error:ke}}var J=y(3410),Q=y(2806);class q extends D.w0{constructor(Ee){super(),this.isStopped=!1,Ee?(this.destination=Ee,(0,D.Nn)(Ee)&&Ee.add(this)):this.destination=Ge}static create(Ee,ke,Ye){return new Se(Ee,ke,Ye)}next(Ee){this.isStopped?We(function $(Ae){return L("N",Ae,void 0)}(Ee),this):this._next(Ee)}error(Ee){this.isStopped?We(function j(Ae){return L("E",void 0,Ae)}(Ee),this):(this.isStopped=!0,this._error(Ee))}complete(){this.isStopped?We(G,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(Ee){this.destination.next(Ee)}_error(Ee){try{this.destination.error(Ee)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const _e=Function.prototype.bind;function ee(Ae,Ee){return _e.call(Ae,Ee)}class le{constructor(Ee){this.partialObserver=Ee}next(Ee){const{partialObserver:ke}=this;if(ke.next)try{ke.next(Ee)}catch(Ye){pe(Ye)}}error(Ee){const{partialObserver:ke}=this;if(ke.error)try{ke.error(Ee)}catch(Ye){pe(Ye)}else pe(Ee)}complete(){const{partialObserver:Ee}=this;if(Ee.complete)try{Ee.complete()}catch(ke){pe(ke)}}}class Se extends q{constructor(Ee,ke,Ye){let Xe;if(super(),(0,p.m)(Ee)||!Ee)Xe={next:Ee??void 0,error:ke??void 0,complete:Ye??void 0};else{let Re;this&&X.v.useDeprecatedNextContext?(Re=Object.create(Ee),Re.unsubscribe=()=>this.unsubscribe(),Xe={next:Ee.next&&ee(Ee.next,Re),error:Ee.error&&ee(Ee.error,Re),complete:Ee.complete&&ee(Ee.complete,Re)}):Xe=Ee}this.destination=new le(Xe)}}function pe(Ae){X.v.useDeprecatedSynchronousErrorHandling?(0,Q.O)(Ae):(0,ne.h)(Ae)}function We(Ae,Ee){const{onStoppedNotification:ke}=X.v;ke&&J.z.setTimeout(()=>ke(Ae,Ee))}const Ge={closed:!0,next:P.Z,error:function Oe(Ae){throw Ae},complete:P.Z}},727:(Y,F,y)=>{y.d(F,{Lc:()=>G,w0:()=>P,Nn:()=>j});var p=y(576);const X=(0,y(3888).d)(L=>function(Q){L(this),this.message=Q?`${Q.length} errors occurred during unsubscription:\n${Q.map((q,_e)=>`${_e+1}) ${q.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=Q});var ne=y(8737);class P{constructor(J){this.initialTeardown=J,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let J;if(!this.closed){this.closed=!0;const{_parentage:Q}=this;if(Q)if(this._parentage=null,Array.isArray(Q))for(const ee of Q)ee.remove(this);else Q.remove(this);const{initialTeardown:q}=this;if((0,p.m)(q))try{q()}catch(ee){J=ee instanceof X?ee.errors:[ee]}const{_finalizers:_e}=this;if(_e){this._finalizers=null;for(const ee of _e)try{$(ee)}catch(le){J=J??[],le instanceof X?J=[...J,...le.errors]:J.push(le)}}if(J)throw new X(J)}}add(J){var Q;if(J&&J!==this)if(this.closed)$(J);else{if(J instanceof P){if(J.closed||J._hasParent(this))return;J._addParent(this)}(this._finalizers=null!==(Q=this._finalizers)&&void 0!==Q?Q:[]).push(J)}}_hasParent(J){const{_parentage:Q}=this;return Q===J||Array.isArray(Q)&&Q.includes(J)}_addParent(J){const{_parentage:Q}=this;this._parentage=Array.isArray(Q)?(Q.push(J),Q):Q?[Q,J]:J}_removeParent(J){const{_parentage:Q}=this;Q===J?this._parentage=null:Array.isArray(Q)&&(0,ne.P)(Q,J)}remove(J){const{_finalizers:Q}=this;Q&&(0,ne.P)(Q,J),J instanceof P&&J._removeParent(this)}}P.EMPTY=(()=>{const L=new P;return L.closed=!0,L})();const G=P.EMPTY;function j(L){return L instanceof P||L&&"closed"in L&&(0,p.m)(L.remove)&&(0,p.m)(L.add)&&(0,p.m)(L.unsubscribe)}function $(L){(0,p.m)(L)?L():L.unsubscribe()}},2416:(Y,F,y)=>{y.d(F,{v:()=>p});const p={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},9841:(Y,F,y)=>{y.d(F,{a:()=>J});var p=y(8306),D=y(4742),X=y(457),ne=y(4671),P=y(3268),G=y(7669),j=y(1810),$=y(5403),L=y(9672);function J(..._e){const ee=(0,G.yG)(_e),le=(0,G.jO)(_e),{args:Se,keys:pe}=(0,D.D)(_e);if(0===Se.length)return(0,X.D)([],ee);const Oe=new p.y(function Q(_e,ee,le=ne.y){return Se=>{q(ee,()=>{const{length:pe}=_e,Oe=new Array(pe);let We=pe,Ge=pe;for(let Ae=0;Ae<pe;Ae++)q(ee,()=>{const Ee=(0,X.D)(_e[Ae],ee);let ke=!1;Ee.subscribe((0,$.x)(Se,Ye=>{Oe[Ae]=Ye,ke||(ke=!0,Ge--),Ge||Se.next(le(Oe.slice()))},()=>{--We||Se.complete()}))},Se)},Se)}}(Se,ee,pe?We=>(0,j.n)(pe,We):ne.y));return le?Oe.pipe((0,P.Z)(le)):Oe}function q(_e,ee,le){_e?(0,L.f)(le,_e,ee):ee()}},7272:(Y,F,y)=>{y.d(F,{z:()=>P});var p=y(8189),X=y(7669),ne=y(457);function P(...G){return function D(){return(0,p.J)(1)}()((0,ne.D)(G,(0,X.yG)(G)))}},515:(Y,F,y)=>{y.d(F,{E:()=>D});const D=new(y(8306).y)(P=>P.complete())},457:(Y,F,y)=>{y.d(F,{D:()=>ke});var p=y(8421),D=y(5363),X=y(4482);function ne(Ye,Xe=0){return(0,X.e)((Re,it)=>{it.add(Ye.schedule(()=>Re.subscribe(it),Xe))})}var j=y(8306),L=y(2202),J=y(576),Q=y(9672);function _e(Ye,Xe){if(!Ye)throw new Error("Iterable cannot be null");return new j.y(Re=>{(0,Q.f)(Re,Xe,()=>{const it=Ye[Symbol.asyncIterator]();(0,Q.f)(Re,Xe,()=>{it.next().then(se=>{se.done?Re.complete():Re.next(se.value)})},0,!0)})})}var ee=y(3670),le=y(8239),Se=y(1144),pe=y(6495),Oe=y(2206),We=y(4532),Ge=y(3260);function ke(Ye,Xe){return Xe?function Ee(Ye,Xe){if(null!=Ye){if((0,ee.c)(Ye))return function P(Ye,Xe){return(0,p.Xf)(Ye).pipe(ne(Xe),(0,D.Q)(Xe))}(Ye,Xe);if((0,Se.z)(Ye))return function $(Ye,Xe){return new j.y(Re=>{let it=0;return Xe.schedule(function(){it===Ye.length?Re.complete():(Re.next(Ye[it++]),Re.closed||this.schedule())})})}(Ye,Xe);if((0,le.t)(Ye))return function G(Ye,Xe){return(0,p.Xf)(Ye).pipe(ne(Xe),(0,D.Q)(Xe))}(Ye,Xe);if((0,Oe.D)(Ye))return _e(Ye,Xe);if((0,pe.T)(Ye))return function q(Ye,Xe){return new j.y(Re=>{let it;return(0,Q.f)(Re,Xe,()=>{it=Ye[L.h](),(0,Q.f)(Re,Xe,()=>{let se,fe;try{({value:se,done:fe}=it.next())}catch(ie){return void Re.error(ie)}fe?Re.complete():Re.next(se)},0,!0)}),()=>(0,J.m)(it?.return)&&it.return()})}(Ye,Xe);if((0,Ge.L)(Ye))return function Ae(Ye,Xe){return _e((0,Ge.Q)(Ye),Xe)}(Ye,Xe)}throw(0,We.z)(Ye)}(Ye,Xe):(0,p.Xf)(Ye)}},8421:(Y,F,y)=>{y.d(F,{Xf:()=>_e});var p=y(655),D=y(1144),X=y(8239),ne=y(8306),P=y(3670),G=y(2206),j=y(4532),$=y(6495),L=y(3260),J=y(576),Q=y(7849),q=y(8822);function _e(Ae){if(Ae instanceof ne.y)return Ae;if(null!=Ae){if((0,P.c)(Ae))return function ee(Ae){return new ne.y(Ee=>{const ke=Ae[q.L]();if((0,J.m)(ke.subscribe))return ke.subscribe(Ee);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(Ae);if((0,D.z)(Ae))return function le(Ae){return new ne.y(Ee=>{for(let ke=0;ke<Ae.length&&!Ee.closed;ke++)Ee.next(Ae[ke]);Ee.complete()})}(Ae);if((0,X.t)(Ae))return function Se(Ae){return new ne.y(Ee=>{Ae.then(ke=>{Ee.closed||(Ee.next(ke),Ee.complete())},ke=>Ee.error(ke)).then(null,Q.h)})}(Ae);if((0,G.D)(Ae))return Oe(Ae);if((0,$.T)(Ae))return function pe(Ae){return new ne.y(Ee=>{for(const ke of Ae)if(Ee.next(ke),Ee.closed)return;Ee.complete()})}(Ae);if((0,L.L)(Ae))return function We(Ae){return Oe((0,L.Q)(Ae))}(Ae)}throw(0,j.z)(Ae)}function Oe(Ae){return new ne.y(Ee=>{(function Ge(Ae,Ee){var ke,Ye,Xe,Re;return(0,p.mG)(this,void 0,void 0,function*(){try{for(ke=(0,p.KL)(Ae);!(Ye=yield ke.next()).done;)if(Ee.next(Ye.value),Ee.closed)return}catch(it){Xe={error:it}}finally{try{Ye&&!Ye.done&&(Re=ke.return)&&(yield Re.call(ke))}finally{if(Xe)throw Xe.error}}Ee.complete()})})(Ae,Ee).catch(ke=>Ee.error(ke))})}},6451:(Y,F,y)=>{y.d(F,{T:()=>G});var p=y(8189),D=y(8421),X=y(515),ne=y(7669),P=y(457);function G(...j){const $=(0,ne.yG)(j),L=(0,ne._6)(j,1/0),J=j;return J.length?1===J.length?(0,D.Xf)(J[0]):(0,p.J)(L)((0,P.D)(J,$)):X.E}},9646:(Y,F,y)=>{y.d(F,{of:()=>X});var p=y(7669),D=y(457);function X(...ne){const P=(0,p.yG)(ne);return(0,D.D)(ne,P)}},2843:(Y,F,y)=>{y.d(F,{_:()=>X});var p=y(8306),D=y(576);function X(ne,P){const G=(0,D.m)(ne)?ne:()=>ne,j=$=>$.error(G());return new p.y(P?$=>P.schedule(j,0,$):j)}},5403:(Y,F,y)=>{y.d(F,{Q:()=>X,x:()=>D});var p=y(930);function D(ne,P,G,j,$){return new X(ne,P,G,j,$)}class X extends p.Lv{constructor(P,G,j,$,L,J){super(P),this.onFinalize=L,this.shouldUnsubscribe=J,this._next=G?function(Q){try{G(Q)}catch(q){P.error(q)}}:super._next,this._error=$?function(Q){try{$(Q)}catch(q){P.error(q)}finally{this.unsubscribe()}}:super._error,this._complete=j?function(){try{j()}catch(Q){P.error(Q)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var P;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:G}=this;super.unsubscribe(),!G&&(null===(P=this.onFinalize)||void 0===P||P.call(this))}}}},262:(Y,F,y)=>{y.d(F,{K:()=>ne});var p=y(8421),D=y(5403),X=y(4482);function ne(P){return(0,X.e)((G,j)=>{let J,$=null,L=!1;$=G.subscribe((0,D.x)(j,void 0,void 0,Q=>{J=(0,p.Xf)(P(Q,ne(P)(G))),$?($.unsubscribe(),$=null,J.subscribe(j)):L=!0})),L&&($.unsubscribe(),$=null,J.subscribe(j))})}},4351:(Y,F,y)=>{y.d(F,{b:()=>X});var p=y(5577),D=y(576);function X(ne,P){return(0,D.m)(P)?(0,p.z)(ne,P,1):(0,p.z)(ne,1)}},8372:(Y,F,y)=>{y.d(F,{b:()=>ne});var p=y(4986),D=y(4482),X=y(5403);function ne(P,G=p.z){return(0,D.e)((j,$)=>{let L=null,J=null,Q=null;const q=()=>{if(L){L.unsubscribe(),L=null;const ee=J;J=null,$.next(ee)}};function _e(){const ee=Q+P,le=G.now();if(le<ee)return L=this.schedule(void 0,ee-le),void $.add(L);q()}j.subscribe((0,X.x)($,ee=>{J=ee,Q=G.now(),L||(L=G.schedule(_e,P),$.add(L))},()=>{q(),$.complete()},void 0,()=>{J=L=null}))})}},9300:(Y,F,y)=>{y.d(F,{h:()=>X});var p=y(4482),D=y(5403);function X(ne,P){return(0,p.e)((G,j)=>{let $=0;G.subscribe((0,D.x)(j,L=>ne.call(P,L,$++)&&j.next(L)))})}},8746:(Y,F,y)=>{y.d(F,{x:()=>D});var p=y(4482);function D(X){return(0,p.e)((ne,P)=>{try{ne.subscribe(P)}finally{P.add(X)}})}},4004:(Y,F,y)=>{y.d(F,{U:()=>X});var p=y(4482),D=y(5403);function X(ne,P){return(0,p.e)((G,j)=>{let $=0;G.subscribe((0,D.x)(j,L=>{j.next(ne.call(P,L,$++))}))})}},8189:(Y,F,y)=>{y.d(F,{J:()=>X});var p=y(5577),D=y(4671);function X(ne=1/0){return(0,p.z)(D.y,ne)}},5577:(Y,F,y)=>{y.d(F,{z:()=>$});var p=y(4004),D=y(8421),X=y(4482),ne=y(9672),P=y(5403),j=y(576);function $(L,J,Q=1/0){return(0,j.m)(J)?$((q,_e)=>(0,p.U)((ee,le)=>J(q,ee,_e,le))((0,D.Xf)(L(q,_e))),Q):("number"==typeof J&&(Q=J),(0,X.e)((q,_e)=>function G(L,J,Q,q,_e,ee,le,Se){const pe=[];let Oe=0,We=0,Ge=!1;const Ae=()=>{Ge&&!pe.length&&!Oe&&J.complete()},Ee=Ye=>Oe<q?ke(Ye):pe.push(Ye),ke=Ye=>{ee&&J.next(Ye),Oe++;let Xe=!1;(0,D.Xf)(Q(Ye,We++)).subscribe((0,P.x)(J,Re=>{_e?.(Re),ee?Ee(Re):J.next(Re)},()=>{Xe=!0},void 0,()=>{if(Xe)try{for(Oe--;pe.length&&Oe<q;){const Re=pe.shift();le?(0,ne.f)(J,le,()=>ke(Re)):ke(Re)}Ae()}catch(Re){J.error(Re)}}))};return L.subscribe((0,P.x)(J,Ee,()=>{Ge=!0,Ae()})),()=>{Se?.()}}(q,_e,L,Q)))}},5363:(Y,F,y)=>{y.d(F,{Q:()=>ne});var p=y(9672),D=y(4482),X=y(5403);function ne(P,G=0){return(0,D.e)((j,$)=>{j.subscribe((0,X.x)($,L=>(0,p.f)($,P,()=>$.next(L),G),()=>(0,p.f)($,P,()=>$.complete(),G),L=>(0,p.f)($,P,()=>$.error(L),G)))})}},5026:(Y,F,y)=>{y.d(F,{R:()=>ne});var p=y(4482),D=y(5403);function X(P,G,j,$,L){return(J,Q)=>{let q=j,_e=G,ee=0;J.subscribe((0,D.x)(Q,le=>{const Se=ee++;_e=q?P(_e,le,Se):(q=!0,le),$&&Q.next(_e)},L&&(()=>{q&&Q.next(_e),Q.complete()})))}}function ne(P,G){return(0,p.e)(X(P,G,arguments.length>=2,!0))}},3099:(Y,F,y)=>{y.d(F,{B:()=>G});var p=y(457),D=y(5698),X=y(7579),ne=y(930),P=y(4482);function G($={}){const{connector:L=(()=>new X.x),resetOnError:J=!0,resetOnComplete:Q=!0,resetOnRefCountZero:q=!0}=$;return _e=>{let ee=null,le=null,Se=null,pe=0,Oe=!1,We=!1;const Ge=()=>{le?.unsubscribe(),le=null},Ae=()=>{Ge(),ee=Se=null,Oe=We=!1},Ee=()=>{const ke=ee;Ae(),ke?.unsubscribe()};return(0,P.e)((ke,Ye)=>{pe++,!We&&!Oe&&Ge();const Xe=Se=Se??L();Ye.add(()=>{pe--,0===pe&&!We&&!Oe&&(le=j(Ee,q))}),Xe.subscribe(Ye),ee||(ee=new ne.Hp({next:Re=>Xe.next(Re),error:Re=>{We=!0,Ge(),le=j(Ae,J,Re),Xe.error(Re)},complete:()=>{Oe=!0,Ge(),le=j(Ae,Q),Xe.complete()}}),(0,p.D)(ke).subscribe(ee))})(_e)}}function j($,L,...J){return!0===L?($(),null):!1===L?null:L(...J).pipe((0,D.q)(1)).subscribe(()=>$())}},5684:(Y,F,y)=>{y.d(F,{T:()=>D});var p=y(9300);function D(X){return(0,p.h)((ne,P)=>X<=P)}},8675:(Y,F,y)=>{y.d(F,{O:()=>ne});var p=y(7272),D=y(7669),X=y(4482);function ne(...P){const G=(0,D.yG)(P);return(0,X.e)((j,$)=>{(G?(0,p.z)(P,j,G):(0,p.z)(P,j)).subscribe($)})}},3900:(Y,F,y)=>{y.d(F,{w:()=>ne});var p=y(8421),D=y(4482),X=y(5403);function ne(P,G){return(0,D.e)((j,$)=>{let L=null,J=0,Q=!1;const q=()=>Q&&!L&&$.complete();j.subscribe((0,X.x)($,_e=>{L?.unsubscribe();let ee=0;const le=J++;(0,p.Xf)(P(_e,le)).subscribe(L=(0,X.x)($,Se=>$.next(G?G(_e,Se,le,ee++):Se),()=>{L=null,q()}))},()=>{Q=!0,q()}))})}},5698:(Y,F,y)=>{y.d(F,{q:()=>ne});var p=y(515),D=y(4482),X=y(5403);function ne(P){return P<=0?()=>p.E:(0,D.e)((G,j)=>{let $=0;G.subscribe((0,X.x)(j,L=>{++$<=P&&(j.next(L),P<=$&&j.complete())}))})}},2722:(Y,F,y)=>{y.d(F,{R:()=>P});var p=y(4482),D=y(5403),X=y(8421),ne=y(5032);function P(G){return(0,p.e)((j,$)=>{(0,X.Xf)(G).subscribe((0,D.x)($,()=>$.complete(),ne.Z)),!$.closed&&j.subscribe($)})}},8505:(Y,F,y)=>{y.d(F,{b:()=>P});var p=y(576),D=y(4482),X=y(5403),ne=y(4671);function P(G,j,$){const L=(0,p.m)(G)||j||$?{next:G,error:j,complete:$}:G;return L?(0,D.e)((J,Q)=>{var q;null===(q=L.subscribe)||void 0===q||q.call(L);let _e=!0;J.subscribe((0,X.x)(Q,ee=>{var le;null===(le=L.next)||void 0===le||le.call(L,ee),Q.next(ee)},()=>{var ee;_e=!1,null===(ee=L.complete)||void 0===ee||ee.call(L),Q.complete()},ee=>{var le;_e=!1,null===(le=L.error)||void 0===le||le.call(L,ee),Q.error(ee)},()=>{var ee,le;_e&&(null===(ee=L.unsubscribe)||void 0===ee||ee.call(L)),null===(le=L.finalize)||void 0===le||le.call(L)}))}):ne.y}},1749:(Y,F,y)=>{y.d(F,{V:()=>L});var p=y(4986),X=y(4482),ne=y(8421),P=y(3888),G=y(5403),j=y(9672);const $=(0,P.d)(Q=>function(_e=null){Q(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=_e});function L(Q,q){const{first:_e,each:ee,with:le=J,scheduler:Se=q??p.z,meta:pe=null}=function D(Q){return Q instanceof Date&&!isNaN(Q)}(Q)?{first:Q}:"number"==typeof Q?{each:Q}:Q;if(null==_e&&null==ee)throw new TypeError("No timeout provided.");return(0,X.e)((Oe,We)=>{let Ge,Ae,Ee=null,ke=0;const Ye=Xe=>{Ae=(0,j.f)(We,Se,()=>{try{Ge.unsubscribe(),(0,ne.Xf)(le({meta:pe,lastValue:Ee,seen:ke})).subscribe(We)}catch(Re){We.error(Re)}},Xe)};Ge=Oe.subscribe((0,G.x)(We,Xe=>{Ae?.unsubscribe(),ke++,We.next(Ee=Xe),ee>0&&Ye(ee)},void 0,void 0,()=>{Ae?.closed||Ae?.unsubscribe(),Ee=null})),!ke&&Ye(null!=_e?"number"==typeof _e?_e:+_e-Se.now():ee)})}function J(Q){throw new $(Q)}},1365:(Y,F,y)=>{y.d(F,{M:()=>j});var p=y(4482),D=y(5403),X=y(8421),ne=y(4671),P=y(5032),G=y(7669);function j(...$){const L=(0,G.jO)($);return(0,p.e)((J,Q)=>{const q=$.length,_e=new Array(q);let ee=$.map(()=>!1),le=!1;for(let Se=0;Se<q;Se++)(0,X.Xf)($[Se]).subscribe((0,D.x)(Q,pe=>{_e[Se]=pe,!le&&!ee[Se]&&(ee[Se]=!0,(le=ee.every(ne.y))&&(ee=null))},P.Z));J.subscribe((0,D.x)(Q,Se=>{if(le){const pe=[Se,..._e];Q.next(L?L(...pe):pe)}}))})}},4408:(Y,F,y)=>{y.d(F,{o:()=>P});var p=y(727);class D extends p.w0{constructor(j,$){super()}schedule(j,$=0){return this}}const X={setInterval(G,j,...$){const{delegate:L}=X;return L?.setInterval?L.setInterval(G,j,...$):setInterval(G,j,...$)},clearInterval(G){const{delegate:j}=X;return(j?.clearInterval||clearInterval)(G)},delegate:void 0};var ne=y(8737);class P extends D{constructor(j,$){super(j,$),this.scheduler=j,this.work=$,this.pending=!1}schedule(j,$=0){if(this.closed)return this;this.state=j;const L=this.id,J=this.scheduler;return null!=L&&(this.id=this.recycleAsyncId(J,L,$)),this.pending=!0,this.delay=$,this.id=this.id||this.requestAsyncId(J,this.id,$),this}requestAsyncId(j,$,L=0){return X.setInterval(j.flush.bind(j,this),L)}recycleAsyncId(j,$,L=0){if(null!=L&&this.delay===L&&!1===this.pending)return $;X.clearInterval($)}execute(j,$){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const L=this._execute(j,$);if(L)return L;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(j,$){let J,L=!1;try{this.work(j)}catch(Q){L=!0,J=Q||new Error("Scheduled action threw falsy error")}if(L)return this.unsubscribe(),J}unsubscribe(){if(!this.closed){const{id:j,scheduler:$}=this,{actions:L}=$;this.work=this.state=this.scheduler=null,this.pending=!1,(0,ne.P)(L,this),null!=j&&(this.id=this.recycleAsyncId($,j,null)),this.delay=null,super.unsubscribe()}}}},7565:(Y,F,y)=>{y.d(F,{v:()=>X});var p=y(6063);class D{constructor(P,G=D.now){this.schedulerActionCtor=P,this.now=G}schedule(P,G=0,j){return new this.schedulerActionCtor(this,P).schedule(j,G)}}D.now=p.l.now;class X extends D{constructor(P,G=D.now){super(P,G),this.actions=[],this._active=!1,this._scheduled=void 0}flush(P){const{actions:G}=this;if(this._active)return void G.push(P);let j;this._active=!0;do{if(j=P.execute(P.state,P.delay))break}while(P=G.shift());if(this._active=!1,j){for(;P=G.shift();)P.unsubscribe();throw j}}}},4986:(Y,F,y)=>{y.d(F,{z:()=>X});var p=y(4408);const X=new(y(7565).v)(p.o)},6063:(Y,F,y)=>{y.d(F,{l:()=>p});const p={now:()=>(p.delegate||Date).now(),delegate:void 0}},233:(Y,F,y)=>{y.d(F,{N:()=>P});var p=y(4408),X=y(7565);const P=new class ne extends X.v{}(class D extends p.o{constructor($,L){super($,L),this.scheduler=$,this.work=L}schedule($,L=0){return L>0?super.schedule($,L):(this.delay=L,this.state=$,this.scheduler.flush(this),this)}execute($,L){return L>0||this.closed?super.execute($,L):this._execute($,L)}requestAsyncId($,L,J=0){return null!=J&&J>0||null==J&&this.delay>0?super.requestAsyncId($,L,J):$.flush(this)}})},3410:(Y,F,y)=>{y.d(F,{z:()=>p});const p={setTimeout(D,X,...ne){const{delegate:P}=p;return P?.setTimeout?P.setTimeout(D,X,...ne):setTimeout(D,X,...ne)},clearTimeout(D){const{delegate:X}=p;return(X?.clearTimeout||clearTimeout)(D)},delegate:void 0}},2202:(Y,F,y)=>{y.d(F,{h:()=>D});const D=function p(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(Y,F,y)=>{y.d(F,{L:()=>p});const p="function"==typeof Symbol&&Symbol.observable||"@@observable"},7669:(Y,F,y)=>{y.d(F,{_6:()=>G,jO:()=>ne,yG:()=>P});var p=y(576);function X(j){return j[j.length-1]}function ne(j){return(0,p.m)(X(j))?j.pop():void 0}function P(j){return function D(j){return j&&(0,p.m)(j.schedule)}(X(j))?j.pop():void 0}function G(j,$){return"number"==typeof X(j)?j.pop():$}},4742:(Y,F,y)=>{y.d(F,{D:()=>P});const{isArray:p}=Array,{getPrototypeOf:D,prototype:X,keys:ne}=Object;function P(j){if(1===j.length){const $=j[0];if(p($))return{args:$,keys:null};if(function G(j){return j&&"object"==typeof j&&D(j)===X}($)){const L=ne($);return{args:L.map(J=>$[J]),keys:L}}}return{args:j,keys:null}}},8737:(Y,F,y)=>{function p(D,X){if(D){const ne=D.indexOf(X);0<=ne&&D.splice(ne,1)}}y.d(F,{P:()=>p})},3888:(Y,F,y)=>{function p(D){const ne=D(P=>{Error.call(P),P.stack=(new Error).stack});return ne.prototype=Object.create(Error.prototype),ne.prototype.constructor=ne,ne}y.d(F,{d:()=>p})},1810:(Y,F,y)=>{function p(D,X){return D.reduce((ne,P,G)=>(ne[P]=X[G],ne),{})}y.d(F,{n:()=>p})},2806:(Y,F,y)=>{y.d(F,{O:()=>ne,x:()=>X});var p=y(2416);let D=null;function X(P){if(p.v.useDeprecatedSynchronousErrorHandling){const G=!D;if(G&&(D={errorThrown:!1,error:null}),P(),G){const{errorThrown:j,error:$}=D;if(D=null,j)throw $}}else P()}function ne(P){p.v.useDeprecatedSynchronousErrorHandling&&D&&(D.errorThrown=!0,D.error=P)}},9672:(Y,F,y)=>{function p(D,X,ne,P=0,G=!1){const j=X.schedule(function(){ne(),G?D.add(this.schedule(null,P)):this.unsubscribe()},P);if(D.add(j),!G)return j}y.d(F,{f:()=>p})},4671:(Y,F,y)=>{function p(D){return D}y.d(F,{y:()=>p})},1144:(Y,F,y)=>{y.d(F,{z:()=>p});const p=D=>D&&"number"==typeof D.length&&"function"!=typeof D},2206:(Y,F,y)=>{y.d(F,{D:()=>D});var p=y(576);function D(X){return Symbol.asyncIterator&&(0,p.m)(X?.[Symbol.asyncIterator])}},576:(Y,F,y)=>{function p(D){return"function"==typeof D}y.d(F,{m:()=>p})},3670:(Y,F,y)=>{y.d(F,{c:()=>X});var p=y(8822),D=y(576);function X(ne){return(0,D.m)(ne[p.L])}},6495:(Y,F,y)=>{y.d(F,{T:()=>X});var p=y(2202),D=y(576);function X(ne){return(0,D.m)(ne?.[p.h])}},8239:(Y,F,y)=>{y.d(F,{t:()=>D});var p=y(576);function D(X){return(0,p.m)(X?.then)}},3260:(Y,F,y)=>{y.d(F,{L:()=>ne,Q:()=>X});var p=y(655),D=y(576);function X(P){return(0,p.FC)(this,arguments,function*(){const j=P.getReader();try{for(;;){const{value:$,done:L}=yield(0,p.qq)(j.read());if(L)return yield(0,p.qq)(void 0);yield yield(0,p.qq)($)}}finally{j.releaseLock()}})}function ne(P){return(0,D.m)(P?.getReader)}},4482:(Y,F,y)=>{y.d(F,{A:()=>D,e:()=>X});var p=y(576);function D(ne){return(0,p.m)(ne?.lift)}function X(ne){return P=>{if(D(P))return P.lift(function(G){try{return ne(G,this)}catch(j){this.error(j)}});throw new TypeError("Unable to lift unknown Observable type")}}},3268:(Y,F,y)=>{y.d(F,{Z:()=>ne});var p=y(4004);const{isArray:D}=Array;function ne(P){return(0,p.U)(G=>function X(P,G){return D(G)?P(...G):P(G)}(P,G))}},5032:(Y,F,y)=>{function p(){}y.d(F,{Z:()=>p})},7849:(Y,F,y)=>{y.d(F,{h:()=>X});var p=y(2416),D=y(3410);function X(ne){D.z.setTimeout(()=>{const{onUnhandledError:P}=p.v;if(!P)throw ne;P(ne)})}},4532:(Y,F,y)=>{function p(D){return new TypeError(`You provided ${null!==D&&"object"==typeof D?"an invalid object":`'${D}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}y.d(F,{z:()=>p})},655:(Y,F,y)=>{function $(se,fe,ie,De){return new(ie||(ie=Promise))(function(Ue,at){function Dt(It){try{Be(De.next(It))}catch(ln){at(ln)}}function Mt(It){try{Be(De.throw(It))}catch(ln){at(ln)}}function Be(It){It.done?Ue(It.value):function he(Ue){return Ue instanceof ie?Ue:new ie(function(at){at(Ue)})}(It.value).then(Dt,Mt)}Be((De=De.apply(se,fe||[])).next())})}function pe(se){return this instanceof pe?(this.v=se,this):new pe(se)}function Oe(se,fe,ie){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var he,De=ie.apply(se,fe||[]),Ue=[];return he={},at("next"),at("throw"),at("return"),he[Symbol.asyncIterator]=function(){return this},he;function at(jt){De[jt]&&(he[jt]=function(bt){return new Promise(function($t,on){Ue.push([jt,bt,$t,on])>1||Dt(jt,bt)})})}function Dt(jt,bt){try{!function Mt(jt){jt.value instanceof pe?Promise.resolve(jt.value.v).then(Be,It):ln(Ue[0][2],jt)}(De[jt](bt))}catch($t){ln(Ue[0][3],$t)}}function Be(jt){Dt("next",jt)}function It(jt){Dt("throw",jt)}function ln(jt,bt){jt(bt),Ue.shift(),Ue.length&&Dt(Ue[0][0],Ue[0][1])}}function Ge(se){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ie,fe=se[Symbol.asyncIterator];return fe?fe.call(se):(se=function q(se){var fe="function"==typeof Symbol&&Symbol.iterator,ie=fe&&se[fe],De=0;if(ie)return ie.call(se);if(se&&"number"==typeof se.length)return{next:function(){return se&&De>=se.length&&(se=void 0),{value:se&&se[De++],done:!se}}};throw new TypeError(fe?"Object is not iterable.":"Symbol.iterator is not defined.")}(se),ie={},De("next"),De("throw"),De("return"),ie[Symbol.asyncIterator]=function(){return this},ie);function De(Ue){ie[Ue]=se[Ue]&&function(at){return new Promise(function(Dt,Mt){!function he(Ue,at,Dt,Mt){Promise.resolve(Mt).then(function(Be){Ue({value:Be,done:Dt})},at)}(Dt,Mt,(at=se[Ue](at)).done,at.value)})}}}y.d(F,{FC:()=>Oe,KL:()=>Ge,mG:()=>$,qq:()=>pe})},6895:(Y,F,y)=>{y.d(F,{Do:()=>Ae,EM:()=>Dn,HT:()=>P,JF:()=>Tn,K0:()=>j,Mx:()=>ao,NF:()=>Hr,O5:()=>nn,Ov:()=>Ro,S$:()=>pe,V_:()=>J,Ye:()=>Ee,b0:()=>Ge,bD:()=>Bn,ez:()=>mr,q:()=>X,sg:()=>Yn,w_:()=>G});var p=y(4650);
/**
     * @license Angular v14.0.5
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let D=null;function X(){return D}function P(h){D||(D=h)}class G{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const j=new p.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let $=(()=>{class h{historyGo(g){throw new Error("Not implemented")}}return h.\u0275fac=function(g){return new(g||h)},h.\u0275prov=p.Yz7({token:h,factory:function(){return function L(){return(0,p.LFG)(Q)}()},providedIn:"platform"}),h})();const J=new p.OlP("Location Initialized");let Q=(()=>{class h extends ${constructor(g){super(),this._doc=g,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return X().getBaseHref(this._doc)}onPopState(g){const w=X().getGlobalEventTarget(this._doc,"window");return w.addEventListener("popstate",g,!1),()=>w.removeEventListener("popstate",g)}onHashChange(g){const w=X().getGlobalEventTarget(this._doc,"window");return w.addEventListener("hashchange",g,!1),()=>w.removeEventListener("hashchange",g)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(g){this.location.pathname=g}pushState(g,w,V){q()?this._history.pushState(g,w,V):this.location.hash=V}replaceState(g,w,V){q()?this._history.replaceState(g,w,V):this.location.hash=V}forward(){this._history.forward()}back(){this._history.back()}historyGo(g=0){this._history.go(g)}getState(){return this._history.state}}return h.\u0275fac=function(g){return new(g||h)(p.LFG(j))},h.\u0275prov=p.Yz7({token:h,factory:function(){return function _e(){return new Q((0,p.LFG)(j))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()},providedIn:"platform"}),h})();function q(){return!!window.history.pushState}function ee(h,M){if(0==h.length)return M;if(0==M.length)return h;let g=0;return h.endsWith("/")&&g++,M.startsWith("/")&&g++,2==g?h+M.substring(1):1==g?h+M:h+"/"+M}function le(h){const M=h.match(/#|\?|$/),g=M&&M.index||h.length;return h.slice(0,g-("/"===h[g-1]?1:0))+h.slice(g)}function Se(h){return h&&"?"!==h[0]?"?"+h:h}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let pe=(()=>{class h{historyGo(g){throw new Error("Not implemented")}}return h.\u0275fac=function(g){return new(g||h)},h.\u0275prov=p.Yz7({token:h,factory:function(){return function Oe(){const h=(0,p.LFG)(j).location;return new Ge((0,p.LFG)($),h&&h.origin||"")}()},providedIn:"root"}),h})();const We=new p.OlP("appBaseHref");let Ge=(()=>{class h extends pe{constructor(g,w){if(super(),this._platformLocation=g,this._removeListenerFns=[],null==w&&(w=this._platformLocation.getBaseHrefFromDOM()),null==w)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=w}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(g){this._removeListenerFns.push(this._platformLocation.onPopState(g),this._platformLocation.onHashChange(g))}getBaseHref(){return this._baseHref}prepareExternalUrl(g){return ee(this._baseHref,g)}path(g=!1){const w=this._platformLocation.pathname+Se(this._platformLocation.search),V=this._platformLocation.hash;return V&&g?`${w}${V}`:w}pushState(g,w,V,me){const ce=this.prepareExternalUrl(V+Se(me));this._platformLocation.pushState(g,w,ce)}replaceState(g,w,V,me){const ce=this.prepareExternalUrl(V+Se(me));this._platformLocation.replaceState(g,w,ce)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(g=0){this._platformLocation.historyGo?.(g)}}return h.\u0275fac=function(g){return new(g||h)(p.LFG($),p.LFG(We,8))},h.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac}),h})(),Ae=(()=>{class h extends pe{constructor(g,w){super(),this._platformLocation=g,this._baseHref="",this._removeListenerFns=[],null!=w&&(this._baseHref=w)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(g){this._removeListenerFns.push(this._platformLocation.onPopState(g),this._platformLocation.onHashChange(g))}getBaseHref(){return this._baseHref}path(g=!1){let w=this._platformLocation.hash;return null==w&&(w="#"),w.length>0?w.substring(1):w}prepareExternalUrl(g){const w=ee(this._baseHref,g);return w.length>0?"#"+w:w}pushState(g,w,V,me){let ce=this.prepareExternalUrl(V+Se(me));0==ce.length&&(ce=this._platformLocation.pathname),this._platformLocation.pushState(g,w,ce)}replaceState(g,w,V,me){let ce=this.prepareExternalUrl(V+Se(me));0==ce.length&&(ce=this._platformLocation.pathname),this._platformLocation.replaceState(g,w,ce)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(g=0){this._platformLocation.historyGo?.(g)}}return h.\u0275fac=function(g){return new(g||h)(p.LFG($),p.LFG(We,8))},h.\u0275prov=p.Yz7({token:h,factory:h.\u0275fac}),h})(),Ee=(()=>{class h{constructor(g){this._subject=new p.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=g;const w=this._locationStrategy.getBaseHref();this._baseHref=le(Xe(w)),this._locationStrategy.onPopState(V=>{this._subject.emit({url:this.path(!0),pop:!0,state:V.state,type:V.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(g=!1){return this.normalize(this._locationStrategy.path(g))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(g,w=""){return this.path()==this.normalize(g+Se(w))}normalize(g){return h.stripTrailingSlash(function Ye(h,M){return h&&M.startsWith(h)?M.substring(h.length):M}(this._baseHref,Xe(g)))}prepareExternalUrl(g){return g&&"/"!==g[0]&&(g="/"+g),this._locationStrategy.prepareExternalUrl(g)}go(g,w="",V=null){this._locationStrategy.pushState(V,"",g,w),this._notifyUrlChangeListeners(this.prepareExternalUrl(g+Se(w)),V)}replaceState(g,w="",V=null){this._locationStrategy.replaceState(V,"",g,w),this._notifyUrlChangeListeners(this.prepareExternalUrl(g+Se(w)),V)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(g=0){this._locationStrategy.historyGo?.(g)}onUrlChange(g){return this._urlChangeListeners.push(g),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(w=>{this._notifyUrlChangeListeners(w.url,w.state)})),()=>{const w=this._urlChangeListeners.indexOf(g);this._urlChangeListeners.splice(w,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(g="",w){this._urlChangeListeners.forEach(V=>V(g,w))}subscribe(g,w,V){return this._subject.subscribe({next:g,error:w,complete:V})}}return h.normalizeQueryParams=Se,h.joinWithSlash=ee,h.stripTrailingSlash=le,h.\u0275fac=function(g){return new(g||h)(p.LFG(pe))},h.\u0275prov=p.Yz7({token:h,factory:function(){return function ke(){return new Ee((0,p.LFG)(pe))}()},providedIn:"root"}),h})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xe(h){return h.replace(/\/index.html$/,"")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ao(h,M){M=encodeURIComponent(M);for(const g of h.split(";")){const w=g.indexOf("="),[V,me]=-1==w?[g,""]:[g.slice(0,w),g.slice(w+1)];if(V.trim()===M)return decodeURIComponent(me)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Gn{constructor(M,g,w,V){this.$implicit=M,this.ngForOf=g,this.index=w,this.count=V}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Yn=(()=>{class h{constructor(g,w,V){this._viewContainer=g,this._template=w,this._differs=V,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(g){this._ngForOf=g,this._ngForOfDirty=!0}set ngForTrackBy(g){this._trackByFn=g}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(g){g&&(this._template=g)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const g=this._ngForOf;!this._differ&&g&&(this._differ=this._differs.find(g).create(this.ngForTrackBy))}if(this._differ){const g=this._differ.diff(this._ngForOf);g&&this._applyChanges(g)}}_applyChanges(g){const w=this._viewContainer;g.forEachOperation((V,me,ce)=>{if(null==V.previousIndex)w.createEmbeddedView(this._template,new Gn(V.item,this._ngForOf,-1,-1),null===ce?void 0:ce);else if(null==ce)w.remove(null===me?void 0:me);else if(null!==me){const qe=w.get(me);w.move(qe,ce),an(qe,V)}});for(let V=0,me=w.length;V<me;V++){const qe=w.get(V).context;qe.index=V,qe.count=me,qe.ngForOf=this._ngForOf}g.forEachIdentityChange(V=>{an(w.get(V.currentIndex),V)})}static ngTemplateContextGuard(g,w){return!0}}return h.\u0275fac=function(g){return new(g||h)(p.Y36(p.s_b),p.Y36(p.Rgc),p.Y36(p.ZZ4))},h.\u0275dir=p.lG2({type:h,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),h})();function an(h,M){h.context.$implicit=M.item}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let nn=(()=>{class h{constructor(g,w){this._viewContainer=g,this._context=new x,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=w}set ngIf(g){this._context.$implicit=this._context.ngIf=g,this._updateView()}set ngIfThen(g){ge("ngIfThen",g),this._thenTemplateRef=g,this._thenViewRef=null,this._updateView()}set ngIfElse(g){ge("ngIfElse",g),this._elseTemplateRef=g,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(g,w){return!0}}return h.\u0275fac=function(g){return new(g||h)(p.Y36(p.s_b),p.Y36(p.Rgc))},h.\u0275dir=p.lG2({type:h,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),h})();class x{constructor(){this.$implicit=null,this.ngIf=null}}function ge(h,M){if(M&&!M.createEmbeddedView)throw new Error(`${h} must be a TemplateRef, but received '${(0,p.AaK)(M)}'.`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Oo{createSubscription(M,g){return M.subscribe({next:g,error:w=>{throw w}})}dispose(M){M.unsubscribe()}}class Ar{createSubscription(M,g){return M.then(g,w=>{throw w})}dispose(M){}}const co=new Ar,ei=new Oo;let Ro=(()=>{class h{constructor(g){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=g}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(g){return this._obj?g!==this._obj?(this._dispose(),this.transform(g)):this._latestValue:(g&&this._subscribe(g),this._latestValue)}_subscribe(g){this._obj=g,this._strategy=this._selectStrategy(g),this._subscription=this._strategy.createSubscription(g,w=>this._updateLatestValue(g,w))}_selectStrategy(g){if((0,p.QGY)(g))return co;if((0,p.F4k)(g))return ei;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
throw function Fn(h,M){return new p.vHH(2100,!1)}()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(g,w){g===this._obj&&(this._latestValue=w,this._ref.markForCheck())}}return h.\u0275fac=function(g){return new(g||h)(p.Y36(p.sBO,16))},h.\u0275pipe=p.Yjl({name:"async",type:h,pure:!1}),h})(),mr=(()=>{class h{}return h.\u0275fac=function(g){return new(g||h)},h.\u0275mod=p.oAB({type:h}),h.\u0275inj=p.cJS({}),h})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Bn="browser";function Hr(h){return h===Bn}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Dn=(()=>{class h{}return h.\u0275prov=(0,p.Yz7)({token:h,providedIn:"root",factory:()=>new Un((0,p.LFG)(j),window)}),h})();class Un{constructor(M,g){this.document=M,this.window=g,this.offset=()=>[0,0]}setOffset(M){this.offset=Array.isArray(M)?()=>M:M}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(M){this.supportsScrolling()&&this.window.scrollTo(M[0],M[1])}scrollToAnchor(M){if(!this.supportsScrolling())return;const g=function ko(h,M){const g=h.getElementById(M)||h.getElementsByName(M)[0];if(g)return g;if("function"==typeof h.createTreeWalker&&h.body&&(h.body.createShadowRoot||h.body.attachShadow)){const w=h.createTreeWalker(h.body,NodeFilter.SHOW_ELEMENT);let V=w.currentNode;for(;V;){const me=V.shadowRoot;if(me){const ce=me.getElementById(M)||me.querySelector(`[name="${M}"]`);if(ce)return ce}V=w.nextNode()}}return null}(this.document,M);g&&(this.scrollToElement(g),g.focus())}setHistoryScrollRestoration(M){if(this.supportScrollRestoration()){const g=this.window.history;g&&g.scrollRestoration&&(g.scrollRestoration=M)}}scrollToElement(M){const g=M.getBoundingClientRect(),w=g.left+this.window.pageXOffset,V=g.top+this.window.pageYOffset,me=this.offset();this.window.scrollTo(w-me[0],V-me[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const M=ho(this.window.history)||ho(Object.getPrototypeOf(this.window.history));return!(!M||!M.writable&&!M.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function ho(h){return Object.getOwnPropertyDescriptor(h,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Tn{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */},529:(Y,F,y)=>{y.d(F,{JF:()=>On,eN:()=>he});var p=y(6895),D=y(4650),X=y(9646),ne=y(8306),P=y(4351),G=y(9300),j=y(4004);
/**
     * @license Angular v14.0.5
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ${}class L{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class J{constructor(U){this.normalizedNames=new Map,this.lazyUpdate=null,U?this.lazyInit="string"==typeof U?()=>{this.headers=new Map,U.split("\n").forEach(W=>{const ve=W.indexOf(":");if(ve>0){const re=W.slice(0,ve),Ne=re.toLowerCase(),Tt=W.slice(ve+1).trim();this.maybeSetNormalizedName(re,Ne),this.headers.has(Ne)?this.headers.get(Ne).push(Tt):this.headers.set(Ne,[Tt])}})}:()=>{this.headers=new Map,Object.keys(U).forEach(W=>{let ve=U[W];const re=W.toLowerCase();"string"==typeof ve&&(ve=[ve]),ve.length>0&&(this.headers.set(re,ve),this.maybeSetNormalizedName(W,re))})}:this.headers=new Map}has(U){return this.init(),this.headers.has(U.toLowerCase())}get(U){this.init();const W=this.headers.get(U.toLowerCase());return W&&W.length>0?W[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(U){return this.init(),this.headers.get(U.toLowerCase())||null}append(U,W){return this.clone({name:U,value:W,op:"a"})}set(U,W){return this.clone({name:U,value:W,op:"s"})}delete(U,W){return this.clone({name:U,value:W,op:"d"})}maybeSetNormalizedName(U,W){this.normalizedNames.has(W)||this.normalizedNames.set(W,U)}init(){this.lazyInit&&(this.lazyInit instanceof J?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(U=>this.applyUpdate(U)),this.lazyUpdate=null))}copyFrom(U){U.init(),Array.from(U.headers.keys()).forEach(W=>{this.headers.set(W,U.headers.get(W)),this.normalizedNames.set(W,U.normalizedNames.get(W))})}clone(U){const W=new J;return W.lazyInit=this.lazyInit&&this.lazyInit instanceof J?this.lazyInit:this,W.lazyUpdate=(this.lazyUpdate||[]).concat([U]),W}applyUpdate(U){const W=U.name.toLowerCase();switch(U.op){case"a":case"s":let ve=U.value;if("string"==typeof ve&&(ve=[ve]),0===ve.length)return;this.maybeSetNormalizedName(U.name,W);const re=("a"===U.op?this.headers.get(W):void 0)||[];re.push(...ve),this.headers.set(W,re);break;case"d":const Ne=U.value;if(Ne){let Tt=this.headers.get(W);if(!Tt)return;Tt=Tt.filter(vt=>-1===Ne.indexOf(vt)),0===Tt.length?(this.headers.delete(W),this.normalizedNames.delete(W)):this.headers.set(W,Tt)}else this.headers.delete(W),this.normalizedNames.delete(W)}}forEach(U){this.init(),Array.from(this.normalizedNames.keys()).forEach(W=>U(this.normalizedNames.get(W),this.headers.get(W)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Q{encodeKey(U){return le(U)}encodeValue(U){return le(U)}decodeKey(U){return decodeURIComponent(U)}decodeValue(U){return decodeURIComponent(U)}}const _e=/%(\d[a-f0-9])/gi,ee={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function le(ue){return encodeURIComponent(ue).replace(_e,(U,W)=>ee[W]??U)}function Se(ue){return`${ue}`}class pe{constructor(U={}){if(this.updates=null,this.cloneFrom=null,this.encoder=U.encoder||new Q,U.fromString){if(U.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function q(ue,U){const W=new Map;return ue.length>0&&ue.replace(/^\?/,"").split("&").forEach(re=>{const Ne=re.indexOf("="),[Tt,vt]=-1==Ne?[U.decodeKey(re),""]:[U.decodeKey(re.slice(0,Ne)),U.decodeValue(re.slice(Ne+1))],je=W.get(Tt)||[];je.push(vt),W.set(Tt,je)}),W}(U.fromString,this.encoder)}else U.fromObject?(this.map=new Map,Object.keys(U.fromObject).forEach(W=>{const ve=U.fromObject[W],re=Array.isArray(ve)?ve.map(Se):[Se(ve)];this.map.set(W,re)})):this.map=null}has(U){return this.init(),this.map.has(U)}get(U){this.init();const W=this.map.get(U);return W?W[0]:null}getAll(U){return this.init(),this.map.get(U)||null}keys(){return this.init(),Array.from(this.map.keys())}append(U,W){return this.clone({param:U,value:W,op:"a"})}appendAll(U){const W=[];return Object.keys(U).forEach(ve=>{const re=U[ve];Array.isArray(re)?re.forEach(Ne=>{W.push({param:ve,value:Ne,op:"a"})}):W.push({param:ve,value:re,op:"a"})}),this.clone(W)}set(U,W){return this.clone({param:U,value:W,op:"s"})}delete(U,W){return this.clone({param:U,value:W,op:"d"})}toString(){return this.init(),this.keys().map(U=>{const W=this.encoder.encodeKey(U);return this.map.get(U).map(ve=>W+"="+this.encoder.encodeValue(ve)).join("&")}).filter(U=>""!==U).join("&")}clone(U){const W=new pe({encoder:this.encoder});return W.cloneFrom=this.cloneFrom||this,W.updates=(this.updates||[]).concat(U),W}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(U=>this.map.set(U,this.cloneFrom.map.get(U))),this.updates.forEach(U=>{switch(U.op){case"a":case"s":const W=("a"===U.op?this.map.get(U.param):void 0)||[];W.push(Se(U.value)),this.map.set(U.param,W);break;case"d":if(void 0===U.value){this.map.delete(U.param);break}{let ve=this.map.get(U.param)||[];const re=ve.indexOf(Se(U.value));-1!==re&&ve.splice(re,1),ve.length>0?this.map.set(U.param,ve):this.map.delete(U.param)}}}),this.cloneFrom=this.updates=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class We{constructor(){this.map=new Map}set(U,W){return this.map.set(U,W),this}get(U){return this.map.has(U)||this.map.set(U,U.defaultValue()),this.map.get(U)}delete(U){return this.map.delete(U),this}has(U){return this.map.has(U)}keys(){return this.map.keys()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ae(ue){return typeof ArrayBuffer<"u"&&ue instanceof ArrayBuffer}function Ee(ue){return typeof Blob<"u"&&ue instanceof Blob}function ke(ue){return typeof FormData<"u"&&ue instanceof FormData}class Xe{constructor(U,W,ve,re){let Ne;if(this.url=W,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=U.toUpperCase(),function Ge(ue){switch(ue){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||re?(this.body=void 0!==ve?ve:null,Ne=re):Ne=ve,Ne&&(this.reportProgress=!!Ne.reportProgress,this.withCredentials=!!Ne.withCredentials,Ne.responseType&&(this.responseType=Ne.responseType),Ne.headers&&(this.headers=Ne.headers),Ne.context&&(this.context=Ne.context),Ne.params&&(this.params=Ne.params)),this.headers||(this.headers=new J),this.context||(this.context=new We),this.params){const Tt=this.params.toString();if(0===Tt.length)this.urlWithParams=W;else{const vt=W.indexOf("?");this.urlWithParams=W+(-1===vt?"?":vt<W.length-1?"&":"")+Tt}}else this.params=new pe,this.urlWithParams=W}serializeBody(){return null===this.body?null:Ae(this.body)||Ee(this.body)||ke(this.body)||function Ye(ue){return typeof URLSearchParams<"u"&&ue instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof pe?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ke(this.body)?null:Ee(this.body)?this.body.type||null:Ae(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof pe?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(U={}){const W=U.method||this.method,ve=U.url||this.url,re=U.responseType||this.responseType,Ne=void 0!==U.body?U.body:this.body,Tt=void 0!==U.withCredentials?U.withCredentials:this.withCredentials,vt=void 0!==U.reportProgress?U.reportProgress:this.reportProgress;let je=U.headers||this.headers,yt=U.params||this.params;const kt=U.context??this.context;return void 0!==U.setHeaders&&(je=Object.keys(U.setHeaders).reduce((tn,pt)=>tn.set(pt,U.setHeaders[pt]),je)),U.setParams&&(yt=Object.keys(U.setParams).reduce((tn,pt)=>tn.set(pt,U.setParams[pt]),yt)),new Xe(W,ve,Ne,{params:yt,headers:je,context:kt,reportProgress:vt,responseType:re,withCredentials:Tt})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Re=(()=>((Re=Re||{})[Re.Sent=0]="Sent",Re[Re.UploadProgress=1]="UploadProgress",Re[Re.ResponseHeader=2]="ResponseHeader",Re[Re.DownloadProgress=3]="DownloadProgress",Re[Re.Response=4]="Response",Re[Re.User=5]="User",Re))();class it{constructor(U,W=200,ve="OK"){this.headers=U.headers||new J,this.status=void 0!==U.status?U.status:W,this.statusText=U.statusText||ve,this.url=U.url||null,this.ok=this.status>=200&&this.status<300}}class se extends it{constructor(U={}){super(U),this.type=Re.ResponseHeader}clone(U={}){return new se({headers:U.headers||this.headers,status:void 0!==U.status?U.status:this.status,statusText:U.statusText||this.statusText,url:U.url||this.url||void 0})}}class fe extends it{constructor(U={}){super(U),this.type=Re.Response,this.body=void 0!==U.body?U.body:null}clone(U={}){return new fe({body:void 0!==U.body?U.body:this.body,headers:U.headers||this.headers,status:void 0!==U.status?U.status:this.status,statusText:U.statusText||this.statusText,url:U.url||this.url||void 0})}}class ie extends it{constructor(U){super(U,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${U.url||"(unknown url)"}`:`Http failure response for ${U.url||"(unknown url)"}: ${U.status} ${U.statusText}`,this.error=U.error||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function De(ue,U){return{body:U,headers:ue.headers,context:ue.context,observe:ue.observe,params:ue.params,reportProgress:ue.reportProgress,responseType:ue.responseType,withCredentials:ue.withCredentials}}let he=(()=>{class ue{constructor(W){this.handler=W}request(W,ve,re={}){let Ne;if(W instanceof Xe)Ne=W;else{let je,yt;je=re.headers instanceof J?re.headers:new J(re.headers),re.params&&(yt=re.params instanceof pe?re.params:new pe({fromObject:re.params})),Ne=new Xe(W,ve,void 0!==re.body?re.body:null,{headers:je,context:re.context,params:yt,reportProgress:re.reportProgress,responseType:re.responseType||"json",withCredentials:re.withCredentials})}const Tt=(0,X.of)(Ne).pipe((0,P.b)(je=>this.handler.handle(je)));if(W instanceof Xe||"events"===re.observe)return Tt;const vt=Tt.pipe((0,G.h)(je=>je instanceof fe));switch(re.observe||"body"){case"body":switch(Ne.responseType){case"arraybuffer":return vt.pipe((0,j.U)(je=>{if(null!==je.body&&!(je.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return je.body}));case"blob":return vt.pipe((0,j.U)(je=>{if(null!==je.body&&!(je.body instanceof Blob))throw new Error("Response is not a Blob.");return je.body}));case"text":return vt.pipe((0,j.U)(je=>{if(null!==je.body&&"string"!=typeof je.body)throw new Error("Response is not a string.");return je.body}));default:return vt.pipe((0,j.U)(je=>je.body))}case"response":return vt;default:throw new Error(`Unreachable: unhandled observe type ${re.observe}}`)}}delete(W,ve={}){return this.request("DELETE",W,ve)}get(W,ve={}){return this.request("GET",W,ve)}head(W,ve={}){return this.request("HEAD",W,ve)}jsonp(W,ve){return this.request("JSONP",W,{params:(new pe).append(ve,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(W,ve={}){return this.request("OPTIONS",W,ve)}patch(W,ve,re={}){return this.request("PATCH",W,De(re,ve))}post(W,ve,re={}){return this.request("POST",W,De(re,ve))}put(W,ve,re={}){return this.request("PUT",W,De(re,ve))}}return ue.\u0275fac=function(W){return new(W||ue)(D.LFG($))},ue.\u0275prov=D.Yz7({token:ue,factory:ue.\u0275fac}),ue})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ue{constructor(U,W){this.next=U,this.interceptor=W}handle(U){return this.interceptor.intercept(U,this.next)}}const at=new D.OlP("HTTP_INTERCEPTORS");let Dt=(()=>{class ue{intercept(W,ve){return ve.handle(W)}}return ue.\u0275fac=function(W){return new(W||ue)},ue.\u0275prov=D.Yz7({token:ue,factory:ue.\u0275fac}),ue})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const pn=/^\)\]\}',?\n/;let sr=(()=>{class ue{constructor(W){this.xhrFactory=W}handle(W){if("JSONP"===W.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ne.y(ve=>{const re=this.xhrFactory.build();if(re.open(W.method,W.urlWithParams),W.withCredentials&&(re.withCredentials=!0),W.headers.forEach((Ct,Qe)=>re.setRequestHeader(Ct,Qe.join(","))),W.headers.has("Accept")||re.setRequestHeader("Accept","application/json, text/plain, */*"),!W.headers.has("Content-Type")){const Ct=W.detectContentTypeHeader();null!==Ct&&re.setRequestHeader("Content-Type",Ct)}if(W.responseType){const Ct=W.responseType.toLowerCase();re.responseType="json"!==Ct?Ct:"text"}const Ne=W.serializeBody();let Tt=null;const vt=()=>{if(null!==Tt)return Tt;const Ct=re.statusText||"OK",Qe=new J(re.getAllResponseHeaders()),fn=function Hn(ue){return"responseURL"in ue&&ue.responseURL?ue.responseURL:/^X-Request-URL:/m.test(ue.getAllResponseHeaders())?ue.getResponseHeader("X-Request-URL"):null}(re)||W.url;return Tt=new se({headers:Qe,status:re.status,statusText:Ct,url:fn}),Tt},je=()=>{let{headers:Ct,status:Qe,statusText:fn,url:In}=vt(),ae=null;204!==Qe&&(ae=typeof re.response>"u"?re.responseText:re.response),0===Qe&&(Qe=ae?200:0);let Ie=Qe>=200&&Qe<300;if("json"===W.responseType&&"string"==typeof ae){const Ce=ae;ae=ae.replace(pn,"");try{ae=""!==ae?JSON.parse(ae):null}catch(Ve){ae=Ce,Ie&&(Ie=!1,ae={error:Ve,text:ae})}}Ie?(ve.next(new fe({body:ae,headers:Ct,status:Qe,statusText:fn,url:In||void 0})),ve.complete()):ve.error(new ie({error:ae,headers:Ct,status:Qe,statusText:fn,url:In||void 0}))},yt=Ct=>{const{url:Qe}=vt(),fn=new ie({error:Ct,status:re.status||0,statusText:re.statusText||"Unknown Error",url:Qe||void 0});ve.error(fn)};let kt=!1;const tn=Ct=>{kt||(ve.next(vt()),kt=!0);let Qe={type:Re.DownloadProgress,loaded:Ct.loaded};Ct.lengthComputable&&(Qe.total=Ct.total),"text"===W.responseType&&!!re.responseText&&(Qe.partialText=re.responseText),ve.next(Qe)},pt=Ct=>{let Qe={type:Re.UploadProgress,loaded:Ct.loaded};Ct.lengthComputable&&(Qe.total=Ct.total),ve.next(Qe)};return re.addEventListener("load",je),re.addEventListener("error",yt),re.addEventListener("timeout",yt),re.addEventListener("abort",yt),W.reportProgress&&(re.addEventListener("progress",tn),null!==Ne&&re.upload&&re.upload.addEventListener("progress",pt)),re.send(Ne),ve.next({type:Re.Sent}),()=>{re.removeEventListener("error",yt),re.removeEventListener("abort",yt),re.removeEventListener("load",je),re.removeEventListener("timeout",yt),W.reportProgress&&(re.removeEventListener("progress",tn),null!==Ne&&re.upload&&re.upload.removeEventListener("progress",pt)),re.readyState!==re.DONE&&re.abort()}})}}return ue.\u0275fac=function(W){return new(W||ue)(D.LFG(p.JF))},ue.\u0275prov=D.Yz7({token:ue,factory:ue.\u0275fac}),ue})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const zn=new D.OlP("XSRF_COOKIE_NAME"),gn=new D.OlP("XSRF_HEADER_NAME");class Pn{}let Ln=(()=>{class ue{constructor(W,ve,re){this.doc=W,this.platform=ve,this.cookieName=re,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const W=this.doc.cookie||"";return W!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,p.Mx)(W,this.cookieName),this.lastCookieString=W),this.lastToken}}return ue.\u0275fac=function(W){return new(W||ue)(D.LFG(p.K0),D.LFG(D.Lbi),D.LFG(zn))},ue.\u0275prov=D.Yz7({token:ue,factory:ue.\u0275fac}),ue})(),$n=(()=>{class ue{constructor(W,ve){this.tokenService=W,this.headerName=ve}intercept(W,ve){const re=W.url.toLowerCase();if("GET"===W.method||"HEAD"===W.method||re.startsWith("http://")||re.startsWith("https://"))return ve.handle(W);const Ne=this.tokenService.getToken();return null!==Ne&&!W.headers.has(this.headerName)&&(W=W.clone({headers:W.headers.set(this.headerName,Ne)})),ve.handle(W)}}return ue.\u0275fac=function(W){return new(W||ue)(D.LFG(Pn),D.LFG(gn))},ue.\u0275prov=D.Yz7({token:ue,factory:ue.\u0275fac}),ue})(),nt=(()=>{class ue{constructor(W,ve){this.backend=W,this.injector=ve,this.chain=null}handle(W){if(null===this.chain){const ve=this.injector.get(at,[]);this.chain=ve.reduceRight((re,Ne)=>new Ue(re,Ne),this.backend)}return this.chain.handle(W)}}return ue.\u0275fac=function(W){return new(W||ue)(D.LFG(L),D.LFG(D.zs3))},ue.\u0275prov=D.Yz7({token:ue,factory:ue.\u0275fac}),ue})(),Wt=(()=>{class ue{static disable(){return{ngModule:ue,providers:[{provide:$n,useClass:Dt}]}}static withOptions(W={}){return{ngModule:ue,providers:[W.cookieName?{provide:zn,useValue:W.cookieName}:[],W.headerName?{provide:gn,useValue:W.headerName}:[]]}}}return ue.\u0275fac=function(W){return new(W||ue)},ue.\u0275mod=D.oAB({type:ue}),ue.\u0275inj=D.cJS({providers:[$n,{provide:at,useExisting:$n,multi:!0},{provide:Pn,useClass:Ln},{provide:zn,useValue:"XSRF-TOKEN"},{provide:gn,useValue:"X-XSRF-TOKEN"}]}),ue})(),On=(()=>{class ue{}return ue.\u0275fac=function(W){return new(W||ue)},ue.\u0275mod=D.oAB({type:ue}),ue.\u0275inj=D.cJS({providers:[he,{provide:$,useClass:nt},sr,{provide:L,useExisting:sr}],imports:[Wt.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),ue})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4650:(Y,F,y)=>{y.d(F,{$8M:()=>mi,$Z:()=>Ef,AFp:()=>Fg,ALo:()=>tg,AaK:()=>$,CHM:()=>Rr,CRH:()=>dg,CZH:()=>vu,CqO:()=>hh,D6c:()=>O0,EJc:()=>$C,EiD:()=>yd,EpF:()=>dh,F$t:()=>yh,F4k:()=>fh,FYo:()=>jp,FiY:()=>Js,G48:()=>f0,Gf:()=>cg,GfV:()=>Vp,Hsn:()=>Dh,JOm:()=>qr,JVY:()=>xm,KtG:()=>tr,L6k:()=>Pm,LAX:()=>Nm,LFG:()=>_n,LSH:()=>Bu,Lbi:()=>jC,MMx:()=>gl,NdJ:()=>Jc,OlP:()=>Lt,Oqu:()=>nl,PXZ:()=>o0,PiD:()=>Ou,Q6J:()=>Gc,QGY:()=>Qc,QP$:()=>ws,Qsj:()=>ME,R0b:()=>Er,RDi:()=>Mm,Rgc:()=>Ea,SBq:()=>_a,Sil:()=>GC,Suo:()=>lg,TTD:()=>Mr,TgZ:()=>su,X6Q:()=>d0,XFs:()=>nt,Xpm:()=>In,Xts:()=>rc,Y36:()=>as,YKP:()=>Bp,YNc:()=>ch,Yjl:()=>vn,Yz7:()=>bt,ZZ4:()=>jl,_UZ:()=>Kc,_Vd:()=>ma,_c5:()=>A0,_uU:()=>$h,aQg:()=>Vl,c2e:()=>VC,cJS:()=>on,cg1:()=>ol,dDg:()=>e0,deG:()=>c,dqk:()=>re,eBb:()=>Fm,eFA:()=>Kg,ekj:()=>el,eoX:()=>Wg,f3M:()=>td,g9A:()=>Lg,h0i:()=>wi,hGG:()=>S0,hM9:()=>xE,iGM:()=>ug,ifc:()=>ve,ip1:()=>Pg,kL8:()=>cp,lG2:()=>qt,lcZ:()=>ng,lqb:()=>os,lri:()=>Hg,mCW:()=>ta,n5z:()=>zs,oAB:()=>ct,oxw:()=>vh,pB0:()=>Lm,q3G:()=>Sn,qLn:()=>oa,qOj:()=>Vc,qZA:()=>au,qzn:()=>ts,rWj:()=>$g,s9C:()=>Xc,sBO:()=>h0,sIi:()=>ca,s_b:()=>gu,soG:()=>yu,tBr:()=>ja,tb:()=>kg,tp0:()=>Xs,uIk:()=>Wc,vHH:()=>le,vpe:()=>io,wAp:()=>ft,xp6:()=>Xd,z2F:()=>Du,z3N:()=>wo,zSh:()=>ac,zs3:()=>eo});var p=y(7579),D=y(727),X=y(8306),ne=y(6451),P=y(3099);
/**
     * @license Angular v14.0.5
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function G(e){for(let t in e)if(e[t]===G)return t;throw Error("Could not find renamed property on target object.")}function j(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function $(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map($).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function L(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const J=G({__forward_ref__:G});function Q(e){return e.__forward_ref__=Q,e.toString=function(){return $(this())},e}function q(e){return _e(e)?e():e}function _e(e){return"function"==typeof e&&e.hasOwnProperty(J)&&e.__forward_ref__===Q}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class le extends Error{constructor(t,n){super(function Se(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function pe(e){return"string"==typeof e?e:null==e?"":String(e)}function Ee(e,t){throw new le(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Mt(e,t){null==e&&function Be(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function bt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function on(e){return{providers:e.providers||[],imports:e.imports||[]}}function Ft(e){return pn(e,gn)||pn(e,Ln)}function pn(e,t){return e.hasOwnProperty(t)?e[t]:null}function zn(e){return e&&(e.hasOwnProperty(Pn)||e.hasOwnProperty($n))?e[Pn]:null}const gn=G({\u0275prov:G}),Pn=G({\u0275inj:G}),Ln=G({ngInjectableDef:G}),$n=G({ngInjectorDef:G});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var nt=(()=>((nt=nt||{})[nt.Default=0]="Default",nt[nt.Host=1]="Host",nt[nt.Self=2]="Self",nt[nt.SkipSelf=4]="SkipSelf",nt[nt.Optional=8]="Optional",nt))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Kn;function Wt(e){const t=Kn;return Kn=e,t}function On(e,t,n){const r=Ft(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&nt.Optional?null:void 0!==t?t:void Ee($(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function dn(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var ue=(()=>((ue=ue||{})[ue.OnPush=0]="OnPush",ue[ue.Default=1]="Default",ue))(),ve=(()=>{return(e=ve||(ve={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",ve;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const re=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),vt={},je=[],yt=G({\u0275cmp:G}),kt=G({\u0275dir:G}),tn=G({\u0275pipe:G}),pt=G({\u0275mod:G}),Ct=G({\u0275fac:G}),Qe=G({__NG_ELEMENT_ID__:G});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let fn=0;function In(e){return dn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===ue.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||je,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||ve.Emulated,id:"c"+fn++,styles:e.styles||je,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=xt(e.inputs,r),o.outputs=xt(e.outputs),s&&s.forEach(l=>l(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(Ie).filter(Ce):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(tt).filter(Ce):null,o})}function Ie(e){return dt(e)||St(e)}function Ce(e){return null!==e}const Ve={};function ct(e){return dn(()=>{const t={type:e.type,bootstrap:e.bootstrap||je,declarations:e.declarations||je,imports:e.imports||je,exports:e.exports||je,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(Ve[e.id]=e.type),t})}function xt(e,t){if(null==e)return vt;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const qt=In;function vn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function dt(e){return e[yt]||null}function St(e){return e[kt]||null}function tt(e){return e[tn]||null}function Ot(e,t){const n=e[pt]||null;if(!n&&!0===t)throw new Error(`Type ${$(e)} does not have '\u0275mod' property.`);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function nn(e){return Array.isArray(e)&&"object"==typeof e[1]}function x(e){return Array.isArray(e)&&!0===e[1]}function ge(e){return 0!=(8&e.flags)}function te(e){return 2==(2&e.flags)}function de(e){return 1==(1&e.flags)}function Fe(e){return null!==e.template}function $e(e){return 0!=(256&e[2])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function gr(e,t){return e.hasOwnProperty(Ct)?e[Ct]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class fo{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Mr(){return Fo}function Fo(e){return e.type.prototype.ngOnChanges&&(e.setInput=Qn),Sr}function Sr(){const e=jr(this),t=e?.current;if(t){const n=e.previous;if(n===vt)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Qn(e,t,n,r){const o=jr(e)||function xi(e,t){return e[Ir]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:vt,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],d=s[l];i[l]=new fo(d&&d.currentValue,t,s===vt),e[r]=t}Mr.ngInherit=!0;const Ir="__ngSimpleChanges__";function jr(e){return e[Ir]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function rn(e){for(;Array.isArray(e);)e=e[0];return e}function Dn(e,t){return rn(t[e])}function Un(e,t){return rn(t[e.index])}function ko(e,t){return e.data[t]}function Tn(e,t){const n=t[e];return nn(n)?n:n[0]}function h(e){return 4==(4&e[2])}function M(e){return 64==(64&e[2])}function w(e,t){return null==t?null:e[t]}function V(e){e[18]=0}function me(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const ce={lFrame:Ui(null),bindingsEnabled:!0};function mn(){return ce.bindingsEnabled}function Te(){return ce.lFrame.lView}function mt(){return ce.lFrame.tView}function Rr(e){return ce.lFrame.contextLView=e,e[8]}function tr(e){return ce.lFrame.contextLView=null,e}function Jt(){let e=$r();for(;null!==e&&64===e.type;)e=e.parent;return e}function $r(){return ce.lFrame.currentTNode}function lr(e,t){const n=ce.lFrame;n.currentTNode=e,n.isParent=t}function Ni(){return ce.lFrame.isParent}function Li(){ce.lFrame.isParent=!1}function go(){return ce.lFrame.bindingIndex++}function wa(e,t){const n=ce.lFrame;n.bindingIndex=n.bindingRootIndex=e,Gr(t)}function Gr(e){ce.lFrame.currentDirectiveIndex=e}function As(){return ce.lFrame.currentQueryIndex}function Bi(e){ce.lFrame.currentQueryIndex=e}function Ta(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function ii(e,t,n){if(n&nt.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&nt.Host||(o=Ta(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=ce.lFrame=jo();return r.currentTNode=t,r.lView=e,!0}function Uo(e){const t=jo(),n=e[1];ce.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function jo(){const e=ce.lFrame,t=null===e?null:e.child;return null===t?Ui(e):t}function Ui(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function si(){const e=ce.lFrame;return ce.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Ss=si;function Vo(){const e=si();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Vn(){return ce.lFrame.selectedIndex}function xr(e){ce.lFrame.selectedIndex=e}function en(){const e=ce.lFrame;return ko(e.tView,e.selectedIndex)}function zr(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:d,ngAfterViewChecked:v,ngOnDestroy:C}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),v&&((e.viewHooks||(e.viewHooks=[])).push(n,v),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,v)),null!=C&&(e.destroyHooks||(e.destroyHooks=[])).push(n,C)}}function ui(e,t,n){ji(e,t,3,n)}function mo(e,t,n,r){(3&e[2])===n&&ji(e,t,n,r)}function ci(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function ji(e,t,n,r){const i=r??-1,s=t.length-1;let l=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(l=t[d],null!=r&&l>=r)break}else t[d]<0&&(e[18]+=65536),(l<i||-1==i)&&(Vi(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function Vi(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ho{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function $o(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],l=n[r++];e.setAttribute(t,s,l,i)}else{const i=o,s=n[++r];Wi(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Us(e){return 3===e||4===e||6===e}function Wi(e){return 64===e.charCodeAt(0)}function li(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||js(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function js(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vs(e){return-1!==e}function vo(e){return 32767&e}function yo(e,t){let n=function Rn(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let di=!0;function Do(e){const t=di;return di=e,t}let Hs=0;const dr={};function Wo(e,t){const n=Eo(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Go(r.data,e),Go(t,null),Go(r.blueprint,null));const o=Yr(e,t),i=e.injectorIndex;if(Vs(o)){const s=vo(o),l=yo(o,t),d=l[1].data;for(let v=0;v<8;v++)t[i+v]=l[s+v]|d[s+v]}return t[i+8]=o,i}function Go(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Eo(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Yr(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Ks(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function hi(e,t,n){!function fi(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Qe)&&(r=n[Qe]),null==r&&(r=n[Qe]=Hs++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Oa(e,t,n){if(n&nt.Optional)return e;Ee()}function pi(e,t,n,r){if(n&nt.Optional&&void 0===r&&(r=null),0==(n&(nt.Self|nt.Host))){const o=e[9],i=Wt(void 0);try{return o?o.get(t,r,n&nt.Optional):On(t,r,n&nt.Optional)}finally{Wt(i)}}return Oa(r,0,n)}function Ki(e,t,n,r=nt.Default,o){if(null!==e){if(1024&t[2]){const s=function Pa(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const l=Yi(i,s,n,r|nt.Self,dr);if(l!==dr)return l;let d=i.parent;if(!d){const v=s[21];if(v){const C=v.get(n,dr,r);if(C!==dr)return C}d=Ks(s),s=s[15]}i=d}return o}(e,t,n,r,dr);if(s!==dr)return s}const i=Yi(e,t,n,r,dr);if(i!==dr)return i}return pi(t,n,r,o)}function Yi(e,t,n,r,o){const i=function xa(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Qe)?e[Qe]:void 0;return"number"==typeof t?t>=0?255&t:Gs:t}(n);if("function"==typeof i){if(!ii(t,e,r))return r&nt.Host?Oa(o,0,r):pi(t,n,r,o);try{const s=i(r);if(null!=s||r&nt.Optional)return s;Ee()}finally{Ss()}}else if("number"==typeof i){let s=null,l=Eo(e,t),d=-1,v=r&nt.Host?t[16][6]:null;for((-1===l||r&nt.SkipSelf)&&(d=-1===l?Yr(e,t):t[l+8],-1!==d&&Ws(r,!1)?(s=t[1],l=vo(d),t=yo(d,t)):l=-1);-1!==l;){const C=t[1];if($s(i,l,C.data)){const S=Ra(l,t,n,s,r,v);if(S!==dr)return S}d=t[l+8],-1!==d&&Ws(r,t[1].data[l+8]===v)&&$s(i,l,t)?(s=C,l=vo(d),t=yo(d,t)):l=-1}}return o}function Ra(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],C=gi(l,s,n,null==r?te(l)&&di:r!=s&&0!=(3&l.type),o&nt.Host&&i===l);return null!==C?zo(t,s,C,l):dr}function gi(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,d=e.directiveStart,C=i>>20,B=o?l+C:e.directiveEnd;for(let oe=r?l:l+C;oe<B;oe++){const be=s[oe];if(oe<d&&n===be||oe>=d&&be.type===n)return oe}if(o){const oe=s[d];if(oe&&Fe(oe)&&oe.type===n)return d}return null}function zo(e,t,n,r){let o=e[n];const i=t.data;if(function Ns(e){return e instanceof Ho}(o)){const s=o;s.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function We(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new le(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Oe(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():pe(e)}(i[n]));const l=Do(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?Wt(s.injectImpl):null;ii(e,r,nt.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Fs(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Fo(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&Wt(d),Do(l),s.resolving=!1,Ss()}}return o}function $s(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Ws(e,t){return!(e&nt.Self||e&nt.Host&&t)}class Co{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return Ki(this._tNode,this._lView,t,r,n)}}function Gs(){return new Co(Jt(),Te())}function zs(e){return dn(()=>{const t=e.prototype.constructor,n=t[Ct]||Zi(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[Ct]||Zi(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function Zi(e){return _e(e)?()=>{const t=Zi(q(e));return t&&t()}:gr(e)}function Ks(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function mi(e){return function vr(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Us(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Jt(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Zr="__parameters__";function Qr(e,t,n){return dn(()=>{const r=function Io(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(d,v,C){const S=d.hasOwnProperty(Zr)?d[Zr]:Object.defineProperty(d,Zr,{value:[]})[Zr];for(;S.length<=C;)S.push(null);return(S[C]=S[C]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Lt{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=bt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const c=new Lt("AnalyzeForEntryComponents");function Cn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Cn(r,t)):t!==e&&t.push(r)}return t}function An(e,t){e.forEach(n=>Array.isArray(n)?An(n,t):t(n))}function Jr(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function br(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Ko(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function rr(e,t,n){let r=Yo(e,t);return r>=0?e[1|r]=n:(r=~r,function Tu(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Ji(e,t){const n=Yo(e,t);if(n>=0)return e[1|n]}function Yo(e,t){return function ka(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,t,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const hn={},xn="__NG_DI_FLAG__",Zt="ngTempTokenPath",Zs=/\n/gm,Xi="__source";let yr;function vi(e){const t=yr;return yr=e,t}function Ua(e,t=nt.Default){if(void 0===yr)throw new le(-203,!1);return null===yr?On(e,void 0,t):yr.get(e,t&nt.Optional?null:void 0,t)}function _n(e,t=nt.Default){return(function Xt(){return Kn}()||Ua)(q(e),t)}function td(e,t=nt.Default){return _n(e,t)}function Su(e){const t=[];for(let n=0;n<e.length;n++){const r=q(e[n]);if(Array.isArray(r)){if(0===r.length)throw new le(900,!1);let o,i=nt.Default;for(let s=0;s<r.length;s++){const l=r[s],d=dm(l);"number"==typeof d?-1===d?o=l.token:i|=d:o=l}t.push(_n(o,i))}else t.push(_n(r))}return t}function Qs(e,t){return e[xn]=t,e.prototype[xn]=t,e}function dm(e){return e[xn]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ja=Qs(Qr("Inject",e=>({token:e})),-1),Js=Qs(Qr("Optional"),8),Ou=Qs(Qr("Self"),2),Xs=Qs(Qr("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ru,$a;function Mm(e){Ru=e}function es(e){return function xu(){if(void 0===$a&&($a=null,re.trustedTypes))try{$a=re.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return $a}()?.createHTML(e)||e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class yi{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class bm extends yi{getTypeName(){return"HTML"}}class Tm extends yi{getTypeName(){return"Style"}}class Am extends yi{getTypeName(){return"Script"}}class Sm extends yi{getTypeName(){return"URL"}}class Om extends yi{getTypeName(){return"ResourceURL"}}function wo(e){return e instanceof yi?e.changingThisBreaksApplicationSecurity:e}function ts(e,t){const n=function Rm(e){return e instanceof yi&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}function xm(e){return new bm(e)}function Pm(e){return new Tm(e)}function Fm(e){return new Am(e)}function Nm(e){return new Sm(e)}function Lm(e){return new Om(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class km{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const n=(new window.DOMParser).parseFromString(es(t),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(t):(n.removeChild(n.firstChild),n)}catch{return null}}}class Bm{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(t){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=es(t),n;const r=this.inertDocument.createElement("body");return r.innerHTML=es(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(t){const n=t.attributes;for(let o=n.length-1;0<o;o--){const s=n.item(o).name;("xmlns:ns1"===s||0===s.indexOf("ns1:"))&&t.removeAttribute(s)}let r=t.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const jm=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,Vm=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function ta(e){return(e=String(e)).match(jm)||e.match(Vm)?e:"unsafe:"+e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Xr(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function na(...e){const t={};for(const n of e)for(const r in n)n.hasOwnProperty(r)&&(t[r]=!0);return t}const pd=Xr("area,br,col,hr,img,wbr"),gd=Xr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),md=Xr("rp,rt"),Fu=na(pd,na(gd,Xr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),na(md,Xr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),na(md,gd)),Nu=Xr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Lu=Xr("srcset"),_d=na(Nu,Lu,Xr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Xr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),Hm=Xr("script,style,template");class $m{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(t){let n=t.firstChild,r=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let o=this.checkClobberedElement(n,n.nextSibling);if(o){n=o;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(t){const n=t.nodeName.toLowerCase();if(!Fu.hasOwnProperty(n))return this.sanitizedSomething=!0,!Hm.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const r=t.attributes;for(let o=0;o<r.length;o++){const i=r.item(o),s=i.name,l=s.toLowerCase();if(!_d.hasOwnProperty(l)){this.sanitizedSomething=!0;continue}let d=i.value;Nu[l]&&(d=ta(d)),Lu[l]&&(e=d,d=(e=String(e)).split(",").map(t=>ta(t.trim())).join(", ")),this.buf.push(" ",s,'="',vd(d),'"')}var e;return this.buf.push(">"),!0}endElement(t){const n=t.nodeName.toLowerCase();Fu.hasOwnProperty(n)&&!pd.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(vd(t))}checkClobberedElement(t,n){if(n&&(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);return n}}const Wm=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Gm=/([^\#-~ |!])/g;function vd(e){return e.replace(/&/g,"&amp;").replace(Wm,function(t){return"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";"}).replace(Gm,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Ga;function yd(e,t){let n=null;try{Ga=Ga||function fd(e){const t=new Bm(e);return function Um(){try{return!!(new window.DOMParser).parseFromString(es(""),"text/html")}catch{return!1}}()?new km(t):t}(e);let r=t?String(t):"";n=Ga.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=Ga.getInertBodyElement(r)}while(r!==i);return es((new $m).sanitizeChildren(ku(n)||n))}finally{if(n){const r=ku(n)||n;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function ku(e){return"content"in e&&function zm(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e)?e.content:null}var Sn=(()=>((Sn=Sn||{})[Sn.NONE=0]="NONE",Sn[Sn.HTML=1]="HTML",Sn[Sn.STYLE=2]="STYLE",Sn[Sn.SCRIPT=3]="SCRIPT",Sn[Sn.URL=4]="URL",Sn[Sn.RESOURCE_URL=5]="RESOURCE_URL",Sn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Bu(e){const t=function ra(){const e=Te();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return t?t.sanitize(Sn.URL,e)||"":ts(e,"URL")?wo(e):ta(pe(e))}function ju(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class oa{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&ju(t);for(;n&&ju(n);)n=ju(n);return n||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Vu=new Map;let u_=0;const $u="__ngContext__";function Xn(e,t){nn(t)?(e[$u]=t[20],function l_(e){Vu.set(e[20],e)}(t)):e[$u]=t}function ia(e){const t=e[$u];return"number"==typeof t?function Cd(e){return Vu.get(e)||null}(t):t||null}function Wu(e){const t=ia(e);return t?nn(t)?t:t.lView:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const y_=(()=>(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind(re))();function bo(e){return e instanceof Function?e():e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var qr=(()=>((qr=qr||{})[qr.Important=1]="Important",qr[qr.DashCase=2]="DashCase",qr))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function zu(e,t){return undefined(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function sa(e){const t=e[3];return x(t)?t[3]:t}function Ku(e){return Rd(e[13])}function Yu(e){return Rd(e[4])}function Rd(e){for(;null!==e&&!x(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function rs(e,t,n,r,o){if(null!=r){let i,s=!1;x(r)?i=r:nn(r)&&(s=!0,r=r[0]);const l=rn(r);0===e&&null!==n?null==o?kd(t,n,l):Di(t,n,l,o||null,!0):1===e&&null!==n?Di(t,n,l,o||null,!0):2===e?function Wd(e,t,n){const r=za(e,t);r&&function N_(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function B_(e,t,n,r,o){const i=n[7];i!==rn(n)&&rs(t,e,r,i,o);for(let l=10;l<n.length;l++){const d=n[l];aa(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function Qu(e,t,n){return e.createElement(t,n)}function Pd(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,me(o,-1)),n.splice(r,1)}function Ju(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Pd(o,r),t>0&&(e[n-1][4]=r[4]);const i=br(e,10+t);!function T_(e,t){aa(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Fd(e,t){if(!(128&t[2])){const n=t[11];n.destroyNode&&aa(e,t,n,3,null,null),function O_(e){let t=e[13];if(!t)return Xu(e[1],e);for(;t;){let n=null;if(nn(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)nn(t)&&Xu(t[1],t),t=t[3];null===t&&(t=e),nn(t)&&Xu(t[1],t),n=t&&t[4]}t=n}}(t)}}function Xu(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function F_(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Ho)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],d=i[s+1];try{d.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function P_(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):rn(t[s]),d=r[o=n[i+2]],v=n[i+3];"boolean"==typeof v?l.removeEventListener(n[i],d,v):v>=0?r[o=v]():r[o=-v].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&t[11].destroy();const n=t[17];if(null!==n&&x(t[3])){n!==t[3]&&Pd(n,t);const r=t[19];null!==r&&r.detachView(e)}!function d_(e){Vu.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function Nd(e,t,n){return function Ld(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===ve.None||o===ve.Emulated)return null}return Un(r,n)}(e,t.parent,n)}function Di(e,t,n,r,o){e.insertBefore(t,n,r,o)}function kd(e,t,n){e.appendChild(t,n)}function Bd(e,t,n,r,o){null!==r?Di(e,t,n,r,o):kd(e,t,n)}function za(e,t){return e.parentNode(t)}function Ud(e,t,n){return Vd(e,t,n)}let Vd=function jd(e,t,n){return 40&e.type?Un(e,n):null};function Ka(e,t,n,r){const o=Nd(e,r,t),i=t[11],l=Ud(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Bd(i,o,n[d],l,!1);else Bd(i,o,n,l,!1)}function Ya(e,t){if(null!==t){const n=t.type;if(3&n)return Un(t,e);if(4&n)return ec(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return Ya(e,r);{const o=e[t.index];return x(o)?ec(-1,o):rn(o)}}if(32&n)return zu(t,e)()||rn(e[t.index]);{const r=$d(e,t);return null!==r?Array.isArray(r)?r[0]:Ya(sa(e[16]),r):Ya(e,t.next)}}return null}function $d(e,t){return null!==t?e[16][6].projection[t.projection]:null}function ec(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return Ya(r,o)}return t[7]}function tc(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],d=n.type;if(s&&0===t&&(l&&Xn(rn(l),r),n.flags|=4),64!=(64&n.flags))if(8&d)tc(e,t,n.child,r,o,i,!1),rs(t,e,o,l,i);else if(32&d){const v=zu(n,r);let C;for(;C=v();)rs(t,e,o,C,i);rs(t,e,o,l,i)}else 16&d?Gd(e,t,r,n,o,i):rs(t,e,o,l,i);n=s?n.projectionNext:n.next}}function aa(e,t,n,r,o,i){tc(n,r,e.firstChild,t,o,i,!1)}function Gd(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let v=0;v<d.length;v++)rs(t,e,o,d[v],i);else tc(e,t,d,s[3],o,i,!0)}function zd(e,t,n){e.setAttribute(t,"style",n)}function nc(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Kd(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Yd="ng-template";function j_(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==Kd(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function Zd(e){return 4===e.type&&e.value!==Yd}function V_(e,t,n){return t===(4!==e.type||n?e.value:Yd)}function H_(e,t,n){let r=4;const o=e.attrs||[],i=function G_(e){for(let t=0;t<e.length;t++)if(Us(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const d=t[l];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!V_(e,d,n)||""===d&&1===t.length){if(Nr(r))return!1;s=!0}}else{const v=8&r?d:t[++l];if(8&r&&null!==e.attrs){if(!j_(e.attrs,v,n)){if(Nr(r))return!1;s=!0}continue}const S=$_(8&r?"class":d,o,Zd(e),n);if(-1===S){if(Nr(r))return!1;s=!0;continue}if(""!==v){let B;B=S>i?"":o[S+1].toLowerCase();const oe=8&r?B:null;if(oe&&-1!==Kd(oe,v,0)||2&r&&v!==B){if(Nr(r))return!1;s=!0}}}}else{if(!s&&!Nr(r)&&!Nr(d))return!1;if(s&&Nr(d))continue;s=!1,r=d|1&r}}return Nr(r)||s}function Nr(e){return 0==(1&e)}function $_(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function z_(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function Qd(e,t,n=!1){for(let r=0;r<t.length;r++)if(H_(e,t[r],n))return!0;return!1}function K_(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let o=0;o<e.length;o++)if(e[o]!==r[o])continue e;return!0}}return!1}function Jd(e,t){return e?":not("+t.trim()+")":t}function Y_(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Nr(s)&&(t+=Jd(i,o),o=""),r=s,i=i||!Nr(r);n++}return""!==o&&(t+=Jd(i,o)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Et={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xd(e){qd(mt(),Te(),Vn()+e,!1)}function qd(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&ui(t,i,n)}else{const i=e.preOrderHooks;null!==i&&mo(t,i,0,n)}xr(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const rc=new Lt("ENVIRONMENT_INITIALIZER"),rf=new Lt("INJECTOR_DEF_TYPES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function nv(...e){return{\u0275providers:sf(0,e)}}function sf(e,...t){const n=[],r=new Set;let o;return An(t,i=>{const s=i;oc(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&af(o,n),n}function af(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];An(o,i=>{t.push(i)})}}function oc(e,t,n,r){if(!(e=q(e)))return!1;let o=null,i=zn(e);const s=!i&&dt(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const d=e.ngModule;if(i=zn(d),!i)return!1;o=d}const l=r.has(o);if(s){if(l)return!1;if(r.add(o),s.dependencies){const d="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const v of d)oc(v,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!l){let v;r.add(o);try{An(i.imports,C=>{oc(C,t,n,r)&&(v||(v=[]),v.push(C))})}finally{}void 0!==v&&af(v,t)}if(!l){const v=gr(o)||(()=>new o);t.push({provide:o,useFactory:v,deps:je},{provide:rf,useValue:o,multi:!0},{provide:rc,useValue:()=>_n(o),multi:!0})}const d=i.providers;null==d||l||An(d,C=>{t.push(C)})}}return o!==e&&void 0!==e.providers}const rv=G({provide:String,useValue:G});function ic(e){return null!==e&&"object"==typeof e&&rv in e}function Ei(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const sc=new Lt("INJECTOR",-1);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class lf{get(t,n=hn){if(n===hn){const r=new Error(`NullInjectorError: No provider for ${$(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ac=new Lt("Set Injector scope."),Za={},iv={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let uc;function cc(){return void 0===uc&&(uc=new lf),uc}class os{}class df extends os{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,dc(t,s=>this.processProvider(s)),this.records.set(sc,is(void 0,this)),o.has("environment")&&this.records.set(os,is(void 0,this));const i=this.records.get(ac);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(rf.multi,je,nt.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}get(t,n=hn,r=nt.Default){this.assertNotDestroyed();const o=vi(this),i=Wt(void 0);try{if(!(r&nt.SkipSelf)){let l=this.records.get(t);if(void 0===l){const d=function lv(e){return"function"==typeof e||"object"==typeof e&&e instanceof Lt}(t)&&Ft(t);l=d&&this.injectableDefInScope(d)?is(lc(t),Za):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&nt.Self?cc():this.parent).get(t,n=r&nt.Optional&&n===hn?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[Zt]=s[Zt]||[]).unshift($(t)),o)throw s;return function fm(e,t,n,r){const o=e[Zt];throw t[Xi]&&o.unshift(t[Xi]),e.message=function hm(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=$(t);if(Array.isArray(t))o=t.map($).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):$(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Zs,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[Zt]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Wt(i),vi(o)}}resolveInjectorInitializers(){const t=vi(this),n=Wt(void 0);try{const r=this.get(rc.multi,je,nt.Self);for(const o of r)o()}finally{vi(t),Wt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push($(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new le(205,!1)}processProvider(t){let n=Ei(t=q(t))?t:q(t&&t.provide);const r=function av(e){return ic(e)?is(void 0,e.useValue):is(function ff(e,t,n){let r;if(Ei(e)){const o=q(e);return gr(o)||lc(o)}if(ic(e))r=()=>q(e.useValue);else if(function cf(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...Su(e.deps||[]));else if(function uf(e){return!(!e||!e.useExisting)}(e))r=()=>_n(q(e.useExisting));else{const o=q(e&&(e.useClass||e.provide));if(!function uv(e){return!!e.deps}(e))return gr(o)||lc(o);r=()=>new o(...Su(e.deps))}return r}(e),Za)}(t);if(Ei(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=is(void 0,Za,!0),o.factory=()=>Su(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===Za&&(n.value=iv,n.value=n.factory()),"object"==typeof n.value&&n.value&&function cv(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=q(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function lc(e){const t=Ft(e),n=null!==t?t.factory:gr(e);if(null!==n)return n;if(e instanceof Lt)throw new le(204,!1);if(e instanceof Function)return function sv(e){const t=e.length;if(t>0)throw Ko(t,"?"),new le(204,!1);const n=function Hn(e){const t=e&&(e[gn]||e[Ln]);if(t){const n=function sr(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new le(204,!1)}function is(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function dv(e){return!!e.\u0275providers}function dc(e,t){for(const n of e)Array.isArray(n)?dc(n,t):dv(n)?dc(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hf(e,t=null,n=null,r){const o=pf(e,t,n,r);return o.resolveInjectorInitializers(),o}function pf(e,t=null,n=null,r,o=new Set){const i=[n||je,nv(e)];return r=r||("object"==typeof e?void 0:$(e)),new df(i,t||cc(),r||null,o)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let eo=(()=>{class e{static create(n,r){if(Array.isArray(n))return hf({name:""},r,n,"");{const o=n.name??"";return hf({name:o},n.parent,n.providers,o)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=hn,e.NULL=new lf,e.\u0275prov=bt({token:e,providedIn:"any",factory:()=>_n(sc)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function as(e,t=nt.Default){const n=Te();return null===n?_n(e,t):Ki(Jt(),n,q(e),t)}function Ef(){throw new Error("invalid")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ja(e,t){return e<<17|t<<2}function Lr(e){return e>>17&32767}function yc(e){return 2|e}function To(e){return(131068&e)>>2}function Dc(e,t){return-131069&e|t<<2}function Ec(e){return 1|e}function Nf(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Bi(o),s.contentQueries(2,t[i],i)}}}function eu(e,t,n,r,o,i,s,l,d,v,C){const S=t.blueprint.slice();return S[0]=o,S[2]=76|r,(null!==C||e&&1024&e[2])&&(S[2]|=1024),V(S),S[3]=S[15]=e,S[8]=n,S[10]=s||e&&e[10],S[11]=l||e&&e[11],S[12]=d||e&&e[12]||null,S[9]=v||e&&e[9]||null,S[6]=i,S[20]=function c_(){return u_++}(),S[21]=C,S[16]=2==t.type?e[16]:S,S}function us(e,t,n,r,o){let i=e.data[t];if(null===i)i=function Oc(e,t,n,r,o){const i=$r(),s=Ni(),d=e.data[t]=function Wv(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),function oi(){return ce.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function nr(){const e=ce.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return lr(i,!0),i}function cs(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function tu(e,t,n){Uo(t);try{const r=e.viewQuery;null!==r&&jc(1,r,n);const o=e.template;null!==o&&Lf(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Nf(e,t),e.staticViewQueries&&jc(2,e.viewQuery,n);const i=e.components;null!==i&&function jv(e,t){for(let n=0;n<t.length;n++)uy(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Vo()}}function ua(e,t,n,r){const o=t[2];if(128!=(128&o)){Uo(t);try{V(t),function Bo(e){return ce.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&Lf(e,t,n,2,r);const s=3==(3&o);if(s){const v=e.preOrderCheckHooks;null!==v&&ui(t,v,null)}else{const v=e.preOrderHooks;null!==v&&mo(t,v,0,null),ci(t,0)}if(function sy(e){for(let t=Ku(e);null!==t;t=Yu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&me(i,1),o[2]|=512}}}(t),function iy(e){for(let t=Ku(e);null!==t;t=Yu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];M(r)&&ua(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Nf(e,t),s){const v=e.contentCheckHooks;null!==v&&ui(t,v)}else{const v=e.contentHooks;null!==v&&mo(t,v,1),ci(t,1)}!function Bv(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)xr(~o);else{const i=o,s=n[++r],l=n[++r];wa(s,i),l(2,t[i])}}}finally{xr(-1)}}(e,t);const l=e.components;null!==l&&function Uv(e,t){for(let n=0;n<t.length;n++)ay(e,t[n])}(t,l);const d=e.viewQuery;if(null!==d&&jc(2,d,r),s){const v=e.viewCheckHooks;null!==v&&ui(t,v)}else{const v=e.viewHooks;null!==v&&mo(t,v,2),ci(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,me(t[3],-1))}finally{Vo()}}}function Vv(e,t,n,r){const o=t[10],s=h(t);try{!s&&o.begin&&o.begin(),s&&tu(e,t,r),ua(e,t,n,r)}finally{!s&&o.end&&o.end()}}function Lf(e,t,n,r,o){const i=Vn(),s=2&r;try{xr(-1),s&&t.length>22&&qd(e,t,22,!1),n(r,o)}finally{xr(i)}}function Rc(e,t,n){!mn()||(function Jv(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Wo(n,t),Xn(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const d=e.data[l],v=Fe(d);v&&ny(t,n,d);const C=zo(t,e,l,n);Xn(C,t),null!==s&&ry(0,l-o,C,d,0,s),v&&(Tn(n.index,t)[8]=C)}}(e,t,n,Un(n,t)),128==(128&n.flags)&&function Xv(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function ba(){return ce.lFrame.currentDirectiveIndex}();try{xr(i);for(let l=r;l<o;l++){const d=e.data[l],v=t[l];Gr(l),(null!==d.hostBindings||0!==d.hostVars||null!==d.hostAttrs)&&Hf(d,v)}}finally{xr(-1),Gr(s)}}(e,t,n))}function xc(e,t,n=Un){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function Bf(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Pc(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Pc(e,t,n,r,o,i,s,l,d,v){const C=22+r,S=C+o,B=function Hv(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Et);return n}(C,S),oe="function"==typeof v?v():v;return B[1]={type:e,blueprint:B,template:n,queries:null,viewQuery:l,declTNode:t,data:B.slice().fill(null,C),bindingStartIndex:C,expandoStartIndex:S,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:oe,incompleteFirstPass:!1}}function Uf(e,t,n,r){const o=Yf(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&Zf(e).push(r,o.length-1))}function jf(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Dr(e,t,n,r,o,i,s,l){const d=Un(t,n);let C,v=t.inputs;!l&&null!=v&&(C=v[r])?(Xf(e,n,C,r,o),te(t)&&function Kv(e,t){const n=Tn(t,e);16&n[2]||(n[2]|=32)}(n,t.index)):3&t.type&&(r=function zv(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(d,r,o))}function Fc(e,t,n,r){let o=!1;if(mn()){const i=function qv(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Qd(n,s.selectors,!1)&&(o||(o=[]),hi(Wo(n,t),e,s.type),Fe(s)?($f(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Wf(n,e.data.length,i.length);for(let C=0;C<i.length;C++){const S=i[C];S.providersResolver&&S.providersResolver(S)}let l=!1,d=!1,v=cs(e,t,i.length,null);for(let C=0;C<i.length;C++){const S=i[C];n.mergedAttrs=li(n.mergedAttrs,S.hostAttrs),Gf(e,n,t,v,S),ty(v,S,s),null!==S.contentQueries&&(n.flags|=8),(null!==S.hostBindings||null!==S.hostAttrs||0!==S.hostVars)&&(n.flags|=128);const B=S.type.prototype;!l&&(B.ngOnChanges||B.ngOnInit||B.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!d&&(B.ngOnChanges||B.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),v++}!function Gv(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,d=null;for(let v=t.directiveStart;v<r;v++){const C=o[v],S=C.inputs,B=null===i||Zd(t)?null:oy(S,i);s.push(B),l=jf(S,v,l),d=jf(C.outputs,v,d)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=d}(e,n)}s&&function ey(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new le(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=li(n.mergedAttrs,n.attrs),o}function Vf(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const d=~t.index;(function Qv(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=d&&l.push(d),l.push(r,o,s)}}function Hf(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function $f(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function ty(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Fe(t)&&(n[""]=e)}}function Wf(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Gf(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=gr(o.type)),s=new Ho(i,Fe(o),as);e.blueprint[r]=s,n[r]=s,Vf(e,t,0,r,cs(e,n,o.hostVars,Et),o)}function ny(e,t,n){const r=Un(t,e),o=Bf(n),i=e[10],s=nu(e,eu(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function to(e,t,n,r,o,i){const s=Un(e,t);!function Nc(e,t,n,r,o,i,s){if(null==i)e.removeAttribute(t,o,n);else{const l=null==s?pe(i):s(i,r||"",o);e.setAttribute(t,o,l,n)}}(t[11],s,i,e.value,n,r,o)}function ry(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let d=0;d<s.length;){const v=s[d++],C=s[d++],S=s[d++];null!==l?r.setInput(n,S,v,C):n[C]=S}}}function oy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function zf(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function ay(e,t){const n=Tn(t,e);if(M(n)){const r=n[1];48&n[2]?ua(r,n,r.template,n[8]):n[5]>0&&Lc(n)}}function Lc(e){for(let r=Ku(e);null!==r;r=Yu(r))for(let o=10;o<r.length;o++){const i=r[o];if(512&i[2]){const s=i[1];ua(s,i,s.template,i[8])}else i[5]>0&&Lc(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Tn(n[r],e);M(o)&&o[5]>0&&Lc(o)}}function uy(e,t){const n=Tn(t,e),r=n[1];(function cy(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),tu(r,n,n[8])}function nu(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function kc(e){for(;e;){e[2]|=32;const t=sa(e);if($e(e)&&!t)return e;e=t}return null}function Kf(e){!function Bc(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=Wu(n);if(null!==r){const o=r[1];Vv(o,r,o.template,n)}}}(e[8])}function jc(e,t,n){Bi(0),t(e,n)}const dy=(()=>Promise.resolve(null))();function Yf(e){return e[7]||(e[7]=[])}function Zf(e){return e.cleanup||(e.cleanup=[])}function Jf(e,t){const n=e[9],r=n?n.get(oa,null):null;r&&r.handleError(t)}function Xf(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],d=t[s],v=e.data[s];null!==v.setInput?v.setInput(d,o,r,l):d[l]=o}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ru(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const l=t[s];"number"==typeof l?i=l:1==i?o=L(o,l):2==i&&(r=L(r,l+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function gy(){const e=Jt();zr(Te()[1],e)}function Vc(e){let t=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function qf(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Fe(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new le(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=Hc(e.inputs),s.declaredInputs=Hc(e.declaredInputs),s.outputs=Hc(e.outputs);const l=o.hostBindings;l&&yy(e,l);const d=o.viewQuery,v=o.contentQueries;if(d&&_y(e,d),v&&vy(e,v),j(e.inputs,o.inputs),j(e.declaredInputs,o.declaredInputs),j(e.outputs,o.outputs),Fe(o)&&o.data.animation){const C=e.data;C.animation=(C.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const l=i[s];l&&l.ngInherit&&l(e),l===Vc&&(n=!1)}}t=Object.getPrototypeOf(t)}!function my(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=li(o.hostAttrs,n=li(n,o.hostAttrs))}}(r)}function Hc(e){return e===vt?{}:e===je?[]:e}function _y(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function vy(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function yy(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ou=null;function Ci(){if(!ou){const e=re.Symbol;if(e&&e.iterator)ou=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(ou=r)}}}return ou}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ca(e){return!!$c(e)&&(Array.isArray(e)||!(e instanceof Map)&&Ci()in e)}function $c(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Wc(e,t,n,r){const o=Te();return qn(o,go(),t)&&(mt(),to(en(),o,e,t,n,r)),Wc}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ds(e,t,n,r){return qn(e,go(),n)?t+pe(n)+r:Et}function ch(e,t,n,r,o,i,s,l){const d=Te(),v=mt(),C=e+22,S=v.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ay(e,t,n,r,o,i,s,l,d){const v=t.consts,C=us(t,e,4,s||null,w(v,l));Fc(t,n,C,w(v,d)),zr(t,C);const S=C.tViews=Pc(2,C,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,v);return null!==t.queries&&(t.queries.template(t,C),S.queries=t.queries.embeddedTView(C)),C}(C,v,d,t,n,r,o,i,s):v.data[C];lr(S,!1);const B=d[11].createComment("");Ka(v,d,B,S),Xn(B,d),nu(d,d[C]=zf(B,d,B,S)),de(S)&&Rc(v,d,S),null!=s&&xc(d,S,l)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Gc(e,t,n){const r=Te();return qn(r,go(),t)&&Dr(mt(),en(),r,e,t,r[11],n,!1),Gc}function zc(e,t,n,r,o){const s=o?"class":"style";Xf(e,n,t.inputs[s],s,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function su(e,t,n,r){const o=Te(),i=mt(),s=22+e,l=o[11],d=o[s]=Qu(l,t,function Ps(){return ce.lFrame.currentNamespace}()),v=i.firstCreatePass?function Ry(e,t,n,r,o,i,s){const l=t.consts,v=us(t,e,2,o,w(l,i));return Fc(t,n,v,w(l,s)),null!==v.attrs&&ru(v,v.attrs,!1),null!==v.mergedAttrs&&ru(v,v.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,v),v}(s,i,o,0,t,n,r):i.data[s];lr(v,!0);const C=v.mergedAttrs;null!==C&&$o(l,d,C);const S=v.classes;null!==S&&nc(l,d,S);const B=v.styles;return null!==B&&zd(l,d,B),64!=(64&v.flags)&&Ka(i,o,d,v),0===function Bt(){return ce.lFrame.elementDepthCount}()&&Xn(d,o),function Ut(){ce.lFrame.elementDepthCount++}(),de(v)&&(Rc(i,o,v),function kf(e,t,n){if(ge(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,v,o)),null!==r&&xc(o,v),su}function au(){let e=Jt();Ni()?Li():(e=e.parent,lr(e,!1));const t=e;!function At(){ce.lFrame.elementDepthCount--}();const n=mt();return n.firstCreatePass&&(zr(n,e),ge(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function Sa(e){return 0!=(16&e.flags)}(t)&&zc(n,t,Te(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function Ls(e){return 0!=(32&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&zc(n,t,Te(),t.stylesWithoutHost,!1),au}function Kc(e,t,n,r){return su(e,t,n,r),au(),Kc
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}function dh(){return Te()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Qc(e){return!!e&&"function"==typeof e.then}function fh(e){return!!e&&"function"==typeof e.subscribe}const hh=fh;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Jc(e,t,n,r){const o=Te(),i=mt(),s=Jt();return function gh(e,t,n,r,o,i,s,l){const d=de(r),C=e.firstCreatePass&&Zf(e),S=t[8],B=Yf(t);let oe=!0;if(3&r.type||l){const Ze=Un(r,t),et=l?l(Ze):Ze,ht=B.length,Pe=l?Rt=>l(rn(Rt[r.index])):r.index;let ut=null;if(!l&&d&&(ut=function Py(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],d=o[i+2];return l.length>d?l[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==ut)(ut.__ngLastListenerFn__||ut).__ngNextListenerFn__=i,ut.__ngLastListenerFn__=i,oe=!1;else{i=_h(r,t,S,i,!1);const Rt=n.listen(et,o,i);B.push(i,Rt),C&&C.push(o,Pe,ht,ht+1)}}else i=_h(r,t,S,i,!1);const be=r.outputs;let Le;if(oe&&null!==be&&(Le=be[o])){const Ze=Le.length;if(Ze)for(let et=0;et<Ze;et+=2){const cn=t[Le[et]][Le[et+1]].subscribe(i),Ti=B.length;B.push(i,cn),C&&C.push(o,r.index,Ti,-(Ti+1))}}}(i,o,o[11],s,e,t,0,r),Jc}function mh(e,t,n,r){try{return!1!==n(r)}catch(o){return Jf(e,o),!1}}function _h(e,t,n,r,o){return function i(s){if(s===Function)return r;kc(2&e.flags?Tn(e.index,t):t);let d=mh(t,0,r,s),v=i.__ngNextListenerFn__;for(;v;)d=mh(t,0,v,s)&&d,v=v.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function vh(e=1){return function Os(e){return(ce.lFrame.contextLView=function Aa(e,t){for(;e>0;)t=t[15],e--;return t}(e,ce.lFrame.contextLView))[8]}(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Fy(e,t){let n=null;const r=function W_(e){const t=e.attrs;if(null!=t){const n=t.indexOf(5);if(0==(1&n))return t[n+1]}return null}(e);for(let o=0;o<t.length;o++){const i=t[o];if("*"!==i){if(null===r?Qd(e,i,!0):K_(r,i))return o}else n=o}return n}function yh(e){const t=Te()[16][6];if(!t.projection){const r=t.projection=Ko(e?e.length:1,null),o=r.slice();let i=t.child;for(;null!==i;){const s=e?Fy(i,e):0;null!==s&&(o[s]?o[s].projectionNext=i:r[s]=i,o[s]=i),i=i.next}}}function Dh(e,t=0,n){const r=Te(),o=mt(),i=us(o,22+e,16,null,n||null);null===i.projection&&(i.projection=t),Li(),64!=(64&i.flags)&&function k_(e,t,n){Gd(t[11],0,t,n,Nd(e,n,t),Ud(n.parent||t[6],n,t))}(o,r,i)}function Xc(e,t,n){return qc(e,"",t,"",n),Xc}function qc(e,t,n,r,o){const i=Te(),s=ds(i,t,n,r);return s!==Et&&Dr(mt(),en(),i,e,s,i[11],o,!1),qc}function Sh(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?Lr(i):To(i),d=!1;for(;0!==l&&(!1===d||s);){const C=e[l+1];ky(e[l],t)&&(d=!0,e[l+1]=r?Ec(C):yc(C)),l=r?Lr(C):To(C)}d&&(e[n+1]=r?yc(i):Ec(i))}function ky(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Yo(e,t)>=0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function el(e,t){return function kr(e,t,n,r){const o=Te(),i=mt(),s=function wr(e){const t=ce.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);i.firstUpdatePass&&function Bh(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Vn()],s=function kh(e,t){return t>=e.expandoStartIndex}(e,n);(function Hh(e,t){return 0!=(e.flags&(t?16:32))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */)(i,r)&&null===t&&!s&&(t=!1),t=function zy(e,t,n,r){const o=function ki(e){const t=ce.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=da(n=tl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=tl(o,e,t,n,r),null===i){let d=function Ky(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==To(r))return e[Lr(r)]}(e,t,r);void 0!==d&&Array.isArray(d)&&(d=tl(null,e,t,d[1],r),d=da(d,t.attrs,r),function Yy(e,t,n,r){e[Lr(n?t.classBindings:t.styleBindings)]=r}(e,t,r,d))}else i=function Zy(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=da(r,e[i].hostAttrs,n);return da(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function Ny(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=Lr(s),d=To(s);e[r]=n;let C,v=!1;if(Array.isArray(n)){const S=n;C=S[1],(null===C||Yo(S,C)>0)&&(v=!0)}else C=n;if(o)if(0!==d){const B=Lr(e[l+1]);e[r+1]=Ja(B,l),0!==B&&(e[B+1]=Dc(e[B+1],r)),e[l+1]=function Av(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=Ja(l,0),0!==l&&(e[l+1]=Dc(e[l+1],r)),l=r;else e[r+1]=Ja(d,0),0===l?l=r:e[d+1]=Dc(e[d+1],r),d=r;v&&(e[r+1]=yc(e[r+1])),Sh(e,C,r,!0),Sh(e,C,r,!1),function Ly(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Yo(i,t)>=0&&(n[r+1]=Ec(n[r+1]))}(t,C,e,r,i),s=Ja(l,d),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==Et&&qn(o,s,t)&&function jh(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const d=e.data,v=d[l+1];uu(function Tf(e){return 1==(1&e)}(v)?Vh(d,t,n,o,To(v),s):void 0)||(uu(i)||function bf(e){return 2==(2&e)}(v)&&(i=Vh(d,null,n,o,l,s)),function U_(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:qr.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=qr.Important),e.setStyle(n,r,o,i))}}(r,s,Dn(Vn(),n),o,i))}(i,i.data[Vn()],o,o[11],e,o[s+1]=function Xy(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=$(wo(e)))),e}(t,n),r,s)}(e,t,null,!0),el}function tl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=da(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function da(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),rr(e,s,!!n||t[++i]))}return void 0===e?null:e}function Vh(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const d=e[o],v=Array.isArray(d),C=v?d[1]:d,S=null===C;let B=n[o+1];B===Et&&(B=S?je:void 0);let oe=S?Ji(B,r):C===r?B:void 0;if(v&&!uu(oe)&&(oe=Ji(d,r)),uu(oe)&&(l=oe,s))return l;const be=e[o+1];o=s?Lr(be):To(be)}if(null!==t){let d=i?t.residualClasses:t.residualStyles;null!=d&&(l=Ji(d,r))}return l}function uu(e){return void 0!==e}function $h(e,t=""){const n=Te(),r=mt(),o=e+22,i=r.firstCreatePass?us(r,o,1,t,null):r.data[o],s=n[o]=function Zu(e,t){return e.createText(t)}(n[11],t);Ka(r,n,s,i),lr(i,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function nl(e){return rl("",e,""),nl}function rl(e,t,n){const r=Te(),o=ds(r,e,t,n);return o!==Et&&function Ao(e,t,n){const r=Dn(t,e);!function xd(e,t,n){e.setValue(t,n)}(e[11],r,n)}(r,Vn(),o),rl}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ii=void 0;var vD=["en",[["a","p"],["AM","PM"],Ii],[["AM","PM"],Ii,Ii],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ii,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ii,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Ii,"{1} 'at' {0}",Ii],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function _D(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ds={};function ol(e){const t=function yD(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=lp(t);if(n)return n;const r=t.split("-")[0];if(n=lp(r),n)return n;if("en"===r)return vD;throw new le(701,!1)}function cp(e){return ol(e)[ft.PluralCase]}function lp(e){return e in Ds||(Ds[e]=re.ng&&re.ng.common&&re.ng.common.locales&&re.ng.common.locales[e]),Ds[e]}var ft=(()=>((ft=ft||{})[ft.LocaleId=0]="LocaleId",ft[ft.DayPeriodsFormat=1]="DayPeriodsFormat",ft[ft.DayPeriodsStandalone=2]="DayPeriodsStandalone",ft[ft.DaysFormat=3]="DaysFormat",ft[ft.DaysStandalone=4]="DaysStandalone",ft[ft.MonthsFormat=5]="MonthsFormat",ft[ft.MonthsStandalone=6]="MonthsStandalone",ft[ft.Eras=7]="Eras",ft[ft.FirstDayOfWeek=8]="FirstDayOfWeek",ft[ft.WeekendRange=9]="WeekendRange",ft[ft.DateFormat=10]="DateFormat",ft[ft.TimeFormat=11]="TimeFormat",ft[ft.DateTimeFormat=12]="DateTimeFormat",ft[ft.NumberSymbols=13]="NumberSymbols",ft[ft.NumberFormats=14]="NumberFormats",ft[ft.CurrencyCode=15]="CurrencyCode",ft[ft.CurrencySymbol=16]="CurrencySymbol",ft[ft.CurrencyName=17]="CurrencyName",ft[ft.Currencies=18]="Currencies",ft[ft.Directionality=19]="Directionality",ft[ft.PluralCase=20]="PluralCase",ft[ft.ExtraData=21]="ExtraData",ft))();const Es="en-US";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let dp=Es;class yE{resolveComponentFactory(t){
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
throw function vE(e){const t=Error(`No component factory found for ${$(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let ma=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new yE,e})();class wi{}class Bp{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Up{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function EE(){return Ms(Jt(),Te())}function Ms(e,t){return new _a(Un(e,t))}let _a=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=EE,e})();function CE(e){return e instanceof _a?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class jp{}let ME=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function IE(){const e=Te(),n=Tn(Jt().index,e);return(nn(n)?n:e)[11]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),wE=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=bt({token:e,providedIn:"root",factory:()=>null}),e})();class Vp{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const bE=new Vp("14.0.5"),dl={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function hu(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(rn(i)),x(i))for(let l=10;l<i.length;l++){const d=i[l],v=d[1].firstChild;null!==v&&hu(d[1],d,v,r)}const s=n.type;if(8&s)hu(e,t,n.child,r);else if(32&s){const l=zu(n,t);let d;for(;d=l();)r.push(d)}else if(16&s){const l=$d(t,n);if(Array.isArray(l))r.push(...l);else{const d=sa(t[16]);hu(d[1],d,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class va{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return hu(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(x(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Ju(t,r),br(n,r))}this._attachedToViewContainer=!1}Fd(this._lView[1],this._lView)}onDestroy(t){Uf(this._lView[1],this._lView,null,t)}markForCheck(){kc(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){!function Uc(e,t,n){const r=t[10];r.begin&&r.begin();try{ua(e,t,e.template,n)}catch(o){throw Jf(t,o),o}finally{r.end&&r.end()}}(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new le(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function S_(e,t){aa(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new le(902,!1);this._appRef=t}}class TE extends va{constructor(t){super(t),this._view=t}detectChanges(){Kf(this._view)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class fl extends ma{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=dt(t);return new hl(n,this.ngModule)}}function Hp(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class SE{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,dl,r);return o!==dl||n===dl?o:this.parentInjector.get(t,n,r)}}class hl extends Up{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function Z_(e){return e.map(Y_).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Hp(this.componentDef.inputs)}get outputs(){return Hp(this.componentDef.outputs)}create(t,n,r,o){let i=(o=o||this.ngModule)instanceof os?o:o?.injector;i&&null!==this.componentDef.getStandaloneInjector&&(i=this.componentDef.getStandaloneInjector(i)||i);const s=i?new SE(t,i):t,l=s.get(jp,null);if(null===l)throw new le(407,!1);const d=s.get(wE,null),v=l.createRenderer(null,this.componentDef),C=this.componentDef.selectors[0][0]||"div",S=r?function $v(e,t,n){return e.selectRootElement(t,n===ve.ShadowDom)}(v,r,this.componentDef.encapsulation):Qu(l.createRenderer(null,this.componentDef),C,function AE(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(C)),B=this.componentDef.onPush?288:272,oe=function py(e,t){return{components:[],scheduler:e||y_,clean:dy,playerHandler:t||null,flags:0}}(),be=Pc(0,null,null,1,0,null,null,null,null,null),Le=eu(null,be,oe,B,null,null,l,v,d,s,null);let Ze,et;Uo(Le);try{const ht=function fy(e,t,n,r,o,i){const s=n[1];n[22]=e;const d=us(s,22,2,"#host",null),v=d.mergedAttrs=t.hostAttrs;null!==v&&(ru(d,v,!0),null!==e&&($o(o,e,v),null!==d.classes&&nc(o,e,d.classes),null!==d.styles&&zd(o,e,d.styles)));const C=r.createRenderer(e,t),S=eu(n,Bf(t),null,t.onPush?32:16,n[22],d,r,C,i||null,null,null);return s.firstCreatePass&&(hi(Wo(d,n),s,t.type),$f(s,d),Wf(d,n.length,1)),nu(n,S),n[22]=S}(S,this.componentDef,Le,l,v);if(S)if(r)$o(v,S,["ng-version",bE.full]);else{const{attrs:Pe,classes:ut}=function Q_(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Nr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);Pe&&$o(v,S,Pe),ut&&ut.length>0&&nc(v,S,ut.join(" "))}if(et=ko(be,22),void 0!==n){const Pe=et.projection=[];for(let ut=0;ut<this.ngContentSelectors.length;ut++){const Rt=n[ut];Pe.push(null!=Rt?Array.from(Rt):null)}}Ze=function hy(e,t,n,r,o){const i=n[1],s=function Zv(e,t,n){const r=Jt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Gf(e,r,t,cs(e,t,1,null),n));const o=zo(t,e,r.directiveStart,r);Xn(o,t);const i=Un(r,t);return i&&Xn(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,null!==o)for(const d of o)d(s,t);if(t.contentQueries){const d=Jt();t.contentQueries(1,s,d.directiveStart)}const l=Jt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(xr(l.index),Vf(n[1],l,0,l.directiveStart,l.directiveEnd,t),Hf(t,s)),s}(ht,this.componentDef,Le,oe,[gy]),tu(be,Le,null)}finally{Vo()}return new RE(this.componentType,Ze,Ms(et,Le),Le,et)}}class RE extends class DE{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new TE(o),this.componentType=t}get injector(){return new Co(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xE(e,t){return new $p(e,t??null)}class $p extends wi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new fl(this);const r=Ot(t);this._bootstrapComponents=bo(r.bootstrap),this._r3Injector=pf(t,n,[{provide:wi,useValue:this},{provide:ma,useValue:this.componentFactoryResolver}],$(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this.get(t)}get(t,n=eo.THROW_IF_NOT_FOUND,r=nt.Default){return t===eo||t===wi||t===sc?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class pl extends Bp{constructor(t){super(),this.moduleType=t}create(t){return new $p(this.moduleType,t)}}class PE extends wi{constructor(t,n,r){super(),this.componentFactoryResolver=new fl(this),this.instance=null;const o=new df([...t,{provide:wi,useValue:this},{provide:ma,useValue:this.componentFactoryResolver}],n||cc(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function gl(e,t=null,n=null){return new PE(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Qp(e,t,n,r,o,i){const s=t+n;return qn(e,s,o)?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function no(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function ya(e,t){const n=e[t];return n===Et?void 0:n}(e,s+1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function tg(e,t){const n=mt();let r;const o=e+22;n.firstCreatePass?(r=function eC(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=gr(r.type)),s=Wt(as);try{const l=Do(!1),d=i();return Do(l),function Sy(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,Te(),o,d),d}finally{Wt(s)}}function ng(e,t,n){const r=e+22,o=Te(),i=function Or(e,t){return e[t]}(o,r);return function Da(e,t){return e[1].data[t].pure}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(o,r)?Qp(o,function jn(){const e=ce.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),t,i.transform,n,i):i.transform(n)}function _l(e){return t=>{setTimeout(e,void 0,t)}}const io=class iC extends p.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){const d=t;o=d.next?.bind(d),i=d.error?.bind(d),s=d.complete?.bind(d)}this.__isAsync&&(i=_l(i),o&&(o=_l(o)),s&&(s=_l(s)));const l=super.subscribe({next:o,error:i,complete:s});return t instanceof D.w0&&t.add(l),l}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function sC(){return this._results[Ci()]()}class vl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Ci(),r=vl.prototype;r[n]||(r[n]=sC)}get changes(){return this._changes||(this._changes=new io)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=Cn(t);(this._changesDetected=!function Jn(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ea=(()=>{class e{}return e.__NG_ELEMENT_ID__=cC,e})();const aC=Ea,uC=class extends aC{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=eu(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),tu(r,o,t),new va(o)}};function cC(){return pu(Jt(),Te())}function pu(e,t){return 4&e.type?new uC(t,e,Ms(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let gu=(()=>{class e{}return e.__NG_ELEMENT_ID__=lC,e})();function lC(){return ig(Jt(),Te())}const dC=gu,rg=class extends dC{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Ms(this._hostTNode,this._hostLView)}get injector(){return new Co(this._hostTNode,this._hostLView)}get parentInjector(){const t=Yr(this._hostTNode,this._hostLView);if(Vs(t)){const n=yo(t,this._hostLView),r=vo(t);return new Co(n[1].data[r+8],n)}return new Co(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=og(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function Pt(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let l;if(s)l=n;else{const S=n||{};l=S.index,r=S.injector,o=S.projectableNodes,i=S.environmentInjector||S.ngModuleRef}const d=s?t:new hl(dt(t)),v=r||this.parentInjector;if(!i&&null==d.ngModule){const B=(s?v:this.parentInjector).get(os,null);B&&(i=B)}const C=d.create(v,o,void 0,i);return this.insert(C.hostView,l),C}insert(t,n){const r=t._lView,o=r[1];if(function g(e){return x(e[3])}(r)){const C=this.indexOf(t);if(-1!==C)this.detach(C);else{const S=r[3],B=new rg(S,S[6],S[3]);B.detach(B.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function R_(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Jr(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function x_(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=64}(o,r,s,i);const l=ec(i,s),d=r[11],v=za(d,s[7]);return null!==v&&function A_(e,t,n,r,o,i){r[0]=o,r[6]=t,aa(e,r,n,1,o,i)}(o,s[6],d,r,v,l),t.attachToViewContainerRef(),Jr(yl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=og(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Ju(this._lContainer,n);r&&(br(yl(this._lContainer),n),Fd(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Ju(this._lContainer,n);return r&&null!=br(yl(this._lContainer),n)?new va(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function og(e){return e[8]}function yl(e){return e[8]||(e[8]=[])}function ig(e,t){let n;const r=t[e.index];if(x(r))n=r;else{let o;if(8&e.type)o=rn(r);else{const i=t[11];o=i.createComment("");const s=Un(e,t);Di(i,za(i,s),o,function L_(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=zf(r,t,o,e),nu(t,n)}return new rg(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Dl{constructor(t){this.queryList=t,this.matches=null}clone(){return new Dl(this.queryList)}setDirty(){this.queryList.setDirty()}}class El{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new El(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==pg(t,n).matches&&this.queries[n].setDirty()}}class sg{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Cl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Cl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class Ml{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new Ml(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,pC(n,i)),this.matchTNodeWithReadOption(t,n,gi(n,t,i,!1,!1))}else r===Ea?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,gi(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===_a||o===gu||o===Ea&&4&n.type)this.addMatch(n.index,-2);else{const i=gi(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function pC(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function mC(e,t,n,r){return-1===n?function gC(e,t){return 11&e.type?Ms(e,t):4&e.type?pu(e,t):null}(t,e):-2===n?function _C(e,t,n){return n===_a?Ms(t,e):n===Ea?pu(t,e):n===gu?ig(t,e):void 0}(e,t,r):zo(e,e[1],n,t)}function ag(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let d=0;d<s.length;d+=2){const v=s[d];l.push(v<0?null:mC(t,i[v],s[d+1],n.metadata.read))}o.matches=l}return o.matches}function Il(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=ag(e,t,o,n);for(let l=0;l<i.length;l+=2){const d=i[l];if(d>0)r.push(s[l/2]);else{const v=i[l+1],C=t[-d];for(let S=10;S<C.length;S++){const B=C[S];B[17]===B[3]&&Il(B[1],B,v,r)}if(null!==C[9]){const S=C[9];for(let B=0;B<S.length;B++){const oe=S[B];Il(oe[1],oe,v,r)}}}}}return r}function ug(e){const t=Te(),n=mt(),r=As();Bi(r+1);const o=pg(n,r);if(e.dirty&&h(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Il(n,t,r,[]):ag(n,t,o,r);e.reset(i,CE),e.notifyOnChanges()}return!0}return!1}function cg(e,t,n){const r=mt();r.firstCreatePass&&(hg(r,new sg(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),fg(r,Te(),t)}function lg(e,t,n,r){const o=mt();if(o.firstCreatePass){const i=Jt();hg(o,new sg(t,n,r),i.index),function yC(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}fg(o,Te(),n)}function dg(){return function vC(e,t){return e[19].queries[t].queryList}(Te(),As())}function fg(e,t,n){const r=new vl(4==(4&n));Uf(e,t,r,r.destroy),null===t[19]&&(t[19]=new El),t[19].queries.push(new Dl(r))}function hg(e,t,n){null===e.queries&&(e.queries=new Cl),e.queries.track(new Ml(t,n))}function pg(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ws(e){const t=dt(e)||St(e)||tt(e);return null!==t&&t.standalone}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function _u(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Pg=new Lt("Application Initializer");let vu=(()=>{class e{constructor(n){this.appInits=n,this.resolve=_u,this.reject=_u,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(Qc(i))n.push(i);else if(hh(i)){const s=new Promise((l,d)=>{i.subscribe({complete:l,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(_n(Pg,8))},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Fg=new Lt("AppId",{providedIn:"root",factory:function Ng(){return`${Sl()}${Sl()}${Sl()}`}});function Sl(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Lg=new Lt("Platform Initializer"),jC=new Lt("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),kg=new Lt("appBootstrapListener");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let VC=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const yu=new Lt("LocaleId",{providedIn:"root",factory:()=>td(yu,nt.Optional|nt.SkipSelf)||function HC(){return typeof $localize<"u"&&$localize.locale||Es}()}),$C=new Lt("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class WC{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let GC=(()=>{class e{compileModuleSync(n){return new pl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=bo(Ot(n).declarations).reduce((s,l)=>{const d=dt(l);return d&&s.push(new hl(d)),s},[]);return new WC(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const YC=(()=>Promise.resolve(0))();function Ol(e){typeof Zone>"u"?YC.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Er{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new io(!1),this.onMicrotaskEmpty=new io(!1),this.onStable=new io(!1),this.onError=new io(!1),typeof Zone>"u")throw new le(908,!1);Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function ZC(){let e=re.requestAnimationFrame,t=re.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function XC(e){const t=()=>{!function JC(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(re,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,xl(e),e.isCheckStableRunning=!0,Rl(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),xl(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return jg(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),Vg(e)}},onInvoke:(n,r,o,i,s,l,d)=>{try{return jg(e),n.invoke(o,i,s,l,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),Vg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,xl(e),Rl(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Er.isInAngularZone())throw new le(909,!1)}static assertNotInAngularZone(){if(Er.isInAngularZone())throw new le(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,QC,_u,_u);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const QC={};function Rl(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function xl(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function jg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Vg(e){e._nesting--,Rl(e)}class qC{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new io,this.onMicrotaskEmpty=new io,this.onStable=new io,this.onError=new io}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Hg=new Lt(""),$g=new Lt("");let Pl,e0=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Pl||(function t0(e){Pl=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Er.assertNotInAngularZone(),Ol(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Ol(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(_n(Er),_n(Wg),_n($g))},e.\u0275prov=bt({token:e,factory:e.\u0275fac}),e})(),Wg=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return Pl?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Xo=null;const Gg=new Lt("AllowMultipleToken"),Fl=new Lt("PlatformDestroyListeners");class o0{constructor(t,n){this.name=t,this.token=n}}function Kg(e,t,n=[]){const r=`Platform: ${t}`,o=new Lt(r);return(i=[])=>{let s=Nl();if(!s||s.injector.get(Gg,!1)){const l=[...n,...i,{provide:o,useValue:!0}];e?e(l):function s0(e){if(Xo&&!Xo.get(Gg,!1))throw new le(400,!1);Xo=e;const t=e.get(Zg);(function zg(e){const t=e.get(Lg,null);t&&t.forEach(n=>n())})(e)}(function Yg(e=[],t){return eo.create({name:t,providers:[{provide:ac,useValue:"platform"},{provide:Fl,useValue:new Set([()=>Xo=null])},...e]})}(l,r))}return function u0(e){const t=Nl();if(!t)throw new le(401,!1);return t}()}}function Nl(){return Xo?.get(Zg)??null}let Zg=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function c0(e,t){let n;return n="noop"===e?new qC:("zone.js"===e?void 0:e)||new Er(t),n}(r?.ngZone,function Qg(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Er,useValue:o}];return o.run(()=>{const s=eo.create({providers:i,parent:this.injector,name:n.moduleType.name}),l=n.create(s),d=l.injector.get(oa,null);if(!d)throw new le(402,!1);return o.runOutsideAngular(()=>{const v=o.onError.subscribe({next:C=>{d.handleError(C)}});l.onDestroy(()=>{Eu(this._modules,l),v.unsubscribe()})}),function Jg(e,t,n){try{const r=n();return Qc(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(d,o,()=>{const v=l.injector.get(vu);return v.runInitializers(),v.donePromise.then(()=>(function fp(e){Mt(e,"Expected localeId to be defined"),"string"==typeof e&&(dp=e.toLowerCase().replace(/_/g,"-"))}(l.injector.get(yu,Es)||Es),this._moduleDoBootstrap(l),l))})})}bootstrapModule(n,r=[]){const o=Xg({},r);return function n0(e,t,n){const r=new pl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Du);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new le(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new le(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(Fl,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(_n(eo))},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Xg(e,t){return Array.isArray(t)?t.reduce(Xg,e):{...e,...t}}let Du=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new X.y(l=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{l.next(this._stable),l.complete()})}),s=new X.y(l=>{let d;this._zone.runOutsideAngular(()=>{d=this._zone.onStable.subscribe(()=>{Er.assertNotInAngularZone(),Ol(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,l.next(!0))})})});const v=this._zone.onUnstable.subscribe(()=>{Er.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{l.next(!1)}))});return()=>{d.unsubscribe(),v.unsubscribe()}});this.isStable=(0,ne.T)(i,s.pipe((0,P.B)()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Up;if(!this._injector.get(vu).done)throw!o&&ws(n),new le(405,false);let s;s=o?n:this._injector.get(ma).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const l=function r0(e){return e.isBoundToModule}(s)?void 0:this._injector.get(wi),v=s.create(eo.NULL,[],r||s.selector,l),C=v.location.nativeElement,S=v.injector.get(Hg,null);return S?.registerApplication(C),v.onDestroy(()=>{this.detachView(v.hostView),Eu(this.components,v),S?.unregisterApplication(C)}),this._loadComponent(v),v}tick(){if(this._runningTick)throw new le(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Eu(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(kg,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Eu(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new le(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(_n(Er),_n(eo),_n(oa))},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Eu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let em=!0,tm=!1;function d0(){return tm=!0,em}function f0(){if(tm)throw new Error("Cannot enable prod mode after platform setup.");em=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let h0=(()=>{class e{}return e.__NG_ELEMENT_ID__=p0,e})();function p0(e){return function g0(e,t,n){if(te(e)&&!n){const r=Tn(e.index,t);return new va(r,r)}return 47&e.type?new va(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(Jt(),Te(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class im{constructor(){}supports(t){return ca(t)}create(t){return new E0(t)}}const D0=(e,t)=>t;class E0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||D0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<am(r,o,i)?n:r,l=am(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const v=l-o,C=d-o;if(v!=C){for(let B=0;B<v;B++){const oe=B<i.length?i[B]:i[B]=0,be=oe+B;C<=be&&be<v&&(i[B]=oe+1)}i[s.previousIndex]=C-v}}l!==d&&t(s,l,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!ca(t))throw new le(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function Iy(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Ci()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new C0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new sm),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new sm),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class C0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class M0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class sm{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new M0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function am(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class um{constructor(){}supports(t){return t instanceof Map||$c(t)}create(){return new I0}}class I0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||$c(t)))throw new le(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new w0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class w0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function cm(){return new jl([new im])}let jl=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||cm()),deps:[[e,new Xs,new Js]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new le(901,!1)}}return e.\u0275prov=bt({token:e,providedIn:"root",factory:cm}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function lm(){return new Vl([new um])}let Vl=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||lm()),deps:[[e,new Xs,new Js]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new le(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=bt({token:e,providedIn:"root",factory:lm}),e})();const A0=Kg(null,"core",[]);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let S0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(_n(Du))},e.\u0275mod=ct({type:e}),e.\u0275inj=on({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function O0(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,3865:(Y,F,y)=>{y.d(F,{Hw:()=>ka,Ps:()=>Au});var p=y(4650),D=y(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let X;try{X=typeof Intl<"u"&&Intl.v8BreakIterator}catch{X=!1}let ne=(()=>{class b{constructor(m){this._platformId=m,this.isBrowser=this._platformId?(0,D.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!X)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return b.\u0275fac=function(m){return new(m||b)(p.LFG(p.Lbi))},b.\u0275prov=p.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ni(b){return Array.isArray(b)?b:[b]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Ri=y(7579),Po=y(9841),gr=y(7272),fo=y(8306),Mr=y(5698),Fo=y(5684),Sr=y(8372),Qn=y(4004),Ir=y(8675),jr=y(2722);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Vr=new Set;let mr,Bn=(()=>{class b{constructor(m){this._platform=m,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Pi}matchMedia(m){return(this._platform.WEBKIT||this._platform.BLINK)&&function No(b){if(!Vr.has(b))try{mr||(mr=document.createElement("style"),mr.setAttribute("type","text/css"),document.head.appendChild(mr)),mr.sheet&&(mr.sheet.insertRule(`@media ${b} {body{ }}`,0),Vr.add(b))}catch(E){console.error(E)}}(m),this._matchMedia(m)}}return b.\u0275fac=function(m){return new(m||b)(p.LFG(ne))},b.\u0275prov=p.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})();function Pi(b){return{matches:"all"===b||""===b,media:b,addListener:()=>{},removeListener:()=>{}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Lo=(()=>{class b{constructor(m,T){this._mediaMatcher=m,this._zone=T,this._queries=new Map,this._destroySubject=new Ri.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(m){return Hr(ni(m)).some(z=>this._registerQuery(z).mql.matches)}observe(m){const z=Hr(ni(m)).map(He=>this._registerQuery(He).observable);let ye=(0,Po.a)(z);return ye=(0,gr.z)(ye.pipe((0,Mr.q)(1)),ye.pipe((0,Fo.T)(1),(0,Sr.b)(0))),ye.pipe((0,Qn.U)(He=>{const _t={matches:!1,breakpoints:{}};return He.forEach(({matches:hn,query:xn})=>{_t.matches=_t.matches||hn,_t.breakpoints[xn]=hn}),_t}))}_registerQuery(m){if(this._queries.has(m))return this._queries.get(m);const T=this._mediaMatcher.matchMedia(m),ye={observable:new fo.y(He=>{const _t=hn=>this._zone.run(()=>He.next(hn));return T.addListener(_t),()=>{T.removeListener(_t)}}).pipe((0,Ir.O)(T),(0,Qn.U)(({matches:He})=>({query:m,matches:He})),(0,jr.R)(this._destroySubject)),mql:T};return this._queries.set(m,ye),ye}}return b.\u0275fac=function(m){return new(m||b)(p.LFG(Bn),p.LFG(p.R0b))},b.\u0275prov=p.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})();function Hr(b){return b.map(E=>E.split(",")).reduce((E,m)=>E.concat(m)).map(E=>E.trim())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ii="cdk-high-contrast-black-on-white",Uo="cdk-high-contrast-white-on-black",jo="cdk-high-contrast-active";let Ui=(()=>{class b{constructor(m,T){this._platform=m,this._document=T,this._breakpointSubscription=(0,p.f3M)(Lo).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const m=this._document.createElement("div");m.style.backgroundColor="rgb(1,2,3)",m.style.position="absolute",this._document.body.appendChild(m);const T=this._document.defaultView||window,z=T&&T.getComputedStyle?T.getComputedStyle(m):null,ye=(z&&z.backgroundColor||"").replace(/ /g,"");switch(m.remove(),ye){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const m=this._document.body.classList;m.remove(jo,ii,Uo),this._hasCheckedHighContrastMode=!0;const T=this.getHighContrastMode();1===T?m.add(jo,ii):2===T&&m.add(jo,Uo)}}}return b.\u0275fac=function(m){return new(m||b)(p.LFG(ne),p.LFG(D.K0))},b.\u0275prov=p.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})(),en=(()=>{class b{}return b.\u0275fac=function(m){return new(m||b)},b.\u0275mod=p.oAB({type:b}),b.\u0275inj=p.cJS({}),b})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ji=new p.OlP("mat-sanity-checks",{providedIn:"root",factory:function ci(){return!0}});let Vi=(()=>{class b{constructor(m,T,z){this._sanityChecks=T,this._document=z,this._hasDoneGlobalChecks=!1,m._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(m){return!
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ae(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[m])}}return b.\u0275fac=function(m){return new(m||b)(p.LFG(Ui),p.LFG(ji,8),p.LFG(D.K0))},b.\u0275mod=p.oAB({type:b}),b.\u0275inj=p.cJS({imports:[en,en]}),b})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function _o(b,E){return class extends b{constructor(...m){super(...m),this.defaultColor=E,this.color=E}get color(){return this._color}set color(m){const T=m||this.defaultColor;T!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),T&&this._elementRef.nativeElement.classList.add(`mat-${T}`),this._color=T)}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Zr=y(4742),Fr=y(8421),Qi=y(7669),Io=y(5403),Qr=y(3268),Fa=y(1810),Lt=y(9646),c=y(2843),u=y(727),a=y(8505),f=y(262),_=y(8746),I=y(3099),R=y(529),k=y(1481);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Me=["*"];let ze;function Je(b){return function st(){if(void 0===ze&&(ze=null,typeof window<"u")){const b=window;void 0!==b.trustedTypes&&(ze=b.trustedTypes.createPolicy("angular#components",{createHTML:E=>E}))}return ze}()?.createHTML(b)||b}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Pt(b){return Error(`Unable to find icon with the name "${b}"`)}function Jn(b){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${b}".`)}function Cn(b){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${b}".`)}class An{constructor(E,m,T){this.url=E,this.svgText=m,this.options=T}}let Jr=(()=>{class b{constructor(m,T,z,ye){this._httpClient=m,this._sanitizer=T,this._errorHandler=ye,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons"],this._document=z}addSvgIcon(m,T,z){return this.addSvgIconInNamespace("",m,T,z)}addSvgIconLiteral(m,T,z){return this.addSvgIconLiteralInNamespace("",m,T,z)}addSvgIconInNamespace(m,T,z,ye){return this._addSvgIconConfig(m,T,new An(z,null,ye))}addSvgIconResolver(m){return this._resolvers.push(m),this}addSvgIconLiteralInNamespace(m,T,z,ye){const He=this._sanitizer.sanitize(p.q3G.HTML,z);if(!He)throw Cn(z);const _t=Je(He);return this._addSvgIconConfig(m,T,new An("",_t,ye))}addSvgIconSet(m,T){return this.addSvgIconSetInNamespace("",m,T)}addSvgIconSetLiteral(m,T){return this.addSvgIconSetLiteralInNamespace("",m,T)}addSvgIconSetInNamespace(m,T,z){return this._addSvgIconSetConfig(m,new An(T,null,z))}addSvgIconSetLiteralInNamespace(m,T,z){const ye=this._sanitizer.sanitize(p.q3G.HTML,T);if(!ye)throw Cn(T);const He=Je(ye);return this._addSvgIconSetConfig(m,new An("",He,z))}registerFontClassAlias(m,T=m){return this._fontCssClassesByAlias.set(m,T),this}classNameForFontAlias(m){return this._fontCssClassesByAlias.get(m)||m}setDefaultFontSetClass(...m){return this._defaultFontSetClass=m,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(m){const T=this._sanitizer.sanitize(p.q3G.RESOURCE_URL,m);if(!T)throw Jn(m);const z=this._cachedIconsByUrl.get(T);return z?(0,Lt.of)(_i(z)):this._loadSvgIconFromConfig(new An(m,null)).pipe((0,a.b)(ye=>this._cachedIconsByUrl.set(T,ye)),(0,Qn.U)(ye=>_i(ye)))}getNamedSvgIcon(m,T=""){const z=Na(T,m);let ye=this._svgIconConfigs.get(z);if(ye)return this._getSvgFromConfig(ye);if(ye=this._getIconConfigFromResolvers(T,m),ye)return this._svgIconConfigs.set(z,ye),this._getSvgFromConfig(ye);const He=this._iconSetConfigs.get(T);return He?this._getSvgFromIconSetConfigs(m,He):(0,c._)(Pt(z))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(m){return m.svgText?(0,Lt.of)(_i(this._svgElementFromConfig(m))):this._loadSvgIconFromConfig(m).pipe((0,Qn.U)(T=>_i(T)))}_getSvgFromIconSetConfigs(m,T){const z=this._extractIconWithNameFromAnySet(m,T);return z?(0,Lt.of)(z):function Ys(...b){const E=(0,Qi.jO)(b),{args:m,keys:T}=(0,Zr.D)(b),z=new fo.y(ye=>{const{length:He}=m;if(!He)return void ye.complete();const _t=new Array(He);let hn=He,xn=He;for(let Zt=0;Zt<He;Zt++){let Zo=!1;(0,Fr.Xf)(m[Zt]).subscribe((0,Io.x)(ye,Zs=>{Zo||(Zo=!0,xn--),_t[Zt]=Zs},()=>hn--,void 0,()=>{(!hn||!Zo)&&(xn||ye.next(T?(0,Fa.n)(T,_t):_t),ye.complete())}))}});return E?z.pipe((0,Qr.Z)(E)):z}(T.filter(He=>!He.svgText).map(He=>this._loadSvgIconSetFromConfig(He).pipe((0,f.K)(_t=>{const xn=`Loading icon set URL: ${this._sanitizer.sanitize(p.q3G.RESOURCE_URL,He.url)} failed: ${_t.message}`;return this._errorHandler.handleError(new Error(xn)),(0,Lt.of)(null)})))).pipe((0,Qn.U)(()=>{const He=this._extractIconWithNameFromAnySet(m,T);if(!He)throw Pt(m);return He}))}_extractIconWithNameFromAnySet(m,T){for(let z=T.length-1;z>=0;z--){const ye=T[z];if(ye.svgText&&ye.svgText.toString().indexOf(m)>-1){const He=this._svgElementFromConfig(ye),_t=this._extractSvgIconFromSet(He,m,ye.options);if(_t)return _t}}return null}_loadSvgIconFromConfig(m){return this._fetchIcon(m).pipe((0,a.b)(T=>m.svgText=T),(0,Qn.U)(()=>this._svgElementFromConfig(m)))}_loadSvgIconSetFromConfig(m){return m.svgText?(0,Lt.of)(null):this._fetchIcon(m).pipe((0,a.b)(T=>m.svgText=T))}_extractSvgIconFromSet(m,T,z){const ye=m.querySelector(`[id="${T}"]`);if(!ye)return null;const He=ye.cloneNode(!0);if(He.removeAttribute("id"),"svg"===He.nodeName.toLowerCase())return this._setSvgAttributes(He,z);if("symbol"===He.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(He),z);const _t=this._svgElementFromString(Je("<svg></svg>"));return _t.appendChild(He),this._setSvgAttributes(_t,z)}_svgElementFromString(m){const T=this._document.createElement("DIV");T.innerHTML=m;const z=T.querySelector("svg");if(!z)throw Error("<svg> tag not found");return z}_toSvgElement(m){const T=this._svgElementFromString(Je("<svg></svg>")),z=m.attributes;for(let ye=0;ye<z.length;ye++){const{name:He,value:_t}=z[ye];"id"!==He&&T.setAttribute(He,_t)}for(let ye=0;ye<m.childNodes.length;ye++)m.childNodes[ye].nodeType===this._document.ELEMENT_NODE&&T.appendChild(m.childNodes[ye].cloneNode(!0));return T}_setSvgAttributes(m,T){return m.setAttribute("fit",""),m.setAttribute("height","100%"),m.setAttribute("width","100%"),m.setAttribute("preserveAspectRatio","xMidYMid meet"),m.setAttribute("focusable","false"),T&&T.viewBox&&m.setAttribute("viewBox",T.viewBox),m}_fetchIcon(m){const{url:T,options:z}=m,ye=z?.withCredentials??!1;if(!this._httpClient)throw function un(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==T)throw Error(`Cannot fetch icon from URL "${T}".`);const He=this._sanitizer.sanitize(p.q3G.RESOURCE_URL,T);if(!He)throw Jn(T);const _t=this._inProgressUrlFetches.get(He);if(_t)return _t;const hn=this._httpClient.get(He,{responseType:"text",withCredentials:ye}).pipe((0,Qn.U)(xn=>Je(xn)),(0,_.x)(()=>this._inProgressUrlFetches.delete(He)),(0,I.B)());return this._inProgressUrlFetches.set(He,hn),hn}_addSvgIconConfig(m,T,z){return this._svgIconConfigs.set(Na(m,T),z),this}_addSvgIconSetConfig(m,T){const z=this._iconSetConfigs.get(m);return z?z.push(T):this._iconSetConfigs.set(m,[T]),this}_svgElementFromConfig(m){if(!m.svgElement){const T=this._svgElementFromString(m.svgText);this._setSvgAttributes(T,m.options),m.svgElement=T}return m.svgElement}_getIconConfigFromResolvers(m,T){for(let z=0;z<this._resolvers.length;z++){const ye=this._resolvers[z](T,m);if(ye)return Tu(ye)?new An(ye.url,null,ye.options):new An(ye,null)}}}return b.\u0275fac=function(m){return new(m||b)(p.LFG(R.eN,8),p.LFG(k.H7),p.LFG(D.K0,8),p.LFG(p.qLn))},b.\u0275prov=p.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"}),b})();function _i(b){return b.cloneNode(!0)}function Na(b,E){return b+":"+E}function Tu(b){return!(!b.url||!b.options)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Jl=_o(class{constructor(b){this._elementRef=b}}),Xl=new p.OlP("MAT_ICON_DEFAULT_OPTIONS"),La=new p.OlP("mat-icon-location",{providedIn:"root",factory:function rr(){const b=(0,p.f3M)(D.K0),E=b?b.location:null;return{getPathname:()=>E?E.pathname+E.search:""}}}),Ji=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Yo=Ji.map(b=>`[${b}]`).join(", "),ql=/^url\(['"]?#(.*?)['"]?\)$/;let ka=(()=>{class b extends Jl{constructor(m,T,z,ye,He,_t){super(m),this._iconRegistry=T,this._location=ye,this._errorHandler=He,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=u.w0.EMPTY,_t&&(_t.color&&(this.color=this.defaultColor=_t.color),_t.fontSet&&(this.fontSet=_t.fontSet)),z||m.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(m){this._inline=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Si(b){return null!=b&&"false"!=`${b}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(m)}get svgIcon(){return this._svgIcon}set svgIcon(m){m!==this._svgIcon&&(m?this._updateSvgIcon(m):this._svgIcon&&this._clearSvgElement(),this._svgIcon=m)}get fontSet(){return this._fontSet}set fontSet(m){const T=this._cleanupFontValue(m);T!==this._fontSet&&(this._fontSet=T,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(m){const T=this._cleanupFontValue(m);T!==this._fontIcon&&(this._fontIcon=T,this._updateFontIconClasses())}_splitIconName(m){if(!m)return["",""];const T=m.split(":");switch(T.length){case 1:return["",T[0]];case 2:return T;default:throw Error(`Invalid icon name: "${m}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const m=this._elementsWithExternalReferences;if(m&&m.size){const T=this._location.getPathname();T!==this._previousPath&&(this._previousPath=T,this._prependPathToReferences(T))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(m){this._clearSvgElement();const T=this._location.getPathname();this._previousPath=T,this._cacheChildrenWithExternalReferences(m),this._prependPathToReferences(T),this._elementRef.nativeElement.appendChild(m)}_clearSvgElement(){const m=this._elementRef.nativeElement;let T=m.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();T--;){const z=m.childNodes[T];(1!==z.nodeType||"svg"===z.nodeName.toLowerCase())&&z.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const m=this._elementRef.nativeElement,T=(this.fontSet?[this._iconRegistry.classNameForFontAlias(this.fontSet)]:this._iconRegistry.getDefaultFontSetClass()).filter(z=>z.length>0);this._previousFontSetClass.forEach(z=>m.classList.remove(z)),T.forEach(z=>m.classList.add(z)),this._previousFontSetClass=T,this.fontIcon!==this._previousFontIconClass&&(this._previousFontIconClass&&m.classList.remove(this._previousFontIconClass),this.fontIcon&&m.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(m){return"string"==typeof m?m.trim().split(" ")[0]:m}_prependPathToReferences(m){const T=this._elementsWithExternalReferences;T&&T.forEach((z,ye)=>{z.forEach(He=>{ye.setAttribute(He.name,`url('${m}#${He.value}')`)})})}_cacheChildrenWithExternalReferences(m){const T=m.querySelectorAll(Yo),z=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let ye=0;ye<T.length;ye++)Ji.forEach(He=>{const _t=T[ye],hn=_t.getAttribute(He),xn=hn?hn.match(ql):null;if(xn){let Zt=z.get(_t);Zt||(Zt=[],z.set(_t,Zt)),Zt.push({name:He,value:xn[1]})}})}_updateSvgIcon(m){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),m){const[T,z]=this._splitIconName(m);T&&(this._svgNamespace=T),z&&(this._svgName=z),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(z,T).pipe((0,Mr.q)(1)).subscribe(ye=>this._setSvgElement(ye),ye=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${T}:${z}! ${ye.message}`))})}}}return b.\u0275fac=function(m){return new(m||b)(p.Y36(p.SBq),p.Y36(Jr),p.$8M("aria-hidden"),p.Y36(La),p.Y36(p.qLn),p.Y36(Xl,8))},b.\u0275cmp=p.Xpm({type:b,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(m,T){2&m&&(p.uIk("data-mat-icon-type",T._usingFontIcon()?"font":"svg")("data-mat-icon-name",T._svgName||T.fontIcon)("data-mat-icon-namespace",T._svgNamespace||T.fontSet),p.ekj("mat-icon-inline",T.inline)("mat-icon-no-color","primary"!==T.color&&"accent"!==T.color&&"warn"!==T.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[p.qOj],ngContentSelectors:Me,decls:1,vars:0,template:function(m,T){1&m&&(p.F$t(),p.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),b})(),Au=(()=>{class b{}return b.\u0275fac=function(m){return new(m||b)},b.\u0275mod=p.oAB({type:b}),b.\u0275inj=p.cJS({imports:[Vi,Vi]}),b})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,1481:(Y,F,y)=>{y.d(F,{Dx:()=>W,H7:()=>Ot,b2:()=>On,q6:()=>nt});var p=y(6895),D=y(4650);
/**
     * @license Angular v14.0.5
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class X extends p.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ne extends X{static makeCurrent(){(0,p.HT)(new ne)}onAndCancel(N,O,K){return N.addEventListener(O,K,!1),()=>{N.removeEventListener(O,K,!1)}}dispatchEvent(N,O){N.dispatchEvent(O)}remove(N){N.parentNode&&N.parentNode.removeChild(N)}createElement(N,O){return(O=O||this.getDefaultDocument()).createElement(N)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(N){return N.nodeType===Node.ELEMENT_NODE}isShadowRoot(N){return N instanceof DocumentFragment}getGlobalEventTarget(N,O){return"window"===O?window:"document"===O?N:"body"===O?N.body:null}getBaseHref(N){const O=function G(){return P=P||document.querySelector("base"),P?P.getAttribute("href"):null}();return null==O?null:function $(H){j=j||document.createElement("a"),j.setAttribute("href",H);const N=j.pathname;return"/"===N.charAt(0)?N:`/${N}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(O)}resetBaseElement(){P=null}getUserAgent(){return window.navigator.userAgent}getCookie(N){return(0,p.Mx)(document.cookie,N)}}let j,P=null;const L=new D.OlP("TRANSITION_ID"),Q=[{provide:D.ip1,useFactory:function J(H,N,O){return()=>{O.get(D.CZH).donePromise.then(()=>{const K=(0,p.q)(),we=N.querySelectorAll(`style[ng-transition="${H}"]`);for(let Ke=0;Ke<we.length;Ke++)K.remove(we[Ke])})}},deps:[L,p.K0,D.zs3],multi:!0}];let _e=(()=>{class H{build(){return new XMLHttpRequest}}return H.\u0275fac=function(O){return new(O||H)},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ee=new D.OlP("EventManagerPlugins");let le=(()=>{class H{constructor(O,K){this._zone=K,this._eventNameToPlugin=new Map,O.forEach(we=>we.manager=this),this._plugins=O.slice().reverse()}addEventListener(O,K,we){return this._findPluginFor(K).addEventListener(O,K,we)}addGlobalEventListener(O,K,we){return this._findPluginFor(K).addGlobalEventListener(O,K,we)}getZone(){return this._zone}_findPluginFor(O){const K=this._eventNameToPlugin.get(O);if(K)return K;const we=this._plugins;for(let Ke=0;Ke<we.length;Ke++){const gt=we[Ke];if(gt.supports(O))return this._eventNameToPlugin.set(O,gt),gt}throw new Error(`No event manager plugin found for event ${O}`)}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(ee),D.LFG(D.R0b))},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})();class Se{constructor(N){this._doc=N}addGlobalEventListener(N,O,K){const we=(0,p.q)().getGlobalEventTarget(this._doc,N);if(!we)throw new Error(`Unsupported event target ${we} for event ${O}`);return this.addEventListener(we,O,K)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let pe=(()=>{class H{constructor(){this._stylesSet=new Set}addStyles(O){const K=new Set;O.forEach(we=>{this._stylesSet.has(we)||(this._stylesSet.add(we),K.add(we))}),this.onStylesAdded(K)}onStylesAdded(O){}getAllStyles(){return Array.from(this._stylesSet)}}return H.\u0275fac=function(O){return new(O||H)},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})(),Oe=(()=>{class H extends pe{constructor(O){super(),this._doc=O,this._hostNodes=new Map,this._hostNodes.set(O.head,[])}_addStylesToHost(O,K,we){O.forEach(Ke=>{const gt=this._doc.createElement("style");gt.textContent=Ke,we.push(K.appendChild(gt))})}addHost(O){const K=[];this._addStylesToHost(this._stylesSet,O,K),this._hostNodes.set(O,K)}removeHost(O){const K=this._hostNodes.get(O);K&&K.forEach(We),this._hostNodes.delete(O)}onStylesAdded(O){this._hostNodes.forEach((K,we)=>{this._addStylesToHost(O,we,K)})}ngOnDestroy(){this._hostNodes.forEach(O=>O.forEach(We))}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(p.K0))},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})();function We(H){(0,p.q)().remove(H)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ge={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Ae=/%COMP%/g;function se(H,N,O){for(let K=0;K<N.length;K++){let we=N[K];Array.isArray(we)?se(H,we,O):(we=we.replace(Ae,H),O.push(we))}return O}function fe(H){return N=>{if("__ngUnwrap__"===N)return H;!1===H(N)&&(N.preventDefault(),N.returnValue=!1)}}let De=(()=>{class H{constructor(O,K,we){this.eventManager=O,this.sharedStylesHost=K,this.appId=we,this.rendererByCompId=new Map,this.defaultRenderer=new he(O)}createRenderer(O,K){if(!O||!K)return this.defaultRenderer;switch(K.encapsulation){case D.ifc.Emulated:{let we=this.rendererByCompId.get(K.id);return we||(we=new Mt(this.eventManager,this.sharedStylesHost,K,this.appId),this.rendererByCompId.set(K.id,we)),we.applyToHost(O),we}case 1:case D.ifc.ShadowDom:return new Be(this.eventManager,this.sharedStylesHost,O,K);default:if(!this.rendererByCompId.has(K.id)){const we=se(K.id,K.styles,[]);this.sharedStylesHost.addStyles(we),this.rendererByCompId.set(K.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(le),D.LFG(Oe),D.LFG(D.AFp))},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})();class he{constructor(N){this.eventManager=N,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(N,O){return O?document.createElementNS(Ge[O]||O,N):document.createElement(N)}createComment(N){return document.createComment(N)}createText(N){return document.createTextNode(N)}appendChild(N,O){(Dt(N)?N.content:N).appendChild(O)}insertBefore(N,O,K){N&&(Dt(N)?N.content:N).insertBefore(O,K)}removeChild(N,O){N&&N.removeChild(O)}selectRootElement(N,O){let K="string"==typeof N?document.querySelector(N):N;if(!K)throw new Error(`The selector "${N}" did not match any elements`);return O||(K.textContent=""),K}parentNode(N){return N.parentNode}nextSibling(N){return N.nextSibling}setAttribute(N,O,K,we){if(we){O=we+":"+O;const Ke=Ge[we];Ke?N.setAttributeNS(Ke,O,K):N.setAttribute(O,K)}else N.setAttribute(O,K)}removeAttribute(N,O,K){if(K){const we=Ge[K];we?N.removeAttributeNS(we,O):N.removeAttribute(`${K}:${O}`)}else N.removeAttribute(O)}addClass(N,O){N.classList.add(O)}removeClass(N,O){N.classList.remove(O)}setStyle(N,O,K,we){we&(D.JOm.DashCase|D.JOm.Important)?N.style.setProperty(O,K,we&D.JOm.Important?"important":""):N.style[O]=K}removeStyle(N,O,K){K&D.JOm.DashCase?N.style.removeProperty(O):N.style[O]=""}setProperty(N,O,K){N[O]=K}setValue(N,O){N.nodeValue=O}listen(N,O,K){return"string"==typeof N?this.eventManager.addGlobalEventListener(N,O,fe(K)):this.eventManager.addEventListener(N,O,fe(K))}}function Dt(H){return"TEMPLATE"===H.tagName&&void 0!==H.content}class Mt extends he{constructor(N,O,K,we){super(N),this.component=K;const Ke=se(we+"-"+K.id,K.styles,[]);O.addStyles(Ke),this.contentAttr=function Re(H){return"_ngcontent-%COMP%".replace(Ae,H)}(we+"-"+K.id),this.hostAttr=function it(H){return"_nghost-%COMP%".replace(Ae,H)}(we+"-"+K.id)}applyToHost(N){super.setAttribute(N,this.hostAttr,"")}createElement(N,O){const K=super.createElement(N,O);return super.setAttribute(K,this.contentAttr,""),K}}class Be extends he{constructor(N,O,K,we){super(N),this.sharedStylesHost=O,this.hostEl=K,this.shadowRoot=K.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Ke=se(we.id,we.styles,[]);for(let gt=0;gt<Ke.length;gt++){const Vt=document.createElement("style");Vt.textContent=Ke[gt],this.shadowRoot.appendChild(Vt)}}nodeOrShadowRoot(N){return N===this.hostEl?this.shadowRoot:N}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(N,O){return super.appendChild(this.nodeOrShadowRoot(N),O)}insertBefore(N,O,K){return super.insertBefore(this.nodeOrShadowRoot(N),O,K)}removeChild(N,O){return super.removeChild(this.nodeOrShadowRoot(N),O)}parentNode(N){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(N)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let It=(()=>{class H extends Se{constructor(O){super(O)}supports(O){return!0}addEventListener(O,K,we){return O.addEventListener(K,we,!1),()=>this.removeEventListener(O,K,we)}removeEventListener(O,K,we){return O.removeEventListener(K,we)}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(p.K0))},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ln=["alt","control","meta","shift"],bt={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},$t={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},on={alt:H=>H.altKey,control:H=>H.ctrlKey,meta:H=>H.metaKey,shift:H=>H.shiftKey};let Ft=(()=>{class H extends Se{constructor(O){super(O)}supports(O){return null!=H.parseEventName(O)}addEventListener(O,K,we){const Ke=H.parseEventName(K),gt=H.eventCallback(Ke.fullKey,we,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,p.q)().onAndCancel(O,Ke.domEventName,gt))}static parseEventName(O){const K=O.toLowerCase().split("."),we=K.shift();if(0===K.length||"keydown"!==we&&"keyup"!==we)return null;const Ke=H._normalizeKey(K.pop());let gt="";if(ln.forEach(ot=>{const Wn=K.indexOf(ot);Wn>-1&&(K.splice(Wn,1),gt+=ot+".")}),gt+=Ke,0!=K.length||0===Ke.length)return null;const Vt={};return Vt.domEventName=we,Vt.fullKey=gt,Vt}static getEventFullKey(O){let K="",we=function pn(H){let N=H.key;if(null==N){if(N=H.keyIdentifier,null==N)return"Unidentified";N.startsWith("U+")&&(N=String.fromCharCode(parseInt(N.substring(2),16)),3===H.location&&$t.hasOwnProperty(N)&&(N=$t[N]))}return bt[N]||N}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(O);return we=we.toLowerCase()," "===we?we="space":"."===we&&(we="dot"),ln.forEach(Ke=>{Ke!=we&&on[Ke](O)&&(K+=Ke+".")}),K+=we,K}static eventCallback(O,K,we){return Ke=>{H.getEventFullKey(Ke)===O&&we.runGuarded(()=>K(Ke))}}static _normalizeKey(O){return"esc"===O?"escape":O}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(p.K0))},H.\u0275prov=D.Yz7({token:H,factory:H.\u0275fac}),H})();const nt=(0,D.eFA)(D._c5,"browser",[{provide:D.Lbi,useValue:p.bD},{provide:D.g9A,useValue:function gn(){ne.makeCurrent()},multi:!0},{provide:p.K0,useFactory:function Ln(){return(0,D.RDi)(document),document},deps:[]}]),Kn=new D.OlP(""),Xt=[{provide:D.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class q{addToWindow(N){D.dqk.getAngularTestability=(K,we=!0)=>{const Ke=N.findTestabilityInTree(K,we);if(null==Ke)throw new Error("Could not find testability for element.");return Ke},D.dqk.getAllAngularTestabilities=()=>N.getAllTestabilities(),D.dqk.getAllAngularRootElements=()=>N.getAllRootElements(),D.dqk.frameworkStabilizers||(D.dqk.frameworkStabilizers=[]),D.dqk.frameworkStabilizers.push(K=>{const we=D.dqk.getAllAngularTestabilities();let Ke=we.length,gt=!1;const Vt=function(ot){gt=gt||ot,Ke--,0==Ke&&K(gt)};we.forEach(function(ot){ot.whenStable(Vt)})})}findTestabilityInTree(N,O,K){return null==O?null:N.getTestability(O)??(K?(0,p.q)().isShadowRoot(O)?this.findTestabilityInTree(N,O.host,!0):this.findTestabilityInTree(N,O.parentElement,!0):null)}},deps:[]},{provide:D.lri,useClass:D.dDg,deps:[D.R0b,D.eoX,D.rWj]},{provide:D.dDg,useClass:D.dDg,deps:[D.R0b,D.eoX,D.rWj]}],Wt=[{provide:D.zSh,useValue:"root"},{provide:D.qLn,useFactory:function Pn(){return new D.qLn},deps:[]},{provide:ee,useClass:It,multi:!0,deps:[p.K0,D.R0b,D.Lbi]},{provide:ee,useClass:Ft,multi:!0,deps:[p.K0]},{provide:De,useClass:De,deps:[le,Oe,D.AFp]},{provide:D.FYo,useExisting:De},{provide:pe,useExisting:Oe},{provide:Oe,useClass:Oe,deps:[p.K0]},{provide:le,useClass:le,deps:[ee,D.R0b]},{provide:p.JF,useClass:_e,deps:[]},[]];let On=(()=>{class H{constructor(O){}static withServerTransition(O){return{ngModule:H,providers:[{provide:D.AFp,useValue:O.appId},{provide:L,useExisting:D.AFp},Q]}}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(Kn,12))},H.\u0275mod=D.oAB({type:H}),H.\u0275inj=D.cJS({providers:[...Wt,...Xt],imports:[p.ez,D.hGG]}),H})(),W=(()=>{class H{constructor(O){this._doc=O}getTitle(){return this._doc.title}setTitle(O){this._doc.title=O||""}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(p.K0))},H.\u0275prov=D.Yz7({token:H,factory:function(O){let K=null;return K=O?new O:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function U(){return new W((0,D.LFG)(p.K0))}(),K},providedIn:"root"}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */typeof window<"u"&&window;let Ot=(()=>{class H{}return H.\u0275fac=function(O){return new(O||H)},H.\u0275prov=D.Yz7({token:H,factory:function(O){let K=null;return K=O?new(O||H):D.LFG(xe),K},providedIn:"root"}),H})(),xe=(()=>{class H extends Ot{constructor(O){super(),this._doc=O}sanitize(O,K){if(null==K)return null;switch(O){case D.q3G.NONE:return K;case D.q3G.HTML:return(0,D.qzn)(K,"HTML")?(0,D.z3N)(K):(0,D.EiD)(this._doc,String(K)).toString();case D.q3G.STYLE:return(0,D.qzn)(K,"Style")?(0,D.z3N)(K):K;case D.q3G.SCRIPT:if((0,D.qzn)(K,"Script"))return(0,D.z3N)(K);throw new Error("unsafe value used in a script context");case D.q3G.URL:return(0,D.qzn)(K,"URL")?(0,D.z3N)(K):(0,D.mCW)(String(K));case D.q3G.RESOURCE_URL:if((0,D.qzn)(K,"ResourceURL"))return(0,D.z3N)(K);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${O} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(O){return(0,D.JVY)(O)}bypassSecurityTrustStyle(O){return(0,D.L6k)(O)}bypassSecurityTrustScript(O){return(0,D.eBb)(O)}bypassSecurityTrustUrl(O){return(0,D.LAX)(O)}bypassSecurityTrustResourceUrl(O){return(0,D.pB0)(O)}}return H.\u0275fac=function(O){return new(O||H)(D.LFG(p.K0))},H.\u0275prov=D.Yz7({token:H,factory:function(O){let K=null;return K=O?new O:function Gt(H){return new xe(H.get(p.K0))}(D.LFG(D.zs3)),K},providedIn:"root"}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,8704:(Y,F,y)=>{y.d(F,{m2:()=>Ft,F0:()=>Rn,Od:()=>zi,yS:()=>Gi,Bz:()=>zo,lC:()=>Ir});var p=y(6895),D=y(4650);const ne=(0,y(3888).d)(c=>function(){c(this),this.name="EmptyError",this.message="no elements in sequence"});var P=y(8306),G=y(8421);function j(c){return new P.y(u=>{(0,G.Xf)(c()).subscribe(u)})}var $=y(727),L=y(4482),J=y(5403);function Q(){return(0,L.e)((c,u)=>{let a=null;c._refCount++;const f=(0,J.x)(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const _=c._connection,I=a;a=null,_&&(!I||_===I)&&_.unsubscribe(),u.unsubscribe()});c.subscribe(f),f.closed||(a=c.connect())})}class q extends P.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,L.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,u?.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new $.w0;const a=this.getSubject();u.add(this.source.subscribe((0,J.x)(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=$.w0.EMPTY)}return u}refCount(){return Q()(this)}}var _e=y(457),ee=y(9646),le=y(1135),Se=y(9841),pe=y(2843),Oe=y(7272),We=y(515),Ge=y(7579),Ae=y(9300);function Ee(c){return c<=0?()=>We.E:(0,L.e)((u,a)=>{let f=[];u.subscribe((0,J.x)(a,_=>{f.push(_),c<f.length&&f.shift()},()=>{for(const _ of f)a.next(_);a.complete()},void 0,()=>{f=null}))})}function ke(c=Ye){return(0,L.e)((u,a)=>{let f=!1;u.subscribe((0,J.x)(a,_=>{f=!0,a.next(_)},()=>f?a.complete():a.error(c())))})}function Ye(){return new ne}function Xe(c){return(0,L.e)((u,a)=>{let f=!1;u.subscribe((0,J.x)(a,_=>{f=!0,a.next(_)},()=>{f||a.next(c),a.complete()}))})}var Re=y(4671),se=y(5698);function fe(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Ae.h)((_,I)=>c(_,I,f)):Re.y,(0,se.q)(1),a?Xe(u):ke(()=>new ne))}var ie=y(4004),he=y(3900),Ue=y(8675),at=y(5026),Dt=y(262),Mt=y(4351),Be=y(5577),It=y(8505),ln=y(8746),jt=y(8189),bt=y(1481);
/**
     * @license Angular v14.0.5
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class $t{constructor(u,a){this.id=u,this.url=a}}class on extends $t{constructor(u,a,f="imperative",_=null){super(u,a),this.type=0,this.navigationTrigger=f,this.restoredState=_}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Ft extends $t{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class pn extends $t{constructor(u,a,f){super(u,a),this.reason=f,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Hn extends $t{constructor(u,a,f){super(u,a),this.error=f,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class sr extends $t{constructor(u,a,f,_){super(u,a),this.urlAfterRedirects=f,this.state=_,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class zn extends $t{constructor(u,a,f,_){super(u,a),this.urlAfterRedirects=f,this.state=_,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class gn extends $t{constructor(u,a,f,_,I){super(u,a),this.urlAfterRedirects=f,this.state=_,this.shouldActivate=I,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Pn extends $t{constructor(u,a,f,_){super(u,a),this.urlAfterRedirects=f,this.state=_,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ln extends $t{constructor(u,a,f,_){super(u,a),this.urlAfterRedirects=f,this.state=_,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class $n{constructor(u){this.route=u,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class nt{constructor(u){this.route=u,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Kn{constructor(u){this.snapshot=u,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Xt{constructor(u){this.snapshot=u,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Wt{constructor(u){this.snapshot=u,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class On{constructor(u){this.snapshot=u,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class er{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ue="primary";class U{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function W(c){return new U(c)}const ve="Redirecting to ",re="ngNavigationCancelingError";function Ne(c){const u=Error("NavigationCancelingError: "+(c||""));return u[re]=!0,u}function vt(c,u,a){const f=a.path.split("/");if(f.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<c.length))return null;const _={};for(let I=0;I<f.length;I++){const R=f[I],k=c[I];if(R.startsWith(":"))_[R.substring(1)]=k;else if(R!==k.path)return null}return{consumed:c.slice(0,f.length),posParams:_}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yt(c,u){const a=c?Object.keys(c):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let _;for(let I=0;I<a.length;I++)if(_=a[I],!kt(c[_],u[_]))return!1;return!0}function kt(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),f=[...u].sort();return a.every((_,I)=>f[I]===_)}return c===u}function tn(c){return Array.prototype.concat.apply([],c)}function pt(c){return c.length>0?c[c.length-1]:null}function Qe(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function fn(c){return(0,D.CqO)(c)?c:(0,D.QGY)(c)?(0,_e.D)(Promise.resolve(c)):(0,ee.of)(c)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ie={exact:function lt(c,u,a){if(!xe(c.segments,u.segments)||!dt(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!c.children[f]||!lt(c.children[f],u.children[f],a))return!1;return!0},subset:qt},Ce={exact:function ct(c,u){return yt(c,u)},subset:function xt(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>kt(c[a],u[a]))},ignored:()=>!0};function Ve(c,u,a){return Ie[a.paths](c.root,u.root,a.matrixParams)&&Ce[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function qt(c,u,a){return vn(c,u,u.segments,a)}function vn(c,u,a,f){if(c.segments.length>a.length){const _=c.segments.slice(0,a.length);return!(!xe(_,a)||u.hasChildren()||!dt(_,a,f))}if(c.segments.length===a.length){if(!xe(c.segments,a)||!dt(c.segments,a,f))return!1;for(const _ in u.children)if(!c.children[_]||!qt(c.children[_],u.children[_],f))return!1;return!0}{const _=a.slice(0,c.segments.length),I=a.slice(c.segments.length);return!!(xe(c.segments,_)&&dt(c.segments,_,f)&&c.children[ue])&&vn(c.children[ue],u,I,f)}}function dt(c,u,a){return u.every((f,_)=>Ce[a](c[_].parameters,f.parameters))}class St{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=W(this.queryParams)),this._queryParamMap}toString(){return O.serialize(this)}}class tt{constructor(u,a){this.segments=u,this.children=a,this.parent=null,Qe(a,(f,_)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return K(this)}}class Ot{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=W(this.parameters)),this._parameterMap}toString(){return fr(this)}}function xe(c,u){return c.length===u.length&&c.every((a,f)=>a.path===u[f].path)}class H{}class N{parse(u){const a=new ao(u);return new St(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${we(u.root,!0)}`,f=function sn(c){const u=Object.keys(c).map(a=>{const f=c[a];return Array.isArray(f)?f.map(_=>`${gt(a)}=${gt(_)}`).join("&"):`${gt(a)}=${gt(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);return`${a}${f}${"string"==typeof u.fragment?`#${function Vt(c){return encodeURI(c)}(u.fragment)}`:""}`}}const O=new N;function K(c){return c.segments.map(u=>fr(u)).join("/")}function we(c,u){if(!c.hasChildren())return K(c);if(u){const a=c.children[ue]?we(c.children[ue],!1):"",f=[];return Qe(c.children,(_,I)=>{I!==ue&&f.push(`${I}:${we(_,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function rt(c,u){let a=[];return Qe(c.children,(f,_)=>{_===ue&&(a=a.concat(u(f,_)))}),Qe(c.children,(f,_)=>{_!==ue&&(a=a.concat(u(f,_)))}),a}(c,(f,_)=>_===ue?[we(c.children[ue],!1)]:[`${_}:${we(f,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[ue]?`${K(c)}/${a[0]}`:`${K(c)}/(${a.join("//")})`}}function Ke(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function gt(c){return Ke(c).replace(/%3B/gi,";")}function ot(c){return Ke(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Wn(c){return decodeURIComponent(c)}function ar(c){return Wn(c.replace(/\+/g,"%20"))}function fr(c){return`${ot(c.path)}${function ur(c){return Object.keys(c).map(u=>`;${ot(u)}=${ot(c[u])}`).join("")}(c.parameters)}`}const Cr=/^[^\/()?;=#]+/;function kn(c){const u=c.match(Cr);return u?u[0]:""}const wn=/^[^=?&#]+/,so=/^[^&#]+/;class ao{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new tt([],{}):new tt([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[ue]=new tt(u,a)),f}parseSegment(){const u=kn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new D.vHH(4009,!1);return this.capture(u),new Ot(Wn(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=kn(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const _=kn(this.remaining);_&&(f=_,this.capture(f))}u[Wn(a)]=Wn(f)}parseQueryParam(u){const a=function cr(c){const u=c.match(wn);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const R=function Nt(c){const u=c.match(so);return u?u[0]:""}(this.remaining);R&&(f=R,this.capture(f))}const _=ar(a),I=ar(f);if(u.hasOwnProperty(_)){let R=u[_];Array.isArray(R)||(R=[R],u[_]=R),R.push(I)}else u[_]=I}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=kn(this.remaining),_=this.remaining[f.length];if("/"!==_&&")"!==_&&";"!==_)throw new D.vHH(4010,!1);let I;f.indexOf(":")>-1?(I=f.slice(0,f.indexOf(":")),this.capture(I),this.capture(":")):u&&(I=ue);const R=this.parseChildren();a[I]=1===Object.keys(R).length?R[ue]:new tt([],R),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new D.vHH(4011,!1)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class uo{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=hr(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=hr(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=pr(u,this._root);return a.length<2?[]:a[a.length-2].children.map(_=>_.value).filter(_=>_!==u)}pathFromRoot(u){return pr(u,this._root).map(a=>a.value)}}function hr(c,u){if(c===u.value)return u;for(const a of u.children){const f=hr(c,a);if(f)return f}return null}function pr(c,u){if(c===u.value)return[u];for(const a of u.children){const f=pr(c,a);if(f.length)return f.unshift(u),f}return[]}class bn{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function Gn(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Yn extends uo{constructor(u,a){super(u),this.snapshot=a,Fe(this,u)}toString(){return this.snapshot.toString()}}function an(c,u){const a=function qo(c,u){const R=new te([],{},{},"",{},ue,u,null,c.root,-1,{});return new de("",new bn(R,[]))}(c,u),f=new le.X([new Ot("",{})]),_=new le.X({}),I=new le.X({}),R=new le.X({}),k=new le.X(""),Me=new nn(f,_,R,k,I,ue,u,a.root);return Me.snapshot=a.root,new Yn(new bn(Me,[]),a)}class nn{constructor(u,a,f,_,I,R,k,Me){this.url=u,this.params=a,this.queryParams=f,this.fragment=_,this.data=I,this.outlet=R,this.component=k,this._futureSnapshot=Me}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,ie.U)(u=>W(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,ie.U)(u=>W(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function x(c,u="emptyOnly"){const a=c.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const _=a[f],I=a[f-1];if(_.routeConfig&&""===_.routeConfig.path)f--;else{if(I.component)break;f--}}return function ge(c){return c.reduce((u,a)=>({params:{...u.params,...a.params},data:{...u.data,...a.data},resolve:{...a.data,...u.resolve,...a.routeConfig?.data,...a._resolvedData}}),{params:{},data:{},resolve:{}})}(a.slice(f))}class te{constructor(u,a,f,_,I,R,k,Me,ze,st,Je,Pt){this.url=u,this.params=a,this.queryParams=f,this.fragment=_,this.data=I,this.outlet=R,this.component=k,this.routeConfig=Me,this._urlSegment=ze,this._lastPathIndex=st,this._correctedLastPathIndex=Pt??st,this._resolve=Je}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=W(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=W(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class de extends uo{constructor(u,a){super(a),this.url=u,Fe(this,a)}toString(){return $e(this._root)}}function Fe(c,u){u.value._routerState=c,u.children.forEach(a=>Fe(c,a))}function $e(c){const u=c.children.length>0?` { ${c.children.map($e).join(", ")} } `:"";return`${c.value}${u}`}function wt(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,yt(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),yt(u.params,a.params)||c.params.next(a.params),function je(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!yt(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),yt(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function zt(c,u){const a=yt(c.params,u.params)&&function Gt(c,u){return xe(c,u)&&c.every((a,f)=>yt(a.parameters,u[f].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||zt(c.parent,u.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yn(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const _=function Ht(c,u,a){return u.children.map(f=>{for(const _ of a.children)if(c.shouldReuseRoute(f.value,_.value.snapshot))return yn(c,f,_);return yn(c,f)})}(c,u,a);return new bn(f,_)}{if(c.shouldAttach(u.value)){const I=c.retrieve(u.value);if(null!==I){const R=I.route;return R.value._futureSnapshot=u.value,R.children=u.children.map(k=>yn(c,k)),R}}const f=function Zn(c){return new nn(new le.X(c.url),new le.X(c.params),new le.X(c.queryParams),new le.X(c.fragment),new le.X(c.data),c.outlet,c.component,c)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(u.value),_=u.children.map(I=>yn(c,I));return new bn(f,_)}}function Ar(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function co(c){return"object"==typeof c&&null!=c&&c.outlets}function ei(c,u,a,f,_){let I={};if(f&&Qe(f,(k,Me)=>{I[Me]=Array.isArray(k)?k.map(ze=>`${ze}`):`${k}`}),c===u)return new St(a,I,_);const R=Ro(c,u,a);return new St(R,I,_)}function Ro(c,u,a){const f={};return Qe(c.children,(_,I)=>{f[I]=_===u?a:Ro(_,u,a)}),new tt(c.segments,f)}class Ai{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&Ar(f[0]))throw new D.vHH(4003,false);const _=f.find(co);if(_&&_!==pt(f))throw new D.vHH(4004,false)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class ti{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function lo(c,u,a){if(c||(c=new tt([],{})),0===c.segments.length&&c.hasChildren())return xo(c,u,a);const f=function Ri(c,u,a){let f=0,_=u;const I={match:!1,pathIndex:0,commandIndex:0};for(;_<c.segments.length;){if(f>=a.length)return I;const R=c.segments[_],k=a[f];if(co(k))break;const Me=`${k}`,ze=f<a.length-1?a[f+1]:null;if(_>0&&void 0===Me)break;if(Me&&ze&&"object"==typeof ze&&void 0===ze.outlets){if(!Mr(Me,ze,R))return I;f+=2}else{if(!Mr(Me,{},R))return I;f++}_++}return{match:!0,pathIndex:_,commandIndex:f}}(c,u,a),_=a.slice(f.commandIndex);if(f.match&&f.pathIndex<c.segments.length){const I=new tt(c.segments.slice(0,f.pathIndex),{});return I.children[ue]=new tt(c.segments.slice(f.pathIndex),c.children),xo(I,0,_)}return f.match&&0===_.length?new tt(c.segments,{}):f.match&&!c.hasChildren()?Po(c,u,a):f.match?xo(c,0,_):Po(c,u,a)}function xo(c,u,a){if(0===a.length)return new tt(c.segments,{});{const f=function ri(c){return co(c[0])?c[0].outlets:{[ue]:c}}(a),_={};return Qe(f,(I,R)=>{"string"==typeof I&&(I=[I]),null!==I&&(_[R]=lo(c.children[R],u,I))}),Qe(c.children,(I,R)=>{void 0===f[R]&&(_[R]=I)}),new tt(c.segments,_)}}function Po(c,u,a){const f=c.segments.slice(0,u);let _=0;for(;_<a.length;){const I=a[_];if(co(I)){const Me=gr(I.outlets);return new tt(f,Me)}if(0===_&&Ar(a[0])){f.push(new Ot(c.segments[u].path,fo(a[0]))),_++;continue}const R=co(I)?I.outlets[ue]:`${I}`,k=_<a.length-1?a[_+1]:null;R&&k&&Ar(k)?(f.push(new Ot(R,fo(k))),_+=2):(f.push(new Ot(R,{})),_++)}return new tt(f,{})}function gr(c){const u={};return Qe(c,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=Po(new tt([],{}),0,a))}),u}function fo(c){const u={};return Qe(c,(a,f)=>u[f]=`${a}`),u}function Mr(c,u,a){return c==a.path&&yt(u,a.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Fo{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Sr,this.attachRef=null}}class Sr{constructor(){this.contexts=new Map}onChildOutletCreated(u,a){const f=this.getOrCreateContext(u);f.outlet=a,this.contexts.set(u,f)}onChildOutletDestroyed(u){const a=this.getContext(u);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let a=this.getContext(u);return a||(a=new Fo,this.contexts.set(u,a)),a}getContext(u){return this.contexts.get(u)||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Qn=!1;let Ir=(()=>{class c{constructor(a,f,_,I,R){this.parentContexts=a,this.location=f,this.changeDetector=I,this.environmentInjector=R,this.activated=null,this._activatedRoute=null,this.activateEvents=new D.vpe,this.deactivateEvents=new D.vpe,this.attachEvents=new D.vpe,this.detachEvents=new D.vpe,this.name=_||ue,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new D.vHH(4012,Qn);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new D.vHH(4012,Qn);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new D.vHH(4012,Qn);this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new D.vHH(4013,Qn);this._activatedRoute=a;const _=this.location,R=a._futureSnapshot.component,k=this.parentContexts.getOrCreateContext(this.name).children,Me=new jr(a,k,_.injector);if(f&&function xi(c){return!!c.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(f)){const ze=f.resolveComponentFactory(R);this.activated=_.createComponent(ze,_.length,Me)}else this.activated=_.createComponent(R,{index:_.length,injector:Me,environmentInjector:f??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(D.Y36(Sr),D.Y36(D.s_b),D.$8M("name"),D.Y36(D.sBO),D.Y36(D.lqb))},c.\u0275dir=D.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class jr{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===nn?this.route:u===Sr?this.childContexts:this.parent.get(u,a)}}let Vr=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=D.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&D._UZ(0,"router-outlet")},dependencies:[Ir],encapsulation:2}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function mr(c,u){return c.providers&&!c._injector&&(c._injector=(0,D.MMx)(c.providers,u,`Route: ${c.path}`)),c._injector??u}function Fi(c){const u=c.children&&c.children.map(Fi),a=u?{...c,children:u}:{...c};return!a.component&&!a.loadComponent&&(u||a.loadChildren)&&a.outlet&&a.outlet!==ue&&(a.component=Vr),a}function Dn(c){return c.outlet||ue}function Un(c,u){const a=c.filter(f=>Dn(f)===u);return a.push(...c.filter(f=>Dn(f)!==u)),a}function ho(c){if(!c)return null;if(c.routeConfig?._injector)return c.routeConfig._injector;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a?._loadedInjector)return a._loadedInjector;if(a?._injector)return a._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Or{constructor(u,a,f,_){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=_}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),wt(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const _=Gn(a);u.children.forEach(I=>{const R=I.value.outlet;this.deactivateRoutes(I,_[R],f),delete _[R]}),Qe(_,(I,R)=>{this.deactivateRouteAndItsChildren(I,f)})}deactivateRoutes(u,a,f){const _=u.value,I=a?a.value:null;if(_===I)if(_.component){const R=f.getContext(_.outlet);R&&this.deactivateChildRoutes(u,a,R.children)}else this.deactivateChildRoutes(u,a,f);else I&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),_=f&&u.value.component?f.children:a,I=Gn(u);for(const R of Object.keys(I))this.deactivateRouteAndItsChildren(I[R],_);if(f&&f.outlet){const R=f.outlet.detach(),k=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:R,route:u,contexts:k})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),_=f&&u.value.component?f.children:a,I=Gn(u);for(const R of Object.keys(I))this.deactivateRouteAndItsChildren(I[R],_);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const _=Gn(a);u.children.forEach(I=>{this.activateRoutes(I,_[I.value.outlet],f),this.forwardEvent(new On(I.value.snapshot))}),u.children.length&&this.forwardEvent(new Xt(u.value.snapshot))}activateRoutes(u,a,f){const _=u.value,I=a?a.value:null;if(wt(_),_===I)if(_.component){const R=f.getOrCreateContext(_.outlet);this.activateChildRoutes(u,a,R.children)}else this.activateChildRoutes(u,a,f);else if(_.component){const R=f.getOrCreateContext(_.outlet);if(this.routeReuseStrategy.shouldAttach(_.snapshot)){const k=this.routeReuseStrategy.retrieve(_.snapshot);this.routeReuseStrategy.store(_.snapshot,null),R.children.onOutletReAttached(k.contexts),R.attachRef=k.componentRef,R.route=k.route.value,R.outlet&&R.outlet.attach(k.componentRef,k.route.value),wt(k.route.value),this.activateChildRoutes(u,null,R.children)}else{const k=ho(_.snapshot),Me=k?.get(D._Vd)??null;R.attachRef=null,R.route=_,R.resolver=Me,R.injector=k,R.outlet&&R.outlet.activateWith(_,R.injector),this.activateChildRoutes(u,null,R.children)}}else this.activateChildRoutes(u,null,f)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Tn(c){return"function"==typeof c}function M(c){return c instanceof St}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ce=Symbol("INITIAL_VALUE");function qe(){return(0,he.w)(c=>(0,Se.a)(c.map(u=>u.pipe((0,se.q)(1),(0,Ue.O)(ce)))).pipe((0,at.R)((u,a)=>{let f=!1;return a.reduce((_,I,R)=>_!==ce?_:(I===ce&&(f=!0),f||!1!==I&&R!==a.length-1&&!M(I)?_:I),u)},ce),(0,Ae.h)(u=>u!==ce),(0,ie.U)(u=>M(u)?u:!0===u),(0,se.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Kt={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Bt(c,u,a){if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?{...Kt}:{matched:!0,consumedSegments:[],remainingSegments:a,parameters:{},positionalParamSegments:{}};const _=(u.matcher||vt)(a,c,u);if(!_)return{...Kt};const I={};Qe(_.posParams,(k,Me)=>{I[Me]=k.path});const R=_.consumed.length>0?{...I,..._.consumed[_.consumed.length-1].parameters}:I;return{matched:!0,consumedSegments:_.consumed,remainingSegments:a.slice(_.consumed.length),parameters:R,positionalParamSegments:_.posParams??{}}}function Ut(c,u,a,f,_="corrected"){if(a.length>0&&function Yt(c,u,a){return a.some(f=>Te(c,u,f)&&Dn(f)!==ue)}(c,a,f)){const R=new tt(u,function mn(c,u,a,f){const _={};_[ue]=f,f._sourceSegment=c,f._segmentIndexShift=u.length;for(const I of a)if(""===I.path&&Dn(I)!==ue){const R=new tt([],{});R._sourceSegment=c,R._segmentIndexShift=u.length,_[Dn(I)]=R}return _}(c,u,f,new tt(a,c.children)));return R._sourceSegment=c,R._segmentIndexShift=u.length,{segmentGroup:R,slicedSegments:[]}}if(0===a.length&&function En(c,u,a){return a.some(f=>Te(c,u,f))}(c,a,f)){const R=new tt(c.segments,function At(c,u,a,f,_,I){const R={};for(const k of f)if(Te(c,a,k)&&!_[Dn(k)]){const Me=new tt([],{});Me._sourceSegment=c,Me._segmentIndexShift="legacy"===I?c.segments.length:u.length,R[Dn(k)]=Me}return{..._,...R}}(c,u,a,f,c.children,_));return R._sourceSegment=c,R._segmentIndexShift=u.length,{segmentGroup:R,slicedSegments:a}}const I=new tt(c.segments,c.children);return I._sourceSegment=c,I._segmentIndexShift=u.length,{segmentGroup:I,slicedSegments:a}}function Te(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function mt(c,u,a,f){return!!(Dn(c)===f||f!==ue&&Te(u,a,c))&&("**"===c.path||Bt(u,c,a).matched)}function Rr(c,u,a){return 0===u.length&&!c.children[a]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const tr=!1;class Jt{constructor(u){this.segmentGroup=u||null}}class $r{constructor(u){this.urlTree=u}}function nr(c){return(0,pe._)(new Jt(c))}function lr(c){return(0,pe._)(new $r(c))}class Ia{constructor(u,a,f,_,I){this.injector=u,this.configLoader=a,this.urlSerializer=f,this.urlTree=_,this.config=I,this.allowRedirects=!0}apply(){const u=Ut(this.urlTree.root,[],[],this.config).segmentGroup,a=new tt(u.segments,u.children);return this.expandSegmentGroup(this.injector,this.config,a,ue).pipe((0,ie.U)(I=>this.createUrlTree(po(I),this.urlTree.queryParams,this.urlTree.fragment))).pipe((0,Dt.K)(I=>{if(I instanceof $r)return this.allowRedirects=!1,this.match(I.urlTree);throw I instanceof Jt?this.noMatchError(I):I}))}match(u){return this.expandSegmentGroup(this.injector,this.config,u.root,ue).pipe((0,ie.U)(_=>this.createUrlTree(po(_),u.queryParams,u.fragment))).pipe((0,Dt.K)(_=>{throw _ instanceof Jt?this.noMatchError(_):_}))}noMatchError(u){return new D.vHH(4002,tr)}createUrlTree(u,a,f){const _=u.segments.length>0?new tt([],{[ue]:u}):u;return new St(_,a,f)}expandSegmentGroup(u,a,f,_){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,ie.U)(I=>new tt([],I))):this.expandSegment(u,f,a,f.segments,_,!0)}expandChildren(u,a,f){const _=[];for(const I of Object.keys(f.children))"primary"===I?_.unshift(I):_.push(I);return(0,_e.D)(_).pipe((0,Mt.b)(I=>{const R=f.children[I],k=Un(a,I);return this.expandSegmentGroup(u,k,R,I).pipe((0,ie.U)(Me=>({segment:Me,outlet:I})))}),(0,at.R)((I,R)=>(I[R.outlet]=R.segment,I),{}),function it(c,u){const a=arguments.length>=2;return f=>f.pipe(c?(0,Ae.h)((_,I)=>c(_,I,f)):Re.y,Ee(1),a?Xe(u):ke(()=>new ne))}())}expandSegment(u,a,f,_,I,R){return(0,_e.D)(f).pipe((0,Mt.b)(k=>this.expandSegmentAgainstRoute(u,a,f,k,_,I,R).pipe((0,Dt.K)(ze=>{if(ze instanceof Jt)return(0,ee.of)(null);throw ze}))),fe(k=>!!k),(0,Dt.K)((k,Me)=>{if(k instanceof ne||"EmptyError"===k.name)return Rr(a,_,I)?(0,ee.of)(new tt([],{})):nr(a);throw k}))}expandSegmentAgainstRoute(u,a,f,_,I,R,k){return mt(_,a,I,R)?void 0===_.redirectTo?this.matchSegmentAgainstRoute(u,a,_,I,R):k&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,_,I,R):nr(a):nr(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,_,I,R){return"**"===_.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,_,R):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,_,I,R)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,_){const I=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?lr(I):this.lineralizeSegments(f,I).pipe((0,Be.z)(R=>{const k=new tt(R,{});return this.expandSegment(u,k,a,R,_,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,_,I,R){const{matched:k,consumedSegments:Me,remainingSegments:ze,positionalParamSegments:st}=Bt(a,_,I);if(!k)return nr(a);const Je=this.applyRedirectCommands(Me,_.redirectTo,st);return _.redirectTo.startsWith("/")?lr(Je):this.lineralizeSegments(_,Je).pipe((0,Be.z)(Pt=>this.expandSegment(u,a,f,Pt.concat(ze),R,!1)))}matchSegmentAgainstRoute(u,a,f,_,I){if("**"===f.path)return u=mr(f,u),f.loadChildren?(f._loadedRoutes?(0,ee.of)({routes:f._loadedRoutes,injector:f._loadedInjector}):this.configLoader.loadChildren(u,f)).pipe((0,ie.U)(Je=>(f._loadedRoutes=Je.routes,f._loadedInjector=Je.injector,new tt(_,{})))):(0,ee.of)(new tt(_,{}));const{matched:R,consumedSegments:k,remainingSegments:Me}=Bt(a,f,_);return R?(u=mr(f,u),this.getChildConfig(u,f,_).pipe((0,Be.z)(st=>{const Je=st.injector??u,Pt=st.routes,{segmentGroup:un,slicedSegments:Jn}=Ut(a,k,Me,Pt),Cn=new tt(un.segments,un.children);if(0===Jn.length&&Cn.hasChildren())return this.expandChildren(Je,Pt,Cn).pipe((0,ie.U)(Ko=>new tt(k,Ko)));if(0===Pt.length&&0===Jn.length)return(0,ee.of)(new tt(k,{}));const An=Dn(f)===I;return this.expandSegment(Je,Cn,Pt,Jn,An?ue:I,!0).pipe((0,ie.U)(br=>new tt(k.concat(br.segments),br.children)))}))):nr(a)}getChildConfig(u,a,f){return a.children?(0,ee.of)({routes:a.children,injector:u}):a.loadChildren?void 0!==a._loadedRoutes?(0,ee.of)({routes:a._loadedRoutes,injector:a._loadedInjector}):this.runCanLoadGuards(u,a,f).pipe((0,Be.z)(_=>_?this.configLoader.loadChildren(u,a).pipe((0,It.b)(I=>{a._loadedRoutes=I.routes,a._loadedInjector=I.injector})):function Li(c){return(0,pe._)(Ne(tr))}())):(0,ee.of)({routes:[],injector:u})}runCanLoadGuards(u,a,f){const _=a.canLoad;if(!_||0===_.length)return(0,ee.of)(!0);const I=_.map(R=>{const k=u.get(R);return fn(function g(c){return c&&Tn(c.canLoad)}(k)?k.canLoad(a,f):k(a,f))});return(0,ee.of)(I).pipe(qe(),(0,It.b)(R=>{if(!M(R))return;const k=Ne(ve+this.urlSerializer.serialize(R));throw k.url=R,k}),(0,ie.U)(R=>!0===R))}lineralizeSegments(u,a){let f=[],_=a.root;for(;;){if(f=f.concat(_.segments),0===_.numberOfChildren)return(0,ee.of)(f);if(_.numberOfChildren>1||!_.children[ue])return(0,pe._)(new D.vHH(4e3,tr));_=_.children[ue]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,_){const I=this.createSegmentGroup(u,a.root,f,_);return new St(I,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return Qe(u,(_,I)=>{if("string"==typeof _&&_.startsWith(":")){const k=_.substring(1);f[I]=a[k]}else f[I]=_}),f}createSegmentGroup(u,a,f,_){const I=this.createSegments(u,a.segments,f,_);let R={};return Qe(a.children,(k,Me)=>{R[Me]=this.createSegmentGroup(u,k,f,_)}),new tt(I,R)}createSegments(u,a,f,_){return a.map(I=>I.path.startsWith(":")?this.findPosParam(u,I,_):this.findOrReturn(I,f))}findPosParam(u,a,f){const _=f[a.path.substring(1)];if(!_)throw new D.vHH(4001,tr);return _}findOrReturn(u,a){let f=0;for(const _ of a){if(_.path===u.path)return a.splice(f),_;f++}return u}}function po(c){const u={};for(const f of Object.keys(c.children)){const I=po(c.children[f]);(I.segments.length>0||I.hasChildren())&&(u[f]=I)}return function wu(c){if(1===c.numberOfChildren&&c.children[ue]){const u=c.children[ue];return new tt(c.segments.concat(u.segments),u.children)}return c}(new tt(c.segments,u))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class _r{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class Bo{constructor(u,a){this.component=u,this.route=a}}function go(c,u,a){const f=c._root;return Wr(f,u?u._root:null,a,[f.value])}function oi(c,u,a){return(ho(u)??a).get(c)}function Wr(c,u,a,f,_={canDeactivateChecks:[],canActivateChecks:[]}){const I=Gn(u);return c.children.forEach(R=>{(function wa(c,u,a,f,_={canDeactivateChecks:[],canActivateChecks:[]}){const I=c.value,R=u?u.value:null,k=a?a.getContext(c.value.outlet):null;if(R&&I.routeConfig===R.routeConfig){const Me=function ba(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!xe(c.url,u.url);case"pathParamsOrQueryParamsChange":return!xe(c.url,u.url)||!yt(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!zt(c,u)||!yt(c.queryParams,u.queryParams);default:return!zt(c,u)}}(R,I,I.routeConfig.runGuardsAndResolvers);Me?_.canActivateChecks.push(new _r(f)):(I.data=R.data,I._resolvedData=R._resolvedData),Wr(c,u,I.component?k?k.children:null:a,f,_),Me&&k&&k.outlet&&k.outlet.isActivated&&_.canDeactivateChecks.push(new Bo(k.outlet.component,R))}else R&&Gr(u,k,_),_.canActivateChecks.push(new _r(f)),Wr(c,null,I.component?k?k.children:null:a,f,_)})(R,I[R.value.outlet],a,f.concat([R.value]),_),delete I[R.value.outlet]}),Qe(I,(R,k)=>Gr(R,a.getContext(k),_)),_}function Gr(c,u,a){const f=Gn(c),_=c.value;Qe(f,(I,R)=>{Gr(I,_.component?u?u.children.getContext(R):null:u,a)}),a.canDeactivateChecks.push(new Bo(_.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,_))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ss{}function Vo(c){return new P.y(u=>u.error(c))}class Aa{constructor(u,a,f,_,I,R){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=_,this.paramsInheritanceStrategy=I,this.relativeLinkResolution=R}recognize(){const u=Ut(this.urlTree.root,[],[],this.config.filter(R=>void 0===R.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,ue);if(null===a)return null;const f=new te([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},ue,this.rootComponentType,null,this.urlTree.root,-1,{}),_=new bn(f,a),I=new de(this.url,_);return this.inheritParamsAndData(I._root),I}inheritParamsAndData(u){const a=u.value,f=x(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(_=>this.inheritParamsAndData(_))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const I of Object.keys(a.children)){const R=a.children[I],k=Un(u,I),Me=this.processSegmentGroup(k,R,I);if(null===Me)return null;f.push(...Me)}const _=ai(f);return function Vn(c){c.sort((u,a)=>u.value.outlet===ue?-1:a.value.outlet===ue?1:u.value.outlet.localeCompare(a.value.outlet))}(_),_}processSegment(u,a,f,_){for(const I of u){const R=this.processSegmentAgainstRoute(I,a,f,_);if(null!==R)return R}return Rr(a,f,_)?[]:null}processSegmentAgainstRoute(u,a,f,_){if(u.redirectTo||!mt(u,a,f,_))return null;let I,R=[],k=[];if("**"===u.path){const un=f.length>0?pt(f).parameters:{},Jn=xs(a)+f.length;I=new te(f,un,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Fs(u),Dn(u),u.component??u._loadedComponent??null,u,Rs(a),Jn,zr(u),Jn)}else{const un=Bt(a,u,f);if(!un.matched)return null;R=un.consumedSegments,k=un.remainingSegments;const Jn=xs(a)+R.length;I=new te(R,un.parameters,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Fs(u),Dn(u),u.component??u._loadedComponent??null,u,Rs(a),Jn,zr(u),Jn)}const Me=function xr(c){return c.children?c.children:c.loadChildren?c._loadedRoutes:[]}(u),{segmentGroup:ze,slicedSegments:st}=Ut(a,R,k,Me.filter(un=>void 0===un.redirectTo),this.relativeLinkResolution);if(0===st.length&&ze.hasChildren()){const un=this.processChildren(Me,ze);return null===un?null:[new bn(I,un)]}if(0===Me.length&&0===st.length)return[new bn(I,[])];const Je=Dn(u)===_,Pt=this.processSegment(Me,ze,st,Je?ue:_);return null===Pt?null:[new bn(I,Pt)]}}function en(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function ai(c){const u=[],a=new Set;for(const f of c){if(!en(f)){u.push(f);continue}const _=u.find(I=>f.value.routeConfig===I.value.routeConfig);void 0!==_?(_.children.push(...f.children),a.add(_)):u.push(f)}for(const f of a){const _=ai(f.children);u.push(new bn(f.value,_))}return u.filter(f=>!a.has(f))}function Rs(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function xs(c){let u=c,a=u._segmentIndexShift??0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift??0;return a-1}function Fs(c){return c.data||{}}function zr(c){return c.resolve||{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const mo=Symbol("RouteTitle");function Ns(c){return"string"==typeof c.title||null===c.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Hi(c){return(0,he.w)(u=>{const a=c(u);return a?(0,_e.D)(a).pipe((0,ie.U)(()=>u)):(0,ee.of)(u)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Sa extends class $i{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ks=new D.OlP("ROUTES");let Bs=(()=>{class c{constructor(a,f){this.injector=a,this.compiler=f,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(a){if(this.componentLoaders.get(a))return this.componentLoaders.get(a);if(a._loadedComponent)return(0,ee.of)(a._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(a);const f=fn(a.loadComponent()).pipe((0,It.b)(I=>{this.onLoadEndListener&&this.onLoadEndListener(a),a._loadedComponent=I}),(0,ln.x)(()=>{this.componentLoaders.delete(a)})),_=new q(f,()=>new Ge.x).pipe(Q());return this.componentLoaders.set(a,_),_}loadChildren(a,f){if(this.childrenLoaders.get(f))return this.childrenLoaders.get(f);if(f._loadedRoutes)return(0,ee.of)({routes:f._loadedRoutes,injector:f._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(f);const I=this.loadModuleFactoryOrRoutes(f.loadChildren).pipe((0,ie.U)(k=>{this.onLoadEndListener&&this.onLoadEndListener(f);let Me,ze,st=!1;Array.isArray(k)?ze=k:(Me=k.create(a).injector,ze=tn(Me.get(ks,[],D.XFs.Self|D.XFs.Optional)));return{routes:ze.map(Fi),injector:Me}}),(0,ln.x)(()=>{this.childrenLoaders.delete(f)})),R=new q(I,()=>new Ge.x).pipe(Q());return this.childrenLoaders.set(f,R),R}loadModuleFactoryOrRoutes(a){return fn(a()).pipe((0,Be.z)(f=>f instanceof D.YKP||Array.isArray(f)?(0,ee.of)(f):(0,_e.D)(this.compiler.compileModuleAsync(f))))}}return c.\u0275fac=function(a){return new(a||c)(D.LFG(D.zs3),D.LFG(D.Sil))},c.\u0275prov=D.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Us{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function li(c){throw c}function js(c,u,a){return u.parse("/")}const Vs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},vo={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let Rn=(()=>{class c{constructor(a,f,_,I,R,k,Me){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=_,this.location=I,this.config=Me,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ge.x,this.errorHandler=li,this.malformedUriErrorHandler=js,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>(0,ee.of)(void 0),this.urlHandlingStrategy=new Us,this.routeReuseStrategy=new Sa,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=R.get(Bs),this.configLoader.onLoadEndListener=Pt=>this.triggerEvent(new nt(Pt)),this.configLoader.onLoadStartListener=Pt=>this.triggerEvent(new $n(Pt)),this.ngModule=R.get(D.h0i),this.console=R.get(D.c2e);const Je=R.get(D.R0b);this.isNgZoneEnabled=Je instanceof D.R0b&&D.R0b.isInAngularZone(),this.resetConfig(Me),this.currentUrlTree=function ae(){return new St(new tt([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=an(this.currentUrlTree,this.rootComponentType),this.transitions=new le.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe((0,Ae.h)(_=>0!==_.id),(0,ie.U)(_=>({..._,extractedUrl:this.urlHandlingStrategy.extract(_.rawUrl)})),(0,he.w)(_=>{let I=!1,R=!1;return(0,ee.of)(_).pipe((0,It.b)(k=>{this.currentNavigation={id:k.id,initialUrl:k.rawUrl,extractedUrl:k.extractedUrl,trigger:k.source,extras:k.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),(0,he.w)(k=>{const Me=this.browserUrlTree.toString(),ze=!this.navigated||k.extractedUrl.toString()!==Me||Me!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||ze)&&this.urlHandlingStrategy.shouldProcessUrl(k.rawUrl))return di(k.source)&&(this.browserUrlTree=k.extractedUrl),(0,ee.of)(k).pipe((0,he.w)(Je=>{const Pt=this.transitions.getValue();return f.next(new on(Je.id,this.serializeUrl(Je.extractedUrl),Je.source,Je.restoredState)),Pt!==this.transitions.getValue()?We.E:Promise.resolve(Je)}),function jn(c,u,a,f){return(0,he.w)(_=>function Iu(c,u,a,f,_){return new Ia(c,u,a,f,_).apply()}(c,u,a,_.extractedUrl,f).pipe((0,ie.U)(I=>({..._,urlAfterRedirects:I}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,It.b)(Je=>{this.currentNavigation={...this.currentNavigation,finalUrl:Je.urlAfterRedirects}}),function ui(c,u,a,f,_){return(0,Be.z)(I=>function Os(c,u,a,f,_="emptyOnly",I="legacy"){try{const R=new Aa(c,u,a,f,_,I).recognize();return null===R?Vo(new Ss):(0,ee.of)(R)}catch(R){return Vo(R)}}(c,u,I.urlAfterRedirects,a(I.urlAfterRedirects),f,_).pipe((0,ie.U)(R=>({...I,targetSnapshot:R}))))}(this.rootComponentType,this.config,Je=>this.serializeUrl(Je),this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,It.b)(Je=>{if("eager"===this.urlUpdateStrategy){if(!Je.extras.skipLocationChange){const un=this.urlHandlingStrategy.merge(Je.urlAfterRedirects,Je.rawUrl);this.setBrowserUrl(un,Je)}this.browserUrlTree=Je.urlAfterRedirects}const Pt=new sr(Je.id,this.serializeUrl(Je.extractedUrl),this.serializeUrl(Je.urlAfterRedirects),Je.targetSnapshot);f.next(Pt)}));if(ze&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:Pt,extractedUrl:un,source:Jn,restoredState:Cn,extras:An}=k,Jr=new on(Pt,this.serializeUrl(un),Jn,Cn);f.next(Jr);const br=an(un,this.rootComponentType).snapshot;return(0,ee.of)({...k,targetSnapshot:br,urlAfterRedirects:un,extras:{...An,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=k.rawUrl,k.resolve(null),We.E}),(0,It.b)(k=>{const Me=new zn(k.id,this.serializeUrl(k.extractedUrl),this.serializeUrl(k.urlAfterRedirects),k.targetSnapshot);this.triggerEvent(Me)}),(0,ie.U)(k=>({...k,guards:go(k.targetSnapshot,k.currentSnapshot,this.rootContexts)})),function ki(c,u){return(0,Be.z)(a=>{const{targetSnapshot:f,currentSnapshot:_,guards:{canActivateChecks:I,canDeactivateChecks:R}}=a;return 0===R.length&&0===I.length?(0,ee.of)({...a,guardsResult:!0}):function As(c,u,a,f){return(0,_e.D)(c).pipe((0,Be.z)(_=>function Ui(c,u,a,f,_){const I=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!I||0===I.length)return(0,ee.of)(!0);const R=I.map(k=>{const Me=oi(k,u,_);return fn(function me(c){return c&&Tn(c.canDeactivate)}(Me)?Me.canDeactivate(c,u,a,f):Me(c,u,a,f)).pipe(fe())});return(0,ee.of)(R).pipe(qe())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(_.component,_.route,a,u,f)),fe(_=>!0!==_,!0))}(R,f,_,c).pipe((0,Be.z)(k=>k&&function h(c){return"boolean"==typeof c}(k)?function Bi(c,u,a,f){return(0,_e.D)(u).pipe((0,Mt.b)(_=>(0,Oe.z)(function ii(c,u){return null!==c&&u&&u(new Kn(c)),(0,ee.of)(!0)}(_.route.parent,f),function Ta(c,u){return null!==c&&u&&u(new Wt(c)),(0,ee.of)(!0)}(_.route,f),function jo(c,u,a){const f=u[u.length-1],I=u.slice(0,u.length-1).reverse().map(R=>function wr(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(R)).filter(R=>null!==R).map(R=>j(()=>{const k=R.guards.map(Me=>{const ze=oi(Me,R.node,a);return fn(function V(c){return c&&Tn(c.canActivateChild)}(ze)?ze.canActivateChild(f,c):ze(f,c)).pipe(fe())});return(0,ee.of)(k).pipe(qe())}));return(0,ee.of)(I).pipe(qe())}(c,_.path,a),function Uo(c,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return(0,ee.of)(!0);const _=f.map(I=>j(()=>{const R=oi(I,u,a);return fn(function w(c){return c&&Tn(c.canActivate)}(R)?R.canActivate(u,c):R(u,c)).pipe(fe())}));return(0,ee.of)(_).pipe(qe())}(c,_.route,a))),fe(_=>!0!==_,!0))}(f,I,c,u):(0,ee.of)(k)),(0,ie.U)(k=>({...a,guardsResult:k})))})}(this.ngModule.injector,k=>this.triggerEvent(k)),(0,It.b)(k=>{if(M(k.guardsResult)){const ze=Ne(`Redirecting to "${this.serializeUrl(k.guardsResult)}"`);throw ze.url=k.guardsResult,ze}const Me=new gn(k.id,this.serializeUrl(k.extractedUrl),this.serializeUrl(k.urlAfterRedirects),k.targetSnapshot,!!k.guardsResult);this.triggerEvent(Me)}),(0,Ae.h)(k=>!!k.guardsResult||(this.restoreHistory(k),this.cancelNavigationTransition(k,""),!1)),Hi(k=>{if(k.guards.canActivateChecks.length)return(0,ee.of)(k).pipe((0,It.b)(Me=>{const ze=new Pn(Me.id,this.serializeUrl(Me.extractedUrl),this.serializeUrl(Me.urlAfterRedirects),Me.targetSnapshot);this.triggerEvent(ze)}),(0,he.w)(Me=>{let ze=!1;return(0,ee.of)(Me).pipe(function ci(c,u){return(0,Be.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:_}}=a;if(!_.length)return(0,ee.of)(a);let I=0;return(0,_e.D)(_).pipe((0,Mt.b)(R=>function ji(c,u,a,f){const _=c.routeConfig,I=c._resolve;return void 0!==_?.title&&!Ns(_)&&(I[mo]=_.title),function Vi(c,u,a,f){const _=function Pr(c){return[...Object.keys(c),...Object.getOwnPropertySymbols(c)]}(c);if(0===_.length)return(0,ee.of)({});const I={};return(0,_e.D)(_).pipe((0,Be.z)(R=>function Ho(c,u,a,f){const _=oi(c,u,f);return fn(_.resolve?_.resolve(u,a):_(u,a))}(c[R],u,a,f).pipe(fe(),(0,It.b)(k=>{I[R]=k}))),Ee(1),function De(c){return(0,ie.U)(()=>c)}(I),(0,Dt.K)(R=>R instanceof ne?We.E:(0,pe._)(R)))}(I,c,u,f).pipe((0,ie.U)(R=>(c._resolvedData=R,c.data=x(c,a).resolve,_&&Ns(_)&&(c.data[mo]=_.title),null)))}(R.route,f,c,u)),(0,It.b)(()=>I++),Ee(1),(0,Be.z)(R=>I===_.length?(0,ee.of)(a):We.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,It.b)({next:()=>ze=!0,complete:()=>{ze||(this.restoreHistory(Me),this.cancelNavigationTransition(Me,"At least one route resolver didn't emit any value."))}}))}),(0,It.b)(Me=>{const ze=new Ln(Me.id,this.serializeUrl(Me.extractedUrl),this.serializeUrl(Me.urlAfterRedirects),Me.targetSnapshot);this.triggerEvent(ze)}))}),Hi(k=>{const Me=ze=>{const st=[];ze.routeConfig?.loadComponent&&!ze.routeConfig._loadedComponent&&st.push(this.configLoader.loadComponent(ze.routeConfig).pipe((0,It.b)(Je=>{ze.component=Je}),(0,ie.U)(()=>{})));for(const Je of ze.children)st.push(...Me(Je));return st};return(0,Se.a)(Me(k.targetSnapshot.root)).pipe(Xe(),(0,se.q)(1))}),Hi(()=>this.afterPreactivation()),(0,ie.U)(k=>{const Me=function Qt(c,u,a){const f=yn(c,u._root,a?a._root:void 0);return new Yn(f,u)}(this.routeReuseStrategy,k.targetSnapshot,k.currentRouterState);return{...k,targetRouterState:Me}}),(0,It.b)(k=>{this.currentUrlTree=k.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(k.urlAfterRedirects,k.rawUrl),this.routerState=k.targetRouterState,"deferred"===this.urlUpdateStrategy&&(k.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,k),this.browserUrlTree=k.urlAfterRedirects)}),((c,u,a)=>(0,ie.U)(f=>(new Or(u,f.targetRouterState,f.currentRouterState,a).activate(c),f)))(this.rootContexts,this.routeReuseStrategy,k=>this.triggerEvent(k)),(0,It.b)({next(){I=!0},complete(){I=!0}}),(0,ln.x)(()=>{I||R||this.cancelNavigationTransition(_,`Navigation ID ${_.id} is not equal to the current navigation id ${this.navigationId}`),this.currentNavigation?.id===_.id&&(this.currentNavigation=null)}),(0,Dt.K)(k=>{if(R=!0,function Tt(c){return c&&c[re]}(k)){const Me=M(k.url);Me||(this.navigated=!0,this.restoreHistory(_,!0));const ze=new pn(_.id,this.serializeUrl(_.extractedUrl),k.message);if(f.next(ze),Me){const st=this.urlHandlingStrategy.merge(k.url,this.rawUrlTree),Je={skipLocationChange:_.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||di(_.source)};this.scheduleNavigation(st,"imperative",null,Je,{resolve:_.resolve,reject:_.reject,promise:_.promise})}else _.resolve(!1)}else{this.restoreHistory(_,!0);const Me=new Hn(_.id,this.serializeUrl(_.extractedUrl),k);f.next(Me);try{_.resolve(this.errorHandler(k))}catch(ze){_.reject(ze)}}return We.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next({...this.transitions.value,...a})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{const _={replaceUrl:!0},I=a.state?.navigationId?a.state:null;if(I){const k={...I};delete k.navigationId,delete k.\u0275routerPageId,0!==Object.keys(k).length&&(_.state=k)}const R=this.parseUrl(a.url);this.scheduleNavigation(R,f,I,_)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){this.config=a.map(Fi),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:_,queryParams:I,fragment:R,queryParamsHandling:k,preserveFragment:Me}=f,ze=_||this.routerState.root,st=Me?this.currentUrlTree.fragment:R;let Je=null;switch(k){case"merge":Je={...this.currentUrlTree.queryParams,...I};break;case"preserve":Je=this.currentUrlTree.queryParams;break;default:Je=I||null}return null!==Je&&(Je=this.removeEmptyProps(Je)),function Oo(c,u,a,f,_){if(0===a.length)return ei(u.root,u.root,u.root,f,_);const I=function Si(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new Ai(!0,0,c);let u=0,a=!1;const f=c.reduce((_,I,R)=>{if("object"==typeof I&&null!=I){if(I.outlets){const k={};return Qe(I.outlets,(Me,ze)=>{k[ze]="string"==typeof Me?Me.split("/"):Me}),[..._,{outlets:k}]}if(I.segmentPath)return[..._,I.segmentPath]}return"string"!=typeof I?[..._,I]:0===R?(I.split("/").forEach((k,Me)=>{0==Me&&"."===k||(0==Me&&""===k?a=!0:".."===k?u++:""!=k&&_.push(k))}),_):[..._,I]},[]);return new Ai(a,u,f)}(a);return I.toRoot()?ei(u.root,u.root,new tt([],{}),f,_):function R(Me){const ze=function Oi(c,u,a,f){return c.isAbsolute?new ti(u.root,!0,0):-1===f?new ti(a,a===u.root,0):function ni(c,u,a){let f=c,_=u,I=a;for(;I>_;){if(I-=_,f=f.parent,!f)throw new D.vHH(4005,!1);_=f.segments.length}return new ti(f,!1,_-I)}(a,f+(Ar(c.commands[0])?0:1),c.numberOfDoubleDots)}(I,u,c.snapshot?._urlSegment,Me),st=ze.processChildren?xo(ze.segmentGroup,ze.index,I.commands):lo(ze.segmentGroup,ze.index,I.commands);return ei(u.root,ze.segmentGroup,st,f,_)}(c.snapshot?._lastPathIndex)}(ze,this.currentUrlTree,a,Je,st??null)}navigateByUrl(a,f={skipLocationChange:!1}){const _=M(a)?a:this.parseUrl(a),I=this.urlHandlingStrategy.merge(_,this.rawUrlTree);return this.scheduleNavigation(I,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function yo(c){for(let u=0;u<c.length;u++){if(null==c[u])throw new D.vHH(4008,!1)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(_){f=this.malformedUriErrorHandler(_,this.urlSerializer,a)}return f}isActive(a,f){let _;if(_=!0===f?{...Vs}:!1===f?{...vo}:f,M(a))return Ve(this.currentUrlTree,a,_);const I=this.parseUrl(a);return Ve(this.currentUrlTree,I,_)}removeEmptyProps(a){return Object.keys(a).reduce((f,_)=>{const I=a[_];return null!=I&&(f[_]=I),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new Ft(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,_,I,R){if(this.disposed)return Promise.resolve(!1);let k,Me,ze;R?(k=R.resolve,Me=R.reject,ze=R.promise):ze=new Promise((Pt,un)=>{k=Pt,Me=un});const st=++this.navigationId;let Je;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(_=this.location.getState()),Je=_&&_.\u0275routerPageId?_.\u0275routerPageId:I.replaceUrl||I.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):Je=0,this.setTransition({id:st,targetPageId:Je,source:f,restoredState:_,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:I,resolve:k,reject:Me,promise:ze,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),ze.catch(Pt=>Promise.reject(Pt))}setBrowserUrl(a,f){const _=this.urlSerializer.serialize(a),I={...f.extras.state,...this.generateNgRouterState(f.id,f.targetPageId)};this.location.isCurrentPathEqualTo(_)||f.extras.replaceUrl?this.location.replaceState(_,"",I):this.location.go(_,"",I)}restoreHistory(a,f=!1){if("computed"===this.canceledNavigationResolution){const _=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===_?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===_&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(_)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const _=new pn(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(_),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return c.\u0275fac=function(a){D.$Z()},c.\u0275prov=D.Yz7({token:c,factory:c.\u0275fac}),c})();function di(c){return"imperative"!==c}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Do=(()=>{class c{constructor(a,f,_,I,R){this.router=a,this.route=f,this.tabIndexAttribute=_,this.renderer=I,this.el=R,this.commands=null,this.onChanges=new Ge.x,this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(a){if(null!=this.tabIndexAttribute)return;const f=this.renderer,_=this.el.nativeElement;null!==a?f.setAttribute(_,"tabindex",a):f.removeAttribute(_,"tabindex")}ngOnChanges(a){this.onChanges.next(this)}set routerLink(a){null!=a?(this.commands=Array.isArray(a)?a:[a],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(){if(null===this.urlTree)return!0;const a={skipLocationChange:(0,D.D6c)(this.skipLocationChange),replaceUrl:(0,D.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,a),!0}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,D.D6c)(this.preserveFragment)})}}return c.\u0275fac=function(a){return new(a||c)(D.Y36(Rn),D.Y36(nn),D.$8M("tabindex"),D.Y36(D.Qsj),D.Y36(D.SBq))},c.\u0275dir=D.lG2({type:c,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(a,f){1&a&&D.NdJ("click",function(){return f.onClick()})},inputs:{queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[D.TTD]}),c})(),Gi=(()=>{class c{constructor(a,f,_){this.router=a,this.route=f,this.locationStrategy=_,this.commands=null,this.href=null,this.onChanges=new Ge.x,this.subscription=a.events.subscribe(I=>{I instanceof Ft&&this.updateTargetUrlAndHref()})}set routerLink(a){this.commands=null!=a?Array.isArray(a)?a:[a]:null}ngOnChanges(a){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(a,f,_,I,R){if(0!==a||f||_||I||R||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)return!0;const k={skipLocationChange:(0,D.D6c)(this.skipLocationChange),replaceUrl:(0,D.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,k),!1}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,D.D6c)(this.preserveFragment)})}}return c.\u0275fac=function(a){return new(a||c)(D.Y36(Rn),D.Y36(nn),D.Y36(p.S$))},c.\u0275dir=D.lG2({type:c,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(a,f){1&a&&D.NdJ("click",function(I){return f.onClick(I.button,I.ctrlKey,I.shiftKey,I.altKey,I.metaKey)}),2&a&&D.uIk("target",f.target)("href",f.href,D.LSH)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[D.TTD]}),c})(),zi=(()=>{class c{constructor(a,f,_,I,R,k){this.router=a,this.element=f,this.renderer=_,this.cdr=I,this.link=R,this.linkWithHref=k,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new D.vpe,this.routerEventsSubscription=a.events.subscribe(Me=>{Me instanceof Ft&&this.update()})}ngAfterContentInit(){(0,ee.of)(this.links.changes,this.linksWithHrefs.changes,(0,ee.of)(null)).pipe((0,jt.J)()).subscribe(a=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();const a=[...this.links.toArray(),...this.linksWithHrefs.toArray(),this.link,this.linkWithHref].filter(f=>!!f).map(f=>f.onChanges);this.linkInputChangesSubscription=(0,_e.D)(a).pipe((0,jt.J)()).subscribe(f=>{this.isActive!==this.isLinkActive(this.router)(f)&&this.update()})}set routerLinkActive(a){const f=Array.isArray(a)?a:a.split(" ");this.classes=f.filter(_=>!!_)}ngOnChanges(a){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.linksWithHrefs||!this.router.navigated||Promise.resolve().then(()=>{const a=this.hasActiveLinks();this.isActive!==a&&(this.isActive=a,this.cdr.markForCheck(),this.classes.forEach(f=>{a?this.renderer.addClass(this.element.nativeElement,f):this.renderer.removeClass(this.element.nativeElement,f)}),a&&void 0!==this.ariaCurrentWhenActive?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this.isActiveChange.emit(a))})}isLinkActive(a){const f=function Kr(c){return!!c.paths}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return _=>!!_.urlTree&&a.isActive(_.urlTree,f)}hasActiveLinks(){const a=this.isLinkActive(this.router);return this.link&&a(this.link)||this.linkWithHref&&a(this.linkWithHref)||this.links.some(a)||this.linksWithHrefs.some(a)}}return c.\u0275fac=function(a){return new(a||c)(D.Y36(Rn),D.Y36(D.SBq),D.Y36(D.Qsj),D.Y36(D.sBO),D.Y36(Do,8),D.Y36(Gi,8))},c.\u0275dir=D.lG2({type:c,selectors:[["","routerLinkActive",""]],contentQueries:function(a,f,_){if(1&a&&(D.Suo(_,Do,5),D.Suo(_,Gi,5)),2&a){let I;D.iGM(I=D.CRH())&&(f.links=I),D.iGM(I=D.CRH())&&(f.linksWithHrefs=I)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[D.TTD]}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Hs{buildTitle(u){let a,f=u.root;for(;void 0!==f;)a=this.getResolvedTitleForRoute(f)??a,f=f.children.find(_=>_.outlet===ue);return a}getResolvedTitleForRoute(u){return u.data[mo]}}let dr=(()=>{class c extends Hs{constructor(a){super(),this.title=a}updateTitle(a){const f=this.buildTitle(a);void 0!==f&&this.title.setTitle(f)}}return c.\u0275fac=function(a){return new(a||c)(D.LFG(bt.Dx))},c.\u0275prov=D.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class fi{}let Eo=(()=>{class c{constructor(a,f,_,I,R){this.router=a,this.injector=_,this.preloadingStrategy=I,this.loader=R}setUpPreloading(){this.subscription=this.router.events.pipe((0,Ae.h)(a=>a instanceof Ft),(0,Mt.b)(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const _=[];for(const I of f){I.providers&&!I._injector&&(I._injector=(0,D.MMx)(I.providers,a,`Route: ${I.path}`));const R=I._injector??a,k=I._loadedInjector??R;I.loadChildren&&!I._loadedRoutes||I.loadComponent&&!I._loadedComponent?_.push(this.preloadConfig(R,I)):(I.children||I._loadedRoutes)&&_.push(this.processRoutes(k,I.children??I._loadedRoutes))}return(0,_e.D)(_).pipe((0,jt.J)())}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>{let _;_=f.loadChildren&&void 0===f.canLoad?this.loader.loadChildren(a,f):(0,ee.of)(null);const I=_.pipe((0,Be.z)(R=>null===R?(0,ee.of)(void 0):(f._loadedRoutes=R.routes,f._loadedInjector=R.injector,this.processRoutes(R.injector??a,R.routes))));if(f.loadComponent&&!f._loadedComponent){const R=this.loader.loadComponent(f);return(0,_e.D)([I,R]).pipe((0,jt.J)())}return I})}}return c.\u0275fac=function(a){return new(a||c)(D.LFG(Rn),D.LFG(D.Sil),D.LFG(D.lqb),D.LFG(fi),D.LFG(Bs))},c.\u0275prov=D.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Yr=new D.OlP("");let hi=(()=>{class c{constructor(a,f,_={}){this.router=a,this.viewportScroller=f,this.options=_,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},_.scrollPositionRestoration=_.scrollPositionRestoration||"disabled",_.anchorScrolling=_.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof on?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof Ft&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof er&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new er(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){D.$Z()},c.\u0275prov=D.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const pi=new D.OlP("ROUTER_CONFIGURATION",{providedIn:"root",factory:()=>({})}),Ki=new D.OlP("ROUTER_FORROOT_GUARD"),Yi=new D.OlP(""),Ra=[p.Ye,{provide:H,useClass:N},{provide:Rn,useFactory:function zs(c,u,a,f,_,I,R={},k,Me,ze,st){const Je=new Rn(null,c,u,a,f,_,tn(I));return ze&&(Je.urlHandlingStrategy=ze),st&&(Je.routeReuseStrategy=st),Je.titleStrategy=Me??k,function Zi(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(R,Je),Je},deps:[H,Sr,p.Ye,D.zs3,D.Sil,ks,pi,dr,[Hs,new D.FiY],[class $o{},new D.FiY],[class _o{},new D.FiY]]},Sr,{provide:nn,useFactory:function Pa(c){return c.routerState.root},deps:[Rn]},Bs];function gi(){return new D.PXZ("Router",Rn)}let zo=(()=>{class c{constructor(a,f){}static forRoot(a,f){return{ngModule:c,providers:[Ra,[],Gs(a),{provide:Ki,useFactory:Co,deps:[[Rn,new D.FiY,new D.tp0]]},{provide:pi,useValue:f||{}},f?.useHash?{provide:p.S$,useClass:p.Do}:{provide:p.S$,useClass:p.b0},{provide:Yr,useFactory:()=>{const c=(0,D.f3M)(Rn),u=(0,D.f3M)(p.EM),a=(0,D.f3M)(pi);return a.scrollOffset&&u.setOffset(a.scrollOffset),new hi(c,u,a)}},f?.preloadingStrategy?Ys(f.preloadingStrategy):[],{provide:D.PXZ,multi:!0,useFactory:gi},f?.initialNavigation?Mo(f):[],[{provide:mi,useFactory:Ks},{provide:D.tb,multi:!0,useExisting:mi}]]}}static forChild(a){return{ngModule:c,providers:[Gs(a)]}}}return c.\u0275fac=function(a){return new(a||c)(D.LFG(Ki,8),D.LFG(Rn,8))},c.\u0275mod=D.oAB({type:c}),c.\u0275inj=D.cJS({}),c})();function Co(c){return"guarded"}function Gs(c){return[{provide:D.deG,multi:!0,useValue:c},{provide:ks,multi:!0,useValue:c}]}function Ks(){const c=(0,D.f3M)(D.zs3);return u=>{const a=c.get(D.z2F);if(u!==a.components[0])return;const f=c.get(Rn),_=c.get(Fr);null===c.get(Io,null,D.XFs.Optional)&&f.initialNavigation(),c.get(Yi,null,D.XFs.Optional)?.setUpPreloading(),c.get(Yr,null,D.XFs.Optional)?.init(),f.resetRootComponentType(a.componentTypes[0]),_.next(),_.complete()}}const mi=new D.OlP("");function Mo(c){return["disabled"===c.initialNavigation?[{provide:D.ip1,multi:!0,useFactory:()=>{const c=(0,D.f3M)(Rn);return()=>{c.setUpLocationChangeListener()}}},{provide:Io,useValue:"disabled"}]:[],"enabledBlocking"===c.initialNavigation?[{provide:Io,useValue:"enabledBlocking"},{provide:D.ip1,multi:!0,deps:[D.zs3],useFactory:c=>{const u=c.get(p.V_,Promise.resolve(null));let a=!1;return()=>u.then(()=>new Promise(_=>{const I=c.get(Rn),R=c.get(Fr);(function f(_){const I=c.get(Rn);I.events.pipe((0,Ae.h)(R=>R instanceof Ft||R instanceof pn||R instanceof Hn),(0,ie.U)(R=>{if(R instanceof Ft)return!0;const k=I.navigationId!==R.id,Me=R instanceof pn&&-1!==R.reason.indexOf(ve);return!(!k&&!Me)&&null}),(0,Ae.h)(R=>null!==R),(0,se.q)(1)).subscribe(()=>{_()})})(()=>{_(!0),a=!0}),I.afterPreactivation=()=>(_(!0),a||R.closed?(0,ee.of)(void 0):R),I.initialNavigation()}))}}]:[]]}const Fr=new D.OlP("",{factory:()=>new Ge.x}),Io=new D.OlP("");function Ys(c){return[Eo,{provide:Yi,useExisting:Eo},{provide:fi,useExisting:c}]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,2655:(Y,F,y)=>{y.d(F,{eX:()=>on,sQ:()=>tn,GW:()=>fe,l4:()=>Ft});var p=y(2997),D=y(6451),X=y(8306),ne=y(7579),P=y(4482),G=y(5403),j=y(5032),L=y(515),J=y(9646),Q=y(2843),q=y(576);class ee{constructor(Ie,Ce,Ve){this.kind=Ie,this.value=Ce,this.error=Ve,this.hasValue="N"===Ie}observe(Ie){return le(this,Ie)}do(Ie,Ce,Ve){const{kind:ct,value:lt,error:xt}=this;return"N"===ct?Ie?.(lt):"E"===ct?Ce?.(xt):Ve?.()}accept(Ie,Ce,Ve){var ct;return(0,q.m)(null===(ct=Ie)||void 0===ct?void 0:ct.next)?this.observe(Ie):this.do(Ie,Ce,Ve)}toObservable(){const{kind:Ie,value:Ce,error:Ve}=this,ct="N"===Ie?(0,J.of)(Ce):"E"===Ie?(0,Q._)(()=>Ve):"C"===Ie?L.E:0;if(!ct)throw new TypeError(`Unexpected notification kind ${Ie}`);return ct}static createNext(Ie){return new ee("N",Ie)}static createError(Ie){return new ee("E",void 0,Ie)}static createComplete(){return ee.completeNotification}}function le(ae,Ie){var Ce,Ve,ct;const{kind:lt,value:xt,error:qt}=ae;if("string"!=typeof lt)throw new TypeError('Invalid notification, missing "kind"');"N"===lt?null===(Ce=Ie.next)||void 0===Ce||Ce.call(Ie,xt):"E"===lt?null===(Ve=Ie.error)||void 0===Ve||Ve.call(Ie,qt):null===(ct=Ie.complete)||void 0===ct||ct.call(Ie)}ee.completeNotification=new ee("C");var pe=y(8421);function Oe(ae,Ie,Ce,Ve){return(0,P.e)((ct,lt)=>{let xt;Ie&&"function"!=typeof Ie?({duration:Ce,element:xt,connector:Ve}=Ie):xt=Ie;const qt=new Map,vn=xe=>{qt.forEach(xe),xe(lt)},dt=xe=>vn(rt=>rt.error(xe));let St=0,tt=!1;const Ot=new G.Q(lt,xe=>{try{const rt=ae(xe);let H=qt.get(rt);if(!H){qt.set(rt,H=Ve?Ve():new ne.x);const N=function Gt(xe,rt){const H=new X.y(N=>{St++;const O=rt.subscribe(N);return()=>{O.unsubscribe(),0==--St&&tt&&Ot.unsubscribe()}});return H.key=xe,H}(rt,H);if(lt.next(N),Ce){const O=(0,G.x)(H,()=>{H.complete(),O?.unsubscribe()},void 0,void 0,()=>qt.delete(rt));Ot.add((0,pe.Xf)(Ce(N)).subscribe(O))}}H.next(xt?xt(xe):xe)}catch(rt){dt(rt)}},()=>vn(xe=>xe.complete()),dt,()=>qt.clear(),()=>(tt=!0,0===St));ct.subscribe(Ot)})}var We=y(4004);function Ge(ae,Ie){return Ie?Ce=>Ce.pipe(Ge((Ve,ct)=>(0,pe.Xf)(ae(Ve,ct)).pipe((0,We.U)((lt,xt)=>Ie(Ve,lt,ct,xt))))):(0,P.e)((Ce,Ve)=>{let ct=0,lt=null,xt=!1;Ce.subscribe((0,G.x)(Ve,qt=>{lt||(lt=(0,G.x)(Ve,void 0,()=>{lt=null,xt&&Ve.complete()}),(0,pe.Xf)(ae(qt,ct++)).subscribe(lt))},()=>{xt=!0,!lt&&Ve.complete()}))})}var Ee=y(262),ke=y(9300),Ye=y(5577),Xe=y(5698),Re=y(4650);const it={dispatch:!0,useEffectsErrorHandler:!0},se="__@ngrx/effects_create__";function fe(ae,Ie){const Ce=ae(),Ve={...it,...Ie};return Object.defineProperty(Ce,se,{value:Ve}),Ce}function ie(ae){return Object.getOwnPropertyNames(ae).filter(Ve=>!(!ae[Ve]||!ae[Ve].hasOwnProperty(se))&&ae[Ve][se].hasOwnProperty("dispatch")).map(Ve=>({propertyName:Ve,...ae[Ve][se]}))}function De(ae){return Object.getPrototypeOf(ae)}const he="__@ngrx/effects__";function at(ae){return(0,p.qC)(Be,De)(ae)}function Be(ae){return function Dt(ae){return ae.constructor.hasOwnProperty(he)}(ae)?ae.constructor[he]:[]}function jt(ae,Ie,Ce){const Ve=De(ae).constructor.name,ct=function ln(ae){return[at,ie].reduce((Ce,Ve)=>Ce.concat(Ve(ae)),[])}(ae).map(({propertyName:lt,dispatch:xt,useEffectsErrorHandler:qt})=>{const vn="function"==typeof ae[lt]?ae[lt]():ae[lt],dt=qt?Ce(vn,Ie):vn;return!1===xt?dt.pipe(function $(){return(0,P.e)((ae,Ie)=>{ae.subscribe((0,G.x)(Ie,j.Z))})}()):dt.pipe(function Se(){return(0,P.e)((ae,Ie)=>{ae.subscribe((0,G.x)(Ie,Ce=>{Ie.next(ee.createNext(Ce))},()=>{Ie.next(ee.createComplete()),Ie.complete()},Ce=>{Ie.next(ee.createError(Ce)),Ie.complete()}))})}()).pipe((0,We.U)(tt=>({effect:ae[lt],notification:tt,propertyName:lt,sourceName:Ve,sourceInstance:ae})))});return(0,D.T)(...ct)}function $t(ae,Ie,Ce=10){return ae.pipe((0,Ee.K)(Ve=>(Ie&&Ie.handleError(Ve),Ce<=1?ae:$t(ae,Ie,Ce-1))))}let on=(()=>{class ae extends X.y{constructor(Ce){super(),Ce&&(this.source=Ce)}lift(Ce){const Ve=new ae;return Ve.source=this,Ve.operator=Ce,Ve}}return ae.\u0275fac=function(Ce){return new(Ce||ae)(Re.LFG(p.Y$))},ae.\u0275prov=Re.Yz7({token:ae,factory:ae.\u0275fac}),ae})();function Ft(...ae){return(0,ke.h)(Ie=>ae.some(Ce=>"string"==typeof Ce?Ce===Ie.type:Ce.type===Ie.type))}function Kn(ae){return Xt(ae,"ngrxOnInitEffects")}function Xt(ae,Ie){return ae&&Ie in ae&&"function"==typeof ae[Ie]}const Wt=new Re.OlP("@ngrx/effects Internal Root Guard"),On=new Re.OlP("@ngrx/effects User Provided Effects"),er=new Re.OlP("@ngrx/effects Internal Root Effects"),dn=new Re.OlP("@ngrx/effects Root Effects"),ue=new Re.OlP("@ngrx/effects Internal Feature Effects"),U=new Re.OlP("@ngrx/effects Feature Effects"),W=new Re.OlP("@ngrx/effects Effects Error Handler");let ve=(()=>{class ae extends ne.x{constructor(Ce,Ve){super(),this.errorHandler=Ce,this.effectsErrorHandler=Ve}addEffects(Ce){this.next(Ce)}toActions(){return this.pipe(Oe(De),(0,Ye.z)(Ce=>Ce.pipe(Oe(re))),(0,Ye.z)(Ce=>{const Ve=Ce.pipe(Ge(lt=>function Ne(ae,Ie){return Ce=>{const Ve=jt(Ce,ae,Ie);return function $n(ae){return Xt(ae,"ngrxOnRunEffects")}(Ce)?Ce.ngrxOnRunEffects(Ve):Ve}}(this.errorHandler,this.effectsErrorHandler)(lt)),(0,We.U)(lt=>(function pn(ae,Ie){if("N"===ae.notification.kind){const Ce=ae.notification.value;!function Hn(ae){return"function"!=typeof ae&&ae&&ae.type&&"string"==typeof ae.type}(Ce)&&Ie.handleError(new Error(`Effect ${function sr({propertyName:ae,sourceInstance:Ie,sourceName:Ce}){const Ve="function"==typeof Ie[ae];return`"${Ce}.${String(ae)}${Ve?"()":""}"`}(ae)} dispatched an invalid action: ${function zn(ae){try{return JSON.stringify(ae)}catch{return ae}}(Ce)}`))}}(lt,this.errorHandler),lt.notification)),(0,ke.h)(lt=>"N"===lt.kind&&null!=lt.value),function Ae(){return(0,P.e)((ae,Ie)=>{ae.subscribe((0,G.x)(Ie,Ce=>le(Ce,Ie)))})}()),ct=Ce.pipe((0,Xe.q)(1),(0,ke.h)(Kn),(0,We.U)(lt=>lt.ngrxOnInitEffects()));return(0,D.T)(Ve,ct)}))}}return ae.\u0275fac=function(Ce){return new(Ce||ae)(Re.LFG(Re.qLn),Re.LFG(W))},ae.\u0275prov=Re.Yz7({token:ae,factory:ae.\u0275fac}),ae})();function re(ae){return function Pn(ae){return Xt(ae,"ngrxOnIdentifyEffects")}(ae)?ae.ngrxOnIdentifyEffects():""}let Tt=(()=>{class ae{constructor(Ce,Ve){this.effectSources=Ce,this.store=Ve,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}}return ae.\u0275fac=function(Ce){return new(Ce||ae)(Re.LFG(ve),Re.LFG(p.yh))},ae.\u0275prov=Re.Yz7({token:ae,factory:ae.\u0275fac}),ae})();const vt="@ngrx/effects/init";(0,p.PH)(vt);let yt=(()=>{class ae{constructor(Ce,Ve,ct,lt,xt,qt,vn){this.sources=Ce,Ve.start(),lt.forEach(dt=>Ce.addEffects(dt)),ct.dispatch({type:vt})}addEffects(Ce){this.sources.addEffects(Ce)}}return ae.\u0275fac=function(Ce){return new(Ce||ae)(Re.LFG(ve),Re.LFG(Tt),Re.LFG(p.yh),Re.LFG(dn),Re.LFG(p.cr,8),Re.LFG(p.CK,8),Re.LFG(Wt,8))},ae.\u0275mod=Re.oAB({type:ae}),ae.\u0275inj=Re.cJS({}),ae})(),kt=(()=>{class ae{constructor(Ce,Ve,ct,lt){Ve.forEach(xt=>xt.forEach(qt=>Ce.addEffects(qt)))}}return ae.\u0275fac=function(Ce){return new(Ce||ae)(Re.LFG(yt),Re.LFG(U),Re.LFG(p.cr,8),Re.LFG(p.CK,8))},ae.\u0275mod=Re.oAB({type:ae}),ae.\u0275inj=Re.cJS({}),ae})(),tn=(()=>{class ae{static forFeature(Ce=[]){return{ngModule:kt,providers:[Ce,{provide:ue,multi:!0,useValue:Ce},{provide:On,multi:!0,useValue:[]},{provide:U,multi:!0,useFactory:pt,deps:[Re.zs3,ue,On]}]}}static forRoot(Ce=[]){return{ngModule:yt,providers:[{provide:W,useValue:$t},Tt,ve,on,Ce,{provide:er,useValue:[Ce]},{provide:Wt,useFactory:Qe,deps:[[Tt,new Re.FiY,new Re.tp0],[er,new Re.PiD]]},{provide:On,multi:!0,useValue:[]},{provide:dn,useFactory:pt,deps:[Re.zs3,er,On]}]}}}return ae.\u0275fac=function(Ce){return new(Ce||ae)},ae.\u0275mod=Re.oAB({type:ae}),ae.\u0275inj=Re.cJS({}),ae})();function pt(ae,Ie,Ce){const Ve=[];for(const ct of Ie)Ve.push(...ct);for(const ct of Ce)Ve.push(...ct);return function Ct(ae,Ie){return Ie.map(Ce=>ae.get(Ce))}(ae,Ve)}function Qe(ae,Ie){if((1!==Ie.length||0!==Ie[0].length)&&ae)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}},825:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FT:()=>StoreDevtoolsModule});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4650),_ngrx_store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2997),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(515),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8306),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9646),rxjs__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(6451),rxjs__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(233),rxjs__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(4707),rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3099),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9300),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4004),rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4351),rxjs_operators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1749),rxjs_operators__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8372),rxjs_operators__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(262),rxjs_operators__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(5698),rxjs_operators__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2722),rxjs_operators__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3900),rxjs_operators__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(5684),rxjs_operators__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(5363),rxjs_operators__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(1365),rxjs_operators__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(5026);class StoreDevtoolsConfig{constructor(){this.maxAge=!1}}const STORE_DEVTOOLS_CONFIG=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Options"),INITIAL_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Initial Config");function noMonitor(){return null}const DEFAULT_NAME="NgRx Store DevTools";function createConfig(Y){const F={maxAge:!1,monitor:noMonitor,actionSanitizer:void 0,stateSanitizer:void 0,name:DEFAULT_NAME,serialize:!1,logOnly:!1,autoPause:!1,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0}},y="function"==typeof Y?Y():Y,X=Object.assign({},F,{features:y.features||!!y.logOnly&&{pause:!0,export:!0,test:!0}||F.features},y);if(X.maxAge&&X.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${X.maxAge}`);return X}const PERFORM_ACTION="PERFORM_ACTION",REFRESH="REFRESH",RESET="RESET",ROLLBACK="ROLLBACK",COMMIT="COMMIT",SWEEP="SWEEP",TOGGLE_ACTION="TOGGLE_ACTION",SET_ACTIONS_ACTIVE="SET_ACTIONS_ACTIVE",JUMP_TO_STATE="JUMP_TO_STATE",JUMP_TO_ACTION="JUMP_TO_ACTION",IMPORT_STATE="IMPORT_STATE",LOCK_CHANGES="LOCK_CHANGES",PAUSE_RECORDING="PAUSE_RECORDING";class PerformAction{constructor(F,y){if(this.action=F,this.timestamp=y,this.type=PERFORM_ACTION,typeof F.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}}class Refresh{constructor(){this.type=REFRESH}}class Reset{constructor(F){this.timestamp=F,this.type=RESET}}class Rollback{constructor(F){this.timestamp=F,this.type=ROLLBACK}}class Commit{constructor(F){this.timestamp=F,this.type=COMMIT}}class Sweep{constructor(){this.type=SWEEP}}class ToggleAction{constructor(F){this.id=F,this.type=TOGGLE_ACTION}}class SetActionsActive{constructor(F,y,p=!0){this.start=F,this.end=y,this.active=p,this.type=SET_ACTIONS_ACTIVE}}class JumpToState{constructor(F){this.index=F,this.type=JUMP_TO_STATE}}class JumpToAction{constructor(F){this.actionId=F,this.type=JUMP_TO_ACTION}}class ImportState{constructor(F){this.nextLiftedState=F,this.type=IMPORT_STATE}}class LockChanges{constructor(F){this.status=F,this.type=LOCK_CHANGES}}class PauseRecording{constructor(F){this.status=F,this.type=PAUSE_RECORDING}}function difference(Y,F){return Y.filter(y=>F.indexOf(y)<0)}function unliftState(Y){const{computedStates:F,currentStateIndex:y}=Y;if(y>=F.length){const{state:D}=F[F.length-1];return D}const{state:p}=F[y];return p}function unliftAction(Y){return Y.actionsById[Y.nextActionId-1]}function liftAction(Y){return new PerformAction(Y,+Date.now())}function sanitizeActions(Y,F){return Object.keys(F).reduce((y,p)=>{const D=Number(p);return y[D]=sanitizeAction(Y,F[D],D),y},{})}function sanitizeAction(Y,F,y){return{...F,action:Y(F.action,y)}}function sanitizeStates(Y,F){return F.map((y,p)=>({state:sanitizeState(Y,y.state,p),error:y.error}))}function sanitizeState(Y,F,y){return Y(F,y)}function shouldFilterActions(Y){return Y.predicate||Y.actionsSafelist||Y.actionsBlocklist}function filterLiftedState(Y,F,y,p){const D=[],X={},ne=[];return Y.stagedActionIds.forEach((P,G)=>{const j=Y.actionsById[P];!j||G&&isActionFiltered(Y.computedStates[G],j,F,y,p)||(X[P]=j,D.push(P),ne.push(Y.computedStates[G]))}),{...Y,stagedActionIds:D,actionsById:X,computedStates:ne}}function isActionFiltered(Y,F,y,p,D){const X=y&&!y(Y,F.action),ne=p&&!F.action.type.match(p.map(G=>escapeRegExp(G)).join("|")),P=D&&F.action.type.match(D.map(G=>escapeRegExp(G)).join("|"));return X||ne||P}function escapeRegExp(Y){return Y.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const INIT_ACTION={type:_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg},RECOMPUTE="@ngrx/store-devtools/recompute",RECOMPUTE_ACTION={type:RECOMPUTE};function computeNextEntry(Y,F,y,p,D){if(p)return{state:y,error:"Interrupted by an error up the chain"};let ne,X=y;try{X=Y(y,F)}catch(P){ne=P.toString(),D.handleError(P)}return{state:X,error:ne}}function recomputeStates(Y,F,y,p,D,X,ne,P,G){if(F>=Y.length&&Y.length===X.length)return Y;const j=Y.slice(0,F),$=X.length-(G?1:0);for(let L=F;L<$;L++){const J=X[L],Q=D[J].action,q=j[L-1],_e=q?q.state:p,ee=q?q.error:void 0,Se=ne.indexOf(J)>-1?q:computeNextEntry(y,Q,_e,ee,P);j.push(Se)}return G&&j.push(Y[Y.length-1]),j}function liftInitialState(Y,F){return{monitorState:F(void 0,{}),nextActionId:1,actionsById:{0:liftAction(INIT_ACTION)},stagedActionIds:[0],skippedActionIds:[],committedState:Y,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function liftReducerWith(Y,F,y,p,D={}){return X=>(ne,P)=>{let{monitorState:G,actionsById:j,nextActionId:$,stagedActionIds:L,skippedActionIds:J,committedState:Q,currentStateIndex:q,computedStates:_e,isLocked:ee,isPaused:le}=ne||F;function Se(We){let Ge=We,Ae=L.slice(1,Ge+1);for(let Ee=0;Ee<Ae.length;Ee++){if(_e[Ee+1].error){Ge=Ee,Ae=L.slice(1,Ge+1);break}delete j[Ae[Ee]]}J=J.filter(Ee=>-1===Ae.indexOf(Ee)),L=[0,...L.slice(Ge+1)],Q=_e[Ge].state,_e=_e.slice(Ge),q=q>Ge?q-Ge:0}function pe(){j={0:liftAction(INIT_ACTION)},$=1,L=[0],J=[],Q=_e[q].state,q=0,_e=[]}ne||(j=Object.create(j));let Oe=0;switch(P.type){case LOCK_CHANGES:ee=P.status,Oe=1/0;break;case PAUSE_RECORDING:le=P.status,le?(L=[...L,$],j[$]=new PerformAction({type:"@ngrx/devtools/pause"},+Date.now()),$++,Oe=L.length-1,_e=_e.concat(_e[_e.length-1]),q===L.length-2&&q++,Oe=1/0):pe();break;case RESET:j={0:liftAction(INIT_ACTION)},$=1,L=[0],J=[],Q=Y,q=0,_e=[];break;case COMMIT:pe();break;case ROLLBACK:j={0:liftAction(INIT_ACTION)},$=1,L=[0],J=[],q=0,_e=[];break;case TOGGLE_ACTION:{const{id:We}=P;J=-1===J.indexOf(We)?[We,...J]:J.filter(Ae=>Ae!==We),Oe=L.indexOf(We);break}case SET_ACTIONS_ACTIVE:{const{start:We,end:Ge,active:Ae}=P,Ee=[];for(let ke=We;ke<Ge;ke++)Ee.push(ke);J=Ae?difference(J,Ee):[...J,...Ee],Oe=L.indexOf(We);break}case JUMP_TO_STATE:q=P.index,Oe=1/0;break;case JUMP_TO_ACTION:{const We=L.indexOf(P.actionId);-1!==We&&(q=We),Oe=1/0;break}case SWEEP:L=difference(L,J),J=[],q=Math.min(q,L.length-1);break;case PERFORM_ACTION:{if(ee)return ne||F;if(le||ne&&isActionFiltered(ne.computedStates[q],P,D.predicate,D.actionsSafelist,D.actionsBlocklist)){const Ge=_e[_e.length-1];_e=[..._e.slice(0,-1),computeNextEntry(X,P.action,Ge.state,Ge.error,y)],Oe=1/0;break}D.maxAge&&L.length===D.maxAge&&Se(1),q===L.length-1&&q++;const We=$++;j[We]=P,L=[...L,We],Oe=L.length-1;break}case IMPORT_STATE:({monitorState:G,actionsById:j,nextActionId:$,stagedActionIds:L,skippedActionIds:J,committedState:Q,currentStateIndex:q,computedStates:_e,isLocked:ee,isPaused:le}=P.nextLiftedState);break;case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:Oe=0,D.maxAge&&L.length>D.maxAge&&(_e=recomputeStates(_e,Oe,X,Q,j,L,J,y,le),Se(L.length-D.maxAge),Oe=1/0);break;case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:if(_e.filter(Ge=>Ge.error).length>0)Oe=0,D.maxAge&&L.length>D.maxAge&&(_e=recomputeStates(_e,Oe,X,Q,j,L,J,y,le),Se(L.length-D.maxAge),Oe=1/0);else{if(!le&&!ee){q===L.length-1&&q++;const Ge=$++;j[Ge]=new PerformAction(P,+Date.now()),L=[...L,Ge],Oe=L.length-1,_e=recomputeStates(_e,Oe,X,Q,j,L,J,y,le)}_e=_e.map(Ge=>({...Ge,state:X(Ge.state,RECOMPUTE_ACTION)})),q=L.length-1,D.maxAge&&L.length>D.maxAge&&Se(L.length-D.maxAge),Oe=1/0}break;default:Oe=1/0}return _e=recomputeStates(_e,Oe,X,Q,j,L,J,y,le),G=p(G,P),{monitorState:G,actionsById:j,nextActionId:$,stagedActionIds:L,skippedActionIds:J,committedState:Q,currentStateIndex:q,computedStates:_e,isLocked:ee,isPaused:le}}}let DevtoolsDispatcher=(()=>{class Y extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO{}return Y.\u0275fac=function(){let F;return function(p){return(F||(F=_angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(Y)))(p||Y)}}(),Y.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:Y,factory:Y.\u0275fac}),Y})();const ExtensionActionTypes={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},REDUX_DEVTOOLS_EXTENSION=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Redux Devtools Extension");let DevtoolsExtension=(()=>{class DevtoolsExtension{constructor(Y,F,y){this.config=F,this.dispatcher=y,this.devtoolsExtension=Y,this.createActionStreams()}notify(Y,F){if(this.devtoolsExtension)if(Y.type===PERFORM_ACTION){if(F.isLocked||F.isPaused)return;const y=unliftState(F);if(shouldFilterActions(this.config)&&isActionFiltered(y,Y,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;const p=this.config.stateSanitizer?sanitizeState(this.config.stateSanitizer,y,F.currentStateIndex):y,D=this.config.actionSanitizer?sanitizeAction(this.config.actionSanitizer,Y,F.nextActionId):Y;this.sendToReduxDevtools(()=>this.extensionConnection.send(D,p))}else{const y={...F,stagedActionIds:F.stagedActionIds,actionsById:this.config.actionSanitizer?sanitizeActions(this.config.actionSanitizer,F.actionsById):F.actionsById,computedStates:this.config.stateSanitizer?sanitizeStates(this.config.stateSanitizer,F.computedStates):F.computedStates};this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,y,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new rxjs__WEBPACK_IMPORTED_MODULE_3__.y(Y=>{const F=this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=F,F.init(),F.subscribe(y=>Y.next(y)),F.unsubscribe}):rxjs__WEBPACK_IMPORTED_MODULE_2__.E}createActionStreams(){const Y=this.createChangesObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()),F=Y.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(P=>P.type===ExtensionActionTypes.START)),y=Y.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(P=>P.type===ExtensionActionTypes.STOP)),p=Y.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(P=>P.type===ExtensionActionTypes.DISPATCH),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(P=>this.unwrapAction(P.payload)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)(P=>P.type===IMPORT_STATE?this.dispatcher.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(G=>G.type===_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(1e3),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(1e3),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(()=>P),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(()=>(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(P)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)):(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(P))),X=Y.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(P=>P.type===ExtensionActionTypes.ACTION),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(P=>this.unwrapAction(P.payload))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(y)),ne=p.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(y));this.start$=F.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(y)),this.actions$=this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(()=>X)),this.liftedActions$=this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(()=>ne))}unwrapAction(action){return"string"==typeof action?eval(`(${action})`):action}getExtensionConfig(Y){const F={name:Y.name,features:Y.features,serialize:Y.serialize,autoPause:Y.autoPause??!1};return!1!==Y.maxAge&&(F.maxAge=Y.maxAge),F}sendToReduxDevtools(Y){try{Y()}catch(F){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",F)}}}return DevtoolsExtension.\u0275fac=function Y(F){return new(F||DevtoolsExtension)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(REDUX_DEVTOOLS_EXTENSION),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher))},DevtoolsExtension.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:DevtoolsExtension,factory:DevtoolsExtension.\u0275fac}),DevtoolsExtension})(),StoreDevtools=(()=>{class Y{constructor(y,p,D,X,ne,P,G,j){const $=liftInitialState(G,j.monitor),L=liftReducerWith(G,$,P,j.monitor,j),J=(0,rxjs__WEBPACK_IMPORTED_MODULE_15__.T)((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(p.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)),X.actions$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(liftAction)),y,X.liftedActions$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.Q)(rxjs__WEBPACK_IMPORTED_MODULE_18__.N)),Q=D.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(L)),q=new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),_e=J.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(Q),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(({state:pe},[Oe,We])=>{let Ge=We(pe,Oe);return Oe.type!==PERFORM_ACTION&&shouldFilterActions(j)&&(Ge=filterLiftedState(Ge,j.predicate,j.actionsSafelist,j.actionsBlocklist)),X.notify(Oe,Ge),{state:Ge,action:Oe}},{state:$,action:null})).subscribe(({state:pe,action:Oe})=>{q.next(pe),Oe.type===PERFORM_ACTION&&ne.next(Oe.action)}),ee=X.start$.subscribe(()=>{this.refresh()}),le=q.asObservable(),Se=le.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(unliftState));this.extensionStartSubscription=ee,this.stateSubscription=_e,this.dispatcher=y,this.liftedState=le,this.state=Se}dispatch(y){this.dispatcher.next(y)}next(y){this.dispatcher.next(y)}error(y){}complete(){}performAction(y){this.dispatch(new PerformAction(y,+Date.now()))}refresh(){this.dispatch(new Refresh)}reset(){this.dispatch(new Reset(+Date.now()))}rollback(){this.dispatch(new Rollback(+Date.now()))}commit(){this.dispatch(new Commit(+Date.now()))}sweep(){this.dispatch(new Sweep)}toggleAction(y){this.dispatch(new ToggleAction(y))}jumpToAction(y){this.dispatch(new JumpToAction(y))}jumpToState(y){this.dispatch(new JumpToState(y))}importState(y){this.dispatch(new ImportState(y))}lockChanges(y){this.dispatch(new LockChanges(y))}pauseRecording(y){this.dispatch(new PauseRecording(y))}}return Y.\u0275fac=function(y){return new(y||Y)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsExtension),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG))},Y.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:Y,factory:Y.\u0275fac}),Y})();const IS_EXTENSION_OR_MONITOR_PRESENT=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function createIsExtensionOrMonitorPresent(Y,F){return Boolean(Y)||F.monitor!==noMonitor}function createReduxDevtoolsExtension(){const Y="__REDUX_DEVTOOLS_EXTENSION__";return"object"==typeof window&&typeof window[Y]<"u"?window[Y]:null}function createStateObservable(Y){return Y.state}let StoreDevtoolsModule=(()=>{class Y{static instrument(y={}){return{ngModule:Y,providers:[DevtoolsExtension,DevtoolsDispatcher,StoreDevtools,{provide:INITIAL_OPTIONS,useValue:y},{provide:IS_EXTENSION_OR_MONITOR_PRESENT,deps:[REDUX_DEVTOOLS_EXTENSION,STORE_DEVTOOLS_CONFIG],useFactory:createIsExtensionOrMonitorPresent},{provide:REDUX_DEVTOOLS_EXTENSION,useFactory:createReduxDevtoolsExtension},{provide:STORE_DEVTOOLS_CONFIG,deps:[INITIAL_OPTIONS],useFactory:createConfig},{provide:_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,deps:[StoreDevtools],useFactory:createStateObservable},{provide:_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK,useExisting:DevtoolsDispatcher}]}}}return Y.\u0275fac=function(y){return new(y||Y)},Y.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:Y}),Y.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({}),Y})()},2997:(Y,F,y)=>{y.d(F,{UO:()=>se,qg:()=>it,Y6:()=>he,mK:()=>On,n$:()=>Wt,Y$:()=>U,FR:()=>ve,yh:()=>vt,CK:()=>ao,Aw:()=>uo,cr:()=>Nt,wb:()=>er,qC:()=>nt,PH:()=>Oe,ZF:()=>H,P1:()=>Gt,Ys:()=>yt});var p=y(4650),D=y(1135),X=y(8306),ne=y(7579),P=y(233),G=y(4004),$=y(4671),L=y(4482),J=y(5403);function q(x,ge){return x===ge}var _e=y(5363),ee=y(1365),le=y(5026);const Se={};function Oe(x,ge){if(Se[x]=(Se[x]||0)+1,"function"==typeof ge)return Ae(x,(...de)=>({...ge(...de),type:x}));switch(ge?ge._as:"empty"){case"empty":return Ae(x,()=>({type:x}));case"props":return Ae(x,de=>({...de,type:x}));default:throw new Error("Unexpected config.")}}function Ae(x,ge){return Object.defineProperty(ge,"type",{value:x,writable:!1})}const it="@ngrx/store/init";let se=(()=>{class x extends D.X{constructor(){super({type:it})}next(te){if("function"==typeof te)throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");if(typeof te>"u")throw new TypeError("Actions must be objects");if(typeof te.type>"u")throw new TypeError("Actions must have a type property");super.next(te)}complete(){}ngOnDestroy(){super.complete()}}return x.\u0275fac=function(te){return new(te||x)},x.\u0275prov=p.Yz7({token:x,factory:x.\u0275fac}),x})();const fe=[se],ie=new p.OlP("@ngrx/store Internal Root Guard"),De=new p.OlP("@ngrx/store Internal Initial State"),he=new p.OlP("@ngrx/store Initial State"),Ue=new p.OlP("@ngrx/store Reducer Factory"),at=new p.OlP("@ngrx/store Internal Reducer Factory Provider"),Dt=new p.OlP("@ngrx/store Initial Reducers"),Mt=new p.OlP("@ngrx/store Internal Initial Reducers"),Be=new p.OlP("@ngrx/store Store Features"),It=new p.OlP("@ngrx/store Internal Store Reducers"),ln=new p.OlP("@ngrx/store Internal Feature Reducers"),jt=new p.OlP("@ngrx/store Internal Feature Configs"),bt=new p.OlP("@ngrx/store Internal Store Features"),$t=new p.OlP("@ngrx/store Internal Feature Reducers Token"),on=new p.OlP("@ngrx/store Feature Reducers"),Ft=new p.OlP("@ngrx/store User Provided Meta Reducers"),pn=new p.OlP("@ngrx/store Meta Reducers"),Hn=new p.OlP("@ngrx/store Internal Resolved Meta Reducers"),sr=new p.OlP("@ngrx/store User Runtime Checks Config"),zn=new p.OlP("@ngrx/store Internal User Runtime Checks Config"),gn=new p.OlP("@ngrx/store Internal Runtime Checks"),Pn=new p.OlP("@ngrx/store Check if Action types are unique");function Ln(x,ge={}){const te=Object.keys(x),de={};for(let $e=0;$e<te.length;$e++){const wt=te[$e];"function"==typeof x[wt]&&(de[wt]=x[wt])}const Fe=Object.keys(de);return function(wt,zt){wt=void 0===wt?ge:wt;let Qt=!1;const yn={};for(let Ht=0;Ht<Fe.length;Ht++){const Zn=Fe[Ht],Oo=wt[Zn],Ar=(0,de[Zn])(Oo,zt);yn[Zn]=Ar,Qt=Qt||Ar!==Oo}return Qt?yn:wt}}function nt(...x){return function(ge){if(0===x.length)return ge;const te=x[x.length-1];return x.slice(0,-1).reduceRight((Fe,$e)=>$e(Fe),te(ge))}}function Kn(x,ge){return Array.isArray(ge)&&ge.length>0&&(x=nt.apply(null,[...ge,x])),(te,de)=>{const Fe=x(te);return($e,wt)=>Fe($e=void 0===$e?de:$e,wt)}}class Wt extends X.y{}class On extends se{}const er="@ngrx/store/update-reducers";let dn=(()=>{class x extends D.X{constructor(te,de,Fe,$e){super($e(Fe,de)),this.dispatcher=te,this.initialState=de,this.reducers=Fe,this.reducerFactory=$e}get currentReducers(){return this.reducers}addFeature(te){this.addFeatures([te])}addFeatures(te){const de=te.reduce((Fe,{reducers:$e,reducerFactory:wt,metaReducers:zt,initialState:Qt,key:yn})=>{const Ht="function"==typeof $e?function Xt(x){const ge=Array.isArray(x)&&x.length>0?nt(...x):te=>te;return(te,de)=>(te=ge(te),(Fe,$e)=>te(Fe=void 0===Fe?de:Fe,$e))}(zt)($e,Qt):Kn(wt,zt)($e,Qt);return Fe[yn]=Ht,Fe},{});this.addReducers(de)}removeFeature(te){this.removeFeatures([te])}removeFeatures(te){this.removeReducers(te.map(de=>de.key))}addReducer(te,de){this.addReducers({[te]:de})}addReducers(te){this.reducers={...this.reducers,...te},this.updateReducers(Object.keys(te))}removeReducer(te){this.removeReducers([te])}removeReducers(te){te.forEach(de=>{this.reducers=function $n(x,ge){return Object.keys(x).filter(te=>te!==ge).reduce((te,de)=>Object.assign(te,{[de]:x[de]}),{})}(this.reducers,de)}),this.updateReducers(te)}updateReducers(te){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:er,features:te})}ngOnDestroy(){this.complete()}}return x.\u0275fac=function(te){return new(te||x)(p.LFG(On),p.LFG(he),p.LFG(Dt),p.LFG(Ue))},x.\u0275prov=p.Yz7({token:x,factory:x.\u0275fac}),x})();const ue=[dn,{provide:Wt,useExisting:dn},{provide:On,useExisting:se}];let U=(()=>{class x extends ne.x{ngOnDestroy(){this.complete()}}return x.\u0275fac=function(){let ge;return function(de){return(ge||(ge=p.n5z(x)))(de||x)}}(),x.\u0275prov=p.Yz7({token:x,factory:x.\u0275fac}),x})();const W=[U];class ve extends X.y{}let re=(()=>{class x extends D.X{constructor(te,de,Fe,$e){super($e);const yn=te.pipe((0,_e.Q)(P.N)).pipe((0,ee.M)(de)).pipe((0,le.R)(Ne,{state:$e}));this.stateSubscription=yn.subscribe(({state:Ht,action:Zn})=>{this.next(Ht),Fe.next(Zn)})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}}return x.INIT=it,x.\u0275fac=function(te){return new(te||x)(p.LFG(se),p.LFG(Wt),p.LFG(U),p.LFG(he))},x.\u0275prov=p.Yz7({token:x,factory:x.\u0275fac}),x})();function Ne(x={state:void 0},[ge,te]){const{state:de}=x;return{state:te(de,ge),action:ge}}const Tt=[re,{provide:ve,useExisting:re}];let vt=(()=>{class x extends X.y{constructor(te,de,Fe){super(),this.actionsObserver=de,this.reducerManager=Fe,this.source=te}select(te,...de){return yt.call(null,te,...de)(this)}lift(te){const de=new x(this,this.actionsObserver,this.reducerManager);return de.operator=te,de}dispatch(te){this.actionsObserver.next(te)}next(te){this.actionsObserver.next(te)}error(te){this.actionsObserver.error(te)}complete(){this.actionsObserver.complete()}addReducer(te,de){this.reducerManager.addReducer(te,de)}removeReducer(te){this.reducerManager.removeReducer(te)}}return x.\u0275fac=function(te){return new(te||x)(p.LFG(ve),p.LFG(se),p.LFG(dn))},x.\u0275prov=p.Yz7({token:x,factory:x.\u0275fac}),x})();const je=[vt];function yt(x,ge,...te){return function(Fe){let $e;if("string"==typeof x){const wt=[ge,...te].filter(Boolean);$e=Fe.pipe(function j(...x){const ge=x.length;if(0===ge)throw new Error("list of properties cannot be empty.");return(0,G.U)(te=>{let de=te;for(let Fe=0;Fe<ge;Fe++){const $e=de?.[x[Fe]];if(!(typeof $e<"u"))return;de=$e}return de})}(x,...wt))}else{if("function"!=typeof x)throw new TypeError(`Unexpected type '${typeof x}' in select operator, expected 'string' or 'function'`);$e=Fe.pipe((0,G.U)(wt=>x(wt,ge)))}return $e.pipe(function Q(x,ge=$.y){return x=x??q,(0,L.e)((te,de)=>{let Fe,$e=!0;te.subscribe((0,J.x)(de,wt=>{const zt=ge(wt);($e||!x(Fe,zt))&&($e=!1,Fe=zt,de.next(wt))}))})}())}}const kt="https://ngrx.io/guide/store/configuration/runtime-checks";function tn(x){return void 0===x}function pt(x){return null===x}function Ct(x){return Array.isArray(x)}function ae(x){return"object"==typeof x&&null!==x}function Ve(x){return"function"==typeof x}function dt(x,ge){return x===ge}function St(x,ge,te){for(let de=0;de<x.length;de++)if(!te(x[de],ge[de]))return!0;return!1}function Ot(x,ge=dt,te=dt){let $e,de=null,Fe=null;return{memoized:function yn(){if(void 0!==$e)return $e.result;if(!de)return Fe=x.apply(null,arguments),de=arguments,Fe;if(!St(arguments,de,ge))return Fe;const Ht=x.apply(null,arguments);return de=arguments,te(Fe,Ht)?Fe:(Fe=Ht,Ht)},reset:function wt(){de=null,Fe=null},setResult:function zt(Ht){$e={result:Ht}},clearResult:function Qt(){$e=void 0}}}function Gt(...x){return function rt(x,ge={stateFn:xe}){return function(...te){let de=te;if(Array.isArray(de[0])){const[Ht,...Zn]=de;de=[...Ht,...Zn]}const Fe=de.slice(0,de.length-1),$e=de[de.length-1],wt=Fe.filter(Ht=>Ht.release&&"function"==typeof Ht.release),zt=x(function(...Ht){return $e.apply(null,Ht)}),Qt=Ot(function(Ht,Zn){return ge.stateFn.apply(null,[Ht,Fe,Zn,zt])});return Object.assign(Qt.memoized,{release:function yn(){Qt.reset(),zt.reset(),wt.forEach(Ht=>Ht.release())},projector:zt.memoized,setResult:Qt.setResult,clearResult:Qt.clearResult})}}(Ot)(...x)}function xe(x,ge,te,de){if(void 0===te){const $e=ge.map(wt=>wt(x));return de.memoized.apply(null,$e)}const Fe=ge.map($e=>$e(x,te));return de.memoized.apply(null,[...Fe,te])}function H(x){return Gt(ge=>{const te=ge[x];return(0,p.X6Q)()&&!(x in ge)&&console.warn(`@ngrx/store: The feature name "${x}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${x}', ...) or StoreModule.forFeature('${x}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),te},ge=>ge)}function Ke(x){Object.freeze(x);const ge=Ve(x);return Object.getOwnPropertyNames(x).forEach(te=>{if(!te.startsWith("\u0275")&&function lt(x,ge){return Object.prototype.hasOwnProperty.call(x,ge)}(x,te)&&(!ge||"caller"!==te&&"callee"!==te&&"arguments"!==te)){const de=x[te];(ae(de)||Ve(de))&&!Object.isFrozen(de)&&Ke(de)}}),x}function Vt(x,ge=[]){return(tn(x)||pt(x))&&0===ge.length?{path:["root"],value:x}:Object.keys(x).reduce((de,Fe)=>{if(de)return de;const $e=x[Fe];return function ct(x){return Ve(x)&&x.hasOwnProperty("\u0275cmp")}($e)?de:!(tn($e)||pt($e)||function In(x){return"number"==typeof x}($e)||function fn(x){return"boolean"==typeof x}($e)||function Qe(x){return"string"==typeof x}($e)||Ct($e))&&(function Ce(x){if(!function Ie(x){return ae(x)&&!Ct(x)}(x))return!1;const ge=Object.getPrototypeOf(x);return ge===Object.prototype||null===ge}($e)?Vt($e,[...ge,Fe]):{path:[...ge,Fe],value:$e})},!1)}function ot(x,ge){if(!1===x)return;const te=x.path.join("."),de=new Error(`Detected unserializable ${ge} at "${te}". ${kt}#strict${ge}serializability`);throw de.value=x.value,de.unserializablePath=te,de}function ar(x){return(0,p.X6Q)()?{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1,...x}:{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function fr({strictActionSerializability:x,strictStateSerializability:ge}){return te=>x||ge?function gt(x,ge){return function(te,de){ge.action(de)&&ot(Vt(de),"action");const Fe=x(te,de);return ge.state()&&ot(Vt(Fe),"state"),Fe}}(te,{action:de=>x&&!sn(de),state:()=>ge}):te}function ur({strictActionImmutability:x,strictStateImmutability:ge}){return te=>x||ge?function we(x,ge){return function(te,de){const Fe=ge.action(de)?Ke(de):de,$e=x(te,Fe);return ge.state()?Ke($e):$e}}(te,{action:de=>x&&!sn(de),state:()=>ge}):te}function sn(x){return x.type.startsWith("@ngrx")}function Cr({strictActionWithinNgZone:x}){return ge=>x?function Wn(x,ge){return function(te,de){if(ge.action(de)&&!p.R0b.isInAngularZone())throw new Error(`Action '${de.type}' running outside NgZone. ${kt}#strictactionwithinngzone`);return x(te,de)}}(ge,{action:te=>x&&!sn(te)}):ge}function kn(x){return[{provide:zn,useValue:x},{provide:sr,useFactory:cr,deps:[zn]},{provide:gn,deps:[sr],useFactory:ar},{provide:pn,multi:!0,deps:[gn],useFactory:ur},{provide:pn,multi:!0,deps:[gn],useFactory:fr},{provide:pn,multi:!0,deps:[gn],useFactory:Cr}]}function wn(){return[{provide:Pn,multi:!0,deps:[gn],useFactory:so}]}function cr(x){return x}function so(x){if(!x.strictActionTypeUniqueness)return;const ge=Object.entries(Se).filter(([,te])=>te>1).map(([te])=>te);if(ge.length)throw new Error(`Action types are registered more than once, ${ge.map(te=>`"${te}"`).join(", ")}. ${kt}#strictactiontypeuniqueness`)}let Nt=(()=>{class x{constructor(te,de,Fe,$e,wt,zt){}}return x.\u0275fac=function(te){return new(te||x)(p.LFG(se),p.LFG(Wt),p.LFG(U),p.LFG(vt),p.LFG(ie,8),p.LFG(Pn,8))},x.\u0275mod=p.oAB({type:x}),x.\u0275inj=p.cJS({}),x})(),ao=(()=>{class x{constructor(te,de,Fe,$e,wt){this.features=te,this.featureReducers=de,this.reducerManager=Fe;const zt=te.map((Qt,yn)=>{const Zn=de.shift()[yn];return{...Qt,reducers:Zn,initialState:Gn(Qt.initialState)}});Fe.addFeatures(zt)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}}return x.\u0275fac=function(te){return new(te||x)(p.LFG(bt),p.LFG(on),p.LFG(dn),p.LFG(Nt),p.LFG(Pn,8))},x.\u0275mod=p.oAB({type:x}),x.\u0275inj=p.cJS({}),x})(),uo=(()=>{class x{static forRoot(te,de={}){return{ngModule:Nt,providers:[{provide:ie,useFactory:an,deps:[[vt,new p.FiY,new p.tp0]]},{provide:De,useValue:de.initialState},{provide:he,useFactory:Gn,deps:[De]},{provide:Mt,useValue:te},{provide:It,useExisting:te instanceof p.OlP?te:Mt},{provide:Dt,deps:[p.zs3,Mt,[new p.tBr(It)]],useFactory:hr},{provide:Ft,useValue:de.metaReducers?de.metaReducers:[]},{provide:Hn,deps:[pn,Ft],useFactory:Yn},{provide:at,useValue:de.reducerFactory?de.reducerFactory:Ln},{provide:Ue,deps:[at,Hn],useFactory:Kn},fe,ue,W,Tt,je,kn(de.runtimeChecks),wn()]}}static forFeature(te,de,Fe={}){return{ngModule:ao,providers:[{provide:jt,multi:!0,useValue:te instanceof Object?{}:Fe},{provide:Be,multi:!0,useValue:{key:te instanceof Object?te.name:te,reducerFactory:Fe instanceof p.OlP||!Fe.reducerFactory?Ln:Fe.reducerFactory,metaReducers:Fe instanceof p.OlP||!Fe.metaReducers?[]:Fe.metaReducers,initialState:Fe instanceof p.OlP||!Fe.initialState?void 0:Fe.initialState}},{provide:bt,deps:[p.zs3,jt,Be],useFactory:pr},{provide:ln,multi:!0,useValue:te instanceof Object?te.reducer:de},{provide:$t,multi:!0,useExisting:de instanceof p.OlP?de:ln},{provide:on,multi:!0,deps:[p.zs3,ln,[new p.tBr($t)]],useFactory:bn},wn()]}}}return x.\u0275fac=function(te){return new(te||x)},x.\u0275mod=p.oAB({type:x}),x.\u0275inj=p.cJS({}),x})();function hr(x,ge){return ge instanceof p.OlP?x.get(ge):ge}function pr(x,ge,te){return te.map((de,Fe)=>{if(ge[Fe]instanceof p.OlP){const $e=x.get(ge[Fe]);return{key:de.key,reducerFactory:$e.reducerFactory?$e.reducerFactory:Ln,metaReducers:$e.metaReducers?$e.metaReducers:[],initialState:$e.initialState}}return de})}function bn(x,ge){return ge.map(de=>de instanceof p.OlP?x.get(de):de)}function Gn(x){return"function"==typeof x?x():x}function Yn(x,ge){return x.concat(ge)}function an(x){if(x)throw new TypeError("StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead.");return"guarded"}}}]);