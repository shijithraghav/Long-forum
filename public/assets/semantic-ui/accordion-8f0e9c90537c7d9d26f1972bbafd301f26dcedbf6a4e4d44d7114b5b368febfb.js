/*!
 * # Semantic UI - Accordion
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,i,n){"use strict";e.fn.accordion=function(i){var a,o=e(this),r=(new Date).getTime(),l=[],s=arguments[0],c="string"==typeof s,d=[].slice.call(arguments,1);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return o.each(function(){var u,m,p=e.isPlainObject(i)?e.extend(!0,{},e.fn.accordion.settings,i):e.extend({},e.fn.accordion.settings),h=p.className,g=p.namespace,f=p.selector,b=p.error,v="."+g,T="module-"+g,E=o.selector||"",C=e(this),y=C.find(f.title),k=C.find(f.content),I=this,D=C.data(T);m={initialize:function(){m.debug("Initializing",C),m.bind.events(),p.observeChanges&&m.observeChanges(),m.instantiate()},instantiate:function(){D=m,C.data(T,m)},destroy:function(){m.debug("Destroying previous instance",C),C.off(v).removeData(T)},refresh:function(){y=C.find(f.title),k=C.find(f.content)},observeChanges:function(){"MutationObserver"in t&&(u=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()}),u.observe(I,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",u))},bind:{events:function(){m.debug("Binding delegated events"),C.on(p.on+v,f.trigger,m.event.click)}},event:{click:function(){m.toggle.call(this)}},toggle:function(t){var i=t!==n?"number"==typeof t?y.eq(t):e(t).closest(f.title):e(this).closest(f.title),a=i.next(k),o=a.hasClass(h.animating),r=a.hasClass(h.active),l=r&&!o,s=!r&&o;m.debug("Toggling visibility of content",i),l||s?p.collapsible?m.close.call(i):m.debug("Cannot close accordion content collapsing is disabled"):m.open.call(i)},open:function(t){var i=t!==n?"number"==typeof t?y.eq(t):e(t).closest(f.title):e(this).closest(f.title),a=i.next(k),o=a.hasClass(h.animating),r=a.hasClass(h.active),l=r||o;return l?void m.debug("Accordion already open, skipping",a):(m.debug("Opening accordion content",i),p.onOpening.call(a),p.exclusive&&m.closeOthers.call(i),i.addClass(h.active),a.stop(!0,!0).addClass(h.animating),p.animateChildren&&(e.fn.transition!==n&&C.transition("is supported")?a.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:p.debug,verbose:p.verbose,duration:p.duration}):a.children().stop(!0,!0).animate({opacity:1},p.duration,m.resetOpacity)),void a.slideDown(p.duration,p.easing,function(){a.removeClass(h.animating).addClass(h.active),m.reset.display.call(this),p.onOpen.call(this),p.onChange.call(this)}))},close:function(t){var i=t!==n?"number"==typeof t?y.eq(t):e(t).closest(f.title):e(this).closest(f.title),a=i.next(k),o=a.hasClass(h.animating),r=a.hasClass(h.active),l=!r&&o,s=r&&o;!r&&!l||s||(m.debug("Closing accordion content",a),p.onClosing.call(a),i.removeClass(h.active),a.stop(!0,!0).addClass(h.animating),p.animateChildren&&(e.fn.transition!==n&&C.transition("is supported")?a.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:p.debug,verbose:p.verbose,duration:p.duration}):a.children().stop(!0,!0).animate({opacity:0},p.duration,m.resetOpacity)),a.slideUp(p.duration,p.easing,function(){a.removeClass(h.animating).removeClass(h.active),m.reset.display.call(this),p.onClose.call(this),p.onChange.call(this)}))},closeOthers:function(t){var i,a,o,r=t!==n?y.eq(t):e(this).closest(f.title),l=r.parents(f.content).prev(f.title),s=r.closest(f.accordion),c=f.title+"."+h.active+":visible",d=f.content+"."+h.active+":visible";p.closeNested?(i=s.find(c).not(l),o=i.next(k)):(i=s.find(c).not(l),a=s.find(d).find(c).not(l),i=i.not(a),o=i.next(k)),i.length>0&&(m.debug("Exclusive enabled, closing other content",i),i.removeClass(h.active),o.removeClass(h.animating).stop(!0,!0),p.animateChildren&&(e.fn.transition!==n&&C.transition("is supported")?o.children().transition({animation:"fade out",useFailSafe:!0,debug:p.debug,verbose:p.verbose,duration:p.duration}):o.children().stop(!0,!0).animate({opacity:0},p.duration,m.resetOpacity)),o.slideUp(p.duration,p.easing,function(){e(this).removeClass(h.active),m.reset.display.call(this)}))},reset:{display:function(){m.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")},opacity:function(){m.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")}},setting:function(t,i){if(m.debug("Changing setting",t,i),e.isPlainObject(t))e.extend(!0,p,t);else{if(i===n)return p[t];p[t]=i}},internal:function(t,i){return m.debug("Changing internal",t,i),i===n?m[t]:void(e.isPlainObject(t)?e.extend(!0,m,t):m[t]=i)},debug:function(){p.debug&&(p.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,p.name+":"),m.debug.apply(console,arguments)))},verbose:function(){p.verbose&&p.debug&&(p.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,p.name+":"),m.verbose.apply(console,arguments)))},error:function(){m.error=Function.prototype.bind.call(console.error,console,p.name+":"),m.error.apply(console,arguments)},performance:{log:function(e){var t,i,n;p.performance&&(t=(new Date).getTime(),n=r||t,i=t-n,r=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:I,"Execution Time":i})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=p.name+":",i=0;r=!1,clearTimeout(m.performance.timer),e.each(l,function(e,t){i+=t["Execution Time"]}),t+=" "+i+"ms",E&&(t+=" '"+E+"'"),(console.group!==n||console.table!==n)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,i,o){var r,l,s,c=D;return i=i||d,o=I||o,"string"==typeof t&&c!==n&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(i,a){var o=i!=r?a+t[i+1].charAt(0).toUpperCase()+t[i+1].slice(1):t;if(e.isPlainObject(c[o])&&i!=r)c=c[o];else{if(c[o]!==n)return l=c[o],!1;if(!e.isPlainObject(c[a])||i==r)return c[a]!==n?(l=c[a],!1):(m.error(b.method,t),!1);c=c[a]}})),e.isFunction(l)?s=l.apply(o,i):l!==n&&(s=l),e.isArray(a)?a.push(s):a!==n?a=[a,s]:s!==n&&(a=s),l}},c?(D===n&&m.initialize(),m.invoke(s)):(D!==n&&D.invoke("destroy"),m.initialize())}),a!==n?a:this},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onOpen:function(){},onClosing:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function(e,t,i,n,a){return-n*(t/=a)*(t-2)+i}})}(jQuery,window,document);