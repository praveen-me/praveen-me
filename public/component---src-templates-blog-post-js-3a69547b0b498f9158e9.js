(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a(181),c=a(195),l=a.n(c);var s=function(e){return r.a.createElement(l.a,{title:e.title,meta:[{name:"title",content:e.title},{name:"description",content:e.description},{property:"og:title",content:e.title},{property:"og:url",content:e.pathname?e.url+e.pathname:e.url},{property:"og:image",content:e.thumbnail&&e.thumbnail},{property:"og:image:secure_url",content:e.thumbnail&&e.thumbnail},{property:"og:description",content:e.description},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:e.title},{name:"twitter:description",content:e.description},{name:"twitter:image",content:e.thumbnail&&e.thumbnail},{property:"og:type",content:"website"},{name:"robots",content:"index, follow"},{name:"twitter:creator",content:"@am_pra_veen"},{property:"og:site_name",content:e.url}]},r.a.createElement("html",{lang:"en"}))},m=a(194);a(296);a.d(t,"query",function(){return p});t.default=function(e){var t=e.data,a=t.markdownRemark,n=t.site.siteMetadata,c=n.siteUrl,l=(n.author,Object(m.a)(a.wordCount.words));return r.a.createElement(i.a,null,r.a.createElement(o.Location,null,function(e){return r.a.createElement(s,{url:c,title:a.frontmatter.title,pathname:e.location.pathname,description:a.excerpt})}),r.a.createElement("div",{className:"content post"},r.a.createElement("h2",{className:"post__title center"}," ",a.frontmatter.title),r.a.createElement("p",{className:"post__info"},r.a.createElement("span",{className:"post__date"},new Date(a.frontmatter.date).toDateString()),"  —",r.a.createElement("span",{className:"post__time"},l," ",l>1?"minutes":"minute"," read")),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})))};var p="2892635323"},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=a(43),l=a.n(c);a.d(t,"a",function(){return l.a});a(177),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},177:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},178:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),o=a(0),i=a.n(o),c=a(5),l=a.n(c),s=a(68),m=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(s.a,r()({location:t,pageResources:a},a.json)):null};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},180:function(e,t,a){"use strict";a(99);var n=a(9),r=a.n(n),o=a(0),i=a.n(o),c=a(5),l=a.n(c),s=a(176),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],p=function(){return i.a.createElement("header",{className:"header",id:"top"},i.a.createElement("a",{href:"#top",className:"header__topbar"},'"'),i.a.createElement("div",{className:"header__content-block"},i.a.createElement("div",{className:"header__logo-sec"},i.a.createElement(s.a,{to:"/",className:"header__logo"},"JS")),i.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return i.a.createElement("div",{className:"header__social-sec",key:e.linkType},i.a.createElement("span",null," ",e.linkType," "),i.a.createElement("a",{href:e.socialLink+e.username,rel:"noopener noreferrer",target:"_blank"}," @",e.username))}))))},u=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",{className:"footer__text center"},"Made with ",i.a.createElement("span",{"aria-label":"Heart Image",role:"img",alt:"image of heart"},"❤️")," JavaScript and SASS with React and Gatsby ",i.a.createElement("span",{"aria-label":"Computer Image",role:"img",alt:"image of computer"},"💻")))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:!("/"!==this.props.location.pathname&&!this.props.location.pathname.match(/page/,"i"))})},a.render=function(){var e=this.props.children,t=this.state.isHome;return i.a.createElement("div",{className:t?"home":"show-content"},i.a.createElement(p,null),i.a.createElement("main",{className:"wrapper main"},e),i.a.createElement(u,null))},t}(i.a.PureComponent);d.propTypes={children:l.a.node.isRequired};t.a=d},181:function(e,t,a){"use strict";a(44);var n=a(0),r=a.n(n),o=a(22),i=a(180);t.a=function(e){return r.a.createElement(o.Location,null,function(t){return r.a.createElement(i.a,Object.assign({},t,e),e.children)})}},194:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return Math.ceil(e/200)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-3a69547b0b498f9158e9.js.map