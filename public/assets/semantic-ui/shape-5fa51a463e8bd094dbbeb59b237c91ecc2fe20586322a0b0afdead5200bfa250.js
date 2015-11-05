/*!
 * # Semantic UI - Shape
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";e.fn.shape=function(a){var o,r=e(this),l=(e("body"),(new Date).getTime()),s=[],c=arguments[0],d="string"==typeof c,u=[].slice.call(arguments,1),m=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var t,p,h,g=r.selector||"",f=e.isPlainObject(a)?e.extend(!0,{},e.fn.shape.settings,a):e.extend({},e.fn.shape.settings),b=f.namespace,v=f.selector,T=f.error,E=f.className,y="."+b,C="module-"+b,k=e(this),I=k.find(v.sides),D=k.find(v.side),R=!1,O=this,w=k.data(C);h={initialize:function(){h.verbose("Initializing module for",O),h.set.defaultSide(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),w=h,k.data(C,w)},destroy:function(){h.verbose("Destroying previous module for",O),k.removeData(C).off(y)},refresh:function(){h.verbose("Refreshing selector cache for",O),k=e(O),I=e(this).find(v.shape),D=e(this).find(v.side)},repaint:function(){h.verbose("Forcing repaint event");var e=I[0]||n.createElement("div");e.offsetWidth},animate:function(e,n){h.verbose("Animating box with properties",e),n=n||function(e){h.verbose("Executing animation callback"),e!==i&&e.stopPropagation(),h.reset(),h.set.active()},f.beforeChange.call(p[0]),h.get.transitionEvent()?(h.verbose("Starting CSS animation"),k.addClass(E.animating),I.css(e).one(h.get.transitionEvent(),n),h.set.duration(f.duration),m(function(){k.addClass(E.animating),t.addClass(E.hidden)})):n()},queue:function(e){h.debug("Queueing animation of",e),I.one(h.get.transitionEvent(),function(){h.debug("Executing queued animation"),setTimeout(function(){k.shape(e)},0)})},reset:function(){h.verbose("Animating states reset"),k.removeClass(E.animating).attr("style","").removeAttr("style"),I.attr("style","").removeAttr("style"),D.attr("style","").removeAttr("style").removeClass(E.hidden),p.removeClass(E.animating).attr("style","").removeAttr("style")},is:{complete:function(){return D.filter("."+E.active)[0]==p[0]},animating:function(){return k.hasClass(E.animating)}},set:{defaultSide:function(){t=k.find("."+f.className.active),p=t.next(v.side).length>0?t.next(v.side):k.find(v.side).first(),R=!1,h.verbose("Active side set to",t),h.verbose("Next side set to",p)},duration:function(e){e=e||f.duration,e="number"==typeof e?e+"ms":e,h.verbose("Setting animation duration",e),(f.duration||0===f.duration)&&I.add(D).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=k.find("."+f.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);k.css({width:t,height:n})},stageSize:function(){var e=k.clone().addClass(E.loading),t=e.find("."+f.className.active),n=R?e.find(v.side).eq(R):t.next(v.side).length>0?t.next(v.side):e.find(v.side).first(),i={};h.set.currentStageSize(),t.removeClass(E.active),n.addClass(E.active),e.insertAfter(k),i={width:n.outerWidth(!0),height:n.outerHeight(!0)},e.remove(),k.css(i),h.verbose("Resizing stage to fit new content",i)},nextSide:function(e){R=e,p=D.filter(e),R=D.index(p),0===p.length&&(h.set.defaultSide(),h.error(T.side)),h.verbose("Next side manually set to",p)},active:function(){h.verbose("Setting new side to active",p),D.removeClass(E.active),p.addClass(E.active),f.onChange.call(p[0]),h.set.defaultSide()}},flip:{up:function(){return!h.is.complete()||h.is.animating()||f.allowRepeats?void(h.is.animating()?h.queue("flip up"):(h.debug("Flipping up",p),h.set.stageSize(),h.stage.above(),h.animate(h.get.transform.up()))):void h.debug("Side already visible",p)},down:function(){return!h.is.complete()||h.is.animating()||f.allowRepeats?void(h.is.animating()?h.queue("flip down"):(h.debug("Flipping down",p),h.set.stageSize(),h.stage.below(),h.animate(h.get.transform.down()))):void h.debug("Side already visible",p)},left:function(){return!h.is.complete()||h.is.animating()||f.allowRepeats?void(h.is.animating()?h.queue("flip left"):(h.debug("Flipping left",p),h.set.stageSize(),h.stage.left(),h.animate(h.get.transform.left()))):void h.debug("Side already visible",p)},right:function(){return!h.is.complete()||h.is.animating()||f.allowRepeats?void(h.is.animating()?h.queue("flip right"):(h.debug("Flipping right",p),h.set.stageSize(),h.stage.right(),h.animate(h.get.transform.right()))):void h.debug("Side already visible",p)},over:function(){return!h.is.complete()||h.is.animating()||f.allowRepeats?void(h.is.animating()?h.queue("flip over"):(h.debug("Flipping over",p),h.set.stageSize(),h.stage.behind(),h.animate(h.get.transform.over()))):void h.debug("Side already visible",p)},back:function(){return!h.is.complete()||h.is.animating()||f.allowRepeats?void(h.is.animating()?h.queue("flip back"):(h.debug("Flipping back",p),h.set.stageSize(),h.stage.behind(),h.animate(h.get.transform.back()))):void h.debug("Side already visible",p)}},get:{transform:{up:function(){var e={y:-((t.outerHeight(!0)-p.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"}},down:function(){var e={y:-((t.outerHeight(!0)-p.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"}},left:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"}},right:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"}},over:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(180deg)"}},back:function(){var e={x:-((t.outerWidth(!0)-p.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=n.createElement("element"),a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in a)if(t.style[e]!==i)return a[e]},nextSide:function(){return t.next(v.side).length>0?t.next(v.side):k.find(v.side).first()}},stage:{above:function(){var e={origin:(t.outerHeight(!0)-p.outerHeight(!0))/2,depth:{active:p.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};h.verbose("Setting the initial animation position as above",p,e),I.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),p.addClass(E.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(t.outerHeight(!0)-p.outerHeight(!0))/2,depth:{active:p.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};h.verbose("Setting the initial animation position as below",p,e),I.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),p.addClass(E.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e={active:t.outerWidth(!0),next:p.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};h.verbose("Setting the initial animation position as left",p,n),I.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),p.addClass(E.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px)"})},right:function(){var e={active:t.outerWidth(!0),next:p.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};h.verbose("Setting the initial animation position as left",p,n),I.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),p.addClass(E.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px)"})},behind:function(){var e={active:t.outerWidth(!0),next:p.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};h.verbose("Setting the initial animation position as behind",p,n),t.css({transform:"rotateY(0deg)"}),p.addClass(E.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(t,n){if(h.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){f.debug&&(f.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,f.name+":"),h.debug.apply(console,arguments)))},verbose:function(){f.verbose&&f.debug&&(f.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),h.verbose.apply(console,arguments)))},error:function(){h.error=Function.prototype.bind.call(console.error,console,f.name+":"),h.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var t=f.name+":",n=0;l=!1,clearTimeout(h.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",g&&(t+=" '"+g+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,a){var r,l,s,c=w;return n=n||u,a=O||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,a){var o=n!=r?a+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=r)c=c[o];else{if(c[o]!==i)return l=c[o],!1;if(!e.isPlainObject(c[a])||n==r)return c[a]!==i?(l=c[a],!1):!1;c=c[a]}})),e.isFunction(l)?s=l.apply(a,n):l!==i&&(s=l),e.isArray(o)?o.push(s):o!==i?o=[o,s]:s!==i&&(o=s),l}},d?(w===i&&h.initialize(),h.invoke(c)):(w!==i&&w.invoke("destroy"),h.initialize())}),o!==i?o:this},e.fn.shape.settings={name:"Shape",debug:!1,verbose:!1,performance:!0,namespace:"shape",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document);