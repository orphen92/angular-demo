"use strict";(self.webpackChunkAngular_demo=self.webpackChunkAngular_demo||[]).push([["vendor"],{306:($e,fe,x)=>{x.d(fe,{y:()=>te});var E=x(961),w=x(727),re=x(822),X=x(671);var ie=x(416),Pe=x(576),we=x(806);let te=(()=>{class pe{constructor(se){se&&(this._subscribe=se)}lift(se){const ue=new pe;return ue.source=this,ue.operator=se,ue}subscribe(se,ue,Ge){const Ze=function Ye(pe){return pe&&pe instanceof E.Lv||function De(pe){return pe&&(0,Pe.m)(pe.next)&&(0,Pe.m)(pe.error)&&(0,Pe.m)(pe.complete)}(pe)&&(0,w.Nn)(pe)}(se)?se:new E.Hp(se,ue,Ge);return(0,we.x)(()=>{const{operator:Qe,source:H}=this;Ze.add(Qe?Qe.call(Ze,H):H?this._subscribe(Ze):this._trySubscribe(Ze))}),Ze}_trySubscribe(se){try{return this._subscribe(se)}catch(ue){se.error(ue)}}forEach(se,ue){return new(ue=W(ue))((Ge,Ze)=>{const Qe=new E.Hp({next:H=>{try{se(H)}catch(ee){Ze(ee),Qe.unsubscribe()}},error:Ze,complete:Ge});this.subscribe(Qe)})}_subscribe(se){var ue;return null===(ue=this.source)||void 0===ue?void 0:ue.subscribe(se)}[re.L](){return this}pipe(...se){return function Ie(pe){return 0===pe.length?X.y:1===pe.length?pe[0]:function(se){return pe.reduce((ue,Ge)=>Ge(ue),se)}}(se)(this)}toPromise(se){return new(se=W(se))((ue,Ge)=>{let Ze;this.subscribe(Qe=>Ze=Qe,Qe=>Ge(Qe),()=>ue(Ze))})}}return pe.create=me=>new pe(me),pe})();function W(pe){var me;return null!==(me=pe??ie.v.Promise)&&void 0!==me?me:Promise}},579:($e,fe,x)=>{x.d(fe,{x:()=>ie});var E=x(306),w=x(727);const X=(0,x(888).d)(we=>function(){we(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var V=x(737),Ie=x(806);let ie=(()=>{class we extends E.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(W){const De=new Pe(this,this);return De.operator=W,De}_throwIfClosed(){if(this.closed)throw new X}next(W){(0,Ie.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const De of this.currentObservers)De.next(W)}})}error(W){(0,Ie.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=W;const{observers:De}=this;for(;De.length;)De.shift().error(W)}})}complete(){(0,Ie.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:W}=this;for(;W.length;)W.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var W;return(null===(W=this.observers)||void 0===W?void 0:W.length)>0}_trySubscribe(W){return this._throwIfClosed(),super._trySubscribe(W)}_subscribe(W){return this._throwIfClosed(),this._checkFinalizedStatuses(W),this._innerSubscribe(W)}_innerSubscribe(W){const{hasError:De,isStopped:Ye,observers:pe}=this;return De||Ye?w.Lc:(this.currentObservers=null,pe.push(W),new w.w0(()=>{this.currentObservers=null,(0,V.P)(pe,W)}))}_checkFinalizedStatuses(W){const{hasError:De,thrownError:Ye,isStopped:pe}=this;De?W.error(Ye):pe&&W.complete()}asObservable(){const W=new E.y;return W.source=this,W}}return we.create=(te,W)=>new Pe(te,W),we})();class Pe extends ie{constructor(te,W){super(),this.destination=te,this.source=W}next(te){var W,De;null===(De=null===(W=this.destination)||void 0===W?void 0:W.next)||void 0===De||De.call(W,te)}error(te){var W,De;null===(De=null===(W=this.destination)||void 0===W?void 0:W.error)||void 0===De||De.call(W,te)}complete(){var te,W;null===(W=null===(te=this.destination)||void 0===te?void 0:te.complete)||void 0===W||W.call(te)}_subscribe(te){var W,De;return null!==(De=null===(W=this.source)||void 0===W?void 0:W.subscribe(te))&&void 0!==De?De:w.Lc}}},961:($e,fe,x)=>{x.d(fe,{Hp:()=>se,Lv:()=>De});var E=x(576),w=x(727),re=x(416),X=x(849);function V(){}const Ie=we("C",void 0,void 0);function we(H,ee,Ae){return{kind:H,value:ee,error:Ae}}var te=x(410),W=x(806);class De extends w.w0{constructor(ee){super(),this.isStopped=!1,ee?(this.destination=ee,(0,w.Nn)(ee)&&ee.add(this)):this.destination=Qe}static create(ee,Ae,ce){return new se(ee,Ae,ce)}next(ee){this.isStopped?Ze(function Pe(H){return we("N",H,void 0)}(ee),this):this._next(ee)}error(ee){this.isStopped?Ze(function ie(H){return we("E",void 0,H)}(ee),this):(this.isStopped=!0,this._error(ee))}complete(){this.isStopped?Ze(Ie,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(ee){this.destination.next(ee)}_error(ee){try{this.destination.error(ee)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const Ye=Function.prototype.bind;function pe(H,ee){return Ye.call(H,ee)}class me{constructor(ee){this.partialObserver=ee}next(ee){const{partialObserver:Ae}=this;if(Ae.next)try{Ae.next(ee)}catch(ce){ue(ce)}}error(ee){const{partialObserver:Ae}=this;if(Ae.error)try{Ae.error(ee)}catch(ce){ue(ce)}else ue(ee)}complete(){const{partialObserver:ee}=this;if(ee.complete)try{ee.complete()}catch(Ae){ue(Ae)}}}class se extends De{constructor(ee,Ae,ce){let ve;if(super(),(0,E.m)(ee)||!ee)ve={next:ee??void 0,error:Ae??void 0,complete:ce??void 0};else{let K;this&&re.v.useDeprecatedNextContext?(K=Object.create(ee),K.unsubscribe=()=>this.unsubscribe(),ve={next:ee.next&&pe(ee.next,K),error:ee.error&&pe(ee.error,K),complete:ee.complete&&pe(ee.complete,K)}):ve=ee}this.destination=new me(ve)}}function ue(H){re.v.useDeprecatedSynchronousErrorHandling?(0,W.O)(H):(0,X.h)(H)}function Ze(H,ee){const{onStoppedNotification:Ae}=re.v;Ae&&te.z.setTimeout(()=>Ae(H,ee))}const Qe={closed:!0,next:V,error:function Ge(H){throw H},complete:V}},727:($e,fe,x)=>{x.d(fe,{Lc:()=>Ie,w0:()=>V,Nn:()=>ie});var E=x(576);const re=(0,x(888).d)(we=>function(W){we(this),this.message=W?`${W.length} errors occurred during unsubscription:\n${W.map((De,Ye)=>`${Ye+1}) ${De.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=W});var X=x(737);class V{constructor(te){this.initialTeardown=te,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let te;if(!this.closed){this.closed=!0;const{_parentage:W}=this;if(W)if(this._parentage=null,Array.isArray(W))for(const pe of W)pe.remove(this);else W.remove(this);const{initialTeardown:De}=this;if((0,E.m)(De))try{De()}catch(pe){te=pe instanceof re?pe.errors:[pe]}const{_finalizers:Ye}=this;if(Ye){this._finalizers=null;for(const pe of Ye)try{Pe(pe)}catch(me){te=te??[],me instanceof re?te=[...te,...me.errors]:te.push(me)}}if(te)throw new re(te)}}add(te){var W;if(te&&te!==this)if(this.closed)Pe(te);else{if(te instanceof V){if(te.closed||te._hasParent(this))return;te._addParent(this)}(this._finalizers=null!==(W=this._finalizers)&&void 0!==W?W:[]).push(te)}}_hasParent(te){const{_parentage:W}=this;return W===te||Array.isArray(W)&&W.includes(te)}_addParent(te){const{_parentage:W}=this;this._parentage=Array.isArray(W)?(W.push(te),W):W?[W,te]:te}_removeParent(te){const{_parentage:W}=this;W===te?this._parentage=null:Array.isArray(W)&&(0,X.P)(W,te)}remove(te){const{_finalizers:W}=this;W&&(0,X.P)(W,te),te instanceof V&&te._removeParent(this)}}V.EMPTY=(()=>{const we=new V;return we.closed=!0,we})();const Ie=V.EMPTY;function ie(we){return we instanceof V||we&&"closed"in we&&(0,E.m)(we.remove)&&(0,E.m)(we.add)&&(0,E.m)(we.unsubscribe)}function Pe(we){(0,E.m)(we)?we():we.unsubscribe()}},416:($e,fe,x)=>{x.d(fe,{v:()=>E});const E={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},515:($e,fe,x)=>{x.d(fe,{E:()=>w});const w=new(x(306).y)(V=>V.complete())},76:($e,fe,x)=>{x.d(fe,{D:()=>ce});var E=x(421),w=x(672),re=x(482),X=x(403);function V(ve,K=0){return(0,re.e)((ae,F)=>{ae.subscribe((0,X.x)(F,L=>(0,w.f)(F,ve,()=>F.next(L),K),()=>(0,w.f)(F,ve,()=>F.complete(),K),L=>(0,w.f)(F,ve,()=>F.error(L),K)))})}function Ie(ve,K=0){return(0,re.e)((ae,F)=>{F.add(ve.schedule(()=>ae.subscribe(F),K))})}var we=x(306),W=x(202),De=x(576);function pe(ve,K){if(!ve)throw new Error("Iterable cannot be null");return new we.y(ae=>{(0,w.f)(ae,K,()=>{const F=ve[Symbol.asyncIterator]();(0,w.f)(ae,K,()=>{F.next().then(L=>{L.done?ae.complete():ae.next(L.value)})},0,!0)})})}var me=x(670),se=x(239),ue=x(144),Ge=x(495),Ze=x(206),Qe=x(532),H=x(260);function ce(ve,K){return K?function Ae(ve,K){if(null!=ve){if((0,me.c)(ve))return function ie(ve,K){return(0,E.Xf)(ve).pipe(Ie(K),V(K))}(ve,K);if((0,ue.z)(ve))return function te(ve,K){return new we.y(ae=>{let F=0;return K.schedule(function(){F===ve.length?ae.complete():(ae.next(ve[F++]),ae.closed||this.schedule())})})}(ve,K);if((0,se.t)(ve))return function Pe(ve,K){return(0,E.Xf)(ve).pipe(Ie(K),V(K))}(ve,K);if((0,Ze.D)(ve))return pe(ve,K);if((0,Ge.T)(ve))return function Ye(ve,K){return new we.y(ae=>{let F;return(0,w.f)(ae,K,()=>{F=ve[W.h](),(0,w.f)(ae,K,()=>{let L,k;try{({value:L,done:k}=F.next())}catch(G){return void ae.error(G)}k?ae.complete():ae.next(L)},0,!0)}),()=>(0,De.m)(F?.return)&&F.return()})}(ve,K);if((0,H.L)(ve))return function ee(ve,K){return pe((0,H.Q)(ve),K)}(ve,K)}throw(0,Qe.z)(ve)}(ve,K):(0,E.Xf)(ve)}},421:($e,fe,x)=>{x.d(fe,{Xf:()=>Ye});var E=x(655),w=x(144),re=x(239),X=x(306),V=x(670),Ie=x(206),ie=x(532),Pe=x(495),we=x(260),te=x(576),W=x(849),De=x(822);function Ye(H){if(H instanceof X.y)return H;if(null!=H){if((0,V.c)(H))return function pe(H){return new X.y(ee=>{const Ae=H[De.L]();if((0,te.m)(Ae.subscribe))return Ae.subscribe(ee);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(H);if((0,w.z)(H))return function me(H){return new X.y(ee=>{for(let Ae=0;Ae<H.length&&!ee.closed;Ae++)ee.next(H[Ae]);ee.complete()})}(H);if((0,re.t)(H))return function se(H){return new X.y(ee=>{H.then(Ae=>{ee.closed||(ee.next(Ae),ee.complete())},Ae=>ee.error(Ae)).then(null,W.h)})}(H);if((0,Ie.D)(H))return Ge(H);if((0,Pe.T)(H))return function ue(H){return new X.y(ee=>{for(const Ae of H)if(ee.next(Ae),ee.closed)return;ee.complete()})}(H);if((0,we.L)(H))return function Ze(H){return Ge((0,we.Q)(H))}(H)}throw(0,ie.z)(H)}function Ge(H){return new X.y(ee=>{(function Qe(H,ee){var Ae,ce,ve,K;return(0,E.mG)(this,void 0,void 0,function*(){try{for(Ae=(0,E.KL)(H);!(ce=yield Ae.next()).done;)if(ee.next(ce.value),ee.closed)return}catch(ae){ve={error:ae}}finally{try{ce&&!ce.done&&(K=Ae.return)&&(yield K.call(Ae))}finally{if(ve)throw ve.error}}ee.complete()})})(H,ee).catch(Ae=>ee.error(Ae))})}},403:($e,fe,x)=>{x.d(fe,{x:()=>w});var E=x(961);function w(X,V,Ie,ie,Pe){return new re(X,V,Ie,ie,Pe)}class re extends E.Lv{constructor(V,Ie,ie,Pe,we,te){super(V),this.onFinalize=we,this.shouldUnsubscribe=te,this._next=Ie?function(W){try{Ie(W)}catch(De){V.error(De)}}:super._next,this._error=Pe?function(W){try{Pe(W)}catch(De){V.error(De)}finally{this.unsubscribe()}}:super._error,this._complete=ie?function(){try{ie()}catch(W){V.error(W)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var V;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:Ie}=this;super.unsubscribe(),!Ie&&(null===(V=this.onFinalize)||void 0===V||V.call(this))}}}},4:($e,fe,x)=>{x.d(fe,{U:()=>re});var E=x(482),w=x(403);function re(X,V){return(0,E.e)((Ie,ie)=>{let Pe=0;Ie.subscribe((0,w.x)(ie,we=>{ie.next(X.call(V,we,Pe++))}))})}},189:($e,fe,x)=>{x.d(fe,{J:()=>re});var E=x(577),w=x(671);function re(X=1/0){return(0,E.z)(w.y,X)}},577:($e,fe,x)=>{x.d(fe,{z:()=>Pe});var E=x(4),w=x(421),re=x(482),X=x(672),V=x(403),ie=x(576);function Pe(we,te,W=1/0){return(0,ie.m)(te)?Pe((De,Ye)=>(0,E.U)((pe,me)=>te(De,pe,Ye,me))((0,w.Xf)(we(De,Ye))),W):("number"==typeof te&&(W=te),(0,re.e)((De,Ye)=>function Ie(we,te,W,De,Ye,pe,me,se){const ue=[];let Ge=0,Ze=0,Qe=!1;const H=()=>{Qe&&!ue.length&&!Ge&&te.complete()},ee=ce=>Ge<De?Ae(ce):ue.push(ce),Ae=ce=>{pe&&te.next(ce),Ge++;let ve=!1;(0,w.Xf)(W(ce,Ze++)).subscribe((0,V.x)(te,K=>{Ye?.(K),pe?ee(K):te.next(K)},()=>{ve=!0},void 0,()=>{if(ve)try{for(Ge--;ue.length&&Ge<De;){const K=ue.shift();me?(0,X.f)(te,me,()=>Ae(K)):Ae(K)}H()}catch(K){te.error(K)}}))};return we.subscribe((0,V.x)(te,ee,()=>{Qe=!0,H()})),()=>{se?.()}}(De,Ye,we,W)))}},698:($e,fe,x)=>{x.d(fe,{q:()=>X});var E=x(515),w=x(482),re=x(403);function X(V){return V<=0?()=>E.E:(0,w.e)((Ie,ie)=>{let Pe=0;Ie.subscribe((0,re.x)(ie,we=>{++Pe<=V&&(ie.next(we),V<=Pe&&ie.complete())}))})}},410:($e,fe,x)=>{x.d(fe,{z:()=>E});const E={setTimeout(w,re,...X){const{delegate:V}=E;return V?.setTimeout?V.setTimeout(w,re,...X):setTimeout(w,re,...X)},clearTimeout(w){const{delegate:re}=E;return(re?.clearTimeout||clearTimeout)(w)},delegate:void 0}},202:($e,fe,x)=>{x.d(fe,{h:()=>w});const w=function E(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},822:($e,fe,x)=>{x.d(fe,{L:()=>E});const E="function"==typeof Symbol&&Symbol.observable||"@@observable"},669:($e,fe,x)=>{x.d(fe,{_6:()=>Ie,jO:()=>X,yG:()=>V});var E=x(576);function re(ie){return ie[ie.length-1]}function X(ie){return(0,E.m)(re(ie))?ie.pop():void 0}function V(ie){return function w(ie){return ie&&(0,E.m)(ie.schedule)}(re(ie))?ie.pop():void 0}function Ie(ie,Pe){return"number"==typeof re(ie)?ie.pop():Pe}},737:($e,fe,x)=>{function E(w,re){if(w){const X=w.indexOf(re);0<=X&&w.splice(X,1)}}x.d(fe,{P:()=>E})},888:($e,fe,x)=>{function E(w){const X=w(V=>{Error.call(V),V.stack=(new Error).stack});return X.prototype=Object.create(Error.prototype),X.prototype.constructor=X,X}x.d(fe,{d:()=>E})},806:($e,fe,x)=>{x.d(fe,{O:()=>X,x:()=>re});var E=x(416);let w=null;function re(V){if(E.v.useDeprecatedSynchronousErrorHandling){const Ie=!w;if(Ie&&(w={errorThrown:!1,error:null}),V(),Ie){const{errorThrown:ie,error:Pe}=w;if(w=null,ie)throw Pe}}else V()}function X(V){E.v.useDeprecatedSynchronousErrorHandling&&w&&(w.errorThrown=!0,w.error=V)}},672:($e,fe,x)=>{function E(w,re,X,V=0,Ie=!1){const ie=re.schedule(function(){X(),Ie?w.add(this.schedule(null,V)):this.unsubscribe()},V);if(w.add(ie),!Ie)return ie}x.d(fe,{f:()=>E})},671:($e,fe,x)=>{function E(w){return w}x.d(fe,{y:()=>E})},144:($e,fe,x)=>{x.d(fe,{z:()=>E});const E=w=>w&&"number"==typeof w.length&&"function"!=typeof w},206:($e,fe,x)=>{x.d(fe,{D:()=>w});var E=x(576);function w(re){return Symbol.asyncIterator&&(0,E.m)(re?.[Symbol.asyncIterator])}},576:($e,fe,x)=>{function E(w){return"function"==typeof w}x.d(fe,{m:()=>E})},670:($e,fe,x)=>{x.d(fe,{c:()=>re});var E=x(822),w=x(576);function re(X){return(0,w.m)(X[E.L])}},495:($e,fe,x)=>{x.d(fe,{T:()=>re});var E=x(202),w=x(576);function re(X){return(0,w.m)(X?.[E.h])}},239:($e,fe,x)=>{x.d(fe,{t:()=>w});var E=x(576);function w(re){return(0,E.m)(re?.then)}},260:($e,fe,x)=>{x.d(fe,{L:()=>X,Q:()=>re});var E=x(655),w=x(576);function re(V){return(0,E.FC)(this,arguments,function*(){const ie=V.getReader();try{for(;;){const{value:Pe,done:we}=yield(0,E.qq)(ie.read());if(we)return yield(0,E.qq)(void 0);yield yield(0,E.qq)(Pe)}}finally{ie.releaseLock()}})}function X(V){return(0,w.m)(V?.getReader)}},482:($e,fe,x)=>{x.d(fe,{A:()=>w,e:()=>re});var E=x(576);function w(X){return(0,E.m)(X?.lift)}function re(X){return V=>{if(w(V))return V.lift(function(Ie){try{return X(Ie,this)}catch(ie){this.error(ie)}});throw new TypeError("Unable to lift unknown Observable type")}}},849:($e,fe,x)=>{x.d(fe,{h:()=>re});var E=x(416),w=x(410);function re(X){w.z.setTimeout(()=>{const{onUnhandledError:V}=E.v;if(!V)throw X;V(X)})}},532:($e,fe,x)=>{function E(w){return new TypeError(`You provided ${null!==w&&"object"==typeof w?"an invalid object":`'${w}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}x.d(fe,{z:()=>E})},655:($e,fe,x)=>{function Pe(F,L,k,G){return new(k||(k=Promise))(function(ne,ke){function et(Et){try{Ve(G.next(Et))}catch(jt){ke(jt)}}function ze(Et){try{Ve(G.throw(Et))}catch(jt){ke(jt)}}function Ve(Et){Et.done?ne(Et.value):function j(ne){return ne instanceof k?ne:new k(function(ke){ke(ne)})}(Et.value).then(et,ze)}Ve((G=G.apply(F,L||[])).next())})}function ue(F){return this instanceof ue?(this.v=F,this):new ue(F)}function Ge(F,L,k){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var j,G=k.apply(F,L||[]),ne=[];return j={},ke("next"),ke("throw"),ke("return"),j[Symbol.asyncIterator]=function(){return this},j;function ke(ut){G[ut]&&(j[ut]=function(Vt){return new Promise(function(un,cn){ne.push([ut,Vt,un,cn])>1||et(ut,Vt)})})}function et(ut,Vt){try{!function ze(ut){ut.value instanceof ue?Promise.resolve(ut.value.v).then(Ve,Et):jt(ne[0][2],ut)}(G[ut](Vt))}catch(un){jt(ne[0][3],un)}}function Ve(ut){et("next",ut)}function Et(ut){et("throw",ut)}function jt(ut,Vt){ut(Vt),ne.shift(),ne.length&&et(ne[0][0],ne[0][1])}}function Qe(F){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var k,L=F[Symbol.asyncIterator];return L?L.call(F):(F=function De(F){var L="function"==typeof Symbol&&Symbol.iterator,k=L&&F[L],G=0;if(k)return k.call(F);if(F&&"number"==typeof F.length)return{next:function(){return F&&G>=F.length&&(F=void 0),{value:F&&F[G++],done:!F}}};throw new TypeError(L?"Object is not iterable.":"Symbol.iterator is not defined.")}(F),k={},G("next"),G("throw"),G("return"),k[Symbol.asyncIterator]=function(){return this},k);function G(ne){k[ne]=F[ne]&&function(ke){return new Promise(function(et,ze){!function j(ne,ke,et,ze){Promise.resolve(ze).then(function(Ve){ne({value:Ve,done:et})},ke)}(et,ze,(ke=F[ne](ke)).done,ke.value)})}}}x.d(fe,{FC:()=>Ge,KL:()=>Qe,mG:()=>Pe,qq:()=>ue})},895:($e,fe,x)=>{x.d(fe,{Do:()=>H,EM:()=>qt,HT:()=>V,JF:()=>Fs,K0:()=>ie,Mx:()=>Gn,S$:()=>ue,V_:()=>te,Ye:()=>ee,b0:()=>Qe,bD:()=>Tr,ez:()=>xi,q:()=>re,w_:()=>Ie});var E=x(256);
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
     */let w=null;function re(){return w}function V(h){w||(w=h)}class Ie{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ie=new E.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Pe=(()=>{class h{historyGo(p){throw new Error("Not implemented")}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275prov=E.Yz7({token:h,factory:function(){return function we(){return(0,E.LFG)(W)}()},providedIn:"platform"}),h})();const te=new E.OlP("Location Initialized");let W=(()=>{class h extends Pe{constructor(p){super(),this._doc=p,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return re().getBaseHref(this._doc)}onPopState(p){const C=re().getGlobalEventTarget(this._doc,"window");return C.addEventListener("popstate",p,!1),()=>C.removeEventListener("popstate",p)}onHashChange(p){const C=re().getGlobalEventTarget(this._doc,"window");return C.addEventListener("hashchange",p,!1),()=>C.removeEventListener("hashchange",p)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(p){this.location.pathname=p}pushState(p,C,T){De()?this._history.pushState(p,C,T):this.location.hash=T}replaceState(p,C,T){De()?this._history.replaceState(p,C,T):this.location.hash=T}forward(){this._history.forward()}back(){this._history.back()}historyGo(p=0){this._history.go(p)}getState(){return this._history.state}}return h.\u0275fac=function(p){return new(p||h)(E.LFG(ie))},h.\u0275prov=E.Yz7({token:h,factory:function(){return function Ye(){return new W((0,E.LFG)(ie))}
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
     */()},providedIn:"platform"}),h})();function De(){return!!window.history.pushState}function pe(h,D){if(0==h.length)return D;if(0==D.length)return h;let p=0;return h.endsWith("/")&&p++,D.startsWith("/")&&p++,2==p?h+D.substring(1):1==p?h+D:h+"/"+D}function me(h){const D=h.match(/#|\?|$/),p=D&&D.index||h.length;return h.slice(0,p-("/"===h[p-1]?1:0))+h.slice(p)}function se(h){return h&&"?"!==h[0]?"?"+h:h}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ue=(()=>{class h{historyGo(p){throw new Error("Not implemented")}}return h.\u0275fac=function(p){return new(p||h)},h.\u0275prov=E.Yz7({token:h,factory:function(){return function Ge(){const h=(0,E.LFG)(ie).location;return new Qe((0,E.LFG)(Pe),h&&h.origin||"")}()},providedIn:"root"}),h})();const Ze=new E.OlP("appBaseHref");let Qe=(()=>{class h extends ue{constructor(p,C){if(super(),this._platformLocation=p,this._removeListenerFns=[],null==C&&(C=this._platformLocation.getBaseHrefFromDOM()),null==C)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=C}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(p){this._removeListenerFns.push(this._platformLocation.onPopState(p),this._platformLocation.onHashChange(p))}getBaseHref(){return this._baseHref}prepareExternalUrl(p){return pe(this._baseHref,p)}path(p=!1){const C=this._platformLocation.pathname+se(this._platformLocation.search),T=this._platformLocation.hash;return T&&p?`${C}${T}`:C}pushState(p,C,T,B){const Y=this.prepareExternalUrl(T+se(B));this._platformLocation.pushState(p,C,Y)}replaceState(p,C,T,B){const Y=this.prepareExternalUrl(T+se(B));this._platformLocation.replaceState(p,C,Y)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(p=0){this._platformLocation.historyGo?.(p)}}return h.\u0275fac=function(p){return new(p||h)(E.LFG(Pe),E.LFG(Ze,8))},h.\u0275prov=E.Yz7({token:h,factory:h.\u0275fac}),h})(),H=(()=>{class h extends ue{constructor(p,C){super(),this._platformLocation=p,this._baseHref="",this._removeListenerFns=[],null!=C&&(this._baseHref=C)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(p){this._removeListenerFns.push(this._platformLocation.onPopState(p),this._platformLocation.onHashChange(p))}getBaseHref(){return this._baseHref}path(p=!1){let C=this._platformLocation.hash;return null==C&&(C="#"),C.length>0?C.substring(1):C}prepareExternalUrl(p){const C=pe(this._baseHref,p);return C.length>0?"#"+C:C}pushState(p,C,T,B){let Y=this.prepareExternalUrl(T+se(B));0==Y.length&&(Y=this._platformLocation.pathname),this._platformLocation.pushState(p,C,Y)}replaceState(p,C,T,B){let Y=this.prepareExternalUrl(T+se(B));0==Y.length&&(Y=this._platformLocation.pathname),this._platformLocation.replaceState(p,C,Y)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(p=0){this._platformLocation.historyGo?.(p)}}return h.\u0275fac=function(p){return new(p||h)(E.LFG(Pe),E.LFG(Ze,8))},h.\u0275prov=E.Yz7({token:h,factory:h.\u0275fac}),h})(),ee=(()=>{class h{constructor(p){this._subject=new E.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=p;const C=this._locationStrategy.getBaseHref();this._baseHref=me(ve(C)),this._locationStrategy.onPopState(T=>{this._subject.emit({url:this.path(!0),pop:!0,state:T.state,type:T.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(p=!1){return this.normalize(this._locationStrategy.path(p))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(p,C=""){return this.path()==this.normalize(p+se(C))}normalize(p){return h.stripTrailingSlash(function ce(h,D){return h&&D.startsWith(h)?D.substring(h.length):D}(this._baseHref,ve(p)))}prepareExternalUrl(p){return p&&"/"!==p[0]&&(p="/"+p),this._locationStrategy.prepareExternalUrl(p)}go(p,C="",T=null){this._locationStrategy.pushState(T,"",p,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(p+se(C)),T)}replaceState(p,C="",T=null){this._locationStrategy.replaceState(T,"",p,C),this._notifyUrlChangeListeners(this.prepareExternalUrl(p+se(C)),T)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(p=0){this._locationStrategy.historyGo?.(p)}onUrlChange(p){return this._urlChangeListeners.push(p),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(C=>{this._notifyUrlChangeListeners(C.url,C.state)})),()=>{const C=this._urlChangeListeners.indexOf(p);this._urlChangeListeners.splice(C,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(p="",C){this._urlChangeListeners.forEach(T=>T(p,C))}subscribe(p,C,T){return this._subject.subscribe({next:p,error:C,complete:T})}}return h.normalizeQueryParams=se,h.joinWithSlash=pe,h.stripTrailingSlash=me,h.\u0275fac=function(p){return new(p||h)(E.LFG(ue))},h.\u0275prov=E.Yz7({token:h,factory:function(){return function Ae(){return new ee((0,E.LFG)(ue))}()},providedIn:"root"}),h})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ve(h){return h.replace(/\/index.html$/,"")}
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
function Gn(h,D){D=encodeURIComponent(D);for(const p of h.split(";")){const C=p.indexOf("="),[T,B]=-1==C?[p,""]:[p.slice(0,C),p.slice(C+1)];if(T.trim()===D)return decodeURIComponent(B)}return null}
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
let xi=(()=>{class h{}return h.\u0275fac=function(p){return new(p||h)},h.\u0275mod=E.oAB({type:h}),h.\u0275inj=E.cJS({}),h})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Tr="browser";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let qt=(()=>{class h{}return h.\u0275prov=(0,E.Yz7)({token:h,providedIn:"root",factory:()=>new Rn((0,E.LFG)(ie),window)}),h})();class Rn{constructor(D,p){this.document=D,this.window=p,this.offset=()=>[0,0]}setOffset(D){this.offset=Array.isArray(D)?()=>D:D}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(D){this.supportsScrolling()&&this.window.scrollTo(D[0],D[1])}scrollToAnchor(D){if(!this.supportsScrolling())return;const p=function xr(h,D){const p=h.getElementById(D)||h.getElementsByName(D)[0];if(p)return p;if("function"==typeof h.createTreeWalker&&h.body&&(h.body.createShadowRoot||h.body.attachShadow)){const C=h.createTreeWalker(h.body,NodeFilter.SHOW_ELEMENT);let T=C.currentNode;for(;T;){const B=T.shadowRoot;if(B){const Y=B.getElementById(D)||B.querySelector(`[name="${D}"]`);if(Y)return Y}T=C.nextNode()}}return null}(this.document,D);p&&(this.scrollToElement(p),p.focus())}setHistoryScrollRestoration(D){if(this.supportScrollRestoration()){const p=this.window.history;p&&p.scrollRestoration&&(p.scrollRestoration=D)}}scrollToElement(D){const p=D.getBoundingClientRect(),C=p.left+this.window.pageXOffset,T=p.top+this.window.pageYOffset,B=this.offset();this.window.scrollTo(C-B[0],T-B[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const D=fr(this.window.history)||fr(Object.getPrototypeOf(this.window.history));return!(!D||!D.writable&&!D.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function fr(h){return Object.getOwnPropertyDescriptor(h,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Fs{}
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
     */},256:($e,fe,x)=>{x.d(fe,{deG:()=>du,tb:()=>_g,AFp:()=>Dg,ip1:()=>vg,CZH:()=>Va,hGG:()=>T0,z2F:()=>Ha,sBO:()=>f0,Sil:()=>z_,_Vd:()=>vs,EJc:()=>$_,Xts:()=>$u,SBq:()=>Ds,lqb:()=>ni,qLn:()=>ss,vpe:()=>nr,XFs:()=>_e,OlP:()=>st,zs3:()=>Zn,ZZ4:()=>wc,aQg:()=>_c,soG:()=>Ba,YKP:()=>bp,h0i:()=>Co,PXZ:()=>o0,R0b:()=>vn,FiY:()=>Xi,Lbi:()=>B_,g9A:()=>wg,Qsj:()=>Cw,FYo:()=>Tp,JOm:()=>Qn,tp0:()=>es,Rgc:()=>Es,dDg:()=>e0,eoX:()=>Ag,GfV:()=>Ap,s_b:()=>La,ifc:()=>qe,MMx:()=>Ql,hM9:()=>Aw,eFA:()=>Pg,G48:()=>d0,f3M:()=>$c,_c5:()=>S0,c2e:()=>H_,zSh:()=>Yu,wAp:()=>Re,vHH:()=>ce,lri:()=>Sg,rWj:()=>Tg,D6c:()=>A0,cg1:()=>Vl,kL8:()=>Zh,dqk:()=>ft,sIi:()=>ds,CqO:()=>th,QGY:()=>Nl,QP$:()=>Ei,F4k:()=>eh,RDi:()=>vm,AaK:()=>ue,TTD:()=>Tr,uIk:()=>Al,Suo:()=>Kp,Xpm:()=>sr,lG2:()=>N,Yz7:()=>wt,cJS:()=>bn,oAB:()=>Ir,Yjl:()=>A,Y36:()=>ii,_UZ:()=>Rl,qZA:()=>Ta,TgZ:()=>Sa,LFG:()=>Rt,$8M:()=>Wi,$Z:()=>lf,NdJ:()=>Ol,CRH:()=>Qp,iGM:()=>qp,LSH:()=>Iu,_uU:()=>xh});var E=x(189),w=x(421),re=x(515),X=x(669),V=x(76),ie=x(579),Pe=x(727),we=x(306),te=x(698),W=x(961),De=x(482);function pe(e,t,...n){return!0===t?(e(),null):!1===t?null:t(...n).pipe((0,te.q)(1)).subscribe(()=>e())}
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
     */function me(e){for(let t in e)if(e[t]===me)return t;throw Error("Could not find renamed property on target object.")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ue(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ue).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Ge(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ze=me({__forward_ref__:me});function Qe(e){return e.__forward_ref__=Qe,e.toString=function(){return ue(this())},e}function H(e){return function ee(e){return"function"==typeof e&&e.hasOwnProperty(Ze)&&e.__forward_ref__===Qe}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e)?e():e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ce extends Error{constructor(t,n){super(function ve(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function K(e){return"string"==typeof e?e:null==e?"":String(e)}function G(e,t){throw new ce(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function dt(e,t){null==e&&function Fe(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}(t,e,null,"!=")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function wt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function bn(e){return{providers:e.providers||[],imports:e.imports||[]}}function dn(e){return ln(e,or)||ln(e,ir)}function ln(e,t){return e.hasOwnProperty(t)?e[t]:null}function Hn(e){return e&&(e.hasOwnProperty(Bt)||e.hasOwnProperty(Ht))?e[Bt]:null}const or=me({\u0275prov:me}),Bt=me({\u0275inj:me}),ir=me({ngInjectableDef:me}),Ht=me({ngInjectorDef:me});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var _e=(()=>((_e=_e||{})[_e.Default=0]="Default",_e[_e.Host=1]="Host",_e[_e.Self=2]="Self",_e[_e.SkipSelf=4]="SkipSelf",_e[_e.Optional=8]="Optional",_e))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let lt;function Se(e){const t=lt;return lt=e,t}function Yr(e,t,n){const r=dn(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&_e.Optional?null:void 0!==t?t:void G(ue(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function rt(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var Tt=(()=>((Tt=Tt||{})[Tt.OnPush=0]="OnPush",Tt[Tt.Default=1]="Default",Tt))(),qe=(()=>{return(e=qe||(qe={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",qe;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ft=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Jt={},de=[],fn=me({\u0275cmp:me}),hn=me({\u0275dir:me}),Sn=me({\u0275pipe:me}),$n=me({\u0275mod:me}),At=me({\u0275fac:me}),Dn=me({__NG_ELEMENT_ID__:me});
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
let Mo=0;function sr(e){return rt(()=>{const n=!0===e.standalone,r={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===Tt.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||de,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||qe.Emulated,id:"c"+Mo++,styles:e.styles||de,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.dependencies,s=e.features;return o.inputs=en(e.inputs,r),o.outputs=en(e.outputs),s&&s.forEach(c=>c(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(_r).filter(Er):null,o.pipeDefs=i?()=>("function"==typeof i?i():i).map(U).filter(Er):null,o})}function _r(e){return M(e)||P(e)}function Er(e){return null!==e}const qr={};function Ir(e){return rt(()=>{const t={type:e.type,bootstrap:e.bootstrap||de,declarations:e.declarations||de,imports:e.imports||de,exports:e.exports||de,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&(qr[e.id]=e.type),t})}function en(e,t){if(null==e)return Jt;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const N=sr;function A(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function M(e){return e[fn]||null}function P(e){return e[hn]||null}function U(e){return e[Sn]||null}function ye(e,t){const n=e[$n]||null;if(!n&&!0===t)throw new Error(`Type ${ue(e)} does not have '\u0275mod' property.`);return n}
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
function Ot(e){return Array.isArray(e)&&"object"==typeof e[1]}function Gt(e){return Array.isArray(e)&&!0===e[1]}function cr(e){return 0!=(8&e.flags)}function rn(e){return 2==(2&e.flags)}function Ct(e){return 1==(1&e.flags)}function Yt(e){return null!==e.template}function So(e){return 0!=(256&e[2])}
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
function _n(e,t){return e.hasOwnProperty(At)?e[At]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class xi{constructor(t,n,r){this.previousValue=t,this.currentValue=n,this.firstChange=r}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Tr(){return Fo}function Fo(e){return e.type.prototype.ngOnChanges&&(e.setInput=Ar),No}function No(){const e=Xr(this),t=e?.current;if(t){const n=e.previous;if(n===Jt)e.previous=t;else for(let r in t)n[r]=t[r];e.current=null,this.ngOnChanges(t)}}function Ar(e,t,n,r){const o=Xr(e)||function Rs(e,t){return e[Ri]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:Jt,current:null}),i=o.current||(o.current={}),s=o.previous,c=this.declaredInputs[n],d=s[c];i[c]=new xi(d&&d.currentValue,t,s===Jt),e[r]=t}Tr.ngInherit=!0;const Ri="__ngSimpleChanges__";function Xr(e){return e[Ri]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function h(e){for(;Array.isArray(e);)e=e[0];return e}function T(e,t){return h(t[e.index])}function Y(e,t){return e.data[t]}function He(e,t){const n=t[e];return Ot(n)?n:n[0]}function ot(e){return 4==(4&e[2])}function Xe(e){return 64==(64&e[2])}function ct(e,t){return null==t?null:e[t]}function it(e){e[18]=0}function Mt(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const xe={lFrame:Or(null),bindingsEnabled:!0};function ro(){return xe.bindingsEnabled}function z(){return xe.lFrame.lView}function Ue(){return xe.lFrame.tView}function bt(){let e=Ns();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ns(){return xe.lFrame.currentTNode}function En(e,t){const n=xe.lFrame;n.currentTNode=e,n.isParent=t}function Rr(){return xe.lFrame.isParent}function Ni(e,t){const n=xe.lFrame;n.bindingIndex=n.bindingRootIndex=e,Bo(t)}function Bo(e){xe.lFrame.currentDirectiveIndex=e}function ks(){return xe.lFrame.currentQueryIndex}function Oi(e){xe.lFrame.currentQueryIndex=e}function Ho(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Nr(e,t,n){if(n&_e.SkipSelf){let o=t,i=e;for(;!(o=o.parent,null!==o||n&_e.Host||(o=Ho(i),null===o||(i=i[15],10&o.type))););if(null===o)return!1;t=o,e=i}const r=xe.lFrame=js();return r.currentTNode=t,r.lView=e,!0}function Li(e){const t=js(),n=e[1];xe.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function js(){const e=xe.lFrame,t=null===e?null:e.child;return null===t?Or(e):t}function Or(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Vs(){const e=xe.lFrame;return xe.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Bs=Vs;function ki(){const e=Vs();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Yn(e){xe.lFrame.selectedIndex=e}function Uo(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const i=e.data[n].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:c,ngAfterViewInit:d,ngAfterViewChecked:m,ngOnDestroy:y}=i;s&&(e.contentHooks||(e.contentHooks=[])).push(-n,s),c&&((e.contentHooks||(e.contentHooks=[])).push(n,c),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,c)),d&&(e.viewHooks||(e.viewHooks=[])).push(-n,d),m&&((e.viewHooks||(e.viewHooks=[])).push(n,m),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,m)),null!=y&&(e.destroyHooks||(e.destroyHooks=[])).push(n,y)}}function $o(e,t,n){Vi(e,t,3,n)}function ao(e,t,n,r){(3&e[2])===n&&Vi(e,t,n,r)}function Us(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Vi(e,t,n,r){const i=r??-1,s=t.length-1;let c=0;for(let d=void 0!==r?65535&e[18]:0;d<s;d++)if("number"==typeof t[d+1]){if(c=t[d],null!=r&&c>=r)break}else t[d]<0&&(e[18]+=65536),(c<i||-1==i)&&($s(e,n,t,d),e[18]=(4294901760&e[18])+d+2),d++}function $s(e,t,n,r){const o=n[r]<0,i=n[r+1],c=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{i.call(c)}finally{}}}else try{i.call(c)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Lr{constructor(t,n,r){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=r}}function uo(e,t,n){let r=0;for(;r<n.length;){const o=n[r];if("number"==typeof o){if(0!==o)break;r++;const i=n[r++],s=n[r++],c=n[r++];e.setAttribute(t,s,c,i)}else{const i=o,s=n[++r];zs(i)?e.setProperty(t,i,s):e.setAttribute(t,i,s),r++}}return r}function Go(e){return 3===e||4===e||6===e}function zs(e){return 64===e.charCodeAt(0)}function zo(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Ws(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Ws(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const c=e[i++];if("number"==typeof c){if(c===t){s=-1;break}if(c>t){s=i-1;break}}}for(;i<e.length;){const c=e[i];if("number"==typeof c)break;if(c===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Hi(e){return-1!==e}function qn(e){return 32767&e}function kr(e,t){let n=function Ui(e){return e>>16}(e),r=t;for(;n>0;)r=r[15],n--;return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let $i=!0;function lo(e){const t=$i;return $i=e,t}let ou=0;const pt={};function jr(e,t){const n=fo(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,co(r.data,e),co(t,null),co(r.blueprint,null));const o=Wo(e,t),i=e.injectorIndex;if(Hi(o)){const s=qn(o),c=kr(o,t),d=c[1].data;for(let m=0;m<8;m++)t[i+m]=c[s+m]|d[s+m]}return t[i+8]=o,i}function co(e,t){e.push(0,0,0,0,0,0,0,0,t)}function fo(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function Wo(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){if(r=Xs(o),null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Yo(e,t,n){!function iu(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(Dn)&&(r=n[Dn]),null==r&&(r=n[Dn]=ou++);const o=255&r;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Qs(e,t,n){if(n&_e.Optional)return e;G()}function Gi(e,t,n,r){if(n&_e.Optional&&void 0===r&&(r=null),0==(n&(_e.Self|_e.Host))){const o=e[9],i=Se(void 0);try{return o?o.get(t,r,n&_e.Optional):Yr(t,r,n&_e.Optional)}finally{Se(i)}}return Qs(r,0,n)}function su(e,t,n,r=_e.Default,o){if(null!==e){if(1024&t[2]){const s=function cu(e,t,n,r,o){let i=e,s=t;for(;null!==i&&null!==s&&1024&s[2]&&!(256&s[2]);){const c=au(i,s,n,r|_e.Self,pt);if(c!==pt)return c;let d=i.parent;if(!d){const m=s[21];if(m){const y=m.get(n,pt,r);if(y!==pt)return y}d=Xs(s),s=s[15]}i=d}return o}(e,t,n,r,pt);if(s!==pt)return s}const i=au(e,t,n,r,pt);if(i!==pt)return i}return Gi(t,n,r,o)}function au(e,t,n,r,o){const i=function Nn(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Dn)?e[Dn]:void 0;return"number"==typeof t?t>=0?255&t:Js:t}(n);if("function"==typeof i){if(!Nr(t,e,r))return r&_e.Host?Qs(o,0,r):Gi(t,n,r,o);try{const s=i(r);if(null!=s||r&_e.Optional)return s;G()}finally{Bs()}}else if("number"==typeof i){let s=null,c=fo(e,t),d=-1,m=r&_e.Host?t[16][6]:null;for((-1===c||r&_e.SkipSelf)&&(d=-1===c?Wo(e,t):t[c+8],-1!==d&&qo(r,!1)?(s=t[1],c=qn(d),t=kr(d,t)):c=-1);-1!==c;){const y=t[1];if(uu(i,c,y.data)){const _=Zs(c,t,n,s,r,m);if(_!==pt)return _}d=t[c+8],-1!==d&&qo(r,t[1].data[c+8]===m)&&uu(i,c,t)?(s=y,c=qn(d),t=kr(d,t)):c=-1}}return o}function Zs(e,t,n,r,o,i){const s=t[1],c=s.data[e+8],y=ho(c,s,n,null==r?rn(c)&&$i:r!=s&&0!=(3&c.type),o&_e.Host&&i===c);return null!==y?po(t,s,y,c):pt}function ho(e,t,n,r,o){const i=e.providerIndexes,s=t.data,c=1048575&i,d=e.directiveStart,y=i>>20,S=o?c+y:e.directiveEnd;for(let R=r?c:c+y;R<S;R++){const $=s[R];if(R<d&&n===$||R>=d&&$.type===n)return R}if(o){const R=s[d];if(R&&Yt(R)&&R.type===n)return d}return null}function po(e,t,n,r){let o=e[n];const i=t.data;if(function Gs(e){return e instanceof Lr}(o)){const s=o;s.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function F(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new ce(-200,`Circular dependency in DI detected for ${e}${n}`)}(function ae(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():K(e)}(i[n]));const c=lo(s.canSeeViewProviders);s.resolving=!0;const d=s.injectImpl?Se(s.injectImpl):null;Nr(e,r,_e.Default);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function eu(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const s=Fo(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,s),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,s)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==d&&Se(d),lo(c),s.resolving=!1,Bs()}}return o}function uu(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function qo(e,t){return!(e&_e.Self||e&_e.Host&&t)}class pr{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,r){return su(this._tNode,this._lView,t,r,n)}}function Js(){return new pr(bt(),z())}function Xs(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Wi(e){return function Ks(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const r=n.length;let o=0;for(;o<r;){const i=n[o];if(Go(i))break;if(0===i)o+=2;else if("number"==typeof i)for(o++;o<r&&"string"==typeof n[o];)o++;else{if(i===t)return n[o+1];o+=2}}}return null}(bt(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Br="__parameters__";function Hr(e,t,n){return rt(()=>{const r=function Yi(e){return function(...n){if(e){const r=e(...n);for(const o in r)this[o]=r[o]}}}(t);function o(...i){if(this instanceof o)return r.apply(this,i),this;const s=new o(...i);return c.annotation=s,c;function c(d,m,y){const _=d.hasOwnProperty(Br)?d[Br]:Object.defineProperty(d,Br,{value:[]})[Br];for(;_.length<=y;)_.push(null);return(_[y]=_[y]||[]).push(s),d}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class st{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=wt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const du=new st("AnalyzeForEntryComponents");function b(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),b(r,t)):t!==e&&t.push(r)}return t}function O(e,t){e.forEach(n=>Array.isArray(n)?O(n,t):t(n))}function Z(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Ne(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Qi={},pu="__NG_DI_FLAG__",ia="ngTempTokenPath",rm=/\n/gm,Hc="__source";let Zi;function sa(e){const t=Zi;return Zi=e,t}function im(e,t=_e.Default){if(void 0===Zi)throw new ce(-203,!1);return null===Zi?Yr(e,void 0,t):Zi.get(e,t&_e.Optional?null:void 0,t)}function Rt(e,t=_e.Default){return(function be(){return lt}()||im)(H(e),t)}function $c(e,t=_e.Default){return Rt(e,t)}function gu(e){const t=[];for(let n=0;n<e.length;n++){const r=H(e[n]);if(Array.isArray(r)){if(0===r.length)throw new ce(900,!1);let o,i=_e.Default;for(let s=0;s<r.length;s++){const c=r[s],d=sm(c);"number"==typeof d?-1===d?o=c.token:i|=d:o=c}t.push(Rt(o,i))}else t.push(Rt(r))}return t}function Ji(e,t){return e[pu]=t,e.prototype[pu]=t,e}function sm(e){return e[pu]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Xi=Ji(Hr("Optional"),8),es=Ji(Hr("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let yu;function vm(e){yu=e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class td{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const xm=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,Rm=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Pt=(()=>((Pt=Pt||{})[Pt.NONE=0]="NONE",Pt[Pt.HTML=1]="HTML",Pt[Pt.STYLE=2]="STYLE",Pt[Pt.SCRIPT=3]="SCRIPT",Pt[Pt.URL=4]="URL",Pt[Pt.RESOURCE_URL=5]="RESOURCE_URL",Pt))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Iu(e){const t=function is(){const e=z();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */();return t?t.sanitize(Pt.URL,e)||"":function rs(e,t){const n=function bm(e){return e instanceof td&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`)}return n===t}(e,"URL")?function Ur(e){return e instanceof td?e.changingThisBreaksApplicationSecurity:e}(e):function da(e){return(e=String(e)).match(xm)||e.match(Rm)?e:"unsafe:"+e}(K(e))}function bu(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ss{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&bu(t);for(;n&&bu(n);)n=bu(n);return n||null}}
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
const Su=new Map;let Xm=0;const Au="__ngContext__";function Qt(e,t){Ot(t)?(e[Au]=t[20],function ty(e){Su.set(e[20],e)}(t)):e[Au]=t}function as(e){const t=e[Au];return"number"==typeof t?function dd(e){return Su.get(e)||null}(t):t||null}function xu(e){const t=as(e);return t?Ot(t)?t:t.lView:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const cy=(()=>(typeof requestAnimationFrame<"u"&&requestAnimationFrame||setTimeout).bind(ft))();function mr(e){return e instanceof Function?e():e}
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
var Qn=(()=>((Qn=Qn||{})[Qn.Important=1]="Important",Qn[Qn.DashCase=2]="DashCase",Qn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Pu(e,t){return undefined(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function us(e){const t=e[3];return Gt(t)?t[3]:t}function Fu(e){return Cd(e[13])}function Nu(e){return Cd(e[4])}function Cd(e){for(;null!==e&&!Gt(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ti(e,t,n,r,o){if(null!=r){let i,s=!1;Gt(r)?i=r:Ot(r)&&(s=!0,r=r[0]);const c=h(r);0===e&&null!==n?null==o?bd(t,n,c):go(t,n,c,o||null,!0):1===e&&null!==n?go(t,n,c,o||null,!0):2===e?function Fd(e,t,n){const r=ha(e,t);r&&function by(e,t,n,r){e.removeChild(t,n,r)}(e,r,t,n)}(t,c,s):3===e&&t.destroyNode(c),null!=i&&function Ay(e,t,n,r,o){const i=n[7];i!==h(n)&&ti(t,e,r,i,o);for(let c=10;c<n.length;c++){const d=n[c];ls(d[1],d,e,t,r,i)}}(t,e,i,n,o)}}function Lu(e,t,n){return e.createElement(t,n)}function _d(e,t){const n=e[9],r=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,Mt(o,-1)),n.splice(r,1)}function ku(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&_d(o,r),t>0&&(e[n-1][4]=r[4]);const i=Ne(e,10+t);!function vy(e,t){ls(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(r[1],r);const s=i[19];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-65}return r}function Ed(e,t){if(!(128&t[2])){const n=t[11];n.destroyNode&&ls(e,t,n,3,null,null),function wy(e){let t=e[13];if(!t)return ju(e[1],e);for(;t;){let n=null;if(Ot(t))n=t[13];else{const r=t[10];r&&(n=r)}if(!n){for(;t&&!t[4]&&t!==e;)Ot(t)&&ju(t[1],t),t=t[3];null===t&&(t=e),Ot(t)&&ju(t[1],t),n=t&&t[4]}t=n}}(t)}}function ju(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function My(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const o=t[n[r]];if(!(o instanceof Lr)){const i=n[r+1];if(Array.isArray(i))for(let s=0;s<i.length;s+=2){const c=o[i[s]],d=i[s+1];try{d.call(c)}finally{}}else try{i.call(o)}finally{}}}}(e,t),function Iy(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let i=0;i<n.length-1;i+=2)if("string"==typeof n[i]){const s=n[i+1],c="function"==typeof s?s(t):h(t[s]),d=r[o=n[i+2]],m=n[i+3];"boolean"==typeof m?c.removeEventListener(n[i],d,m):m>=0?r[o=m]():r[o=-m].unsubscribe(),i+=2}else{const s=r[o=n[i+1]];n[i].call(s)}if(null!==r){for(let i=o+1;i<r.length;i++)r[i]();t[7]=null}}(e,t),1===t[1].type&&t[11].destroy();const n=t[17];if(null!==n&&Gt(t[3])){n!==t[3]&&_d(n,t);const r=t[19];null!==r&&r.detachView(e)}!function ny(e){Su.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function Id(e,t,n){return function Md(e,t,n){let r=t;for(;null!==r&&40&r.type;)r=(t=r).parent;if(null===r)return n[0];if(2&r.flags){const o=e.data[r.directiveStart].encapsulation;if(o===qe.None||o===qe.Emulated)return null}return T(r,n)}(e,t.parent,n)}function go(e,t,n,r,o){e.insertBefore(t,n,r,o)}function bd(e,t,n){e.appendChild(t,n)}function Sd(e,t,n,r,o){null!==r?go(e,t,n,r,o):bd(e,t,n)}function ha(e,t){return e.parentNode(t)}let xd=function Ad(e,t,n){return 40&e.type?T(e,n):null};function pa(e,t,n,r){const o=Id(e,r,t),i=t[11],c=function Td(e,t,n){return xd(e,t,n)}(r.parent||t[6],r,t);if(null!=o)if(Array.isArray(n))for(let d=0;d<n.length;d++)Sd(i,o,n[d],c,!1);else Sd(i,o,n,c,!1)}function ga(e,t){if(null!==t){const n=t.type;if(3&n)return T(t,e);if(4&n)return Bu(-1,e[t.index]);if(8&n){const r=t.child;if(null!==r)return ga(e,r);{const o=e[t.index];return Gt(o)?Bu(-1,o):h(o)}}if(32&n)return Pu(t,e)()||h(e[t.index]);{const r=Pd(e,t);return null!==r?Array.isArray(r)?r[0]:ga(us(e[16]),r):ga(e,t.next)}}return null}function Pd(e,t){return null!==t?e[16][6].projection[t.projection]:null}function Bu(e,t){const n=10+e+1;if(n<t.length){const r=t[n],o=r[1].firstChild;if(null!==o)return ga(r,o)}return t[7]}function Hu(e,t,n,r,o,i,s){for(;null!=n;){const c=r[n.index],d=n.type;if(s&&0===t&&(c&&Qt(h(c),r),n.flags|=4),64!=(64&n.flags))if(8&d)Hu(e,t,n.child,r,o,i,!1),ti(t,e,o,c,i);else if(32&d){const m=Pu(n,r);let y;for(;y=m();)ti(t,e,o,y,i);ti(t,e,o,c,i)}else 16&d?Nd(e,t,r,n,o,i):ti(t,e,o,c,i);n=s?n.projectionNext:n.next}}function ls(e,t,n,r,o,i){Hu(n,r,e.firstChild,t,o,i,!1)}function Nd(e,t,n,r,o,i){const s=n[16],d=s[6].projection[r.projection];if(Array.isArray(d))for(let m=0;m<d.length;m++)ti(t,e,o,d[m],i);else Hu(e,t,d,s[3],o,i,!0)}function Od(e,t,n){e.setAttribute(t,"style",n)}function Uu(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ld(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const i=t.length;if(o+i===r||e.charCodeAt(o+i)<=32)return o}n=o+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const kd="ng-template";function Ry(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==Ld(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function jd(e){return 4===e.type&&e.value!==kd}function Py(e,t,n){return t===(4!==e.type||n?e.value:kd)}function Fy(e,t,n){let r=4;const o=e.attrs||[],i=function Ly(e){for(let t=0;t<e.length;t++)if(Go(e[t]))return t;return e.length}(o);let s=!1;for(let c=0;c<t.length;c++){const d=t[c];if("number"!=typeof d){if(!s)if(4&r){if(r=2|1&r,""!==d&&!Py(e,d,n)||""===d&&1===t.length){if(On(r))return!1;s=!0}}else{const m=8&r?d:t[++c];if(8&r&&null!==e.attrs){if(!Ry(e.attrs,m,n)){if(On(r))return!1;s=!0}continue}const _=Ny(8&r?"class":d,o,jd(e),n);if(-1===_){if(On(r))return!1;s=!0;continue}if(""!==m){let S;S=_>i?"":o[_+1].toLowerCase();const R=8&r?S:null;if(R&&-1!==Ld(R,m,0)||2&r&&m!==S){if(On(r))return!1;s=!0}}}}else{if(!s&&!On(r)&&!On(d))return!1;if(s&&On(d))continue;s=!1,r=d|1&r}}return On(r)||s}function On(e){return 0==(1&e)}function Ny(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let i=!1;for(;o<t.length;){const s=t[o];if(s===e)return o;if(3===s||6===s)i=!0;else{if(1===s||2===s){let c=t[++o];for(;"string"==typeof c;)c=t[++o];continue}if(4===s)break;if(0===s){o+=4;continue}}o+=i?1:2}return-1}return function ky(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function Vd(e,t,n=!1){for(let r=0;r<t.length;r++)if(Fy(e,t[r],n))return!0;return!1}function Bd(e,t){return e?":not("+t.trim()+")":t}function Vy(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const c=e[++n];o+="["+s+(c.length>0?'="'+c+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""!==o&&!On(s)&&(t+=Bd(i,o),o=""),r=s,i=i||!On(r);n++}return""!==o&&(t+=Bd(i,o)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Be={};
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
const $u=new st("ENVIRONMENT_INITIALIZER"),zd=new st("INJECTOR_DEF_TYPES");
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
function qy(...e){return{\u0275providers:Wd(0,e)}}function Wd(e,...t){const n=[],r=new Set;let o;return O(t,i=>{const s=i;Gu(s,n,[],r)&&(o||(o=[]),o.push(s))}),void 0!==o&&Yd(o,n),n}function Yd(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];O(o,i=>{t.push(i)})}}function Gu(e,t,n,r){if(!(e=H(e)))return!1;let o=null,i=Hn(e);const s=!i&&M(e);if(i||s){if(s&&!s.standalone)return!1;o=e}else{const d=e.ngModule;if(i=Hn(d),!i)return!1;o=d}const c=r.has(o);if(s){if(c)return!1;if(r.add(o),s.dependencies){const d="function"==typeof s.dependencies?s.dependencies():s.dependencies;for(const m of d)Gu(m,t,n,r)}}else{if(!i)return!1;{if(null!=i.imports&&!c){let m;r.add(o);try{O(i.imports,y=>{Gu(y,t,n,r)&&(m||(m=[]),m.push(y))})}finally{}void 0!==m&&Yd(m,t)}if(!c){const m=_n(o)||(()=>new o);t.push({provide:o,useFactory:m,deps:de},{provide:zd,useValue:o,multi:!0},{provide:$u,useValue:()=>Rt(o),multi:!0})}const d=i.providers;null==d||c||O(d,y=>{t.push(y)})}}return o!==e&&void 0!==e.providers}const Ky=me({provide:String,useValue:me});function zu(e){return null!==e&&"object"==typeof e&&Ky in e}function mo(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Wu=new st("INJECTOR",-1);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Qd{get(t,n=Qi){if(n===Qi){const r=new Error(`NullInjectorError: No provider for ${ue(t)}!`);throw r.name="NullInjectorError",r}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Yu=new st("Set Injector scope."),ma={},Zy={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let qu;function Ku(){return void 0===qu&&(qu=new Qd),qu}class ni{}class Zd extends ni{constructor(t,n,r,o){super(),this.parent=n,this.source=r,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Zu(t,s=>this.processProvider(s)),this.records.set(Wu,ri(void 0,this)),o.has("environment")&&this.records.set(ni,ri(void 0,this));const i=this.records.get(Yu);null!=i&&"string"==typeof i.value&&this.scopes.add(i.value),this.injectorDefTypes=new Set(this.get(zd.multi,de,_e.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}get(t,n=Qi,r=_e.Default){this.assertNotDestroyed();const o=sa(this),i=Se(void 0);try{if(!(r&_e.SkipSelf)){let c=this.records.get(t);if(void 0===c){const d=function nv(e){return"function"==typeof e||"object"==typeof e&&e instanceof st}(t)&&dn(t);c=d&&this.injectableDefInScope(d)?ri(Qu(t),ma):null,this.records.set(t,c)}if(null!=c)return this.hydrate(t,c)}return(r&_e.Self?Ku():this.parent).get(t,n=r&_e.Optional&&n===Qi?null:n)}catch(s){if("NullInjectorError"===s.name){if((s[ia]=s[ia]||[]).unshift(ue(t)),o)throw s;return function am(e,t,n,r){const o=e[ia];throw t[Hc]&&o.unshift(t[Hc]),e.message=function um(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=ue(t);if(Array.isArray(t))o=t.map(ue).join(" -> ");else if("object"==typeof t){let i=[];for(let s in t)if(t.hasOwnProperty(s)){let c=t[s];i.push(s+":"+("string"==typeof c?JSON.stringify(c):ue(c)))}o=`{${i.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(rm,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e[ia]=null,e}(s,t,"R3InjectorError",this.source)}throw s}finally{Se(i),sa(o)}}resolveInjectorInitializers(){const t=sa(this),n=Se(void 0);try{const r=this.get($u.multi,de,_e.Self);for(const o of r)o()}finally{sa(t),Se(n)}}toString(){const t=[],n=this.records;for(const r of n.keys())t.push(ue(r));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new ce(205,!1)}processProvider(t){let n=mo(t=H(t))?t:H(t&&t.provide);const r=function Xy(e){return zu(e)?ri(void 0,e.useValue):ri(function Jd(e,t,n){let r;if(mo(e)){const o=H(e);return _n(o)||Qu(o)}if(zu(e))r=()=>H(e.useValue);else if(function Kd(e){return!(!e||!e.useFactory)}(e))r=()=>e.useFactory(...gu(e.deps||[]));else if(function qd(e){return!(!e||!e.useExisting)}(e))r=()=>Rt(H(e.useExisting));else{const o=H(e&&(e.useClass||e.provide));if(!function ev(e){return!!e.deps}(e))return _n(o)||Qu(o);r=()=>new o(...gu(e.deps))}return r}(e),ma)}(t);if(mo(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=ri(void 0,ma,!0),o.factory=()=>gu(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,r)}hydrate(t,n){return n.value===ma&&(n.value=Zy,n.value=n.factory()),"object"==typeof n.value&&n.value&&function tv(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=H(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Qu(e){const t=dn(e),n=null!==t?t.factory:_n(e);if(null!==n)return n;if(e instanceof st)throw new ce(204,!1);if(e instanceof Function)return function Jy(e){const t=e.length;if(t>0)throw function le(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}(t,"?"),new ce(204,!1);const n=function Ke(e){const t=e&&(e[or]||e[ir]);if(t){const n=function Bn(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new ce(204,!1)}function ri(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function rv(e){return!!e.\u0275providers}function Zu(e,t){for(const n of e)Array.isArray(n)?Zu(n,t):rv(n)?Zu(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xd(e,t=null,n=null,r){const o=ef(e,t,n,r);return o.resolveInjectorInitializers(),o}function ef(e,t=null,n=null,r,o=new Set){const i=[n||de,qy(e)];return r=r||("object"==typeof e?void 0:ue(e)),new Zd(i,t||Ku(),r||null,o)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let Zn=(()=>{class e{static create(n,r){if(Array.isArray(n))return Xd({name:""},r,n,"");{const o=n.name??"";return Xd({name:o},n.parent,n.providers,o)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=Qi,e.NULL=new Qd,e.\u0275prov=wt({token:e,providedIn:"any",factory:()=>Rt(Wu)}),e.__NG_ELEMENT_ID__=-1,e})();
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
function ii(e,t=_e.Default){const n=z();return null===n?Rt(e,t):su(bt(),n,H(e),t)}function lf(){throw new Error("invalid")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ef(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const s=e.data[i];Oi(o),s.contentQueries(2,t[i],i)}}}function wa(e,t,n,r,o,i,s,c,d,m,y){const _=t.blueprint.slice();return _[0]=o,_[2]=76|r,(null!==y||e&&1024&e[2])&&(_[2]|=1024),it(_),_[3]=_[15]=e,_[8]=n,_[10]=s||e&&e[10],_[11]=c||e&&e[11],_[12]=d||e&&e[12]||null,_[9]=m||e&&e[9]||null,_[6]=i,_[20]=function ey(){return Xm++}(),_[21]=y,_[16]=2==t.type?e[16]:_,_}function si(e,t,n,r,o){let i=e.data[t];if(null===i)i=function ml(e,t,n,r,o){const i=Ns(),s=Rr(),d=e.data[t]=function Lv(e,t,n,r,o,i){return{type:n,index:r,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=d),null!==i&&(s?null==i.child&&null!==d.parent&&(i.child=d):null===i.next&&(i.next=d)),d}(e,t,n,r,o),function Ya(){return xe.lFrame.inI18n}()&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=function io(){const e=xe.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}();i.injectorIndex=null===s?-1:s.injectorIndex}return En(i,!0),i}function ai(e,t,n,r){if(0===n)return-1;const o=t.length;for(let i=0;i<n;i++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function _a(e,t,n){Li(t);try{const r=e.viewQuery;null!==r&&bl(1,r,n);const o=e.template;null!==o&&If(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Ef(e,t),e.staticViewQueries&&bl(2,e.viewQuery,n);const i=e.components;null!==i&&function Pv(e,t){for(let n=0;n<t.length;n++)eD(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),r}finally{t[2]&=-5,ki()}}function cs(e,t,n,r){const o=t[2];if(128!=(128&o)){Li(t);try{it(t),function Os(e){return xe.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&If(e,t,n,2,r);const s=3==(3&o);if(s){const m=e.preOrderCheckHooks;null!==m&&$o(t,m,null)}else{const m=e.preOrderHooks;null!==m&&ao(t,m,0,null),Us(t,0)}if(function Jv(e){for(let t=Fu(e);null!==t;t=Nu(t)){if(!t[2])continue;const n=t[9];for(let r=0;r<n.length;r++){const o=n[r],i=o[3];0==(512&o[2])&&Mt(i,1),o[2]|=512}}}(t),function Zv(e){for(let t=Fu(e);null!==t;t=Nu(t))for(let n=10;n<t.length;n++){const r=t[n],o=r[1];Xe(r)&&cs(o,r,o.template,r[8])}}(t),null!==e.contentQueries&&Ef(e,t),s){const m=e.contentCheckHooks;null!==m&&$o(t,m)}else{const m=e.contentHooks;null!==m&&ao(t,m,1),Us(t,1)}!function xv(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let r=0;r<n.length;r++){const o=n[r];if(o<0)Yn(~o);else{const i=o,s=n[++r],c=n[++r];Ni(s,i),c(2,t[i])}}}finally{Yn(-1)}}(e,t);const c=e.components;null!==c&&function Rv(e,t){for(let n=0;n<t.length;n++)Xv(e,t[n])}(t,c);const d=e.viewQuery;if(null!==d&&bl(2,d,r),s){const m=e.viewCheckHooks;null!==m&&$o(t,m)}else{const m=e.viewHooks;null!==m&&ao(t,m,2),Us(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,Mt(t[3],-1))}finally{ki()}}}function Fv(e,t,n,r){const o=t[10],s=ot(t);try{!s&&o.begin&&o.begin(),s&&_a(e,t,r),cs(e,t,n,r)}finally{!s&&o.end&&o.end()}}function If(e,t,n,r,o){const i=function zt(){return xe.lFrame.selectedIndex}(),s=2&r;try{Yn(-1),s&&t.length>22&&function Hd(e,t,n,r){if(!r)if(3==(3&t[2])){const i=e.preOrderCheckHooks;null!==i&&$o(t,i,n)}else{const i=e.preOrderHooks;null!==i&&ao(t,i,0,n)}Yn(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,t,22,!1),n(r,o)}finally{Yn(i)}}function bf(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Dl(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Dl(e,t,n,r,o,i,s,c,d,m){const y=22+r,_=y+o,S=function Nv(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Be);return n}(y,_),R="function"==typeof m?m():m;return S[1]={type:e,blueprint:S,template:n,queries:null,viewQuery:c,declTNode:t,data:S.slice().fill(null,y),bindingStartIndex:y,expandoStartIndex:_,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:d,consts:R,incompleteFirstPass:!1}}function Sf(e,t,n,r){const o=Lf(t);null===n?o.push(r):(o.push(n),e.firstCreatePass&&kf(e).push(r,o.length-1))}function Tf(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Af(e,t,n,r,o,i){const s=i.hostBindings;if(s){let c=e.hostBindingOpCodes;null===c&&(c=e.hostBindingOpCodes=[]);const d=~t.index;(function Uv(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(c)!=d&&c.push(d),c.push(r,o,s)}}function xf(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Rf(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Yv(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Yt(t)&&(n[""]=e)}}function Pf(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Ff(e,t,n,r,o){e.data[r]=o;const i=o.factory||(o.factory=_n(o.type)),s=new Lr(i,Yt(o),ii);e.blueprint[r]=s,n[r]=s,Af(e,t,0,r,ai(e,n,o.hostVars,Be),o)}function qv(e,t,n){const r=T(t,e),o=bf(n),i=e[10],s=Ea(e,wa(e,o,null,n.onPush?32:16,r,t,i,i.createRenderer(r,n),null,null,null));e[t.index]=s}function Jn(e,t,n,r,o,i){const s=T(e,t);!function wl(e,t,n,r,o,i,s){if(null==i)e.removeAttribute(t,o,n);else{const c=null==s?K(i):s(i,r||"",o);e.setAttribute(t,o,c,n)}}(t[11],s,i,e.value,n,r,o)}function Kv(e,t,n,r,o,i){const s=i[t];if(null!==s){const c=r.setInput;for(let d=0;d<s.length;){const m=s[d++],y=s[d++],_=s[d++];null!==c?r.setInput(n,_,m,y):n[y]=_}}}function Qv(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Xv(e,t){const n=He(t,e);if(Xe(n)){const r=n[1];48&n[2]?cs(r,n,r.template,n[8]):n[5]>0&&_l(n)}}function _l(e){for(let r=Fu(e);null!==r;r=Nu(r))for(let o=10;o<r.length;o++){const i=r[o];if(512&i[2]){const s=i[1];cs(s,i,s.template,i[8])}else i[5]>0&&_l(i)}const n=e[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=He(n[r],e);Xe(o)&&o[5]>0&&_l(o)}}function eD(e,t){const n=He(t,e),r=n[1];(function tD(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(r,n),_a(r,n,n[8])}function Ea(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function El(e){for(;e;){e[2]|=32;const t=us(e);if(So(e)&&!t)return e;e=t}return null}function Of(e){!function Il(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=xu(n);if(null!==r){const o=r[1];Fv(o,r,o.template,n)}}}(e[8])}function bl(e,t,n){Oi(0),t(e,n)}const rD=(()=>Promise.resolve(null))();function Lf(e){return e[7]||(e[7]=[])}function kf(e){return e.cleanup||(e.cleanup=[])}function Vf(e,t){const n=e[9],r=n?n.get(ss,null):null;r&&r.handleError(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ia(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const c=t[s];"number"==typeof c?i=c:1==i?o=Ge(o,c):2==i&&(r=Ge(r,c+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function aD(){const e=bt();Uo(z()[1],e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Ma=null;function yo(){if(!Ma){const e=ft.Symbol;if(e&&e.iterator)Ma=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const r=t[n];"entries"!==r&&"size"!==r&&Map.prototype[r]===Map.prototype.entries&&(Ma=r)}}}return Ma}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ds(e){return!!Tl(e)&&(Array.isArray(e)||!(e instanceof Map)&&yo()in e)}function Tl(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
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
function Al(e,t,n,r){const o=z();return function Zt(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}(o,function Pr(){return xe.lFrame.bindingIndex++}(),t)&&(Ue(),Jn(function yt(){const e=xe.lFrame;return Y(e.tView,e.selectedIndex)}(),o,e,t,n,r)),Al}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xl(e,t,n,r,o){const s=o?"class":"style";!function Bf(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],c=n[i++],d=t[s],m=e.data[s];null!==m.setInput?m.setInput(d,o,r,c):d[c]=o}}(e,n,t.inputs[s],s,r)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Sa(e,t,n,r){const o=z(),i=Ue(),s=22+e,c=o[11],d=o[s]=Lu(c,t,function Xa(){return xe.lFrame.currentNamespace}()),m=i.firstCreatePass?function ID(e,t,n,r,o,i,s){const c=t.consts,m=si(t,e,2,o,ct(c,i));return function Cl(e,t,n,r){let o=!1;if(ro()){const i=function zv(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Vd(n,s.selectors,!1)&&(o||(o=[]),Yo(jr(n,t),e,s.type),Yt(s)?(Rf(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){o=!0,Pf(n,e.data.length,i.length);for(let y=0;y<i.length;y++){const _=i[y];_.providersResolver&&_.providersResolver(_)}let c=!1,d=!1,m=ai(e,t,i.length,null);for(let y=0;y<i.length;y++){const _=i[y];n.mergedAttrs=zo(n.mergedAttrs,_.hostAttrs),Ff(e,n,t,m,_),Yv(m,_,s),null!==_.contentQueries&&(n.flags|=8),(null!==_.hostBindings||null!==_.hostAttrs||0!==_.hostVars)&&(n.flags|=128);const S=_.type.prototype;!c&&(S.ngOnChanges||S.ngOnInit||S.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),c=!0),!d&&(S.ngOnChanges||S.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),d=!0),m++}!function kv(e,t){const r=t.directiveEnd,o=e.data,i=t.attrs,s=[];let c=null,d=null;for(let m=t.directiveStart;m<r;m++){const y=o[m],_=y.inputs,S=null===i||jd(t)?null:Qv(_,i);s.push(S),c=Tf(_,m,c),d=Tf(y.outputs,m,d)}null!==c&&(c.hasOwnProperty("class")&&(t.flags|=16),c.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=s,t.inputs=c,t.outputs=d}(e,n)}s&&function Wv(e,t,n){if(t){const r=e.localNames=[];for(let o=0;o<t.length;o+=2){const i=n[t[o+1]];if(null==i)throw new ce(-301,!1);r.push(t[o],i)}}}(n,r,s)}return n.mergedAttrs=zo(n.mergedAttrs,n.attrs),o}(t,n,m,ct(c,s)),null!==m.attrs&&Ia(m,m.attrs,!1),null!==m.mergedAttrs&&Ia(m,m.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,m),m}(s,i,o,0,t,n,r):i.data[s];En(m,!0);const y=m.mergedAttrs;null!==y&&uo(c,d,y);const _=m.classes;null!==_&&Uu(c,d,_);const S=m.styles;return null!==S&&Od(c,d,S),64!=(64&m.flags)&&pa(i,o,d,m),0===function Kt(){return xe.lFrame.elementDepthCount}()&&Qt(d,o),function Oo(){xe.lFrame.elementDepthCount++}(),Ct(m)&&(function yl(e,t,n){!ro()||(function $v(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||jr(n,t),Qt(r,t);const s=n.initialInputs;for(let c=o;c<i;c++){const d=e.data[c],m=Yt(d);m&&qv(t,n,d);const y=po(t,e,c,n);Qt(y,t),null!==s&&Kv(0,c-o,y,d,0,s),m&&(He(n.index,t)[8]=y)}}(e,t,n,T(n,t)),128==(128&n.flags)&&function Gv(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=n.index,s=function qa(){return xe.lFrame.currentDirectiveIndex}();try{Yn(i);for(let c=r;c<o;c++){const d=e.data[c],m=t[c];Bo(c),(null!==d.hostBindings||0!==d.hostVars||null!==d.hostAttrs)&&xf(d,m)}}finally{Yn(-1),Bo(s)}}(e,t,n))}(i,o,m),function Mf(e,t,n){if(cr(t)){const o=t.directiveEnd;for(let i=t.directiveStart;i<o;i++){const s=e.data[i];s.contentQueries&&s.contentQueries(1,n[i],i)}}}(i,m,o)),null!==r&&function vl(e,t,n=T){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],c=-1===s?n(t,e):e[s];e[o++]=c}}}(o,m),Sa}function Ta(){let e=bt();Rr()?function jo(){xe.lFrame.isParent=!1}():(e=e.parent,En(e,!1));const t=e;!function no(){xe.lFrame.elementDepthCount--}();const n=Ue();return n.firstCreatePass&&(Uo(n,e),cr(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function nu(e){return 0!=(16&e.flags)}(t)&&xl(n,t,z(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function ru(e){return 0!=(32&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&xl(n,t,z(),t.stylesWithoutHost,!1),Ta}function Rl(e,t,n,r){return Sa(e,t,n,r),Ta(),Rl
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
function Nl(e){return!!e&&"function"==typeof e.then}function eh(e){return!!e&&"function"==typeof e.subscribe}const th=eh;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ol(e,t,n,r){const o=z(),i=Ue(),s=bt();return function rh(e,t,n,r,o,i,s,c){const d=Ct(r),y=e.firstCreatePass&&kf(e),_=t[8],S=Lf(t);let R=!0;if(3&r.type||c){const oe=T(r,t),he=c?c(oe):oe,Me=S.length,q=c?We=>c(h(We[r.index])):r.index;let Te=null;if(!c&&d&&(Te=function SD(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const s=o[i];if(s===n&&o[i+1]===r){const c=t[7],d=o[i+2];return c.length>d?c[d]:null}"string"==typeof s&&(i+=2)}return null}(e,t,o,r.index)),null!==Te)(Te.__ngLastListenerFn__||Te).__ngNextListenerFn__=i,Te.__ngLastListenerFn__=i,R=!1;else{i=ih(r,t,_,i,!1);const We=n.listen(he,o,i);S.push(i,We),y&&y.push(o,q,Me,Me+1)}}else i=ih(r,t,_,i,!1);const $=r.outputs;let Q;if(R&&null!==$&&(Q=$[o])){const oe=Q.length;if(oe)for(let he=0;he<oe;he+=2){const gt=t[Q[he]][Q[he+1]].subscribe(i),_o=S.length;S.push(i,gt),y&&y.push(o,r.index,_o,-(_o+1))}}}(i,o,o[11],s,e,t,0,r),Ol}function oh(e,t,n,r){try{return!1!==n(r)}catch(o){return Vf(e,o),!1}}function ih(e,t,n,r,o){return function i(s){if(s===Function)return r;El(2&e.flags?He(e.index,t):t);let d=oh(t,0,r,s),m=i.__ngNextListenerFn__;for(;m;)d=oh(t,0,m,s)&&d,m=m.__ngNextListenerFn__;return o&&!1===d&&(s.preventDefault(),s.returnValue=!1),d}}
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
function xh(e,t=""){const n=z(),r=Ue(),o=e+22,i=r.firstCreatePass?si(r,o,1,t,null):r.data[o],s=n[o]=function Ou(e,t){return e.createText(t)}(n[11],t);pa(r,n,s,i),En(i,!1)}
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
const Do=void 0;var gC=["en",[["a","p"],["AM","PM"],Do],[["AM","PM"],Do,Do],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Do,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Do,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Do,"{1} 'at' {0}",Do],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function pC(e){const n=Math.floor(Math.abs(e)),r=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===r?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let vi={};function Vl(e){const t=function mC(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=Jh(t);if(n)return n;const r=t.split("-")[0];if(n=Jh(r),n)return n;if("en"===r)return gC;throw new ce(701,!1)}function Zh(e){return Vl(e)[Re.PluralCase]}function Jh(e){return e in vi||(vi[e]=ft.ng&&ft.ng.common&&ft.ng.common.locales&&ft.ng.common.locales[e]),vi[e]}var Re=(()=>((Re=Re||{})[Re.LocaleId=0]="LocaleId",Re[Re.DayPeriodsFormat=1]="DayPeriodsFormat",Re[Re.DayPeriodsStandalone=2]="DayPeriodsStandalone",Re[Re.DaysFormat=3]="DaysFormat",Re[Re.DaysStandalone=4]="DaysStandalone",Re[Re.MonthsFormat=5]="MonthsFormat",Re[Re.MonthsStandalone=6]="MonthsStandalone",Re[Re.Eras=7]="Eras",Re[Re.FirstDayOfWeek=8]="FirstDayOfWeek",Re[Re.WeekendRange=9]="WeekendRange",Re[Re.DateFormat=10]="DateFormat",Re[Re.TimeFormat=11]="TimeFormat",Re[Re.DateTimeFormat=12]="DateTimeFormat",Re[Re.NumberSymbols=13]="NumberSymbols",Re[Re.NumberFormats=14]="NumberFormats",Re[Re.CurrencyCode=15]="CurrencyCode",Re[Re.CurrencySymbol=16]="CurrencySymbol",Re[Re.CurrencyName=17]="CurrencyName",Re[Re.Currencies=18]="Currencies",Re[Re.Directionality=19]="Directionality",Re[Re.PluralCase=20]="PluralCase",Re[Re.ExtraData=21]="ExtraData",Re))();const Di="en-US";
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
let Xh=Di;class mw{resolveComponentFactory(t){
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
throw function gw(e){const t=Error(`No component factory found for ${ue(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let vs=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new mw,e})();class Co{}class bp{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Sp{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function vw(){return wi(bt(),z())}function wi(e,t){return new Ds(T(e,t))}let Ds=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=vw,e})();function Dw(e){return e instanceof Ds?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Tp{}let Cw=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function ww(){const e=z(),n=He(bt().index,e);return(Ot(n)?n:e)[11]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),_w=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=wt({token:e,providedIn:"root",factory:()=>null}),e})();class Ap{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Ew=new Ap("14.0.5"),Wl={};
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
function Na(e,t,n,r,o=!1){for(;null!==n;){const i=t[n.index];if(null!==i&&r.push(h(i)),Gt(i))for(let c=10;c<i.length;c++){const d=i[c],m=d[1].firstChild;null!==m&&Na(d[1],d,m,r)}const s=n.type;if(8&s)Na(e,t,n.child,r);else if(32&s){const c=Pu(n,t);let d;for(;d=c();)r.push(d)}else if(16&s){const c=Pd(t,n);if(Array.isArray(c))r.push(...c);else{const d=us(t[16]);Na(d[1],d,c,r,!0)}}n=o?n.projectionNext:n.next}return r}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Cs{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Na(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(Gt(t)){const n=t[8],r=n?n.indexOf(this):-1;r>-1&&(ku(t,r),Ne(n,r))}this._attachedToViewContainer=!1}Ed(this._lView[1],this._lView)}onDestroy(t){Sf(this._lView[1],this._lView,null,t)}markForCheck(){El(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){!function Ml(e,t,n){const r=t[10];r.begin&&r.begin();try{cs(e,t,e.template,n)}catch(o){throw Vf(t,o),o}finally{r.end&&r.end()}}(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function Cy(e,t){ls(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new ce(902,!1);this._appRef=t}}class Iw extends Cs{constructor(t){super(t),this._view=t}detectChanges(){Of(this._view)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Yl extends vs{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=M(t);return new ql(n,this.ngModule)}}function xp(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class bw{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,r){const o=this.injector.get(t,Wl,r);return o!==Wl||n===Wl?o:this.parentInjector.get(t,n,r)}}class ql extends Sp{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function By(e){return e.map(Vy).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return xp(this.componentDef.inputs)}get outputs(){return xp(this.componentDef.outputs)}create(t,n,r,o){let i=(o=o||this.ngModule)instanceof ni?o:o?.injector;i&&null!==this.componentDef.getStandaloneInjector&&(i=this.componentDef.getStandaloneInjector(i)||i);const s=i?new bw(t,i):t,c=s.get(Tp,null);if(null===c)throw new ce(407,!1);const d=s.get(_w,null),m=c.createRenderer(null,this.componentDef),y=this.componentDef.selectors[0][0]||"div",_=r?function Ov(e,t,n){return e.selectRootElement(t,n===qe.ShadowDom)}(m,r,this.componentDef.encapsulation):Lu(c.createRenderer(null,this.componentDef),y,function Mw(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(y)),S=this.componentDef.onPush?288:272,R=function sD(e,t){return{components:[],scheduler:e||cy,clean:rD,playerHandler:t||null,flags:0}}(),$=Dl(0,null,null,1,0,null,null,null,null,null),Q=wa(null,$,R,S,null,null,c,m,d,s,null);let oe,he;Li(Q);try{const Me=function oD(e,t,n,r,o,i){const s=n[1];n[22]=e;const d=si(s,22,2,"#host",null),m=d.mergedAttrs=t.hostAttrs;null!==m&&(Ia(d,m,!0),null!==e&&(uo(o,e,m),null!==d.classes&&Uu(o,e,d.classes),null!==d.styles&&Od(o,e,d.styles)));const y=r.createRenderer(e,t),_=wa(n,bf(t),null,t.onPush?32:16,n[22],d,r,y,i||null,null,null);return s.firstCreatePass&&(Yo(jr(d,n),s,t.type),Rf(s,d),Pf(d,n.length,1)),Ea(n,_),n[22]=_}(_,this.componentDef,Q,c,m);if(_)if(r)uo(m,_,["ng-version",Ew.full]);else{const{attrs:q,classes:Te}=function Hy(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!On(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);q&&uo(m,_,q),Te&&Te.length>0&&Uu(m,_,Te.join(" "))}if(he=Y($,22),void 0!==n){const q=he.projection=[];for(let Te=0;Te<this.ngContentSelectors.length;Te++){const We=n[Te];q.push(null!=We?Array.from(We):null)}}oe=function iD(e,t,n,r,o){const i=n[1],s=function Hv(e,t,n){const r=bt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Ff(e,r,t,ai(e,t,1,null),n));const o=po(t,e,r.directiveStart,r);Qt(o,t);const i=T(r,t);return i&&Qt(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,null!==o)for(const d of o)d(s,t);if(t.contentQueries){const d=bt();t.contentQueries(1,s,d.directiveStart)}const c=bt();return!i.firstCreatePass||null===t.hostBindings&&null===t.hostAttrs||(Yn(c.index),Af(n[1],c,0,c.directiveStart,c.directiveEnd,t),xf(t,s)),s}(Me,this.componentDef,Q,R,[aD]),_a($,Q,null)}finally{ki()}return new Tw(this.componentType,oe,wi(he,Q),Q,he)}}class Tw extends class yw{}{constructor(t,n,r,o,i){super(),this.location=r,this._rootLView=o,this._tNode=i,this.instance=n,this.hostView=this.changeDetectorRef=new Iw(o),this.componentType=t}get injector(){return new pr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Aw(e,t){return new Rp(e,t??null)}class Rp extends Co{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Yl(this);const r=ye(t);this._bootstrapComponents=mr(r.bootstrap),this._r3Injector=ef(t,n,[{provide:Co,useValue:this},{provide:vs,useValue:this.componentFactoryResolver}],ue(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this.get(t)}get(t,n=Zn.THROW_IF_NOT_FOUND,r=_e.Default){return t===Zn||t===Co||t===Wu?this:this._r3Injector.get(t,n,r)}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class Kl extends bp{constructor(t){super(),this.moduleType=t}create(t){return new Rp(this.moduleType,t)}}class xw extends Co{constructor(t,n,r){super(),this.componentFactoryResolver=new Yl(this),this.instance=null;const o=new Zd([...t,{provide:Co,useValue:this},{provide:vs,useValue:this.componentFactoryResolver}],n||Ku(),r,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function Ql(e,t=null,n=null){return new xw(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Jl(e){return t=>{setTimeout(e,void 0,t)}}const nr=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class o_ extends ie.x{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,r){let o=t,i=n||(()=>null),s=r;if(t&&"object"==typeof t){const d=t;o=d.next?.bind(d),i=d.error?.bind(d),s=d.complete?.bind(d)}this.__isAsync&&(i=Jl(i),o&&(o=Jl(o)),s&&(s=Jl(s)));const c=super.subscribe({next:o,error:i,complete:s});return t instanceof Pe.w0&&t.add(c),c}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function i_(){return this._results[yo()]()}class Xl{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=yo(),r=Xl.prototype;r[n]||(r[n]=i_)}get changes(){return this._changes||(this._changes=new nr)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const r=this;r.dirty=!1;const o=b(t);(this._changesDetected=!function I(e,t,n){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let o=e[r],i=t[r];if(n&&(o=n(o),i=n(i)),i!==o)return!1}return!0}(r._results,o,n))&&(r._results=o,r.length=o.length,r.last=o[this.length-1],r.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Es=(()=>{class e{}return e.__NG_ELEMENT_ID__=u_,e})();const s_=Es,a_=class extends s_{constructor(t,n,r){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}createEmbeddedView(t,n){const r=this._declarationTContainer.tViews,o=wa(this._declarationLView,r,t,16,null,r.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const s=this._declarationLView[19];return null!==s&&(o[19]=s.createEmbeddedView(r)),_a(r,o,t),new Cs(o)}};function u_(){return Oa(bt(),z())}function Oa(e,t){return 4&e.type?new a_(t,e,wi(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let La=(()=>{class e{}return e.__NG_ELEMENT_ID__=l_,e})();function l_(){return zp(bt(),z())}const c_=La,$p=class extends c_{constructor(t,n,r){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=r}get element(){return wi(this._hostTNode,this._hostLView)}get injector(){return new pr(this._hostTNode,this._hostLView)}get parentInjector(){const t=Wo(this._hostTNode,this._hostLView);if(Hi(t)){const n=kr(t,this._hostLView),r=qn(t);return new pr(n[1].data[r+8],n)}return new pr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=Gp(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,r){let o,i;"number"==typeof r?o=r:null!=r&&(o=r.index,i=r.injector);const s=t.createEmbeddedView(n||{},i);return this.insert(s,o),s}createComponent(t,n,r,o,i){const s=t&&!function g(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t);let c;if(s)c=n;else{const _=n||{};c=_.index,r=_.injector,o=_.projectableNodes,i=_.environmentInjector||_.ngModuleRef}const d=s?t:new ql(M(t)),m=r||this.parentInjector;if(!i&&null==d.ngModule){const S=(s?m:this.parentInjector).get(ni,null);S&&(i=S)}const y=d.create(m,o,void 0,i);return this.insert(y.hostView,c),y}insert(t,n){const r=t._lView,o=r[1];if(function Le(e){return Gt(e[3])}(r)){const y=this.indexOf(t);if(-1!==y)this.detach(y);else{const _=r[3],S=new $p(_,_[6],_[3]);S.detach(S.indexOf(t))}}const i=this._adjustIndex(n),s=this._lContainer;!function _y(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],Z(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function Ey(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const c=t[19];null!==c&&c.insertView(e),t[2]|=64}(o,r,s,i);const c=Bu(i,s),d=r[11],m=ha(d,s[7]);return null!==m&&function Dy(e,t,n,r,o,i){r[0]=o,r[6]=t,ls(e,r,n,1,o,i)}(o,s[6],d,r,m,c),t.attachToViewContainerRef(),Z(ec(s),i,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=Gp(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),r=ku(this._lContainer,n);r&&(Ne(ec(this._lContainer),n),Ed(r[1],r))}detach(t){const n=this._adjustIndex(t,-1),r=ku(this._lContainer,n);return r&&null!=Ne(ec(this._lContainer),n)?new Cs(r):null}_adjustIndex(t,n=0){return t??this.length+n}};function Gp(e){return e[8]}function ec(e){return e[8]||(e[8]=[])}function zp(e,t){let n;const r=t[e.index];if(Gt(r))n=r;else{let o;if(8&e.type)o=h(r);else{const i=t[11];o=i.createComment("");const s=T(e,t);go(i,ha(i,s),o,function Sy(e,t){return e.nextSibling(t)}(i,s),!1)}t[e.index]=n=function Nf(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}(r,t,o,e),Ea(t,n)}return new $p(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class tc{constructor(t){this.queryList=t,this.matches=null}clone(){return new tc(this.queryList)}setDirty(){this.queryList.setDirty()}}class nc{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const r=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let i=0;i<r;i++){const s=n.getByIndex(i);o.push(this.queries[s.indexInDeclarationView].clone())}return new nc(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==Xp(t,n).matches&&this.queries[n].setDirty()}}class Wp{constructor(t,n,r=null){this.predicate=t,this.flags=n,this.read=r}}class rc{constructor(t=[]){this.queries=t}elementStart(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let r=0;r<this.length;r++){const o=null!==n?n.length:0,i=this.getByIndex(r).embeddedTView(t,o);i&&(i.indexInDeclarationView=r,null!==n?n.push(i):n=[i])}return null!==n?new rc(n):null}template(t,n){for(let r=0;r<this.queries.length;r++)this.queries[r].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class oc{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new oc(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let r=t.parent;for(;null!==r&&8&r.type&&r.index!==n;)r=r.parent;return n===(null!==r?r.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const r=this.metadata.predicate;if(Array.isArray(r))for(let o=0;o<r.length;o++){const i=r[o];this.matchTNodeWithReadOption(t,n,h_(n,i)),this.matchTNodeWithReadOption(t,n,ho(n,t,i,!1,!1))}else r===Es?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,ho(n,t,r,!1,!1))}matchTNodeWithReadOption(t,n,r){if(null!==r){const o=this.metadata.read;if(null!==o)if(o===Ds||o===La||o===Es&&4&n.type)this.addMatch(n.index,-2);else{const i=ho(n,t,o,!1,!1);null!==i&&this.addMatch(n.index,i)}else this.addMatch(n.index,r)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function h_(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function g_(e,t,n,r){return-1===n?function p_(e,t){return 11&e.type?wi(e,t):4&e.type?Oa(e,t):null}(t,e):-2===n?function m_(e,t,n){return n===Ds?wi(t,e):n===Es?Oa(t,e):n===La?zp(t,e):void 0}(e,t,r):po(e,e[1],n,t)}function Yp(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const i=e.data,s=n.matches,c=[];for(let d=0;d<s.length;d+=2){const m=s[d];c.push(m<0?null:g_(t,i[m],s[d+1],n.metadata.read))}o.matches=c}return o.matches}function ic(e,t,n,r){const o=e.queries.getByIndex(n),i=o.matches;if(null!==i){const s=Yp(e,t,o,n);for(let c=0;c<i.length;c+=2){const d=i[c];if(d>0)r.push(s[c/2]);else{const m=i[c+1],y=t[-d];for(let _=10;_<y.length;_++){const S=y[_];S[17]===S[3]&&ic(S[1],S,m,r)}if(null!==y[9]){const _=y[9];for(let S=0;S<_.length;S++){const R=_[S];ic(R[1],R,m,r)}}}}}return r}function qp(e){const t=z(),n=Ue(),r=ks();Oi(r+1);const o=Xp(n,r);if(e.dirty&&ot(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?ic(n,t,r,[]):Yp(n,t,o,r);e.reset(i,Dw),e.notifyOnChanges()}return!0}return!1}function Kp(e,t,n,r){const o=Ue();if(o.firstCreatePass){const i=bt();(function Jp(e,t,n){null===e.queries&&(e.queries=new rc),e.queries.track(new oc(t,n))})(o,new Wp(t,n,r),i.index),function D_(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}!function Zp(e,t,n){const r=new Xl(4==(4&n));Sf(e,t,r,r.destroy),null===t[19]&&(t[19]=new nc),t[19].queries.push(new tc(r))}(o,z(),n)}function Qp(){return function v_(e,t){return e[19].queries[t].queryList}(z(),ks())}function Xp(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ei(e){const t=M(e)||P(e)||U(e);return null!==t&&t.standalone}
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
function ja(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const vg=new st("Application Initializer");let Va=(()=>{class e{constructor(n){this.appInits=n,this.resolve=ja,this.reject=ja,this.initialized=!1,this.done=!1,this.donePromise=new Promise((r,o)=>{this.resolve=r,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],r=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const i=this.appInits[o]();if(Nl(i))n.push(i);else if(th(i)){const s=new Promise((c,d)=>{i.subscribe({complete:c,error:d})});n.push(s)}}Promise.all(n).then(()=>{r()}).catch(o=>{this.reject(o)}),0===n.length&&r(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(Rt(vg,8))},e.\u0275prov=wt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Dg=new st("AppId",{providedIn:"root",factory:function Cg(){return`${cc()}${cc()}${cc()}`}});function cc(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const wg=new st("Platform Initializer"),B_=new st("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),_g=new st("appBootstrapListener");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let H_=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ba=new st("LocaleId",{providedIn:"root",factory:()=>$c(Ba,_e.Optional|_e.SkipSelf)||function U_(){return typeof $localize<"u"&&$localize.locale||Di}()}),$_=new st("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class G_{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let z_=(()=>{class e{compileModuleSync(n){return new Kl(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const r=this.compileModuleSync(n),i=mr(ye(n).declarations).reduce((s,c)=>{const d=M(c);return d&&s.push(new ql(d)),s},[]);return new G_(r,i)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const q_=(()=>Promise.resolve(0))();function dc(e){typeof Zone>"u"?q_.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
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
class vn{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new nr(!1),this.onMicrotaskEmpty=new nr(!1),this.onStable=new nr(!1),this.onError=new nr(!1),typeof Zone>"u")throw new ce(908,!1);Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function K_(){let e=ft.requestAnimationFrame,t=ft.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function J_(e){const t=()=>{!function Z_(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(ft,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,hc(e),e.isCheckStableRunning=!0,fc(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),hc(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,c)=>{try{return Mg(e),n.invokeTask(o,i,s,c)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),bg(e)}},onInvoke:(n,r,o,i,s,c,d)=>{try{return Mg(e),n.invoke(o,i,s,c,d)}finally{e.shouldCoalesceRunChangeDetection&&t(),bg(e)}},onHasTask:(n,r,o,i)=>{n.hasTask(o,i),r===o&&("microTask"==i.change?(e._hasPendingMicrotasks=i.microTask,hc(e),fc(e)):"macroTask"==i.change&&(e.hasPendingMacrotasks=i.macroTask))},onHandleError:(n,r,o,i)=>(n.handleError(o,i),e.runOutsideAngular(()=>e.onError.emit(i)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!vn.isInAngularZone())throw new ce(909,!1)}static assertNotInAngularZone(){if(vn.isInAngularZone())throw new ce(909,!1)}run(t,n,r){return this._inner.run(t,n,r)}runTask(t,n,r,o){const i=this._inner,s=i.scheduleEventTask("NgZoneEvent: "+o,t,Q_,ja,ja);try{return i.runTask(s,n,r)}finally{i.cancelTask(s)}}runGuarded(t,n,r){return this._inner.runGuarded(t,n,r)}runOutsideAngular(t){return this._outer.run(t)}}const Q_={};function fc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function hc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function Mg(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function bg(e){e._nesting--,fc(e)}class X_{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new nr,this.onMicrotaskEmpty=new nr,this.onStable=new nr,this.onError=new nr}run(t,n,r){return t.apply(n,r)}runGuarded(t,n,r){return t.apply(n,r)}runOutsideAngular(t){return t()}runTask(t,n,r,o){return t.apply(n,r)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Sg=new st(""),Tg=new st("");let pc,e0=(()=>{class e{constructor(n,r,o){this._ngZone=n,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,pc||(function t0(e){pc=e}(o),o.addToWindow(r)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{vn.assertNotInAngularZone(),dc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())dc(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>!r.updateCb||!r.updateCb(n)||(clearTimeout(r.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,r,o){let i=-1;r&&r>0&&(i=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==i),n(this._didWork,this.getPendingTasks())},r)),this._callbacks.push({doneCb:n,timeoutId:i,updateCb:o})}whenStable(n,r,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,r,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,r,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(Rt(vn),Rt(Ag),Rt(Tg))},e.\u0275prov=wt({token:e,factory:e.\u0275fac}),e})(),Ag=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,r){this._applications.set(n,r)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,r=!0){return pc?.findTestabilityInTree(this,n,r)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=wt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),zr=null;const xg=new st("AllowMultipleToken"),gc=new st("PlatformDestroyListeners");class o0{constructor(t,n){this.name=t,this.token=n}}function Pg(e,t,n=[]){const r=`Platform: ${t}`,o=new st(r);return(i=[])=>{let s=mc();if(!s||s.injector.get(xg,!1)){const c=[...n,...i,{provide:o,useValue:!0}];e?e(c):function s0(e){if(zr&&!zr.get(xg,!1))throw new ce(400,!1);zr=e;const t=e.get(Ng);(function Rg(e){const t=e.get(wg,null);t&&t.forEach(n=>n())})(e)}(function Fg(e=[],t){return Zn.create({name:t,providers:[{provide:Yu,useValue:"platform"},{provide:gc,useValue:new Set([()=>zr=null])},...e]})}(c,r))}return function u0(e){const t=mc();if(!t)throw new ce(401,!1);return t}()}}function mc(){return zr?.get(Ng)??null}let Ng=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,r){const o=function l0(e,t){let n;return n="noop"===e?new X_:("zone.js"===e?void 0:e)||new vn(t),n}(r?.ngZone,function Og(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(r)),i=[{provide:vn,useValue:o}];return o.run(()=>{const s=Zn.create({providers:i,parent:this.injector,name:n.moduleType.name}),c=n.create(s),d=c.injector.get(ss,null);if(!d)throw new ce(402,!1);return o.runOutsideAngular(()=>{const m=o.onError.subscribe({next:y=>{d.handleError(y)}});c.onDestroy(()=>{Ua(this._modules,c),m.unsubscribe()})}),function Lg(e,t,n){try{const r=n();return Nl(r)?r.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(d,o,()=>{const m=c.injector.get(Va);return m.runInitializers(),m.donePromise.then(()=>(function ep(e){dt(e,"Expected localeId to be defined"),"string"==typeof e&&(Xh=e.toLowerCase().replace(/_/g,"-"))}(c.injector.get(Ba,Di)||Di),this._moduleDoBootstrap(c),c))})})}bootstrapModule(n,r=[]){const o=kg({},r);return function n0(e,t,n){const r=new Kl(n);return Promise.resolve(r)}(0,0,n).then(i=>this.bootstrapModuleFactory(i,o))}_moduleDoBootstrap(n){const r=n.injector.get(Ha);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>r.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new ce(403,!1);n.instance.ngDoBootstrap(r)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new ce(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());const n=this._injector.get(gc,null);n&&(n.forEach(r=>r()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(Rt(Zn))},e.\u0275prov=wt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function kg(e,t){return Array.isArray(t)?t.reduce(kg,e):{...e,...t}}let Ha=(()=>{class e{constructor(n,r,o){this._zone=n,this._injector=r,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const i=new we.y(c=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{c.next(this._stable),c.complete()})}),s=new we.y(c=>{let d;this._zone.runOutsideAngular(()=>{d=this._zone.onStable.subscribe(()=>{vn.assertNotInAngularZone(),dc(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,c.next(!0))})})});const m=this._zone.onUnstable.subscribe(()=>{vn.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{c.next(!1)}))});return()=>{d.unsubscribe(),m.unsubscribe()}});this.isStable=function Ie(...e){const t=(0,X.yG)(e),n=(0,X._6)(e,1/0),r=e;return r.length?1===r.length?(0,w.Xf)(r[0]):(0,E.J)(n)((0,V.D)(r,t)):re.E}(i,s.pipe(function Ye(e={}){const{connector:t=(()=>new ie.x),resetOnError:n=!0,resetOnComplete:r=!0,resetOnRefCountZero:o=!0}=e;return i=>{let s=null,c=null,d=null,m=0,y=!1,_=!1;const S=()=>{c?.unsubscribe(),c=null},R=()=>{S(),s=d=null,y=_=!1},$=()=>{const Q=s;R(),Q?.unsubscribe()};return(0,De.e)((Q,oe)=>{m++,!_&&!y&&S();const he=d=d??t();oe.add(()=>{m--,0===m&&!_&&!y&&(c=pe($,o))}),he.subscribe(oe),s||(s=new W.Hp({next:Me=>he.next(Me),error:Me=>{_=!0,S(),c=pe(R,n,Me),he.error(Me)},complete:()=>{y=!0,S(),c=pe(R,r),he.complete()}}),(0,V.D)(Q).subscribe(s))})(i)}}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,r){const o=n instanceof Sp;if(!this._injector.get(Va).done)throw!o&&Ei(n),new ce(405,false);let s;s=o?n:this._injector.get(vs).resolveComponentFactory(n),this.componentTypes.push(s.componentType);const c=function r0(e){return e.isBoundToModule}(s)?void 0:this._injector.get(Co),m=s.create(Zn.NULL,[],r||s.selector,c),y=m.location.nativeElement,_=m.injector.get(Sg,null);return _?.registerApplication(y),m.onDestroy(()=>{this.detachView(m.hostView),Ua(this.components,m),_?.unregisterApplication(y)}),this._loadComponent(m),m}tick(){if(this._runningTick)throw new ce(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const r=n;this._views.push(r),r.attachToAppRef(this)}detachView(n){const r=n;Ua(this._views,r),r.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n),this._injector.get(_g,[]).concat(this._bootstrapListeners).forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>Ua(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new ce(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(Rt(vn),Rt(Zn),Rt(ss))},e.\u0275prov=wt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Ua(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Vg=!0;function d0(){Vg=!1}
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
let f0=(()=>{class e{}return e.__NG_ELEMENT_ID__=h0,e})();function h0(e){return function p0(e,t,n){if(rn(e)&&!n){const r=He(e.index,t);return new Cs(r,r)}return 47&e.type?new Cs(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(bt(),z(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Gg{constructor(){}supports(t){return ds(t)}create(t){return new C0(t)}}const D0=(e,t)=>t;class C0{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||D0}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,r=this._removalsHead,o=0,i=null;for(;n||r;){const s=!r||n&&n.currentIndex<Wg(r,o,i)?n:r,c=Wg(s,o,i),d=s.currentIndex;if(s===r)o--,r=r._nextRemoved;else if(n=n._next,null==s.previousIndex)o++;else{i||(i=[]);const m=c-o,y=d-o;if(m!=y){for(let S=0;S<m;S++){const R=S<i.length?i[S]:i[S]=0,$=R+S;y<=$&&$<m&&(i[S]=R+1)}i[s.previousIndex]=y-m}}c!==d&&t(s,c,d)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!ds(t))throw new ce(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,i,s,n=this._itHead,r=!1;if(Array.isArray(t)){this.length=t.length;for(let c=0;c<this.length;c++)i=t[c],s=this._trackByFn(c,i),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,i,s,c)),Object.is(n.item,i)||this._addIdentityChange(n,i)):(n=this._mismatch(n,i,s,c),r=!0),n=n._next}else o=0,function mD(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[yo()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(t,c=>{s=this._trackByFn(o,c),null!==n&&Object.is(n.trackById,s)?(r&&(n=this._verifyReinsertion(n,c,s,o)),Object.is(n.item,c)||this._addIdentityChange(n,c)):(n=this._mismatch(n,c,s,o),r=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,r,o){let i;return null===t?i=this._itTail:(i=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,i,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(r,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,i,o)):t=this._addAfter(new w0(n,r),i,o),t}_verifyReinsertion(t,n,r,o){let i=null===this._unlinkedRecords?null:this._unlinkedRecords.get(r,null);return null!==i?t=this._reinsertAfter(i,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,r){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,i=t._nextRemoved;return null===o?this._removalsHead=i:o._nextRemoved=i,null===i?this._removalsTail=o:i._prevRemoved=o,this._insertAfter(t,n,r),this._addToMoves(t,r),t}_moveAfter(t,n,r){return this._unlink(t),this._insertAfter(t,n,r),this._addToMoves(t,r),t}_addAfter(t,n,r){return this._insertAfter(t,n,r),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,r){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new zg),this._linkedRecords.put(t),t.currentIndex=r,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,r=t._next;return null===n?this._itHead=r:n._next=r,null===r?this._itTail=n:r._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new zg),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class w0{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class _0{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let r;for(r=this._head;null!==r;r=r._nextDup)if((null===n||n<=r.currentIndex)&&Object.is(r.trackById,t))return r;return null}remove(t){const n=t._prevDup,r=t._nextDup;return null===n?this._head=r:n._nextDup=r,null===r?this._tail=n:r._prevDup=n,null===this._head}}class zg{constructor(){this.map=new Map}put(t){const n=t.trackById;let r=this.map.get(n);r||(r=new _0,this.map.set(n,r)),r.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Wg(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Yg{constructor(){}supports(t){return t instanceof Map||Tl(t)}create(){return new E0}}class E0{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Tl(t)))throw new ce(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(r,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,r),this._appendAfter=n,n=n._next;else{const i=this._getOrCreateRecordForKey(o,r);n=this._insertBeforeOrAppend(n,i)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let r=n;null!==r;r=r._nextRemoved)r===this._mapHead&&(this._mapHead=null),this._records.delete(r.key),r._nextRemoved=r._next,r.previousValue=r.currentValue,r.currentValue=null,r._prev=null,r._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const r=t._prev;return n._next=t,n._prev=r,t._prev=n,r&&(r._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const i=o._prev,s=o._next;return i&&(i._next=s),s&&(s._prev=i),o._next=null,o._prev=null,o}const r=new I0(t);return this._records.set(t,r),r.currentValue=n,this._addToAdditions(r),r}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(r=>n(t[r],r))}}class I0{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function qg(){return new wc([new Gg])}let wc=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(null!=r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||qg()),deps:[[e,new es,new Xi]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(null!=r)return r;throw new ce(901,!1)}}return e.\u0275prov=wt({token:e,providedIn:"root",factory:qg}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Kg(){return new _c([new Yg])}let _c=(()=>{class e{constructor(n){this.factories=n}static create(n,r){if(r){const o=r.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:r=>e.create(n,r||Kg()),deps:[[e,new es,new Xi]]}}find(n){const r=this.factories.find(o=>o.supports(n));if(r)return r;throw new ce(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=wt({token:e,providedIn:"root",factory:Kg}),e})();const S0=Pg(null,"core",[]);
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
let T0=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(Rt(Ha))},e.\u0275mod=Ir({type:e}),e.\u0275inj=bn({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function A0(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
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
     */,481:($e,fe,x)=>{x.d(fe,{Dx:()=>_e,b2:()=>Hn,q6:()=>dn});var E=x(895),w=x(256);
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
     */class re extends E.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class X extends re{static makeCurrent(){(0,E.HT)(new X)}onAndCancel(A,M,P){return A.addEventListener(M,P,!1),()=>{A.removeEventListener(M,P,!1)}}dispatchEvent(A,M){A.dispatchEvent(M)}remove(A){A.parentNode&&A.parentNode.removeChild(A)}createElement(A,M){return(M=M||this.getDefaultDocument()).createElement(A)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(A){return A.nodeType===Node.ELEMENT_NODE}isShadowRoot(A){return A instanceof DocumentFragment}getGlobalEventTarget(A,M){return"window"===M?window:"document"===M?A:"body"===M?A.body:null}getBaseHref(A){const M=function Ie(){return V=V||document.querySelector("base"),V?V.getAttribute("href"):null}();return null==M?null:function Pe(N){ie=ie||document.createElement("a"),ie.setAttribute("href",N);const A=ie.pathname;return"/"===A.charAt(0)?A:`/${A}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(M)}resetBaseElement(){V=null}getUserAgent(){return window.navigator.userAgent}getCookie(A){return(0,E.Mx)(document.cookie,A)}}let ie,V=null;const we=new w.OlP("TRANSITION_ID"),W=[{provide:w.ip1,useFactory:function te(N,A,M){return()=>{M.get(w.CZH).donePromise.then(()=>{const P=(0,E.q)(),U=A.querySelectorAll(`style[ng-transition="${N}"]`);for(let ye=0;ye<U.length;ye++)P.remove(U[ye])})}},deps:[we,E.K0,w.zs3],multi:!0}];let Ye=(()=>{class N{build(){return new XMLHttpRequest}}return N.\u0275fac=function(M){return new(M||N)},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const pe=new w.OlP("EventManagerPlugins");let me=(()=>{class N{constructor(M,P){this._zone=P,this._eventNameToPlugin=new Map,M.forEach(U=>U.manager=this),this._plugins=M.slice().reverse()}addEventListener(M,P,U){return this._findPluginFor(P).addEventListener(M,P,U)}addGlobalEventListener(M,P,U){return this._findPluginFor(P).addGlobalEventListener(M,P,U)}getZone(){return this._zone}_findPluginFor(M){const P=this._eventNameToPlugin.get(M);if(P)return P;const U=this._plugins;for(let ye=0;ye<U.length;ye++){const Oe=U[ye];if(Oe.supports(M))return this._eventNameToPlugin.set(M,Oe),Oe}throw new Error(`No event manager plugin found for event ${M}`)}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(pe),w.LFG(w.R0b))},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})();class se{constructor(A){this._doc=A}addGlobalEventListener(A,M,P){const U=(0,E.q)().getGlobalEventTarget(this._doc,A);if(!U)throw new Error(`Unsupported event target ${U} for event ${M}`);return this.addEventListener(U,M,P)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ue=(()=>{class N{constructor(){this._stylesSet=new Set}addStyles(M){const P=new Set;M.forEach(U=>{this._stylesSet.has(U)||(this._stylesSet.add(U),P.add(U))}),this.onStylesAdded(P)}onStylesAdded(M){}getAllStyles(){return Array.from(this._stylesSet)}}return N.\u0275fac=function(M){return new(M||N)},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})(),Ge=(()=>{class N extends ue{constructor(M){super(),this._doc=M,this._hostNodes=new Map,this._hostNodes.set(M.head,[])}_addStylesToHost(M,P,U){M.forEach(ye=>{const Oe=this._doc.createElement("style");Oe.textContent=ye,U.push(P.appendChild(Oe))})}addHost(M){const P=[];this._addStylesToHost(this._stylesSet,M,P),this._hostNodes.set(M,P)}removeHost(M){const P=this._hostNodes.get(M);P&&P.forEach(Ze),this._hostNodes.delete(M)}onStylesAdded(M){this._hostNodes.forEach((P,U)=>{this._addStylesToHost(M,U,P)})}ngOnDestroy(){this._hostNodes.forEach(M=>M.forEach(Ze))}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(E.K0))},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})();function Ze(N){(0,E.q)().remove(N)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Qe={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},H=/%COMP%/g;function F(N,A,M){for(let P=0;P<A.length;P++){let U=A[P];Array.isArray(U)?F(N,U,M):(U=U.replace(H,N),M.push(U))}return M}function L(N){return A=>{if("__ngUnwrap__"===A)return N;!1===N(A)&&(A.preventDefault(),A.returnValue=!1)}}let G=(()=>{class N{constructor(M,P,U){this.eventManager=M,this.sharedStylesHost=P,this.appId=U,this.rendererByCompId=new Map,this.defaultRenderer=new j(M)}createRenderer(M,P){if(!M||!P)return this.defaultRenderer;switch(P.encapsulation){case w.ifc.Emulated:{let U=this.rendererByCompId.get(P.id);return U||(U=new ze(this.eventManager,this.sharedStylesHost,P,this.appId),this.rendererByCompId.set(P.id,U)),U.applyToHost(M),U}case 1:case w.ifc.ShadowDom:return new Ve(this.eventManager,this.sharedStylesHost,M,P);default:if(!this.rendererByCompId.has(P.id)){const U=F(P.id,P.styles,[]);this.sharedStylesHost.addStyles(U),this.rendererByCompId.set(P.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(me),w.LFG(Ge),w.LFG(w.AFp))},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})();class j{constructor(A){this.eventManager=A,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(A,M){return M?document.createElementNS(Qe[M]||M,A):document.createElement(A)}createComment(A){return document.createComment(A)}createText(A){return document.createTextNode(A)}appendChild(A,M){(et(A)?A.content:A).appendChild(M)}insertBefore(A,M,P){A&&(et(A)?A.content:A).insertBefore(M,P)}removeChild(A,M){A&&A.removeChild(M)}selectRootElement(A,M){let P="string"==typeof A?document.querySelector(A):A;if(!P)throw new Error(`The selector "${A}" did not match any elements`);return M||(P.textContent=""),P}parentNode(A){return A.parentNode}nextSibling(A){return A.nextSibling}setAttribute(A,M,P,U){if(U){M=U+":"+M;const ye=Qe[U];ye?A.setAttributeNS(ye,M,P):A.setAttribute(M,P)}else A.setAttribute(M,P)}removeAttribute(A,M,P){if(P){const U=Qe[P];U?A.removeAttributeNS(U,M):A.removeAttribute(`${P}:${M}`)}else A.removeAttribute(M)}addClass(A,M){A.classList.add(M)}removeClass(A,M){A.classList.remove(M)}setStyle(A,M,P,U){U&(w.JOm.DashCase|w.JOm.Important)?A.style.setProperty(M,P,U&w.JOm.Important?"important":""):A.style[M]=P}removeStyle(A,M,P){P&w.JOm.DashCase?A.style.removeProperty(M):A.style[M]=""}setProperty(A,M,P){A[M]=P}setValue(A,M){A.nodeValue=M}listen(A,M,P){return"string"==typeof A?this.eventManager.addGlobalEventListener(A,M,L(P)):this.eventManager.addEventListener(A,M,L(P))}}function et(N){return"TEMPLATE"===N.tagName&&void 0!==N.content}class ze extends j{constructor(A,M,P,U){super(A),this.component=P;const ye=F(U+"-"+P.id,P.styles,[]);M.addStyles(ye),this.contentAttr=function K(N){return"_ngcontent-%COMP%".replace(H,N)}(U+"-"+P.id),this.hostAttr=function ae(N){return"_nghost-%COMP%".replace(H,N)}(U+"-"+P.id)}applyToHost(A){super.setAttribute(A,this.hostAttr,"")}createElement(A,M){const P=super.createElement(A,M);return super.setAttribute(P,this.contentAttr,""),P}}class Ve extends j{constructor(A,M,P,U){super(A),this.sharedStylesHost=M,this.hostEl=P,this.shadowRoot=P.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const ye=F(U.id,U.styles,[]);for(let Oe=0;Oe<ye.length;Oe++){const J=document.createElement("style");J.textContent=ye[Oe],this.shadowRoot.appendChild(J)}}nodeOrShadowRoot(A){return A===this.hostEl?this.shadowRoot:A}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(A,M){return super.appendChild(this.nodeOrShadowRoot(A),M)}insertBefore(A,M,P){return super.insertBefore(this.nodeOrShadowRoot(A),M,P)}removeChild(A,M){return super.removeChild(this.nodeOrShadowRoot(A),M)}parentNode(A){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(A)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Et=(()=>{class N extends se{constructor(M){super(M)}supports(M){return!0}addEventListener(M,P,U){return M.addEventListener(P,U,!1),()=>this.removeEventListener(M,P,U)}removeEventListener(M,P,U){return M.removeEventListener(P,U)}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(E.K0))},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const jt=["alt","control","meta","shift"],Vt={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},un={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},cn={alt:N=>N.altKey,control:N=>N.ctrlKey,meta:N=>N.metaKey,shift:N=>N.shiftKey};let mt=(()=>{class N extends se{constructor(M){super(M)}supports(M){return null!=N.parseEventName(M)}addEventListener(M,P,U){const ye=N.parseEventName(P),Oe=N.eventCallback(ye.fullKey,U,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,E.q)().onAndCancel(M,ye.domEventName,Oe))}static parseEventName(M){const P=M.toLowerCase().split("."),U=P.shift();if(0===P.length||"keydown"!==U&&"keyup"!==U)return null;const ye=N._normalizeKey(P.pop());let Oe="";if(jt.forEach(Ce=>{const Je=P.indexOf(Ce);Je>-1&&(P.splice(Je,1),Oe+=Ce+".")}),Oe+=ye,0!=P.length||0===ye.length)return null;const J={};return J.domEventName=U,J.fullKey=Oe,J}static getEventFullKey(M){let P="",U=function dt(N){let A=N.key;if(null==A){if(A=N.keyIdentifier,null==A)return"Unidentified";A.startsWith("U+")&&(A=String.fromCharCode(parseInt(A.substring(2),16)),3===N.location&&un.hasOwnProperty(A)&&(A=un[A]))}return Vt[A]||A}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(M);return U=U.toLowerCase()," "===U?U="space":"."===U&&(U="dot"),jt.forEach(ye=>{ye!=U&&cn[ye](M)&&(P+=ye+".")}),P+=U,P}static eventCallback(M,P,U){return ye=>{N.getEventFullKey(ye)===M&&U.runGuarded(()=>P(ye))}}static _normalizeKey(M){return"esc"===M?"escape":M}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(E.K0))},N.\u0275prov=w.Yz7({token:N,factory:N.\u0275fac}),N})();const dn=(0,w.eFA)(w._c5,"browser",[{provide:w.Lbi,useValue:E.bD},{provide:w.g9A,useValue:function Wr(){X.makeCurrent()},multi:!0},{provide:E.K0,useFactory:function rr(){return(0,w.RDi)(document),document},deps:[]}]),ln=new w.OlP(""),Ke=[{provide:w.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class De{addToWindow(A){w.dqk.getAngularTestability=(P,U=!0)=>{const ye=A.findTestabilityInTree(P,U);if(null==ye)throw new Error("Could not find testability for element.");return ye},w.dqk.getAllAngularTestabilities=()=>A.getAllTestabilities(),w.dqk.getAllAngularRootElements=()=>A.getAllRootElements(),w.dqk.frameworkStabilizers||(w.dqk.frameworkStabilizers=[]),w.dqk.frameworkStabilizers.push(P=>{const U=w.dqk.getAllAngularTestabilities();let ye=U.length,Oe=!1;const J=function(Ce){Oe=Oe||Ce,ye--,0==ye&&P(Oe)};U.forEach(function(Ce){Ce.whenStable(J)})})}findTestabilityInTree(A,M,P){return null==M?null:A.getTestability(M)??(P?(0,E.q)().isShadowRoot(M)?this.findTestabilityInTree(A,M.host,!0):this.findTestabilityInTree(A,M.parentElement,!0):null)}},deps:[]},{provide:w.lri,useClass:w.dDg,deps:[w.R0b,w.eoX,w.rWj]},{provide:w.dDg,useClass:w.dDg,deps:[w.R0b,w.eoX,w.rWj]}],Bn=[{provide:w.zSh,useValue:"root"},{provide:w.qLn,useFactory:function wt(){return new w.qLn},deps:[]},{provide:pe,useClass:Et,multi:!0,deps:[E.K0,w.R0b,w.Lbi]},{provide:pe,useClass:mt,multi:!0,deps:[E.K0]},{provide:G,useClass:G,deps:[me,Ge,w.AFp]},{provide:w.FYo,useExisting:G},{provide:ue,useExisting:Ge},{provide:Ge,useClass:Ge,deps:[E.K0]},{provide:me,useClass:me,deps:[pe,w.R0b]},{provide:E.JF,useClass:Ye,deps:[]},[]];let Hn=(()=>{class N{constructor(M){}static withServerTransition(M){return{ngModule:N,providers:[{provide:w.AFp,useValue:M.appId},{provide:we,useExisting:w.AFp},W]}}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(ln,12))},N.\u0275mod=w.oAB({type:N}),N.\u0275inj=w.cJS({providers:[...Bn,...Ke],imports:[E.ez,w.hGG]}),N})(),_e=(()=>{class N{constructor(M){this._doc=M}getTitle(){return this._doc.title}setTitle(M){this._doc.title=M||""}}return N.\u0275fac=function(M){return new(M||N)(w.LFG(E.K0))},N.\u0275prov=w.Yz7({token:N,factory:function(M){let P=null;return P=M?new M:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ht(){return new _e((0,w.LFG)(E.K0))}(),P},providedIn:"root"}),N})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */typeof window<"u"&&window}
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
     */,548:($e,fe,x)=>{x.d(fe,{Bz:()=>cu});var E=x(895),w=x(256),re=x(669),X=x(76);function V(...l){const u=(0,re.yG)(l);return(0,X.D)(l,u)}var Ie=x(579);class ie extends Ie.x{constructor(u){super(),this._value=u}get value(){return this.getValue()}_subscribe(u){const a=super._subscribe(u);return!a.closed&&u.next(this._value),a}getValue(){const{hasError:u,thrownError:a,_value:f}=this;if(u)throw a;return this._throwIfClosed(),f}next(u){super.next(this._value=u)}}var Pe=x(306);const{isArray:we}=Array,{getPrototypeOf:te,prototype:W,keys:De}=Object;var me=x(671),se=x(4);const{isArray:ue}=Array;var H=x(403),ee=x(672);function Ae(...l){const u=(0,re.yG)(l),a=(0,re.jO)(l),{args:f,keys:g}=function Ye(l){if(1===l.length){const u=l[0];if(we(u))return{args:u,keys:null};if(function pe(l){return l&&"object"==typeof l&&te(l)===W}(u)){const a=De(u);return{args:a.map(f=>u[f]),keys:a}}}return{args:l,keys:null}}(l);if(0===f.length)return(0,X.D)([],u);const v=new Pe.y(function ce(l,u,a=me.y){return f=>{ve(u,()=>{const{length:g}=l,v=new Array(g);let I=g,b=g;for(let O=0;O<g;O++)ve(u,()=>{const Z=(0,X.D)(l[O],u);let Ne=!1;Z.subscribe((0,H.x)(f,le=>{v[O]=le,Ne||(Ne=!0,b--),b||f.next(a(v.slice()))},()=>{--I||f.complete()}))},f)},f)}}(f,u,g?I=>function Qe(l,u){return l.reduce((a,f,g)=>(a[f]=u[g],a),{})}(g,I):me.y));return a?v.pipe(function Ze(l){return(0,se.U)(u=>function Ge(l,u){return ue(u)?l(...u):l(u)}(l,u))}(a)):v}function ve(l,u,a){l?(0,ee.f)(a,l,u):u()}var K=x(576);function ae(l,u){const a=(0,K.m)(l)?l:()=>l,f=g=>g.error(a());return new Pe.y(u?g=>u.schedule(f,0,g):f)}const L=(0,x(888).d)(l=>function(){l(this),this.name="EmptyError",this.message="no elements in sequence"});var k=x(189);function j(...l){return function G(){return(0,k.J)(1)}()((0,X.D)(l,(0,re.yG)(l)))}var ne=x(421);function ke(l){return new Pe.y(u=>{(0,ne.Xf)(l()).subscribe(u)})}var et=x(727),ze=x(482);function Ve(){return(0,ze.e)((l,u)=>{let a=null;l._refCount++;const f=(0,H.x)(u,void 0,void 0,void 0,()=>{if(!l||l._refCount<=0||0<--l._refCount)return void(a=null);const g=l._connection,v=a;a=null,g&&(!v||g===v)&&g.unsubscribe(),u.unsubscribe()});l.subscribe(f),f.closed||(a=l.connect())})}class Et extends Pe.y{constructor(u,a){super(),this.source=u,this.subjectFactory=a,this._subject=null,this._refCount=0,this._connection=null,(0,ze.A)(u)&&(this.lift=u.lift)}_subscribe(u){return this.getSubject().subscribe(u)}getSubject(){const u=this._subject;return(!u||u.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;const{_connection:u}=this;this._subject=this._connection=null,u?.unsubscribe()}connect(){let u=this._connection;if(!u){u=this._connection=new et.w0;const a=this.getSubject();u.add(this.source.subscribe((0,H.x)(a,void 0,()=>{this._teardown(),a.complete()},f=>{this._teardown(),a.error(f)},()=>this._teardown()))),u.closed&&(this._connection=null,u=et.w0.EMPTY)}return u}refCount(){return Ve()(this)}}var jt=x(515);function ut(l,u){return(0,ze.e)((a,f)=>{let g=null,v=0,I=!1;const b=()=>I&&!g&&f.complete();a.subscribe((0,H.x)(f,O=>{g?.unsubscribe();let Z=0;const Ne=v++;(0,ne.Xf)(l(O,Ne)).subscribe(g=(0,H.x)(f,le=>f.next(u?u(O,le,Ne,Z++):le),()=>{g=null,b()}))},()=>{I=!0,b()}))})}function un(l,u,a,f,g){return(v,I)=>{let b=a,O=u,Z=0;v.subscribe((0,H.x)(I,Ne=>{const le=Z++;O=b?l(O,Ne,le):(b=!0,Ne),f&&I.next(O)},g&&(()=>{b&&I.next(O),I.complete()})))}}function cn(l,u){return(0,ze.e)(un(l,u,arguments.length>=2,!0))}function mt(l,u){return(0,ze.e)((a,f)=>{let g=0;a.subscribe((0,H.x)(f,v=>l.call(u,v,g++)&&f.next(v)))})}function dt(l){return(0,ze.e)((u,a)=>{let v,f=null,g=!1;f=u.subscribe((0,H.x)(a,void 0,void 0,I=>{v=(0,ne.Xf)(l(I,dt(l)(u))),f?(f.unsubscribe(),f=null,v.subscribe(a)):g=!0})),g&&(f.unsubscribe(),f=null,v.subscribe(a))})}var Fe=x(577);function Cr(l,u){return(0,K.m)(u)?(0,Fe.z)(l,u,1):(0,Fe.z)(l,1)}function Eo(l){return l<=0?()=>jt.E:(0,ze.e)((u,a)=>{let f=[];u.subscribe((0,H.x)(a,g=>{f.push(g),l<f.length&&f.shift()},()=>{for(const g of f)a.next(g);a.complete()},void 0,()=>{f=null}))})}function Wr(l=wt){return(0,ze.e)((u,a)=>{let f=!1;u.subscribe((0,H.x)(a,g=>{f=!0,a.next(g)},()=>f?a.complete():a.error(l())))})}function wt(){return new L}function rr(l){return(0,ze.e)((u,a)=>{let f=!1;u.subscribe((0,H.x)(a,g=>{f=!0,a.next(g)},()=>{f||a.next(l),a.complete()}))})}var dn=x(698);function ln(l,u){const a=arguments.length>=2;return f=>f.pipe(l?mt((g,v)=>l(g,v,f)):me.y,(0,dn.q)(1),a?rr(u):Wr(()=>new L))}function Ke(l,u,a){const f=(0,K.m)(l)||u||a?{next:l,error:u,complete:a}:l;return f?(0,ze.e)((g,v)=>{var I;null===(I=f.subscribe)||void 0===I||I.call(f);let b=!0;g.subscribe((0,H.x)(v,O=>{var Z;null===(Z=f.next)||void 0===Z||Z.call(f,O),v.next(O)},()=>{var O;b=!1,null===(O=f.complete)||void 0===O||O.call(f),v.complete()},O=>{var Z;b=!1,null===(Z=f.error)||void 0===Z||Z.call(f,O),v.error(O)},()=>{var O,Z;b&&(null===(O=f.unsubscribe)||void 0===O||O.call(f)),null===(Z=f.finalize)||void 0===Z||Z.call(f)}))}):me.y}function Hn(l){return(0,ze.e)((u,a)=>{try{u.subscribe(a)}finally{a.add(l)}})}var or=x(481);
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
     */class Bt{constructor(u,a){this.id=u,this.url=a}}class ir extends Bt{constructor(u,a,f="imperative",g=null){super(u,a),this.type=0,this.navigationTrigger=f,this.restoredState=g}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Ht extends Bt{constructor(u,a,f){super(u,a),this.urlAfterRedirects=f,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class _e extends Bt{constructor(u,a,f){super(u,a),this.reason=f,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class lt extends Bt{constructor(u,a,f){super(u,a),this.error=f,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class be extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Se extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Yr extends Bt{constructor(u,a,f,g,v){super(u,a),this.urlAfterRedirects=f,this.state=g,this.shouldActivate=v,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Un extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class rt extends Bt{constructor(u,a,f,g){super(u,a),this.urlAfterRedirects=f,this.state=g,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Tt{constructor(u){this.route=u,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Wt{constructor(u){this.route=u,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class wr{constructor(u){this.snapshot=u,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class qe{constructor(u){this.snapshot=u,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class ft{constructor(u){this.snapshot=u,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class nt{constructor(u){this.snapshot=u,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Io{constructor(u,a,f){this.routerEvent=u,this.position=a,this.anchor=f,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const de="primary";class fn{constructor(u){this.params=u||{}}has(u){return Object.prototype.hasOwnProperty.call(this.params,u)}get(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a[0]:a}return null}getAll(u){if(this.has(u)){const a=this.params[u];return Array.isArray(a)?a:[a]}return[]}get keys(){return Object.keys(this.params)}}function hn(l){return new fn(l)}const Sn="Redirecting to ",$n="ngNavigationCancelingError";function At(l){const u=Error("NavigationCancelingError: "+(l||""));return u[$n]=!0,u}function Mo(l,u,a){const f=a.path.split("/");if(f.length>l.length||"full"===a.pathMatch&&(u.hasChildren()||f.length<l.length))return null;const g={};for(let v=0;v<f.length;v++){const I=f[v],b=l[v];if(I.startsWith(":"))g[I.substring(1)]=b;else if(I!==b.path)return null}return{consumed:l.slice(0,f.length),posParams:g}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Xt(l,u){const a=l?Object.keys(l):void 0,f=u?Object.keys(u):void 0;if(!a||!f||a.length!=f.length)return!1;let g;for(let v=0;v<a.length;v++)if(g=a[v],!_r(l[g],u[g]))return!1;return!0}function _r(l,u){if(Array.isArray(l)&&Array.isArray(u)){if(l.length!==u.length)return!1;const a=[...l].sort(),f=[...u].sort();return a.every((g,v)=>f[v]===g)}return l===u}function Er(l){return Array.prototype.concat.apply([],l)}function qr(l){return l.length>0?l[l.length-1]:null}function Dt(l,u){for(const a in l)l.hasOwnProperty(a)&&u(l[a],a)}function en(l){return(0,w.CqO)(l)?l:(0,w.QGY)(l)?(0,X.D)(Promise.resolve(l)):V(l)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const N=!1,M={exact:function Oe(l,u,a){if(!Ut(l.segments,u.segments)||!xt(l.segments,u.segments,a)||l.numberOfChildren!==u.numberOfChildren)return!1;for(const f in u.children)if(!l.children[f]||!Oe(l.children[f],u.children[f],a))return!1;return!0},subset:Ce},P={exact:function ye(l,u){return Xt(l,u)},subset:function J(l,u){return Object.keys(u).length<=Object.keys(l).length&&Object.keys(u).every(a=>_r(l[a],u[a]))},ignored:()=>!0};function U(l,u,a){return M[a.paths](l.root,u.root,a.matrixParams)&&P[a.queryParams](l.queryParams,u.queryParams)&&!("exact"===a.fragment&&l.fragment!==u.fragment)}function Ce(l,u,a){return Je(l,u,u.segments,a)}function Je(l,u,a,f){if(l.segments.length>a.length){const g=l.segments.slice(0,a.length);return!(!Ut(g,a)||u.hasChildren()||!xt(g,a,f))}if(l.segments.length===a.length){if(!Ut(l.segments,a)||!xt(l.segments,a,f))return!1;for(const g in u.children)if(!l.children[g]||!Ce(l.children[g],u.children[g],f))return!1;return!0}{const g=a.slice(0,l.segments.length),v=a.slice(l.segments.length);return!!(Ut(l.segments,g)&&xt(l.segments,g,f)&&l.children[de])&&Je(l.children[de],u,v,f)}}function xt(l,u,a){return u.every((f,g)=>P[a](l[g].parameters,f.parameters))}class Ft{constructor(u,a,f){this.root=u,this.queryParams=a,this.fragment=f}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=hn(this.queryParams)),this._queryParamMap}toString(){return ur.serialize(this)}}class Ee{constructor(u,a){this.segments=u,this.children=a,this.parent=null,Dt(a,(f,g)=>f.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Gn(this)}}class tn{constructor(u,a){this.path=u,this.parameters=a}get parameterMap(){return this._parameterMap||(this._parameterMap=hn(this.parameters)),this._parameterMap}toString(){return tt(this)}}function Ut(l,u){return l.length===u.length&&l.every((a,f)=>a.path===u[f].path)}class je{}class ar{parse(u){const a=new bo(u);return new Ft(a.parseRootSegment(),a.parseQueryParams(),a.parseFragment())}serialize(u){const a=`/${nn(u.root,!0)}`,f=function bi(l){const u=Object.keys(l).map(a=>{const f=l[a];return Array.isArray(f)?f.map(g=>`${pn(a)}=${pn(g)}`).join("&"):`${pn(a)}=${pn(f)}`}).filter(a=>!!a);return u.length?`?${u.join("&")}`:""}(u.queryParams);return`${a}${f}${"string"==typeof u.fragment?`#${function Tn(l){return encodeURI(l)}(u.fragment)}`:""}`}}const ur=new ar;function Gn(l){return l.segments.map(u=>tt(u)).join("/")}function nn(l,u){if(!l.hasChildren())return Gn(l);if(u){const a=l.children[de]?nn(l.children[de],!1):"",f=[];return Dt(l.children,(g,v)=>{v!==de&&f.push(`${v}:${nn(g,!1)}`)}),f.length>0?`${a}(${f.join("//")})`:a}{const a=function Cn(l,u){let a=[];return Dt(l.children,(f,g)=>{g===de&&(a=a.concat(u(f,g)))}),Dt(l.children,(f,g)=>{g!==de&&(a=a.concat(u(f,g)))}),a}(l,(f,g)=>g===de?[nn(l.children[de],!1)]:[`${g}:${nn(f,!1)}`]);return 1===Object.keys(l.children).length&&null!=l.children[de]?`${Gn(l)}/${a[0]}`:`${Gn(l)}/(${a.join("//")})`}}function It(l){return encodeURIComponent(l).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function pn(l){return It(l).replace(/%3B/gi,";")}function $t(l){return It(l).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function gn(l){return decodeURIComponent(l)}function Mr(l){return gn(l.replace(/\+/g,"%20"))}function tt(l){return`${$t(l.path)}${function Mi(l){return Object.keys(l).map(u=>`;${$t(u)}=${$t(l[u])}`).join("")}(l.parameters)}`}const lr=/^[^\/()?;=#]+/;function wn(l){const u=l.match(lr);return u?u[0]:""}const An=/^[^=?&#]+/,xn=/^[^&#]+/;class bo{constructor(u){this.url=u,this.remaining=u}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ee([],{}):new Ee([],this.parseChildren())}parseQueryParams(){const u={};if(this.consumeOptional("?"))do{this.parseQueryParam(u)}while(this.consumeOptional("&"));return u}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const u=[];for(this.peekStartsWith("(")||u.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),u.push(this.parseSegment());let a={};this.peekStartsWith("/(")&&(this.capture("/"),a=this.parseParens(!0));let f={};return this.peekStartsWith("(")&&(f=this.parseParens(!1)),(u.length>0||Object.keys(a).length>0)&&(f[de]=new Ee(u,a)),f}parseSegment(){const u=wn(this.remaining);if(""===u&&this.peekStartsWith(";"))throw new w.vHH(4009,N);return this.capture(u),new tn(gn(u),this.parseMatrixParams())}parseMatrixParams(){const u={};for(;this.consumeOptional(";");)this.parseParam(u);return u}parseParam(u){const a=wn(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const g=wn(this.remaining);g&&(f=g,this.capture(f))}u[gn(a)]=gn(f)}parseQueryParam(u){const a=function br(l){const u=l.match(An);return u?u[0]:""}(this.remaining);if(!a)return;this.capture(a);let f="";if(this.consumeOptional("=")){const I=function Nt(l){const u=l.match(xn);return u?u[0]:""}(this.remaining);I&&(f=I,this.capture(f))}const g=Mr(a),v=Mr(f);if(u.hasOwnProperty(g)){let I=u[g];Array.isArray(I)||(I=[I],u[g]=I),I.push(v)}else u[g]=v}parseParens(u){const a={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const f=wn(this.remaining),g=this.remaining[f.length];if("/"!==g&&")"!==g&&";"!==g)throw new w.vHH(4010,N);let v;f.indexOf(":")>-1?(v=f.slice(0,f.indexOf(":")),this.capture(v),this.capture(":")):u&&(v=de);const I=this.parseChildren();a[v]=1===Object.keys(I).length?I[de]:new Ee([],I),this.consumeOptional("//")}return a}peekStartsWith(u){return this.remaining.startsWith(u)}consumeOptional(u){return!!this.peekStartsWith(u)&&(this.remaining=this.remaining.substring(u.length),!0)}capture(u){if(!this.consumeOptional(u))throw new w.vHH(4011,N)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ot{constructor(u){this._root=u}get root(){return this._root.value}parent(u){const a=this.pathFromRoot(u);return a.length>1?a[a.length-2]:null}children(u){const a=Gt(u,this._root);return a?a.children.map(f=>f.value):[]}firstChild(u){const a=Gt(u,this._root);return a&&a.children.length>0?a.children[0].value:null}siblings(u){const a=cr(u,this._root);return a.length<2?[]:a[a.length-2].children.map(g=>g.value).filter(g=>g!==u)}pathFromRoot(u){return cr(u,this._root).map(a=>a.value)}}function Gt(l,u){if(l===u.value)return u;for(const a of u.children){const f=Gt(l,a);if(f)return f}return null}function cr(l,u){if(l===u.value)return[u];for(const a of u.children){const f=cr(l,a);if(f.length)return f.unshift(u),f}return[]}class rn{constructor(u,a){this.value=u,this.children=a}toString(){return`TreeNode(${this.value})`}}function Ct(l){const u={};return l&&l.children.forEach(a=>u[a.value.outlet]=a),u
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class Yt extends Ot{constructor(u,a){super(u),this.snapshot=a,Ao(this,u)}toString(){return this.snapshot.toString()}}function So(l,u){const a=function Ms(l,u){const I=new Kr([],{},{},"",{},de,u,null,l.root,-1,{});return new Si("",new rn(I,[]))}(l,u),f=new ie([new tn("",{})]),g=new ie({}),v=new ie({}),I=new ie({}),b=new ie(""),O=new zn(f,g,I,b,v,de,u,a.root);return O.snapshot=a.root,new Yt(new rn(O,[]),a)}class zn{constructor(u,a,f,g,v,I,b,O){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=v,this.outlet=I,this.component=b,this._futureSnapshot=O}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,se.U)(u=>hn(u)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,se.U)(u=>hn(u)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function To(l,u="emptyOnly"){const a=l.pathFromRoot;let f=0;if("always"!==u)for(f=a.length-1;f>=1;){const g=a[f],v=a[f-1];if(g.routeConfig&&""===g.routeConfig.path)f--;else{if(v.component)break;f--}}return function bs(l){return l.reduce((u,a)=>({params:{...u.params,...a.params},data:{...u.data,...a.data},resolve:{...a.data,...u.resolve,...a.routeConfig?.data,...a._resolvedData}}),{params:{},data:{},resolve:{}})}(a.slice(f))}class Kr{constructor(u,a,f,g,v,I,b,O,Z,Ne,le,at){this.url=u,this.params=a,this.queryParams=f,this.fragment=g,this.data=v,this.outlet=I,this.component=b,this.routeConfig=O,this._urlSegment=Z,this._lastPathIndex=Ne,this._correctedLastPathIndex=at??Ne,this._resolve=le}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=hn(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=hn(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(f=>f.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Si extends Ot{constructor(u,a){super(a),this.url=u,Ao(this,a)}toString(){return Ti(this._root)}}function Ao(l,u){u.value._routerState=l,u.children.forEach(a=>Ao(l,a))}function Ti(l){const u=l.children.length>0?` { ${l.children.map(Ti).join(", ")} } `:"";return`${l.value}${u}`}function xo(l){if(l.snapshot){const u=l.snapshot,a=l._futureSnapshot;l.snapshot=a,Xt(u.queryParams,a.queryParams)||l.queryParams.next(a.queryParams),u.fragment!==a.fragment&&l.fragment.next(a.fragment),Xt(u.params,a.params)||l.params.next(a.params),function sr(l,u){if(l.length!==u.length)return!1;for(let a=0;a<l.length;++a)if(!Xt(l[a],u[a]))return!1;return!0}(u.url,a.url)||l.url.next(a.url),Xt(u.data,a.data)||l.data.next(a.data)}else l.snapshot=l._futureSnapshot,l.data.next(l._futureSnapshot.data)}function Ro(l,u){const a=Xt(l.params,u.params)&&function ht(l,u){return Ut(l,u)&&l.every((a,f)=>Xt(a.parameters,u[f].parameters))}(l.url,u.url);return a&&!(!l.parent!=!u.parent)&&(!l.parent||Ro(l.parent,u.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Sr(l,u,a){if(a&&l.shouldReuseRoute(u.value,a.value.snapshot)){const f=a.value;f._futureSnapshot=u.value;const g=function Ts(l,u,a){return u.children.map(f=>{for(const g of a.children)if(l.shouldReuseRoute(f.value,g.value.snapshot))return Sr(l,f,g);return Sr(l,f)})}(l,u,a);return new rn(f,g)}{if(l.shouldAttach(u.value)){const v=l.retrieve(u.value);if(null!==v){const I=v.route;return I.value._futureSnapshot=u.value,I.children=u.children.map(b=>Sr(l,b)),I}}const f=function As(l){return new zn(new ie(l.url),new ie(l.params),new ie(l.queryParams),new ie(l.fragment),new ie(l.data),l.outlet,l.component,l)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(u.value),g=u.children.map(v=>Sr(l,v));return new rn(f,g)}}function Qr(l){return"object"==typeof l&&null!=l&&!l.outlets&&!l.segmentPath}function Wn(l){return"object"==typeof l&&null!=l&&l.outlets}function dr(l,u,a,f,g){let v={};if(f&&Dt(f,(b,O)=>{v[O]=Array.isArray(b)?b.map(Z=>`${Z}`):`${b}`}),l===u)return new Ft(a,v,g);const I=Zr(l,u,a);return new Ft(I,v,g)}function Zr(l,u,a){const f={};return Dt(l.children,(g,v)=>{f[v]=g===u?a:Zr(g,u,a)}),new Ee(l.segments,f)}class Jr{constructor(u,a,f){if(this.isAbsolute=u,this.numberOfDoubleDots=a,this.commands=f,u&&f.length>0&&Qr(f[0]))throw new w.vHH(4003,false);const g=f.find(Wn);if(g&&g!==qr(f))throw new w.vHH(4004,false)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class _n{constructor(u,a,f){this.segmentGroup=u,this.processChildren=a,this.index=f}}function No(l,u,a){if(l||(l=new Ee([],{})),0===l.segments.length&&l.hasChildren())return Ar(l,u,a);const f=function Ri(l,u,a){let f=0,g=u;const v={match:!1,pathIndex:0,commandIndex:0};for(;g<l.segments.length;){if(f>=a.length)return v;const I=l.segments[g],b=a[f];if(Wn(b))break;const O=`${b}`,Z=f<a.length-1?a[f+1]:null;if(g>0&&void 0===O)break;if(O&&Z&&"object"==typeof Z&&void 0===Z.outlets){if(!Pi(O,Z,I))return v;f+=2}else{if(!Pi(O,{},I))return v;f++}g++}return{match:!0,pathIndex:g,commandIndex:f}}(l,u,a),g=a.slice(f.commandIndex);if(f.match&&f.pathIndex<l.segments.length){const v=new Ee(l.segments.slice(0,f.pathIndex),{});return v.children[de]=new Ee(l.segments.slice(f.pathIndex),l.children),Ar(v,0,g)}return f.match&&0===g.length?new Ee(l.segments,{}):f.match&&!l.hasChildren()?Xr(l,u,a):f.match?Ar(l,0,g):Xr(l,u,a)}function Ar(l,u,a){if(0===a.length)return new Ee(l.segments,{});{const f=function Fo(l){return Wn(l[0])?l[0].outlets:{[de]:l}}(a),g={};return Dt(f,(v,I)=>{"string"==typeof v&&(v=[v]),null!==v&&(g[I]=No(l.children[I],u,v))}),Dt(l.children,(v,I)=>{void 0===f[I]&&(g[I]=v)}),new Ee(l.segments,g)}}function Xr(l,u,a){const f=l.segments.slice(0,u);let g=0;for(;g<a.length;){const v=a[g];if(Wn(v)){const O=Rs(v.outlets);return new Ee(f,O)}if(0===g&&Qr(a[0])){f.push(new tn(l.segments[u].path,eo(a[0]))),g++;continue}const I=Wn(v)?v.outlets[de]:`${v}`,b=g<a.length-1?a[g+1]:null;I&&b&&Qr(b)?(f.push(new tn(I,eo(b))),g+=2):(f.push(new tn(I,{})),g++)}return new Ee(f,{})}function Rs(l){const u={};return Dt(l,(a,f)=>{"string"==typeof a&&(a=[a]),null!==a&&(u[f]=Xr(new Ee([],{}),0,a))}),u}function eo(l){const u={};return Dt(l,(a,f)=>u[f]=`${a}`),u}function Pi(l,u,a){return l==a.path&&Xt(u,a.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class qt{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new Rn,this.attachRef=null}}class Rn{constructor(){this.contexts=new Map}onChildOutletCreated(u,a){const f=this.getOrCreateContext(u);f.outlet=a,this.contexts.set(u,f)}onChildOutletDestroyed(u){const a=this.getContext(u);a&&(a.outlet=null,a.attachRef=null)}onOutletDeactivated(){const u=this.contexts;return this.contexts=new Map,u}onOutletReAttached(u){this.contexts=u}getOrCreateContext(u){let a=this.getContext(u);return a||(a=new qt,this.contexts.set(u,a)),a}getContext(u){return this.contexts.get(u)||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const fr=!1;let xr=(()=>{class l{constructor(a,f,g,v,I){this.parentContexts=a,this.location=f,this.changeDetector=v,this.environmentInjector=I,this.activated=null,this._activatedRoute=null,this.activateEvents=new w.vpe,this.deactivateEvents=new w.vpe,this.attachEvents=new w.vpe,this.detachEvents=new w.vpe,this.name=g||de,a.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.getContext(this.name)?.outlet===this&&this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const a=this.parentContexts.getContext(this.name);a&&a.route&&(a.attachRef?this.attach(a.attachRef,a.route):this.activateWith(a.route,a.injector))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w.vHH(4012,fr);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w.vHH(4012,fr);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w.vHH(4012,fr);this.location.detach();const a=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(a.instance),a}attach(a,f){this.activated=a,this._activatedRoute=f,this.location.insert(a.hostView),this.attachEvents.emit(a.instance)}deactivate(){if(this.activated){const a=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(a)}}activateWith(a,f){if(this.isActivated)throw new w.vHH(4013,fr);this._activatedRoute=a;const g=this.location,I=a._futureSnapshot.component,b=this.parentContexts.getOrCreateContext(this.name).children,O=new Ps(a,b,g.injector);if(f&&function Fs(l){return!!l.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(f)){const Z=f.resolveComponentFactory(I);this.activated=g.createComponent(Z,g.length,O)}else this.activated=g.createComponent(I,{index:g.length,injector:O,environmentInjector:f??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return l.\u0275fac=function(a){return new(a||l)(w.Y36(Rn),w.Y36(w.s_b),w.$8M("name"),w.Y36(w.sBO),w.Y36(w.lqb))},l.\u0275dir=w.lG2({type:l,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"]}),l})();class Ps{constructor(u,a,f){this.route=u,this.childContexts=a,this.parent=f}get(u,a){return u===zn?this.route:u===Rn?this.childContexts:this.parent.get(u,a)}}let h=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275cmp=w.Xpm({type:l,selectors:[["ng-component"]],decls:1,vars:0,template:function(a,f){1&a&&w._UZ(0,"router-outlet")},dependencies:[xr],encapsulation:2}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function D(l,u){return l.providers&&!l._injector&&(l._injector=(0,w.MMx)(l.providers,u,`Route: ${l.path}`)),l._injector??u}function Xe(l){const u=l.children&&l.children.map(Xe),a=u?{...l,children:u}:{...l};return!a.component&&!a.loadComponent&&(u||a.loadChildren)&&a.outlet&&a.outlet!==de&&(a.component=h),a}function Le(l){return l.outlet||de}function ct(l,u){const a=l.filter(f=>Le(f)===u);return a.push(...l.filter(f=>Le(f)!==u)),a}function it(l){if(!l)return null;if(l.routeConfig?._injector)return l.routeConfig._injector;for(let u=l.parent;u;u=u.parent){const a=u.routeConfig;if(a?._loadedInjector)return a._loadedInjector;if(a?._injector)return a._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class xe{constructor(u,a,f,g){this.routeReuseStrategy=u,this.futureState=a,this.currState=f,this.forwardEvent=g}activate(u){const a=this.futureState._root,f=this.currState?this.currState._root:null;this.deactivateChildRoutes(a,f,u),xo(this.futureState.root),this.activateChildRoutes(a,f,u)}deactivateChildRoutes(u,a,f){const g=Ct(a);u.children.forEach(v=>{const I=v.value.outlet;this.deactivateRoutes(v,g[I],f),delete g[I]}),Dt(g,(v,I)=>{this.deactivateRouteAndItsChildren(v,f)})}deactivateRoutes(u,a,f){const g=u.value,v=a?a.value:null;if(g===v)if(g.component){const I=f.getContext(g.outlet);I&&this.deactivateChildRoutes(u,a,I.children)}else this.deactivateChildRoutes(u,a,f);else v&&this.deactivateRouteAndItsChildren(a,f)}deactivateRouteAndItsChildren(u,a){u.value.component&&this.routeReuseStrategy.shouldDetach(u.value.snapshot)?this.detachAndStoreRouteSubtree(u,a):this.deactivateRouteAndOutlet(u,a)}detachAndStoreRouteSubtree(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,v=Ct(u);for(const I of Object.keys(v))this.deactivateRouteAndItsChildren(v[I],g);if(f&&f.outlet){const I=f.outlet.detach(),b=f.children.onOutletDeactivated();this.routeReuseStrategy.store(u.value.snapshot,{componentRef:I,route:u,contexts:b})}}deactivateRouteAndOutlet(u,a){const f=a.getContext(u.value.outlet),g=f&&u.value.component?f.children:a,v=Ct(u);for(const I of Object.keys(v))this.deactivateRouteAndItsChildren(v[I],g);f&&f.outlet&&(f.outlet.deactivate(),f.children.onOutletDeactivated(),f.attachRef=null,f.resolver=null,f.route=null)}activateChildRoutes(u,a,f){const g=Ct(a);u.children.forEach(v=>{this.activateRoutes(v,g[v.value.outlet],f),this.forwardEvent(new nt(v.value.snapshot))}),u.children.length&&this.forwardEvent(new qe(u.value.snapshot))}activateRoutes(u,a,f){const g=u.value,v=a?a.value:null;if(xo(g),g===v)if(g.component){const I=f.getOrCreateContext(g.outlet);this.activateChildRoutes(u,a,I.children)}else this.activateChildRoutes(u,a,f);else if(g.component){const I=f.getOrCreateContext(g.outlet);if(this.routeReuseStrategy.shouldAttach(g.snapshot)){const b=this.routeReuseStrategy.retrieve(g.snapshot);this.routeReuseStrategy.store(g.snapshot,null),I.children.onOutletReAttached(b.contexts),I.attachRef=b.componentRef,I.route=b.route.value,I.outlet&&I.outlet.attach(b.componentRef,b.route.value),xo(b.route.value),this.activateChildRoutes(u,null,I.children)}else{const b=it(g.snapshot),O=b?.get(w._Vd)??null;I.attachRef=null,I.route=g,I.resolver=O,I.injector=b,I.outlet&&I.outlet.activateWith(g,I.injector),this.activateChildRoutes(u,null,I.children)}}else this.activateChildRoutes(u,null,f)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function on(l){return"function"==typeof l}function Kt(l){return l instanceof Ft}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const oo=Symbol("INITIAL_VALUE");function z(){return ut(l=>Ae(l.map(u=>u.pipe((0,dn.q)(1),function Vt(...l){const u=(0,re.yG)(l);return(0,ze.e)((a,f)=>{(u?j(l,a,u):j(l,a)).subscribe(f)})}(oo)))).pipe(cn((u,a)=>{let f=!1;return a.reduce((g,v,I)=>g!==oo?g:(v===oo&&(f=!0),f||!1!==v&&I!==a.length-1&&!Kt(v)?g:v),u)},oo),mt(u=>u!==oo),(0,se.U)(u=>Kt(u)?u:!0===u),(0,dn.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ue={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Lo(l,u,a){if(""===u.path)return"full"===u.pathMatch&&(l.hasChildren()||a.length>0)?{...Ue}:{matched:!0,consumedSegments:[],remainingSegments:a,parameters:{},positionalParamSegments:{}};const g=(u.matcher||Mo)(a,l,u);if(!g)return{...Ue};const v={};Dt(g.posParams,(b,O)=>{v[O]=b.path});const I=g.consumed.length>0?{...v,...g.consumed[g.consumed.length-1].parameters}:v;return{matched:!0,consumedSegments:g.consumed,remainingSegments:a.slice(g.consumed.length),parameters:I,positionalParamSegments:g.posParams??{}}}function ko(l,u,a,f,g="corrected"){if(a.length>0&&function io(l,u,a){return a.some(f=>Rr(l,u,f)&&Le(f)!==de)}(l,a,f)){const I=new Ee(u,function Ns(l,u,a,f){const g={};g[de]=f,f._sourceSegment=l,f._segmentIndexShift=u.length;for(const v of a)if(""===v.path&&Le(v)!==de){const I=new Ee([],{});I._sourceSegment=l,I._segmentIndexShift=u.length,g[Le(v)]=I}return g}(l,u,f,new Ee(a,l.children)));return I._sourceSegment=l,I._segmentIndexShift=u.length,{segmentGroup:I,slicedSegments:[]}}if(0===a.length&&function En(l,u,a){return a.some(f=>Rr(l,u,f))}(l,a,f)){const I=new Ee(l.segments,function bt(l,u,a,f,g,v){const I={};for(const b of f)if(Rr(l,a,b)&&!g[Le(b)]){const O=new Ee([],{});O._sourceSegment=l,O._segmentIndexShift="legacy"===v?l.segments.length:u.length,I[Le(b)]=O}return{...g,...I}}(l,u,a,f,l.children,g));return I._sourceSegment=l,I._segmentIndexShift=u.length,{segmentGroup:I,slicedSegments:a}}const v=new Ee(l.segments,l.children);return v._sourceSegment=l,v._segmentIndexShift=u.length,{segmentGroup:v,slicedSegments:a}}function Rr(l,u,a){return(!(l.hasChildren()||u.length>0)||"full"!==a.pathMatch)&&""===a.path}function jo(l,u,a,f){return!!(Le(l)===f||f!==de&&Rr(u,a,l))&&("**"===l.path||Lo(u,l,a).matched)}function Wa(l,u,a){return 0===u.length&&!l.children[a]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Vo=!1;class Fi{constructor(u){this.segmentGroup=u||null}}class so{constructor(u){this.urlTree=u}}function St(l){return ae(new Fi(l))}function In(l){return ae(new so(l))}class Ya{constructor(u,a,f,g,v){this.injector=u,this.configLoader=a,this.urlSerializer=f,this.urlTree=g,this.config=v,this.allowRedirects=!0}apply(){const u=ko(this.urlTree.root,[],[],this.config).segmentGroup,a=new Ee(u.segments,u.children);return this.expandSegmentGroup(this.injector,this.config,a,de).pipe((0,se.U)(v=>this.createUrlTree(Ni(v),this.urlTree.queryParams,this.urlTree.fragment))).pipe(dt(v=>{if(v instanceof so)return this.allowRedirects=!1,this.match(v.urlTree);throw v instanceof Fi?this.noMatchError(v):v}))}match(u){return this.expandSegmentGroup(this.injector,this.config,u.root,de).pipe((0,se.U)(g=>this.createUrlTree(Ni(g),u.queryParams,u.fragment))).pipe(dt(g=>{throw g instanceof Fi?this.noMatchError(g):g}))}noMatchError(u){return new w.vHH(4002,Vo)}createUrlTree(u,a,f){const g=u.segments.length>0?new Ee([],{[de]:u}):u;return new Ft(g,a,f)}expandSegmentGroup(u,a,f,g){return 0===f.segments.length&&f.hasChildren()?this.expandChildren(u,a,f).pipe((0,se.U)(v=>new Ee([],v))):this.expandSegment(u,f,a,f.segments,g,!0)}expandChildren(u,a,f){const g=[];for(const v of Object.keys(f.children))"primary"===v?g.unshift(v):g.push(v);return(0,X.D)(g).pipe(Cr(v=>{const I=f.children[v],b=ct(a,v);return this.expandSegmentGroup(u,b,I,v).pipe((0,se.U)(O=>({segment:O,outlet:v})))}),cn((v,I)=>(v[I.outlet]=I.segment,v),{}),function bn(l,u){const a=arguments.length>=2;return f=>f.pipe(l?mt((g,v)=>l(g,v,f)):me.y,Eo(1),a?rr(u):Wr(()=>new L))}())}expandSegment(u,a,f,g,v,I){return(0,X.D)(f).pipe(Cr(b=>this.expandSegmentAgainstRoute(u,a,f,b,g,v,I).pipe(dt(Z=>{if(Z instanceof Fi)return V(null);throw Z}))),ln(b=>!!b),dt((b,O)=>{if(b instanceof L||"EmptyError"===b.name)return Wa(a,g,v)?V(new Ee([],{})):St(a);throw b}))}expandSegmentAgainstRoute(u,a,f,g,v,I,b){return jo(g,a,v,I)?void 0===g.redirectTo?this.matchSegmentAgainstRoute(u,a,g,v,I):b&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(u,a,f,g,v,I):St(a):St(a)}expandSegmentAgainstRouteUsingRedirect(u,a,f,g,v,I){return"**"===g.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(u,f,g,I):this.expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,v,I)}expandWildCardWithParamsAgainstRouteUsingRedirect(u,a,f,g){const v=this.applyRedirectCommands([],f.redirectTo,{});return f.redirectTo.startsWith("/")?In(v):this.lineralizeSegments(f,v).pipe((0,Fe.z)(I=>{const b=new Ee(I,{});return this.expandSegment(u,b,a,I,g,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(u,a,f,g,v,I){const{matched:b,consumedSegments:O,remainingSegments:Z,positionalParamSegments:Ne}=Lo(a,g,v);if(!b)return St(a);const le=this.applyRedirectCommands(O,g.redirectTo,Ne);return g.redirectTo.startsWith("/")?In(le):this.lineralizeSegments(g,le).pipe((0,Fe.z)(at=>this.expandSegment(u,a,f,at.concat(Z),I,!1)))}matchSegmentAgainstRoute(u,a,f,g,v){if("**"===f.path)return u=D(f,u),f.loadChildren?(f._loadedRoutes?V({routes:f._loadedRoutes,injector:f._loadedInjector}):this.configLoader.loadChildren(u,f)).pipe((0,se.U)(le=>(f._loadedRoutes=le.routes,f._loadedInjector=le.injector,new Ee(g,{})))):V(new Ee(g,{}));const{matched:I,consumedSegments:b,remainingSegments:O}=Lo(a,f,g);return I?(u=D(f,u),this.getChildConfig(u,f,g).pipe((0,Fe.z)(Ne=>{const le=Ne.injector??u,at=Ne.routes,{segmentGroup:vt,slicedSegments:mn}=ko(a,b,O,at),Qo=new Ee(vt.segments,vt.children);if(0===mn.length&&Qo.hasChildren())return this.expandChildren(le,at,Qo).pipe((0,se.U)(Ki=>new Ee(b,Ki)));if(0===at.length&&0===mn.length)return V(new Ee(b,{}));const ra=Le(f)===v;return this.expandSegment(le,Qo,at,mn,ra?de:v,!0).pipe((0,se.U)(Lt=>new Ee(b.concat(Lt.segments),Lt.children)))}))):St(a)}getChildConfig(u,a,f){return a.children?V({routes:a.children,injector:u}):a.loadChildren?void 0!==a._loadedRoutes?V({routes:a._loadedRoutes,injector:a._loadedInjector}):this.runCanLoadGuards(u,a,f).pipe((0,Fe.z)(g=>g?this.configLoader.loadChildren(u,a).pipe(Ke(v=>{a._loadedRoutes=v.routes,a._loadedInjector=v.injector})):function Pr(l){return ae(At(Vo))}())):V({routes:[],injector:u})}runCanLoadGuards(u,a,f){const g=a.canLoad;return g&&0!==g.length?V(g.map(I=>{const b=u.get(I);return en(function Oo(l){return l&&on(l.canLoad)}(b)?b.canLoad(a,f):b(a,f))})).pipe(z(),Ke(I=>{if(!Kt(I))return;const b=At(Sn+this.urlSerializer.serialize(I));throw b.url=I,b}),(0,se.U)(I=>!0===I)):V(!0)}lineralizeSegments(u,a){let f=[],g=a.root;for(;;){if(f=f.concat(g.segments),0===g.numberOfChildren)return V(f);if(g.numberOfChildren>1||!g.children[de])return ae(new w.vHH(4e3,Vo));g=g.children[de]}}applyRedirectCommands(u,a,f){return this.applyRedirectCreatreUrlTree(a,this.urlSerializer.parse(a),u,f)}applyRedirectCreatreUrlTree(u,a,f,g){const v=this.createSegmentGroup(u,a.root,f,g);return new Ft(v,this.createQueryParams(a.queryParams,this.urlTree.queryParams),a.fragment)}createQueryParams(u,a){const f={};return Dt(u,(g,v)=>{if("string"==typeof g&&g.startsWith(":")){const b=g.substring(1);f[v]=a[b]}else f[v]=g}),f}createSegmentGroup(u,a,f,g){const v=this.createSegments(u,a.segments,f,g);let I={};return Dt(a.children,(b,O)=>{I[O]=this.createSegmentGroup(u,b,f,g)}),new Ee(v,I)}createSegments(u,a,f,g){return a.map(v=>v.path.startsWith(":")?this.findPosParam(u,v,g):this.findOrReturn(v,f))}findPosParam(u,a,f){const g=f[a.path.substring(1)];if(!g)throw new w.vHH(4001,Vo);return g}findOrReturn(u,a){let f=0;for(const g of a){if(g.path===u.path)return a.splice(f),g;f++}return u}}function Ni(l){const u={};for(const f of Object.keys(l.children)){const v=Ni(l.children[f]);(v.segments.length>0||v.hasChildren())&&(u[f]=v)}return function Ls(l){if(1===l.numberOfChildren&&l.children[de]){const u=l.children[de];return new Ee(l.segments.concat(u.segments),u.children)}return l}(new Ee(l.segments,u))}
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
class Bo{constructor(u){this.path=u,this.route=this.path[this.path.length-1]}}class Fr{constructor(u,a){this.component=u,this.route=a}}function ks(l,u,a){const f=l._root;return Nr(f,u?u._root:null,a,[f.value])}function Ho(l,u,a){return(it(u)??a).get(l)}function Nr(l,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const v=Ct(u);return l.children.forEach(I=>{(function Li(l,u,a,f,g={canDeactivateChecks:[],canActivateChecks:[]}){const v=l.value,I=u?u.value:null,b=a?a.getContext(l.value.outlet):null;if(I&&v.routeConfig===I.routeConfig){const O=function js(l,u,a){if("function"==typeof a)return a(l,u);switch(a){case"pathParamsChange":return!Ut(l.url,u.url);case"pathParamsOrQueryParamsChange":return!Ut(l.url,u.url)||!Xt(l.queryParams,u.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ro(l,u)||!Xt(l.queryParams,u.queryParams);default:return!Ro(l,u)}}(I,v,v.routeConfig.runGuardsAndResolvers);O?g.canActivateChecks.push(new Bo(f)):(v.data=I.data,v._resolvedData=I._resolvedData),Nr(l,u,v.component?b?b.children:null:a,f,g),O&&b&&b.outlet&&b.outlet.isActivated&&g.canDeactivateChecks.push(new Fr(b.outlet.component,I))}else I&&Or(u,b,g),g.canActivateChecks.push(new Bo(f)),Nr(l,null,v.component?b?b.children:null:a,f,g)})(I,v[I.value.outlet],a,f.concat([I.value]),g),delete v[I.value.outlet]}),Dt(v,(I,b)=>Or(I,a.getContext(b),g)),g}function Or(l,u,a){const f=Ct(l),g=l.value;Dt(f,(v,I)=>{Or(v,g.component?u?u.children.getContext(I):null:u,a)}),a.canDeactivateChecks.push(new Fr(g.component&&u&&u.outlet&&u.outlet.isActivated?u.outlet.component:null,g))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Za{}function Hs(l){return new Pe.y(u=>u.error(l))}class Xa{constructor(u,a,f,g,v,I){this.rootComponentType=u,this.config=a,this.urlTree=f,this.url=g,this.paramsInheritanceStrategy=v,this.relativeLinkResolution=I}recognize(){const u=ko(this.urlTree.root,[],[],this.config.filter(I=>void 0===I.redirectTo),this.relativeLinkResolution).segmentGroup,a=this.processSegmentGroup(this.config,u,de);if(null===a)return null;const f=new Kr([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},de,this.rootComponentType,null,this.urlTree.root,-1,{}),g=new rn(f,a),v=new Si(this.url,g);return this.inheritParamsAndData(v._root),v}inheritParamsAndData(u){const a=u.value,f=To(a,this.paramsInheritanceStrategy);a.params=Object.freeze(f.params),a.data=Object.freeze(f.data),u.children.forEach(g=>this.inheritParamsAndData(g))}processSegmentGroup(u,a,f){return 0===a.segments.length&&a.hasChildren()?this.processChildren(u,a):this.processSegment(u,a,a.segments,f)}processChildren(u,a){const f=[];for(const v of Object.keys(a.children)){const I=a.children[v],b=ct(u,v),O=this.processSegmentGroup(b,I,v);if(null===O)return null;f.push(...O)}const g=ao(f);return function eu(l){l.sort((u,a)=>u.value.outlet===de?-1:a.value.outlet===de?1:u.value.outlet.localeCompare(a.value.outlet))}(g),g}processSegment(u,a,f,g){for(const v of u){const I=this.processSegmentAgainstRoute(v,a,f,g);if(null!==I)return I}return Wa(a,f,g)?[]:null}processSegmentAgainstRoute(u,a,f,g){if(u.redirectTo||!jo(u,a,f,g))return null;let v,I=[],b=[];if("**"===u.path){const vt=f.length>0?qr(f).parameters:{},mn=$s(a)+f.length;v=new Kr(f,vt,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Lr(u),Le(u),u.component??u._loadedComponent??null,u,Vi(a),mn,Gs(u),mn)}else{const vt=Lo(a,u,f);if(!vt.matched)return null;I=vt.consumedSegments,b=vt.remainingSegments;const mn=$s(a)+I.length;v=new Kr(I,vt.parameters,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,Lr(u),Le(u),u.component??u._loadedComponent??null,u,Vi(a),mn,Gs(u),mn)}const O=function Uo(l){return l.children?l.children:l.loadChildren?l._loadedRoutes:[]}(u),{segmentGroup:Z,slicedSegments:Ne}=ko(a,I,b,O.filter(vt=>void 0===vt.redirectTo),this.relativeLinkResolution);if(0===Ne.length&&Z.hasChildren()){const vt=this.processChildren(O,Z);return null===vt?null:[new rn(v,vt)]}if(0===O.length&&0===Ne.length)return[new rn(v,[])];const le=Le(u)===g,at=this.processSegment(O,Z,Ne,le?de:g);return null===at?null:[new rn(v,at)]}}function $o(l){const u=l.value.routeConfig;return u&&""===u.path&&void 0===u.redirectTo}function ao(l){const u=[],a=new Set;for(const f of l){if(!$o(f)){u.push(f);continue}const g=u.find(v=>f.value.routeConfig===v.value.routeConfig);void 0!==g?(g.children.push(...f.children),a.add(g)):u.push(f)}for(const f of a){const g=ao(f.children);u.push(new rn(f.value,g))}return u.filter(f=>!a.has(f))}function Vi(l){let u=l;for(;u._sourceSegment;)u=u._sourceSegment;return u}function $s(l){let u=l,a=u._segmentIndexShift??0;for(;u._sourceSegment;)u=u._sourceSegment,a+=u._segmentIndexShift??0;return a-1}function Lr(l){return l.data||{}}function Gs(l){return l.resolve||{}}
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
const hr=Symbol("RouteTitle");function uo(l){return"string"==typeof l.title||null===l.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Go(l){return ut(u=>{const a=l(u);return a?(0,X.D)(a).pipe((0,se.U)(()=>u)):V(u)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ws extends class zo{shouldDetach(u){return!1}store(u,a){}shouldAttach(u){return!1}retrieve(u){return null}shouldReuseRoute(u,a){return u.routeConfig===a.routeConfig}}{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const qn=new w.OlP("ROUTES");let Ui=(()=>{class l{constructor(a,f){this.injector=a,this.compiler=f,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(a){if(this.componentLoaders.get(a))return this.componentLoaders.get(a);if(a._loadedComponent)return V(a._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(a);const f=en(a.loadComponent()).pipe(Ke(v=>{this.onLoadEndListener&&this.onLoadEndListener(a),a._loadedComponent=v}),Hn(()=>{this.componentLoaders.delete(a)})),g=new Et(f,()=>new Ie.x).pipe(Ve());return this.componentLoaders.set(a,g),g}loadChildren(a,f){if(this.childrenLoaders.get(f))return this.childrenLoaders.get(f);if(f._loadedRoutes)return V({routes:f._loadedRoutes,injector:f._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(f);const v=this.loadModuleFactoryOrRoutes(f.loadChildren).pipe((0,se.U)(b=>{this.onLoadEndListener&&this.onLoadEndListener(f);let O,Z,Ne=!1;Array.isArray(b)?Z=b:(O=b.create(a).injector,Z=Er(O.get(qn,[],w.XFs.Self|w.XFs.Optional)));return{routes:Z.map(Xe),injector:O}}),Hn(()=>{this.childrenLoaders.delete(f)})),I=new Et(v,()=>new Ie.x).pipe(Ve());return this.childrenLoaders.set(f,I),I}loadModuleFactoryOrRoutes(a){return en(a()).pipe((0,Fe.z)(f=>f instanceof w.YKP||Array.isArray(f)?V(f):(0,X.D)(this.compiler.compileModuleAsync(f))))}}return l.\u0275fac=function(a){return new(a||l)(w.LFG(w.zs3),w.LFG(w.Sil))},l.\u0275prov=w.Yz7({token:l,factory:l.\u0275fac}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class $i{shouldProcessUrl(u){return!0}extract(u){return u}merge(u,a){return u}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Nc(l){throw l}function Ys(l,u,a){return u.parse("/")}const qs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},ou={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let pt=(()=>{class l{constructor(a,f,g,v,I,b,O){this.rootComponentType=a,this.urlSerializer=f,this.rootContexts=g,this.location=v,this.config=O,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.disposed=!1,this.navigationId=0,this.currentPageId=0,this.isNgZoneEnabled=!1,this.events=new Ie.x,this.errorHandler=Nc,this.malformedUriErrorHandler=Ys,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>V(void 0),this.urlHandlingStrategy=new $i,this.routeReuseStrategy=new Ws,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="corrected",this.canceledNavigationResolution="replace",this.configLoader=I.get(Ui),this.configLoader.onLoadEndListener=at=>this.triggerEvent(new Wt(at)),this.configLoader.onLoadStartListener=at=>this.triggerEvent(new Tt(at)),this.ngModule=I.get(w.h0i),this.console=I.get(w.c2e);const le=I.get(w.R0b);this.isNgZoneEnabled=le instanceof w.R0b&&w.R0b.isInAngularZone(),this.resetConfig(O),this.currentUrlTree=function A(){return new Ft(new Ee([],{}),{},null)}(),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=So(this.currentUrlTree,this.rootComponentType),this.transitions=new ie({id:0,targetPageId:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}get browserPageId(){return this.location.getState()?.\u0275routerPageId}setupNavigations(a){const f=this.events;return a.pipe(mt(g=>0!==g.id),(0,se.U)(g=>({...g,extractedUrl:this.urlHandlingStrategy.extract(g.rawUrl)})),ut(g=>{let v=!1,I=!1;return V(g).pipe(Ke(b=>{this.currentNavigation={id:b.id,initialUrl:b.rawUrl,extractedUrl:b.extractedUrl,trigger:b.source,extras:b.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),ut(b=>{const O=this.browserUrlTree.toString(),Z=!this.navigated||b.extractedUrl.toString()!==O||O!==this.currentUrlTree.toString();if(("reload"===this.onSameUrlNavigation||Z)&&this.urlHandlingStrategy.shouldProcessUrl(b.rawUrl))return jr(b.source)&&(this.browserUrlTree=b.extractedUrl),V(b).pipe(ut(le=>{const at=this.transitions.getValue();return f.next(new ir(le.id,this.serializeUrl(le.extractedUrl),le.source,le.restoredState)),at!==this.transitions.getValue()?jt.E:Promise.resolve(le)}),function qa(l,u,a,f){return ut(g=>function Pn(l,u,a,f,g){return new Ya(l,u,a,f,g).apply()}(l,u,a,g.extractedUrl,f).pipe((0,se.U)(v=>({...g,urlAfterRedirects:v}))))}(this.ngModule.injector,this.configLoader,this.urlSerializer,this.config),Ke(le=>{this.currentNavigation={...this.currentNavigation,finalUrl:le.urlAfterRedirects}}),function tu(l,u,a,f,g){return(0,Fe.z)(v=>function Ja(l,u,a,f,g="emptyOnly",v="legacy"){try{const I=new Xa(l,u,a,f,g,v).recognize();return null===I?Hs(new Za):V(I)}catch(I){return Hs(I)}}(l,u,v.urlAfterRedirects,a(v.urlAfterRedirects),f,g).pipe((0,se.U)(I=>({...v,targetSnapshot:I}))))}(this.rootComponentType,this.config,le=>this.serializeUrl(le),this.paramsInheritanceStrategy,this.relativeLinkResolution),Ke(le=>{if("eager"===this.urlUpdateStrategy){if(!le.extras.skipLocationChange){const vt=this.urlHandlingStrategy.merge(le.urlAfterRedirects,le.rawUrl);this.setBrowserUrl(vt,le)}this.browserUrlTree=le.urlAfterRedirects}const at=new be(le.id,this.serializeUrl(le.extractedUrl),this.serializeUrl(le.urlAfterRedirects),le.targetSnapshot);f.next(at)}));if(Z&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:at,extractedUrl:vt,source:mn,restoredState:Qo,extras:ra}=b,qi=new ir(at,this.serializeUrl(vt),mn,Qo);f.next(qi);const Lt=So(vt,this.rootComponentType).snapshot;return V({...b,targetSnapshot:Lt,urlAfterRedirects:vt,extras:{...ra,skipLocationChange:!1,replaceUrl:!1}})}return this.rawUrlTree=b.rawUrl,b.resolve(null),jt.E}),Ke(b=>{const O=new Se(b.id,this.serializeUrl(b.extractedUrl),this.serializeUrl(b.urlAfterRedirects),b.targetSnapshot);this.triggerEvent(O)}),(0,se.U)(b=>({...b,guards:ks(b.targetSnapshot,b.currentSnapshot,this.rootContexts)})),function Vs(l,u){return(0,Fe.z)(a=>{const{targetSnapshot:f,currentSnapshot:g,guards:{canActivateChecks:v,canDeactivateChecks:I}}=a;return 0===I.length&&0===v.length?V({...a,guardsResult:!0}):function Bs(l,u,a,f){return(0,X.D)(l).pipe((0,Fe.z)(g=>function yt(l,u,a,f,g){const v=u&&u.routeConfig?u.routeConfig.canDeactivate:null;return v&&0!==v.length?V(v.map(b=>{const O=Ho(b,u,g);return en(function za(l){return l&&on(l.canDeactivate)}(O)?O.canDeactivate(l,u,a,f):O(l,u,a,f)).pipe(ln())})).pipe(z()):V(!0)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(g.component,g.route,a,u,f)),ln(g=>!0!==g,!0))}(I,f,g,l).pipe((0,Fe.z)(b=>b&&function to(l){return"boolean"==typeof l}(b)?function ki(l,u,a,f){return(0,X.D)(u).pipe(Cr(g=>j(function Qa(l,u){return null!==l&&u&&u(new wr(l)),V(!0)}(g.route.parent,f),function Ka(l,u){return null!==l&&u&&u(new ft(l)),V(!0)}(g.route,f),function Yn(l,u,a){const f=u[u.length-1],v=u.slice(0,u.length-1).reverse().map(I=>function Oi(l){const u=l.routeConfig?l.routeConfig.canActivateChild:null;return u&&0!==u.length?{node:l,guards:u}:null}(I)).filter(I=>null!==I).map(I=>ke(()=>V(I.guards.map(O=>{const Z=Ho(O,I.node,a);return en(function ro(l){return l&&on(l.canActivateChild)}(Z)?Z.canActivateChild(f,l):Z(f,l)).pipe(ln())})).pipe(z())));return V(v).pipe(z())}(l,g.path,a),function zt(l,u,a){const f=u.routeConfig?u.routeConfig.canActivate:null;if(!f||0===f.length)return V(!0);const g=f.map(v=>ke(()=>{const I=Ho(v,u,a);return en(function no(l){return l&&on(l.canActivate)}(I)?I.canActivate(u,l):I(u,l)).pipe(ln())}));return V(g).pipe(z())}(l,g.route,a))),ln(g=>!0!==g,!0))}(f,v,l,u):V(b)),(0,se.U)(b=>({...a,guardsResult:b})))})}(this.ngModule.injector,b=>this.triggerEvent(b)),Ke(b=>{if(Kt(b.guardsResult)){const Z=At(`Redirecting to "${this.serializeUrl(b.guardsResult)}"`);throw Z.url=b.guardsResult,Z}const O=new Yr(b.id,this.serializeUrl(b.extractedUrl),this.serializeUrl(b.urlAfterRedirects),b.targetSnapshot,!!b.guardsResult);this.triggerEvent(O)}),mt(b=>!!b.guardsResult||(this.restoreHistory(b),this.cancelNavigationTransition(b,""),!1)),Go(b=>{if(b.guards.canActivateChecks.length)return V(b).pipe(Ke(O=>{const Z=new Un(O.id,this.serializeUrl(O.extractedUrl),this.serializeUrl(O.urlAfterRedirects),O.targetSnapshot);this.triggerEvent(Z)}),ut(O=>{let Z=!1;return V(O).pipe(function Bi(l,u){return(0,Fe.z)(a=>{const{targetSnapshot:f,guards:{canActivateChecks:g}}=a;if(!g.length)return V(a);let v=0;return(0,X.D)(g).pipe(Cr(I=>function nu(l,u,a,f){const g=l.routeConfig,v=l._resolve;return void 0!==g?.title&&!uo(g)&&(v[hr]=g.title),function ru(l,u,a,f){const g=function Pc(l){return[...Object.keys(l),...Object.getOwnPropertySymbols(l)]}(l);if(0===g.length)return V({});const v={};return(0,X.D)(g).pipe((0,Fe.z)(I=>function Fc(l,u,a,f){const g=Ho(l,u,f);return en(g.resolve?g.resolve(u,a):g(u,a))}(l[I],u,a,f).pipe(ln(),Ke(b=>{v[I]=b}))),Eo(1),function Bn(l){return(0,se.U)(()=>l)}(v),dt(I=>I instanceof L?jt.E:ae(I)))}(v,l,u,f).pipe((0,se.U)(I=>(l._resolvedData=I,l.data=To(l,a).resolve,g&&uo(g)&&(l.data[hr]=g.title),null)))}(I.route,f,l,u)),Ke(()=>v++),Eo(1),(0,Fe.z)(I=>v===g.length?V(a):jt.E))})}(this.paramsInheritanceStrategy,this.ngModule.injector),Ke({next:()=>Z=!0,complete:()=>{Z||(this.restoreHistory(O),this.cancelNavigationTransition(O,"At least one route resolver didn't emit any value."))}}))}),Ke(O=>{const Z=new rt(O.id,this.serializeUrl(O.extractedUrl),this.serializeUrl(O.urlAfterRedirects),O.targetSnapshot);this.triggerEvent(Z)}))}),Go(b=>{const O=Z=>{const Ne=[];Z.routeConfig?.loadComponent&&!Z.routeConfig._loadedComponent&&Ne.push(this.configLoader.loadComponent(Z.routeConfig).pipe(Ke(le=>{Z.component=le}),(0,se.U)(()=>{})));for(const le of Z.children)Ne.push(...O(le));return Ne};return Ae(O(b.targetSnapshot.root)).pipe(rr(),(0,dn.q)(1))}),Go(()=>this.afterPreactivation()),(0,se.U)(b=>{const O=function Ss(l,u,a){const f=Sr(l,u._root,a?a._root:void 0);return new Yt(f,u)}(this.routeReuseStrategy,b.targetSnapshot,b.currentRouterState);return{...b,targetRouterState:O}}),Ke(b=>{this.currentUrlTree=b.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(b.urlAfterRedirects,b.rawUrl),this.routerState=b.targetRouterState,"deferred"===this.urlUpdateStrategy&&(b.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,b),this.browserUrlTree=b.urlAfterRedirects)}),((l,u,a)=>(0,se.U)(f=>(new xe(u,f.targetRouterState,f.currentRouterState,a).activate(l),f)))(this.rootContexts,this.routeReuseStrategy,b=>this.triggerEvent(b)),Ke({next(){v=!0},complete(){v=!0}}),Hn(()=>{v||I||this.cancelNavigationTransition(g,`Navigation ID ${g.id} is not equal to the current navigation id ${this.navigationId}`),this.currentNavigation?.id===g.id&&(this.currentNavigation=null)}),dt(b=>{if(I=!0,function Dn(l){return l&&l[$n]}(b)){const O=Kt(b.url);O||(this.navigated=!0,this.restoreHistory(g,!0));const Z=new _e(g.id,this.serializeUrl(g.extractedUrl),b.message);if(f.next(Z),O){const Ne=this.urlHandlingStrategy.merge(b.url,this.rawUrlTree),le={skipLocationChange:g.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy||jr(g.source)};this.scheduleNavigation(Ne,"imperative",null,le,{resolve:g.resolve,reject:g.reject,promise:g.promise})}else g.resolve(!1)}else{this.restoreHistory(g,!0);const O=new lt(g.id,this.serializeUrl(g.extractedUrl),b);f.next(O);try{g.resolve(this.errorHandler(b))}catch(Z){g.reject(Z)}}return jt.E}))}))}resetRootComponentType(a){this.rootComponentType=a,this.routerState.root.component=this.rootComponentType}setTransition(a){this.transitions.next({...this.transitions.value,...a})}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(a=>{const f="popstate"===a.type?"popstate":"hashchange";"popstate"===f&&setTimeout(()=>{const g={replaceUrl:!0},v=a.state?.navigationId?a.state:null;if(v){const b={...v};delete b.navigationId,delete b.\u0275routerPageId,0!==Object.keys(b).length&&(g.state=b)}const I=this.parseUrl(a.url);this.scheduleNavigation(I,f,v,g)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(a){this.events.next(a)}resetConfig(a){this.config=a.map(Xe),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.transitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(a,f={}){const{relativeTo:g,queryParams:v,fragment:I,queryParamsHandling:b,preserveFragment:O}=f,Z=g||this.routerState.root,Ne=O?this.currentUrlTree.fragment:I;let le=null;switch(b){case"merge":le={...this.currentUrlTree.queryParams,...v};break;case"preserve":le=this.currentUrlTree.queryParams;break;default:le=v||null}return null!==le&&(le=this.removeEmptyProps(le)),function Ai(l,u,a,f,g){if(0===a.length)return dr(u.root,u.root,u.root,f,g);const v=function xs(l){if("string"==typeof l[0]&&1===l.length&&"/"===l[0])return new Jr(!0,0,l);let u=0,a=!1;const f=l.reduce((g,v,I)=>{if("object"==typeof v&&null!=v){if(v.outlets){const b={};return Dt(v.outlets,(O,Z)=>{b[Z]="string"==typeof O?O.split("/"):O}),[...g,{outlets:b}]}if(v.segmentPath)return[...g,v.segmentPath]}return"string"!=typeof v?[...g,v]:0===I?(v.split("/").forEach((b,O)=>{0==O&&"."===b||(0==O&&""===b?a=!0:".."===b?u++:""!=b&&g.push(b))}),g):[...g,v]},[]);return new Jr(a,u,f)}(a);return v.toRoot()?dr(u.root,u.root,new Ee([],{}),f,g):function I(O){const Z=function xi(l,u,a,f){return l.isAbsolute?new _n(u.root,!0,0):-1===f?new _n(a,a===u.root,0):function Tr(l,u,a){let f=l,g=u,v=a;for(;v>g;){if(v-=g,f=f.parent,!f)throw new w.vHH(4005,!1);g=f.segments.length}return new _n(f,!1,g-v)}(a,f+(Qr(l.commands[0])?0:1),l.numberOfDoubleDots)}(v,u,l.snapshot?._urlSegment,O),Ne=Z.processChildren?Ar(Z.segmentGroup,Z.index,v.commands):No(Z.segmentGroup,Z.index,v.commands);return dr(u.root,Z.segmentGroup,Ne,f,g)}(l.snapshot?._lastPathIndex)}(Z,this.currentUrlTree,a,le,Ne??null)}navigateByUrl(a,f={skipLocationChange:!1}){const g=Kt(a)?a:this.parseUrl(a),v=this.urlHandlingStrategy.merge(g,this.rawUrlTree);return this.scheduleNavigation(v,"imperative",null,f)}navigate(a,f={skipLocationChange:!1}){return function iu(l){for(let u=0;u<l.length;u++){if(null==l[u])throw new w.vHH(4008,!1)}}(a),this.navigateByUrl(this.createUrlTree(a,f),f)}serializeUrl(a){return this.urlSerializer.serialize(a)}parseUrl(a){let f;try{f=this.urlSerializer.parse(a)}catch(g){f=this.malformedUriErrorHandler(g,this.urlSerializer,a)}return f}isActive(a,f){let g;if(g=!0===f?{...qs}:!1===f?{...ou}:f,Kt(a))return U(this.currentUrlTree,a,g);const v=this.parseUrl(a);return U(this.currentUrlTree,v,g)}removeEmptyProps(a){return Object.keys(a).reduce((f,g)=>{const v=a[g];return null!=v&&(f[g]=v),f},{})}processNavigations(){this.navigations.subscribe(a=>{this.navigated=!0,this.lastSuccessfulId=a.id,this.currentPageId=a.targetPageId,this.events.next(new Ht(a.id,this.serializeUrl(a.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.titleStrategy?.updateTitle(this.routerState.snapshot),a.resolve(!0)},a=>{this.console.warn(`Unhandled Navigation Error: ${a}`)})}scheduleNavigation(a,f,g,v,I){if(this.disposed)return Promise.resolve(!1);let b,O,Z;I?(b=I.resolve,O=I.reject,Z=I.promise):Z=new Promise((at,vt)=>{b=at,O=vt});const Ne=++this.navigationId;let le;return"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(g=this.location.getState()),le=g&&g.\u0275routerPageId?g.\u0275routerPageId:v.replaceUrl||v.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):le=0,this.setTransition({id:Ne,targetPageId:le,source:f,restoredState:g,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:a,extras:v,resolve:b,reject:O,promise:Z,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),Z.catch(at=>Promise.reject(at))}setBrowserUrl(a,f){const g=this.urlSerializer.serialize(a),v={...f.extras.state,...this.generateNgRouterState(f.id,f.targetPageId)};this.location.isCurrentPathEqualTo(g)||f.extras.replaceUrl?this.location.replaceState(g,"",v):this.location.go(g,"",v)}restoreHistory(a,f=!1){if("computed"===this.canceledNavigationResolution){const g=this.currentPageId-a.targetPageId;"popstate"!==a.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.currentNavigation?.finalUrl||0===g?this.currentUrlTree===this.currentNavigation?.finalUrl&&0===g&&(this.resetState(a),this.browserUrlTree=a.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(g)}else"replace"===this.canceledNavigationResolution&&(f&&this.resetState(a),this.resetUrlToCurrentUrlTree())}resetState(a){this.routerState=a.currentRouterState,this.currentUrlTree=a.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,a.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}cancelNavigationTransition(a,f){const g=new _e(a.id,this.serializeUrl(a.extractedUrl),f);this.triggerEvent(g),a.resolve(!1)}generateNgRouterState(a,f){return"computed"===this.canceledNavigationResolution?{navigationId:a,\u0275routerPageId:f}:{navigationId:a}}}return l.\u0275fac=function(a){w.$Z()},l.\u0275prov=w.Yz7({token:l,factory:l.\u0275fac}),l})();function jr(l){return"imperative"!==l}
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
class Ks{buildTitle(u){let a,f=u.root;for(;void 0!==f;)a=this.getResolvedTitleForRoute(f)??a,f=f.children.find(g=>g.outlet===de);return a}getResolvedTitleForRoute(u){return u.data[hr]}}let Qs=(()=>{class l extends Ks{constructor(a){super(),this.title=a}updateTitle(a){const f=this.buildTitle(a);void 0!==f&&this.title.setTitle(f)}}return l.\u0275fac=function(a){return new(a||l)(w.LFG(or.Dx))},l.\u0275prov=w.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Gi{}let Zs=(()=>{class l{constructor(a,f,g,v,I){this.router=a,this.injector=g,this.preloadingStrategy=v,this.loader=I}setUpPreloading(){this.subscription=this.router.events.pipe(mt(a=>a instanceof Ht),Cr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(a,f){const g=[];for(const v of f){v.providers&&!v._injector&&(v._injector=(0,w.MMx)(v.providers,a,`Route: ${v.path}`));const I=v._injector??a,b=v._loadedInjector??I;v.loadChildren&&!v._loadedRoutes||v.loadComponent&&!v._loadedComponent?g.push(this.preloadConfig(I,v)):(v.children||v._loadedRoutes)&&g.push(this.processRoutes(b,v.children??v._loadedRoutes))}return(0,X.D)(g).pipe((0,k.J)())}preloadConfig(a,f){return this.preloadingStrategy.preload(f,()=>{let g;g=f.loadChildren&&void 0===f.canLoad?this.loader.loadChildren(a,f):V(null);const v=g.pipe((0,Fe.z)(I=>null===I?V(void 0):(f._loadedRoutes=I.routes,f._loadedInjector=I.injector,this.processRoutes(I.injector??a,I.routes))));if(f.loadComponent&&!f._loadedComponent){const I=this.loader.loadComponent(f);return(0,X.D)([v,I]).pipe((0,k.J)())}return v})}}return l.\u0275fac=function(a){return new(a||l)(w.LFG(pt),w.LFG(w.Sil),w.LFG(w.lqb),w.LFG(Gi),w.LFG(Ui))},l.\u0275prov=w.Yz7({token:l,factory:l.\u0275fac}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ho=new w.OlP("");let po=(()=>{class l{constructor(a,f,g={}){this.router=a,this.viewportScroller=f,this.options=g,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},g.scrollPositionRestoration=g.scrollPositionRestoration||"disabled",g.anchorScrolling=g.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(a=>{a instanceof ir?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=a.navigationTrigger,this.restoredId=a.restoredState?a.restoredState.navigationId:0):a instanceof Ht&&(this.lastId=a.id,this.scheduleScrollEvent(a,this.router.parseUrl(a.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(a=>{a instanceof Io&&(a.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(a.position):a.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(a.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(a,f){this.router.triggerEvent(new Io(a,"popstate"===this.lastSource?this.store[this.restoredId]:null,f))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return l.\u0275fac=function(a){w.$Z()},l.\u0275prov=w.Yz7({token:l,factory:l.\u0275fac}),l})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const qo=new w.OlP("ROUTER_CONFIGURATION",{providedIn:"root",factory:()=>({})}),pr=new w.OlP("ROUTER_FORROOT_GUARD"),Js=new w.OlP(""),lu=[E.Ye,{provide:je,useClass:ar},{provide:pt,useFactory:function ea(l,u,a,f,g,v,I={},b,O,Z,Ne){const le=new pt(null,l,u,a,f,g,Er(v));return Z&&(le.urlHandlingStrategy=Z),Ne&&(le.routeReuseStrategy=Ne),le.titleStrategy=O??b,function Yi(l,u){l.errorHandler&&(u.errorHandler=l.errorHandler),l.malformedUriErrorHandler&&(u.malformedUriErrorHandler=l.malformedUriErrorHandler),l.onSameUrlNavigation&&(u.onSameUrlNavigation=l.onSameUrlNavigation),l.paramsInheritanceStrategy&&(u.paramsInheritanceStrategy=l.paramsInheritanceStrategy),l.relativeLinkResolution&&(u.relativeLinkResolution=l.relativeLinkResolution),l.urlUpdateStrategy&&(u.urlUpdateStrategy=l.urlUpdateStrategy),l.canceledNavigationResolution&&(u.canceledNavigationResolution=l.canceledNavigationResolution)}(I,le),le},deps:[je,Rn,E.Ye,w.zs3,w.Sil,qn,qo,Qs,[Ks,new w.FiY],[class kr{},new w.FiY],[class zs{},new w.FiY]]},Rn,{provide:zn,useFactory:function Hr(l){return l.routerState.root},deps:[pt]},Ui];function zi(){return new w.PXZ("Router",pt)}let cu=(()=>{class l{constructor(a,f){}static forRoot(a,f){return{ngModule:l,providers:[lu,[],gr(a),{provide:pr,useFactory:Br,deps:[[pt,new w.FiY,new w.tp0]]},{provide:qo,useValue:f||{}},f?.useHash?{provide:E.S$,useClass:E.Do}:{provide:E.S$,useClass:E.b0},{provide:ho,useFactory:()=>{const l=(0,w.f3M)(pt),u=(0,w.f3M)(E.EM),a=(0,w.f3M)(qo);return a.scrollOffset&&u.setOffset(a.scrollOffset),new po(l,u,a)}},f?.preloadingStrategy?Vc(f.preloadingStrategy):[],{provide:w.PXZ,multi:!0,useFactory:zi},f?.initialNavigation?st(f):[],[{provide:ta,useFactory:Oc},{provide:w.tb,multi:!0,useExisting:ta}]]}}static forChild(a){return{ngModule:l,providers:[gr(a)]}}}return l.\u0275fac=function(a){return new(a||l)(w.LFG(pr,8),w.LFG(pt,8))},l.\u0275mod=w.oAB({type:l}),l.\u0275inj=w.cJS({}),l})();function Br(l){return"guarded"}function gr(l){return[{provide:w.deG,multi:!0,useValue:l},{provide:qn,multi:!0,useValue:l}]}function Oc(){const l=(0,w.f3M)(w.zs3);return u=>{const a=l.get(w.z2F);if(u!==a.components[0])return;const f=l.get(pt),g=l.get(fu);null===l.get(na,null,w.XFs.Optional)&&f.initialNavigation(),l.get(Js,null,w.XFs.Optional)?.setUpPreloading(),l.get(ho,null,w.XFs.Optional)?.init(),f.resetRootComponentType(a.componentTypes[0]),g.next(),g.complete()}}const ta=new w.OlP("");function st(l){return["disabled"===l.initialNavigation?[{provide:w.ip1,multi:!0,useFactory:()=>{const l=(0,w.f3M)(pt);return()=>{l.setUpLocationChangeListener()}}},{provide:na,useValue:"disabled"}]:[],"enabledBlocking"===l.initialNavigation?[{provide:na,useValue:"enabledBlocking"},{provide:w.ip1,multi:!0,deps:[w.zs3],useFactory:l=>{const u=l.get(E.V_,Promise.resolve(null));let a=!1;return()=>u.then(()=>new Promise(g=>{const v=l.get(pt),I=l.get(fu);(function f(g){const v=l.get(pt);v.events.pipe(mt(I=>I instanceof Ht||I instanceof _e||I instanceof lt),(0,se.U)(I=>{if(I instanceof Ht)return!0;const b=v.navigationId!==I.id,O=I instanceof _e&&-1!==I.reason.indexOf(Sn);return!(!b&&!O)&&null}),mt(I=>null!==I),(0,dn.q)(1)).subscribe(()=>{g()})})(()=>{g(!0),a=!0}),v.afterPreactivation=()=>(g(!0),a||I.closed?V(void 0):I),v.initialNavigation()}))}}]:[]]}const fu=new w.OlP("",{factory:()=>new Ie.x}),na=new w.OlP("");function Vc(l){return[Zs,{provide:Js,useExisting:Zs},{provide:Gi,useExisting:l}]}
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
     */}]);