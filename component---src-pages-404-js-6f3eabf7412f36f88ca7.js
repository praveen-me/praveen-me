(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(170),o=a(164);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(38),s=a.n(c);a.d(t,"a",function(){return s.a});a(160),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},160:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),c=a(4),s=a.n(c),l=a(57),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},163:function(e,t,a){"use strict";a(79);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(4),s=a.n(c),l=a(159),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],u=function(){return o.a.createElement("header",{className:"header",id:"top"},o.a.createElement("a",{href:"#top",className:"header__topbar"}),o.a.createElement("div",{className:"header__content-block"},o.a.createElement("div",{className:"header__logo-sec"},o.a.createElement(l.a,{to:"/",className:"header__logo"},"JS")),o.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return o.a.createElement("div",{className:"header__social-sec",key:e.linkType},o.a.createElement("span",null," ",e.linkType," "),o.a.createElement("a",{href:e.socialLink+e.username,rel:"noopener noreferrer",target:"_blank"}," @",e.username))}))))},p=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__text center"},"Made with ",o.a.createElement("span",{role:"img",alt:"image of heart"},"❤️")," JavaScript and SASS with React and Gatsby ",o.a.createElement("span",{role:"img",alt:"image of computer"},"💻")))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:!("/"!==this.props.location.pathname&&!this.props.location.pathname.match(/page/,"i"))})},a.render=function(){var e=this.props.children,t=this.state.isHome;return o.a.createElement("div",{className:t?"home":"show-content"},o.a.createElement(u,null),o.a.createElement("main",{className:"wrapper main"},e),o.a.createElement(p,null))},t}(o.a.PureComponent);d.propTypes={children:s.a.node.isRequired};t.a=d},164:function(e,t,a){"use strict";a(39);var n=a(0),r=a.n(n),i=a(16),o=a(163);t.a=function(e){return r.a.createElement(i.Location,null,function(t){return r.a.createElement(o.a,Object.assign({},t,e),e.children)})}},170:function(e,t,a){"use strict";var n=a(171),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(178),l=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,m=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Nerd/ JavaScript Lover/ React Developer",author:"am_pra_veen"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6f3eabf7412f36f88ca7.js.map