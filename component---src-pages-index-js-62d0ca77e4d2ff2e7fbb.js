(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(170),o=(a(154),a(166)),s=a(277),l=a(159),c=function(){var e=s.data.site;return r.a.createElement("div",{className:"main__sec"},r.a.createElement("h3",{className:"main__author-subhead center"},"Hi there! I'm"),r.a.createElement("h1",{className:"main__author-head center"},e.siteMetadata.title),r.a.createElement("p",{className:"main__author-experct"},"I am a life long learner and currently working as a React Developer at ",r.a.createElement("a",{href:"https://rtcamp.com"},"rtCamp")," . Most of the time I totally evolved in JavaScript stuff like React, Redux, Node, Express, etc.",r.a.createElement("br",null),r.a.createElement(l.a,{to:"/about",className:"main__content-link"},"read more...")))},m=a(186),u=a(201);a.d(t,"query",function(){return d});var d="2573790441";t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["gatsby","application","react","portfolio","personal website","blog"]}),r.a.createElement("div",{className:"main__content"},r.a.createElement(c,null),r.a.createElement(u.a,{posts:t.allMarkdownRemark}),r.a.createElement(m.a,null)))}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(38),l=a.n(s);a.d(t,"a",function(){return l.a});a(160),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},160:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(4),l=a.n(s),c=a(57),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?o.a.createElement(c.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},163:function(e,t,a){"use strict";a(79);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(4),l=a.n(s),c=a(159),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],u=function(){return o.a.createElement("header",{className:"header",id:"top"},o.a.createElement("a",{href:"#top",className:"header__topbar"}),o.a.createElement("div",{className:"header__content-block"},o.a.createElement("div",{className:"header__logo-sec"},o.a.createElement(c.a,{to:"/",className:"header__logo"},"JS")),o.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return o.a.createElement("div",{className:"header__social-sec",key:e.linkType},o.a.createElement("span",null," ",e.linkType," "),o.a.createElement("a",{href:e.socialLink+e.username,rel:"noopener noreferrer",target:"_blank"}," @",e.username))}))))},d=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__text center"},"Made with ",o.a.createElement("span",{role:"img"},"❤️")," JavaScript and SASS with React and Gatsby ",o.a.createElement("span",{role:"img"},"💻")))},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:!("/"!==this.props.location.pathname&&!this.props.location.pathname.match(/page/,"i"))})},a.render=function(){var e=this.props.children,t=this.state.isHome;return o.a.createElement("div",{className:t?"home":"show-content"},o.a.createElement(u,null),o.a.createElement("main",{className:"wrapper main"},e),o.a.createElement(d,null))},t}(o.a.PureComponent);p.propTypes={children:l.a.node.isRequired};t.a=p},166:function(e,t,a){"use strict";a(39);var n=a(0),r=a.n(n),i=a(16),o=a(163);t.a=function(e){return r.a.createElement(i.Location,null,function(t){return r.a.createElement(o.a,Object.assign({},t,e),e.children)})}},170:function(e,t,a){"use strict";var n=a(171),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(178),c=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,m=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Nerd/ JavaScript Lover/ React Developer",author:"am_pra_veen"}}}}},177:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=function(e){return Math.ceil(e/200)}},186:function(e,t,a){"use strict";var n=a(187),r=a(0),i=a.n(r),o=a(159);t.a=function(){for(var e=n.data.allMarkdownRemark,t=Math.ceil(e.edges.length/5),a=[],r=1;r<=t;r++)a.push(r);return i.a.createElement("div",{className:"pagination center"},a.map(function(e,t){return i.a.createElement(o.a,{to:1===e?"/":"/page/"+(t+1),className:"pagination__link",key:e},t+1)}))}},187:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/posts/implementing-simple-spa-routing-using-vanilla-javascript/"},frontmatter:{title:"Implementing Simple SPA Routing Using Vanilla JavaScript"}}},{node:{fields:{slug:"/posts/7-5-2018-how-udacity-gave-confidence-to-me/"},frontmatter:{title:"How Uadcity gave more confidence to me?"}}},{node:{fields:{slug:"/posts/javascript-classes-lets-know-behind-the-scenes/"},frontmatter:{title:"JavaScript Classes: Let’s Know Behind the Scenes"}}},{node:{fields:{slug:"/posts/jwt-json-web-token-implementation-with-node/"},frontmatter:{title:"JWT(JSON Web Token) : Implementation with Node"}}},{node:{fields:{slug:"/posts/do-static-routing-with-node/"},frontmatter:{title:"Do Static Routing with Node"}}},{node:{fields:{slug:"/posts/make-a-todo-list-using-react-hooks/"},frontmatter:{title:"Make a Todo List Using React Hooks!!"}}},{node:{fields:{slug:"/posts/scope-local-global-and-lexical/"},frontmatter:{title:"Scope: Local, Global and Lexical"}}},{node:{fields:{slug:"/posts/redux-thunk-a-simple-action-creator-nothing-more/"},frontmatter:{title:"Redux Thunk: A Simple Action Creator Nothing More"}}}]}}}},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(159),o=a(177),s=function(e){var t=e.slug,a=e.date,n=e.words,s=e.title,l=e.excerpt,c=e.large,m=Object(o.a)(n);return r.a.createElement(i.a,{to:t,className:"posts__single "+(c?"large":"")},r.a.createElement("p",{className:"posts__date-and-time"},new Date(a).toDateString()," - ",m," ",m>1?"mins":"min"," read"),r.a.createElement("h2",{className:"posts__title"},s),r.a.createElement("p",{className:"posts__excerpt"},l))};t.a=function(e){var t=e.posts,a=t.edges[0].node,n=t.edges.slice(1);return r.a.createElement("div",{className:"posts__wrapper"},r.a.createElement(s,{slug:a.fields.slug,date:a.frontmatter.date,words:a.wordCount.words,title:a.frontmatter.title,excerpt:a.excerpt,key:a.fields.slug,large:!0}),r.a.createElement("div",{className:"posts"},n.map(function(e){var t=e.node,a=t.fields,n=t.wordCount,i=t.excerpt,o=t.frontmatter;return r.a.createElement(s,{slug:a.slug,date:o.date,words:n.words,title:o.title,excerpt:i,key:a.slug})})))}},277:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-62d0ca77e4d2ff2e7fbb.js.map