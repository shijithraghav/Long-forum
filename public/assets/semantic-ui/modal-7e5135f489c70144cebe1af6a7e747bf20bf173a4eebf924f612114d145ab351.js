/*!
 * # Semantic UI - Modal
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";e.fn.modal=function(a){var o,r=e(this),l=e(t),s=e(n),c=e("body"),d=r.selector||"",u=(new Date).getTime(),m=[],p=arguments[0],h="string"==typeof p,g=[].slice.call(arguments,1),f=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,b,v,T,E,y,C,k,I,D=e.isPlainObject(a)?e.extend(!0,{},e.fn.modal.settings,a):e.extend({},e.fn.modal.settings),R=D.selector,O=D.className,w=D.namespace,S=D.error,_="."+w,A="module-"+w,x=e(this),K=e(D.context),L=x.find(R.close),N=this,F=x.data(A);I={initialize:function(){I.verbose("Initializing dimmer",K),I.create.id(),I.create.dimmer(),I.refreshModals(),I.bind.events(),D.observeChanges&&I.observeChanges(),I.instantiate()},instantiate:function(){I.verbose("Storing instance of modal"),F=I,x.data(A,F)},create:{dimmer:function(){var t={debug:D.debug,dimmerName:"modals",duration:{show:D.duration,hide:D.duration}},n=e.extend(!0,t,D.dimmerSettings);return D.inverted&&(n.variation=n.variation!==i?n.variation+" inverted":"inverted"),e.fn.dimmer===i?void I.error(S.dimmer):(I.debug("Creating dimmer with settings",n),T=K.dimmer(n),D.detachable?(I.verbose("Modal is detachable, moving content into dimmer"),T.dimmer("add content",x)):I.set.undetached(),D.blurring&&T.addClass(O.blurring),void(E=T.dimmer("get dimmer")))},id:function(){C=(Math.random().toString(16)+"000000000").substr(2,8),y="."+C,I.verbose("Creating unique id for element",C)}},destroy:function(){I.verbose("Destroying previous modal"),x.removeData(A).off(_),l.off(y),L.off(_),K.dimmer("destroy")},observeChanges:function(){"MutationObserver"in t&&(k=new MutationObserver(function(e){I.debug("DOM tree modified, refreshing"),I.refresh()}),k.observe(N,{childList:!0,subtree:!0}),I.debug("Setting up mutation observer",k))},refresh:function(){I.remove.scrolling(),I.cacheSizes(),I.set.screenHeight(),I.set.type(),I.set.position()},refreshModals:function(){b=x.siblings(R.modal),r=b.add(x)},attachEvents:function(t,n){var i=e(t);n=e.isFunction(I[n])?I[n]:I.toggle,i.length>0?(I.debug("Attaching modal events to element",t,n),i.off(_).on("click"+_,n)):I.error(S.notFound,t)},bind:{events:function(){I.verbose("Attaching events"),x.on("click"+_,R.close,I.event.close).on("click"+_,R.approve,I.event.approve).on("click"+_,R.deny,I.event.deny),l.on("resize"+y,I.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){return D.onApprove.call(N,e(this))===!1?void I.verbose("Approve callback returned false cancelling hide"):void I.hide()},deny:function(){return D.onDeny.call(N,e(this))===!1?void I.verbose("Deny callback returned false cancelling hide"):void I.hide()},close:function(){I.hide()},click:function(t){var i=e(t.target),a=i.closest(R.modal).length>0,o=e.contains(n.documentElement,t.target);!a&&o&&(I.debug("Dimmer clicked, hiding all modals"),I.is.active()&&(I.remove.clickaway(),D.allowMultiple?I.hide():I.hideAll()))},debounce:function(e,t){clearTimeout(I.timer),I.timer=setTimeout(e,t)},keyboard:function(e){var t=e.which,n=27;t==n&&(D.closable?(I.debug("Escape key pressed hiding modal"),I.hide()):I.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){T.dimmer("is active")&&f(I.refresh)}},toggle:function(){I.is.active()||I.is.animating()?I.hide():I.show()},show:function(t){t=e.isFunction(t)?t:function(){},I.refreshModals(),I.showModal(t)},hide:function(t){t=e.isFunction(t)?t:function(){},I.refreshModals(),I.hideModal(t)},showModal:function(t){t=e.isFunction(t)?t:function(){},I.is.animating()||!I.is.active()?(I.showDimmer(),I.cacheSizes(),I.set.position(),I.set.screenHeight(),I.set.type(),I.set.clickaway(),!D.allowMultiple&&I.others.active()?I.hideOthers(I.showModal):(D.onShow.call(N),D.transition&&e.fn.transition!==i&&x.transition("is supported")?(I.debug("Showing modal with css animations"),x.transition({debug:D.debug,animation:D.transition+" in",queue:D.queue,duration:D.duration,useFailSafe:!0,onComplete:function(){D.onVisible.apply(N),I.add.keyboardShortcuts(),I.save.focus(),I.set.active(),D.autofocus&&I.set.autofocus(),t()}})):I.error(S.noTransition))):I.debug("Modal is already visible")},hideModal:function(t,n){t=e.isFunction(t)?t:function(){},I.debug("Hiding modal"),D.onHide.call(N),(I.is.animating()||I.is.active())&&(D.transition&&e.fn.transition!==i&&x.transition("is supported")?(I.remove.active(),x.transition({debug:D.debug,animation:D.transition+" out",queue:D.queue,duration:D.duration,useFailSafe:!0,onStart:function(){I.others.active()||n||I.hideDimmer(),I.remove.keyboardShortcuts()},onComplete:function(){D.onHidden.call(N),I.restore.focus(),t()}})):I.error(S.noTransition))},showDimmer:function(){T.dimmer("is animating")||!T.dimmer("is active")?(I.debug("Showing dimmer"),T.dimmer("show")):I.debug("Dimmer already visible")},hideDimmer:function(){return T.dimmer("is animating")||T.dimmer("is active")?void T.dimmer("hide",function(){I.remove.clickaway(),I.remove.screenHeight()}):void I.debug("Dimmer is not visible cannot hide")},hideAll:function(t){var n=r.filter("."+O.active+", ."+O.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(I.debug("Hiding all visible modals"),I.hideDimmer(),n.modal("hide modal",t))},hideOthers:function(t){var n=b.filter("."+O.active+", ."+O.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(I.debug("Hiding other modals",b),n.modal("hide modal",t,!0))},others:{active:function(){return b.filter("."+O.active).length>0},animating:function(){return b.filter("."+O.animating).length>0}},add:{keyboardShortcuts:function(){I.verbose("Adding keyboard shortcuts"),s.on("keyup"+_,I.event.keyboard)}},save:{focus:function(){v=e(n.activeElement).blur()}},restore:{focus:function(){v&&v.length>0&&v.focus()}},remove:{active:function(){x.removeClass(O.active)},clickaway:function(){D.closable&&E.off("click"+y)},bodyStyle:function(){""===c.attr("style")&&(I.verbose("Removing style attribute"),c.removeAttr("style"))},screenHeight:function(){I.debug("Removing page height"),c.css("height","")},keyboardShortcuts:function(){I.verbose("Removing keyboard shortcuts"),s.off("keyup"+_)},scrolling:function(){T.removeClass(O.scrolling),x.removeClass(O.scrolling)}},cacheSizes:function(){var a=x.outerHeight();(I.cache===i||0!==a)&&(I.cache={pageHeight:e(n).outerHeight(),height:a+D.offset,contextHeight:"body"==D.context?e(t).height():T.height()}),I.debug("Caching modal and container sizes",I.cache)},can:{fit:function(){return I.cache.height+2*D.padding<I.cache.contextHeight}},is:{active:function(){return x.hasClass(O.active)},animating:function(){return x.transition("is supported")?x.transition("is animating"):x.is(":visible")},scrolling:function(){return T.hasClass(O.scrolling)},modernBrowser:function(){return!(t.ActiveXObject||"ActiveXObject"in t)}},set:{autofocus:function(){var e=x.find(":input").filter(":visible"),t=e.filter("[autofocus]"),n=t.length>0?t.first():e.first();n.length>0&&n.focus()},clickaway:function(){D.closable&&E.on("click"+y,I.event.click)},screenHeight:function(){I.can.fit()?c.css("height",""):(I.debug("Modal is taller than page content, resizing page height"),c.css("height",I.cache.height+2*D.padding))},active:function(){x.addClass(O.active)},scrolling:function(){T.addClass(O.scrolling),x.addClass(O.scrolling)},type:function(){I.can.fit()?(I.verbose("Modal fits on screen"),I.others.active()||I.others.animating()||I.remove.scrolling()):(I.verbose("Modal cannot fit on screen setting to scrolling"),I.set.scrolling())},position:function(){I.verbose("Centering modal on page",I.cache),I.can.fit()?x.css({top:"",marginTop:-(I.cache.height/2)}):x.css({marginTop:"",top:s.scrollTop()})},undetached:function(){T.addClass(O.undetached)}},setting:function(t,n){if(I.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,D,t);else{if(n===i)return D[t];D[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,I,t);else{if(n===i)return I[t];I[t]=n}},debug:function(){D.debug&&(D.performance?I.performance.log(arguments):(I.debug=Function.prototype.bind.call(console.info,console,D.name+":"),I.debug.apply(console,arguments)))},verbose:function(){D.verbose&&D.debug&&(D.performance?I.performance.log(arguments):(I.verbose=Function.prototype.bind.call(console.info,console,D.name+":"),I.verbose.apply(console,arguments)))},error:function(){I.error=Function.prototype.bind.call(console.error,console,D.name+":"),I.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;D.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:N,"Execution Time":n})),clearTimeout(I.performance.timer),I.performance.timer=setTimeout(I.performance.display,500)},display:function(){var t=D.name+":",n=0;u=!1,clearTimeout(I.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",d&&(t+=" '"+d+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(t,n,a){var r,l,s,c=F;return n=n||g,a=N||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,a){var o=n!=r?a+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=r)c=c[o];else{if(c[o]!==i)return l=c[o],!1;if(!e.isPlainObject(c[a])||n==r)return c[a]!==i?(l=c[a],!1):!1;c=c[a]}})),e.isFunction(l)?s=l.apply(a,n):l!==i&&(s=l),e.isArray(o)?o.push(s):o!==i?o=[o,s]:s!==i&&(o=s),l}},h?(F===i&&I.initialize(),I.invoke(p)):(F!==i&&F.invoke("destroy"),I.initialize())}),o!==i?o:this},e.fn.modal.settings={name:"Modal",namespace:"modal",debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document);