"use strict";(self.webpackChunkAngular_demo=self.webpackChunkAngular_demo||[]).push([["vendor"],{1135:(z,N,D)=>{D.d(N,{X:()=>E});var m=D(7579);class E extends m.x{constructor(J){super(),this._value=J}get value(){return this.getValue()}_subscribe(J){const F=super._subscribe(J);return!F.closed&&J.next(this._value),F}getValue(){const{hasError:J,thrownError:F,_value:W}=this;if(J)throw F;return this._throwIfClosed(),W}next(J){super.next(this._value=J)}}},8306:(z,N,D)=>{D.d(N,{y:()=>ee});var m=D(930),E=D(727),Y=D(8822),J=D(4671);var V=D(2416),$=D(576),k=D(2806);let ee=(()=>{class X{constructor(we){we&&(this._subscribe=we)}lift(we){const he=new X;return he.source=this,he.operator=we,he}subscribe(we,he,Ie){const Be=function pe(X){return X&&X instanceof m.Lv||function q(X){return X&&(0,$.m)(X.next)&&(0,$.m)(X.error)&&(0,$.m)(X.complete)}(X)&&(0,E.Nn)(X)}(we)?we:new m.Hp(we,he,Ie);return(0,k.x)(()=>{const{operator:Ue,source:Me}=this;Be.add(Ue?Ue.call(Be,Me):Me?this._subscribe(Be):this._trySubscribe(Be))}),Be}_trySubscribe(we){try{return this._subscribe(we)}catch(he){we.error(he)}}forEach(we,he){return new(he=K(he))((Ie,Be)=>{const Ue=new m.Hp({next:Me=>{try{we(Me)}catch(De){Be(De),Ue.unsubscribe()}},error:Be,complete:Ie});this.subscribe(Ue)})}_subscribe(we){var he;return null===(he=this.source)||void 0===he?void 0:he.subscribe(we)}[Y.L](){return this}pipe(...we){return function W(X){return 0===X.length?J.y:1===X.length?X[0]:function(we){return X.reduce((he,Ie)=>Ie(he),we)}}(we)(this)}toPromise(we){return new(we=K(we))((he,Ie)=>{let Be;this.subscribe(Ue=>Be=Ue,Ue=>Ie(Ue),()=>he(Be))})}}return X.create=ue=>new X(ue),X})();function K(X){var ue;return null!==(ue=X??V.v.Promise)&&void 0!==ue?ue:Promise}},4707:(z,N,D)=>{D.d(N,{t:()=>Y});var m=D(7579),E=D(6063);class Y extends m.x{constructor(F=1/0,W=1/0,V=E.l){super(),this._bufferSize=F,this._windowTime=W,this._timestampProvider=V,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=W===1/0,this._bufferSize=Math.max(1,F),this._windowTime=Math.max(1,W)}next(F){const{isStopped:W,_buffer:V,_infiniteTimeWindow:$,_timestampProvider:k,_windowTime:ee}=this;W||(V.push(F),!$&&V.push(k.now()+ee)),this._trimBuffer(),super.next(F)}_subscribe(F){this._throwIfClosed(),this._trimBuffer();const W=this._innerSubscribe(F),{_infiniteTimeWindow:V,_buffer:$}=this,k=$.slice();for(let ee=0;ee<k.length&&!F.closed;ee+=V?1:2)F.next(k[ee]);return this._checkFinalizedStatuses(F),W}_trimBuffer(){const{_bufferSize:F,_timestampProvider:W,_buffer:V,_infiniteTimeWindow:$}=this,k=($?1:2)*F;if(F<1/0&&k<V.length&&V.splice(0,V.length-k),!$){const ee=W.now();let K=0;for(let q=1;q<V.length&&V[q]<=ee;q+=2)K=q;K&&V.splice(0,K+1)}}}},7579:(z,N,D)=>{D.d(N,{x:()=>V});var m=D(8306),E=D(727);const J=(0,D(3888).d)(k=>function(){k(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var F=D(8737),W=D(2806);let V=(()=>{class k extends m.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(K){const q=new $(this,this);return q.operator=K,q}_throwIfClosed(){if(this.closed)throw new J}next(K){(0,W.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const q of this.currentObservers)q.next(K)}})}error(K){(0,W.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=K;const{observers:q}=this;for(;q.length;)q.shift().error(K)}})}complete(){(0,W.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:K}=this;for(;K.length;)K.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var K;return(null===(K=this.observers)||void 0===K?void 0:K.length)>0}_trySubscribe(K){return this._throwIfClosed(),super._trySubscribe(K)}_subscribe(K){return this._throwIfClosed(),this._checkFinalizedStatuses(K),this._innerSubscribe(K)}_innerSubscribe(K){const{hasError:q,isStopped:pe,observers:X}=this;return q||pe?E.Lc:(this.currentObservers=null,X.push(K),new E.w0(()=>{this.currentObservers=null,(0,F.P)(X,K)}))}_checkFinalizedStatuses(K){const{hasError:q,thrownError:pe,isStopped:X}=this;q?K.error(pe):X&&K.complete()}asObservable(){const K=new m.y;return K.source=this,K}}return k.create=(ee,K)=>new $(ee,K),k})();class $ extends V{constructor(ee,K){super(),this.destination=ee,this.source=K}next(ee){var K,q;null===(q=null===(K=this.destination)||void 0===K?void 0:K.next)||void 0===q||q.call(K,ee)}error(ee){var K,q;null===(q=null===(K=this.destination)||void 0===K?void 0:K.error)||void 0===q||q.call(K,ee)}complete(){var ee,K;null===(K=null===(ee=this.destination)||void 0===ee?void 0:ee.complete)||void 0===K||K.call(ee)}_subscribe(ee){var K,q;return null!==(q=null===(K=this.source)||void 0===K?void 0:K.subscribe(ee))&&void 0!==q?q:E.Lc}}},930:(z,N,D)=>{D.d(N,{Hp:()=>we,Lv:()=>q});var m=D(576),E=D(727),Y=D(2416),J=D(7849),F=D(5032);const W=k("C",void 0,void 0);function k(Me,De,Pe){return{kind:Me,value:De,error:Pe}}var ee=D(3410),K=D(2806);class q extends E.w0{constructor(De){super(),this.isStopped=!1,De?(this.destination=De,(0,E.Nn)(De)&&De.add(this)):this.destination=Ue}static create(De,Pe,$e){return new we(De,Pe,$e)}next(De){this.isStopped?Be(function $(Me){return k("N",Me,void 0)}(De),this):this._next(De)}error(De){this.isStopped?Be(function V(Me){return k("E",void 0,Me)}(De),this):(this.isStopped=!0,this._error(De))}complete(){this.isStopped?Be(W,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(De){this.destination.next(De)}_error(De){try{this.destination.error(De)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const pe=Function.prototype.bind;function X(Me,De){return pe.call(Me,De)}class ue{constructor(De){this.partialObserver=De}next(De){const{partialObserver:Pe}=this;if(Pe.next)try{Pe.next(De)}catch($e){he($e)}}error(De){const{partialObserver:Pe}=this;if(Pe.error)try{Pe.error(De)}catch($e){he($e)}else he(De)}complete(){const{partialObserver:De}=this;if(De.complete)try{De.complete()}catch(Pe){he(Pe)}}}class we extends q{constructor(De,Pe,$e){let Ke;if(super(),(0,m.m)(De)||!De)Ke={next:De??void 0,error:Pe??void 0,complete:$e??void 0};else{let Re;this&&Y.v.useDeprecatedNextContext?(Re=Object.create(De),Re.unsubscribe=()=>this.unsubscribe(),Ke={next:De.next&&X(De.next,Re),error:De.error&&X(De.error,Re),complete:De.complete&&X(De.complete,Re)}):Ke=De}this.destination=new ue(Ke)}}function he(Me){Y.v.useDeprecatedSynchronousErrorHandling?(0,K.O)(Me):(0,J.h)(Me)}function Be(Me,De){const{onStoppedNotification:Pe}=Y.v;Pe&&ee.z.setTimeout(()=>Pe(Me,De))}const Ue={closed:!0,next:F.Z,error:function Ie(Me){throw Me},complete:F.Z}},727:(z,N,D)=>{D.d(N,{Lc:()=>W,w0:()=>F,Nn:()=>V});var m=D(576);const Y=(0,D(3888).d)(k=>function(K){k(this),this.message=K?`${K.length} errors occurred during unsubscription:\n${K.map((q,pe)=>`${pe+1}) ${q.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=K});var J=D(8737);class F{constructor(ee){this.initialTeardown=ee,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let ee;if(!this.closed){this.closed=!0;const{_parentage:K}=this;if(K)if(this._parentage=null,Array.isArray(K))for(const X of K)X.remove(this);else K.remove(this);const{initialTeardown:q}=this;if((0,m.m)(q))try{q()}catch(X){ee=X instanceof Y?X.errors:[X]}const{_finalizers:pe}=this;if(pe){this._finalizers=null;for(const X of pe)try{$(X)}catch(ue){ee=ee??[],ue instanceof Y?ee=[...ee,...ue.errors]:ee.push(ue)}}if(ee)throw new Y(ee)}}add(ee){var K;if(ee&&ee!==this)if(this.closed)$(ee);else{if(ee instanceof F){if(ee.closed||ee._hasParent(this))return;ee._addParent(this)}(this._finalizers=null!==(K=this._finalizers)&&void 0!==K?K:[]).push(ee)}}_hasParent(ee){const{_parentage:K}=this;return K===ee||Array.isArray(K)&&K.includes(ee)}_addParent(ee){const{_parentage:K}=this;this._parentage=Array.isArray(K)?(K.push(ee),K):K?[K,ee]:ee}_removeParent(ee){const{_parentage:K}=this;K===ee?this._parentage=null:Array.isArray(K)&&(0,J.P)(K,ee)}remove(ee){const{_finalizers:K}=this;K&&(0,J.P)(K,ee),ee instanceof F&&ee._removeParent(this)}}F.EMPTY=(()=>{const k=new F;return k.closed=!0,k})();const W=F.EMPTY;function V(k){return k instanceof F||k&&"closed"in k&&(0,m.m)(k.remove)&&(0,m.m)(k.add)&&(0,m.m)(k.unsubscribe)}function $(k){(0,m.m)(k)?k():k.unsubscribe()}},2416:(z,N,D)=>{D.d(N,{v:()=>m});const m={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},9841:(z,N,D)=>{D.d(N,{a:()=>ee});var m=D(8306),E=D(4742),Y=D(457),J=D(4671),F=D(3268),W=D(7669),V=D(1810),$=D(5403),k=D(9672);function ee(...pe){const X=(0,W.yG)(pe),ue=(0,W.jO)(pe),{args:we,keys:he}=(0,E.D)(pe);if(0===we.length)return(0,Y.D)([],X);const Ie=new m.y(function K(pe,X,ue=J.y){return we=>{q(X,()=>{const{length:he}=pe,Ie=new Array(he);let Be=he,Ue=he;for(let Me=0;Me<he;Me++)q(X,()=>{const De=(0,Y.D)(pe[Me],X);let Pe=!1;De.subscribe((0,$.x)(we,$e=>{Ie[Me]=$e,Pe||(Pe=!0,Ue--),Ue||we.next(ue(Ie.slice()))},()=>{--Be||we.complete()}))},we)},we)}}(we,X,he?Be=>(0,V.n)(he,Be):J.y));return ue?Ie.pipe((0,F.Z)(ue)):Ie}function q(pe,X,ue){pe?(0,k.f)(ue,pe,X):X()}},7272:(z,N,D)=>{D.d(N,{z:()=>F});var m=D(8189),Y=D(7669),J=D(457);function F(...W){return function E(){return(0,m.J)(1)}()((0,J.D)(W,(0,Y.yG)(W)))}},515:(z,N,D)=>{D.d(N,{E:()=>E});const E=new(D(8306).y)(F=>F.complete())},457:(z,N,D)=>{D.d(N,{D:()=>Pe});var m=D(8421),E=D(5363),Y=D(4482);function J($e,Ke=0){return(0,Y.e)((Re,tt)=>{tt.add($e.schedule(()=>Re.subscribe(tt),Ke))})}var V=D(8306),k=D(2202),ee=D(576),K=D(9672);function pe($e,Ke){if(!$e)throw new Error("Iterable cannot be null");return new V.y(Re=>{(0,K.f)(Re,Ke,()=>{const tt=$e[Symbol.asyncIterator]();(0,K.f)(Re,Ke,()=>{tt.next().then(oe=>{oe.done?Re.complete():Re.next(oe.value)})},0,!0)})})}var X=D(3670),ue=D(8239),we=D(1144),he=D(6495),Ie=D(2206),Be=D(4532),Ue=D(3260);function Pe($e,Ke){return Ke?function De($e,Ke){if(null!=$e){if((0,X.c)($e))return function F($e,Ke){return(0,m.Xf)($e).pipe(J(Ke),(0,E.Q)(Ke))}($e,Ke);if((0,we.z)($e))return function $($e,Ke){return new V.y(Re=>{let tt=0;return Ke.schedule(function(){tt===$e.length?Re.complete():(Re.next($e[tt++]),Re.closed||this.schedule())})})}($e,Ke);if((0,ue.t)($e))return function W($e,Ke){return(0,m.Xf)($e).pipe(J(Ke),(0,E.Q)(Ke))}($e,Ke);if((0,Ie.D)($e))return pe($e,Ke);if((0,he.T)($e))return function q($e,Ke){return new V.y(Re=>{let tt;return(0,K.f)(Re,Ke,()=>{tt=$e[k.h](),(0,K.f)(Re,Ke,()=>{let oe,le;try{({value:oe,done:le}=tt.next())}catch(re){return void Re.error(re)}le?Re.complete():Re.next(oe)},0,!0)}),()=>(0,ee.m)(tt?.return)&&tt.return()})}($e,Ke);if((0,Ue.L)($e))return function Me($e,Ke){return pe((0,Ue.Q)($e),Ke)}($e,Ke)}throw(0,Be.z)($e)}($e,Ke):(0,m.Xf)($e)}},8421:(z,N,D)=>{D.d(N,{Xf:()=>pe});var m=D(655),E=D(1144),Y=D(8239),J=D(8306),F=D(3670),W=D(2206),V=D(4532),$=D(6495),k=D(3260),ee=D(576),K=D(7849),q=D(8822);function pe(Me){if(Me instanceof J.y)return Me;if(null!=Me){if((0,F.c)(Me))return function X(Me){return new J.y(De=>{const Pe=Me[q.L]();if((0,ee.m)(Pe.subscribe))return Pe.subscribe(De);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(Me);if((0,E.z)(Me))return function ue(Me){return new J.y(De=>{for(let Pe=0;Pe<Me.length&&!De.closed;Pe++)De.next(Me[Pe]);De.complete()})}(Me);if((0,Y.t)(Me))return function we(Me){return new J.y(De=>{Me.then(Pe=>{De.closed||(De.next(Pe),De.complete())},Pe=>De.error(Pe)).then(null,K.h)})}(Me);if((0,W.D)(Me))return Ie(Me);if((0,$.T)(Me))return function he(Me){return new J.y(De=>{for(const Pe of Me)if(De.next(Pe),De.closed)return;De.complete()})}(Me);if((0,k.L)(Me))return function Be(Me){return Ie((0,k.Q)(Me))}(Me)}throw(0,V.z)(Me)}function Ie(Me){return new J.y(De=>{(function Ue(Me,De){var Pe,$e,Ke,Re;return(0,m.mG)(this,void 0,void 0,function*(){try{for(Pe=(0,m.KL)(Me);!($e=yield Pe.next()).done;)if(De.next($e.value),De.closed)return}catch(tt){Ke={error:tt}}finally{try{$e&&!$e.done&&(Re=Pe.return)&&(yield Re.call(Pe))}finally{if(Ke)throw Ke.error}}De.complete()})})(Me,De).catch(Pe=>De.error(Pe))})}},6451:(z,N,D)=>{D.d(N,{T:()=>W});var m=D(8189),E=D(8421),Y=D(515),J=D(7669),F=D(457);function W(...V){const $=(0,J.yG)(V),k=(0,J._6)(V,1/0),ee=V;return ee.length?1===ee.length?(0,E.Xf)(ee[0]):(0,m.J)(k)((0,F.D)(ee,$)):Y.E}},9646:(z,N,D)=>{D.d(N,{of:()=>Y});var m=D(7669),E=D(457);function Y(...J){const F=(0,m.yG)(J);return(0,E.D)(J,F)}},2843:(z,N,D)=>{D.d(N,{_:()=>Y});var m=D(8306),E=D(576);function Y(J,F){const W=(0,E.m)(J)?J:()=>J,V=$=>$.error(W());return new m.y(F?$=>F.schedule(V,0,$):V)}},5403:(z,N,D)=>{D.d(N,{Q:()=>Y,x:()=>E});var m=D(930);function E(J,F,W,V,$){return new Y(J,F,W,V,$)}class Y extends m.Lv{constructor(F,W,V,$,k,ee){super(F),this.onFinalize=k,this.shouldUnsubscribe=ee,this._next=W?function(K){try{W(K)}catch(q){F.error(q)}}:super._next,this._error=$?function(K){try{$(K)}catch(q){F.error(q)}finally{this.unsubscribe()}}:super._error,this._complete=V?function(){try{V()}catch(K){F.error(K)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var F;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:W}=this;super.unsubscribe(),!W&&(null===(F=this.onFinalize)||void 0===F||F.call(this))}}}},262:(z,N,D)=>{D.d(N,{K:()=>J});var m=D(8421),E=D(5403),Y=D(4482);function J(F){return(0,Y.e)((W,V)=>{let ee,$=null,k=!1;$=W.subscribe((0,E.x)(V,void 0,void 0,K=>{ee=(0,m.Xf)(F(K,J(F)(W))),$?($.unsubscribe(),$=null,ee.subscribe(V)):k=!0})),k&&($.unsubscribe(),$=null,ee.subscribe(V))})}},4351:(z,N,D)=>{D.d(N,{b:()=>Y});var m=D(5577),E=D(576);function Y(J,F){return(0,E.m)(F)?(0,m.z)(J,F,1):(0,m.z)(J,1)}},8372:(z,N,D)=>{D.d(N,{b:()=>J});var m=D(4986),E=D(4482),Y=D(5403);function J(F,W=m.z){return(0,E.e)((V,$)=>{let k=null,ee=null,K=null;const q=()=>{if(k){k.unsubscribe(),k=null;const X=ee;ee=null,$.next(X)}};function pe(){const X=K+F,ue=W.now();if(ue<X)return k=this.schedule(void 0,X-ue),void $.add(k);q()}V.subscribe((0,Y.x)($,X=>{ee=X,K=W.now(),k||(k=W.schedule(pe,F),$.add(k))},()=>{q(),$.complete()},void 0,()=>{ee=k=null}))})}},9300:(z,N,D)=>{D.d(N,{h:()=>Y});var m=D(4482),E=D(5403);function Y(J,F){return(0,m.e)((W,V)=>{let $=0;W.subscribe((0,E.x)(V,k=>J.call(F,k,$++)&&V.next(k)))})}},8746:(z,N,D)=>{D.d(N,{x:()=>E});var m=D(4482);function E(Y){return(0,m.e)((J,F)=>{try{J.subscribe(F)}finally{F.add(Y)}})}},4004:(z,N,D)=>{D.d(N,{U:()=>Y});var m=D(4482),E=D(5403);function Y(J,F){return(0,m.e)((W,V)=>{let $=0;W.subscribe((0,E.x)(V,k=>{V.next(J.call(F,k,$++))}))})}},8189:(z,N,D)=>{D.d(N,{J:()=>Y});var m=D(5577),E=D(4671);function Y(J=1/0){return(0,m.z)(E.y,J)}},5577:(z,N,D)=>{D.d(N,{z:()=>$});var m=D(4004),E=D(8421),Y=D(4482),J=D(9672),F=D(5403),V=D(576);function $(k,ee,K=1/0){return(0,V.m)(ee)?$((q,pe)=>(0,m.U)((X,ue)=>ee(q,X,pe,ue))((0,E.Xf)(k(q,pe))),K):("number"==typeof ee&&(K=ee),(0,Y.e)((q,pe)=>function W(k,ee,K,q,pe,X,ue,we){const he=[];let Ie=0,Be=0,Ue=!1;const Me=()=>{Ue&&!he.length&&!Ie&&ee.complete()},De=$e=>Ie<q?Pe($e):he.push($e),Pe=$e=>{X&&ee.next($e),Ie++;let Ke=!1;(0,E.Xf)(K($e,Be++)).subscribe((0,F.x)(ee,Re=>{pe?.(Re),X?De(Re):ee.next(Re)},()=>{Ke=!0},void 0,()=>{if(Ke)try{for(Ie--;he.length&&Ie<q;){const Re=he.shift();ue?(0,J.f)(ee,ue,()=>Pe(Re)):Pe(Re)}Me()}catch(Re){ee.error(Re)}}))};return k.subscribe((0,F.x)(ee,De,()=>{Ue=!0,Me()})),()=>{we?.()}}(q,pe,k,K)))}},5363:(z,N,D)=>{D.d(N,{Q:()=>J});var m=D(9672),E=D(4482),Y=D(5403);function J(F,W=0){return(0,E.e)((V,$)=>{V.subscribe((0,Y.x)($,k=>(0,m.f)($,F,()=>$.next(k),W),()=>(0,m.f)($,F,()=>$.complete(),W),k=>(0,m.f)($,F,()=>$.error(k),W)))})}},5026:(z,N,D)=>{D.d(N,{R:()=>J});var m=D(4482),E=D(5403);function Y(F,W,V,$,k){return(ee,K)=>{let q=V,pe=W,X=0;ee.subscribe((0,E.x)(K,ue=>{const we=X++;pe=q?F(pe,ue,we):(q=!0,ue),$&&K.next(pe)},k&&(()=>{q&&K.next(pe),K.complete()})))}}function J(F,W){return(0,m.e)(Y(F,W,arguments.length>=2,!0))}},3099:(z,N,D)=>{D.d(N,{B:()=>W});var m=D(457),E=D(5698),Y=D(7579),J=D(930),F=D(4482);function W($={}){const{connector:k=(()=>new Y.x),resetOnError:ee=!0,resetOnComplete:K=!0,resetOnRefCountZero:q=!0}=$;return pe=>{let X=null,ue=null,we=null,he=0,Ie=!1,Be=!1;const Ue=()=>{ue?.unsubscribe(),ue=null},Me=()=>{Ue(),X=we=null,Ie=Be=!1},De=()=>{const Pe=X;Me(),Pe?.unsubscribe()};return(0,F.e)((Pe,$e)=>{he++,!Be&&!Ie&&Ue();const Ke=we=we??k();$e.add(()=>{he--,0===he&&!Be&&!Ie&&(ue=V(De,q))}),Ke.subscribe($e),X||(X=new J.Hp({next:Re=>Ke.next(Re),error:Re=>{Be=!0,Ue(),ue=V(Me,ee,Re),Ke.error(Re)},complete:()=>{Ie=!0,Ue(),ue=V(Me,K),Ke.complete()}}),(0,m.D)(Pe).subscribe(X))})(pe)}}function V($,k,...ee){return!0===k?($(),null):!1===k?null:k(...ee).pipe((0,E.q)(1)).subscribe(()=>$())}},5684:(z,N,D)=>{D.d(N,{T:()=>E});var m=D(9300);function E(Y){return(0,m.h)((J,F)=>Y<=F)}},8675:(z,N,D)=>{D.d(N,{O:()=>J});var m=D(7272),E=D(7669),Y=D(4482);function J(...F){const W=(0,E.yG)(F);return(0,Y.e)((V,$)=>{(W?(0,m.z)(F,V,W):(0,m.z)(F,V)).subscribe($)})}},3900:(z,N,D)=>{D.d(N,{w:()=>J});var m=D(8421),E=D(4482),Y=D(5403);function J(F,W){return(0,E.e)((V,$)=>{let k=null,ee=0,K=!1;const q=()=>K&&!k&&$.complete();V.subscribe((0,Y.x)($,pe=>{k?.unsubscribe();let X=0;const ue=ee++;(0,m.Xf)(F(pe,ue)).subscribe(k=(0,Y.x)($,we=>$.next(W?W(pe,we,ue,X++):we),()=>{k=null,q()}))},()=>{K=!0,q()}))})}},5698:(z,N,D)=>{D.d(N,{q:()=>J});var m=D(515),E=D(4482),Y=D(5403);function J(F){return F<=0?()=>m.E:(0,E.e)((W,V)=>{let $=0;W.subscribe((0,Y.x)(V,k=>{++$<=F&&(V.next(k),F<=$&&V.complete())}))})}},2722:(z,N,D)=>{D.d(N,{R:()=>F});var m=D(4482),E=D(5403),Y=D(8421),J=D(5032);function F(W){return(0,m.e)((V,$)=>{(0,Y.Xf)(W).subscribe((0,E.x)($,()=>$.complete(),J.Z)),!$.closed&&V.subscribe($)})}},8505:(z,N,D)=>{D.d(N,{b:()=>F});var m=D(576),E=D(4482),Y=D(5403),J=D(4671);function F(W,V,$){const k=(0,m.m)(W)||V||$?{next:W,error:V,complete:$}:W;return k?(0,E.e)((ee,K)=>{var q;null===(q=k.subscribe)||void 0===q||q.call(k);let pe=!0;ee.subscribe((0,Y.x)(K,X=>{var ue;null===(ue=k.next)||void 0===ue||ue.call(k,X),K.next(X)},()=>{var X;pe=!1,null===(X=k.complete)||void 0===X||X.call(k),K.complete()},X=>{var ue;pe=!1,null===(ue=k.error)||void 0===ue||ue.call(k,X),K.error(X)},()=>{var X,ue;pe&&(null===(X=k.unsubscribe)||void 0===X||X.call(k)),null===(ue=k.finalize)||void 0===ue||ue.call(k)}))}):J.y}},1749:(z,N,D)=>{D.d(N,{V:()=>k});var m=D(4986),Y=D(4482),J=D(8421),F=D(3888),W=D(5403),V=D(9672);const $=(0,F.d)(K=>function(pe=null){K(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=pe});function k(K,q){const{first:pe,each:X,with:ue=ee,scheduler:we=q??m.z,meta:he=null}=function E(K){return K instanceof Date&&!isNaN(K)}(K)?{first:K}:"number"==typeof K?{each:K}:K;if(null==pe&&null==X)throw new TypeError("No timeout provided.");return(0,Y.e)((Ie,Be)=>{let Ue,Me,De=null,Pe=0;const $e=Ke=>{Me=(0,V.f)(Be,we,()=>{try{Ue.unsubscribe(),(0,J.Xf)(ue({meta:he,lastValue:De,seen:Pe})).subscribe(Be)}catch(Re){Be.error(Re)}},Ke)};Ue=Ie.subscribe((0,W.x)(Be,Ke=>{Me?.unsubscribe(),Pe++,Be.next(De=Ke),X>0&&$e(X)},void 0,void 0,()=>{Me?.closed||Me?.unsubscribe(),De=null})),!Pe&&$e(null!=pe?"number"==typeof pe?pe:+pe-we.now():X)})}function ee(K){throw new $(K)}},1365:(z,N,D)=>{D.d(N,{M:()=>V});var m=D(4482),E=D(5403),Y=D(8421),J=D(4671),F=D(5032),W=D(7669);function V(...$){const k=(0,W.jO)($);return(0,m.e)((ee,K)=>{const q=$.length,pe=new Array(q);let X=$.map(()=>!1),ue=!1;for(let we=0;we<q;we++)(0,Y.Xf)($[we]).subscribe((0,E.x)(K,he=>{pe[we]=he,!ue&&!X[we]&&(X[we]=!0,(ue=X.every(J.y))&&(X=null))},F.Z));ee.subscribe((0,E.x)(K,we=>{if(ue){const he=[we,...pe];K.next(k?k(...he):he)}}))})}},4408:(z,N,D)=>{D.d(N,{o:()=>F});var m=D(727);class E extends m.w0{constructor(V,$){super()}schedule(V,$=0){return this}}const Y={setInterval(W,V,...$){const{delegate:k}=Y;return k?.setInterval?k.setInterval(W,V,...$):setInterval(W,V,...$)},clearInterval(W){const{delegate:V}=Y;return(V?.clearInterval||clearInterval)(W)},delegate:void 0};var J=D(8737);class F extends E{constructor(V,$){super(V,$),this.scheduler=V,this.work=$,this.pending=!1}schedule(V,$=0){if(this.closed)return this;this.state=V;const k=this.id,ee=this.scheduler;return null!=k&&(this.id=this.recycleAsyncId(ee,k,$)),this.pending=!0,this.delay=$,this.id=this.id||this.requestAsyncId(ee,this.id,$),this}requestAsyncId(V,$,k=0){return Y.setInterval(V.flush.bind(V,this),k)}recycleAsyncId(V,$,k=0){if(null!=k&&this.delay===k&&!1===this.pending)return $;Y.clearInterval($)}execute(V,$){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const k=this._execute(V,$);if(k)return k;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(V,$){let ee,k=!1;try{this.work(V)}catch(K){k=!0,ee=K||new Error("Scheduled action threw falsy error")}if(k)return this.unsubscribe(),ee}unsubscribe(){if(!this.closed){const{id:V,scheduler:$}=this,{actions:k}=$;this.work=this.state=this.scheduler=null,this.pending=!1,(0,J.P)(k,this),null!=V&&(this.id=this.recycleAsyncId($,V,null)),this.delay=null,super.unsubscribe()}}}},7565:(z,N,D)=>{D.d(N,{v:()=>Y});var m=D(6063);class E{constructor(F,W=E.now){this.schedulerActionCtor=F,this.now=W}schedule(F,W=0,V){return new this.schedulerActionCtor(this,F).schedule(V,W)}}E.now=m.l.now;class Y extends E{constructor(F,W=E.now){super(F,W),this.actions=[],this._active=!1,this._scheduled=void 0}flush(F){const{actions:W}=this;if(this._active)return void W.push(F);let V;this._active=!0;do{if(V=F.execute(F.state,F.delay))break}while(F=W.shift());if(this._active=!1,V){for(;F=W.shift();)F.unsubscribe();throw V}}}},4986:(z,N,D)=>{D.d(N,{z:()=>Y});var m=D(4408);const Y=new(D(7565).v)(m.o)},6063:(z,N,D)=>{D.d(N,{l:()=>m});const m={now:()=>(m.delegate||Date).now(),delegate:void 0}},233:(z,N,D)=>{D.d(N,{N:()=>F});var m=D(4408),Y=D(7565);const F=new class J extends Y.v{}(class E extends m.o{constructor($,k){super($,k),this.scheduler=$,this.work=k}schedule($,k=0){return k>0?super.schedule($,k):(this.delay=k,this.state=$,this.scheduler.flush(this),this)}execute($,k){return k>0||this.closed?super.execute($,k):this._execute($,k)}requestAsyncId($,k,ee=0){return null!=ee&&ee>0||null==ee&&this.delay>0?super.requestAsyncId($,k,ee):$.flush(this)}})},3410:(z,N,D)=>{D.d(N,{z:()=>m});const m={setTimeout(E,Y,...J){const{delegate:F}=m;return F?.setTimeout?F.setTimeout(E,Y,...J):setTimeout(E,Y,...J)},clearTimeout(E){const{delegate:Y}=m;return(Y?.clearTimeout||clearTimeout)(E)},delegate:void 0}},2202:(z,N,D)=>{D.d(N,{h:()=>E});const E=function m(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(z,N,D)=>{D.d(N,{L:()=>m});const m="function"==typeof Symbol&&Symbol.observable||"@@observable"},7669:(z,N,D)=>{D.d(N,{_6:()=>W,jO:()=>J,yG:()=>F});var m=D(576);function Y(V){return V[V.length-1]}function J(V){return(0,m.m)(Y(V))?V.pop():void 0}function F(V){return function E(V){return V&&(0,m.m)(V.schedule)}(Y(V))?V.pop():void 0}function W(V,$){return"number"==typeof Y(V)?V.pop():$}},4742:(z,N,D)=>{D.d(N,{D:()=>F});const{isArray:m}=Array,{getPrototypeOf:E,prototype:Y,keys:J}=Object;function F(V){if(1===V.length){const $=V[0];if(m($))return{args:$,keys:null};if(function W(V){return V&&"object"==typeof V&&E(V)===Y}($)){const k=J($);return{args:k.map(ee=>$[ee]),keys:k}}}return{args:V,keys:null}}},8737:(z,N,D)=>{function m(E,Y){if(E){const J=E.indexOf(Y);0<=J&&E.splice(J,1)}}D.d(N,{P:()=>m})},3888:(z,N,D)=>{function m(E){const J=E(F=>{Error.call(F),F.stack=(new Error).stack});return J.prototype=Object.create(Error.prototype),J.prototype.constructor=J,J}D.d(N,{d:()=>m})},1810:(z,N,D)=>{function m(E,Y){return E.reduce((J,F,W)=>(J[F]=Y[W],J),{})}D.d(N,{n:()=>m})},2806:(z,N,D)=>{D.d(N,{O:()=>J,x:()=>Y});var m=D(2416);let E=null;function Y(F){if(m.v.useDeprecatedSynchronousErrorHandling){const W=!E;if(W&&(E={errorThrown:!1,error:null}),F(),W){const{errorThrown:V,error:$}=E;if(E=null,V)throw $}}else F()}function J(F){m.v.useDeprecatedSynchronousErrorHandling&&E&&(E.errorThrown=!0,E.error=F)}},9672:(z,N,D)=>{function m(E,Y,J,F=0,W=!1){const V=Y.schedule(function(){J(),W?E.add(this.schedule(null,F)):this.unsubscribe()},F);if(E.add(V),!W)return V}D.d(N,{f:()=>m})},4671:(z,N,D)=>{function m(E){return E}D.d(N,{y:()=>m})},1144:(z,N,D)=>{D.d(N,{z:()=>m});const m=E=>E&&"number"==typeof E.length&&"function"!=typeof E},2206:(z,N,D)=>{D.d(N,{D:()=>E});var m=D(576);function E(Y){return Symbol.asyncIterator&&(0,m.m)(Y?.[Symbol.asyncIterator])}},576:(z,N,D)=>{function m(E){return"function"==typeof E}D.d(N,{m:()=>m})},3670:(z,N,D)=>{D.d(N,{c:()=>Y});var m=D(8822),E=D(576);function Y(J){return(0,E.m)(J[m.L])}},6495:(z,N,D)=>{D.d(N,{T:()=>Y});var m=D(2202),E=D(576);function Y(J){return(0,E.m)(J?.[m.h])}},8239:(z,N,D)=>{D.d(N,{t:()=>E});var m=D(576);function E(Y){return(0,m.m)(Y?.then)}},3260:(z,N,D)=>{D.d(N,{L:()=>J,Q:()=>Y});var m=D(655),E=D(576);function Y(F){return(0,m.FC)(this,arguments,function*(){const V=F.getReader();try{for(;;){const{value:$,done:k}=yield(0,m.qq)(V.read());if(k)return yield(0,m.qq)(void 0);yield yield(0,m.qq)($)}}finally{V.releaseLock()}})}function J(F){return(0,E.m)(F?.getReader)}},4482:(z,N,D)=>{D.d(N,{A:()=>E,e:()=>Y});var m=D(576);function E(J){return(0,m.m)(J?.lift)}function Y(J){return F=>{if(E(F))return F.lift(function(W){try{return J(W,this)}catch(V){this.error(V)}});throw new TypeError("Unable to lift unknown Observable type")}}},3268:(z,N,D)=>{D.d(N,{Z:()=>J});var m=D(4004);const{isArray:E}=Array;function J(F){return(0,m.U)(W=>function Y(F,W){return E(W)?F(...W):F(W)}(F,W))}},5032:(z,N,D)=>{function m(){}D.d(N,{Z:()=>m})},7849:(z,N,D)=>{D.d(N,{h:()=>Y});var m=D(2416),E=D(3410);function Y(J){E.z.setTimeout(()=>{const{onUnhandledError:F}=m.v;if(!F)throw J;F(J)})}},4532:(z,N,D)=>{function m(E){return new TypeError(`You provided ${null!==E&&"object"==typeof E?"an invalid object":`'${E}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}D.d(N,{z:()=>m})},655:(z,N,D)=>{function $(oe,le,re,ge){return new(re||(re=Promise))(function(Fe,ct){function _t(yt){try{xe(ge.next(yt))}catch(an){ct(an)}}function vt(yt){try{xe(ge.throw(yt))}catch(an){ct(an)}}function xe(yt){yt.done?Fe(yt.value):function ce(Fe){return Fe instanceof re?Fe:new re(function(ct){ct(Fe)})}(yt.value).then(_t,vt)}xe((ge=ge.apply(oe,le||[])).next())})}function he(oe){return this instanceof he?(this.v=oe,this):new he(oe)}function Ie(oe,le,re){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var ce,ge=re.apply(oe,le||[]),Fe=[];return ce={},ct("next"),ct("throw"),ct("return"),ce[Symbol.asyncIterator]=function(){return this},ce;function ct(Nt){ge[Nt]&&(ce[Nt]=function(Et){return new Promise(function(Ht,un){Fe.push([Nt,Et,Ht,un])>1||_t(Nt,Et)})})}function _t(Nt,Et){try{!function vt(Nt){Nt.value instanceof he?Promise.resolve(Nt.value.v).then(xe,yt):an(Fe[0][2],Nt)}(ge[Nt](Et))}catch(Ht){an(Fe[0][3],Ht)}}function xe(Nt){_t("next",Nt)}function yt(Nt){_t("throw",Nt)}function an(Nt,Et){Nt(Et),Fe.shift(),Fe.length&&_t(Fe[0][0],Fe[0][1])}}function Ue(oe){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var re,le=oe[Symbol.asyncIterator];return le?le.call(oe):(oe=function q(oe){var le="function"==typeof Symbol&&Symbol.iterator,re=le&&oe[le],ge=0;if(re)return re.call(oe);if(oe&&"number"==typeof oe.length)return{next:function(){return oe&&ge>=oe.length&&(oe=void 0),{value:oe&&oe[ge++],done:!oe}}};throw new TypeError(le?"Object is not iterable.":"Symbol.iterator is not defined.")}(oe),re={},ge("next"),ge("throw"),ge("return"),re[Symbol.asyncIterator]=function(){return this},re);function ge(Fe){re[Fe]=oe[Fe]&&function(ct){return new Promise(function(_t,vt){!function ce(Fe,ct,_t,vt){Promise.resolve(vt).then(function(xe){Fe({value:xe,done:_t})},ct)}(_t,vt,(ct=oe[Fe](ct)).done,ct.value)})}}}D.d(N,{FC:()=>Ie,KL:()=>Ue,mG:()=>$,qq:()=>he})},6895:(z,N,D)=>{D.d(N,{Do:()=>Me,EM:()=>hn,HT:()=>F,JF:()=>Dn,K0:()=>V,Mx:()=>go,NF:()=>qr,Ov:()=>jo,S$:()=>he,V_:()=>ee,Ye:()=>De,b0:()=>Ue,bD:()=>Nn,ez:()=>vr,q:()=>Y,sg:()=>zn,w_:()=>W});var m=D(4650);
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
     */let E=null;function Y(){return E}function F(g){E||(E=g)}class W{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const V=new m.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let $=(()=>{class g{historyGo(_){throw new Error("Not implemented")}}return g.\u0275fac=function(_){return new(_||g)},g.\u0275prov=m.Yz7({token:g,factory:function(){return function k(){return(0,m.LFG)(K)}()},providedIn:"platform"}),g})();const ee=new m.OlP("Location Initialized");let K=(()=>{class g extends ${constructor(_){super(),this._doc=_,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Y().getBaseHref(this._doc)}onPopState(_){const T=Y().getGlobalEventTarget(this._doc,"window");return T.addEventListener("popstate",_,!1),()=>T.removeEventListener("popstate",_)}onHashChange(_){const T=Y().getGlobalEventTarget(this._doc,"window");return T.addEventListener("hashchange",_,!1),()=>T.removeEventListener("hashchange",_)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(_){this.location.pathname=_}pushState(_,T,j){q()?this._history.pushState(_,T,j):this.location.hash=j}replaceState(_,T,j){q()?this._history.replaceState(_,T,j):this.location.hash=j}forward(){this._history.forward()}back(){this._history.back()}historyGo(_=0){this._history.go(_)}getState(){return this._history.state}}return g.\u0275fac=function(_){return new(_||g)(m.LFG(V))},g.\u0275prov=m.Yz7({token:g,factory:function(){return function pe(){return new K((0,m.LFG)(V))}
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
     */()},providedIn:"platform"}),g})();function q(){return!!window.history.pushState}function X(g,b){if(0==g.length)return b;if(0==b.length)return g;let _=0;return g.endsWith("/")&&_++,b.startsWith("/")&&_++,2==_?g+b.substring(1):1==_?g+b:g+"/"+b}function ue(g){const b=g.match(/#|\?|$/),_=b&&b.index||g.length;return g.slice(0,_-("/"===g[_-1]?1:0))+g.slice(_)}function we(g){return g&&"?"!==g[0]?"?"+g:g}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let he=(()=>{class g{historyGo(_){throw new Error("Not implemented")}}return g.\u0275fac=function(_){return new(_||g)},g.\u0275prov=m.Yz7({token:g,factory:function(){return function Ie(){const g=(0,m.LFG)(V).location;return new Ue((0,m.LFG)($),g&&g.origin||"")}()},providedIn:"root"}),g})();const Be=new m.OlP("appBaseHref");let Ue=(()=>{class g extends he{constructor(_,T){if(super(),this._platformLocation=_,this._removeListenerFns=[],null==T&&(T=this._platformLocation.getBaseHrefFromDOM()),null==T)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=T}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(_){this._removeListenerFns.push(this._platformLocation.onPopState(_),this._platformLocation.onHashChange(_))}getBaseHref(){return this._baseHref}prepareExternalUrl(_){return X(this._baseHref,_)}path(_=!1){const T=this._platformLocation.pathname+we(this._platformLocation.search),j=this._platformLocation.hash;return j&&_?`${T}${j}`:T}pushState(_,T,j,fe){const ie=this.prepareExternalUrl(j+we(fe));this._platformLocation.pushState(_,T,ie)}replaceState(_,T,j,fe){const ie=this.prepareExternalUrl(j+we(fe));this._platformLocation.replaceState(_,T,ie)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(_=0){this._platformLocation.historyGo?.(_)}}return g.\u0275fac=function(_){return new(_||g)(m.LFG($),m.LFG(Be,8))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac}),g})(),Me=(()=>{class g extends he{constructor(_,T){super(),this._platformLocation=_,this._baseHref="",this._removeListenerFns=[],null!=T&&(this._baseHref=T)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(_){this._removeListenerFns.push(this._platformLocation.onPopState(_),this._platformLocation.onHashChange(_))}getBaseHref(){return this._baseHref}path(_=!1){let T=this._platformLocation.hash;return null==T&&(T="#"),T.length>0?T.substring(1):T}prepareExternalUrl(_){const T=X(this._baseHref,_);return T.length>0?"#"+T:T}pushState(_,T,j,fe){let ie=this.prepareExternalUrl(j+we(fe));0==ie.length&&(ie=this._platformLocation.pathname),this._platformLocation.pushState(_,T,ie)}replaceState(_,T,j,fe){let ie=this.prepareExternalUrl(j+we(fe));0==ie.length&&(ie=this._platformLocation.pathname),this._platformLocation.replaceState(_,T,ie)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(_=0){this._platformLocation.historyGo?.(_)}}return g.\u0275fac=function(_){return new(_||g)(m.LFG($),m.LFG(Be,8))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac}),g})(),De=(()=>{class g{constructor(_){this._subject=new m.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=_;const T=this._locationStrategy.getBaseHref();this._baseHref=ue(Ke(T)),this._locationStrategy.onPopState(j=>{this._subject.emit({url:this.path(!0),pop:!0,state:j.state,type:j.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(_=!1){return this.normalize(this._locationStrategy.path(_))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(_,T=""){return this.path()==this.normalize(_+we(T))}normalize(_){return g.stripTrailingSlash(function $e(g,b){return g&&b.startsWith(g)?b.substring(g.length):b}(this._baseHref,Ke(_)))}prepareExternalUrl(_){return _&&"/"!==_[0]&&(_="/"+_),this._locationStrategy.prepareExternalUrl(_)}go(_,T="",j=null){this._locationStrategy.pushState(j,"",_,T),this._notifyUrlChangeListeners(this.prepareExternalUrl(_+we(T)),j)}replaceState(_,T="",j=null){this._locationStrategy.replaceState(j,"",_,T),this._notifyUrlChangeListeners(this.prepareExternalUrl(_+we(T)),j)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(_=0){this._locationStrategy.historyGo?.(_)}onUrlChange(_){return this._urlChangeListeners.push(_),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(T=>{this._notifyUrlChangeListeners(T.url,T.state)})),()=>{const T=this._urlChangeListeners.indexOf(_);this._urlChangeListeners.splice(T,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(_="",T){this._urlChangeListeners.forEach(j=>j(_,T))}subscribe(_,T,j){return this._subject.subscribe({next:_,error:T,complete:j})}}return g.normalizeQueryParams=we,g.joinWithSlash=X,g.stripTrailingSlash=ue,g.\u0275fac=function(_){return new(_||g)(m.LFG(he))},g.\u0275prov=m.Yz7({token:g,factory:function(){return function Pe(){return new De((0,m.LFG)(he))}()},providedIn:"root"}),g})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ke(g){return g.replace(/\/index.html$/,"")}
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
function go(g,b){b=encodeURIComponent(b);for(const _ of g.split(";")){const T=_.indexOf("="),[j,fe]=-1==T?[_,""]:[_.slice(0,T),_.slice(T+1)];if(j.trim()===b)return decodeURIComponent(fe)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class $n{constructor(b,_,T,j){this.$implicit=b,this.ngForOf=_,this.index=T,this.count=j}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let zn=(()=>{class g{constructor(_,T,j){this._viewContainer=_,this._template=T,this._differs=j,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(_){this._ngForOf=_,this._ngForOfDirty=!0}set ngForTrackBy(_){this._trackByFn=_}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(_){_&&(this._template=_)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const _=this._ngForOf;!this._differ&&_&&(this._differ=this._differs.find(_).create(this.ngForTrackBy))}if(this._differ){const _=this._differ.diff(this._ngForOf);_&&this._applyChanges(_)}}_applyChanges(_){const T=this._viewContainer;_.forEachOperation((j,fe,ie)=>{if(null==j.previousIndex)T.createEmbeddedView(this._template,new $n(j.item,this._ngForOf,-1,-1),null===ie?void 0:ie);else if(null==ie)T.remove(null===fe?void 0:fe);else if(null!==fe){const Ge=T.get(fe);T.move(Ge,ie),nn(Ge,j)}});for(let j=0,fe=T.length;j<fe;j++){const Ge=T.get(j).context;Ge.index=j,Ge.count=fe,Ge.ngForOf=this._ngForOf}_.forEachIdentityChange(j=>{nn(T.get(j.currentIndex),j)})}static ngTemplateContextGuard(_,T){return!0}}return g.\u0275fac=function(_){return new(_||g)(m.Y36(m.s_b),m.Y36(m.Rgc),m.Y36(m.ZZ4))},g.\u0275dir=m.lG2({type:g,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),g})();function nn(g,b){g.context.$implicit=b.item}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Uo{createSubscription(b,_){return b.subscribe({next:_,error:T=>{throw T}})}dispose(b){b.unsubscribe()}}class Pr{createSubscription(b,_){return b.then(_,T=>{throw T})}dispose(b){}}const _o=new Pr,ai=new Uo;let jo=(()=>{class g{constructor(_){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=_}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(_){return this._obj?_!==this._obj?(this._dispose(),this.transform(_)):this._latestValue:(_&&this._subscribe(_),this._latestValue)}_subscribe(_){this._obj=_,this._strategy=this._selectStrategy(_),this._subscription=this._strategy.createSubscription(_,T=>this._updateLatestValue(_,T))}_selectStrategy(_){if((0,m.QGY)(_))return _o;if((0,m.F4k)(_))return ai;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
throw function An(g,b){return new m.vHH(2100,!1)}()}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(_,T){_===this._obj&&(this._latestValue=T,this._ref.markForCheck())}}return g.\u0275fac=function(_){return new(_||g)(m.Y36(m.sBO,16))},g.\u0275pipe=m.Yjl({name:"async",type:g,pure:!1}),g})(),vr=(()=>{class g{}return g.\u0275fac=function(_){return new(_||g)},g.\u0275mod=m.oAB({type:g}),g.\u0275inj=m.cJS({}),g})();
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
const Nn="browser";function qr(g){return g===Nn}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let hn=(()=>{class g{}return g.\u0275prov=(0,m.Yz7)({token:g,providedIn:"root",factory:()=>new Ln((0,m.LFG)(V),window)}),g})();class Ln{constructor(b,_){this.document=b,this.window=_,this.offset=()=>[0,0]}setOffset(b){this.offset=Array.isArray(b)?()=>b:b}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(b){this.supportsScrolling()&&this.window.scrollTo(b[0],b[1])}scrollToAnchor(b){if(!this.supportsScrolling())return;const _=function zo(g,b){const _=g.getElementById(b)||g.getElementsByName(b)[0];if(_)return _;if("function"==typeof g.createTreeWalker&&g.body&&(g.body.createShadowRoot||g.body.attachShadow)){const T=g.createTreeWalker(g.body,NodeFilter.SHOW_ELEMENT);let j=T.currentNode;for(;j;){const fe=j.shadowRoot;if(fe){const ie=fe.getElementById(b)||fe.querySelector(`[name="${b}"]`);if(ie)return ie}j=T.nextNode()}}return null}(this.document,b);_&&(this.scrollToElement(_),_.focus())}setHistoryScrollRestoration(b){if(this.supportScrollRestoration()){const _=this.window.history;_&&_.scrollRestoration&&(_.scrollRestoration=b)}}scrollToElement(b){const _=b.getBoundingClientRect(),T=_.left+this.window.pageXOffset,j=_.top+this.window.pageYOffset,fe=this.offset();this.window.scrollTo(T-fe[0],j-fe[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const b=Do(this.window.history)||Do(Object.getPrototypeOf(this.window.history));return!(!b||!b.writable&&!b.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function Do(g){return Object.getOwnPropertyDescriptor(g,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Dn{}
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
     */},4650:(z,N,D)=>{D.d(N,{$8M:()=>Mi,$Z:()=>Wf,AFp:()=>rm,ALo:()=>Ig,AaK:()=>$,CHM:()=>Lr,CRH:()=>Fg,CZH:()=>ku,CqO:()=>Lh,D6c:()=>N0,EJc:()=>YC,EiD:()=>Vd,EpF:()=>Fh,F$t:()=>Vh,F4k:()=>Nh,FYo:()=>cg,FiY:()=>as,G48:()=>_0,Gf:()=>xg,GfV:()=>lg,Hsn:()=>$h,JOm:()=>so,JVY:()=>km,KtG:()=>er,L6k:()=>Bm,LAX:()=>jm,LFG:()=>En,LSH:()=>ac,Lbi:()=>GC,MMx:()=>Bl,NdJ:()=>Dl,OlP:()=>At,Oqu:()=>bl,PXZ:()=>l0,PiD:()=>us,Q6J:()=>pl,QGY:()=>yl,QP$:()=>Ns,Qsj:()=>AE,R0b:()=>Mr,RDi:()=>d,Rgc:()=>Na,SBq:()=>Ra,Sil:()=>XC,Suo:()=>Pg,TTD:()=>Tr,TgZ:()=>bu,X6Q:()=>m0,XFs:()=>Je,Xpm:()=>Pn,Xts:()=>wc,Y36:()=>_s,YKP:()=>ag,YNc:()=>xh,Yjl:()=>dn,Yz7:()=>Et,ZZ4:()=>cd,_UZ:()=>ml,_Vd:()=>Oa,_c5:()=>P0,_uU:()=>fp,aQg:()=>ld,c2e:()=>zC,cJS:()=>un,cg1:()=>Tl,dDg:()=>s0,deG:()=>c,dqk:()=>ke,eBb:()=>Um,eFA:()=>mm,ekj:()=>Ml,eoX:()=>hm,f3M:()=>Zu,g9A:()=>im,h0i:()=>xi,hGG:()=>F0,hM9:()=>kE,iGM:()=>Rg,ifc:()=>gt,ip1:()=>nm,kL8:()=>xp,lG2:()=>qt,lcZ:()=>bg,lqb:()=>ps,lri:()=>dm,mCW:()=>ga,n5z:()=>na,oAB:()=>it,oxw:()=>Hh,pB0:()=>Hm,q3G:()=>Cn,qLn:()=>va,qOj:()=>ll,qZA:()=>wu,qzn:()=>ds,rWj:()=>fm,s9C:()=>El,sBO:()=>v0,sIi:()=>Ma,s_b:()=>Fu,soG:()=>Bu,tBr:()=>la,tb:()=>sm,tp0:()=>Ii,uIk:()=>hl,vHH:()=>ue,vpe:()=>ho,wAp:()=>dt,xp6:()=>Mf,z2F:()=>Uu,z3N:()=>Fo,zSh:()=>Oc,zs3:()=>ao});var m=D(7579),E=D(727),Y=D(8306),J=D(6451),F=D(3099);
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
     */function W(e){for(let t in e)if(e[t]===W)return t;throw Error("Could not find renamed property on target object.")}function V(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function $(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map($).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function k(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ee=W({__forward_ref__:W});function K(e){return e.__forward_ref__=K,e.toString=function(){return $(this())},e}function q(e){return pe(e)?e():e}function pe(e){return"function"==typeof e&&e.hasOwnProperty(ee)&&e.__forward_ref__===K}
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
class ue extends Error{constructor(t,n){super(function we(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function he(e){return"string"==typeof e?e:null==e?"":String(e)}function De(e,t){throw new ue(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function vt(e,t){null==e&&function xe(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Et(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function un(e){return{providers:e.providers||[],imports:e.imports||[]}}function Ft(e){return _n(e,bn)||_n(e,Gn)}function _n(e,t){return e.hasOwnProperty(t)?e[t]:null}function Ir(e){return e&&(e.hasOwnProperty(Wn)||e.hasOwnProperty(hr))?e[Wn]:null}const bn=W({\u0275prov:W}),Wn=W({\u0275inj:W}),Gn=W({ngInjectableDef:W}),hr=W({ngInjectorDef:W});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Je=(()=>((Je=Je||{})[Je.Default=0]="Default",Je[Je.Host=1]="Host",Je[Je.Self=2]="Self",Je[Je.SkipSelf=4]="SkipSelf",Je[Je.Optional=8]="Optional",Je))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Jn;function Gt(e){const t=Jn;return Jn=e,t}function On(e,t,n){const r=Ft(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&Je.Optional?null:void 0!==t?t:void De($(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function cn(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var et=(()=>((et=et||{})[et.OnPush=0]="OnPush",et[et.Default=1]="Default",et))(),gt=(()=>{return(e=gt||(gt={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",gt;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ke=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),en={},nt=[],Vt=W({\u0275cmp:W}),Yt=W({\u0275dir:W}),xn=W({\u0275pipe:W}),Mt=W({\u0275mod:W}),Tn=W({\u0275fac:W}),rt=W({__NG_ELEMENT_ID__:W});
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
let Hn=0;function Pn(e){return cn(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===et.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||nt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||gt.Emulated,id:"c"+Hn++,styles:e.styles||nt,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=Tt(e.inputs,r),o.outputs=Tt(e.outputs),s&&s.forEach(l=>l(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(Ce).filter(ye):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(Ye).filter(ye):null,o})}function Ce(e){return at(e)||It(e)}function ye(e){return null!==e}const Le={};function it(e){return cn(()=>{const t={type:e.type,bootstrap:e.bootstrap||nt,declarations:e.declarations||nt,imports:e.imports||nt,exports:e.exports||nt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(Le[e.id]=e.type),t})}function Tt(e,t){if(null==e)return en;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const qt=Pn;function dn(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function at(e){return e[Vt]||null}function It(e){return e[Yt]||null}function Ye(e){return e[xn]||null}function bt(e,t){const n=e[Mt]||null;if(!n&&!0===t)throw new Error(`Type ${$(e)} does not have '\u0275mod' property.`);return n}
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
function rn(e){return Array.isArray(e)&&"object"==typeof e[1]}function x(e){return Array.isArray(e)&&!0===e[1]}function de(e){return 0!=(8&e.flags)}function Q(e){return 2==(2&e.flags)}function ae(e){return 1==(1&e.flags)}function Se(e){return null!==e.template}function Ne(e){return 0!=(256&e[2])}
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
function _r(e,t){return e.hasOwnProperty(Tn)?e[Tn]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class yo{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Tr(){return $o}function $o(e){return e.type.prototype.ngOnChanges&&(e.setInput=Mn),Fr}function Fr(){const e=Kr(this),t=e?.current;if(t){const n=e.previous;if(n===en)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Mn(e,t,n,r){const o=Kr(e)||function Ui(e,t){return e[Ar]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:en,current:null}),i=o.current||(o.current={}),s=o.previous,l=this.declaredInputs[n],f=s[l];i[l]=new yo(f&&f.currentValue,t,s===en),e[r]=t}Tr.ngInherit=!0;const Ar="__ngSimpleChanges__";function Kr(e){return e[Ar]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Jt(e){for(;Array.isArray(e);)e=e[0];return e}function hn(e,t){return Jt(t[e])}function Ln(e,t){return Jt(t[e.index])}function zo(e,t){return e.data[t]}function Dn(e,t){const n=t[e];return rn(n)?n:n[0]}function g(e){return 4==(4&e[2])}function b(e){return 64==(64&e[2])}function T(e,t){return null==t?null:e[t]}function j(e){e[18]=0}function fe(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const ie={lFrame:zi(null),bindingsEnabled:!0};function ln(){return ie.bindingsEnabled}function Ee(){return ie.lFrame.lView}function pt(){return ie.lFrame.tView}function Lr(e){return ie.lFrame.contextLView=e,e[8]}function er(e){return ie.lFrame.contextLView=null,e}function Kt(){let e=Xr();for(;null!==e&&64===e.type;)e=e.parent;return e}function Xr(){return ie.lFrame.currentTNode}function cr(e,t){const n=ie.lFrame;n.currentTNode=e,n.isParent=t}function Vi(){return ie.lFrame.isParent}function $i(){ie.lFrame.isParent=!1}function Co(){return ie.lFrame.bindingIndex++}function Ua(e,t){const n=ie.lFrame;n.bindingIndex=n.bindingRootIndex=e,Qr(t)}function Qr(e){ie.lFrame.currentDirectiveIndex=e}function Bs(){return ie.lFrame.currentQueryIndex}function Gi(e){ie.lFrame.currentQueryIndex=e}function Ha(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function fi(e,t,n){if(n&Je.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&Je.Host||(o=Ha(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=ie.lFrame=qo();return r.currentTNode=t,r.lView=e,!0}function Yo(e){const t=qo(),n=e[1];ie.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function qo(){const e=ie.lFrame,t=null===e?null:e.child;return null===t?zi(e):t}function zi(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function hi(){const e=ie.lFrame;return ie.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Us=hi;function Xo(){const e=hi();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Bn(){return ie.lFrame.selectedIndex}function kr(e){ie.lFrame.selectedIndex=e}function Xt(){const e=ie.lFrame;return zo(e.tView,e.selectedIndex)}function Jr(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:l,ngAfterViewInit:f,ngAfterViewChecked:y,ngOnDestroy:I}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),l&&((e.contentHooks||(e.contentHooks=[])).push(n,l),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,l)),f&&(e.viewHooks||(e.viewHooks=[])).push(-n,f),y&&((e.viewHooks||(e.viewHooks=[])).push(n,y),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,y)),null!=I&&(e.destroyHooks||(e.destroyHooks=[])).push(n,I)}}function gi(e,t,n){Ki(e,t,3,n)}function Mo(e,t,n,r){(3&e[2])===n&&Ki(e,t,n,r)}function mi(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Ki(e,t,n,r){const i=r??-1,s=t.length-1;let l=0;for(let f=void 0!==r?65535&e[18]:0;f<s;f++)if("number"==typeof t[f+1]){if(l=t[f],null!=r&&l>=r)break}else t[f]<0&&(e[18]+=65536),(l<i||-1==i)&&(Yi(e,n,t,f),e[18]=(4294901760&e[18])+f+2),f++}function Yi(e,t,n,r){const o=n[r]<0,i=n[r+1],l=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(l)}finally{}}}else try{i.call(l)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Zo{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function Qo(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],l=n[r++];e.setAttribute(t,s,l,i)}else{const i=o,s=n[++r];Zi(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function qs(e){return 3===e||4===e||6===e}function Zi(e){return 64===e.charCodeAt(0)}function _i(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Xs(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Xs(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const l=e[i++];if("number"==typeof l){if(l===t){s=-1;break}if(l>t){s=i-1;break}}}for(;i<e.length;){const l=e[i];if("number"==typeof l)break;if(l===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Zs(e){return-1!==e}function bo(e){return 32767&e}function wo(e,t){let n=function In(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let vi=!0;function To(e){const t=vi;return vi=e,t}let Qs=0;const lr={};function Jo(e,t){const n=Ao(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,ei(r.data,e),ei(t,null),ei(r.blueprint,null));const o=to(e,t),i=e.injectorIndex;if(Zs(o)){const s=bo(o),l=wo(o,t),f=l[1].data;for(let y=0;y<8;y++)t[i+y]=l[s+y]|f[s+y]}return t[i+8]=o,i}function ei(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ao(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function to(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=ra(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Di(e,t,n){!function yi(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(rt)&&(r=n[rt]),null==r&&(r=n[rt]=Qs++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Wa(e,t,n){if(n&Je.Optional)return e;De()}function Ei(e,t,n,r){if(n&Je.Optional&&void 0===r&&(r=null),0==(n&(Je.Self|Je.Host))){const o=e[9],i=Gt(void 0);try{return o?o.get(t,r,n&Je.Optional):On(t,r,n&Je.Optional)}finally{Gt(i)}}return Wa(r,0,n)}function es(e,t,n,r=Je.Default,o){if(null!==e){if(1024&t[2]){const s=function Ka(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const l=ts(i,s,n,r|Je.Self,lr);if(l!==lr)return l;let f=i.parent;if(!f){const y=s[21];if(y){const I=y.get(n,lr,r);if(I!==lr)return I}f=ra(s),s=s[15]}i=f}return o}(e,t,n,r,lr);if(s!==lr)return s}const i=ts(e,t,n,r,lr);if(i!==lr)return i}return Ei(t,n,r,o)}function ts(e,t,n,r,o){const i=function za(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(rt)?e[rt]:void 0;return"number"==typeof t?t>=0?255&t:ta:t}(n);if("function"==typeof i){if(!fi(t,e,r))return r&Je.Host?Wa(o,0,r):Ei(t,n,r,o);try{const s=i(r);if(null!=s||r&Je.Optional)return s;De()}finally{Us()}}else if("number"==typeof i){let s=null,l=Ao(e,t),f=-1,y=r&Je.Host?t[16][6]:null;for((-1===l||r&Je.SkipSelf)&&(f=-1===l?to(e,t):t[l+8],-1!==f&&ea(r,!1)?(s=t[1],l=bo(f),t=wo(f,t)):l=-1);-1!==l;){const I=t[1];if(Js(i,l,I.data)){const S=Ga(l,t,n,s,r,y);if(S!==lr)return S}f=t[l+8],-1!==f&&ea(r,t[1].data[l+8]===y)&&Js(i,l,t)?(s=I,l=bo(f),t=wo(f,t)):l=-1}}return o}function Ga(e,t,n,r,o,i){const s=t[1],l=s.data[e+8],I=Ci(l,s,n,null==r?Q(l)&&vi:r!=s&&0!=(3&l.type),o&Je.Host&&i===l);return null!==I?ti(t,s,I,l):lr}function Ci(e,t,n,r,o){const i=e.providerIndexes,s=t.data,l=1048575&i,f=e.directiveStart,I=i>>20,U=o?l+I:e.directiveEnd;for(let te=r?l:l+I;te<U;te++){const ve=s[te];if(te<f&&n===ve||te>=f&&ve.type===n)return te}if(o){const te=s[f];if(te&&Se(te)&&te.type===n)return f}return null}function ti(e,t,n,r){let o=e[n];const i=t.data;if(function Gs(e){return e instanceof Zo}(o)){const s=o;s.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Be(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new ue(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Ie(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():he(e)}(i[n]));const l=To(s.canSeeViewProviders);s.resolving=!0;const f=s.injectImpl?Gt(s.injectImpl):null;fi(e,r,Je.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ws(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=$o(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==f&&Gt(f),To(l),s.resolving=!1,Us()}}return o}function Js(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function ea(e,t){return!(e&Je.Self||e&Je.Host&&t)}class So{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return es(this._tNode,this._lView,t,r,n)}}function ta(){return new So(Kt(),Ee())}function na(e){return cn(()=>{const t=e.prototype.constructor,n=t[Tn]||ns(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const i=o[Tn]||ns(o);if(i&&i!==n)return i;o=Object.getPrototypeOf(o)}return i=>new i})}function ns(e){return pe(e)?()=>{const t=ns(q(e));return t&&t()}:_r(e)}function ra(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Mi(e){return function Dr(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(qs(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(Kt(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const no="__parameters__";function ro(e,t,n){return cn(()=>{const r=function Ro(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return l.annotation=s,l;function l(f,y,I){const S=f.hasOwnProperty(no)?f[no]:Object.defineProperty(f,no,{value:[]})[no];for(;S.length<=I;)S.push(null);return(S[I]=S[I]||[]).push(s),f}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class At{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=Et({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const c=new At("AnalyzeForEntryComponents");function gn(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),gn(r,t)):t!==e&&t.push(r)}return t}function Un(e,t){e.forEach(n=>Array.isArray(n)?Un(n,t):t(n))}function dr(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function jr(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function xo(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function Bt(e,t,n){let r=Po(e,t);return r>=0?e[1|r]=n:(r=~r,function Za(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function ia(e,t){const n=Po(e,t);if(n>=0)return e[1|n]}function Po(e,t){return function Ku(e,t,n){let r=0,o=e.length>>n;for(;o!==r;){const i=r+(o-r>>1),s=e[i<<n];if(t===s)return i<<n;s>t?o=i:r=i+1}return~(o<<n)}
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
const os={},tu="__NG_DI_FLAG__",ua="ngTempTokenPath",bd=/\n/gm,qu="__source";let is;function ca(e){const t=is;return is=e,t}function Td(e,t=Je.Default){if(void 0===is)throw new ue(-203,!1);return null===is?On(e,void 0,t):is.get(e,t&Je.Optional?null:void 0,t)}function En(e,t=Je.Default){return(function Qt(){return Jn}()||Td)(q(e),t)}function Zu(e,t=Je.Default){return En(e,t)}function nu(e){const t=[];for(let n=0;n<e.length;n++){const r=q(e[n]);if(Array.isArray(r)){if(0===r.length)throw new ue(900,!1);let o,i=Je.Default;for(let s=0;s<r.length;s++){const l=r[s],f=Ad(l);"number"==typeof f?-1===f?o=l.token:i|=f:o=l}t.push(En(o,i))}else t.push(En(r))}return t}function ss(e,t){return e[tu]=t,e.prototype[tu]=t,e}function Ad(e){return e[tu]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const la=ss(ro("Inject",e=>({token:e})),-1),as=ss(ro("Optional"),8),us=ss(ro("Self"),2),Ii=ss(ro("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let h,P;function d(e){h=e}function be(e){return function ne(){if(void 0===P&&(P=null,ke.trustedTypes))try{P=ke.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return P}()?.createHTML(e)||e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class jn{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}class fa extends jn{getTypeName(){return"HTML"}}class ha extends jn{getTypeName(){return"Style"}}class pa extends jn{getTypeName(){return"Script"}}class Pd extends jn{getTypeName(){return"URL"}}class Fd extends jn{getTypeName(){return"ResourceURL"}}function Fo(e){return e instanceof jn?e.changingThisBreaksApplicationSecurity:e}function ds(e,t){const n=function Lm(e){return e instanceof jn&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}function km(e){return new fa(e)}function Bm(e){return new ha(e)}function Um(e){return new pa(e)}function jm(e){return new Pd(e)}function Hm(e){return new Fd(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Vm{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const n=(new window.DOMParser).parseFromString(be(t),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(t):(n.removeChild(n.firstChild),n)}catch{return null}}}class $m{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const r=this.inertDocument.createElement("body");n.appendChild(r)}}getInertBodyElement(t){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=be(t),n;const r=this.inertDocument.createElement("body");return r.innerHTML=be(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(r),r}stripCustomNsAttrs(t){const n=t.attributes;for(let o=n.length-1;0<o;o--){const s=n.item(o).name;("xmlns:ns1"===s||0===s.indexOf("ns1:"))&&t.removeAttribute(s)}let r=t.firstChild;for(;r;)r.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(r),r=r.nextSibling}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Gm=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,zm=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function ga(e){return(e=String(e)).match(Gm)||e.match(zm)?e:"unsafe:"+e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function io(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function ma(...e){const t={};for(const n of e)for(const r in n)n.hasOwnProperty(r)&&(t[r]=!0);return t}const kd=io("area,br,col,hr,img,wbr"),Bd=io("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Ud=io("rp,rt"),rc=ma(kd,ma(Bd,io("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),ma(Ud,io("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),ma(Ud,Bd)),oc=io("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ic=io("srcset"),jd=ma(oc,ic,io("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),io("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),Km=io("script,style,template");class Ym{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(t){let n=t.firstChild,r=!0;for(;n;)if(n.nodeType===Node.ELEMENT_NODE?r=this.startElement(n):n.nodeType===Node.TEXT_NODE?this.chars(n.nodeValue):this.sanitizedSomething=!0,r&&n.firstChild)n=n.firstChild;else for(;n;){n.nodeType===Node.ELEMENT_NODE&&this.endElement(n);let o=this.checkClobberedElement(n,n.nextSibling);if(o){n=o;break}n=this.checkClobberedElement(n,n.parentNode)}return this.buf.join("")}startElement(t){const n=t.nodeName.toLowerCase();if(!rc.hasOwnProperty(n))return this.sanitizedSomething=!0,!Km.hasOwnProperty(n);this.buf.push("<"),this.buf.push(n);const r=t.attributes;for(let o=0;o<r.length;o++){const i=r.item(o),s=i.name,l=s.toLowerCase();if(!jd.hasOwnProperty(l)){this.sanitizedSomething=!0;continue}let f=i.value;oc[l]&&(f=ga(f)),ic[l]&&(e=f,f=(e=String(e)).split(",").map(t=>ga(t.trim())).join(", ")),this.buf.push(" ",s,'="',Hd(f),'"')}var e;return this.buf.push(">"),!0}endElement(t){const n=t.nodeName.toLowerCase();rc.hasOwnProperty(n)&&!kd.hasOwnProperty(n)&&(this.buf.push("</"),this.buf.push(n),this.buf.push(">"))}chars(t){this.buf.push(Hd(t))}checkClobberedElement(t,n){if(n&&(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);return n}}const qm=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Xm=/([^\#-~ |!])/g;function Hd(e){return e.replace(/&/g,"&amp;").replace(qm,function(t){return"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";"}).replace(Xm,function(t){return"&#"+t.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let lu;function Vd(e,t){let n=null;try{lu=lu||function Nd(e){const t=new $m(e);return function Wm(){try{return!!(new window.DOMParser).parseFromString(be(""),"text/html")}catch{return!1}}()?new Vm(t):t}(e);let r=t?String(t):"";n=lu.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=lu.getInertBodyElement(r)}while(r!==i);return be((new Ym).sanitizeChildren(sc(n)||n))}finally{if(n){const r=sc(n)||n;for(;r.firstChild;)r.removeChild(r.firstChild)}}}function sc(e){return"content"in e&&function Zm(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e)?e.content:null}var Cn=(()=>((Cn=Cn||{})[Cn.NONE=0]="NONE",Cn[Cn.HTML=1]="HTML",Cn[Cn.STYLE=2]="STYLE",Cn[Cn.SCRIPT=3]="SCRIPT",Cn[Cn.URL=4]="URL",Cn[Cn.RESOURCE_URL=5]="RESOURCE_URL",Cn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ac(e){const t=function _a(){const e=Ee();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return t?t.sanitize(Cn.URL,e)||"":ds(e,"URL")?Fo(e):ga(he(e))}function cc(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class va{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&cc(t);for(;n&&cc(n);)n=cc(n);return n||null}}
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
const lc=new Map;let h_=0;const fc="__ngContext__";function Xn(e,t){rn(t)?(e[fc]=t[20],function g_(e){lc.set(e[20],e)}(t)):e[fc]=t}function ya(e){const t=e[fc];return"number"==typeof t?function Gd(e){return lc.get(e)||null}(t):t||null}function hc(e){const t=ya(e);return t?rn(t)?t:t.lView:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const I_=(()=>(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind(ke))();function No(e){return e instanceof Function?e():e}
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
var so=(()=>((so=so||{})[so.Important=1]="Important",so[so.DashCase=2]="DashCase",so))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function gc(e,t){return undefined(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Da(e){const t=e[3];return x(t)?t[3]:t}function mc(e){return ef(e[13])}function _c(e){return ef(e[4])}function ef(e){for(;null!==e&&!x(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hs(e,t,n,r,o){if(null!=r){let i,s=!1;x(r)?i=r:rn(r)&&(s=!0,r=r[0]);const l=Jt(r);0===e&&null!==n?null==o?uf(t,n,l):Ti(t,n,l,o||null,!0):1===e&&null!==n?Ti(t,n,l,o||null,!0):2===e?function gf(e,t,n){const r=du(e,t);r&&function j_(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,l,s):3===e&&t.destroyNode(l),null!=i&&function $_(e,t,n,r,o){const i=n[7];i!==Jt(n)&&hs(t,e,r,i,o);for(let l=10;l<n.length;l++){const f=n[l];Ea(f[1],f,e,t,r,i)}}(t,e,i,n,o)}}function yc(e,t,n){return e.createElement(t,n)}function nf(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,fe(o,-1)),n.splice(r,1)}function Dc(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&nf(o,r),t>0&&(e[n-1][4]=r[4]);const i=jr(e,10+t);!function x_(e,t){Ea(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function rf(e,t){if(!(128&t[2])){const n=t[11];n.destroyNode&&Ea(e,t,n,3,null,null),function N_(e){let t=e[13];if(!t)return Ec(e[1],e);for(;t;){let n=null;if(rn(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)rn(t)&&Ec(t[1],t),t=t[3];null===t&&(t=e),rn(t)&&Ec(t[1],t),n=t&&t[4]}t=n}}(t)}}function Ec(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function U_(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Zo)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const l=o[i[s]],f=i[s+1];try{f.call(l)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function B_(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],l="function"==typeof s?s(t):Jt(t[s]),f=r[o=n[i+2]],y=n[i+3];"boolean"==typeof y?l.removeEventListener(n[i],f,y):y>=0?r[o=y]():r[o=-y].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&t[11].destroy();const n=t[17];if(null!==n&&x(t[3])){n!==t[3]&&nf(n,t);const r=t[19];null!==r&&r.detachView(e)}!function m_(e){lc.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function sf(e,t,n){return function af(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===gt.None||o===gt.Emulated)return null}return Ln(r,n)}(e,t.parent,n)}function Ti(e,t,n,r,o){e.insertBefore(t,n,r,o)}function uf(e,t,n){e.appendChild(t,n)}function cf(e,t,n,r,o){null!==r?Ti(e,t,n,r,o):uf(e,t,n)}function du(e,t){return e.parentNode(t)}function lf(e,t,n){return ff(e,t,n)}let ff=function df(e,t,n){return 40&e.type?Ln(e,n):null};function fu(e,t,n,r){const o=sf(e,r,t),i=t[11],l=lf(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let f=0;f<n.length;f++)cf(i,o,n[f],l,!1);else cf(i,o,n,l,!1)}function hu(e,t){if(null!==t){const n=t.type;if(3&n)return Ln(t,e);if(4&n)return Mc(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return hu(e,r);{const o=e[t.index];return x(o)?Mc(-1,o):Jt(o)}}if(32&n)return gc(t,e)()||Jt(e[t.index]);{const r=pf(e,t);return null!==r?Array.isArray(r)?r[0]:hu(Da(e[16]),r):hu(e,t.next)}}return null}function pf(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Mc(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return hu(r,o)}return t[7]}function Ic(e,t,n,r,o,i,s){for(;null!=n;){const l=r[n.index],f=n.type;if(s&&0===t&&(l&&Xn(Jt(l),r),n.flags|=4),64!=(64&n.flags))if(8&f)Ic(e,t,n.child,r,o,i,!1),hs(t,e,o,l,i);else if(32&f){const y=gc(n,r);let I;for(;I=y();)hs(t,e,o,I,i);hs(t,e,o,l,i)}else 16&f?mf(e,t,r,n,o,i):hs(t,e,o,l,i);n=s?n.projectionNext:n.next}}function Ea(e,t,n,r,o,i){Ic(n,r,e.firstChild,t,o,i,!1)}function mf(e,t,n,r,o,i){const s=n[16],f=s[6].projection[r.projection];if(Array.isArray(f))for(let y=0;y<f.length;y++)hs(t,e,o,f[y],i);else Ic(e,t,f,s[3],o,i,!0)}function _f(e,t,n){e.setAttribute(t,"style",n)}function bc(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function vf(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const yf="ng-template";function G_(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==vf(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function Df(e){return 4===e.type&&e.value!==yf}function z_(e,t,n){return t===(4!==e.type||n?e.value:yf)}function K_(e,t,n){let r=4;const o=e.attrs||[],i=function X_(e){for(let t=0;t<e.length;t++)if(qs(e[t]))return t;return e.length}(o);let s=!1;for(let l=0;l<t.length;l++){const f=t[l];if("number"!=typeof f){if(!s)if(4&r){if(r=2|1&r,""!==f&&!z_(e,f,n)||""===f&&1===t.length){if(Vr(r))return!1;s=!0}}else{const y=8&r?f:t[++l];if(8&r&&null!==e.attrs){if(!G_(e.attrs,y,n)){if(Vr(r))return!1;s=!0}continue}const S=Y_(8&r?"class":f,o,Df(e),n);if(-1===S){if(Vr(r))return!1;s=!0;continue}if(""!==y){let U;U=S>i?"":o[S+1].toLowerCase();const te=8&r?U:null;if(te&&-1!==vf(te,y,0)||2&r&&y!==U){if(Vr(r))return!1;s=!0}}}}else{if(!s&&!Vr(r)&&!Vr(f))return!1;if(s&&Vr(f))continue;s=!1,r=f|1&r}}return Vr(r)||s}function Vr(e){return 0==(1&e)}function Y_(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let l=t[++o];for(;"string"==typeof l;)l=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function Z_(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function Ef(e,t,n=!1){for(let r=0;r<t.length;r++)if(K_(e,t[r],n))return!0;return!1}function Q_(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let o=0;o<e.length;o++)if(e[o]!==r[o])continue e;return!0}}return!1}function Cf(e,t){return e?":not("+t.trim()+")":t}function J_(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const l=e[++n];o+="["+s+(l.length>0?'="'+l+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!Vr(s)&&(t+=Cf(i,o),o=""),r=s,i=i||!Vr(r);n++}return""!==o&&(t+=Cf(i,o)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const mt={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Mf(e){If(pt(),Ee(),Bn()+e,!1)}function If(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&gi(t,i,n)}else{const i=e.preOrderHooks;null!==i&&Mo(t,i,0,n)}kr(n)}
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
const wc=new At("ENVIRONMENT_INITIALIZER"),Af=new At("INJECTOR_DEF_TYPES");
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
function av(...e){return{\u0275providers:Sf(0,e)}}function Sf(e,...t){const n=[],r=new Set;let o;return Un(t,i=>{const s=i;Tc(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&Of(o,n),n}function Of(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];Un(o,i=>{t.push(i)})}}function Tc(e,t,n,r){if(!(e=q(e)))return!1;let o=null,i=Ir(e);const s=!i&&at(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const f=e.ngModule;if(i=Ir(f),!i)return!1;o=f}const l=r.has(o);if(s){if(l)return!1;if(r.add(o),s.dependencies){const f="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const y of f)Tc(y,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!l){let y;r.add(o);try{Un(i.imports,I=>{Tc(I,t,n,r)&&(y||(y=[]),y.push(I))})}finally{}void 0!==y&&Of(y,t)}if(!l){const y=_r(o)||(()=>new o);t.push({provide:o,useFactory:y,deps:nt},{provide:Af,useValue:o,multi:!0},{provide:wc,useValue:()=>En(o),multi:!0})}const f=i.providers;null==f||l||Un(f,I=>{t.push(I)})}}return o!==e&&void 0!==e.providers}const uv=W({provide:String,useValue:W});function Ac(e){return null!==e&&"object"==typeof e&&uv in e}function Ai(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Sc=new At("INJECTOR",-1);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Pf{get(t,n=os){if(n===os){const r=new Error(`NullInjectorError: No provider for ${$(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Oc=new At("Set Injector scope."),pu={},lv={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Rc;function xc(){return void 0===Rc&&(Rc=new Pf),Rc}class ps{}class Ff extends ps{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Fc(t,s=>this.processProvider(s)),this.records.set(Sc,gs(void 0,this)),o.has("environment")&&this.records.set(ps,gs(void 0,this));const i=this.records.get(Oc);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(Af.multi,nt,Je.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}get(t,n=os,r=Je.Default){this.assertNotDestroyed();const o=ca(this),i=Gt(void 0);try{if(!(r&Je.SkipSelf)){let l=this.records.get(t);if(void 0===l){const f=function gv(e){return"function"==typeof e||"object"==typeof e&&e instanceof At}(t)&&Ft(t);l=f&&this.injectableDefInScope(f)?gs(Pc(t),pu):null,this.records.set(t,l)}if(null!=l)return this.hydrate(t,l)}return(r&Je.Self?xc():this.parent).get(t,n=r&Je.Optional&&n===os?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[ua]=s[ua]||[]).unshift($(t)),o)throw s;return function Sd(e,t,n,r){const o=e[ua];throw t[qu]&&o.unshift(t[qu]),e.message=function Od(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=$(t);if(Array.isArray(t))o=t.map($).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let l=t[s];i.push(s+":"+("string"==typeof l?JSON.stringify(l):$(l)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(bd,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[ua]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Gt(i),ca(o)}}resolveInjectorInitializers(){const t=ca(this),n=Gt(void 0);try{const r=this.get(wc.multi,nt,Je.Self);for(const o of r)o()}finally{ca(t),Gt(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push($(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ue(205,!1)}processProvider(t){let n=Ai(t=q(t))?t:q(t&&t.provide);const r=function fv(e){return Ac(e)?gs(void 0,e.useValue):gs(function Nf(e,t,n){let r;if(Ai(e)){const o=q(e);return _r(o)||Pc(o)}if(Ac(e))r=()=>q(e.useValue);else if(function xf(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...nu(e.deps||[]));else if(function Rf(e){return!(!e||!e.useExisting)}(e))r=()=>En(q(e.useExisting));else{const o=q(e&&(e.useClass||e.provide));if(!function hv(e){return!!e.deps}(e))return _r(o)||Pc(o);r=()=>new o(...nu(e.deps))}return r}(e),pu)}(t);if(Ai(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=gs(void 0,pu,!0),o.factory=()=>nu(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===pu&&(n.value=lv,n.value=n.factory()),"object"==typeof n.value&&n.value&&function pv(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=q(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Pc(e){const t=Ft(e),n=null!==t?t.factory:_r(e);if(null!==n)return n;if(e instanceof At)throw new ue(204,!1);if(e instanceof Function)return function dv(e){const t=e.length;if(t>0)throw xo(t,"?"),new ue(204,!1);const n=function Qn(e){const t=e&&(e[bn]||e[Gn]);if(t){const n=function xr(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new ue(204,!1)}function gs(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function mv(e){return!!e.\u0275providers}function Fc(e,t){for(const n of e)Array.isArray(n)?Fc(n,t):mv(n)?Fc(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Lf(e,t=null,n=null,r){const o=kf(e,t,n,r);return o.resolveInjectorInitializers(),o}function kf(e,t=null,n=null,r,o=new Set){const i=[n||nt,av(e)];return r=r||("object"==typeof e?void 0:$(e)),new Ff(i,t||xc(),r||null,o)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let ao=(()=>{class e{static create(n,r){if(Array.isArray(n))return Lf({name:""},r,n,"");{const o=n.name??"";return Lf({name:o},n.parent,n.providers,o)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=os,e.NULL=new Pf,e.\u0275prov=Et({token:e,providedIn:"any",factory:()=>En(Sc)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function _s(e,t=Je.Default){const n=Ee();return null===n?En(e,t):es(Kt(),n,q(e),t)}function Wf(){throw new Error("invalid")}
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
function mu(e,t){return e<<17|t<<2}function $r(e){return e>>17&32767}function Vc(e){return 2|e}function Lo(e){return(131068&e)>>2}function $c(e,t){return-131069&e|t<<2}function Wc(e){return 1|e}function oh(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Gi(o),s.contentQueries(2,t[i],i)}}}function yu(e,t,n,r,o,i,s,l,f,y,I){const S=t.blueprint.slice();return S[0]=o,S[2]=76|r,(null!==I||e&&1024&e[2])&&(S[2]|=1024),j(S),S[3]=S[15]=e,S[8]=n,S[10]=s||e&&e[10],S[11]=l||e&&e[11],S[12]=f||e&&e[12]||null,S[9]=y||e&&e[9]||null,S[6]=i,S[20]=function p_(){return h_++}(),S[21]=I,S[16]=2==t.type?e[16]:S,S}function vs(e,t,n,r,o){let i=e.data[t];if(null===i)i=function Jc(e,t,n,r,o){const i=Xr(),s=Vi(),f=e.data[t]=function qv(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=f),null!==i&&(s?null==i.child&&null!==f.parent&&(i.child=f):null===i.next&&(i.next=f)),f}(e,t,n,r,o),function di(){return ie.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function tr(){const e=ie.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return cr(i,!0),i}function ys(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function Du(e,t,n){Yo(t);try{const r=e.viewQuery;null!==r&&cl(1,r,n);const o=e.template;null!==o&&ih(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&oh(e,t),e.staticViewQueries&&cl(2,e.viewQuery,n);const i=e.components;null!==i&&function Gv(e,t){for(let n=0;n<t.length;n++)hy(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,Xo()}}function Ca(e,t,n,r){const o=t[2];if(128!=(128&o)){Yo(t);try{j(t),function Ko(e){return ie.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&ih(e,t,n,2,r);const s=3==(3&o);if(s){const y=e.preOrderCheckHooks;null!==y&&gi(t,y,null)}else{const y=e.preOrderHooks;null!==y&&Mo(t,y,0,null),mi(t,0)}if(function dy(e){for(let t=mc(e);null!==t;t=_c(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&fe(i,1),o[2]|=512}}}(t),function ly(e){for(let t=mc(e);null!==t;t=_c(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];b(r)&&Ca(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&oh(e,t),s){const y=e.contentCheckHooks;null!==y&&gi(t,y)}else{const y=e.contentHooks;null!==y&&Mo(t,y,1),mi(t,1)}!function $v(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)kr(~o);else{const i=o,s=n[++r],l=n[++r];Ua(s,i),l(2,t[i])}}}finally{kr(-1)}}(e,t);const l=e.components;null!==l&&function Wv(e,t){for(let n=0;n<t.length;n++)fy(e,t[n])}(t,l);const f=e.viewQuery;if(null!==f&&cl(2,f,r),s){const y=e.viewCheckHooks;null!==y&&gi(t,y)}else{const y=e.viewHooks;null!==y&&Mo(t,y,2),mi(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,fe(t[3],-1))}finally{Xo()}}}function zv(e,t,n,r){const o=t[10],s=g(t);try{!s&&o.begin&&o.begin(),s&&Du(e,t,r),Ca(e,t,n,r)}finally{!s&&o.end&&o.end()}}function ih(e,t,n,r,o){const i=Bn(),s=2&r;try{kr(-1),s&&t.length>22&&If(e,t,22,!1),n(r,o)}finally{kr(i)}}function el(e,t,n){!ln()||(function ny(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Jo(n,t),Xn(r,t);const s=n.initialInputs;for(let l=o;l<i;l++){const f=e.data[l],y=Se(f);y&&ay(t,n,f);const I=ti(t,e,l,n);Xn(I,t),null!==s&&uy(0,l-o,I,f,0,s),y&&(Dn(n.index,t)[8]=I)}}(e,t,n,Ln(n,t)),128==(128&n.flags)&&function ry(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function ja(){return ie.lFrame.currentDirectiveIndex}();try{kr(i);for(let l=r;l<o;l++){const f=e.data[l],y=t[l];Qr(l),(null!==f.hostBindings||0!==f.hostVars||null!==f.hostAttrs)&&dh(f,y)}}finally{kr(-1),Qr(s)}}(e,t,n))}function tl(e,t,n=Ln){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],l=-1===s?n(t,e):e[s];e[o++]=l}}}function ah(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=nl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function nl(e,t,n,r,o,i,s,l,f,y){const I=22+r,S=I+o,U=function Kv(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:mt);return n}(I,S),te="function"==typeof y?y():y;return U[1]={type:e,blueprint:U,template:n,queries:null,viewQuery:l,declTNode:t,data:U.slice().fill(null,I),bindingStartIndex:I,expandoStartIndex:S,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:f,consts:te,incompleteFirstPass:!1}}function uh(e,t,n,r){const o=_h(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&vh(e).push(r,o.length-1))}function ch(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Cr(e,t,n,r,o,i,s,l){const f=Ln(t,n);let I,y=t.inputs;!l&&null!=y&&(I=y[r])?(Eh(e,n,I,r,o),Q(t)&&function Qv(e,t){const n=Dn(t,e);16&n[2]||(n[2]|=32)}(n,t.index)):3&t.type&&(r=function Zv(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(r),o=null!=s?s(o,t.value||"",r):o,i.setProperty(f,r,o))}function rl(e,t,n,r){let o=!1;if(ln()){const i=function oy(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Ef(n,s.selectors,!1)&&(o||(o=[]),Di(Jo(n,t),e,s.type),Se(s)?(fh(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,hh(n,e.data.length,i.length);for(let I=0;I<i.length;I++){const S=i[I];S.providersResolver&&S.providersResolver(S)}let l=!1,f=!1,y=ys(e,t,i.length,null);for(let I=0;I<i.length;I++){const S=i[I];n.mergedAttrs=_i(n.mergedAttrs,S.hostAttrs),ph(e,n,t,y,S),sy(y,S,s),null!==S.contentQueries&&(n.flags|=8),(null!==S.hostBindings||null!==S.hostAttrs||0!==S.hostVars)&&(n.flags|=128);const U=S.type.prototype;!l&&(U.ngOnChanges||U.ngOnInit||U.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),l=!0),!f&&(U.ngOnChanges||U.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),f=!0),y++}!function Xv(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let l=null,f=null;for(let y=t.directiveStart;y<r;y++){const I=o[y],S=I.inputs,U=null===i||Df(t)?null:cy(S,i);s.push(U),l=ch(S,y,l),f=ch(I.outputs,y,f)}null!==l&&(l.hasOwnProperty("class")&&(t.flags|=16),l.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=l,t.outputs=f}(e,n)}s&&function iy(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new ue(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=_i(n.mergedAttrs,n.attrs),o}function lh(e,t,n,r,o,i){const s=i.hostBindings;if(s){let l=e.hostBindingOpCodes;null===l&&(l=e.hostBindingOpCodes=[]);const f=~t.index;(function ty(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(l)!=f&&l.push(f),l.push(r,o,s)}}function dh(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function fh(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function sy(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Se(t)&&(n[""]=e)}}function hh(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function ph(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=_r(o.type)),s=new Zo(i,Se(o),_s);e.blueprint[r]=s,n[r]=s,lh(e,t,0,r,ys(e,n,o.hostVars,mt),o)}function ay(e,t,n){const r=Ln(t,e),o=ah(n),i=e[10],s=Eu(e,yu(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function uo(e,t,n,r,o,i){const s=Ln(e,t);!function ol(e,t,n,r,o,i,s){if(null==i)e.removeAttribute(t,o,n);else{const l=null==s?he(i):s(i,r||"",o);e.setAttribute(t,o,l,n)}}(t[11],s,i,e.value,n,r,o)}function uy(e,t,n,r,o,i){const s=i[t];if(null!==s){const l=r.setInput;for(let f=0;f<s.length;){const y=s[f++],I=s[f++],S=s[f++];null!==l?r.setInput(n,S,y,I):n[I]=S}}}function cy(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function gh(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function fy(e,t){const n=Dn(t,e);if(b(n)){const r=n[1];48&n[2]?Ca(r,n,r.template,n[8]):n[5]>0&&il(n)}}function il(e){for(let r=mc(e);null!==r;r=_c(r))for(let o=10;o<r.length;o++){const i=r[o];if(512&i[2]){const s=i[1];Ca(s,i,s.template,i[8])}else i[5]>0&&il(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Dn(n[r],e);b(o)&&o[5]>0&&il(o)}}function hy(e,t){const n=Dn(t,e),r=n[1];(function py(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),Du(r,n,n[8])}function Eu(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function sl(e){for(;e;){e[2]|=32;const t=Da(e);if(Ne(e)&&!t)return e;e=t}return null}function mh(e){!function al(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=hc(n);if(null!==r){const o=r[1];zv(o,r,o.template,n)}}}(e[8])}function cl(e,t,n){Gi(0),t(e,n)}const my=(()=>Promise.resolve(null))();function _h(e){return e[7]||(e[7]=[])}function vh(e){return e.cleanup||(e.cleanup=[])}function Dh(e,t){const n=e[9],r=n?n.get(va,null):null;r&&r.handleError(t)}function Eh(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],l=n[i++],f=t[s],y=e.data[s];null!==y.setInput?y.setInput(f,o,r,l):f[l]=o}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Cu(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const l=t[s];"number"==typeof l?i=l:1==i?o=k(o,l):2==i&&(r=k(r,l+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Dy(){const e=Kt();Jr(Ee()[1],e)}function ll(e){let t=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ch(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const r=[e];for(;t;){let o;if(Se(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new ue(903,!1);o=t.\u0275dir}if(o){if(n){r.push(o);const s=e;s.inputs=dl(e.inputs),s.declaredInputs=dl(e.declaredInputs),s.outputs=dl(e.outputs);const l=o.hostBindings;l&&Iy(e,l);const f=o.viewQuery,y=o.contentQueries;if(f&&Cy(e,f),y&&My(e,y),V(e.inputs,o.inputs),V(e.declaredInputs,o.declaredInputs),V(e.outputs,o.outputs),Se(o)&&o.data.animation){const I=e.data;I.animation=(I.animation||[]).concat(o.data.animation)}}const i=o.features;if(i)for(let s=0;s<i.length;s++){const l=i[s];l&&l.ngInherit&&l(e),l===ll&&(n=!1)}}t=Object.getPrototypeOf(t)}!function Ey(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=_i(o.hostAttrs,n=_i(n,o.hostAttrs))}}(r)}function dl(e){return e===en?{}:e===nt?[]:e}function Cy(e,t){const n=e.viewQuery;e.viewQuery=n?(r,o)=>{t(r,o),n(r,o)}:t}function My(e,t){const n=e.contentQueries;e.contentQueries=n?(r,o,i)=>{t(r,o,i),n(r,o,i)}:t}function Iy(e,t){const n=e.hostBindings;e.hostBindings=n?(r,o)=>{t(r,o),n(r,o)}:t}
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
let Mu=null;function Si(){if(!Mu){const e=ke.Symbol;if(e&&e.iterator)Mu=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Mu=r)}}}return Mu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ma(e){return!!fl(e)&&(Array.isArray(e)||!(e instanceof Map)&&Si()in e)}function fl(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Zn(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function hl(e,t,n,r){const o=Ee();return Zn(o,Co(),t)&&(pt(),uo(Xt(),o,e,t,n,r)),hl}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Es(e,t,n,r){return Zn(e,Co(),n)?t+he(n)+r:mt}function xh(e,t,n,r,o,i,s,l){const f=Ee(),y=pt(),I=e+22,S=y.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Py(e,t,n,r,o,i,s,l,f){const y=t.consts,I=vs(t,e,4,s||null,T(y,l));rl(t,n,I,T(y,f)),Jr(t,I);const S=I.tViews=nl(2,I,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,y);return null!==t.queries&&(t.queries.template(t,I),S.queries=t.queries.embeddedTView(I)),I}(I,y,f,t,n,r,o,i,s):y.data[I];cr(S,!1);const U=f[11].createComment("");fu(y,f,U,S),Xn(U,f),Eu(f,f[I]=gh(U,f,U,S)),ae(S)&&el(y,f,S),null!=s&&tl(f,S,l)}
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
function pl(e,t,n){const r=Ee();return Zn(r,Co(),t)&&Cr(pt(),Xt(),r,e,t,r[11],n,!1),pl}function gl(e,t,n,r,o){const s=o?"class":"style";Eh(e,n,t.inputs[s],s,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function bu(e,t,n,r){const o=Ee(),i=pt(),s=22+e,l=o[11],f=o[s]=yc(l,t,function $s(){return ie.lFrame.currentNamespace}()),y=i.firstCreatePass?function Ly(e,t,n,r,o,i,s){const l=t.consts,y=vs(t,e,2,o,T(l,i));return rl(t,n,y,T(l,s)),null!==y.attrs&&Cu(y,y.attrs,!1),null!==y.mergedAttrs&&Cu(y,y.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,y),y}(s,i,o,0,t,n,r):i.data[s];cr(y,!0);const I=y.mergedAttrs;null!==I&&Qo(l,f,I);const S=y.classes;null!==S&&bc(l,f,S);const U=y.styles;return null!==U&&_f(l,f,U),64!=(64&y.flags)&&fu(i,o,f,y),0===function Rt(){return ie.lFrame.elementDepthCount}()&&Xn(f,o),function xt(){ie.lFrame.elementDepthCount++}(),ae(y)&&(el(i,o,y),function sh(e,t,n){if(de(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,y,o)),null!==r&&tl(o,y),bu}function wu(){let e=Kt();Vi()?$i():(e=e.parent,cr(e,!1));const t=e;!function Ct(){ie.lFrame.elementDepthCount--}();const n=pt();return n.firstCreatePass&&(Jr(n,e),de(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function $a(e){return 0!=(16&e.flags)}(t)&&gl(n,t,Ee(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function zs(e){return 0!=(32&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&gl(n,t,Ee(),t.stylesWithoutHost,!1),wu}function ml(e,t,n,r){return bu(e,t,n,r),wu(),ml
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}function Fh(){return Ee()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yl(e){return!!e&&"function"==typeof e.then}function Nh(e){return!!e&&"function"==typeof e.subscribe}const Lh=Nh;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Dl(e,t,n,r){const o=Ee(),i=pt(),s=Kt();return function Bh(e,t,n,r,o,i,s,l){const f=ae(r),I=e.firstCreatePass&&vh(e),S=t[8],U=_h(t);let te=!0;if(3&r.type||l){const Ve=Ln(r,t),ze=l?l(Ve):Ve,ft=U.length,Ae=l?wt=>l(Jt(wt[r.index])):r.index;let ot=null;if(!l&&f&&(ot=function By(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const l=t[7],f=o[i+2];return l.length>f?l[f]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==ot)(ot.__ngLastListenerFn__||ot).__ngNextListenerFn__=i,ot.__ngLastListenerFn__=i,te=!1;else{i=jh(r,t,S,i,!1);const wt=n.listen(ze,o,i);U.push(i,wt),I&&I.push(o,Ae,ft,ft+1)}}else i=jh(r,t,S,i,!1);const ve=r.outputs;let Oe;if(te&&null!==ve&&(Oe=ve[o])){const Ve=Oe.length;if(Ve)for(let ze=0;ze<Ve;ze+=2){const sn=t[Oe[ze]][Oe[ze+1]].subscribe(i),Fi=U.length;U.push(i,sn),I&&I.push(o,r.index,Fi,-(Fi+1))}}}(i,o,o[11],s,e,t,0,r),Dl}function Uh(e,t,n,r){try{return!1!==n(r)}catch(o){return Dh(e,o),!1}}function jh(e,t,n,r,o){return function i(s){if(s===Function)return r;sl(2&e.flags?Dn(e.index,t):t);let f=Uh(t,0,r,s),y=i.__ngNextListenerFn__;for(;y;)f=Uh(t,0,y,s)&&f,y=y.__ngNextListenerFn__;return o&&!1===f&&(s.preventDefault(),s.returnValue=!1),f}}
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
     */function Hh(e=1){return function js(e){return(ie.lFrame.contextLView=function Va(e,t){for(;e>0;)t=t[15],e--;return t}(e,ie.lFrame.contextLView))[8]}(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Uy(e,t){let n=null;const r=function q_(e){const t=e.attrs;if(null!=t){const n=t.indexOf(5);if(0==(1&n))return t[n+1]}return null}(e);for(let o=0;o<t.length;o++){const i=t[o];if("*"!==i){if(null===r?Ef(e,i,!0):Q_(r,i))return o}else n=o}return n}function Vh(e){const t=Ee()[16][6];if(!t.projection){const r=t.projection=xo(e?e.length:1,null),o=r.slice();let i=t.child;for(;null!==i;){const s=e?Uy(i,e):0;null!==s&&(o[s]?o[s].projectionNext=i:r[s]=i,o[s]=i),i=i.next}}}function $h(e,t=0,n){const r=Ee(),o=pt(),i=vs(o,22+e,16,null,n||null);null===i.projection&&(i.projection=t),$i(),64!=(64&i.flags)&&function V_(e,t,n){mf(t[11],0,t,n,sf(e,n,t),lf(n.parent||t[6],n,t))}(o,r,i)}function El(e,t,n){return Cl(e,"",t,"",n),El}function Cl(e,t,n,r,o){const i=Ee(),s=Es(i,t,n,r);return s!==mt&&Cr(pt(),Xt(),i,e,s,i[11],o,!1),Cl}function Qh(e,t,n,r,o){const i=e[n+1],s=null===t;let l=r?$r(i):Lo(i),f=!1;for(;0!==l&&(!1===f||s);){const I=e[l+1];Vy(e[l],t)&&(f=!0,e[l+1]=r?Wc(I):Vc(I)),l=r?$r(I):Lo(I)}f&&(e[n+1]=r?Vc(i):Wc(i))}function Vy(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Po(e,t)>=0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ml(e,t){return function Wr(e,t,n,r){const o=Ee(),i=pt(),s=function Sr(e){const t=ie.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}(2);i.firstUpdatePass&&function ap(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Bn()],s=function sp(e,t){return t>=e.expandoStartIndex}(e,n);(function dp(e,t){return 0!=(e.flags&(t?16:32))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */)(i,r)&&null===t&&!s&&(t=!1),t=function Zy(e,t,n,r){const o=function Wi(e){const t=ie.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=ba(n=Il(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=Il(o,e,t,n,r),null===i){let f=function Qy(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Lo(r))return e[$r(r)]}(e,t,r);void 0!==f&&Array.isArray(f)&&(f=Il(null,e,t,f[1],r),f=ba(f,t.attrs,r),function Jy(e,t,n,r){e[$r(n?t.classBindings:t.styleBindings)]=r}(e,t,r,f))}else i=function eD(e,t,n){let r;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=ba(r,e[i].hostAttrs,n);return ba(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function jy(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,l=$r(s),f=Lo(s);e[r]=n;let I,y=!1;if(Array.isArray(n)){const S=n;I=S[1],(null===I||Po(S,I)>0)&&(y=!0)}else I=n;if(o)if(0!==f){const U=$r(e[l+1]);e[r+1]=mu(U,l),0!==U&&(e[U+1]=$c(e[U+1],r)),e[l+1]=function Pv(e,t){return 131071&e|t<<17}(e[l+1],r)}else e[r+1]=mu(l,0),0!==l&&(e[l+1]=$c(e[l+1],r)),l=r;else e[r+1]=mu(f,0),0===l?l=r:e[f+1]=$c(e[f+1],r),f=r;y&&(e[r+1]=Vc(e[r+1])),Qh(e,I,r,!0),Qh(e,I,r,!1),function Hy(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Po(i,t)>=0&&(n[r+1]=Wc(n[r+1]))}(t,I,e,r,i),s=mu(l,f),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}(i,e,s,r),t!==mt&&Zn(o,s,t)&&function cp(e,t,n,r,o,i,s,l){if(!(3&t.type))return;const f=e.data,y=f[l+1];Tu(function Xf(e){return 1==(1&e)}(y)?lp(f,t,n,o,Lo(y),s):void 0)||(Tu(i)||function qf(e){return 2==(2&e)}(y)&&(i=lp(f,null,n,o,l,s)),function W_(e,t,n,r,o){if(t)o?e.addClass(n,r):e.removeClass(n,r);else{let i=-1===r.indexOf("-")?void 0:so.DashCase;null==o?e.removeStyle(n,r,i):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),i|=so.Important),e.setStyle(n,r,o,i))}}(r,s,hn(Bn(),n),o,i))}(i,i.data[Bn()],o,o[11],e,o[s+1]=function rD(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=$(Fo(e)))),e}(t,n),r,s)}(e,t,null,!0),Ml}function Il(e,t,n,r,o){let i=null;const s=n.directiveEnd;let l=n.directiveStylingLast;for(-1===l?l=n.directiveStart:l++;l<s&&(i=t[l],r=ba(r,i.hostAttrs,o),i!==e);)l++;return null!==e&&(n.directiveStylingLast=l),r}function ba(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),Bt(e,s,!!n||t[++i]))}return void 0===e?null:e}function lp(e,t,n,r,o,i){const s=null===t;let l;for(;o>0;){const f=e[o],y=Array.isArray(f),I=y?f[1]:f,S=null===I;let U=n[o+1];U===mt&&(U=S?nt:void 0);let te=S?ia(U,r):I===r?U:void 0;if(y&&!Tu(te)&&(te=ia(f,r)),Tu(te)&&(l=te,s))return l;const ve=e[o+1];o=s?$r(ve):Lo(ve)}if(null!==t){let f=i?t.residualClasses:t.residualStyles;null!=f&&(l=ia(f,r))}return l}function Tu(e){return void 0!==e}function fp(e,t=""){const n=Ee(),r=pt(),o=e+22,i=r.firstCreatePass?vs(r,o,1,t,null):r.data[o],s=n[o]=function vc(e,t){return e.createText(t)}(n[11],t);fu(r,n,s,i),cr(i,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function bl(e){return wl("",e,""),bl}function wl(e,t,n){const r=Ee(),o=Es(r,e,t,n);return o!==mt&&function ko(e,t,n){const r=hn(t,e);!function tf(e,t,n){e.setValue(t,n)}(e[11],r,n)}(r,Bn(),o),wl}
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
const Ri=void 0;var MD=["en",[["a","p"],["AM","PM"],Ri],[["AM","PM"],Ri,Ri],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ri,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ri,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Ri,"{1} 'at' {0}",Ri],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function CD(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Os={};function Tl(e){const t=function ID(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=Pp(t);if(n)return n;const r=t.split("-")[0];if(n=Pp(r),n)return n;if("en"===r)return MD;throw new ue(701,!1)}function xp(e){return Tl(e)[dt.PluralCase]}function Pp(e){return e in Os||(Os[e]=ke.ng&&ke.ng.common&&ke.ng.common.locales&&ke.ng.common.locales[e]),Os[e]}var dt=(()=>((dt=dt||{})[dt.LocaleId=0]="LocaleId",dt[dt.DayPeriodsFormat=1]="DayPeriodsFormat",dt[dt.DayPeriodsStandalone=2]="DayPeriodsStandalone",dt[dt.DaysFormat=3]="DaysFormat",dt[dt.DaysStandalone=4]="DaysStandalone",dt[dt.MonthsFormat=5]="MonthsFormat",dt[dt.MonthsStandalone=6]="MonthsStandalone",dt[dt.Eras=7]="Eras",dt[dt.FirstDayOfWeek=8]="FirstDayOfWeek",dt[dt.WeekendRange=9]="WeekendRange",dt[dt.DateFormat=10]="DateFormat",dt[dt.TimeFormat=11]="TimeFormat",dt[dt.DateTimeFormat=12]="DateTimeFormat",dt[dt.NumberSymbols=13]="NumberSymbols",dt[dt.NumberFormats=14]="NumberFormats",dt[dt.CurrencyCode=15]="CurrencyCode",dt[dt.CurrencySymbol=16]="CurrencySymbol",dt[dt.CurrencyName=17]="CurrencyName",dt[dt.Currencies=18]="Currencies",dt[dt.Directionality=19]="Directionality",dt[dt.PluralCase=20]="PluralCase",dt[dt.ExtraData=21]="ExtraData",dt))();const Rs="en-US";
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
let Fp=Rs;class IE{resolveComponentFactory(t){
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
throw function ME(e){const t=Error(`No component factory found for ${$(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let Oa=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new IE,e})();class xi{}class ag{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ug{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function wE(){return Ps(Kt(),Ee())}function Ps(e,t){return new Ra(Ln(e,t))}let Ra=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=wE,e})();function TE(e){return e instanceof Ra?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class cg{}let AE=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function SE(){const e=Ee(),n=Dn(Kt().index,e);return(rn(n)?n:e)[11]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),OE=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=Et({token:e,providedIn:"root",factory:()=>null}),e})();class lg{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const RE=new lg("14.0.5"),Fl={};
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
function xu(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(Jt(i)),x(i))for(let l=10;l<i.length;l++){const f=i[l],y=f[1].firstChild;null!==y&&xu(f[1],f,y,r)}const s=n.type;if(8&s)xu(e,t,n.child,r);else if(32&s){const l=gc(n,t);let f;for(;f=l();)r.push(f)}else if(16&s){const l=pf(t,n);if(Array.isArray(l))r.push(...l);else{const f=Da(t[16]);xu(f[1],f,l,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class xa{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return xu(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(x(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(Dc(t,r),jr(n,r))}this._attachedToViewContainer=!1}rf(this._lView[1],this._lView)}onDestroy(t){uh(this._lView[1],this._lView,null,t)}markForCheck(){sl(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){!function ul(e,t,n){const r=t[10];r.begin&&r.begin();try{Ca(e,t,e.template,n)}catch(o){throw Dh(t,o),o}finally{r.end&&r.end()}}(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ue(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function F_(e,t){Ea(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new ue(902,!1);this._appRef=t}}class xE extends xa{constructor(t){super(t),this._view=t}detectChanges(){mh(this._view)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Nl extends Oa{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=at(t);return new Ll(n,this.ngModule)}}function dg(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class FE{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,Fl,r);return o!==Fl||n===Fl?o:this.parentInjector.get(t,n,r)}}class Ll extends ug{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function ev(e){return e.map(J_).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return dg(this.componentDef.inputs)}get outputs(){return dg(this.componentDef.outputs)}create(t,n,r,o){let i=(o=o||this.ngModule)instanceof ps?o:o?.injector;i&&null!==this.componentDef.getStandaloneInjector&&(i=this.componentDef.getStandaloneInjector(i)||i);const s=i?new FE(t,i):t,l=s.get(cg,null);if(null===l)throw new ue(407,!1);const f=s.get(OE,null),y=l.createRenderer(null,this.componentDef),I=this.componentDef.selectors[0][0]||"div",S=r?function Yv(e,t,n){return e.selectRootElement(t,n===gt.ShadowDom)}(y,r,this.componentDef.encapsulation):yc(l.createRenderer(null,this.componentDef),I,function PE(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(I)),U=this.componentDef.onPush?288:272,te=function yy(e,t){return{components:[],scheduler:e||I_,clean:my,playerHandler:t||null,flags:0}}(),ve=nl(0,null,null,1,0,null,null,null,null,null),Oe=yu(null,ve,te,U,null,null,l,y,f,s,null);let Ve,ze;Yo(Oe);try{const ft=function _y(e,t,n,r,o,i){const s=n[1];n[22]=e;const f=vs(s,22,2,"#host",null),y=f.mergedAttrs=t.hostAttrs;null!==y&&(Cu(f,y,!0),null!==e&&(Qo(o,e,y),null!==f.classes&&bc(o,e,f.classes),null!==f.styles&&_f(o,e,f.styles)));const I=r.createRenderer(e,t),S=yu(n,ah(t),null,t.onPush?32:16,n[22],f,r,I,i||null,null,null);return s.firstCreatePass&&(Di(Jo(f,n),s,t.type),fh(s,f),hh(f,n.length,1)),Eu(n,S),n[22]=S}(S,this.componentDef,Oe,l,y);if(S)if(r)Qo(y,S,["ng-version",RE.full]);else{const{attrs:Ae,classes:ot}=function tv(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Vr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);Ae&&Qo(y,S,Ae),ot&&ot.length>0&&bc(y,S,ot.join(" "))}if(ze=zo(ve,22),void 0!==n){const Ae=ze.projection=[];for(let ot=0;ot<this.ngContentSelectors.length;ot++){const wt=n[ot];Ae.push(null!=wt?Array.from(wt):null)}}Ve=function vy(e,t,n,r,o){const i=n[1],s=function ey(e,t,n){const r=Kt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),ph(e,r,t,ys(e,t,1,null),n));const o=ti(t,e,r.directiveStart,r);Xn(o,t);const i=Ln(r,t);return i&&Xn(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,null!==o)for(const f of o)f(s,t);if(t.contentQueries){const f=Kt();t.contentQueries(1,s,f.directiveStart)}const l=Kt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(kr(l.index),lh(n[1],l,0,l.directiveStart,l.directiveEnd,t),dh(t,s)),s}(ft,this.componentDef,Oe,te,[Dy]),Du(ve,Oe,null)}finally{Xo()}return new LE(this.componentType,Ve,Ps(ze,Oe),Oe,ze)}}class LE extends class bE{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new xE(o),this.componentType=t}get injector(){return new So(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function kE(e,t){return new fg(e,t??null)}class fg extends xi{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Nl(this);const r=bt(t);this._bootstrapComponents=No(r.bootstrap),this._r3Injector=kf(t,n,[{provide:xi,useValue:this},{provide:Oa,useValue:this.componentFactoryResolver}],$(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this.get(t)}get(t,n=ao.THROW_IF_NOT_FOUND,r=Je.Default){return t===ao||t===xi||t===Sc?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class kl extends ag{constructor(t){super(),this.moduleType=t}create(t){return new fg(this.moduleType,t)}}class BE extends xi{constructor(t,n,r){super(),this.componentFactoryResolver=new Nl(this),this.instance=null;const o=new Ff([...t,{provide:xi,useValue:this},{provide:Oa,useValue:this.componentFactoryResolver}],n||xc(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Bl(e,t=null,n=null){return new BE(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yg(e,t,n,r,o,i){const s=t+n;return Zn(e,s,o)?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function co(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function Pa(e,t){const n=e[t];return n===mt?void 0:n}(e,s+1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ig(e,t){const n=pt();let r;const o=e+22;n.firstCreatePass?(r=function iC(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=_r(r.type)),s=Gt(_s);try{const l=To(!1),f=i();return To(l),function Fy(e,t,n,r){n>=e.data.length&&(e.data[n]=null,e.blueprint[n]=null),t[n]=r}(n,Ee(),o,f),f}finally{Gt(s)}}function bg(e,t,n){const r=e+22,o=Ee(),i=function Nr(e,t){return e[t]}(o,r);return function Fa(e,t){return e[1].data[t].pure}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(o,r)?yg(o,function kn(){const e=ie.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),t,i.transform,n,i):i.transform(n)}function jl(e){return t=>{setTimeout(e,void 0,t)}}const ho=class lC extends m.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){const f=t;o=f.next?.bind(f),i=f.error?.bind(f),s=f.complete?.bind(f)}this.__isAsync&&(i=jl(i),o&&(o=jl(o)),s&&(s=jl(s)));const l=super.subscribe({next:o,error:i,complete:s});return t instanceof E.w0&&t.add(l),l}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function dC(){return this._results[Si()]()}class Hl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=Si(),r=Hl.prototype;r[n]||(r[n]=dC)}get changes(){return this._changes||(this._changes=new ho)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=gn(t);(this._changesDetected=!function nr(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Na=(()=>{class e{}return e.__NG_ELEMENT_ID__=pC,e})();const fC=Na,hC=class extends fC{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=yu(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),Du(r,o,t),new xa(o)}};function pC(){return Pu(Kt(),Ee())}function Pu(e,t){return 4&e.type?new hC(t,e,Ps(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Fu=(()=>{class e{}return e.__NG_ELEMENT_ID__=gC,e})();function gC(){return Ag(Kt(),Ee())}const mC=Fu,wg=class extends mC{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return Ps(this._hostTNode,this._hostLView)}get injector(){return new So(this._hostTNode,this._hostLView)}get parentInjector(){const t=to(this._hostTNode,this._hostLView);if(Zs(t)){const n=wo(t,this._hostLView),r=bo(t);return new So(n[1].data[r+8],n)}return new So(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Tg(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function Ot(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let l;if(s)l=n;else{const S=n||{};l=S.index,r=S.injector,o=S.projectableNodes,i=S.environmentInjector||S.ngModuleRef}const f=s?t:new Ll(at(t)),y=r||this.parentInjector;if(!i&&null==f.ngModule){const U=(s?y:this.parentInjector).get(ps,null);U&&(i=U)}const I=f.create(y,o,void 0,i);return this.insert(I.hostView,l),I}insert(t,n){const r=t._lView,o=r[1];if(function _(e){return x(e[3])}(r)){const I=this.indexOf(t);if(-1!==I)this.detach(I);else{const S=r[3],U=new wg(S,S[6],S[3]);U.detach(U.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function L_(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],dr(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function k_(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const l=t[19];null!==l&&l.insertView(e),t[2]|=64}(o,r,s,i);const l=Mc(i,s),f=r[11],y=du(f,s[7]);return null!==y&&function P_(e,t,n,r,o,i){r[0]=o,r[6]=t,Ea(e,r,n,1,o,i)}(o,s[6],f,r,y,l),t.attachToViewContainerRef(),dr(Vl(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Tg(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=Dc(this._lContainer,n);r&&(jr(Vl(this._lContainer),n),rf(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=Dc(this._lContainer,n);return r&&null!=jr(Vl(this._lContainer),n)?new xa(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Tg(e){return e[8]}function Vl(e){return e[8]||(e[8]=[])}function Ag(e,t){let n;const r=t[e.index];if(x(r))n=r;else{let o;if(8&e.type)o=Jt(r);else{const i=t[11];o=i.createComment("");const s=Ln(e,t);Ti(i,du(i,s),o,function H_(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=gh(r,t,o,e),Eu(t,n)}return new wg(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class $l{constructor(t){this.queryList=t,this.matches=null}clone(){return new $l(this.queryList)}setDirty(){this.queryList.setDirty()}}class Wl{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new Wl(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==kg(t,n).matches&&this.queries[n].setDirty()}}class Sg{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class Gl{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new Gl(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class zl{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new zl(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,yC(n,i)),this.matchTNodeWithReadOption(t,n,Ci(n,t,i,!1,!1))}else r===Na?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Ci(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Ra||o===Fu||o===Na&&4&n.type)this.addMatch(n.index,-2);else{const i=Ci(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function yC(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function EC(e,t,n,r){return-1===n?function DC(e,t){return 11&e.type?Ps(e,t):4&e.type?Pu(e,t):null}(t,e):-2===n?function CC(e,t,n){return n===Ra?Ps(t,e):n===Na?Pu(t,e):n===Fu?Ag(t,e):void 0}(e,t,r):ti(e,e[1],n,t)}function Og(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,l=[];for(let f=0;f<s.length;f+=2){const y=s[f];l.push(y<0?null:EC(t,i[y],s[f+1],n.metadata.read))}o.matches=l}return o.matches}function Kl(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Og(e,t,o,n);for(let l=0;l<i.length;l+=2){const f=i[l];if(f>0)r.push(s[l/2]);else{const y=i[l+1],I=t[-f];for(let S=10;S<I.length;S++){const U=I[S];U[17]===U[3]&&Kl(U[1],U,y,r)}if(null!==I[9]){const S=I[9];for(let U=0;U<S.length;U++){const te=S[U];Kl(te[1],te,y,r)}}}}}return r}function Rg(e){const t=Ee(),n=pt(),r=Bs();Gi(r+1);const o=kg(n,r);if(e.dirty&&g(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?Kl(n,t,r,[]):Og(n,t,o,r);e.reset(i,TE),e.notifyOnChanges()}return!0}return!1}function xg(e,t,n){const r=pt();r.firstCreatePass&&(Lg(r,new Sg(e,t,n),-1),2==(2&t)&&(r.staticViewQueries=!0)),Ng(r,Ee(),t)}function Pg(e,t,n,r){const o=pt();if(o.firstCreatePass){const i=Kt();Lg(o,new Sg(t,n,r),i.index),function IC(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}Ng(o,Ee(),n)}function Fg(){return function MC(e,t){return e[19].queries[t].queryList}(Ee(),Bs())}function Ng(e,t,n){const r=new Hl(4==(4&n));uh(e,t,r,r.destroy),null===t[19]&&(t[19]=new Wl),t[19].queries.push(new $l(r))}function Lg(e,t,n){null===e.queries&&(e.queries=new Gl),e.queries.track(new zl(t,n))}function kg(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ns(e){const t=at(e)||It(e)||Ye(e);return null!==t&&t.standalone}
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
function Lu(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const nm=new At("Application Initializer");let ku=(()=>{class e{constructor(n){this.appInits=n,this.resolve=Lu,this.reject=Lu,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(yl(i))n.push(i);else if(Lh(i)){const s=new Promise((l,f)=>{i.subscribe({complete:l,error:f})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(En(nm,8))},e.\u0275prov=Et({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const rm=new At("AppId",{providedIn:"root",factory:function om(){return`${Ql()}${Ql()}${Ql()}`}});function Ql(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const im=new At("Platform Initializer"),GC=new At("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),sm=new At("appBootstrapListener");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let zC=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Et({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Bu=new At("LocaleId",{providedIn:"root",factory:()=>Zu(Bu,Je.Optional|Je.SkipSelf)||function KC(){return typeof $localize<"u"&&$localize.locale||Rs}()}),YC=new At("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class qC{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let XC=(()=>{class e{compileModuleSync(n){return new kl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=No(bt(n).declarations).reduce((s,l)=>{const f=at(l);return f&&s.push(new Ll(f)),s},[]);return new qC(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Et({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const JC=(()=>Promise.resolve(0))();function Jl(e){typeof Zone>"u"?JC.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class Mr{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ho(!1),this.onMicrotaskEmpty=new ho(!1),this.onStable=new ho(!1),this.onError=new ho(!1),typeof Zone>"u")throw new ue(908,!1);Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function e0(){let e=ke.requestAnimationFrame,t=ke.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function r0(e){const t=()=>{!function n0(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ke,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,td(e),e.isCheckStableRunning=!0,ed(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),td(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,l)=>{try{return cm(e),n.invokeTask(o,i,s,l)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),lm(e)}},onInvoke:(n,r,o,i,s,l,f)=>{try{return cm(e),n.invoke(o,i,s,l,f)}finally{e.shouldCoalesceRunChangeDetection&&t(),lm(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,td(e),ed(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Mr.isInAngularZone())throw new ue(909,!1)}static assertNotInAngularZone(){if(Mr.isInAngularZone())throw new ue(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,t0,Lu,Lu);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const t0={};function ed(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function td(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function cm(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function lm(e){e._nesting--,ed(e)}class o0{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ho,this.onMicrotaskEmpty=new ho,this.onStable=new ho,this.onError=new ho}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const dm=new At(""),fm=new At("");let nd,s0=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,nd||(function a0(e){nd=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Mr.assertNotInAngularZone(),Jl(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Jl(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(En(Mr),En(hm),En(fm))},e.\u0275prov=Et({token:e,factory:e.\u0275fac}),e})(),hm=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return nd?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Et({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),ii=null;const pm=new At("AllowMultipleToken"),rd=new At("PlatformDestroyListeners");class l0{constructor(t,n){this.name=t,this.token=n}}function mm(e,t,n=[]){const r=`Platform: ${t}`,o=new At(r);return(i=[])=>{let s=od();if(!s||s.injector.get(pm,!1)){const l=[...n,...i,{provide:o,useValue:!0}];e?e(l):function d0(e){if(ii&&!ii.get(pm,!1))throw new ue(400,!1);ii=e;const t=e.get(vm);(function gm(e){const t=e.get(im,null);t&&t.forEach(n=>n())})(e)}(function _m(e=[],t){return ao.create({name:t,providers:[{provide:Oc,useValue:"platform"},{provide:rd,useValue:new Set([()=>ii=null])},...e]})}(l,r))}return function h0(e){const t=od();if(!t)throw new ue(401,!1);return t}()}}function od(){return ii?.get(vm)??null}let vm=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function p0(e,t){let n;return n="noop"===e?new o0:("zone.js"===e?void 0:e)||new Mr(t),n}(r?.ngZone,function ym(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:Mr,useValue:o}];return o.run(()=>{const s=ao.create({providers:i,parent:this.injector,name:n.moduleType.name}),l=n.create(s),f=l.injector.get(va,null);if(!f)throw new ue(402,!1);return o.runOutsideAngular(()=>{const y=o.onError.subscribe({next:I=>{f.handleError(I)}});l.onDestroy(()=>{ju(this._modules,l),y.unsubscribe()})}),function Dm(e,t,n){try{const r=n();return yl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(f,o,()=>{const y=l.injector.get(ku);return y.runInitializers(),y.donePromise.then(()=>(function Np(e){vt(e,"Expected localeId to be defined"),"string"==typeof e&&(Fp=e.toLowerCase().replace(/_/g,"-"))}(l.injector.get(Bu,Rs)||Rs),this._moduleDoBootstrap(l),l))})})}bootstrapModule(n,r=[]){const o=Em({},r);return function u0(e,t,n){const r=new kl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Uu);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new ue(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new ue(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(rd,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(En(ao))},e.\u0275prov=Et({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Em(e,t){return Array.isArray(t)?t.reduce(Em,e):{...e,...t}}let Uu=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new Y.y(l=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{l.next(this._stable),l.complete()})}),s=new Y.y(l=>{let f;this._zone.runOutsideAngular(()=>{f=this._zone.onStable.subscribe(()=>{Mr.assertNotInAngularZone(),Jl(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,l.next(!0))})})});const y=this._zone.onUnstable.subscribe(()=>{Mr.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{l.next(!1)}))});return()=>{f.unsubscribe(),y.unsubscribe()}});this.isStable=(0,J.T)(i,s.pipe((0,F.B)()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof ug;if(!this._injector.get(ku).done)throw!o&&Ns(n),new ue(405,false);let s;s=o?n:this._injector.get(Oa).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const l=function c0(e){return e.isBoundToModule}(s)?void 0:this._injector.get(xi),y=s.create(ao.NULL,[],r||s.selector,l),I=y.location.nativeElement,S=y.injector.get(dm,null);return S?.registerApplication(I),y.onDestroy(()=>{this.detachView(y.hostView),ju(this.components,y),S?.unregisterApplication(I)}),this._loadComponent(y),y}tick(){if(this._runningTick)throw new ue(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;ju(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(sm,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>ju(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new ue(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(En(Mr),En(ao),En(va))},e.\u0275prov=Et({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function ju(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Mm=!0,Im=!1;function m0(){return Im=!0,Mm}function _0(){if(Im)throw new Error("Cannot enable prod mode after platform setup.");Mm=!1}
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
let v0=(()=>{class e{}return e.__NG_ELEMENT_ID__=y0,e})();function y0(e){return function D0(e,t,n){if(Q(e)&&!n){const r=Dn(e.index,t);return new xa(r,r)}return 47&e.type?new xa(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(Kt(),Ee(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Am{constructor(){}supports(t){return Ma(t)}create(t){return new w0(t)}}const b0=(e,t)=>t;class w0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||b0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Om(r,o,i)?n:r,l=Om(s,o,i),f=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const y=l-o,I=f-o;if(y!=I){for(let U=0;U<y;U++){const te=U<i.length?i[U]:i[U]=0,ve=te+U;I<=ve&&ve<y&&(i[U]=te+1)}i[s.previousIndex]=I-y}}l!==f&&t(s,l,f)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Ma(t))throw new ue(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let l=0;l<this.length;l++)i=t[l],s=this._trackByFn(l,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,l)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,l),r=!0),n=n._next}else o=0,function Sy(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Si()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,l=>{s=this._trackByFn(o,l),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,l,s,o)),Object.is(n.item,l)||this._addIdentityChange(n,l)):(n=this._mismatch(n,l,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new T0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new Sm),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Sm),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class T0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class A0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class Sm{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new A0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Om(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Rm{constructor(){}supports(t){return t instanceof Map||fl(t)}create(){return new S0}}class S0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||fl(t)))throw new ue(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new O0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class O0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xm(){return new cd([new Am])}let cd=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||xm()),deps:[[e,new Ii,new as]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new ue(901,!1)}}return e.\u0275prov=Et({token:e,providedIn:"root",factory:xm}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Pm(){return new ld([new Rm])}let ld=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Pm()),deps:[[e,new Ii,new as]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new ue(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=Et({token:e,providedIn:"root",factory:Pm}),e})();const P0=mm(null,"core",[]);
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
let F0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(En(Uu))},e.\u0275mod=it({type:e}),e.\u0275inj=un({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function N0(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
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
     */,1416:(z,N,D)=>{D.d(N,{Hw:()=>xd,Ps:()=>cu});var m=D(4650),E=D(6895);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Y;try{Y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Y=!1}let J=(()=>{class M{constructor(d){this._platformId=d,this.isBrowser=this._platformId?(0,E.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!Y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(m.Lbi))},M.\u0275prov=m.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})();
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
function ci(M){return Array.isArray(M)?M:[M]}
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
var Bi=D(7579),Vo=D(9841),_r=D(7272),yo=D(8306),Tr=D(5698),$o=D(5684),Fr=D(8372),Mn=D(4004),Ar=D(8675),Kr=D(2722);
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
const Yr=new Set;let vr,Nn=(()=>{class M{constructor(d){this._platform=d,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ji}matchMedia(d){return(this._platform.WEBKIT||this._platform.BLINK)&&function Wo(M){if(!Yr.has(M))try{vr||(vr=document.createElement("style"),vr.setAttribute("type","text/css"),document.head.appendChild(vr)),vr.sheet&&(vr.sheet.insertRule(`@media ${M} {body{ }}`,0),Yr.add(M))}catch(h){console.error(h)}}(d),this._matchMedia(d)}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(J))},M.\u0275prov=m.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})();function ji(M){return{matches:"all"===M||""===M,media:M,addListener:()=>{},removeListener:()=>{}}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Go=(()=>{class M{constructor(d,C){this._mediaMatcher=d,this._zone=C,this._queries=new Map,this._destroySubject=new Bi.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(d){return qr(ci(d)).some(P=>this._registerQuery(P).mql.matches)}observe(d){const P=qr(ci(d)).map(be=>this._registerQuery(be).observable);let ne=(0,Vo.a)(P);return ne=(0,_r.z)(ne.pipe((0,Tr.q)(1)),ne.pipe((0,$o.T)(1),(0,Fr.b)(0))),ne.pipe((0,Mn.U)(be=>{const Xe={matches:!1,breakpoints:{}};return be.forEach(({matches:ut,query:Zt})=>{Xe.matches=Xe.matches||ut,Xe.breakpoints[Zt]=ut}),Xe}))}_registerQuery(d){if(this._queries.has(d))return this._queries.get(d);const C=this._mediaMatcher.matchMedia(d),ne={observable:new yo.y(be=>{const Xe=ut=>this._zone.run(()=>be.next(ut));return C.addListener(Xe),()=>{C.removeListener(Xe)}}).pipe((0,Ar.O)(C),(0,Mn.U)(({matches:be})=>({query:d,matches:be})),(0,Kr.R)(this._destroySubject)),mql:C};return this._queries.set(d,ne),ne}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(Nn),m.LFG(m.R0b))},M.\u0275prov=m.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})();function qr(M){return M.map(h=>h.split(",")).reduce((h,d)=>h.concat(d)).map(h=>h.trim())}
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
const fi="cdk-high-contrast-black-on-white",Yo="cdk-high-contrast-white-on-black",qo="cdk-high-contrast-active";let zi=(()=>{class M{constructor(d,C){this._platform=d,this._document=C,this._breakpointSubscription=(0,m.f3M)(Go).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const d=this._document.createElement("div");d.style.backgroundColor="rgb(1,2,3)",d.style.position="absolute",this._document.body.appendChild(d);const C=this._document.defaultView||window,P=C&&C.getComputedStyle?C.getComputedStyle(d):null,ne=(P&&P.backgroundColor||"").replace(/ /g,"");switch(d.remove(),ne){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const d=this._document.body.classList;d.remove(qo,fi,Yo),this._hasCheckedHighContrastMode=!0;const C=this.getHighContrastMode();1===C?d.add(qo,fi):2===C&&d.add(qo,Yo)}}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(J),m.LFG(E.K0))},M.\u0275prov=m.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})(),Xt=(()=>{class M{}return M.\u0275fac=function(d){return new(d||M)},M.\u0275mod=m.oAB({type:M}),M.\u0275inj=m.cJS({}),M})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ki=new m.OlP("mat-sanity-checks",{providedIn:"root",factory:function mi(){return!0}});let Yi=(()=>{class M{constructor(d,C,P){this._sanityChecks=C,this._document=P,this._hasDoneGlobalChecks=!1,d._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(d){return!
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Me(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}
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
     */()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[d])}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(zi),m.LFG(Ki,8),m.LFG(E.K0))},M.\u0275mod=m.oAB({type:M}),M.\u0275inj=m.cJS({imports:[Xt,Xt]}),M})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Io(M,h){return class extends M{constructor(...d){super(...d),this.defaultColor=h,this.color=h}get color(){return this._color}set color(d){const C=d||this.defaultColor;C!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),C&&this._elementRef.nativeElement.classList.add(`mat-${C}`),this._color=C)}}}
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
var no=D(4742),Ur=D(8421),rs=D(7669),Ro=D(5403),ro=D(3268),Ya=D(1810),At=D(9646),c=D(2843),u=D(727),a=D(8505),p=D(262),v=D(8746),w=D(3099),R=D(4351),B=D(9300);
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
class me{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class qe{constructor(h){this.normalizedNames=new Map,this.lazyUpdate=null,h?this.lazyInit="string"==typeof h?()=>{this.headers=new Map,h.split("\n").forEach(d=>{const C=d.indexOf(":");if(C>0){const P=d.slice(0,C),ne=P.toLowerCase(),be=d.slice(C+1).trim();this.maybeSetNormalizedName(P,ne),this.headers.has(ne)?this.headers.get(ne).push(be):this.headers.set(ne,[be])}})}:()=>{this.headers=new Map,Object.keys(h).forEach(d=>{let C=h[d];const P=d.toLowerCase();"string"==typeof C&&(C=[C]),C.length>0&&(this.headers.set(P,C),this.maybeSetNormalizedName(d,P))})}:this.headers=new Map}has(h){return this.init(),this.headers.has(h.toLowerCase())}get(h){this.init();const d=this.headers.get(h.toLowerCase());return d&&d.length>0?d[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(h){return this.init(),this.headers.get(h.toLowerCase())||null}append(h,d){return this.clone({name:h,value:d,op:"a"})}set(h,d){return this.clone({name:h,value:d,op:"s"})}delete(h,d){return this.clone({name:h,value:d,op:"d"})}maybeSetNormalizedName(h,d){this.normalizedNames.has(d)||this.normalizedNames.set(d,h)}init(){this.lazyInit&&(this.lazyInit instanceof qe?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(h=>this.applyUpdate(h)),this.lazyUpdate=null))}copyFrom(h){h.init(),Array.from(h.headers.keys()).forEach(d=>{this.headers.set(d,h.headers.get(d)),this.normalizedNames.set(d,h.normalizedNames.get(d))})}clone(h){const d=new qe;return d.lazyInit=this.lazyInit&&this.lazyInit instanceof qe?this.lazyInit:this,d.lazyUpdate=(this.lazyUpdate||[]).concat([h]),d}applyUpdate(h){const d=h.name.toLowerCase();switch(h.op){case"a":case"s":let C=h.value;if("string"==typeof C&&(C=[C]),0===C.length)return;this.maybeSetNormalizedName(h.name,d);const P=("a"===h.op?this.headers.get(d):void 0)||[];P.push(...C),this.headers.set(d,P);break;case"d":const ne=h.value;if(ne){let be=this.headers.get(d);if(!be)return;be=be.filter(Xe=>-1===ne.indexOf(Xe)),0===be.length?(this.headers.delete(d),this.normalizedNames.delete(d)):this.headers.set(d,be)}else this.headers.delete(d),this.normalizedNames.delete(d)}}forEach(h){this.init(),Array.from(this.normalizedNames.keys()).forEach(d=>h(this.normalizedNames.get(d),this.headers.get(d)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class We{encodeKey(h){return gn(h)}encodeValue(h){return gn(h)}decodeKey(h){return decodeURIComponent(h)}decodeValue(h){return decodeURIComponent(h)}}const on=/%(\d[a-f0-9])/gi,nr={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function gn(M){return encodeURIComponent(M).replace(on,(h,d)=>nr[d]??h)}function Un(M){return`${M}`}class dr{constructor(h={}){if(this.updates=null,this.cloneFrom=null,this.encoder=h.encoder||new We,h.fromString){if(h.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Ot(M,h){const d=new Map;return M.length>0&&M.replace(/^\?/,"").split("&").forEach(P=>{const ne=P.indexOf("="),[be,Xe]=-1==ne?[h.decodeKey(P),""]:[h.decodeKey(P.slice(0,ne)),h.decodeValue(P.slice(ne+1))],ut=d.get(be)||[];ut.push(Xe),d.set(be,ut)}),d}(h.fromString,this.encoder)}else h.fromObject?(this.map=new Map,Object.keys(h.fromObject).forEach(d=>{const C=h.fromObject[d],P=Array.isArray(C)?C.map(Un):[Un(C)];this.map.set(d,P)})):this.map=null}has(h){return this.init(),this.map.has(h)}get(h){this.init();const d=this.map.get(h);return d?d[0]:null}getAll(h){return this.init(),this.map.get(h)||null}keys(){return this.init(),Array.from(this.map.keys())}append(h,d){return this.clone({param:h,value:d,op:"a"})}appendAll(h){const d=[];return Object.keys(h).forEach(C=>{const P=h[C];Array.isArray(P)?P.forEach(ne=>{d.push({param:C,value:ne,op:"a"})}):d.push({param:C,value:P,op:"a"})}),this.clone(d)}set(h,d){return this.clone({param:h,value:d,op:"s"})}delete(h,d){return this.clone({param:h,value:d,op:"d"})}toString(){return this.init(),this.keys().map(h=>{const d=this.encoder.encodeKey(h);return this.map.get(h).map(C=>d+"="+this.encoder.encodeValue(C)).join("&")}).filter(h=>""!==h).join("&")}clone(h){const d=new dr({encoder:this.encoder});return d.cloneFrom=this.cloneFrom||this,d.updates=(this.updates||[]).concat(h),d}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(h=>this.map.set(h,this.cloneFrom.map.get(h))),this.updates.forEach(h=>{switch(h.op){case"a":case"s":const d=("a"===h.op?this.map.get(h.param):void 0)||[];d.push(Un(h.value)),this.map.set(h.param,d);break;case"d":if(void 0===h.value){this.map.delete(h.param);break}{let C=this.map.get(h.param)||[];const P=C.indexOf(Un(h.value));-1!==P&&C.splice(P,1),C.length>0?this.map.set(h.param,C):this.map.delete(h.param)}}}),this.cloneFrom=this.updates=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class xo{constructor(){this.map=new Map}set(h,d){return this.map.set(h,d),this}get(h){return this.map.has(h)||this.map.set(h,h.defaultValue()),this.map.get(h)}delete(h){return this.map.delete(h),this}has(h){return this.map.has(h)}keys(){return this.map.keys()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xa(M){return typeof ArrayBuffer<"u"&&M instanceof ArrayBuffer}function Za(M){return typeof Blob<"u"&&M instanceof Blob}function zu(M){return typeof FormData<"u"&&M instanceof FormData}class ni{constructor(h,d,C,P){let ne;if(this.url=d,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=h.toUpperCase(),function qa(M){switch(M){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||P?(this.body=void 0!==C?C:null,ne=P):ne=C,ne&&(this.reportProgress=!!ne.reportProgress,this.withCredentials=!!ne.withCredentials,ne.responseType&&(this.responseType=ne.responseType),ne.headers&&(this.headers=ne.headers),ne.context&&(this.context=ne.context),ne.params&&(this.params=ne.params)),this.headers||(this.headers=new qe),this.context||(this.context=new xo),this.params){const be=this.params.toString();if(0===be.length)this.urlWithParams=d;else{const Xe=d.indexOf("?");this.urlWithParams=d+(-1===Xe?"?":Xe<d.length-1?"&":"")+be}}else this.params=new dr,this.urlWithParams=d}serializeBody(){return null===this.body?null:Xa(this.body)||Za(this.body)||zu(this.body)||function Dd(M){return typeof URLSearchParams<"u"&&M instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof dr?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||zu(this.body)?null:Za(this.body)?this.body.type||null:Xa(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof dr?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(h={}){const d=h.method||this.method,C=h.url||this.url,P=h.responseType||this.responseType,ne=void 0!==h.body?h.body:this.body,be=void 0!==h.withCredentials?h.withCredentials:this.withCredentials,Xe=void 0!==h.reportProgress?h.reportProgress:this.reportProgress;let ut=h.headers||this.headers,Zt=h.params||this.params;const Pt=h.context??this.context;return void 0!==h.setHeaders&&(ut=Object.keys(h.setHeaders).reduce((Yn,qn)=>Yn.set(qn,h.setHeaders[qn]),ut)),h.setParams&&(Zt=Object.keys(h.setParams).reduce((Yn,qn)=>Yn.set(qn,h.setParams[qn]),Zt)),new ni(d,C,ne,{params:Zt,headers:ut,context:Pt,reportProgress:Xe,responseType:P,withCredentials:be})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Bt=(()=>((Bt=Bt||{})[Bt.Sent=0]="Sent",Bt[Bt.UploadProgress=1]="UploadProgress",Bt[Bt.ResponseHeader=2]="ResponseHeader",Bt[Bt.DownloadProgress=3]="DownloadProgress",Bt[Bt.Response=4]="Response",Bt[Bt.User=5]="User",Bt))();class Qa extends class ia{constructor(h,d=200,C="OK"){this.headers=h.headers||new qe,this.status=void 0!==h.status?h.status:d,this.statusText=h.statusText||C,this.url=h.url||null,this.ok=this.status>=200&&this.status<300}}{constructor(h={}){super(h),this.type=Bt.Response,this.body=void 0!==h.body?h.body:null}clone(h={}){return new Qa({body:void 0!==h.body?h.body:this.body,headers:h.headers||this.headers,status:void 0!==h.status?h.status:this.status,statusText:h.statusText||this.statusText,url:h.url||this.url||void 0})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function sa(M,h){return{body:h,headers:M.headers,context:M.context,observe:M.observe,params:M.params,reportProgress:M.reportProgress,responseType:M.responseType,withCredentials:M.withCredentials}}let Ja=(()=>{class M{constructor(d){this.handler=d}request(d,C,P={}){let ne;if(d instanceof ni)ne=d;else{let ut,Zt;ut=P.headers instanceof qe?P.headers:new qe(P.headers),P.params&&(Zt=P.params instanceof dr?P.params:new dr({fromObject:P.params})),ne=new ni(d,C,void 0!==P.body?P.body:null,{headers:ut,context:P.context,params:Zt,reportProgress:P.reportProgress,responseType:P.responseType||"json",withCredentials:P.withCredentials})}const be=(0,At.of)(ne).pipe((0,R.b)(ut=>this.handler.handle(ut)));if(d instanceof ni||"events"===P.observe)return be;const Xe=be.pipe((0,B.h)(ut=>ut instanceof Qa));switch(P.observe||"body"){case"body":switch(ne.responseType){case"arraybuffer":return Xe.pipe((0,Mn.U)(ut=>{if(null!==ut.body&&!(ut.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return ut.body}));case"blob":return Xe.pipe((0,Mn.U)(ut=>{if(null!==ut.body&&!(ut.body instanceof Blob))throw new Error("Response is not a Blob.");return ut.body}));case"text":return Xe.pipe((0,Mn.U)(ut=>{if(null!==ut.body&&"string"!=typeof ut.body)throw new Error("Response is not a string.");return ut.body}));default:return Xe.pipe((0,Mn.U)(ut=>ut.body))}case"response":return Xe;default:throw new Error(`Unreachable: unhandled observe type ${P.observe}}`)}}delete(d,C={}){return this.request("DELETE",d,C)}get(d,C={}){return this.request("GET",d,C)}head(d,C={}){return this.request("HEAD",d,C)}jsonp(d,C){return this.request("JSONP",d,{params:(new dr).append(C,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(d,C={}){return this.request("OPTIONS",d,C)}patch(d,C,P={}){return this.request("PATCH",d,sa(P,C))}post(d,C,P={}){return this.request("POST",d,sa(P,C))}put(d,C,P={}){return this.request("PUT",d,sa(P,C))}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(me))},M.\u0275prov=m.Yz7({token:M,factory:M.\u0275fac}),M})();
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
var us=D(1481);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ii=["*"];let cs;function Hr(M){return function ru(){if(void 0===cs&&(cs=null,typeof window<"u")){const M=window;void 0!==M.trustedTypes&&(cs=M.trustedTypes.createPolicy("angular#components",{createHTML:h=>h}))}return cs}()?.createHTML(M)||M}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function bi(M){return Error(`Unable to find icon with the name "${M}"`)}function iu(M){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${M}".`)}function su(M){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${M}".`)}class fr{constructor(h,d,C){this.url=h,this.svgText=d,this.options=C}}let oo=(()=>{class M{constructor(d,C,P,ne){this._httpClient=d,this._sanitizer=C,this._errorHandler=ne,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons"],this._document=P}addSvgIcon(d,C,P){return this.addSvgIconInNamespace("",d,C,P)}addSvgIconLiteral(d,C,P){return this.addSvgIconLiteralInNamespace("",d,C,P)}addSvgIconInNamespace(d,C,P,ne){return this._addSvgIconConfig(d,C,new fr(P,null,ne))}addSvgIconResolver(d){return this._resolvers.push(d),this}addSvgIconLiteralInNamespace(d,C,P,ne){const be=this._sanitizer.sanitize(m.q3G.HTML,P);if(!be)throw su(P);const Xe=Hr(be);return this._addSvgIconConfig(d,C,new fr("",Xe,ne))}addSvgIconSet(d,C){return this.addSvgIconSetInNamespace("",d,C)}addSvgIconSetLiteral(d,C){return this.addSvgIconSetLiteralInNamespace("",d,C)}addSvgIconSetInNamespace(d,C,P){return this._addSvgIconSetConfig(d,new fr(C,null,P))}addSvgIconSetLiteralInNamespace(d,C,P){const ne=this._sanitizer.sanitize(m.q3G.HTML,C);if(!ne)throw su(C);const be=Hr(ne);return this._addSvgIconSetConfig(d,new fr("",be,P))}registerFontClassAlias(d,C=d){return this._fontCssClassesByAlias.set(d,C),this}classNameForFontAlias(d){return this._fontCssClassesByAlias.get(d)||d}setDefaultFontSetClass(...d){return this._defaultFontSetClass=d,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(d){const C=this._sanitizer.sanitize(m.q3G.RESOURCE_URL,d);if(!C)throw iu(d);const P=this._cachedIconsByUrl.get(C);return P?(0,At.of)(wi(P)):this._loadSvgIconFromConfig(new fr(d,null)).pipe((0,a.b)(ne=>this._cachedIconsByUrl.set(C,ne)),(0,Mn.U)(ne=>wi(ne)))}getNamedSvgIcon(d,C=""){const P=au(C,d);let ne=this._svgIconConfigs.get(P);if(ne)return this._getSvgFromConfig(ne);if(ne=this._getIconConfigFromResolvers(C,d),ne)return this._svgIconConfigs.set(P,ne),this._getSvgFromConfig(ne);const be=this._iconSetConfigs.get(C);return be?this._getSvgFromIconSetConfigs(d,be):(0,c._)(bi(P))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(d){return d.svgText?(0,At.of)(wi(this._svgElementFromConfig(d))):this._loadSvgIconFromConfig(d).pipe((0,Mn.U)(C=>wi(C)))}_getSvgFromIconSetConfigs(d,C){const P=this._extractIconWithNameFromAnySet(d,C);return P?(0,At.of)(P):function oa(...M){const h=(0,rs.jO)(M),{args:d,keys:C}=(0,no.D)(M),P=new yo.y(ne=>{const{length:be}=d;if(!be)return void ne.complete();const Xe=new Array(be);let ut=be,Zt=be;for(let Pt=0;Pt<be;Pt++){let Yn=!1;(0,Ur.Xf)(d[Pt]).subscribe((0,Ro.x)(ne,qn=>{Yn||(Yn=!0,Zt--),Xe[Pt]=qn},()=>ut--,void 0,()=>{(!ut||!Yn)&&(Zt||ne.next(C?(0,Ya.n)(C,Xe):Xe),ne.complete())}))}});return h?P.pipe((0,ro.Z)(h)):P}(C.filter(be=>!be.svgText).map(be=>this._loadSvgIconSetFromConfig(be).pipe((0,p.K)(Xe=>{const Zt=`Loading icon set URL: ${this._sanitizer.sanitize(m.q3G.RESOURCE_URL,be.url)} failed: ${Xe.message}`;return this._errorHandler.handleError(new Error(Zt)),(0,At.of)(null)})))).pipe((0,Mn.U)(()=>{const be=this._extractIconWithNameFromAnySet(d,C);if(!be)throw bi(d);return be}))}_extractIconWithNameFromAnySet(d,C){for(let P=C.length-1;P>=0;P--){const ne=C[P];if(ne.svgText&&ne.svgText.toString().indexOf(d)>-1){const be=this._svgElementFromConfig(ne),Xe=this._extractSvgIconFromSet(be,d,ne.options);if(Xe)return Xe}}return null}_loadSvgIconFromConfig(d){return this._fetchIcon(d).pipe((0,a.b)(C=>d.svgText=C),(0,Mn.U)(()=>this._svgElementFromConfig(d)))}_loadSvgIconSetFromConfig(d){return d.svgText?(0,At.of)(null):this._fetchIcon(d).pipe((0,a.b)(C=>d.svgText=C))}_extractSvgIconFromSet(d,C,P){const ne=d.querySelector(`[id="${C}"]`);if(!ne)return null;const be=ne.cloneNode(!0);if(be.removeAttribute("id"),"svg"===be.nodeName.toLowerCase())return this._setSvgAttributes(be,P);if("symbol"===be.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(be),P);const Xe=this._svgElementFromString(Hr("<svg></svg>"));return Xe.appendChild(be),this._setSvgAttributes(Xe,P)}_svgElementFromString(d){const C=this._document.createElement("DIV");C.innerHTML=d;const P=C.querySelector("svg");if(!P)throw Error("<svg> tag not found");return P}_toSvgElement(d){const C=this._svgElementFromString(Hr("<svg></svg>")),P=d.attributes;for(let ne=0;ne<P.length;ne++){const{name:be,value:Xe}=P[ne];"id"!==be&&C.setAttribute(be,Xe)}for(let ne=0;ne<d.childNodes.length;ne++)d.childNodes[ne].nodeType===this._document.ELEMENT_NODE&&C.appendChild(d.childNodes[ne].cloneNode(!0));return C}_setSvgAttributes(d,C){return d.setAttribute("fit",""),d.setAttribute("height","100%"),d.setAttribute("width","100%"),d.setAttribute("preserveAspectRatio","xMidYMid meet"),d.setAttribute("focusable","false"),C&&C.viewBox&&d.setAttribute("viewBox",C.viewBox),d}_fetchIcon(d){const{url:C,options:P}=d,ne=P?.withCredentials??!1;if(!this._httpClient)throw function ou(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==C)throw Error(`Cannot fetch icon from URL "${C}".`);const be=this._sanitizer.sanitize(m.q3G.RESOURCE_URL,C);if(!be)throw iu(C);const Xe=this._inProgressUrlFetches.get(be);if(Xe)return Xe;const ut=this._httpClient.get(be,{responseType:"text",withCredentials:ne}).pipe((0,Mn.U)(Zt=>Hr(Zt)),(0,v.x)(()=>this._inProgressUrlFetches.delete(be)),(0,w.B)());return this._inProgressUrlFetches.set(be,ut),ut}_addSvgIconConfig(d,C,P){return this._svgIconConfigs.set(au(d,C),P),this}_addSvgIconSetConfig(d,C){const P=this._iconSetConfigs.get(d);return P?P.push(C):this._iconSetConfigs.set(d,[C]),this}_svgElementFromConfig(d){if(!d.svgElement){const C=this._svgElementFromString(d.svgText);this._setSvgAttributes(C,d.options),d.svgElement=C}return d.svgElement}_getIconConfigFromResolvers(d,C){for(let P=0;P<this._resolvers.length;P++){const ne=this._resolvers[P](C,d);if(ne)return Rd(ne)?new fr(ne.url,null,ne.options):new fr(ne,null)}}}return M.\u0275fac=function(d){return new(d||M)(m.LFG(Ja,8),m.LFG(us.H7),m.LFG(E.K0,8),m.LFG(m.qLn))},M.\u0275prov=m.Yz7({token:M,factory:M.\u0275fac,providedIn:"root"}),M})();function wi(M){return M.cloneNode(!0)}function au(M,h){return M+":"+h}function Rd(M){return!(!M.url||!M.options)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ju=Io(class{constructor(M){this._elementRef=M}}),ec=new m.OlP("MAT_ICON_DEFAULT_OPTIONS"),tc=new m.OlP("mat-icon-location",{providedIn:"root",factory:function ls(){const M=(0,m.f3M)(E.K0),h=M?M.location:null;return{getPathname:()=>h?h.pathname+h.search:""}}}),da=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],nc=da.map(M=>`[${M}]`).join(", "),uu=/^url\(['"]?#(.*?)['"]?\)$/;let xd=(()=>{class M extends Ju{constructor(d,C,P,ne,be,Xe){super(d),this._iconRegistry=C,this._location=ne,this._errorHandler=be,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=u.w0.EMPTY,Xe&&(Xe.color&&(this.color=this.defaultColor=Xe.color),Xe.fontSet&&(this.fontSet=Xe.fontSet)),P||d.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(d){this._inline=
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
function Li(M){return null!=M&&"false"!=`${M}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(d)}get svgIcon(){return this._svgIcon}set svgIcon(d){d!==this._svgIcon&&(d?this._updateSvgIcon(d):this._svgIcon&&this._clearSvgElement(),this._svgIcon=d)}get fontSet(){return this._fontSet}set fontSet(d){const C=this._cleanupFontValue(d);C!==this._fontSet&&(this._fontSet=C,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(d){const C=this._cleanupFontValue(d);C!==this._fontIcon&&(this._fontIcon=C,this._updateFontIconClasses())}_splitIconName(d){if(!d)return["",""];const C=d.split(":");switch(C.length){case 1:return["",C[0]];case 2:return C;default:throw Error(`Invalid icon name: "${d}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const d=this._elementsWithExternalReferences;if(d&&d.size){const C=this._location.getPathname();C!==this._previousPath&&(this._previousPath=C,this._prependPathToReferences(C))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(d){this._clearSvgElement();const C=this._location.getPathname();this._previousPath=C,this._cacheChildrenWithExternalReferences(d),this._prependPathToReferences(C),this._elementRef.nativeElement.appendChild(d)}_clearSvgElement(){const d=this._elementRef.nativeElement;let C=d.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();C--;){const P=d.childNodes[C];(1!==P.nodeType||"svg"===P.nodeName.toLowerCase())&&P.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const d=this._elementRef.nativeElement,C=(this.fontSet?[this._iconRegistry.classNameForFontAlias(this.fontSet)]:this._iconRegistry.getDefaultFontSetClass()).filter(P=>P.length>0);this._previousFontSetClass.forEach(P=>d.classList.remove(P)),C.forEach(P=>d.classList.add(P)),this._previousFontSetClass=C,this.fontIcon!==this._previousFontIconClass&&(this._previousFontIconClass&&d.classList.remove(this._previousFontIconClass),this.fontIcon&&d.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(d){return"string"==typeof d?d.trim().split(" ")[0]:d}_prependPathToReferences(d){const C=this._elementsWithExternalReferences;C&&C.forEach((P,ne)=>{P.forEach(be=>{ne.setAttribute(be.name,`url('${d}#${be.value}')`)})})}_cacheChildrenWithExternalReferences(d){const C=d.querySelectorAll(nc),P=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let ne=0;ne<C.length;ne++)da.forEach(be=>{const Xe=C[ne],ut=Xe.getAttribute(be),Zt=ut?ut.match(uu):null;if(Zt){let Pt=P.get(Xe);Pt||(Pt=[],P.set(Xe,Pt)),Pt.push({name:be,value:Zt[1]})}})}_updateSvgIcon(d){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),d){const[C,P]=this._splitIconName(d);C&&(this._svgNamespace=C),P&&(this._svgName=P),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(P,C).pipe((0,Tr.q)(1)).subscribe(ne=>this._setSvgElement(ne),ne=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${C}:${P}! ${ne.message}`))})}}}return M.\u0275fac=function(d){return new(d||M)(m.Y36(m.SBq),m.Y36(oo),m.$8M("aria-hidden"),m.Y36(tc),m.Y36(m.qLn),m.Y36(ec,8))},M.\u0275cmp=m.Xpm({type:M,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(d,C){2&d&&(m.uIk("data-mat-icon-type",C._usingFontIcon()?"font":"svg")("data-mat-icon-name",C._svgName||C.fontIcon)("data-mat-icon-namespace",C._svgNamespace||C.fontSet),m.ekj("mat-icon-inline",C.inline)("mat-icon-no-color","primary"!==C.color&&"accent"!==C.color&&"warn"!==C.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[m.qOj],ngContentSelectors:Ii,decls:1,vars:0,template:function(d,C){1&d&&(m.F$t(),m.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),M})(),cu=(()=>{class M{}return M.\u0275fac=function(d){return new(d||M)},M.\u0275mod=m.oAB({type:M}),M.\u0275inj=m.cJS({imports:[Yi,Yi]}),M})();
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
     */,1481:(z,N,D)=>{D.d(N,{Dx:()=>Rn,H7:()=>bt,b2:()=>On,q6:()=>Je});var m=D(6895),E=D(4650);
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
     */class Y extends m.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class J extends Y{static makeCurrent(){(0,m.HT)(new J)}onAndCancel(L,O,G){return L.addEventListener(O,G,!1),()=>{L.removeEventListener(O,G,!1)}}dispatchEvent(L,O){L.dispatchEvent(O)}remove(L){L.parentNode&&L.parentNode.removeChild(L)}createElement(L,O){return(O=O||this.getDefaultDocument()).createElement(L)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(L){return L.nodeType===Node.ELEMENT_NODE}isShadowRoot(L){return L instanceof DocumentFragment}getGlobalEventTarget(L,O){return"window"===O?window:"document"===O?L:"body"===O?L.body:null}getBaseHref(L){const O=function W(){return F=F||document.querySelector("base"),F?F.getAttribute("href"):null}();return null==O?null:function $(H){V=V||document.createElement("a"),V.setAttribute("href",H);const L=V.pathname;return"/"===L.charAt(0)?L:`/${L}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(O)}resetBaseElement(){F=null}getUserAgent(){return window.navigator.userAgent}getCookie(L){return(0,m.Mx)(document.cookie,L)}}let V,F=null;const k=new E.OlP("TRANSITION_ID"),K=[{provide:E.ip1,useFactory:function ee(H,L,O){return()=>{O.get(E.CZH).donePromise.then(()=>{const G=(0,m.q)(),_e=L.querySelectorAll(`style[ng-transition="${H}"]`);for(let je=0;je<_e.length;je++)G.remove(_e[je])})}},deps:[k,m.K0,E.zs3],multi:!0}];let pe=(()=>{class H{build(){return new XMLHttpRequest}}return H.\u0275fac=function(O){return new(O||H)},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const X=new E.OlP("EventManagerPlugins");let ue=(()=>{class H{constructor(O,G){this._zone=G,this._eventNameToPlugin=new Map,O.forEach(_e=>_e.manager=this),this._plugins=O.slice().reverse()}addEventListener(O,G,_e){return this._findPluginFor(G).addEventListener(O,G,_e)}addGlobalEventListener(O,G,_e){return this._findPluginFor(G).addGlobalEventListener(O,G,_e)}getZone(){return this._zone}_findPluginFor(O){const G=this._eventNameToPlugin.get(O);if(G)return G;const _e=this._plugins;for(let je=0;je<_e.length;je++){const ht=_e[je];if(ht.supports(O))return this._eventNameToPlugin.set(O,ht),ht}throw new Error(`No event manager plugin found for event ${O}`)}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(X),E.LFG(E.R0b))},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})();class we{constructor(L){this._doc=L}addGlobalEventListener(L,O,G){const _e=(0,m.q)().getGlobalEventTarget(this._doc,L);if(!_e)throw new Error(`Unsupported event target ${_e} for event ${O}`);return this.addEventListener(_e,O,G)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let he=(()=>{class H{constructor(){this._stylesSet=new Set}addStyles(O){const G=new Set;O.forEach(_e=>{this._stylesSet.has(_e)||(this._stylesSet.add(_e),G.add(_e))}),this.onStylesAdded(G)}onStylesAdded(O){}getAllStyles(){return Array.from(this._stylesSet)}}return H.\u0275fac=function(O){return new(O||H)},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})(),Ie=(()=>{class H extends he{constructor(O){super(),this._doc=O,this._hostNodes=new Map,this._hostNodes.set(O.head,[])}_addStylesToHost(O,G,_e){O.forEach(je=>{const ht=this._doc.createElement("style");ht.textContent=je,_e.push(G.appendChild(ht))})}addHost(O){const G=[];this._addStylesToHost(this._stylesSet,O,G),this._hostNodes.set(O,G)}removeHost(O){const G=this._hostNodes.get(O);G&&G.forEach(Be),this._hostNodes.delete(O)}onStylesAdded(O){this._hostNodes.forEach((G,_e)=>{this._addStylesToHost(O,_e,G)})}ngOnDestroy(){this._hostNodes.forEach(O=>O.forEach(Be))}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(m.K0))},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})();function Be(H){(0,m.q)().remove(H)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ue={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Me=/%COMP%/g;function oe(H,L,O){for(let G=0;G<L.length;G++){let _e=L[G];Array.isArray(_e)?oe(H,_e,O):(_e=_e.replace(Me,H),O.push(_e))}return O}function le(H){return L=>{if("__ngUnwrap__"===L)return H;!1===H(L)&&(L.preventDefault(),L.returnValue=!1)}}let ge=(()=>{class H{constructor(O,G,_e){this.eventManager=O,this.sharedStylesHost=G,this.appId=_e,this.rendererByCompId=new Map,this.defaultRenderer=new ce(O)}createRenderer(O,G){if(!O||!G)return this.defaultRenderer;switch(G.encapsulation){case E.ifc.Emulated:{let _e=this.rendererByCompId.get(G.id);return _e||(_e=new vt(this.eventManager,this.sharedStylesHost,G,this.appId),this.rendererByCompId.set(G.id,_e)),_e.applyToHost(O),_e}case 1:case E.ifc.ShadowDom:return new xe(this.eventManager,this.sharedStylesHost,O,G);default:if(!this.rendererByCompId.has(G.id)){const _e=oe(G.id,G.styles,[]);this.sharedStylesHost.addStyles(_e),this.rendererByCompId.set(G.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(ue),E.LFG(Ie),E.LFG(E.AFp))},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})();class ce{constructor(L){this.eventManager=L,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(L,O){return O?document.createElementNS(Ue[O]||O,L):document.createElement(L)}createComment(L){return document.createComment(L)}createText(L){return document.createTextNode(L)}appendChild(L,O){(_t(L)?L.content:L).appendChild(O)}insertBefore(L,O,G){L&&(_t(L)?L.content:L).insertBefore(O,G)}removeChild(L,O){L&&L.removeChild(O)}selectRootElement(L,O){let G="string"==typeof L?document.querySelector(L):L;if(!G)throw new Error(`The selector "${L}" did not match any elements`);return O||(G.textContent=""),G}parentNode(L){return L.parentNode}nextSibling(L){return L.nextSibling}setAttribute(L,O,G,_e){if(_e){O=_e+":"+O;const je=Ue[_e];je?L.setAttributeNS(je,O,G):L.setAttribute(O,G)}else L.setAttribute(O,G)}removeAttribute(L,O,G){if(G){const _e=Ue[G];_e?L.removeAttributeNS(_e,O):L.removeAttribute(`${G}:${O}`)}else L.removeAttribute(O)}addClass(L,O){L.classList.add(O)}removeClass(L,O){L.classList.remove(O)}setStyle(L,O,G,_e){_e&(E.JOm.DashCase|E.JOm.Important)?L.style.setProperty(O,G,_e&E.JOm.Important?"important":""):L.style[O]=G}removeStyle(L,O,G){G&E.JOm.DashCase?L.style.removeProperty(O):L.style[O]=""}setProperty(L,O,G){L[O]=G}setValue(L,O){L.nodeValue=O}listen(L,O,G){return"string"==typeof L?this.eventManager.addGlobalEventListener(L,O,le(G)):this.eventManager.addEventListener(L,O,le(G))}}function _t(H){return"TEMPLATE"===H.tagName&&void 0!==H.content}class vt extends ce{constructor(L,O,G,_e){super(L),this.component=G;const je=oe(_e+"-"+G.id,G.styles,[]);O.addStyles(je),this.contentAttr=function Re(H){return"_ngcontent-%COMP%".replace(Me,H)}(_e+"-"+G.id),this.hostAttr=function tt(H){return"_nghost-%COMP%".replace(Me,H)}(_e+"-"+G.id)}applyToHost(L){super.setAttribute(L,this.hostAttr,"")}createElement(L,O){const G=super.createElement(L,O);return super.setAttribute(G,this.contentAttr,""),G}}class xe extends ce{constructor(L,O,G,_e){super(L),this.sharedStylesHost=O,this.hostEl=G,this.shadowRoot=G.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const je=oe(_e.id,_e.styles,[]);for(let ht=0;ht<je.length;ht++){const Lt=document.createElement("style");Lt.textContent=je[ht],this.shadowRoot.appendChild(Lt)}}nodeOrShadowRoot(L){return L===this.hostEl?this.shadowRoot:L}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(L,O){return super.appendChild(this.nodeOrShadowRoot(L),O)}insertBefore(L,O,G){return super.insertBefore(this.nodeOrShadowRoot(L),O,G)}removeChild(L,O){return super.removeChild(this.nodeOrShadowRoot(L),O)}parentNode(L){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(L)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let yt=(()=>{class H extends we{constructor(O){super(O)}supports(O){return!0}addEventListener(O,G,_e){return O.addEventListener(G,_e,!1),()=>this.removeEventListener(O,G,_e)}removeEventListener(O,G,_e){return O.removeEventListener(G,_e)}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(m.K0))},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const an=["alt","control","meta","shift"],Et={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Ht={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},un={alt:H=>H.altKey,control:H=>H.ctrlKey,meta:H=>H.metaKey,shift:H=>H.shiftKey};let Ft=(()=>{class H extends we{constructor(O){super(O)}supports(O){return null!=H.parseEventName(O)}addEventListener(O,G,_e){const je=H.parseEventName(G),ht=H.eventCallback(je.fullKey,_e,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,m.q)().onAndCancel(O,je.domEventName,ht))}static parseEventName(O){const G=O.toLowerCase().split("."),_e=G.shift();if(0===G.length||"keydown"!==_e&&"keyup"!==_e)return null;const je=H._normalizeKey(G.pop());let ht="";if(an.forEach(Qe=>{const Vn=G.indexOf(Qe);Vn>-1&&(G.splice(Vn,1),ht+=Qe+".")}),ht+=je,0!=G.length||0===je.length)return null;const Lt={};return Lt.domEventName=_e,Lt.fullKey=ht,Lt}static getEventFullKey(O){let G="",_e=function _n(H){let L=H.key;if(null==L){if(L=H.keyIdentifier,null==L)return"Unidentified";L.startsWith("U+")&&(L=String.fromCharCode(parseInt(L.substring(2),16)),3===H.location&&Ht.hasOwnProperty(L)&&(L=Ht[L]))}return Et[L]||L}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(O);return _e=_e.toLowerCase()," "===_e?_e="space":"."===_e&&(_e="dot"),an.forEach(je=>{je!=_e&&un[je](O)&&(G+=je+".")}),G+=_e,G}static eventCallback(O,G,_e){return je=>{H.getEventFullKey(je)===O&&_e.runGuarded(()=>G(je))}}static _normalizeKey(O){return"esc"===O?"escape":O}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(m.K0))},H.\u0275prov=E.Yz7({token:H,factory:H.\u0275fac}),H})();const Je=(0,E.eFA)(E._c5,"browser",[{provide:E.Lbi,useValue:m.bD},{provide:E.g9A,useValue:function bn(){J.makeCurrent()},multi:!0},{provide:m.K0,useFactory:function Gn(){return(0,E.RDi)(document),document},deps:[]}]),Jn=new E.OlP(""),Qt=[{provide:E.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class q{addToWindow(L){E.dqk.getAngularTestability=(G,_e=!0)=>{const je=L.findTestabilityInTree(G,_e);if(null==je)throw new Error("Could not find testability for element.");return je},E.dqk.getAllAngularTestabilities=()=>L.getAllTestabilities(),E.dqk.getAllAngularRootElements=()=>L.getAllRootElements(),E.dqk.frameworkStabilizers||(E.dqk.frameworkStabilizers=[]),E.dqk.frameworkStabilizers.push(G=>{const _e=E.dqk.getAllAngularTestabilities();let je=_e.length,ht=!1;const Lt=function(Qe){ht=ht||Qe,je--,0==je&&G(ht)};_e.forEach(function(Qe){Qe.whenStable(Lt)})})}findTestabilityInTree(L,O,G){return null==O?null:L.getTestability(O)??(G?(0,m.q)().isShadowRoot(O)?this.findTestabilityInTree(L,O.host,!0):this.findTestabilityInTree(L,O.parentElement,!0):null)}},deps:[]},{provide:E.lri,useClass:E.dDg,deps:[E.R0b,E.eoX,E.rWj]},{provide:E.dDg,useClass:E.dDg,deps:[E.R0b,E.eoX,E.rWj]}],Gt=[{provide:E.zSh,useValue:"root"},{provide:E.qLn,useFactory:function Wn(){return new E.qLn},deps:[]},{provide:X,useClass:yt,multi:!0,deps:[m.K0,E.R0b,E.Lbi]},{provide:X,useClass:Ft,multi:!0,deps:[m.K0]},{provide:ge,useClass:ge,deps:[ue,Ie,E.AFp]},{provide:E.FYo,useExisting:ge},{provide:he,useExisting:Ie},{provide:Ie,useClass:Ie,deps:[m.K0]},{provide:ue,useClass:ue,deps:[X,E.R0b]},{provide:m.JF,useClass:pe,deps:[]},[]];let On=(()=>{class H{constructor(O){}static withServerTransition(O){return{ngModule:H,providers:[{provide:E.AFp,useValue:O.appId},{provide:k,useExisting:E.AFp},K]}}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(Jn,12))},H.\u0275mod=E.oAB({type:H}),H.\u0275inj=E.cJS({providers:[...Gt,...Qt],imports:[m.ez,E.hGG]}),H})(),Rn=(()=>{class H{constructor(O){this._doc=O}getTitle(){return this._doc.title}setTitle(O){this._doc.title=O||""}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(m.K0))},H.\u0275prov=E.Yz7({token:H,factory:function(O){let G=null;return G=O?new O:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function wn(){return new Rn((0,E.LFG)(m.K0))}(),G},providedIn:"root"}),H})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */typeof window<"u"&&window;let bt=(()=>{class H{}return H.\u0275fac=function(O){return new(O||H)},H.\u0275prov=E.Yz7({token:H,factory:function(O){let G=null;return G=O?new(O||H):E.LFG(Te),G},providedIn:"root"}),H})(),Te=(()=>{class H extends bt{constructor(O){super(),this._doc=O}sanitize(O,G){if(null==G)return null;switch(O){case E.q3G.NONE:return G;case E.q3G.HTML:return(0,E.qzn)(G,"HTML")?(0,E.z3N)(G):(0,E.EiD)(this._doc,String(G)).toString();case E.q3G.STYLE:return(0,E.qzn)(G,"Style")?(0,E.z3N)(G):G;case E.q3G.SCRIPT:if((0,E.qzn)(G,"Script"))return(0,E.z3N)(G);throw new Error("unsafe value used in a script context");case E.q3G.URL:return(0,E.qzn)(G,"URL")?(0,E.z3N)(G):(0,E.mCW)(String(G));case E.q3G.RESOURCE_URL:if((0,E.qzn)(G,"ResourceURL"))return(0,E.z3N)(G);throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");default:throw new Error(`Unexpected SecurityContext ${O} (see https://g.co/ng/security#xss)`)}}bypassSecurityTrustHtml(O){return(0,E.JVY)(O)}bypassSecurityTrustStyle(O){return(0,E.L6k)(O)}bypassSecurityTrustScript(O){return(0,E.eBb)(O)}bypassSecurityTrustUrl(O){return(0,E.LAX)(O)}bypassSecurityTrustResourceUrl(O){return(0,E.pB0)(O)}}return H.\u0275fac=function(O){return new(O||H)(E.LFG(m.K0))},H.\u0275prov=E.Yz7({token:H,factory:function(O){let G=null;return G=O?new O:function Ut(H){return new Te(H.get(m.K0))}(E.LFG(E.zs3)),G},providedIn:"root"}),H})();
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
     */,8704:(z,N,D)=>{D.d(N,{m2:()=>Ft,F0:()=>In,Od:()=>Ji,yS:()=>Qi,Bz:()=>ti,lC:()=>Ar});var m=D(6895),E=D(4650);const J=(0,D(3888).d)(c=>function(){c(this),this.name="EmptyError",this.message="no elements in sequence"});var F=D(8306),W=D(8421);function V(c){return new F.y(u=>{(0,W.Xf)(c()).subscribe(u)})}var $=D(727),k=D(4482),ee=D(5403);function K(){return(0,k.e)((c,u)=>{let a=null;c._refCount++;const p=(0,ee.x)(u,void 0,void 0,void 0,()=>{if(!c||c._refCount<=0||0<--c._refCount)return void(a=null);const v=c._connection,w=a;a=null,v&&(!w||v===w)&&v.unsubscribe(),u.unsubscribe()});c.subscribe(p),p.closed||(a=c.connect())})}class q extends F.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,k.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,u?.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new $.w0;const a=this.getSubject();u.add(this.source.subscribe((0,ee.x)(a,void 0,()=>{this._teardown(),a.complete()},p=>{this._teardown(),a.error(p)},()=>this._teardown()))),u.closed&&(this._connection=null,u=$.w0.EMPTY)}return u}refCount(){return K()(this)}}var pe=D(457),X=D(9646),ue=D(1135),we=D(9841),he=D(2843),Ie=D(7272),Be=D(515),Ue=D(7579),Me=D(9300);function De(c){return c<=0?()=>Be.E:(0,k.e)((u,a)=>{let p=[];u.subscribe((0,ee.x)(a,v=>{p.push(v),c<p.length&&p.shift()},()=>{for(const v of p)a.next(v);a.complete()},void 0,()=>{p=null}))})}function Pe(c=$e){return(0,k.e)((u,a)=>{let p=!1;u.subscribe((0,ee.x)(a,v=>{p=!0,a.next(v)},()=>p?a.complete():a.error(c())))})}function $e(){return new J}function Ke(c){return(0,k.e)((u,a)=>{let p=!1;u.subscribe((0,ee.x)(a,v=>{p=!0,a.next(v)},()=>{p||a.next(c),a.complete()}))})}var Re=D(4671),oe=D(5698);function le(c,u){const a=arguments.length>=2;return p=>p.pipe(c?(0,Me.h)((v,w)=>c(v,w,p)):Re.y,(0,oe.q)(1),a?Ke(u):Pe(()=>new J))}var re=D(4004),ce=D(3900),Fe=D(8675),ct=D(5026),_t=D(262),vt=D(4351),xe=D(5577),yt=D(8505),an=D(8746),Nt=D(8189),Et=D(1481);
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
class Ht{constructor(u,a){this.id=u,this.url=a}}class un extends Ht{constructor(u,a,p="imperative",v=null){super(u,a),this.type=0,this.navigationTrigger=p,this.restoredState=v}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Ft extends Ht{constructor(u,a,p){super(u,a),this.urlAfterRedirects=p,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class _n extends Ht{constructor(u,a,p){super(u,a),this.reason=p,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Qn extends Ht{constructor(u,a,p){super(u,a),this.error=p,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class xr extends Ht{constructor(u,a,p,v){super(u,a),this.urlAfterRedirects=p,this.state=v,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Ir extends Ht{constructor(u,a,p,v){super(u,a),this.urlAfterRedirects=p,this.state=v,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class bn extends Ht{constructor(u,a,p,v,w){super(u,a),this.urlAfterRedirects=p,this.state=v,this.shouldActivate=w,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Wn extends Ht{constructor(u,a,p,v){super(u,a),this.urlAfterRedirects=p,this.state=v,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Gn extends Ht{constructor(u,a,p,v){super(u,a),this.urlAfterRedirects=p,this.state=v,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class hr{constructor(u){this.route=u,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Je{constructor(u){this.route=u,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Jn{constructor(u){this.snapshot=u,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Qt{constructor(u){this.snapshot=u,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Gt{constructor(u){this.snapshot=u,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class On{constructor(u){this.snapshot=u,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ir{constructor(u,a,p){this.routerEvent=u,this.position=a,this.anchor=p,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const et="primary";class wn{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function Rn(c){return new wn(c)}const gt="Redirecting to ",ke="ngNavigationCancelingError";function lt(c){const u=Error("NavigationCancelingError: "+(c||""));return u[ke]=!0,u}function en(c,u,a){const p=a.path.split("/");if(p.length>c.length||"full"===a.pathMatch&&(u.hasChildren()||p.length<c.length))return null;const v={};for(let w=0;w<p.length;w++){const R=p[w],B=c[w];if(R.startsWith(":"))v[R.substring(1)]=B;else if(R!==B.path)return null}return{consumed:c.slice(0,p.length),posParams:v}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vt(c,u){const a=c?Object.keys(c):void 0,p=u?Object.keys(u):void 0;if(!a||!p||a.length!=p.length)return!1;let v;for(let w=0;w<a.length;w++)if(v=a[w],!Yt(c[v],u[v]))return!1;return!0}function Yt(c,u){if(Array.isArray(c)&&Array.isArray(u)){if(c.length!==u.length)return!1;const a=[...c].sort(),p=[...u].sort();return a.every((v,w)=>p[w]===v)}return c===u}function xn(c){return Array.prototype.concat.apply([],c)}function Mt(c){return c.length>0?c[c.length-1]:null}function rt(c,u){for(const a in c)c.hasOwnProperty(a)&&u(c[a],a)}function Hn(c){return(0,E.CqO)(c)?c:(0,E.QGY)(c)?(0,pe.D)(Promise.resolve(c)):(0,X.of)(c)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ce={exact:function st(c,u,a){if(!Te(c.segments,u.segments)||!at(c.segments,u.segments,a)||c.numberOfChildren!==u.numberOfChildren)return!1;for(const p in u.children)if(!c.children[p]||!st(c.children[p],u.children[p],a))return!1;return!0},subset:qt},ye={exact:function it(c,u){return Vt(c,u)},subset:function Tt(c,u){return Object.keys(u).length<=Object.keys(c).length&&Object.keys(u).every(a=>Yt(c[a],u[a]))},ignored:()=>!0};function Le(c,u,a){return Ce[a.paths](c.root,u.root,a.matrixParams)&&ye[a.queryParams](c.queryParams,u.queryParams)&&!("exact"===a.fragment&&c.fragment!==u.fragment)}function qt(c,u,a){return dn(c,u,u.segments,a)}function dn(c,u,a,p){if(c.segments.length>a.length){const v=c.segments.slice(0,a.length);return!(!Te(v,a)||u.hasChildren()||!at(v,a,p))}if(c.segments.length===a.length){if(!Te(c.segments,a)||!at(c.segments,a,p))return!1;for(const v in u.children)if(!c.children[v]||!qt(c.children[v],u.children[v],p))return!1;return!0}{const v=a.slice(0,c.segments.length),w=a.slice(c.segments.length);return!!(Te(c.segments,v)&&at(c.segments,v,p)&&c.children[et])&&dn(c.children[et],u,w,p)}}function at(c,u,a){return u.every((p,v)=>ye[a](c[v].parameters,p.parameters))}class It{constructor(u,a,p){this.root=u,this.queryParams=a,this.fragment=p}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Rn(this.queryParams)),this._queryParamMap}toString(){return O.serialize(this)}}class Ye{constructor(u,a){this.segments=u,this.children=a,this.parent=null,rt(a,(p,v)=>p.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return G(this)}}class bt{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=Rn(this.parameters)),this._parameterMap}toString(){return pr(this)}}function Te(c,u){return c.length===u.length&&c.every((a,p)=>a.path===u[p].path)}class H{}class L{parse(u){const a=new go(u);return new It(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${_e(u.root,!0)}`,p=function tn(c){const u=Object.keys(c).map(a=>{const p=c[a];return Array.isArray(p)?p.map(v=>`${ht(a)}=${ht(v)}`).join("&"):`${ht(a)}=${ht(p)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);return`${a}${p}${"string"==typeof u.fragment?`#${function Lt(c){return encodeURI(c)}(u.fragment)}`:""}`}}const O=new L;function G(c){return c.segments.map(u=>pr(u)).join("/")}function _e(c,u){if(!c.hasChildren())return G(c);if(u){const a=c.children[et]?_e(c.children[et],!1):"",p=[];return rt(c.children,(v,w)=>{w!==et&&p.push(`${w}:${_e(v,!1)}`)}),p.length>0?`${a}(${p.join("//")})`:a}{const a=function Ze(c,u){let a=[];return rt(c.children,(p,v)=>{v===et&&(a=a.concat(u(p,v)))}),rt(c.children,(p,v)=>{v!==et&&(a=a.concat(u(p,v)))}),a}(c,(p,v)=>v===et?[_e(c.children[et],!1)]:[`${v}:${_e(p,!1)}`]);return 1===Object.keys(c.children).length&&null!=c.children[et]?`${G(c)}/${a[0]}`:`${G(c)}/(${a.join("//")})`}}function je(c){return encodeURIComponent(c).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ht(c){return je(c).replace(/%3B/gi,";")}function Qe(c){return je(c).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Vn(c){return decodeURIComponent(c)}function sr(c){return Vn(c.replace(/\+/g,"%20"))}function pr(c){return`${Qe(c.path)}${function ar(c){return Object.keys(c).map(u=>`;${Qe(u)}=${Qe(c[u])}`).join("")}(c.parameters)}`}const wr=/^[^\/()?;=#]+/;function Fn(c){const u=c.match(wr);return u?u[0]:""}const vn=/^[^=?&#]+/,po=/^[^&#]+/;class go{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ye([],{}):new Ye([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let p={};return this.peekStartsWith("(")&&(p=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(p[et]=new Ye(u,a)),p}parseSegment(){const u=Fn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new E.vHH(4009,!1);return this.capture(u),new bt(Vn(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=Fn(this.remaining);if(!a)return;this.capture(a);let p="";if(this.consumeOptional("=")){const v=Fn(this.remaining);v&&(p=v,this.capture(p))}u[Vn(a)]=Vn(p)}parseQueryParam(u){const a=function ur(c){const u=c.match(vn);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let p="";if(this.consumeOptional("=")){const R=function St(c){const u=c.match(po);return u?u[0]:""}(this.remaining);R&&(p=R,this.capture(p))}const v=sr(a),w=sr(p);if(u.hasOwnProperty(v)){let R=u[v];Array.isArray(R)||(R=[R],u[v]=R),R.push(w)}else u[v]=w}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const p=Fn(this.remaining),v=this.remaining[p.length];if("/"!==v&&")"!==v&&";"!==v)throw new E.vHH(4010,!1);let w;p.indexOf(":")>-1?(w=p.slice(0,p.indexOf(":")),this.capture(w),this.capture(":")):u&&(w=et);const R=this.parseChildren();a[w]=1===Object.keys(R).length?R[et]:new Ye([],R),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new E.vHH(4011,!1)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class mo{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=gr(u,this._root);return a?a.children.map(p=>p.value):[]}firstChild(u){const a=gr(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=mr(u,this._root);return a.length<2?[]:a[a.length-2].children.map(v=>v.value).filter(v=>v!==u)}pathFromRoot(u){return mr(u,this._root).map(a=>a.value)}}function gr(c,u){if(c===u.value)return u;for(const a of u.children){const p=gr(c,a);if(p)return p}return null}function mr(c,u){if(c===u.value)return[u];for(const a of u.children){const p=mr(c,a);if(p.length)return p.unshift(u),p}return[]}class yn{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function $n(c){const u={};return c&&c.children.forEach(a=>u[a.value.outlet]=a),u
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class zn extends mo{constructor(u,a){super(u),this.snapshot=a,Se(this,u)}toString(){return this.snapshot.toString()}}function nn(c,u){const a=function si(c,u){const R=new Q([],{},{},"",{},et,u,null,c.root,-1,{});return new ae("",new yn(R,[]))}(c,u),p=new ue.X([new bt("",{})]),v=new ue.X({}),w=new ue.X({}),R=new ue.X({}),B=new ue.X(""),me=new rn(p,v,R,B,w,et,u,a.root);return me.snapshot=a.root,new zn(new yn(me,[]),a)}class rn{constructor(u,a,p,v,w,R,B,me){this.url=u,this.params=a,this.queryParams=p,this.fragment=v,this.data=w,this.outlet=R,this.component=B,this._futureSnapshot=me}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,re.U)(u=>Rn(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,re.U)(u=>Rn(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function x(c,u="emptyOnly"){const a=c.pathFromRoot;let p=0;if("always"!==u)for(p=a.length-1;p>=1;){const v=a[p],w=a[p-1];if(v.routeConfig&&""===v.routeConfig.path)p--;else{if(w.component)break;p--}}return function de(c){return c.reduce((u,a)=>({params:{...u.params,...a.params},data:{...u.data,...a.data},resolve:{...a.data,...u.resolve,...a.routeConfig?.data,...a._resolvedData}}),{params:{},data:{},resolve:{}})}(a.slice(p))}class Q{constructor(u,a,p,v,w,R,B,me,He,qe,We,Ot){this.url=u,this.params=a,this.queryParams=p,this.fragment=v,this.data=w,this.outlet=R,this.component=B,this.routeConfig=me,this._urlSegment=He,this._lastPathIndex=qe,this._correctedLastPathIndex=Ot??qe,this._resolve=We}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Rn(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Rn(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(p=>p.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ae extends mo{constructor(u,a){super(a),this.url=u,Se(this,a)}toString(){return Ne(this._root)}}function Se(c,u){u.value._routerState=c,u.children.forEach(a=>Se(c,a))}function Ne(c){const u=c.children.length>0?` { ${c.children.map(Ne).join(", ")} } `:"";return`${c.value}${u}`}function Dt(c){if(c.snapshot){const u=c.snapshot,a=c._futureSnapshot;c.snapshot=a,Vt(u.queryParams,a.queryParams)||c.queryParams.next(a.queryParams),u.fragment!==a.fragment&&c.fragment.next(a.fragment),Vt(u.params,a.params)||c.params.next(a.params),function nt(c,u){if(c.length!==u.length)return!1;for(let a=0;a<c.length;++a)if(!Vt(c[a],u[a]))return!1;return!0}(u.url,a.url)||c.url.next(a.url),Vt(u.data,a.data)||c.data.next(a.data)}else c.snapshot=c._futureSnapshot,c.data.next(c._futureSnapshot.data)}function jt(c,u){const a=Vt(c.params,u.params)&&function Ut(c,u){return Te(c,u)&&c.every((a,p)=>Vt(a.parameters,u[p].parameters))}(c.url,u.url);return a&&!(!c.parent!=!u.parent)&&(!c.parent||jt(c.parent,u.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function fn(c,u,a){if(a&&c.shouldReuseRoute(u.value,a.value.snapshot)){const p=a.value;p._futureSnapshot=u.value;const v=function kt(c,u,a){return u.children.map(p=>{for(const v of a.children)if(c.shouldReuseRoute(p.value,v.value.snapshot))return fn(c,p,v);return fn(c,p)})}(c,u,a);return new yn(p,v)}{if(c.shouldAttach(u.value)){const w=c.retrieve(u.value);if(null!==w){const R=w.route;return R.value._futureSnapshot=u.value,R.children=u.children.map(B=>fn(c,B)),R}}const p=function Kn(c){return new rn(new ue.X(c.url),new ue.X(c.params),new ue.X(c.queryParams),new ue.X(c.fragment),new ue.X(c.data),c.outlet,c.component,c)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(u.value),v=u.children.map(w=>fn(c,w));return new yn(p,v)}}function Pr(c){return"object"==typeof c&&null!=c&&!c.outlets&&!c.segmentPath}function _o(c){return"object"==typeof c&&null!=c&&c.outlets}function ai(c,u,a,p,v){let w={};if(p&&rt(p,(B,me)=>{w[me]=Array.isArray(B)?B.map(He=>`${He}`):`${B}`}),c===u)return new It(a,w,v);const R=jo(c,u,a);return new It(R,w,v)}function jo(c,u,a){const p={};return rt(c.children,(v,w)=>{p[w]=v===u?a:jo(v,u,a)}),new Ye(c.segments,p)}class Ni{constructor(u,a,p){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=p,u&&p.length>0&&Pr(p[0]))throw new E.vHH(4003,false);const v=p.find(_o);if(v&&v!==Mt(p))throw new E.vHH(4004,false)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class ui{constructor(u,a,p){this.segmentGroup=u,this.processChildren=a,this.index=p}}function vo(c,u,a){if(c||(c=new Ye([],{})),0===c.segments.length&&c.hasChildren())return Ho(c,u,a);const p=function Bi(c,u,a){let p=0,v=u;const w={match:!1,pathIndex:0,commandIndex:0};for(;v<c.segments.length;){if(p>=a.length)return w;const R=c.segments[v],B=a[p];if(_o(B))break;const me=`${B}`,He=p<a.length-1?a[p+1]:null;if(v>0&&void 0===me)break;if(me&&He&&"object"==typeof He&&void 0===He.outlets){if(!Tr(me,He,R))return w;p+=2}else{if(!Tr(me,{},R))return w;p++}v++}return{match:!0,pathIndex:v,commandIndex:p}}(c,u,a),v=a.slice(p.commandIndex);if(p.match&&p.pathIndex<c.segments.length){const w=new Ye(c.segments.slice(0,p.pathIndex),{});return w.children[et]=new Ye(c.segments.slice(p.pathIndex),c.children),Ho(w,0,v)}return p.match&&0===v.length?new Ye(c.segments,{}):p.match&&!c.hasChildren()?Vo(c,u,a):p.match?Ho(c,0,v):Vo(c,u,a)}function Ho(c,u,a){if(0===a.length)return new Ye(c.segments,{});{const p=function li(c){return _o(c[0])?c[0].outlets:{[et]:c}}(a),v={};return rt(p,(w,R)=>{"string"==typeof w&&(w=[w]),null!==w&&(v[R]=vo(c.children[R],u,w))}),rt(c.children,(w,R)=>{void 0===p[R]&&(v[R]=w)}),new Ye(c.segments,v)}}function Vo(c,u,a){const p=c.segments.slice(0,u);let v=0;for(;v<a.length;){const w=a[v];if(_o(w)){const me=_r(w.outlets);return new Ye(p,me)}if(0===v&&Pr(a[0])){p.push(new bt(c.segments[u].path,yo(a[0]))),v++;continue}const R=_o(w)?w.outlets[et]:`${w}`,B=v<a.length-1?a[v+1]:null;R&&B&&Pr(B)?(p.push(new bt(R,yo(B))),v+=2):(p.push(new bt(R,{})),v++)}return new Ye(p,{})}function _r(c){const u={};return rt(c,(a,p)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[p]=Vo(new Ye([],{}),0,a))}),u}function yo(c){const u={};return rt(c,(a,p)=>u[p]=`${a}`),u}function Tr(c,u,a){return c==a.path&&Vt(u,a.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class $o{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Fr,this.attachRef=null}}class Fr{constructor(){this.contexts=new Map}onChildOutletCreated(u,a){const p=this.getOrCreateContext(u);p.outlet=a,this.contexts.set(u,p)}onChildOutletDestroyed(u){const a=this.getContext(u);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let a=this.getContext(u);return a||(a=new $o,this.contexts.set(u,a)),a}getContext(u){return this.contexts.get(u)||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Mn=!1;let Ar=(()=>{class c{constructor(a,p,v,w,R){this.parentContexts=a,this.location=p,this.changeDetector=w,this.environmentInjector=R,this.activated=null,this._activatedRoute=null,this.activateEvents=new E.vpe,this.deactivateEvents=new E.vpe,this.attachEvents=new E.vpe,this.detachEvents=new E.vpe,this.name=v||et,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new E.vHH(4012,Mn);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new E.vHH(4012,Mn);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new E.vHH(4012,Mn);this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,p){this.activated=a,this._activatedRoute=p,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,p){if(this.isActivated)throw new E.vHH(4013,Mn);this._activatedRoute=a;const v=this.location,R=a._futureSnapshot.component,B=this.parentContexts.getOrCreateContext(this.name).children,me=new Kr(a,B,v.injector);if(p&&function Ui(c){return!!c.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(p)){const He=p.resolveComponentFactory(R);this.activated=v.createComponent(He,v.length,me)}else this.activated=v.createComponent(R,{index:v.length,injector:me,environmentInjector:p??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return c.\u0275fac=function(a){return new(a||c)(E.Y36(Fr),E.Y36(E.s_b),E.$8M("name"),E.Y36(E.sBO),E.Y36(E.lqb))},c.\u0275dir=E.lG2({type:c,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),c})();class Kr{constructor(u,a,p){this.route=u,this.childContexts=a,this.parent=p}get(u,a){return u===rn?this.route:u===Fr?this.childContexts:this.parent.get(u,a)}}let Yr=(()=>{class c{}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=E.Xpm({type:c,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,p){1&a&&E._UZ(0,"router-outlet")},dependencies:[Ar],encapsulation:2}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function vr(c,u){return c.providers&&!c._injector&&(c._injector=(0,E.MMx)(c.providers,u,`Route: ${c.path}`)),c._injector??u}function Hi(c){const u=c.children&&c.children.map(Hi),a=u?{...c,children:u}:{...c};return!a.component&&!a.loadComponent&&(u||a.loadChildren)&&a.outlet&&a.outlet!==et&&(a.component=Yr),a}function hn(c){return c.outlet||et}function Ln(c,u){const a=c.filter(p=>hn(p)===u);return a.push(...c.filter(p=>hn(p)!==u)),a}function Do(c){if(!c)return null;if(c.routeConfig?._injector)return c.routeConfig._injector;for(let u=c.parent;u;u=u.parent){const a=u.routeConfig;if(a?._loadedInjector)return a._loadedInjector;if(a?._injector)return a._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Nr{constructor(u,a,p,v){this.routeReuseStrategy=u,this.futureState=a,this.currState=p,this.forwardEvent=v}activate(u){const a=this.futureState._root,p=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,p,u),Dt(this.futureState.root),this.activateChildRoutes(a,p,u)}deactivateChildRoutes(u,a,p){const v=$n(a);u.children.forEach(w=>{const R=w.value.outlet;this.deactivateRoutes(w,v[R],p),delete v[R]}),rt(v,(w,R)=>{this.deactivateRouteAndItsChildren(w,p)})}deactivateRoutes(u,a,p){const v=u.value,w=a?a.value:null;if(v===w)if(v.component){const R=p.getContext(v.outlet);R&&this.deactivateChildRoutes(u,a,R.children)}else this.deactivateChildRoutes(u,a,p);else w&&this.deactivateRouteAndItsChildren(a,p)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const p=a.getContext(u.value.outlet),v=p&&u.value.component?p.children:a,w=$n(u);for(const R of Object.keys(w))this.deactivateRouteAndItsChildren(w[R],v);if(p&&p.outlet){const R=p.outlet.detach(),B=p.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:R,route:u,contexts:B})}}deactivateRouteAndOutlet(u,a){const p=a.getContext(u.value.outlet),v=p&&u.value.component?p.children:a,w=$n(u);for(const R of Object.keys(w))this.deactivateRouteAndItsChildren(w[R],v);p&&p.outlet&&(p.outlet.deactivate(),p.children.onOutletDeactivated(),p.attachRef=null,p.resolver=null,p.route=null)}activateChildRoutes(u,a,p){const v=$n(a);u.children.forEach(w=>{this.activateRoutes(w,v[w.value.outlet],p),this.forwardEvent(new On(w.value.snapshot))}),u.children.length&&this.forwardEvent(new Qt(u.value.snapshot))}activateRoutes(u,a,p){const v=u.value,w=a?a.value:null;if(Dt(v),v===w)if(v.component){const R=p.getOrCreateContext(v.outlet);this.activateChildRoutes(u,a,R.children)}else this.activateChildRoutes(u,a,p);else if(v.component){const R=p.getOrCreateContext(v.outlet);if(this.routeReuseStrategy.shouldAttach(v.snapshot)){const B=this.routeReuseStrategy.retrieve(v.snapshot);this.routeReuseStrategy.store(v.snapshot,null),R.children.onOutletReAttached(B.contexts),R.attachRef=B.componentRef,R.route=B.route.value,R.outlet&&R.outlet.attach(B.componentRef,B.route.value),Dt(B.route.value),this.activateChildRoutes(u,null,R.children)}else{const B=Do(v.snapshot),me=B?.get(E._Vd)??null;R.attachRef=null,R.route=v,R.resolver=me,R.injector=B,R.outlet&&R.outlet.activateWith(v,R.injector),this.activateChildRoutes(u,null,R.children)}}else this.activateChildRoutes(u,null,p)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Dn(c){return"function"==typeof c}function b(c){return c instanceof It}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ie=Symbol("INITIAL_VALUE");function Ge(){return(0,ce.w)(c=>(0,we.a)(c.map(u=>u.pipe((0,oe.q)(1),(0,Fe.O)(ie)))).pipe((0,ct.R)((u,a)=>{let p=!1;return a.reduce((v,w,R)=>v!==ie?v:(w===ie&&(p=!0),p||!1!==w&&R!==a.length-1&&!b(w)?v:w),u)},ie),(0,Me.h)(u=>u!==ie),(0,re.U)(u=>b(u)?u:!0===u),(0,oe.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const $t={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Rt(c,u,a){if(""===u.path)return"full"===u.pathMatch&&(c.hasChildren()||a.length>0)?{...$t}:{matched:!0,consumedSegments:[],remainingSegments:a,parameters:{},positionalParamSegments:{}};const v=(u.matcher||en)(a,c,u);if(!v)return{...$t};const w={};rt(v.posParams,(B,me)=>{w[me]=B.path});const R=v.consumed.length>0?{...w,...v.consumed[v.consumed.length-1].parameters}:w;return{matched:!0,consumedSegments:v.consumed,remainingSegments:a.slice(v.consumed.length),parameters:R,positionalParamSegments:v.posParams??{}}}function xt(c,u,a,p,v="corrected"){if(a.length>0&&function Wt(c,u,a){return a.some(p=>Ee(c,u,p)&&hn(p)!==et)}(c,a,p)){const R=new Ye(u,function ln(c,u,a,p){const v={};v[et]=p,p._sourceSegment=c,p._segmentIndexShift=u.length;for(const w of a)if(""===w.path&&hn(w)!==et){const R=new Ye([],{});R._sourceSegment=c,R._segmentIndexShift=u.length,v[hn(w)]=R}return v}(c,u,p,new Ye(a,c.children)));return R._sourceSegment=c,R._segmentIndexShift=u.length,{segmentGroup:R,slicedSegments:[]}}if(0===a.length&&function pn(c,u,a){return a.some(p=>Ee(c,u,p))}(c,a,p)){const R=new Ye(c.segments,function Ct(c,u,a,p,v,w){const R={};for(const B of p)if(Ee(c,a,B)&&!v[hn(B)]){const me=new Ye([],{});me._sourceSegment=c,me._segmentIndexShift="legacy"===w?c.segments.length:u.length,R[hn(B)]=me}return{...v,...R}}(c,u,a,p,c.children,v));return R._sourceSegment=c,R._segmentIndexShift=u.length,{segmentGroup:R,slicedSegments:a}}const w=new Ye(c.segments,c.children);return w._sourceSegment=c,w._segmentIndexShift=u.length,{segmentGroup:w,slicedSegments:a}}function Ee(c,u,a){return(!(c.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function pt(c,u,a,p){return!!(hn(c)===p||p!==et&&Ee(u,a,c))&&("**"===c.path||Rt(u,c,a).matched)}function Lr(c,u,a){return 0===u.length&&!c.children[a]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const er=!1;class Kt{constructor(u){this.segmentGroup=u||null}}class Xr{constructor(u){this.urlTree=u}}function tr(c){return(0,he._)(new Kt(c))}function cr(c){return(0,he._)(new Xr(c))}class Ba{constructor(u,a,p,v,w){this.injector=u,this.configLoader=a,this.urlSerializer=p,this.urlTree=v,this.config=w,this.allowRedirects=!0}apply(){const u=xt(this.urlTree.root,[],[],this.config).segmentGroup,a=new Ye(u.segments,u.children);return this.expandSegmentGroup(this.injector,this.config,a,et).pipe((0,re.U)(w=>this.createUrlTree(Eo(w),this.urlTree.queryParams,this.urlTree.fragment))).pipe((0,_t.K)(w=>{if(w instanceof Xr)return this.allowRedirects=!1,this.match(w.urlTree);throw w instanceof Kt?this.noMatchError(w):w}))}match(u){return this.expandSegmentGroup(this.injector,this.config,u.root,et).pipe((0,re.U)(v=>this.createUrlTree(Eo(v),u.queryParams,u.fragment))).pipe((0,_t.K)(v=>{throw v instanceof Kt?this.noMatchError(v):v}))}noMatchError(u){return new E.vHH(4002,er)}createUrlTree(u,a,p){const v=u.segments.length>0?new Ye([],{[et]:u}):u;return new It(v,a,p)}expandSegmentGroup(u,a,p,v){return 0===p.segments.length&&p.hasChildren()?this.expandChildren(u,a,p).pipe((0,re.U)(w=>new Ye([],w))):this.expandSegment(u,p,a,p.segments,v,!0)}expandChildren(u,a,p){const v=[];for(const w of Object.keys(p.children))"primary"===w?v.unshift(w):v.push(w);return(0,pe.D)(v).pipe((0,vt.b)(w=>{const R=p.children[w],B=Ln(a,w);return this.expandSegmentGroup(u,B,R,w).pipe((0,re.U)(me=>({segment:me,outlet:w})))}),(0,ct.R)((w,R)=>(w[R.outlet]=R.segment,w),{}),function tt(c,u){const a=arguments.length>=2;return p=>p.pipe(c?(0,Me.h)((v,w)=>c(v,w,p)):Re.y,De(1),a?Ke(u):Pe(()=>new J))}())}expandSegment(u,a,p,v,w,R){return(0,pe.D)(p).pipe((0,vt.b)(B=>this.expandSegmentAgainstRoute(u,a,p,B,v,w,R).pipe((0,_t.K)(He=>{if(He instanceof Kt)return(0,X.of)(null);throw He}))),le(B=>!!B),(0,_t.K)((B,me)=>{if(B instanceof J||"EmptyError"===B.name)return Lr(a,v,w)?(0,X.of)(new Ye([],{})):tr(a);throw B}))}expandSegmentAgainstRoute(u,a,p,v,w,R,B){return pt(v,a,w,R)?void 0===v.redirectTo?this.matchSegmentAgainstRoute(u,a,v,w,R):B&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,p,v,w,R):tr(a):tr(a)}expandSegmentAgainstRouteUsingRedirect(u,a,p,v,w,R){return"**"===v.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,p,v,R):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,p,v,w,R)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,p,v){const w=this.applyRedirectCommands([],p.redirectTo,{});return p.redirectTo.startsWith("/")?cr(w):this.lineralizeSegments(p,w).pipe((0,xe.z)(R=>{const B=new Ye(R,{});return this.expandSegment(u,B,a,R,v,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,p,v,w,R){const{matched:B,consumedSegments:me,remainingSegments:He,positionalParamSegments:qe}=Rt(a,v,w);if(!B)return tr(a);const We=this.applyRedirectCommands(me,v.redirectTo,qe);return v.redirectTo.startsWith("/")?cr(We):this.lineralizeSegments(v,We).pipe((0,xe.z)(Ot=>this.expandSegment(u,a,p,Ot.concat(He),R,!1)))}matchSegmentAgainstRoute(u,a,p,v,w){if("**"===p.path)return u=vr(p,u),p.loadChildren?(p._loadedRoutes?(0,X.of)({routes:p._loadedRoutes,injector:p._loadedInjector}):this.configLoader.loadChildren(u,p)).pipe((0,re.U)(We=>(p._loadedRoutes=We.routes,p._loadedInjector=We.injector,new Ye(v,{})))):(0,X.of)(new Ye(v,{}));const{matched:R,consumedSegments:B,remainingSegments:me}=Rt(a,p,v);return R?(u=vr(p,u),this.getChildConfig(u,p,v).pipe((0,xe.z)(qe=>{const We=qe.injector??u,Ot=qe.routes,{segmentGroup:on,slicedSegments:nr}=xt(a,B,me,Ot),gn=new Ye(on.segments,on.children);if(0===nr.length&&gn.hasChildren())return this.expandChildren(We,Ot,gn).pipe((0,re.U)(xo=>new Ye(B,xo)));if(0===Ot.length&&0===nr.length)return(0,X.of)(new Ye(B,{}));const Un=hn(p)===w;return this.expandSegment(We,gn,Ot,nr,Un?et:w,!0).pipe((0,re.U)(jr=>new Ye(B.concat(jr.segments),jr.children)))}))):tr(a)}getChildConfig(u,a,p){return a.children?(0,X.of)({routes:a.children,injector:u}):a.loadChildren?void 0!==a._loadedRoutes?(0,X.of)({routes:a._loadedRoutes,injector:a._loadedInjector}):this.runCanLoadGuards(u,a,p).pipe((0,xe.z)(v=>v?this.configLoader.loadChildren(u,a).pipe((0,yt.b)(w=>{a._loadedRoutes=w.routes,a._loadedInjector=w.injector})):function $i(c){return(0,he._)(lt(er))}())):(0,X.of)({routes:[],injector:u})}runCanLoadGuards(u,a,p){const v=a.canLoad;if(!v||0===v.length)return(0,X.of)(!0);const w=v.map(R=>{const B=u.get(R);return Hn(function _(c){return c&&Dn(c.canLoad)}(B)?B.canLoad(a,p):B(a,p))});return(0,X.of)(w).pipe(Ge(),(0,yt.b)(R=>{if(!b(R))return;const B=lt(gt+this.urlSerializer.serialize(R));throw B.url=R,B}),(0,re.U)(R=>!0===R))}lineralizeSegments(u,a){let p=[],v=a.root;for(;;){if(p=p.concat(v.segments),0===v.numberOfChildren)return(0,X.of)(p);if(v.numberOfChildren>1||!v.children[et])return(0,he._)(new E.vHH(4e3,er));v=v.children[et]}}applyRedirectCommands(u,a,p){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,p)}applyRedirectCreatreUrlTree(u,a,p,v){const w=this.createSegmentGroup(u,a.root,p,v);return new It(w,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const p={};return rt(u,(v,w)=>{if("string"==typeof v&&v.startsWith(":")){const B=v.substring(1);p[w]=a[B]}else p[w]=v}),p}createSegmentGroup(u,a,p,v){const w=this.createSegments(u,a.segments,p,v);let R={};return rt(a.children,(B,me)=>{R[me]=this.createSegmentGroup(u,B,p,v)}),new Ye(w,R)}createSegments(u,a,p,v){return a.map(w=>w.path.startsWith(":")?this.findPosParam(u,w,v):this.findOrReturn(w,p))}findPosParam(u,a,p){const v=p[a.path.substring(1)];if(!v)throw new E.vHH(4001,er);return v}findOrReturn(u,a){let p=0;for(const v of a){if(v.path===u.path)return a.splice(p),v;p++}return u}}function Eo(c){const u={};for(const p of Object.keys(c.children)){const w=Eo(c.children[p]);(w.segments.length>0||w.hasChildren())&&(u[p]=w)}return function Wu(c){if(1===c.numberOfChildren&&c.children[et]){const u=c.children[et];return new Ye(c.segments.concat(u.segments),u.children)}return c}(new Ye(c.segments,u))}
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
class yr{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class Ko{constructor(u,a){this.component=u,this.route=a}}function Co(c,u,a){const p=c._root;return Zr(p,u?u._root:null,a,[p.value])}function di(c,u,a){return(Do(u)??a).get(c)}function Zr(c,u,a,p,v={canDeactivateChecks:[],canActivateChecks:[]}){const w=$n(u);return c.children.forEach(R=>{(function Ua(c,u,a,p,v={canDeactivateChecks:[],canActivateChecks:[]}){const w=c.value,R=u?u.value:null,B=a?a.getContext(c.value.outlet):null;if(R&&w.routeConfig===R.routeConfig){const me=function ja(c,u,a){if("function"==typeof a)return a(c,u);switch(a){case"pathParamsChange":return!Te(c.url,u.url);case"pathParamsOrQueryParamsChange":return!Te(c.url,u.url)||!Vt(c.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!jt(c,u)||!Vt(c.queryParams,u.queryParams);default:return!jt(c,u)}}(R,w,w.routeConfig.runGuardsAndResolvers);me?v.canActivateChecks.push(new yr(p)):(w.data=R.data,w._resolvedData=R._resolvedData),Zr(c,u,w.component?B?B.children:null:a,p,v),me&&B&&B.outlet&&B.outlet.isActivated&&v.canDeactivateChecks.push(new Ko(B.outlet.component,R))}else R&&Qr(u,B,v),v.canActivateChecks.push(new yr(p)),Zr(c,null,w.component?B?B.children:null:a,p,v)})(R,w[R.value.outlet],a,p.concat([R.value]),v),delete w[R.value.outlet]}),rt(w,(R,B)=>Qr(R,a.getContext(B),v)),v}function Qr(c,u,a){const p=$n(c),v=c.value;rt(p,(w,R)=>{Qr(w,v.component?u?u.children.getContext(R):null:u,a)}),a.canDeactivateChecks.push(new Ko(v.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,v))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Us{}function Xo(c){return new F.y(u=>u.error(c))}class Va{constructor(u,a,p,v,w,R){this.rootComponentType=u,this.config=a,this.urlTree=p,this.url=v,this.paramsInheritanceStrategy=w,this.relativeLinkResolution=R}recognize(){const u=xt(this.urlTree.root,[],[],this.config.filter(R=>void 0===R.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,et);if(null===a)return null;const p=new Q([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},et,this.rootComponentType,null,this.urlTree.root,-1,{}),v=new yn(p,a),w=new ae(this.url,v);return this.inheritParamsAndData(w._root),w}inheritParamsAndData(u){const a=u.value,p=x(a,this.paramsInheritanceStrategy);a.params=Object.freeze(p.params),a.data=Object.freeze(p.data),u.children.forEach(v=>this.inheritParamsAndData(v))}processSegmentGroup(u,a,p){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,p)}processChildren(u,a){const p=[];for(const w of Object.keys(a.children)){const R=a.children[w],B=Ln(u,w),me=this.processSegmentGroup(B,R,w);if(null===me)return null;p.push(...me)}const v=pi(p);return function Bn(c){c.sort((u,a)=>u.value.outlet===et?-1:a.value.outlet===et?1:u.value.outlet.localeCompare(a.value.outlet))}(v),v}processSegment(u,a,p,v){for(const w of u){const R=this.processSegmentAgainstRoute(w,a,p,v);if(null!==R)return R}return Lr(a,p,v)?[]:null}processSegmentAgainstRoute(u,a,p,v){if(u.redirectTo||!pt(u,a,p,v))return null;let w,R=[],B=[];if("**"===u.path){const on=p.length>0?Mt(p).parameters:{},nr=Vs(a)+p.length;w=new Q(p,on,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Ws(u),hn(u),u.component??u._loadedComponent??null,u,Hs(a),nr,Jr(u),nr)}else{const on=Rt(a,u,p);if(!on.matched)return null;R=on.consumedSegments,B=on.remainingSegments;const nr=Vs(a)+R.length;w=new Q(R,on.parameters,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Ws(u),hn(u),u.component??u._loadedComponent??null,u,Hs(a),nr,Jr(u),nr)}const me=function kr(c){return c.children?c.children:c.loadChildren?c._loadedRoutes:[]}(u),{segmentGroup:He,slicedSegments:qe}=xt(a,R,B,me.filter(on=>void 0===on.redirectTo),this.relativeLinkResolution);if(0===qe.length&&He.hasChildren()){const on=this.processChildren(me,He);return null===on?null:[new yn(w,on)]}if(0===me.length&&0===qe.length)return[new yn(w,[])];const We=hn(u)===v,Ot=this.processSegment(me,He,qe,We?et:v);return null===Ot?null:[new yn(w,Ot)]}}function Xt(c){const u=c.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function pi(c){const u=[],a=new Set;for(const p of c){if(!Xt(p)){u.push(p);continue}const v=u.find(w=>p.value.routeConfig===w.value.routeConfig);void 0!==v?(v.children.push(...p.children),a.add(v)):u.push(p)}for(const p of a){const v=pi(p.children);u.push(new yn(p.value,v))}return u.filter(p=>!a.has(p))}function Hs(c){let u=c;for(;u._sourceSegment;)u=u._sourceSegment;return u}function Vs(c){let u=c,a=u._segmentIndexShift??0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift??0;return a-1}function Ws(c){return c.data||{}}function Jr(c){return c.resolve||{}}
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
const Mo=Symbol("RouteTitle");function Gs(c){return"string"==typeof c.title||null===c.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qi(c){return(0,ce.w)(u=>{const a=c(u);return a?(0,pe.D)(a).pipe((0,re.U)(()=>u)):(0,X.of)(u)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class $a extends class Xi{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ks=new E.OlP("ROUTES");let Ys=(()=>{class c{constructor(a,p){this.injector=a,this.compiler=p,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(a){if(this.componentLoaders.get(a))return this.componentLoaders.get(a);if(a._loadedComponent)return(0,X.of)(a._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(a);const p=Hn(a.loadComponent()).pipe((0,yt.b)(w=>{this.onLoadEndListener&&this.onLoadEndListener(a),a._loadedComponent=w}),(0,an.x)(()=>{this.componentLoaders.delete(a)})),v=new q(p,()=>new Ue.x).pipe(K());return this.componentLoaders.set(a,v),v}loadChildren(a,p){if(this.childrenLoaders.get(p))return this.childrenLoaders.get(p);if(p._loadedRoutes)return(0,X.of)({routes:p._loadedRoutes,injector:p._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(p);const w=this.loadModuleFactoryOrRoutes(p.loadChildren).pipe((0,re.U)(B=>{this.onLoadEndListener&&this.onLoadEndListener(p);let me,He,qe=!1;Array.isArray(B)?He=B:(me=B.create(a).injector,He=xn(me.get(Ks,[],E.XFs.Self|E.XFs.Optional)));return{routes:He.map(Hi),injector:me}}),(0,an.x)(()=>{this.childrenLoaders.delete(p)})),R=new q(w,()=>new Ue.x).pipe(K());return this.childrenLoaders.set(p,R),R}loadModuleFactoryOrRoutes(a){return Hn(a()).pipe((0,xe.z)(p=>p instanceof E.YKP||Array.isArray(p)?(0,X.of)(p):(0,pe.D)(this.compiler.compileModuleAsync(p))))}}return c.\u0275fac=function(a){return new(a||c)(E.LFG(E.zs3),E.LFG(E.Sil))},c.\u0275prov=E.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class qs{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function _i(c){throw c}function Xs(c,u,a){return u.parse("/")}const Zs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},bo={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let In=(()=>{class c{constructor(a,p,v,w,R,B,me){this.rootComponentType=a,this.urlSerializer=p,this.rootContexts=v,this.location=w,this.config=me,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ue.x,this.errorHandler=_i,this.malformedUriErrorHandler=Xs,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>(0,X.of)(void 0),this.urlHandlingStrategy=new qs,this.routeReuseStrategy=new $a,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=R.get(Ys),this.configLoader.onLoadEndListener=Ot=>this.triggerEvent(new Je(Ot)),this.configLoader.onLoadStartListener=Ot=>this.triggerEvent(new hr(Ot)),this.ngModule=R.get(E.h0i),this.console=R.get(E.c2e);const We=R.get(E.R0b);this.isNgZoneEnabled=We instanceof E.R0b&&E.R0b.isInAngularZone(),this.resetConfig(me),this.currentUrlTree=function se(){return new It(new Ye([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=nn(this.currentUrlTree,this.rootComponentType),this.transitions=new ue.X({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(a){const p=this.events;return a.pipe((0,Me.h)(v=>0!==v.id),(0,re.U)(v=>({...v,extractedUrl:this.urlHandlingStrategy.extract(v.rawUrl)})),(0,ce.w)(v=>{let w=!1,R=!1;return(0,X.of)(v).pipe((0,yt.b)(B=>{this.currentNavigation={id:B.id,initialUrl:B.rawUrl,extractedUrl:B.extractedUrl,trigger:B.source,extras:B.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),(0,ce.w)(B=>{const me=this.browserUrlTree.toString(),He=!this.navigated||B.extractedUrl.toString()!==me||me!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||He)&&this.urlHandlingStrategy.shouldProcessUrl(B.rawUrl))return vi(B.source)&&(this.browserUrlTree=B.extractedUrl),(0,X.of)(B).pipe((0,ce.w)(We=>{const Ot=this.transitions.getValue();return p.next(new un(We.id,this.serializeUrl(We.extractedUrl),We.source,We.restoredState)),Ot!==this.transitions.getValue()?Be.E:Promise.resolve(We)}),function kn(c,u,a,p){return(0,ce.w)(v=>function $u(c,u,a,p,v){return new Ba(c,u,a,p,v).apply()}(c,u,a,v.extractedUrl,p).pipe((0,re.U)(w=>({...v,urlAfterRedirects:w}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),(0,yt.b)(We=>{this.currentNavigation={...this.currentNavigation,finalUrl:We.urlAfterRedirects}}),function gi(c,u,a,p,v){return(0,xe.z)(w=>function js(c,u,a,p,v="emptyOnly",w="legacy"){try{const R=new Va(c,u,a,p,v,w).recognize();return null===R?Xo(new Us):(0,X.of)(R)}catch(R){return Xo(R)}}(c,u,w.urlAfterRedirects,a(w.urlAfterRedirects),p,v).pipe((0,re.U)(R=>({...w,targetSnapshot:R}))))}(this.rootComponentType,this.config,We=>this.serializeUrl(We),this.paramsInheritanceStrategy,this.relativeLinkResolution),(0,yt.b)(We=>{if("eager"===this.urlUpdateStrategy){if(!We.extras.skipLocationChange){const on=this.urlHandlingStrategy.merge(We.urlAfterRedirects,We.rawUrl);this.setBrowserUrl(on,We)}this.browserUrlTree=We.urlAfterRedirects}const Ot=new xr(We.id,this.serializeUrl(We.extractedUrl),this.serializeUrl(We.urlAfterRedirects),We.targetSnapshot);p.next(Ot)}));if(He&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:Ot,extractedUrl:on,source:nr,restoredState:gn,extras:Un}=B,dr=new un(Ot,this.serializeUrl(on),nr,gn);p.next(dr);const jr=nn(on,this.rootComponentType).snapshot;return(0,X.of)({...B,targetSnapshot:jr,urlAfterRedirects:on,extras:{...Un,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=B.rawUrl,B.resolve(null),Be.E}),(0,yt.b)(B=>{const me=new Ir(B.id,this.serializeUrl(B.extractedUrl),this.serializeUrl(B.urlAfterRedirects),B.targetSnapshot);this.triggerEvent(me)}),(0,re.U)(B=>({...B,guards:Co(B.targetSnapshot,B.currentSnapshot,this.rootContexts)})),function Wi(c,u){return(0,xe.z)(a=>{const{targetSnapshot:p,currentSnapshot:v,guards:{canActivateChecks:w,canDeactivateChecks:R}}=a;return 0===R.length&&0===w.length?(0,X.of)({...a,guardsResult:!0}):function Bs(c,u,a,p){return(0,pe.D)(c).pipe((0,xe.z)(v=>function zi(c,u,a,p,v){const w=u&&u.routeConfig?u.routeConfig.canDeactivate:null;if(!w||0===w.length)return(0,X.of)(!0);const R=w.map(B=>{const me=di(B,u,v);return Hn(function fe(c){return c&&Dn(c.canDeactivate)}(me)?me.canDeactivate(c,u,a,p):me(c,u,a,p)).pipe(le())});return(0,X.of)(R).pipe(Ge())}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(v.component,v.route,a,u,p)),le(v=>!0!==v,!0))}(R,p,v,c).pipe((0,xe.z)(B=>B&&function g(c){return"boolean"==typeof c}(B)?function Gi(c,u,a,p){return(0,pe.D)(u).pipe((0,vt.b)(v=>(0,Ie.z)(function fi(c,u){return null!==c&&u&&u(new Jn(c)),(0,X.of)(!0)}(v.route.parent,p),function Ha(c,u){return null!==c&&u&&u(new Gt(c)),(0,X.of)(!0)}(v.route,p),function qo(c,u,a){const p=u[u.length-1],w=u.slice(0,u.length-1).reverse().map(R=>function Sr(c){const u=c.routeConfig?c.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:c,guards:u}:null}(R)).filter(R=>null!==R).map(R=>V(()=>{const B=R.guards.map(me=>{const He=di(me,R.node,a);return Hn(function j(c){return c&&Dn(c.canActivateChild)}(He)?He.canActivateChild(p,c):He(p,c)).pipe(le())});return(0,X.of)(B).pipe(Ge())}));return(0,X.of)(w).pipe(Ge())}(c,v.path,a),function Yo(c,u,a){const p=u.routeConfig?u.routeConfig.canActivate:null;if(!p||0===p.length)return(0,X.of)(!0);const v=p.map(w=>V(()=>{const R=di(w,u,a);return Hn(function T(c){return c&&Dn(c.canActivate)}(R)?R.canActivate(u,c):R(u,c)).pipe(le())}));return(0,X.of)(v).pipe(Ge())}(c,v.route,a))),le(v=>!0!==v,!0))}(p,w,c,u):(0,X.of)(B)),(0,re.U)(B=>({...a,guardsResult:B})))})}(this.ngModule.injector,B=>this.triggerEvent(B)),(0,yt.b)(B=>{if(b(B.guardsResult)){const He=lt(`Redirecting to "${this.serializeUrl(B.guardsResult)}"`);throw He.url=B.guardsResult,He}const me=new bn(B.id,this.serializeUrl(B.extractedUrl),this.serializeUrl(B.urlAfterRedirects),B.targetSnapshot,!!B.guardsResult);this.triggerEvent(me)}),(0,Me.h)(B=>!!B.guardsResult||(this.restoreHistory(B),this.cancelNavigationTransition(B,""),!1)),qi(B=>{if(B.guards.canActivateChecks.length)return(0,X.of)(B).pipe((0,yt.b)(me=>{const He=new Wn(me.id,this.serializeUrl(me.extractedUrl),this.serializeUrl(me.urlAfterRedirects),me.targetSnapshot);this.triggerEvent(He)}),(0,ce.w)(me=>{let He=!1;return(0,X.of)(me).pipe(function mi(c,u){return(0,xe.z)(a=>{const{targetSnapshot:p,guards:{canActivateChecks:v}}=a;if(!v.length)return(0,X.of)(a);let w=0;return(0,pe.D)(v).pipe((0,vt.b)(R=>function Ki(c,u,a,p){const v=c.routeConfig,w=c._resolve;return void 0!==v?.title&&!Gs(v)&&(w[Mo]=v.title),function Yi(c,u,a,p){const v=function Br(c){return[...Object.keys(c),...Object.getOwnPropertySymbols(c)]}(c);if(0===v.length)return(0,X.of)({});const w={};return(0,pe.D)(v).pipe((0,xe.z)(R=>function Zo(c,u,a,p){const v=di(c,u,p);return Hn(v.resolve?v.resolve(u,a):v(u,a))}(c[R],u,a,p).pipe(le(),(0,yt.b)(B=>{w[R]=B}))),De(1),function ge(c){return(0,re.U)(()=>c)}(w),(0,_t.K)(R=>R instanceof J?Be.E:(0,he._)(R)))}(w,c,u,p).pipe((0,re.U)(R=>(c._resolvedData=R,c.data=x(c,a).resolve,v&&Gs(v)&&(c.data[Mo]=v.title),null)))}(R.route,p,c,u)),(0,yt.b)(()=>w++),De(1),(0,xe.z)(R=>w===v.length?(0,X.of)(a):Be.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),(0,yt.b)({next:()=>He=!0,complete:()=>{He||(this.restoreHistory(me),this.cancelNavigationTransition(me,"At least one route resolver didn't emit any value."))}}))}),(0,yt.b)(me=>{const He=new Gn(me.id,this.serializeUrl(me.extractedUrl),this.serializeUrl(me.urlAfterRedirects),me.targetSnapshot);this.triggerEvent(He)}))}),qi(B=>{const me=He=>{const qe=[];He.routeConfig?.loadComponent&&!He.routeConfig._loadedComponent&&qe.push(this.configLoader.loadComponent(He.routeConfig).pipe((0,yt.b)(We=>{He.component=We}),(0,re.U)(()=>{})));for(const We of He.children)qe.push(...me(We));return qe};return(0,we.a)(me(B.targetSnapshot.root)).pipe(Ke(),(0,oe.q)(1))}),qi(()=>this.afterPreactivation()),(0,re.U)(B=>{const me=function zt(c,u,a){const p=fn(c,u._root,a?a._root:void 0);return new zn(p,u)}(this.routeReuseStrategy,B.targetSnapshot,B.currentRouterState);return{...B,targetRouterState:me}}),(0,yt.b)(B=>{this.currentUrlTree=B.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(B.urlAfterRedirects,B.rawUrl),this.routerState=B.targetRouterState,"deferred"===this.urlUpdateStrategy&&(B.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,B),this.browserUrlTree=B.urlAfterRedirects)}),((c,u,a)=>(0,re.U)(p=>(new Nr(u,p.targetRouterState,p.currentRouterState,a).activate(c),p)))(this.rootContexts,this.routeReuseStrategy,B=>this.triggerEvent(B)),(0,yt.b)({next(){w=!0},complete(){w=!0}}),(0,an.x)(()=>{w||R||this.cancelNavigationTransition(v,`Navigation ID ${v.id} is not equal to the current navigation id ${this.navigationId}`),this.currentNavigation?.id===v.id&&(this.currentNavigation=null)}),(0,_t.K)(B=>{if(R=!0,function br(c){return c&&c[ke]}(B)){const me=b(B.url);me||(this.navigated=!0,this.restoreHistory(v,!0));const He=new _n(v.id,this.serializeUrl(v.extractedUrl),B.message);if(p.next(He),me){const qe=this.urlHandlingStrategy.merge(B.url,this.rawUrlTree),We={skipLocationChange:v.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||vi(v.source)};this.scheduleNavigation(qe,"imperative",null,We,{resolve:v.resolve,reject:v.reject,promise:v.promise})}else v.resolve(!1)}else{this.restoreHistory(v,!0);const me=new Qn(v.id,this.serializeUrl(v.extractedUrl),B);p.next(me);try{v.resolve(this.errorHandler(B))}catch(He){v.reject(He)}}return Be.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next({...this.transitions.value,...a})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const p="popstate"===a.type?"popstate":"hashchange";"popstate"===p&&setTimeout(()=>{const v={replaceUrl:!0},w=a.state?.navigationId?a.state:null;if(w){const B={...w};delete B.navigationId,delete B.\u0275routerPageId,0!==Object.keys(B).length&&(v.state=B)}const R=this.parseUrl(a.url);this.scheduleNavigation(R,p,w,v)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){this.config=a.map(Hi),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,p={}){const{relativeTo:v,queryParams:w,fragment:R,queryParamsHandling:B,preserveFragment:me}=p,He=v||this.routerState.root,qe=me?this.currentUrlTree.fragment:R;let We=null;switch(B){case"merge":We={...this.currentUrlTree.queryParams,...w};break;case"preserve":We=this.currentUrlTree.queryParams;break;default:We=w||null}return null!==We&&(We=this.removeEmptyProps(We)),function Uo(c,u,a,p,v){if(0===a.length)return ai(u.root,u.root,u.root,p,v);const w=function Li(c){if("string"==typeof c[0]&&1===c.length&&"/"===c[0])return new Ni(!0,0,c);let u=0,a=!1;const p=c.reduce((v,w,R)=>{if("object"==typeof w&&null!=w){if(w.outlets){const B={};return rt(w.outlets,(me,He)=>{B[He]="string"==typeof me?me.split("/"):me}),[...v,{outlets:B}]}if(w.segmentPath)return[...v,w.segmentPath]}return"string"!=typeof w?[...v,w]:0===R?(w.split("/").forEach((B,me)=>{0==me&&"."===B||(0==me&&""===B?a=!0:".."===B?u++:""!=B&&v.push(B))}),v):[...v,w]},[]);return new Ni(a,u,p)}(a);return w.toRoot()?ai(u.root,u.root,new Ye([],{}),p,v):function R(me){const He=function ki(c,u,a,p){return c.isAbsolute?new ui(u.root,!0,0):-1===p?new ui(a,a===u.root,0):function ci(c,u,a){let p=c,v=u,w=a;for(;w>v;){if(w-=v,p=p.parent,!p)throw new E.vHH(4005,!1);v=p.segments.length}return new ui(p,!1,v-w)}(a,p+(Pr(c.commands[0])?0:1),c.numberOfDoubleDots)}(w,u,c.snapshot?._urlSegment,me),qe=He.processChildren?Ho(He.segmentGroup,He.index,w.commands):vo(He.segmentGroup,He.index,w.commands);return ai(u.root,He.segmentGroup,qe,p,v)}(c.snapshot?._lastPathIndex)}(He,this.currentUrlTree,a,We,qe??null)}navigateByUrl(a,p={skipLocationChange:!1}){const v=b(a)?a:this.parseUrl(a),w=this.urlHandlingStrategy.merge(v,this.rawUrlTree);return this.scheduleNavigation(w,"imperative",null,p)}navigate(a,p={skipLocationChange:!1}){return function wo(c){for(let u=0;u<c.length;u++){if(null==c[u])throw new E.vHH(4008,!1)}}(a),this.navigateByUrl(this.createUrlTree(a,p),p)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let p;try{p=this.urlSerializer.parse(a)}catch(v){p=this.malformedUriErrorHandler(v,this.urlSerializer,a)}return p}isActive(a,p){let v;if(v=!0===p?{...Zs}:!1===p?{...bo}:p,b(a))return Le(this.currentUrlTree,a,v);const w=this.parseUrl(a);return Le(this.currentUrlTree,w,v)}removeEmptyProps(a){return Object.keys(a).reduce((p,v)=>{const w=a[v];return null!=w&&(p[v]=w),p},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new Ft(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,p,v,w,R){if(this.disposed)return Promise.resolve(!1);let B,me,He;R?(B=R.resolve,me=R.reject,He=R.promise):He=new Promise((Ot,on)=>{B=Ot,me=on});const qe=++this.navigationId;let We;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(v=this.location.getState()),We=v&&v.\u0275routerPageId?v.\u0275routerPageId:w.replaceUrl||w.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):We=0,this.setTransition({id:qe,targetPageId:We,source:p,restoredState:v,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:w,resolve:B,reject:me,promise:He,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),He.catch(Ot=>Promise.reject(Ot))}setBrowserUrl(a,p){const v=this.urlSerializer.serialize(a),w={...p.extras.state,...this.generateNgRouterState(p.id,p.targetPageId)};this.location.isCurrentPathEqualTo(v)||p.extras.replaceUrl?this.location.replaceState(v,"",w):this.location.go(v,"",w)}restoreHistory(a,p=!1){if("computed"===this.canceledNavigationResolution){const v=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===v?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===v&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(v)}else"replace"===this.canceledNavigationResolution&&(p&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,p){const v=new _n(a.id,this.serializeUrl(a.extractedUrl),p);this.triggerEvent(v),a.resolve(!1)}generateNgRouterState(a,p){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:p}:{navigationId:a}}}return c.\u0275fac=function(a){E.$Z()},c.\u0275prov=E.Yz7({token:c,factory:c.\u0275fac}),c})();function vi(c){return"imperative"!==c}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let To=(()=>{class c{constructor(a,p,v,w,R){this.router=a,this.route=p,this.tabIndexAttribute=v,this.renderer=w,this.el=R,this.commands=null,this.onChanges=new Ue.x,this.setTabIndexIfNotOnNativeEl("0")}setTabIndexIfNotOnNativeEl(a){if(null!=this.tabIndexAttribute)return;const p=this.renderer,v=this.el.nativeElement;null!==a?p.setAttribute(v,"tabindex",a):p.removeAttribute(v,"tabindex")}ngOnChanges(a){this.onChanges.next(this)}set routerLink(a){null!=a?(this.commands=Array.isArray(a)?a:[a],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(){if(null===this.urlTree)return!0;const a={skipLocationChange:(0,E.D6c)(this.skipLocationChange),replaceUrl:(0,E.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,a),!0}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,E.D6c)(this.preserveFragment)})}}return c.\u0275fac=function(a){return new(a||c)(E.Y36(In),E.Y36(rn),E.$8M("tabindex"),E.Y36(E.Qsj),E.Y36(E.SBq))},c.\u0275dir=E.lG2({type:c,selectors:[["","routerLink","",5,"a",5,"area"]],hostBindings:function(a,p){1&a&&E.NdJ("click",function(){return p.onClick()})},inputs:{queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[E.TTD]}),c})(),Qi=(()=>{class c{constructor(a,p,v){this.router=a,this.route=p,this.locationStrategy=v,this.commands=null,this.href=null,this.onChanges=new Ue.x,this.subscription=a.events.subscribe(w=>{w instanceof Ft&&this.updateTargetUrlAndHref()})}set routerLink(a){this.commands=null!=a?Array.isArray(a)?a:[a]:null}ngOnChanges(a){this.updateTargetUrlAndHref(),this.onChanges.next(this)}ngOnDestroy(){this.subscription.unsubscribe()}onClick(a,p,v,w,R){if(0!==a||p||v||w||R||"string"==typeof this.target&&"_self"!=this.target||null===this.urlTree)return!0;const B={skipLocationChange:(0,E.D6c)(this.skipLocationChange),replaceUrl:(0,E.D6c)(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,B),!1}updateTargetUrlAndHref(){this.href=null!==this.urlTree?this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:(0,E.D6c)(this.preserveFragment)})}}return c.\u0275fac=function(a){return new(a||c)(E.Y36(In),E.Y36(rn),E.Y36(m.S$))},c.\u0275dir=E.lG2({type:c,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(a,p){1&a&&E.NdJ("click",function(w){return p.onClick(w.button,w.ctrlKey,w.shiftKey,w.altKey,w.metaKey)}),2&a&&E.uIk("target",p.target)("href",p.href,E.LSH)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state",relativeTo:"relativeTo",routerLink:"routerLink"},features:[E.TTD]}),c})(),Ji=(()=>{class c{constructor(a,p,v,w,R,B){this.router=a,this.element=p,this.renderer=v,this.cdr=w,this.link=R,this.linkWithHref=B,this.classes=[],this.isActive=!1,this.routerLinkActiveOptions={exact:!1},this.isActiveChange=new E.vpe,this.routerEventsSubscription=a.events.subscribe(me=>{me instanceof Ft&&this.update()})}ngAfterContentInit(){(0,X.of)(this.links.changes,this.linksWithHrefs.changes,(0,X.of)(null)).pipe((0,Nt.J)()).subscribe(a=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();const a=[...this.links.toArray(),...this.linksWithHrefs.toArray(),this.link,this.linkWithHref].filter(p=>!!p).map(p=>p.onChanges);this.linkInputChangesSubscription=(0,pe.D)(a).pipe((0,Nt.J)()).subscribe(p=>{this.isActive!==this.isLinkActive(this.router)(p)&&this.update()})}set routerLinkActive(a){const p=Array.isArray(a)?a:a.split(" ");this.classes=p.filter(v=>!!v)}ngOnChanges(a){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.linksWithHrefs||!this.router.navigated||Promise.resolve().then(()=>{const a=this.hasActiveLinks();this.isActive!==a&&(this.isActive=a,this.cdr.markForCheck(),this.classes.forEach(p=>{a?this.renderer.addClass(this.element.nativeElement,p):this.renderer.removeClass(this.element.nativeElement,p)}),a&&void 0!==this.ariaCurrentWhenActive?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this.isActiveChange.emit(a))})}isLinkActive(a){const p=function eo(c){return!!c.paths}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return v=>!!v.urlTree&&a.isActive(v.urlTree,p)}hasActiveLinks(){const a=this.isLinkActive(this.router);return this.link&&a(this.link)||this.linkWithHref&&a(this.linkWithHref)||this.links.some(a)||this.linksWithHrefs.some(a)}}return c.\u0275fac=function(a){return new(a||c)(E.Y36(In),E.Y36(E.SBq),E.Y36(E.Qsj),E.Y36(E.sBO),E.Y36(To,8),E.Y36(Qi,8))},c.\u0275dir=E.lG2({type:c,selectors:[["","routerLinkActive",""]],contentQueries:function(a,p,v){if(1&a&&(E.Suo(v,To,5),E.Suo(v,Qi,5)),2&a){let w;E.iGM(w=E.CRH())&&(p.links=w),E.iGM(w=E.CRH())&&(p.linksWithHrefs=w)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[E.TTD]}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Qs{buildTitle(u){let a,p=u.root;for(;void 0!==p;)a=this.getResolvedTitleForRoute(p)??a,p=p.children.find(v=>v.outlet===et);return a}getResolvedTitleForRoute(u){return u.data[Mo]}}let lr=(()=>{class c extends Qs{constructor(a){super(),this.title=a}updateTitle(a){const p=this.buildTitle(a);void 0!==p&&this.title.setTitle(p)}}return c.\u0275fac=function(a){return new(a||c)(E.LFG(Et.Dx))},c.\u0275prov=E.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class yi{}let Ao=(()=>{class c{constructor(a,p,v,w,R){this.router=a,this.injector=v,this.preloadingStrategy=w,this.loader=R}setUpPreloading(){this.subscription=this.router.events.pipe((0,Me.h)(a=>a instanceof Ft),(0,vt.b)(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,p){const v=[];for(const w of p){w.providers&&!w._injector&&(w._injector=(0,E.MMx)(w.providers,a,`Route: ${w.path}`));const R=w._injector??a,B=w._loadedInjector??R;w.loadChildren&&!w._loadedRoutes||w.loadComponent&&!w._loadedComponent?v.push(this.preloadConfig(R,w)):(w.children||w._loadedRoutes)&&v.push(this.processRoutes(B,w.children??w._loadedRoutes))}return(0,pe.D)(v).pipe((0,Nt.J)())}preloadConfig(a,p){return this.preloadingStrategy.preload(p,()=>{let v;v=p.loadChildren&&void 0===p.canLoad?this.loader.loadChildren(a,p):(0,X.of)(null);const w=v.pipe((0,xe.z)(R=>null===R?(0,X.of)(void 0):(p._loadedRoutes=R.routes,p._loadedInjector=R.injector,this.processRoutes(R.injector??a,R.routes))));if(p.loadComponent&&!p._loadedComponent){const R=this.loader.loadComponent(p);return(0,pe.D)([w,R]).pipe((0,Nt.J)())}return w})}}return c.\u0275fac=function(a){return new(a||c)(E.LFG(In),E.LFG(E.Sil),E.LFG(E.lqb),E.LFG(yi),E.LFG(Ys))},c.\u0275prov=E.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const to=new E.OlP("");let Di=(()=>{class c{constructor(a,p,v={}){this.router=a,this.viewportScroller=p,this.options=v,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},v.scrollPositionRestoration=v.scrollPositionRestoration||"disabled",v.anchorScrolling=v.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof un?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof Ft&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof ir&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,p){this.router.triggerEvent(new ir(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,p))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return c.\u0275fac=function(a){E.$Z()},c.\u0275prov=E.Yz7({token:c,factory:c.\u0275fac}),c})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ei=new E.OlP("ROUTER_CONFIGURATION",{providedIn:"root",factory:()=>({})}),es=new E.OlP("ROUTER_FORROOT_GUARD"),ts=new E.OlP(""),Ga=[m.Ye,{provide:H,useClass:L},{provide:In,useFactory:function na(c,u,a,p,v,w,R={},B,me,He,qe){const We=new In(null,c,u,a,p,v,xn(w));return He&&(We.urlHandlingStrategy=He),qe&&(We.routeReuseStrategy=qe),We.titleStrategy=me??B,function ns(c,u){c.errorHandler&&(u.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(u.malformedUriErrorHandler=c.malformedUriErrorHandler),c.onSameUrlNavigation&&(u.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.relativeLinkResolution&&(u.relativeLinkResolution=c.relativeLinkResolution),c.urlUpdateStrategy&&(u.urlUpdateStrategy=c.urlUpdateStrategy),c.canceledNavigationResolution&&(u.canceledNavigationResolution=c.canceledNavigationResolution)}(R,We),We},deps:[H,Fr,m.Ye,E.zs3,E.Sil,Ks,Ei,lr,[Qs,new E.FiY],[class Qo{},new E.FiY],[class Io{},new E.FiY]]},Fr,{provide:rn,useFactory:function Ka(c){return c.routerState.root},deps:[In]},Ys];function Ci(){return new E.PXZ("Router",In)}let ti=(()=>{class c{constructor(a,p){}static forRoot(a,p){return{ngModule:c,providers:[Ga,[],ta(a),{provide:es,useFactory:So,deps:[[In,new E.FiY,new E.tp0]]},{provide:Ei,useValue:p||{}},p?.useHash?{provide:m.S$,useClass:m.Do}:{provide:m.S$,useClass:m.b0},{provide:to,useFactory:()=>{const c=(0,E.f3M)(In),u=(0,E.f3M)(m.EM),a=(0,E.f3M)(Ei);return a.scrollOffset&&u.setOffset(a.scrollOffset),new Di(c,u,a)}},p?.preloadingStrategy?oa(p.preloadingStrategy):[],{provide:E.PXZ,multi:!0,useFactory:Ci},p?.initialNavigation?Oo(p):[],[{provide:Mi,useFactory:ra},{provide:E.tb,multi:!0,useExisting:Mi}]]}}static forChild(a){return{ngModule:c,providers:[ta(a)]}}}return c.\u0275fac=function(a){return new(a||c)(E.LFG(es,8),E.LFG(In,8))},c.\u0275mod=E.oAB({type:c}),c.\u0275inj=E.cJS({}),c})();function So(c){return"guarded"}function ta(c){return[{provide:E.deG,multi:!0,useValue:c},{provide:Ks,multi:!0,useValue:c}]}function ra(){const c=(0,E.f3M)(E.zs3);return u=>{const a=c.get(E.z2F);if(u!==a.components[0])return;const p=c.get(In),v=c.get(Ur);null===c.get(Ro,null,E.XFs.Optional)&&p.initialNavigation(),c.get(ts,null,E.XFs.Optional)?.setUpPreloading(),c.get(to,null,E.XFs.Optional)?.init(),p.resetRootComponentType(a.componentTypes[0]),v.next(),v.complete()}}const Mi=new E.OlP("");function Oo(c){return["disabled"===c.initialNavigation?[{provide:E.ip1,multi:!0,useFactory:()=>{const c=(0,E.f3M)(In);return()=>{c.setUpLocationChangeListener()}}},{provide:Ro,useValue:"disabled"}]:[],"enabledBlocking"===c.initialNavigation?[{provide:Ro,useValue:"enabledBlocking"},{provide:E.ip1,multi:!0,deps:[E.zs3],useFactory:c=>{const u=c.get(m.V_,Promise.resolve(null));let a=!1;return()=>u.then(()=>new Promise(v=>{const w=c.get(In),R=c.get(Ur);(function p(v){const w=c.get(In);w.events.pipe((0,Me.h)(R=>R instanceof Ft||R instanceof _n||R instanceof Qn),(0,re.U)(R=>{if(R instanceof Ft)return!0;const B=w.navigationId!==R.id,me=R instanceof _n&&-1!==R.reason.indexOf(gt);return!(!B&&!me)&&null}),(0,Me.h)(R=>null!==R),(0,oe.q)(1)).subscribe(()=>{v()})})(()=>{v(!0),a=!0}),w.afterPreactivation=()=>(v(!0),a||R.closed?(0,X.of)(void 0):R),w.initialNavigation()}))}}]:[]]}const Ur=new E.OlP("",{factory:()=>new Ue.x}),Ro=new E.OlP("");function oa(c){return[Ao,{provide:ts,useExisting:Ao},{provide:yi,useExisting:c}]}
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
     */,2655:(z,N,D)=>{D.d(N,{sQ:()=>xn});var m=D(2997),E=D(6451),Y=D(8306),J=D(7579),F=D(4482),W=D(5403),V=D(5032),k=D(515),ee=D(9646),K=D(2843),q=D(576);class X{constructor(Ce,ye,Le){this.kind=Ce,this.value=ye,this.error=Le,this.hasValue="N"===Ce}observe(Ce){return ue(this,Ce)}do(Ce,ye,Le){const{kind:it,value:st,error:Tt}=this;return"N"===it?Ce?.(st):"E"===it?ye?.(Tt):Le?.()}accept(Ce,ye,Le){var it;return(0,q.m)(null===(it=Ce)||void 0===it?void 0:it.next)?this.observe(Ce):this.do(Ce,ye,Le)}toObservable(){const{kind:Ce,value:ye,error:Le}=this,it="N"===Ce?(0,ee.of)(ye):"E"===Ce?(0,K._)(()=>Le):"C"===Ce?k.E:0;if(!it)throw new TypeError(`Unexpected notification kind ${Ce}`);return it}static createNext(Ce){return new X("N",Ce)}static createError(Ce){return new X("E",void 0,Ce)}static createComplete(){return X.completeNotification}}function ue(se,Ce){var ye,Le,it;const{kind:st,value:Tt,error:qt}=se;if("string"!=typeof st)throw new TypeError('Invalid notification, missing "kind"');"N"===st?null===(ye=Ce.next)||void 0===ye||ye.call(Ce,Tt):"E"===st?null===(Le=Ce.error)||void 0===Le||Le.call(Ce,qt):null===(it=Ce.complete)||void 0===it||it.call(Ce)}X.completeNotification=new X("C");var he=D(8421);function Ie(se,Ce,ye,Le){return(0,F.e)((it,st)=>{let Tt;Ce&&"function"!=typeof Ce?({duration:ye,element:Tt,connector:Le}=Ce):Tt=Ce;const qt=new Map,dn=Te=>{qt.forEach(Te),Te(st)},at=Te=>dn(Ze=>Ze.error(Te));let It=0,Ye=!1;const bt=new W.Q(st,Te=>{try{const Ze=se(Te);let H=qt.get(Ze);if(!H){qt.set(Ze,H=Le?Le():new J.x);const L=function Ut(Te,Ze){const H=new Y.y(L=>{It++;const O=Ze.subscribe(L);return()=>{O.unsubscribe(),0==--It&&Ye&&bt.unsubscribe()}});return H.key=Te,H}(Ze,H);if(st.next(L),ye){const O=(0,W.x)(H,()=>{H.complete(),O?.unsubscribe()},void 0,void 0,()=>qt.delete(Ze));bt.add((0,he.Xf)(ye(L)).subscribe(O))}}H.next(Tt?Tt(Te):Te)}catch(Ze){at(Ze)}},()=>dn(Te=>Te.complete()),at,()=>qt.clear(),()=>(Ye=!0,0===It));it.subscribe(bt)})}var Be=D(4004);function Ue(se,Ce){return Ce?ye=>ye.pipe(Ue((Le,it)=>(0,he.Xf)(se(Le,it)).pipe((0,Be.U)((st,Tt)=>Ce(Le,st,it,Tt))))):(0,F.e)((ye,Le)=>{let it=0,st=null,Tt=!1;ye.subscribe((0,W.x)(Le,qt=>{st||(st=(0,W.x)(Le,void 0,()=>{st=null,Tt&&Le.complete()}),(0,he.Xf)(se(qt,it++)).subscribe(st))},()=>{Tt=!0,!st&&Le.complete()}))})}var De=D(262),Pe=D(5577),$e=D(9300),Ke=D(5698),Re=D(4650);const oe="__@ngrx/effects_create__";function re(se){return Object.getOwnPropertyNames(se).filter(Le=>!(!se[Le]||!se[Le].hasOwnProperty(oe))&&se[Le][oe].hasOwnProperty("dispatch")).map(Le=>({propertyName:Le,...se[Le][oe]}))}function ge(se){return Object.getPrototypeOf(se)}const ce="__@ngrx/effects__";function ct(se){return(0,m.qC)(xe,ge)(se)}function xe(se){return function _t(se){return se.constructor.hasOwnProperty(ce)}(se)?se.constructor[ce]:[]}function Nt(se,Ce,ye){const Le=ge(se).constructor.name,it=function an(se){return[ct,re].reduce((ye,Le)=>ye.concat(Le(se)),[])}(se).map(({propertyName:st,dispatch:Tt,useEffectsErrorHandler:qt})=>{const dn="function"==typeof se[st]?se[st]():se[st],at=qt?ye(dn,Ce):dn;return!1===Tt?at.pipe(function $(){return(0,F.e)((se,Ce)=>{se.subscribe((0,W.x)(Ce,V.Z))})}()):at.pipe(function we(){return(0,F.e)((se,Ce)=>{se.subscribe((0,W.x)(Ce,ye=>{Ce.next(X.createNext(ye))},()=>{Ce.next(X.createComplete()),Ce.complete()},ye=>{Ce.next(X.createError(ye)),Ce.complete()}))})}()).pipe((0,Be.U)(Ye=>({effect:se[st],notification:Ye,propertyName:st,sourceName:Le,sourceInstance:se})))});return(0,E.T)(...it)}function Ht(se,Ce,ye=10){return se.pipe((0,De.K)(Le=>(Ce&&Ce.handleError(Le),ye<=1?se:Ht(se,Ce,ye-1))))}let un=(()=>{class se extends Y.y{constructor(ye){super(),ye&&(this.source=ye)}lift(ye){const Le=new se;return Le.source=this,Le.operator=ye,Le}}return se.\u0275fac=function(ye){return new(ye||se)(Re.LFG(m.Y$))},se.\u0275prov=Re.Yz7({token:se,factory:se.\u0275fac}),se})();function Jn(se){return Qt(se,"ngrxOnInitEffects")}function Qt(se,Ce){return se&&Ce in se&&"function"==typeof se[Ce]}const Gt=new Re.OlP("@ngrx/effects Internal Root Guard"),On=new Re.OlP("@ngrx/effects User Provided Effects"),ir=new Re.OlP("@ngrx/effects Internal Root Effects"),cn=new Re.OlP("@ngrx/effects Root Effects"),et=new Re.OlP("@ngrx/effects Internal Feature Effects"),wn=new Re.OlP("@ngrx/effects Feature Effects"),Rn=new Re.OlP("@ngrx/effects Effects Error Handler");let gt=(()=>{class se extends J.x{constructor(ye,Le){super(),this.errorHandler=ye,this.effectsErrorHandler=Le}addEffects(ye){this.next(ye)}toActions(){return this.pipe(Ie(ge),(0,Pe.z)(ye=>ye.pipe(Ie(ke))),(0,Pe.z)(ye=>{const Le=ye.pipe(Ue(st=>function lt(se,Ce){return ye=>{const Le=Nt(ye,se,Ce);return function hr(se){return Qt(se,"ngrxOnRunEffects")}(ye)?ye.ngrxOnRunEffects(Le):Le}}(this.errorHandler,this.effectsErrorHandler)(st)),(0,Be.U)(st=>(function _n(se,Ce){if("N"===se.notification.kind){const ye=se.notification.value;!function Qn(se){return"function"!=typeof se&&se&&se.type&&"string"==typeof se.type}(ye)&&Ce.handleError(new Error(`Effect ${function xr({propertyName:se,sourceInstance:Ce,sourceName:ye}){const Le="function"==typeof Ce[se];return`"${ye}.${String(se)}${Le?"()":""}"`}(se)} dispatched an invalid action: ${function Ir(se){try{return JSON.stringify(se)}catch{return se}}(ye)}`))}}(st,this.errorHandler),st.notification)),(0,$e.h)(st=>"N"===st.kind&&null!=st.value),function Me(){return(0,F.e)((se,Ce)=>{se.subscribe((0,W.x)(Ce,ye=>ue(ye,Ce)))})}()),it=ye.pipe((0,Ke.q)(1),(0,$e.h)(Jn),(0,Be.U)(st=>st.ngrxOnInitEffects()));return(0,E.T)(Le,it)}))}}return se.\u0275fac=function(ye){return new(ye||se)(Re.LFG(Re.qLn),Re.LFG(Rn))},se.\u0275prov=Re.Yz7({token:se,factory:se.\u0275fac}),se})();function ke(se){return function Wn(se){return Qt(se,"ngrxOnIdentifyEffects")}(se)?se.ngrxOnIdentifyEffects():""}let br=(()=>{class se{constructor(ye,Le){this.effectSources=ye,this.store=Le,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}}return se.\u0275fac=function(ye){return new(ye||se)(Re.LFG(gt),Re.LFG(m.yh))},se.\u0275prov=Re.Yz7({token:se,factory:se.\u0275fac}),se})();const en="@ngrx/effects/init";(0,m.PH)(en);let Vt=(()=>{class se{constructor(ye,Le,it,st,Tt,qt,dn){this.sources=ye,Le.start(),st.forEach(at=>ye.addEffects(at)),it.dispatch({type:en})}addEffects(ye){this.sources.addEffects(ye)}}return se.\u0275fac=function(ye){return new(ye||se)(Re.LFG(gt),Re.LFG(br),Re.LFG(m.yh),Re.LFG(cn),Re.LFG(m.cr,8),Re.LFG(m.CK,8),Re.LFG(Gt,8))},se.\u0275mod=Re.oAB({type:se}),se.\u0275inj=Re.cJS({}),se})(),Yt=(()=>{class se{constructor(ye,Le,it,st){Le.forEach(Tt=>Tt.forEach(qt=>ye.addEffects(qt)))}}return se.\u0275fac=function(ye){return new(ye||se)(Re.LFG(Vt),Re.LFG(wn),Re.LFG(m.cr,8),Re.LFG(m.CK,8))},se.\u0275mod=Re.oAB({type:se}),se.\u0275inj=Re.cJS({}),se})(),xn=(()=>{class se{static forFeature(ye=[]){return{ngModule:Yt,providers:[ye,{provide:et,multi:!0,useValue:ye},{provide:On,multi:!0,useValue:[]},{provide:wn,multi:!0,useFactory:Mt,deps:[Re.zs3,et,On]}]}}static forRoot(ye=[]){return{ngModule:Vt,providers:[{provide:Rn,useValue:Ht},br,gt,un,ye,{provide:ir,useValue:[ye]},{provide:Gt,useFactory:rt,deps:[[br,new Re.FiY,new Re.tp0],[ir,new Re.PiD]]},{provide:On,multi:!0,useValue:[]},{provide:cn,useFactory:Mt,deps:[Re.zs3,ir,On]}]}}}return se.\u0275fac=function(ye){return new(ye||se)},se.\u0275mod=Re.oAB({type:se}),se.\u0275inj=Re.cJS({}),se})();function Mt(se,Ce,ye){const Le=[];for(const it of Ce)Le.push(...it);for(const it of ye)Le.push(...it);return function Tn(se,Ce){return Ce.map(ye=>se.get(ye))}(se,Le)}function rt(se,Ce){if((1!==Ce.length||0!==Ce[0].length)&&se)throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead.");return"guarded"}},825:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FT:()=>StoreDevtoolsModule});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4650),_ngrx_store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2997),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(515),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8306),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9646),rxjs__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(6451),rxjs__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(233),rxjs__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(4707),rxjs_operators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3099),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9300),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4004),rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4351),rxjs_operators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1749),rxjs_operators__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(8372),rxjs_operators__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(262),rxjs_operators__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(5698),rxjs_operators__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2722),rxjs_operators__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3900),rxjs_operators__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(5684),rxjs_operators__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(5363),rxjs_operators__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(1365),rxjs_operators__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(5026);class StoreDevtoolsConfig{constructor(){this.maxAge=!1}}const STORE_DEVTOOLS_CONFIG=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Options"),INITIAL_OPTIONS=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Initial Config");function noMonitor(){return null}const DEFAULT_NAME="NgRx Store DevTools";function createConfig(z){const N={maxAge:!1,monitor:noMonitor,actionSanitizer:void 0,stateSanitizer:void 0,name:DEFAULT_NAME,serialize:!1,logOnly:!1,autoPause:!1,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0}},D="function"==typeof z?z():z,Y=Object.assign({},N,{features:D.features||!!D.logOnly&&{pause:!0,export:!0,test:!0}||N.features},D);if(Y.maxAge&&Y.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${Y.maxAge}`);return Y}const PERFORM_ACTION="PERFORM_ACTION",REFRESH="REFRESH",RESET="RESET",ROLLBACK="ROLLBACK",COMMIT="COMMIT",SWEEP="SWEEP",TOGGLE_ACTION="TOGGLE_ACTION",SET_ACTIONS_ACTIVE="SET_ACTIONS_ACTIVE",JUMP_TO_STATE="JUMP_TO_STATE",JUMP_TO_ACTION="JUMP_TO_ACTION",IMPORT_STATE="IMPORT_STATE",LOCK_CHANGES="LOCK_CHANGES",PAUSE_RECORDING="PAUSE_RECORDING";class PerformAction{constructor(N,D){if(this.action=N,this.timestamp=D,this.type=PERFORM_ACTION,typeof N.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}}class Refresh{constructor(){this.type=REFRESH}}class Reset{constructor(N){this.timestamp=N,this.type=RESET}}class Rollback{constructor(N){this.timestamp=N,this.type=ROLLBACK}}class Commit{constructor(N){this.timestamp=N,this.type=COMMIT}}class Sweep{constructor(){this.type=SWEEP}}class ToggleAction{constructor(N){this.id=N,this.type=TOGGLE_ACTION}}class SetActionsActive{constructor(N,D,m=!0){this.start=N,this.end=D,this.active=m,this.type=SET_ACTIONS_ACTIVE}}class JumpToState{constructor(N){this.index=N,this.type=JUMP_TO_STATE}}class JumpToAction{constructor(N){this.actionId=N,this.type=JUMP_TO_ACTION}}class ImportState{constructor(N){this.nextLiftedState=N,this.type=IMPORT_STATE}}class LockChanges{constructor(N){this.status=N,this.type=LOCK_CHANGES}}class PauseRecording{constructor(N){this.status=N,this.type=PAUSE_RECORDING}}function difference(z,N){return z.filter(D=>N.indexOf(D)<0)}function unliftState(z){const{computedStates:N,currentStateIndex:D}=z;if(D>=N.length){const{state:E}=N[N.length-1];return E}const{state:m}=N[D];return m}function unliftAction(z){return z.actionsById[z.nextActionId-1]}function liftAction(z){return new PerformAction(z,+Date.now())}function sanitizeActions(z,N){return Object.keys(N).reduce((D,m)=>{const E=Number(m);return D[E]=sanitizeAction(z,N[E],E),D},{})}function sanitizeAction(z,N,D){return{...N,action:z(N.action,D)}}function sanitizeStates(z,N){return N.map((D,m)=>({state:sanitizeState(z,D.state,m),error:D.error}))}function sanitizeState(z,N,D){return z(N,D)}function shouldFilterActions(z){return z.predicate||z.actionsSafelist||z.actionsBlocklist}function filterLiftedState(z,N,D,m){const E=[],Y={},J=[];return z.stagedActionIds.forEach((F,W)=>{const V=z.actionsById[F];!V||W&&isActionFiltered(z.computedStates[W],V,N,D,m)||(Y[F]=V,E.push(F),J.push(z.computedStates[W]))}),{...z,stagedActionIds:E,actionsById:Y,computedStates:J}}function isActionFiltered(z,N,D,m,E){const Y=D&&!D(z,N.action),J=m&&!N.action.type.match(m.map(W=>escapeRegExp(W)).join("|")),F=E&&N.action.type.match(E.map(W=>escapeRegExp(W)).join("|"));return Y||J||F}function escapeRegExp(z){return z.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const INIT_ACTION={type:_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg},RECOMPUTE="@ngrx/store-devtools/recompute",RECOMPUTE_ACTION={type:RECOMPUTE};function computeNextEntry(z,N,D,m,E){if(m)return{state:D,error:"Interrupted by an error up the chain"};let J,Y=D;try{Y=z(D,N)}catch(F){J=F.toString(),E.handleError(F)}return{state:Y,error:J}}function recomputeStates(z,N,D,m,E,Y,J,F,W){if(N>=z.length&&z.length===Y.length)return z;const V=z.slice(0,N),$=Y.length-(W?1:0);for(let k=N;k<$;k++){const ee=Y[k],K=E[ee].action,q=V[k-1],pe=q?q.state:m,X=q?q.error:void 0,we=J.indexOf(ee)>-1?q:computeNextEntry(D,K,pe,X,F);V.push(we)}return W&&V.push(z[z.length-1]),V}function liftInitialState(z,N){return{monitorState:N(void 0,{}),nextActionId:1,actionsById:{0:liftAction(INIT_ACTION)},stagedActionIds:[0],skippedActionIds:[],committedState:z,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function liftReducerWith(z,N,D,m,E={}){return Y=>(J,F)=>{let{monitorState:W,actionsById:V,nextActionId:$,stagedActionIds:k,skippedActionIds:ee,committedState:K,currentStateIndex:q,computedStates:pe,isLocked:X,isPaused:ue}=J||N;function we(Be){let Ue=Be,Me=k.slice(1,Ue+1);for(let De=0;De<Me.length;De++){if(pe[De+1].error){Ue=De,Me=k.slice(1,Ue+1);break}delete V[Me[De]]}ee=ee.filter(De=>-1===Me.indexOf(De)),k=[0,...k.slice(Ue+1)],K=pe[Ue].state,pe=pe.slice(Ue),q=q>Ue?q-Ue:0}function he(){V={0:liftAction(INIT_ACTION)},$=1,k=[0],ee=[],K=pe[q].state,q=0,pe=[]}J||(V=Object.create(V));let Ie=0;switch(F.type){case LOCK_CHANGES:X=F.status,Ie=1/0;break;case PAUSE_RECORDING:ue=F.status,ue?(k=[...k,$],V[$]=new PerformAction({type:"@ngrx/devtools/pause"},+Date.now()),$++,Ie=k.length-1,pe=pe.concat(pe[pe.length-1]),q===k.length-2&&q++,Ie=1/0):he();break;case RESET:V={0:liftAction(INIT_ACTION)},$=1,k=[0],ee=[],K=z,q=0,pe=[];break;case COMMIT:he();break;case ROLLBACK:V={0:liftAction(INIT_ACTION)},$=1,k=[0],ee=[],q=0,pe=[];break;case TOGGLE_ACTION:{const{id:Be}=F;ee=-1===ee.indexOf(Be)?[Be,...ee]:ee.filter(Me=>Me!==Be),Ie=k.indexOf(Be);break}case SET_ACTIONS_ACTIVE:{const{start:Be,end:Ue,active:Me}=F,De=[];for(let Pe=Be;Pe<Ue;Pe++)De.push(Pe);ee=Me?difference(ee,De):[...ee,...De],Ie=k.indexOf(Be);break}case JUMP_TO_STATE:q=F.index,Ie=1/0;break;case JUMP_TO_ACTION:{const Be=k.indexOf(F.actionId);-1!==Be&&(q=Be),Ie=1/0;break}case SWEEP:k=difference(k,ee),ee=[],q=Math.min(q,k.length-1);break;case PERFORM_ACTION:{if(X)return J||N;if(ue||J&&isActionFiltered(J.computedStates[q],F,E.predicate,E.actionsSafelist,E.actionsBlocklist)){const Ue=pe[pe.length-1];pe=[...pe.slice(0,-1),computeNextEntry(Y,F.action,Ue.state,Ue.error,D)],Ie=1/0;break}E.maxAge&&k.length===E.maxAge&&we(1),q===k.length-1&&q++;const Be=$++;V[Be]=F,k=[...k,Be],Ie=k.length-1;break}case IMPORT_STATE:({monitorState:W,actionsById:V,nextActionId:$,stagedActionIds:k,skippedActionIds:ee,committedState:K,currentStateIndex:q,computedStates:pe,isLocked:X,isPaused:ue}=F.nextLiftedState);break;case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:Ie=0,E.maxAge&&k.length>E.maxAge&&(pe=recomputeStates(pe,Ie,Y,K,V,k,ee,D,ue),we(k.length-E.maxAge),Ie=1/0);break;case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:if(pe.filter(Ue=>Ue.error).length>0)Ie=0,E.maxAge&&k.length>E.maxAge&&(pe=recomputeStates(pe,Ie,Y,K,V,k,ee,D,ue),we(k.length-E.maxAge),Ie=1/0);else{if(!ue&&!X){q===k.length-1&&q++;const Ue=$++;V[Ue]=new PerformAction(F,+Date.now()),k=[...k,Ue],Ie=k.length-1,pe=recomputeStates(pe,Ie,Y,K,V,k,ee,D,ue)}pe=pe.map(Ue=>({...Ue,state:Y(Ue.state,RECOMPUTE_ACTION)})),q=k.length-1,E.maxAge&&k.length>E.maxAge&&we(k.length-E.maxAge),Ie=1/0}break;default:Ie=1/0}return pe=recomputeStates(pe,Ie,Y,K,V,k,ee,D,ue),W=m(W,F),{monitorState:W,actionsById:V,nextActionId:$,stagedActionIds:k,skippedActionIds:ee,committedState:K,currentStateIndex:q,computedStates:pe,isLocked:X,isPaused:ue}}}let DevtoolsDispatcher=(()=>{class z extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO{}return z.\u0275fac=function(){let N;return function(m){return(N||(N=_angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(z)))(m||z)}}(),z.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:z,factory:z.\u0275fac}),z})();const ExtensionActionTypes={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},REDUX_DEVTOOLS_EXTENSION=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Redux Devtools Extension");let DevtoolsExtension=(()=>{class DevtoolsExtension{constructor(z,N,D){this.config=N,this.dispatcher=D,this.devtoolsExtension=z,this.createActionStreams()}notify(z,N){if(this.devtoolsExtension)if(z.type===PERFORM_ACTION){if(N.isLocked||N.isPaused)return;const D=unliftState(N);if(shouldFilterActions(this.config)&&isActionFiltered(D,z,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;const m=this.config.stateSanitizer?sanitizeState(this.config.stateSanitizer,D,N.currentStateIndex):D,E=this.config.actionSanitizer?sanitizeAction(this.config.actionSanitizer,z,N.nextActionId):z;this.sendToReduxDevtools(()=>this.extensionConnection.send(E,m))}else{const D={...N,stagedActionIds:N.stagedActionIds,actionsById:this.config.actionSanitizer?sanitizeActions(this.config.actionSanitizer,N.actionsById):N.actionsById,computedStates:this.config.stateSanitizer?sanitizeStates(this.config.stateSanitizer,N.computedStates):N.computedStates};this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,D,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new rxjs__WEBPACK_IMPORTED_MODULE_3__.y(z=>{const N=this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=N,N.init(),N.subscribe(D=>z.next(D)),N.unsubscribe}):rxjs__WEBPACK_IMPORTED_MODULE_2__.E}createActionStreams(){const z=this.createChangesObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()),N=z.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(F=>F.type===ExtensionActionTypes.START)),D=z.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(F=>F.type===ExtensionActionTypes.STOP)),m=z.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(F=>F.type===ExtensionActionTypes.DISPATCH),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(F=>this.unwrapAction(F.payload)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)(F=>F.type===IMPORT_STATE?this.dispatcher.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(W=>W.type===_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(1e3),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(1e3),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(()=>F),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(()=>(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(F)),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)):(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(F))),Y=z.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(F=>F.type===ExtensionActionTypes.ACTION),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(F=>this.unwrapAction(F.payload))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(D)),J=m.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(D));this.start$=N.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(D)),this.actions$=this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(()=>Y)),this.liftedActions$=this.start$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(()=>J))}unwrapAction(action){return"string"==typeof action?eval(`(${action})`):action}getExtensionConfig(z){const N={name:z.name,features:z.features,serialize:z.serialize,autoPause:z.autoPause??!1};return!1!==z.maxAge&&(N.maxAge=z.maxAge),N}sendToReduxDevtools(z){try{z()}catch(N){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",N)}}}return DevtoolsExtension.\u0275fac=function z(N){return new(N||DevtoolsExtension)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(REDUX_DEVTOOLS_EXTENSION),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher))},DevtoolsExtension.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:DevtoolsExtension,factory:DevtoolsExtension.\u0275fac}),DevtoolsExtension})(),StoreDevtools=(()=>{class z{constructor(D,m,E,Y,J,F,W,V){const $=liftInitialState(W,V.monitor),k=liftReducerWith(W,$,F,V.monitor,V),ee=(0,rxjs__WEBPACK_IMPORTED_MODULE_15__.T)((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(m.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)),Y.actions$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(liftAction)),D,Y.liftedActions$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.Q)(rxjs__WEBPACK_IMPORTED_MODULE_18__.N)),K=E.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(k)),q=new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),pe=ee.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(K),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(({state:he},[Ie,Be])=>{let Ue=Be(he,Ie);return Ie.type!==PERFORM_ACTION&&shouldFilterActions(V)&&(Ue=filterLiftedState(Ue,V.predicate,V.actionsSafelist,V.actionsBlocklist)),Y.notify(Ie,Ue),{state:Ue,action:Ie}},{state:$,action:null})).subscribe(({state:he,action:Ie})=>{q.next(he),Ie.type===PERFORM_ACTION&&J.next(Ie.action)}),X=Y.start$.subscribe(()=>{this.refresh()}),ue=q.asObservable(),we=ue.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(unliftState));this.extensionStartSubscription=X,this.stateSubscription=pe,this.dispatcher=D,this.liftedState=ue,this.state=we}dispatch(D){this.dispatcher.next(D)}next(D){this.dispatcher.next(D)}error(D){}complete(){}performAction(D){this.dispatch(new PerformAction(D,+Date.now()))}refresh(){this.dispatch(new Refresh)}reset(){this.dispatch(new Reset(+Date.now()))}rollback(){this.dispatch(new Rollback(+Date.now()))}commit(){this.dispatch(new Commit(+Date.now()))}sweep(){this.dispatch(new Sweep)}toggleAction(D){this.dispatch(new ToggleAction(D))}jumpToAction(D){this.dispatch(new JumpToAction(D))}jumpToState(D){this.dispatch(new JumpToState(D))}importState(D){this.dispatch(new ImportState(D))}lockChanges(D){this.dispatch(new LockChanges(D))}pauseRecording(D){this.dispatch(new PauseRecording(D))}}return z.\u0275fac=function(D){return new(D||z)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsDispatcher),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(DevtoolsExtension),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(STORE_DEVTOOLS_CONFIG))},z.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({token:z,factory:z.\u0275fac}),z})();const IS_EXTENSION_OR_MONITOR_PRESENT=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function createIsExtensionOrMonitorPresent(z,N){return Boolean(z)||N.monitor!==noMonitor}function createReduxDevtoolsExtension(){const z="__REDUX_DEVTOOLS_EXTENSION__";return"object"==typeof window&&typeof window[z]<"u"?window[z]:null}function createStateObservable(z){return z.state}let StoreDevtoolsModule=(()=>{class z{static instrument(D={}){return{ngModule:z,providers:[DevtoolsExtension,DevtoolsDispatcher,StoreDevtools,{provide:INITIAL_OPTIONS,useValue:D},{provide:IS_EXTENSION_OR_MONITOR_PRESENT,deps:[REDUX_DEVTOOLS_EXTENSION,STORE_DEVTOOLS_CONFIG],useFactory:createIsExtensionOrMonitorPresent},{provide:REDUX_DEVTOOLS_EXTENSION,useFactory:createReduxDevtoolsExtension},{provide:STORE_DEVTOOLS_CONFIG,deps:[INITIAL_OPTIONS],useFactory:createConfig},{provide:_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,deps:[StoreDevtools],useFactory:createStateObservable},{provide:_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK,useExisting:DevtoolsDispatcher}]}}}return z.\u0275fac=function(D){return new(D||z)},z.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:z}),z.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({}),z})()},2997:(z,N,D)=>{D.d(N,{UO:()=>oe,qg:()=>tt,Y6:()=>ce,mK:()=>On,n$:()=>Gt,Y$:()=>wn,FR:()=>gt,yh:()=>en,CK:()=>go,Aw:()=>mo,cr:()=>St,wb:()=>ir,qC:()=>Je,PH:()=>Ie,ZF:()=>H,P1:()=>Ut,Ys:()=>Vt});var m=D(4650),E=D(1135),Y=D(8306),J=D(7579),F=D(233),W=D(4004),$=D(4671),k=D(4482),ee=D(5403);function q(x,de){return x===de}var pe=D(5363),X=D(1365),ue=D(5026);const we={};function Ie(x,de){if(we[x]=(we[x]||0)+1,"function"==typeof de)return Me(x,(...ae)=>({...de(...ae),type:x}));switch(de?de._as:"empty"){case"empty":return Me(x,()=>({type:x}));case"props":return Me(x,ae=>({...ae,type:x}));default:throw new Error("Unexpected config.")}}function Me(x,de){return Object.defineProperty(de,"type",{value:x,writable:!1})}const tt="@ngrx/store/init";let oe=(()=>{class x extends E.X{constructor(){super({type:tt})}next(Q){if("function"==typeof Q)throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");if(typeof Q>"u")throw new TypeError("Actions must be objects");if(typeof Q.type>"u")throw new TypeError("Actions must have a type property");super.next(Q)}complete(){}ngOnDestroy(){super.complete()}}return x.\u0275fac=function(Q){return new(Q||x)},x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac}),x})();const le=[oe],re=new m.OlP("@ngrx/store Internal Root Guard"),ge=new m.OlP("@ngrx/store Internal Initial State"),ce=new m.OlP("@ngrx/store Initial State"),Fe=new m.OlP("@ngrx/store Reducer Factory"),ct=new m.OlP("@ngrx/store Internal Reducer Factory Provider"),_t=new m.OlP("@ngrx/store Initial Reducers"),vt=new m.OlP("@ngrx/store Internal Initial Reducers"),xe=new m.OlP("@ngrx/store Store Features"),yt=new m.OlP("@ngrx/store Internal Store Reducers"),an=new m.OlP("@ngrx/store Internal Feature Reducers"),Nt=new m.OlP("@ngrx/store Internal Feature Configs"),Et=new m.OlP("@ngrx/store Internal Store Features"),Ht=new m.OlP("@ngrx/store Internal Feature Reducers Token"),un=new m.OlP("@ngrx/store Feature Reducers"),Ft=new m.OlP("@ngrx/store User Provided Meta Reducers"),_n=new m.OlP("@ngrx/store Meta Reducers"),Qn=new m.OlP("@ngrx/store Internal Resolved Meta Reducers"),xr=new m.OlP("@ngrx/store User Runtime Checks Config"),Ir=new m.OlP("@ngrx/store Internal User Runtime Checks Config"),bn=new m.OlP("@ngrx/store Internal Runtime Checks"),Wn=new m.OlP("@ngrx/store Check if Action types are unique");function Gn(x,de={}){const Q=Object.keys(x),ae={};for(let Ne=0;Ne<Q.length;Ne++){const Dt=Q[Ne];"function"==typeof x[Dt]&&(ae[Dt]=x[Dt])}const Se=Object.keys(ae);return function(Dt,jt){Dt=void 0===Dt?de:Dt;let zt=!1;const fn={};for(let kt=0;kt<Se.length;kt++){const Kn=Se[kt],Uo=Dt[Kn],Pr=(0,ae[Kn])(Uo,jt);fn[Kn]=Pr,zt=zt||Pr!==Uo}return zt?fn:Dt}}function Je(...x){return function(de){if(0===x.length)return de;const Q=x[x.length-1];return x.slice(0,-1).reduceRight((Se,Ne)=>Ne(Se),Q(de))}}function Jn(x,de){return Array.isArray(de)&&de.length>0&&(x=Je.apply(null,[...de,x])),(Q,ae)=>{const Se=x(Q);return(Ne,Dt)=>Se(Ne=void 0===Ne?ae:Ne,Dt)}}class Gt extends Y.y{}class On extends oe{}const ir="@ngrx/store/update-reducers";let cn=(()=>{class x extends E.X{constructor(Q,ae,Se,Ne){super(Ne(Se,ae)),this.dispatcher=Q,this.initialState=ae,this.reducers=Se,this.reducerFactory=Ne}get currentReducers(){return this.reducers}addFeature(Q){this.addFeatures([Q])}addFeatures(Q){const ae=Q.reduce((Se,{reducers:Ne,reducerFactory:Dt,metaReducers:jt,initialState:zt,key:fn})=>{const kt="function"==typeof Ne?function Qt(x){const de=Array.isArray(x)&&x.length>0?Je(...x):Q=>Q;return(Q,ae)=>(Q=de(Q),(Se,Ne)=>Q(Se=void 0===Se?ae:Se,Ne))}(jt)(Ne,zt):Jn(Dt,jt)(Ne,zt);return Se[fn]=kt,Se},{});this.addReducers(ae)}removeFeature(Q){this.removeFeatures([Q])}removeFeatures(Q){this.removeReducers(Q.map(ae=>ae.key))}addReducer(Q,ae){this.addReducers({[Q]:ae})}addReducers(Q){this.reducers={...this.reducers,...Q},this.updateReducers(Object.keys(Q))}removeReducer(Q){this.removeReducers([Q])}removeReducers(Q){Q.forEach(ae=>{this.reducers=function hr(x,de){return Object.keys(x).filter(Q=>Q!==de).reduce((Q,ae)=>Object.assign(Q,{[ae]:x[ae]}),{})}(this.reducers,ae)}),this.updateReducers(Q)}updateReducers(Q){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:ir,features:Q})}ngOnDestroy(){this.complete()}}return x.\u0275fac=function(Q){return new(Q||x)(m.LFG(On),m.LFG(ce),m.LFG(_t),m.LFG(Fe))},x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac}),x})();const et=[cn,{provide:Gt,useExisting:cn},{provide:On,useExisting:oe}];let wn=(()=>{class x extends J.x{ngOnDestroy(){this.complete()}}return x.\u0275fac=function(){let de;return function(ae){return(de||(de=m.n5z(x)))(ae||x)}}(),x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac}),x})();const Rn=[wn];class gt extends Y.y{}let ke=(()=>{class x extends E.X{constructor(Q,ae,Se,Ne){super(Ne);const fn=Q.pipe((0,pe.Q)(F.N)).pipe((0,X.M)(ae)).pipe((0,ue.R)(lt,{state:Ne}));this.stateSubscription=fn.subscribe(({state:kt,action:Kn})=>{this.next(kt),Se.next(Kn)})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}}return x.INIT=tt,x.\u0275fac=function(Q){return new(Q||x)(m.LFG(oe),m.LFG(Gt),m.LFG(wn),m.LFG(ce))},x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac}),x})();function lt(x={state:void 0},[de,Q]){const{state:ae}=x;return{state:Q(ae,de),action:de}}const br=[ke,{provide:gt,useExisting:ke}];let en=(()=>{class x extends Y.y{constructor(Q,ae,Se){super(),this.actionsObserver=ae,this.reducerManager=Se,this.source=Q}select(Q,...ae){return Vt.call(null,Q,...ae)(this)}lift(Q){const ae=new x(this,this.actionsObserver,this.reducerManager);return ae.operator=Q,ae}dispatch(Q){this.actionsObserver.next(Q)}next(Q){this.actionsObserver.next(Q)}error(Q){this.actionsObserver.error(Q)}complete(){this.actionsObserver.complete()}addReducer(Q,ae){this.reducerManager.addReducer(Q,ae)}removeReducer(Q){this.reducerManager.removeReducer(Q)}}return x.\u0275fac=function(Q){return new(Q||x)(m.LFG(gt),m.LFG(oe),m.LFG(cn))},x.\u0275prov=m.Yz7({token:x,factory:x.\u0275fac}),x})();const nt=[en];function Vt(x,de,...Q){return function(Se){let Ne;if("string"==typeof x){const Dt=[de,...Q].filter(Boolean);Ne=Se.pipe(function V(...x){const de=x.length;if(0===de)throw new Error("list of properties cannot be empty.");return(0,W.U)(Q=>{let ae=Q;for(let Se=0;Se<de;Se++){const Ne=ae?.[x[Se]];if(!(typeof Ne<"u"))return;ae=Ne}return ae})}(x,...Dt))}else{if("function"!=typeof x)throw new TypeError(`Unexpected type '${typeof x}' in select operator, expected 'string' or 'function'`);Ne=Se.pipe((0,W.U)(Dt=>x(Dt,de)))}return Ne.pipe(function K(x,de=$.y){return x=x??q,(0,k.e)((Q,ae)=>{let Se,Ne=!0;Q.subscribe((0,ee.x)(ae,Dt=>{const jt=de(Dt);(Ne||!x(Se,jt))&&(Ne=!1,Se=jt,ae.next(Dt))}))})}())}}const Yt="https://ngrx.io/guide/store/configuration/runtime-checks";function xn(x){return void 0===x}function Mt(x){return null===x}function Tn(x){return Array.isArray(x)}function se(x){return"object"==typeof x&&null!==x}function Le(x){return"function"==typeof x}function at(x,de){return x===de}function It(x,de,Q){for(let ae=0;ae<x.length;ae++)if(!Q(x[ae],de[ae]))return!0;return!1}function bt(x,de=at,Q=at){let Ne,ae=null,Se=null;return{memoized:function fn(){if(void 0!==Ne)return Ne.result;if(!ae)return Se=x.apply(null,arguments),ae=arguments,Se;if(!It(arguments,ae,de))return Se;const kt=x.apply(null,arguments);return ae=arguments,Q(Se,kt)?Se:(Se=kt,kt)},reset:function Dt(){ae=null,Se=null},setResult:function jt(kt){Ne={result:kt}},clearResult:function zt(){Ne=void 0}}}function Ut(...x){return function Ze(x,de={stateFn:Te}){return function(...Q){let ae=Q;if(Array.isArray(ae[0])){const[kt,...Kn]=ae;ae=[...kt,...Kn]}const Se=ae.slice(0,ae.length-1),Ne=ae[ae.length-1],Dt=Se.filter(kt=>kt.release&&"function"==typeof kt.release),jt=x(function(...kt){return Ne.apply(null,kt)}),zt=bt(function(kt,Kn){return de.stateFn.apply(null,[kt,Se,Kn,jt])});return Object.assign(zt.memoized,{release:function fn(){zt.reset(),jt.reset(),Dt.forEach(kt=>kt.release())},projector:jt.memoized,setResult:zt.setResult,clearResult:zt.clearResult})}}(bt)(...x)}function Te(x,de,Q,ae){if(void 0===Q){const Ne=de.map(Dt=>Dt(x));return ae.memoized.apply(null,Ne)}const Se=de.map(Ne=>Ne(x,Q));return ae.memoized.apply(null,[...Se,Q])}function H(x){return Ut(de=>{const Q=de[x];return(0,m.X6Q)()&&!(x in de)&&console.warn(`@ngrx/store: The feature name "${x}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${x}', ...) or StoreModule.forFeature('${x}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),Q},de=>de)}function je(x){Object.freeze(x);const de=Le(x);return Object.getOwnPropertyNames(x).forEach(Q=>{if(!Q.startsWith("\u0275")&&function st(x,de){return Object.prototype.hasOwnProperty.call(x,de)}(x,Q)&&(!de||"caller"!==Q&&"callee"!==Q&&"arguments"!==Q)){const ae=x[Q];(se(ae)||Le(ae))&&!Object.isFrozen(ae)&&je(ae)}}),x}function Lt(x,de=[]){return(xn(x)||Mt(x))&&0===de.length?{path:["root"],value:x}:Object.keys(x).reduce((ae,Se)=>{if(ae)return ae;const Ne=x[Se];return function it(x){return Le(x)&&x.hasOwnProperty("\u0275cmp")}(Ne)?ae:!(xn(Ne)||Mt(Ne)||function Pn(x){return"number"==typeof x}(Ne)||function Hn(x){return"boolean"==typeof x}(Ne)||function rt(x){return"string"==typeof x}(Ne)||Tn(Ne))&&(function ye(x){if(!function Ce(x){return se(x)&&!Tn(x)}(x))return!1;const de=Object.getPrototypeOf(x);return de===Object.prototype||null===de}(Ne)?Lt(Ne,[...de,Se]):{path:[...de,Se],value:Ne})},!1)}function Qe(x,de){if(!1===x)return;const Q=x.path.join("."),ae=new Error(`Detected unserializable ${de} at "${Q}". ${Yt}#strict${de}serializability`);throw ae.value=x.value,ae.unserializablePath=Q,ae}function sr(x){return(0,m.X6Q)()?{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1,...x}:{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function pr({strictActionSerializability:x,strictStateSerializability:de}){return Q=>x||de?function ht(x,de){return function(Q,ae){de.action(ae)&&Qe(Lt(ae),"action");const Se=x(Q,ae);return de.state()&&Qe(Lt(Se),"state"),Se}}(Q,{action:ae=>x&&!tn(ae),state:()=>de}):Q}function ar({strictActionImmutability:x,strictStateImmutability:de}){return Q=>x||de?function _e(x,de){return function(Q,ae){const Se=de.action(ae)?je(ae):ae,Ne=x(Q,Se);return de.state()?je(Ne):Ne}}(Q,{action:ae=>x&&!tn(ae),state:()=>de}):Q}function tn(x){return x.type.startsWith("@ngrx")}function wr({strictActionWithinNgZone:x}){return de=>x?function Vn(x,de){return function(Q,ae){if(de.action(ae)&&!m.R0b.isInAngularZone())throw new Error(`Action '${ae.type}' running outside NgZone. ${Yt}#strictactionwithinngzone`);return x(Q,ae)}}(de,{action:Q=>x&&!tn(Q)}):de}function Fn(x){return[{provide:Ir,useValue:x},{provide:xr,useFactory:ur,deps:[Ir]},{provide:bn,deps:[xr],useFactory:sr},{provide:_n,multi:!0,deps:[bn],useFactory:ar},{provide:_n,multi:!0,deps:[bn],useFactory:pr},{provide:_n,multi:!0,deps:[bn],useFactory:wr}]}function vn(){return[{provide:Wn,multi:!0,deps:[bn],useFactory:po}]}function ur(x){return x}function po(x){if(!x.strictActionTypeUniqueness)return;const de=Object.entries(we).filter(([,Q])=>Q>1).map(([Q])=>Q);if(de.length)throw new Error(`Action types are registered more than once, ${de.map(Q=>`"${Q}"`).join(", ")}. ${Yt}#strictactiontypeuniqueness`)}let St=(()=>{class x{constructor(Q,ae,Se,Ne,Dt,jt){}}return x.\u0275fac=function(Q){return new(Q||x)(m.LFG(oe),m.LFG(Gt),m.LFG(wn),m.LFG(en),m.LFG(re,8),m.LFG(Wn,8))},x.\u0275mod=m.oAB({type:x}),x.\u0275inj=m.cJS({}),x})(),go=(()=>{class x{constructor(Q,ae,Se,Ne,Dt){this.features=Q,this.featureReducers=ae,this.reducerManager=Se;const jt=Q.map((zt,fn)=>{const Kn=ae.shift()[fn];return{...zt,reducers:Kn,initialState:$n(zt.initialState)}});Se.addFeatures(jt)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}}return x.\u0275fac=function(Q){return new(Q||x)(m.LFG(Et),m.LFG(un),m.LFG(cn),m.LFG(St),m.LFG(Wn,8))},x.\u0275mod=m.oAB({type:x}),x.\u0275inj=m.cJS({}),x})(),mo=(()=>{class x{static forRoot(Q,ae={}){return{ngModule:St,providers:[{provide:re,useFactory:nn,deps:[[en,new m.FiY,new m.tp0]]},{provide:ge,useValue:ae.initialState},{provide:ce,useFactory:$n,deps:[ge]},{provide:vt,useValue:Q},{provide:yt,useExisting:Q instanceof m.OlP?Q:vt},{provide:_t,deps:[m.zs3,vt,[new m.tBr(yt)]],useFactory:gr},{provide:Ft,useValue:ae.metaReducers?ae.metaReducers:[]},{provide:Qn,deps:[_n,Ft],useFactory:zn},{provide:ct,useValue:ae.reducerFactory?ae.reducerFactory:Gn},{provide:Fe,deps:[ct,Qn],useFactory:Jn},le,et,Rn,br,nt,Fn(ae.runtimeChecks),vn()]}}static forFeature(Q,ae,Se={}){return{ngModule:go,providers:[{provide:Nt,multi:!0,useValue:Q instanceof Object?{}:Se},{provide:xe,multi:!0,useValue:{key:Q instanceof Object?Q.name:Q,reducerFactory:Se instanceof m.OlP||!Se.reducerFactory?Gn:Se.reducerFactory,metaReducers:Se instanceof m.OlP||!Se.metaReducers?[]:Se.metaReducers,initialState:Se instanceof m.OlP||!Se.initialState?void 0:Se.initialState}},{provide:Et,deps:[m.zs3,Nt,xe],useFactory:mr},{provide:an,multi:!0,useValue:Q instanceof Object?Q.reducer:ae},{provide:Ht,multi:!0,useExisting:ae instanceof m.OlP?ae:an},{provide:un,multi:!0,deps:[m.zs3,an,[new m.tBr(Ht)]],useFactory:yn},vn()]}}}return x.\u0275fac=function(Q){return new(Q||x)},x.\u0275mod=m.oAB({type:x}),x.\u0275inj=m.cJS({}),x})();function gr(x,de){return de instanceof m.OlP?x.get(de):de}function mr(x,de,Q){return Q.map((ae,Se)=>{if(de[Se]instanceof m.OlP){const Ne=x.get(de[Se]);return{key:ae.key,reducerFactory:Ne.reducerFactory?Ne.reducerFactory:Gn,metaReducers:Ne.metaReducers?Ne.metaReducers:[],initialState:Ne.initialState}}return ae})}function yn(x,de){return de.map(ae=>ae instanceof m.OlP?x.get(ae):ae)}function $n(x){return"function"==typeof x?x():x}function zn(x,de){return x.concat(de)}function nn(x){if(x)throw new TypeError("StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead.");return"guarded"}}}]);