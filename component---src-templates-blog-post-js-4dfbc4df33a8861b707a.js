(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+s+l+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,l=d.default.createElement(z,(0,o.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,n(r),l):l})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:I?1:0,transition:x?"opacity "+b+"ms":"none"},l),V="boolean"==typeof v?"lightgray":v,T={transitionDelay:b+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},x&&T,{},l,{},f),P={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:E};if(p){var _=p,q=g(p);return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),V&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&T)}),q.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:P,imageVariants:_,generateSources:k}),q.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:P,imageVariants:_,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(_),d.default.createElement(z,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:_}))}}))}if(h){var W=h,M=g(h),F=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},x&&T)}),M.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:P,imageVariants:W,generateSources:k}),M.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:P,imageVariants:W,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(z,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:W}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:C,sizes:V,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=x;t.default=T},Bl7J:function(e,t,a){"use strict";var r=a("IRj2"),n=a("q1tI"),i=a.n(n),s=a("Tgqd"),l=a("Wbzz"),o=a("ma3e"),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"outer-container"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"main-title",style:{margin:0}},i.a.createElement(l.Link,{to:"/"},t)),i.a.createElement("div",{className:"section"},i.a.createElement("h1",null,i.a.createElement(l.Link,{to:"/",className:"home-link"},i.a.createElement(o.e,null))),i.a.createElement("h1",{className:"resume-link"},i.a.createElement(l.Link,{to:"/resume/"},i.a.createElement(o.h,null)),i.a.createElement("div",{className:"link-title"},i.a.createElement(l.Link,{to:"/resume/"},"Resume"))),i.a.createElement("h1",null,i.a.createElement(l.Link,{to:"/volunteering/"},i.a.createElement(o.i,null)),i.a.createElement("div",{className:"link-title"},i.a.createElement(l.Link,{to:"/volunteering/"},"Volunteering"))),i.a.createElement("h1",null,i.a.createElement(l.Link,{to:"/projects/"},i.a.createElement(o.c,null)),i.a.createElement("div",{className:"link-title"},i.a.createElement(l.Link,{to:"/projects/"},"Projects"))),i.a.createElement("h1",null,i.a.createElement(l.Link,{to:"/blog/"},i.a.createElement(o.g,null)),i.a.createElement("div",{className:"link-title blog"},i.a.createElement(l.Link,{to:"/blog/"},"Blog")))))))};d.defaultProps={siteTitle:""};var c=d;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{className:"footer"},"Behind every successful woman is a substantial amount of boba ",i.a.createElement(s.a,null))))}},EK0E:function(e,t,a){"use strict";var r,n=a("dyZX"),i=a("CkkT")(0),s=a("KroJ"),l=a("Z6vF"),o=a("czNK"),d=a("ZD67"),c=a("0/R4"),u=a("s5qY"),f=a("s5qY"),m=!n.ActiveXObject&&"ActiveXObject"in n,g=l.getWeak,p=Object.isExtensible,h=d.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(c(e)){var t=g(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",v,b,d,!0,!0);f&&m&&(o((r=d.getConstructor(v,"WeakMap")).prototype,b),l.NEED=!0,i(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,n){if(c(t)&&!p(t)){this._f||(this._f=new r);var i=this._f[e](t,n);return"set"==e?this:i}return a.call(this,t,n)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Smol Girl, Big World"}}}}')},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var r=a("q1tI"),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&(a[r[n]]=e[r[n]])}return a};function o(e){return function(t){return r.createElement(d,s({attr:s({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.createElement(t.tag,s({key:a},t.attr),e(t.child))}))}(e.child))}}function d(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var i=e.attr,o=e.title,d=l(e,["attr","title"]);return r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,d,{className:a,style:s({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(n)}},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),n=a("Z6vF").getWeak,i=a("y3w9"),s=a("0/R4"),l=a("9gX7"),o=a("SlkY"),d=a("CkkT"),c=a("aagx"),u=a("s5qY"),f=d(5),m=d(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,i){var d=e((function(e,r){l(e,d,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&o(r,a,e[i],e)}));return r(d.prototype,{delete:function(e){if(!s(e))return!1;var a=n(e);return!0===a?p(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=n(e);return!0===a?p(u(this,t)).has(e):a&&c(a,this._i)}}),d},def:function(e,t,a){var r=n(i(t),!0);return!0===r?p(e).set(t,a):r[e._i]=a,e},ufstore:p}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));var r=a("q1tI"),n=a.n(r),i=(a("Wbzz"),a("9eSz")),s=a.n(i),l=a("Bl7J");t.default=function(e){var t=e.data.markdownRemark;return n.a.createElement(l.a,null,n.a.createElement("div",{className:"page-container"},n.a.createElement("h1",{className:"blog"},t.frontmatter.title),n.a.createElement("div",{className:"blog-date"},t.frontmatter.date),null===t.frontmatter.featuredImage?" ":n.a.createElement(s.a,{sizes:t.frontmatter.featuredImage.childImageSharp.sizes}),n.a.createElement("div",{className:"blog-content",dangerouslySetInnerHTML:{__html:t.html}})))};var o="1867074486"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4dfbc4df33a8861b707a.js.map