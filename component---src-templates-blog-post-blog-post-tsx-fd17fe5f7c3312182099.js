(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[534],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,u){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),u=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1300:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=a(r(7294)),l=u(r(5676)),i=u(r(9442)),c=a(r(3209)),f=r(6725),p=r(7910);t.default=function(e){var t,r,n=e.data,o=n.mdx,a=o.frontmatter.series?"Part "+(0,p.getEpisodeNumber)(o.fields.slug)+": "+o.frontmatter.title:o.frontmatter.title;return s.createElement(l.default,null,s.createElement(i.default,{title:a,description:o.frontmatter.description||o.excerpt}),s.createElement("article",{className:c.content,itemScope:!0,itemType:"http://schema.org/Article"},s.createElement("header",null,(0,p.isPostInSeries)(o.fields.slug)&&s.createElement("span",{className:c.seriesTitle},(0,p.getSeriesName)(o.frontmatter.series)),s.createElement("h1",{itemProp:"headline"},a),s.createElement("div",{className:c.meta},s.createElement("span",null,o.frontmatter.date))),s.createElement(f.MDXRenderer,{slug:o.fields.slug},o.body),s.createElement("hr",null),s.createElement("div",{className:c.footnote},"Written by ",s.createElement("span",{className:c.footnoteName},"Ondřej Nepožitek"),", who is a software developer and procedural generation enthusiast. In his free time, he usually works on ",s.createElement("a",{href:null===(t=n.site)||void 0===t||null===(r=t.siteMetadata)||void 0===r?void 0:r.edgar.assetStoreUrl,target:"_blank"},"Edgar"),", his graph-based procedural level generator.")))}},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),u=r(7316),s=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(7294),f=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=u(e,s),l=p(t),d=c.useMemo((function(){if(!r)return null;var e=i({React:c,mdx:f},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return c.createElement(d,i({},a))}},3209:function(e,t,r){"use strict";r.r(t),r.d(t,{content:function(){return n},seriesTitle:function(){return o},footnote:function(){return a},footnoteName:function(){return u},meta:function(){return s}});var n="BlogPost-module--content--0djSg",o="BlogPost-module--series-title--Vjpj-",a="BlogPost-module--footnote--bwl5-",u="BlogPost-module--footnote-name--WYmgL",s="BlogPost-module--meta--6kF0Y"}}]);
//# sourceMappingURL=component---src-templates-blog-post-blog-post-tsx-fd17fe5f7c3312182099.js.map