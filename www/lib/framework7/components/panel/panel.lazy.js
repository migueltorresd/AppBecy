(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);var n=e.$,t=e.utils,s=(e.getDevice,e.getSupport),l=e.Class,i=(e.Modal,e.ConstructorMethods,e.ModalMethods,t.extend),o=t.now,r=t.nextFrame,p=t.deleteProps;function d(e){const a=e.app,t=s();if(e.resizableInitialized)return;i(e,{resizable:!0,resizableWidth:null,resizableInitialized:!0});const l=n("html"),{$el:o,$backdropEl:p,side:d,effect:c}=e;if(!o)return;let h,f;const b={};let g,v,u,m,w,C;function k(e){if(!e)return null;if(e.indexOf("%")>=0||e.indexOf("vw")>=0)return parseInt(e,10)/100*a.width;const n=parseInt(e,10);return Number.isNaN(n)?null:n}function $(a){e.resizable&&o.hasClass("panel-resizable")&&(b.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,b.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY,f=!1,h=!0,m=k(o.css("min-width")),w=k(o.css("max-width")),C=o.hasClass("panel-in-breakpoint"))}function z(t){if(!h)return;const s="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX;f||(v=o[0].offsetWidth,o.transition(0),o.addClass("panel-resizing"),l.css("cursor","col-resize"),("cover"!==c||C)&&(u=n(e.getViewEl()),e.$containerEl&&e.$containerEl.hasClass("page")&&u.add(e.$containerEl.children(".page-content, .tabs, .fab"))),"cover"===c||C||(p.transition(0),u.transition(0))),f=!0,t.preventDefault(),g=s-b.x;let i="left"===d?v+g:v-g;m&&!Number.isNaN(m)&&(i=Math.max(i,m)),w&&!Number.isNaN(w)&&(i=Math.min(i,w)),i=Math.min(Math.max(i,0),a.width),e.resizableWidth=i,o[0].style.width=`${i}px`,"cover"===c||C?C&&u&&u.css(`margin-${d}`,`${i}px`):(u&&u.transform(`translate3d(${"left"===d?i:-i}px, 0, 0)`),p&&p.transform(`translate3d(${"left"===d?i:-i}px, 0, 0)`)),o.trigger("panel:resize",i),e.emit("local::resize panelResize",e,i)}function B(){if(n("html").css("cursor",""),!h||!f)return h=!1,void(f=!1);h=!1,f=!1,l[0].style.setProperty(`--f7-panel-${d}-width`,`${e.resizableWidth}px`),o[0].style.width="","cover"===c||C||(u.transform(""),p.transform("")),o.removeClass("panel-resizing"),r((()=>{o.transition(""),"cover"!==c&&(p.transition(""),u&&u.transition(""))}))}function E(){e.opened&&e.resizableWidth&&(m=k(o.css("min-width")),w=k(o.css("max-width")),m&&!Number.isNaN(m)&&e.resizableWidth<m&&(e.resizableWidth=Math.max(e.resizableWidth,m)),w&&!Number.isNaN(w)&&e.resizableWidth>w&&(e.resizableWidth=Math.min(e.resizableWidth,w)),e.resizableWidth=Math.min(Math.max(e.resizableWidth,0),a.width),l[0].style.setProperty(`--f7-panel-${d}-width`,`${e.resizableWidth}px`))}0===e.$el.find(".panel-resize-handler").length&&e.$el.append('<div class="panel-resize-handler"></div>'),e.$resizeHandlerEl=e.$el.children(".panel-resize-handler"),o.addClass("panel-resizable");const y=!!t.passiveListener&&{passive:!0};e.$el.on(a.touchEvents.start,".panel-resize-handler",$,y),a.on("touchmove:active",z),a.on("touchend:passive",B),a.on("resize",E),e.on("beforeOpen",E),e.once("panelDestroy",(()=>{o.removeClass("panel-resizable"),e.$resizeHandlerEl.remove(),e.$el.off(a.touchEvents.start,".panel-resize-handler",$,y),a.off("touchmove:active",z),a.off("touchend:passive",B),a.off("resize",E),e.off("beforeOpen",E)}))}class c extends l{constructor(e,a){void 0===a&&(a={});const t=i({on:{}},e.params.panel,a);super(t,[e]);const s=this;let l;if(s.params=t,s.$containerEl=s.params.containerEl?n(s.params.containerEl).eq(0):e.$el,s.containerEl=s.$containerEl[0],s.containerEl||(s.$containerEl=e.$el,s.containerEl=e.$el[0]),s.params.el?l=n(s.params.el).eq(0):s.params.content&&(l=n(s.params.content).filter((e=>1===e.nodeType)).eq(0)),0===l.length)return s;if(l[0].f7Panel)return l[0].f7Panel;l[0].f7Panel=s;let o,{side:r,effect:p,resizable:d}=s.params;return void 0===r&&(r=l.hasClass("panel-left")?"left":"right"),void 0===p&&(p=l.hasClass("panel-cover")?"cover":l.hasClass("panel-push")?"push":"reveal"),void 0===d&&(d=l.hasClass("panel-resizable")),s.params.backdrop&&s.params.backdropEl?o=n(s.params.backdropEl):s.params.backdrop&&(o=s.$containerEl.children(".panel-backdrop"),0===o.length&&(o=n('<div class="panel-backdrop"></div>'),s.$containerEl.prepend(o))),i(s,{app:e,side:r,effect:p,resizable:d,$el:l,el:l[0],opened:!1,$backdropEl:o,backdropEl:o&&o[0]}),s.useModules(),s.init(),s}getViewEl(){const e=this;let a;return a=e.$containerEl.children(".views").length>0?e.$containerEl.children(".views")[0]:e.$containerEl.children(".view")[0],a}setStateClasses(e){const a=this,{side:t,el:s}=a,l=a.getViewEl(),i=l&&l.contains(s),o=!l||i?a.$containerEl:n("html");"open"===e&&o.addClass(`with-panel with-panel-${a.side}-${a.effect}`),"before-closing"===e&&o.addClass("with-panel-closing"),"closing"===e&&(o.addClass("with-panel-closing"),o.removeClass(`with-panel with-panel-${a.side}-${a.effect}`)),"after-closing"===e&&o.removeClass("with-panel-closing"),"closed"===e&&o.removeClass(`with-panel-${t}-reveal with-panel-${t}-cover with-panel-${t}-push with-panel`)}enableVisibleBreakpoint(){const e=this;return e.visibleBreakpointDisabled=!1,e.setVisibleBreakpoint(),e}disableVisibleBreakpoint(){const e=this;return e.visibleBreakpointDisabled=!0,e.setVisibleBreakpoint(),e}toggleVisibleBreakpoint(){const e=this;return e.visibleBreakpointDisabled=!e.visibleBreakpointDisabled,e.setVisibleBreakpoint(),e}setVisibleBreakpoint(e){void 0===e&&(e=!0);const a=this,t=a.app;a.visibleBreakpointResizeHandler||(a.visibleBreakpointResizeHandler=function(){a.setVisibleBreakpoint()},t.on("resize",a.visibleBreakpointResizeHandler));const{side:s,$el:l,$containerEl:i,params:o,visibleBreakpointDisabled:r}=a,p=o.visibleBreakpoint,d=n(a.getViewEl()),c=l.hasClass("panel-in-breakpoint");i&&i.hasClass("page")&&d.add(i.children(".page-content, .tabs, .fab")),t.width>=p&&null!=p&&!r?c?d.css({[`margin-${s}`]:`${l.width()}px`}):(a.setStateClasses("closed"),l.addClass("panel-in-breakpoint").removeClass("panel-in panel-in-collapsed"),a.onOpen(!1),a.onOpened(),d.css({[`margin-${s}`]:`${l.width()}px`}),t.allowPanelOpen=!0,e&&(a.emit("local::breakpoint panelBreakpoint",a),a.$el.trigger("panel:breakpoint"))):c&&(l.removeClass("panel-in-breakpoint panel-in"),a.onClose(),a.onClosed(),d.css({[`margin-${s}`]:""}),e&&(a.emit("local::breakpoint panelBreakpoint",a),a.$el.trigger("panel:breakpoint")))}enableCollapsedBreakpoint(){const e=this;return e.collapsedBreakpointDisabled=!1,e.setCollapsedBreakpoint(),e}disableCollapsedBreakpoint(){const e=this;return e.collapsedBreakpointDisabled=!0,e.setCollapsedBreakpoint(),e}toggleCollapsedBreakpoint(){const e=this;return e.collapsedBreakpointDisabled=!e.collapsedBreakpointDisabled,e.setCollapsedBreakpoint(),e}setCollapsedBreakpoint(e){void 0===e&&(e=!0);const a=this,n=a.app;a.collapsedBreakpointResizeHandler||(a.collapsedBreakpointResizeHandler=function(){a.setCollapsedBreakpoint()},n.on("resize",a.collapsedBreakpointResizeHandler));const{$el:t,params:s,collapsedBreakpointDisabled:l}=a;if(t.hasClass("panel-in-breakpoint"))return;const i=s.collapsedBreakpoint,o=t.hasClass("panel-in-collapsed");n.width>=i&&null!=i&&!l?o||(a.setStateClasses("closed"),t.addClass("panel-in-collapsed").removeClass("panel-in"),a.collapsed=!0,n.allowPanelOpen=!0,e&&(a.emit("local::collapsedBreakpoint panelCollapsedBreakpoint",a),a.$el.trigger("panel:collapsedbreakpoint"))):o&&(t.removeClass("panel-in-collapsed panel-in"),a.collapsed=!1,e&&(a.emit("local::collapsedBreakpoint panelCollapsedBreakpoint",a),a.$el.trigger("panel:collapsedbreakpoint")))}enableResizable(){const e=this;return e.resizableInitialized?(e.resizable=!0,e.$el.addClass("panel-resizable")):d(e),e}disableResizable(){const e=this;return e.resizable=!1,e.$el.removeClass("panel-resizable"),e}enableSwipe(){const e=this;return e.swipeInitialized?e.swipeable=!0:function(e){const a=e.app;if(e.swipeInitialized)return;i(e,{swipeable:!0,swipeInitialized:!0});const t=e.params,{$el:s,$backdropEl:l,side:p,effect:d}=e;let c,h,f,b,g,v;const u={};let m,w,C,k,$,z,B,E=0;function y(s){if(!e.swipeable||f)return;if(!a.panel.allowOpen||!t.swipe&&!t.swipeOnlyClose||h)return;if(n(".modal-in:not(.toast):not(.notification), .photo-browser-in").length>0)return;c=a.panel.get("left"===p?"right":"left")||{};const l=c.opened&&c.$el&&!c.$el.hasClass("panel-in-breakpoint");if((e.opened||!l)&&(t.swipeOnlyClose||!l)&&(!s.target||"input"!==s.target.nodeName.toLowerCase()||"range"!==s.target.type)&&!(n(s.target).closest(".range-slider, .tabs-swipeable-wrap, .calendar-months, .no-swipe-panel, .card-opened").length>0)&&(u.x="touchstart"===s.type?s.targetTouches[0].pageX:s.pageX,u.y="touchstart"===s.type?s.targetTouches[0].pageY:s.pageY,!t.swipeOnlyClose||e.opened)){if(t.swipeActiveArea&&!e.opened){if("left"===p&&u.x>t.swipeActiveArea)return;if("right"===p&&u.x<a.width-t.swipeActiveArea)return}E=0,B=n(e.getViewEl()),b=!1,h=!0,g=void 0,v=!1,m=o(),z=void 0}}function x(n){if(!h||f||v)return;if(E+=1,E<2)return;if(n.f7PreventSwipePanel||a.preventSwipePanelBySwipeBack||a.preventSwipePanel)return void(h=!1);const i="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,o="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(void 0===g&&(g=!!(g||Math.abs(o-u.y)>Math.abs(i-u.x))),g)return void(h=!1);if(!z){if(z=i>u.x?"to-right":"to-left",t.swipeActiveArea>0&&!e.opened){if("left"===p&&u.x>t.swipeActiveArea)return void(h=!1);if("right"===p&&u.x<a.width-t.swipeActiveArea)return void(h=!1)}if(s.hasClass("panel-in-breakpoint"))return void(h=!1);if("left"===p&&"to-left"===z&&!s.hasClass("panel-in")||"right"===p&&"to-right"===z&&!s.hasClass("panel-in"))return void(h=!1)}let r=e.opened?0:-t.swipeThreshold;"right"===p&&(r=-r),b||(e.opened||(e.insertToRoot(),s.addClass("panel-in-swipe"),l.css("visibility","visible"),s.trigger("panel:swipeopen"),e.emit("local::swipeOpen panelSwipeOpen",e)),$=s[0].offsetWidth,"reveal"===d&&s.hasClass("panel-in-collapsed")&&($-=parseFloat(B.css(`margin-${p}`))),s.transition(0)),b=!0,n.cancelable&&n.preventDefault(),w=i-u.x+r,"right"===p?"cover"===d||"push"===d?(C=w+(e.opened?0:$),C<0&&(C=0),C>$&&(C=$)):(C=w-(e.opened?$:0),C>0&&(C=0),C<-$&&(C=-$)):(C=w+(e.opened?$:0),C<0&&(C=0),C>$&&(C=$));const c=Math.abs(C/$);if("reveal"===d)t.swipeNoFollow||(B.transform(`translate3d(${C}px,0,0)`).transition(0),l.transform(`translate3d(${C}px,0,0)`).transition(0)),s.trigger("panel:swipe",Math.abs(C/$)),e.emit("local::swipe panelSwipe",e,Math.abs(C/$));else{if("left"===p&&(C-=$),!t.swipeNoFollow&&(l.transition(0),k=1-Math.abs(C/$),l.css({opacity:k}),s.transform(`translate3d(${C}px,0,0)`).transition(0),"push"===d)){const e="left"===p?C+$:C-$;B.transform(`translate3d(${e}px,0,0)`).transition(0),l.transform(`translate3d(${e}px,0,0)`).transition(0)}s.trigger("panel:swipe",Math.abs(C/$)),e.emit("local::swipe panelSwipe",e,Math.abs(C/$))}t.swipeNoFollow&&(e.opened&&0===c||!e.opened&&1===c)&&(v=!0,O(n))}function O(a){if(!h||!b)return h=!1,void(b=!1);const n="gesturestart"===a.type||f;h=!1,b=!1;const i=(new Date).getTime()-m;let o;const c=(0===C||Math.abs(C)===$)&&!t.swipeNoFollow,g=t.swipeThreshold||0;o=n?"reset":e.opened?"cover"===d||"push"===d?0===C?"reset":i<300&&Math.abs(C)>0?"swap":i>=300&&Math.abs(C)<$/2?"reset":"swap":C===-$?"reset":i<300&&Math.abs(C)>=0||i>=300&&Math.abs(C)<=$/2?"left"===p&&C===$?"reset":"swap":"reset":Math.abs(w)<g?"reset":"cover"===d||"push"===d?0===C||i<300&&Math.abs(C)>0||i>=300&&Math.abs(C)<$/2?"swap":"reset":0===C?"reset":i<300&&Math.abs(C)>0||i>=300&&Math.abs(C)>=$/2?"swap":"reset","swap"===o&&(e.opened?e.close(!c):e.open(!c));let v=!0;if("reset"===o&&!e.opened)if(c)s.removeClass("panel-in-swipe");else{v=!1;const a="reveal"===d?B:s;e.setStateClasses("before-closing"),a.transitionEnd((()=>{s.hasClass("panel-in")||(s.removeClass("panel-in-swipe"),e.setStateClasses("after-closing"))}))}"reveal"!==d&&"push"!==d||r((()=>{B.transition(""),B.transform("")})),v&&s.removeClass("panel-in-swipe"),s.transition("").transform(""),l.transform("").transition("").css({opacity:"",visibility:""})}function M(e){f=!0,O(e)}function N(){f=!1}a.on("touchstart:passive",y),a.on("touchmove:active",x),a.on("touchend:passive",O),a.on("gesturestart",M),a.on("gestureend",N),e.on("panelDestroy",(()=>{a.off("touchstart:passive",y),a.off("touchmove:active",x),a.off("touchend:passive",O),a.off("gesturestart",M),a.off("gestureend",N)}))}(e),e}disableSwipe(){return this.swipeable=!1,this}onOpen(e){void 0===e&&(e=!0);const a=this,n=a.app;a.opened=!0,n.panel.allowOpen=!1,a.$el.trigger("panel:beforeopen"),a.emit("local::beforeOpen panelBeforeOpen",a),e&&a.setStateClasses("open"),a.$el.trigger("panel:open"),a.emit("local::open panelOpen",a)}onOpened(){const e=this;e.app.panel.allowOpen=!0,e.$el.trigger("panel:opened"),e.emit("local::opened panelOpened",e)}onClose(){const e=this,a=e.app;e.opened=!1,a.panel.allowOpen=!1,e.$el.trigger("panel:beforeclose"),e.emit("local::beforeClose panelBeforeClose",e),e.setStateClasses("closing"),e.$el.trigger("panel:close"),e.emit("local::close panelClose",e)}onClosed(){const e=this,a=e.app;if(a.panel.allowOpen=!0,e.setStateClasses("after-closing"),e.$el.removeClass("panel-out"),e.$backdropEl){const n=a.panel.get(".panel-in");(!n||n&&!n.$backdropEl)&&e.$backdropEl.removeClass("panel-backdrop-in")}e.$el.trigger("panel:closed"),e.emit("local::closed panelClosed",e)}toggle(e){void 0===e&&(e=!0);const a=this,n=a.params.visibleBreakpoint;return a.app.width>=n&&null!=n?a.toggleVisibleBreakpoint():(a.opened?a.close(e):a.open(e),a)}insertToRoot(){const e=this,a=getDocument(),{$el:n,$backdropEl:t,$containerEl:s}=e,l=n.parent(),i=n.parents(a).length>0;if(!l.is(s)||n.prevAll(".views, .view").length){const a=s.children(".panel, .views, .view").eq(0),o=s.children(".panel-backdrop").eq(0);a.length?n.insertBefore(a):o?n.insertBefore(o):s.prepend(n),t&&t.length&&(!t.parent().is(s)&&0===t.nextAll(".panel").length||t.parent().is(s)&&0===t.nextAll(".panel").length)&&t.insertBefore(n),e.once("panelClosed",(()=>{i?l.append(n):n.remove()}))}}open(e){void 0===e&&(e=!0);const a=this,t=a.app;if(!t.panel.allowOpen)return!1;const{effect:s,$el:l,$backdropEl:i,opened:o,$containerEl:r}=a;if(!l||l.hasClass("panel-in"))return a;if(a.insertToRoot(),o||l.hasClass("panel-in-breakpoint")||l.hasClass("panel-in"))return!1;const p=t.panel.get(".panel-in");p&&p!==a&&p.close(e),l[e?"removeClass":"addClass"]("not-animated"),l.addClass("panel-in"),i&&(i.addClass("panel-backdrop-in"),i[e?"removeClass":"addClass"]("not-animated")),"cover"!==a.effect&&"push"!==a.effect||(a._clientLeft=l[0].clientLeft);const d=n(a.getViewEl());r&&r.hasClass("page")&&d.add(r.children(".page-content, .tabs"));const c="reveal"===s?d:l;return e?(i&&i.removeClass("not-animated"),function e(){c.transitionEnd((t=>{n(t.target).is(c)?l.hasClass("panel-out")?a.onClosed():a.onOpened():e()}))}(),l.removeClass("panel-out not-animated").addClass("panel-in"),a.onOpen()):(i&&i.addClass("not-animated"),l.removeClass("panel-out").addClass("panel-in not-animated"),a.onOpen(),a.onOpened()),!0}close(e){void 0===e&&(e=!0);const a=this,{effect:t,$el:s,$backdropEl:l,opened:i,$containerEl:o}=a;if(!i||s.hasClass("panel-in-breakpoint")||!s.hasClass("panel-in"))return a;s[e?"removeClass":"addClass"]("not-animated"),l&&l[e?"removeClass":"addClass"]("not-animated");const r=n(a.getViewEl());o&&o.hasClass("page")&&r.add(o.children(".page-content, .tabs"));return e?(("reveal"===t?r:s).transitionEnd((()=>{s.hasClass("panel-out")?a.onClosed():s.hasClass("panel-in")&&a.onOpened(),a.setStateClasses("after-closing")})),s.removeClass("panel-in").addClass("panel-out"),a.onClose()):(s.addClass("not-animated").removeClass("panel-in").addClass("panel-out"),a.onClose(),a.onClosed()),a}init(){const e=this;void 0!==e.params.visibleBreakpoint&&e.setVisibleBreakpoint(),void 0!==e.params.collapsedBreakpoint&&e.setCollapsedBreakpoint(),e.params.swipe&&e.enableSwipe(),e.resizable&&e.enableResizable()}destroy(){let e=this;const a=e.app,{$containerEl:t}=e;if(e.$el){if(e.emit("local::beforeDestroy panelBeforeDestroy",e),e.$el.trigger("panel:beforedestroy"),e.visibleBreakpointResizeHandler&&a.off("resize",e.visibleBreakpointResizeHandler),e.collapsedBreakpointResizeHandler&&a.off("resize",e.collapsedBreakpointResizeHandler),e.$el.hasClass("panel-in-breakpoint")||e.$el.hasClass("panel-in-collapsed")){const a=n(e.getViewEl());t&&t.hasClass("page")&&a.add(t.children(".page-content, .tabs")),e.$el.removeClass("panel-in-breakpoint panel-in-collapsed panel-in"),a.css({[`margin-${e.side}`]:""}),e.emit("local::breakpoint panelBreakpoint",e),e.$el.trigger("panel:breakpoint")}e.$el.trigger("panel:destroy"),e.emit("local::destroy panelDestroy",e),e.el&&(e.el.f7Panel=null,delete e.el.f7Panel),p(e),e=null}}}var h={name:"panel",params:{panel:{opened:void 0,side:void 0,effect:void 0,resizable:void 0,backdrop:!0,backdropEl:void 0,visibleBreakpoint:void 0,collapsedBreakpoint:void 0,swipe:!1,swipeNoFollow:!1,swipeOnlyClose:!1,swipeActiveArea:0,swipeThreshold:0,closeByBackdropClick:!0,containerEl:void 0}},static:{Panel:c},create(){const e=this;i(e,{panel:{allowOpen:!0,create:a=>new c(e,a),get(e){if(void 0===e&&(e=".panel"),e instanceof c)return e;"left"!==e&&"right"!==e||(e=`.panel-${e}`);const a=n(e);return 0===a.length||a.length>1?void 0:a[0].f7Panel},destroy(a){void 0===a&&(a=".panel");const n=e.panel.get(a);if(n&&n.destroy)return n.destroy()},open(a,n){void 0===a&&(a=".panel"),"left"!==a&&"right"!==a||(a=`.panel-${a}`);let t=e.panel.get(a);return t&&t.open?t.open(n):t?void 0:(t=e.panel.create({el:a}),t.open(n))},close(a,n){void 0===a&&(a=".panel-in"),"left"!==a&&"right"!==a||(a=`.panel-${a}`);let t=e.panel.get(a);return t&&t.open?t.close(n):t?void 0:(t=e.panel.create({el:a}),t.close(n))},toggle(a,n){void 0===a&&(a=".panel"),"left"!==a&&"right"!==a||(a=`.panel-${a}`);let t=e.panel.get(a);return t&&t.toggle?t.toggle(n):t?void 0:(t=e.panel.create({el:a}),t.toggle(n))}}})},on:{init(){const e=this;n(".panel-init").each((a=>{const t=Object.assign({el:a},n(a).dataset()||{});e.panel.create(t)}))},pageInit(e){const a=this;e.$el.find(".panel-init").each((e=>{const t=Object.assign({el:e},n(e).dataset()||{});a.panel.create(t)}))},pageBeforeRemove(e){const a=this;e.$el.find(".panel-init").each((e=>{const n=a.panel.get(e);n&&n.destroy&&n.destroy()}))}},vnode:{"panel-init":{insert(e){const a=e.elm,t=Object.assign({el:a},n(a).dataset()||{});this.panel.create(t)},destroy(e){const a=e.elm,n=this.panel.get(a);n&&n.destroy&&n.destroy()}}},clicks:{".panel-open":function(e,a){void 0===a&&(a={});this.panel.open(a.panel,a.animate)},".panel-close":function(e,a){void 0===a&&(a={});this.panel.close(a.panel,a.animate)},".panel-toggle":function(e,a){void 0===a&&(a={});this.panel.toggle(a.panel,a.animate)},".panel-backdrop":function(){const e=this,a=n(".panel-in:not(.panel-out)");if(!a.length)return;const t=a[0]&&a[0].f7Panel;a.trigger("panel:backdrop-click"),t&&t.emit("backdropClick",t),e.emit("panelBackdropClick",t||a[0]),e.params.panel.closeByBackdropClick&&e.panel.close()}}};if(a){if(e.prototype.modules&&e.prototype.modules[h.name])return;e.use(h),e.instance&&(e.instance.useModuleParams(h,e.instance.params),e.instance.useModule(h))}return h}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
