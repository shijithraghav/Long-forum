/*!
 * # Semantic UI - Sticky
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";e.fn.sticky=function(n){var a,o=e(this),r=o.selector||"",l=(new Date).getTime(),s=[],c=arguments[0],d="string"==typeof c,u=[].slice.call(arguments,1);return o.each(function(){var o,m,p,h,g=e.isPlainObject(n)?e.extend(!0,{},e.fn.sticky.settings,n):e.extend({},e.fn.sticky.settings),f=g.className,b=g.namespace,v=g.error,T="."+b,E="module-"+b,y=e(this),C=e(t),k=e(g.scrollContext),I=(y.selector||"",y.data(E)),D=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},R=this;h={initialize:function(){h.determineContainer(),h.determineContext(),h.verbose("Initializing sticky",g,o),h.save.positions(),h.checkErrors(),h.bind.events(),g.observeChanges&&h.observeChanges(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),I=h,y.data(E,h)},destroy:function(){h.verbose("Destroying previous instance"),h.reset(),p&&p.disconnect(),C.off("load"+T,h.event.load).off("resize"+T,h.event.resize),k.off("scrollchange"+T,h.event.scrollchange),y.removeData(E)},observeChanges:function(){var e=m[0];"MutationObserver"in t&&(p=new MutationObserver(function(e){clearTimeout(h.timer),h.timer=setTimeout(function(){h.verbose("DOM tree modified, updating sticky menu",e),h.refresh()},100)}),p.observe(R,{childList:!0,subtree:!0}),p.observe(e,{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",p))},determineContainer:function(){o=y.offsetParent()},determineContext:function(){return m=g.context?e(g.context):o,0===m.length?void h.error(v.invalidContext,g.context,y):void 0},checkErrors:function(){return h.is.hidden()&&h.error(v.visible,y),h.cache.element.height>h.cache.context.height?(h.reset(),void h.error(v.elementSize,y)):void 0},bind:{events:function(){C.on("load"+T,h.event.load).on("resize"+T,h.event.resize),k.off("scroll"+T).on("scroll"+T,h.event.scroll).on("scrollchange"+T,h.event.scrollchange)}},event:{load:function(){h.verbose("Page contents finished loading"),D(h.refresh)},resize:function(){h.verbose("Window resized"),D(h.refresh)},scroll:function(){D(function(){k.triggerHandler("scrollchange"+T,k.scrollTop())})},scrollchange:function(e,t){h.stick(t),g.onScroll.call(R)}},refresh:function(e){h.reset(),g.context||h.determineContext(),e&&h.determineContainer(),h.save.positions(),h.stick(),g.onReposition.call(R)},supports:{sticky:function(){var t=e("<div/>");t[0];return t.addClass(f.supported),t.css("position").match("sticky")}},save:{lastScroll:function(e){h.lastScroll=e},elementScroll:function(e){h.elementScroll=e},positions:function(){var e={height:C.height()},t={margin:{top:parseInt(y.css("margin-top"),10),bottom:parseInt(y.css("margin-bottom"),10)},offset:y.offset(),width:y.outerWidth(),height:y.outerHeight()},n={offset:m.offset(),height:m.outerHeight()};({height:o.outerHeight()});h.cache={fits:t.height<e.height,window:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},h.set.containerSize(),h.set.size(),h.stick(),h.debug("Caching element positions",h.cache)}},get:{direction:function(e){var t="down";return e=e||k.scrollTop(),h.lastScroll!==i&&(h.lastScroll<e?t="down":h.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||k.scrollTop(),h.lastScroll?e-h.lastScroll:0},currentElementScroll:function(){return h.elementScroll?h.elementScroll:h.is.top()?Math.abs(parseInt(y.css("top"),10))||0:Math.abs(parseInt(y.css("bottom"),10))||0},elementScroll:function(e){e=e||k.scrollTop();var t=h.cache.element,n=h.cache.window,i=h.get.scrollChange(e),a=t.height-n.height+g.offset,o=h.get.currentElementScroll(),r=o+i;return o=h.cache.fits||0>r?0:r>a?a:r}},remove:{lastScroll:function(){delete h.lastScroll},elementScroll:function(e){delete h.elementScroll},offset:function(){y.css("margin-top","")}},set:{offset:function(){h.verbose("Setting offset on element",g.offset),y.css("margin-top",g.offset)},containerSize:function(){var e=o.get(0).tagName;"HTML"===e||"body"==e?h.determineContainer():Math.abs(o.outerHeight()-h.cache.context.height)>g.jitter&&(h.debug("Context has padding, specifying exact height for container",h.cache.context.height),o.css({height:h.cache.context.height}))},minimumSize:function(){var e=h.cache.element;o.css("min-height",e.height)},scroll:function(e){h.debug("Setting scroll on element",e),h.elementScroll!=e&&(h.is.top()&&y.css("bottom","").css("top",-e),h.is.bottom()&&y.css("top","").css("bottom",e))},size:function(){0!==h.cache.element.height&&0!==h.cache.element.width&&(R.style.setProperty("width",h.cache.element.width+"px","important"),R.style.setProperty("height",h.cache.element.height+"px","important"))}},is:{top:function(){return y.hasClass(f.top)},bottom:function(){return y.hasClass(f.bottom)},initialPosition:function(){return!h.is.fixed()&&!h.is.bound()},hidden:function(){return!y.is(":visible")},bound:function(){return y.hasClass(f.bound)},fixed:function(){return y.hasClass(f.fixed)}},stick:function(e){var t=e||k.scrollTop(),n=h.cache,i=n.fits,a=n.element,o=n.window,r=n.context,l=h.is.bottom()&&g.pushing?g.bottomOffset:g.offset,e={top:t+l,bottom:t+l+o.height},s=(h.get.direction(e.top),i?0:h.get.elementScroll(e.top)),c=!i,d=0!==a.height;d&&(h.is.initialPosition()?e.top>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):e.top>a.top&&(a.height+e.top-s>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):(h.debug("Initial element position is fixed"),h.fixTop())):h.is.fixed()?h.is.top()?e.top<=a.top?(h.debug("Fixed element reached top of container"),h.setInitialPosition()):a.height+e.top-s>=r.bottom?(h.debug("Fixed element reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(s),h.save.lastScroll(e.top),h.save.elementScroll(s)):h.is.bottom()&&(e.bottom-a.height<=a.top?(h.debug("Bottom fixed rail has reached top of container"),h.setInitialPosition()):e.bottom>=r.bottom?(h.debug("Bottom fixed rail has reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(s),h.save.lastScroll(e.top),h.save.elementScroll(s))):h.is.bottom()&&(g.pushing?h.is.bound()&&e.bottom<=r.bottom&&(h.debug("Fixing bottom attached element to bottom of browser."),h.fixBottom()):h.is.bound()&&e.top<=r.bottom-a.height&&(h.debug("Fixing bottom attached element to top of browser."),h.fixTop())))},bindTop:function(){h.debug("Binding element to top of parent container"),h.remove.offset(),y.css({left:"",top:"",marginBottom:""}).removeClass(f.fixed).removeClass(f.bottom).addClass(f.bound).addClass(f.top),g.onTop.call(R),g.onUnstick.call(R)},bindBottom:function(){h.debug("Binding element to bottom of parent container"),h.remove.offset(),y.css({left:"",top:""}).removeClass(f.fixed).removeClass(f.top).addClass(f.bound).addClass(f.bottom),g.onBottom.call(R),g.onUnstick.call(R)},setInitialPosition:function(){h.debug("Returning to initial position"),h.unfix(),h.unbind()},fixTop:function(){h.debug("Fixing element to top of page"),h.set.minimumSize(),h.set.offset(),y.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(f.bound).removeClass(f.bottom).addClass(f.fixed).addClass(f.top),g.onStick.call(R)},fixBottom:function(){h.debug("Sticking element to bottom of page"),h.set.minimumSize(),h.set.offset(),y.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(f.bound).removeClass(f.top).addClass(f.fixed).addClass(f.bottom),g.onStick.call(R)},unbind:function(){h.is.bound()&&(h.debug("Removing container bound position on element"),h.remove.offset(),y.removeClass(f.bound).removeClass(f.top).removeClass(f.bottom))},unfix:function(){h.is.fixed()&&(h.debug("Removing fixed position on element"),h.remove.offset(),y.removeClass(f.fixed).removeClass(f.top).removeClass(f.bottom),g.onUnstick.call(R))},reset:function(){h.debug("Reseting elements position"),h.unbind(),h.unfix(),h.resetCSS(),h.remove.offset(),h.remove.lastScroll()},resetCSS:function(){y.css({width:"",height:""}),o.css({height:""})},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){g.debug&&(g.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,g.name+":"),h.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),h.verbose.apply(console,arguments)))},error:function(){h.error=Function.prototype.bind.call(console.error,console,g.name+":"),h.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,0)},display:function(){var t=g.name+":",n=0;l=!1,clearTimeout(h.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,o){var r,l,s,c=I;return n=n||u,o=R||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,a){var o=n!=r?a+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=r)c=c[o];else{if(c[o]!==i)return l=c[o],!1;if(!e.isPlainObject(c[a])||n==r)return c[a]!==i?(l=c[a],!1):!1;c=c[a]}})),e.isFunction(l)?s=l.apply(o,n):l!==i&&(s=l),e.isArray(a)?a.push(s):a!==i?a=[a,s]:s!==i&&(a=s),l}},d?(I===i&&h.initialize(),h.invoke(c)):(I!==i&&I.invoke("destroy"),h.initialize())}),a!==i?a:this},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document);