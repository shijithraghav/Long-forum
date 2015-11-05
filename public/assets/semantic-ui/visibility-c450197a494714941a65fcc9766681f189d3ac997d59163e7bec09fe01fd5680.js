/*!
 * # Semantic UI - Visibility
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";e.fn.visibility=function(a){var o,r=e(this),l=r.selector||"",s=(new Date).getTime(),c=[],d=arguments[0],u="string"==typeof d,m=[].slice.call(arguments,1);return r.each(function(){var r,p,h,g=e.isPlainObject(a)?e.extend(!0,{},e.fn.visibility.settings,a):e.extend({},e.fn.visibility.settings),f=g.className,b=g.namespace,v=g.error,T=g.metadata,E="."+b,y="module-"+b,C=e(t),k=e(this),I=e(g.context),D=(k.selector||"",k.data(y)),R=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},O=this,w=!1;h={initialize:function(){h.debug("Initializing",g),h.setup.cache(),h.should.trackChanges()&&("image"==g.type&&h.setup.image(),"fixed"==g.type&&h.setup.fixed(),g.observeChanges&&h.observeChanges(),h.bind.events()),h.save.position(),h.is.visible()||h.error(v.visible,k),g.initialCheck&&h.checkVisibility(),h.instantiate()},instantiate:function(){h.debug("Storing instance",h),k.data(y,h),D=h},destroy:function(){h.verbose("Destroying previous module"),p&&p.disconnect(),C.off("load"+E,h.event.load).off("resize"+E,h.event.resize),I.off("scrollchange"+E,h.event.scrollchange),k.off(E).removeData(y)},observeChanges:function(){"MutationObserver"in t&&(p=new MutationObserver(function(e){h.verbose("DOM tree modified, updating visibility calculations"),h.timer=setTimeout(function(){h.verbose("DOM tree modified, updating sticky menu"),h.refresh()},100)}),p.observe(O,{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",p))},bind:{events:function(){h.verbose("Binding visibility events to scroll and resize"),g.refreshOnLoad&&C.on("load"+E,h.event.load),C.on("resize"+E,h.event.resize),I.off("scroll"+E).on("scroll"+E,h.event.scroll).on("scrollchange"+E,h.event.scrollchange)}},event:{resize:function(){h.debug("Window resized"),g.refreshOnResize&&R(h.refresh)},load:function(){h.debug("Page finished loading"),R(h.refresh)},scroll:function(){g.throttle?(clearTimeout(h.timer),h.timer=setTimeout(function(){I.triggerHandler("scrollchange"+E,[I.scrollTop()])},g.throttle)):R(function(){I.triggerHandler("scrollchange"+E,[I.scrollTop()])})},scrollchange:function(e,t){h.checkVisibility(t)}},precache:function(t,i){t instanceof Array||(t=[t]);for(var a=t.length,o=0,r=[],l=n.createElement("img"),s=function(){o++,o>=t.length&&e.isFunction(i)&&i()};a--;)l=n.createElement("img"),l.onload=s,l.onerror=s,l.src=t[a],r.push(l)},enableCallbacks:function(){h.debug("Allowing callbacks to occur"),w=!1},disableCallbacks:function(){h.debug("Disabling all callbacks temporarily"),w=!0},should:{trackChanges:function(){return u?(h.debug("One time query, no need to bind events"),!1):(h.debug("Callbacks being attached"),!0)}},setup:{cache:function(){h.cache={occurred:{},screen:{},element:{}}},image:function(){var e=k.data(T.src);e&&(h.verbose("Lazy loading image",e),g.once=!0,g.observeChanges=!1,g.onOnScreen=function(){h.debug("Image on screen",O),h.precache(e,function(){h.set.image(e)})})},fixed:function(){h.debug("Setting up fixed"),g.once=!1,g.observeChanges=!1,g.initialCheck=!0,g.refreshOnLoad=!0,a.transition||(g.transition=!1),h.create.placeholder(),h.debug("Added placeholder",r),g.onTopPassed=function(){h.debug("Element passed, adding fixed position",k),h.show.placeholder(),h.set.fixed(),g.transition&&e.fn.transition!==i&&k.transition(g.transition,g.duration)},g.onTopPassedReverse=function(){h.debug("Element returned to position, removing fixed",k),h.hide.placeholder(),h.remove.fixed()}}},create:{placeholder:function(){h.verbose("Creating fixed position placeholder"),r=k.clone(!1).css("display","none").addClass(f.placeholder).insertAfter(k)}},show:{placeholder:function(){h.verbose("Showing placeholder"),r.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){h.verbose("Hiding placeholder"),r.css("display","none").css("visibility","")}},set:{fixed:function(){h.verbose("Setting element to fixed position"),k.addClass(f.fixed).css({position:"fixed",top:g.offset+"px",left:"auto",zIndex:"1"})},image:function(t){k.attr("src",t),g.transition?e.fn.transition!==i?k.transition(g.transition,g.duration):k.fadeIn(g.duration):k.show()}},is:{onScreen:function(){var e=h.get.elementCalculations();return e.onScreen},offScreen:function(){var e=h.get.elementCalculations();return e.offScreen},visible:function(){return h.cache&&h.cache.element?!(0===h.cache.element.width&&0===h.cache.element.offset.top):!1}},refresh:function(){h.debug("Refreshing constants (width/height)"),"fixed"==g.type&&(h.remove.fixed(),h.remove.occurred()),h.reset(),h.save.position(),g.checkOnRefresh&&h.checkVisibility(),g.onRefresh.call(O)},reset:function(){h.verbose("Reseting all cached values"),e.isPlainObject(h.cache)&&(h.cache.screen={},h.cache.element={})},checkVisibility:function(e){h.verbose("Checking visibility of element",h.cache.element),!w&&h.is.visible()&&(h.save.scroll(e),h.save.calculations(),h.passed(),h.passingReverse(),h.topVisibleReverse(),h.bottomVisibleReverse(),h.topPassedReverse(),h.bottomPassedReverse(),h.onScreen(),h.offScreen(),h.passing(),h.topVisible(),h.bottomVisible(),h.topPassed(),h.bottomPassed(),g.onUpdate&&g.onUpdate.call(O,h.get.elementCalculations()))},passed:function(t,n){var a=h.get.elementCalculations();if(t&&n)g.onPassed[t]=n;else{if(t!==i)return h.get.pixelsPassed(t)>a.pixelsPassed;a.passing&&e.each(g.onPassed,function(e,t){a.bottomVisible||a.pixelsPassed>h.get.pixelsPassed(e)?h.execute(t,e):g.once||h.remove.occurred(t)})}},onScreen:function(e){var t=h.get.elementCalculations(),n=e||g.onOnScreen,a="onScreen";return e&&(h.debug("Adding callback for onScreen",e),g.onOnScreen=e),t.onScreen?h.execute(n,a):g.once||h.remove.occurred(a),e!==i?t.onOnScreen:void 0},offScreen:function(e){var t=h.get.elementCalculations(),n=e||g.onOffScreen,a="offScreen";return e&&(h.debug("Adding callback for offScreen",e),g.onOffScreen=e),t.offScreen?h.execute(n,a):g.once||h.remove.occurred(a),e!==i?t.onOffScreen:void 0},passing:function(e){var t=h.get.elementCalculations(),n=e||g.onPassing,a="passing";return e&&(h.debug("Adding callback for passing",e),g.onPassing=e),t.passing?h.execute(n,a):g.once||h.remove.occurred(a),e!==i?t.passing:void 0},topVisible:function(e){var t=h.get.elementCalculations(),n=e||g.onTopVisible,a="topVisible";return e&&(h.debug("Adding callback for top visible",e),g.onTopVisible=e),t.topVisible?h.execute(n,a):g.once||h.remove.occurred(a),e===i?t.topVisible:void 0},bottomVisible:function(e){var t=h.get.elementCalculations(),n=e||g.onBottomVisible,a="bottomVisible";return e&&(h.debug("Adding callback for bottom visible",e),g.onBottomVisible=e),t.bottomVisible?h.execute(n,a):g.once||h.remove.occurred(a),e===i?t.bottomVisible:void 0},topPassed:function(e){var t=h.get.elementCalculations(),n=e||g.onTopPassed,a="topPassed";return e&&(h.debug("Adding callback for top passed",e),g.onTopPassed=e),t.topPassed?h.execute(n,a):g.once||h.remove.occurred(a),e===i?t.topPassed:void 0},bottomPassed:function(e){var t=h.get.elementCalculations(),n=e||g.onBottomPassed,a="bottomPassed";return e&&(h.debug("Adding callback for bottom passed",e),g.onBottomPassed=e),t.bottomPassed?h.execute(n,a):g.once||h.remove.occurred(a),e===i?t.bottomPassed:void 0},passingReverse:function(e){var t=h.get.elementCalculations(),n=e||g.onPassingReverse,a="passingReverse";return e&&(h.debug("Adding callback for passing reverse",e),g.onPassingReverse=e),t.passing?g.once||h.remove.occurred(a):h.get.occurred("passing")&&h.execute(n,a),e!==i?!t.passing:void 0},topVisibleReverse:function(e){var t=h.get.elementCalculations(),n=e||g.onTopVisibleReverse,a="topVisibleReverse";return e&&(h.debug("Adding callback for top visible reverse",e),g.onTopVisibleReverse=e),t.topVisible?g.once||h.remove.occurred(a):h.get.occurred("topVisible")&&h.execute(n,a),e===i?!t.topVisible:void 0},bottomVisibleReverse:function(e){var t=h.get.elementCalculations(),n=e||g.onBottomVisibleReverse,a="bottomVisibleReverse";return e&&(h.debug("Adding callback for bottom visible reverse",e),g.onBottomVisibleReverse=e),t.bottomVisible?g.once||h.remove.occurred(a):h.get.occurred("bottomVisible")&&h.execute(n,a),e===i?!t.bottomVisible:void 0},topPassedReverse:function(e){var t=h.get.elementCalculations(),n=e||g.onTopPassedReverse,a="topPassedReverse";return e&&(h.debug("Adding callback for top passed reverse",e),g.onTopPassedReverse=e),t.topPassed?g.once||h.remove.occurred(a):h.get.occurred("topPassed")&&h.execute(n,a),e===i?!t.onTopPassed:void 0},bottomPassedReverse:function(e){var t=h.get.elementCalculations(),n=e||g.onBottomPassedReverse,a="bottomPassedReverse";return e&&(h.debug("Adding callback for bottom passed reverse",e),g.onBottomPassedReverse=e),t.bottomPassed?g.once||h.remove.occurred(a):h.get.occurred("bottomPassed")&&h.execute(n,a),e===i?!t.bottomPassed:void 0},execute:function(e,t){var n=h.get.elementCalculations(),i=h.get.screenCalculations();e=e||!1,e&&(g.continuous?(h.debug("Callback being called continuously",t,n),e.call(O,n,i)):h.get.occurred(t)||(h.debug("Conditions met",t,n),e.call(O,n,i))),h.save.occurred(t)},remove:{fixed:function(){h.debug("Removing fixed position"),k.removeClass(f.fixed).css({position:"",top:"",left:"",zIndex:""})},occurred:function(e){if(e){var t=h.cache.occurred;t[e]!==i&&t[e]===!0&&(h.debug("Callback can now be called again",e),h.cache.occurred[e]=!1)}else h.cache.occurred={}}},save:{calculations:function(){h.verbose("Saving all calculations necessary to determine positioning"),h.save.direction(),h.save.screenCalculations(),h.save.elementCalculations()},occurred:function(e){e&&(h.cache.occurred[e]===i||h.cache.occurred[e]!==!0)&&(h.verbose("Saving callback occurred",e),h.cache.occurred[e]=!0)},scroll:function(e){e=e+g.offset||I.scrollTop()+g.offset,h.cache.scroll=e},direction:function(){var e,t=h.get.scroll(),n=h.get.lastScroll();return e=t>n&&n?"down":n>t&&n?"up":"static",h.cache.direction=e,h.cache.direction},elementPosition:function(){var e=h.cache.element,t=h.get.screenSize();return h.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=k.offset(),e.width=k.outerWidth(),e.height=k.outerHeight(),h.cache.element=e,e},elementCalculations:function(){var e=h.get.screenCalculations(),t=h.get.elementPosition();return g.includeMargin?(t.margin={},t.margin.top=parseInt(k.css("margin-top"),10),t.margin.bottom=parseInt(k.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topVisible=e.bottom>=t.top,t.topPassed=e.top>=t.top,t.bottomVisible=e.bottom>=t.bottom,t.bottomPassed=e.top>=t.bottom,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=t.topVisible&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),h.cache.element=t,h.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=h.get.scroll();return h.save.direction(),h.cache.screen.top=e,h.cache.screen.bottom=e+h.cache.screen.height,h.cache.screen},screenSize:function(){h.verbose("Saving window position"),h.cache.screen={height:I.height()}},position:function(){h.save.screenSize(),h.save.elementPosition()}},get:{pixelsPassed:function(e){var t=h.get.elementCalculations();return e.search("%")>-1?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return h.cache.occurred!==i?h.cache.occurred[e]||!1:!1},direction:function(){return h.cache.direction===i&&h.save.direction(),h.cache.direction},elementPosition:function(){return h.cache.element===i&&h.save.elementPosition(),h.cache.element},elementCalculations:function(){return h.cache.element===i&&h.save.elementCalculations(),h.cache.element},screenCalculations:function(){return h.cache.screen===i&&h.save.screenCalculations(),h.cache.screen},screenSize:function(){return h.cache.screen===i&&h.save.screenSize(),h.cache.screen},scroll:function(){return h.cache.scroll===i&&h.save.scroll(),h.cache.scroll},lastScroll:function(){return h.cache.screen===i?(h.debug("First scroll event, no last scroll could be found"),!1):h.cache.screen.top}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){g.debug&&(g.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,g.name+":"),h.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),h.verbose.apply(console,arguments)))},error:function(){h.error=Function.prototype.bind.call(console.error,console,g.name+":"),h.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var t=g.name+":",n=0;s=!1,clearTimeout(h.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,a){var r,l,s,c=D;return n=n||m,a=O||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,a){var o=n!=r?a+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[o])&&n!=r)c=c[o];else{if(c[o]!==i)return l=c[o],!1;if(!e.isPlainObject(c[a])||n==r)return c[a]!==i?(l=c[a],!1):(h.error(v.method,t),!1);c=c[a]}})),e.isFunction(l)?s=l.apply(a,n):l!==i&&(s=l),e.isArray(o)?o.push(s):o!==i?o=[o,s]:s!==i&&(o=s),l}},u?(D===i&&h.initialize(),D.save.scroll(),D.save.calculations(),h.invoke(d)):(D!==i&&D.invoke("destroy"),h.initialize())}),o!==i?o:this},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:t,throttle:!1,type:!1,transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);