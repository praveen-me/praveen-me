---
title: "Test Markdown"
date: "2017-08-10"
---

This is a simple first markdown test file. 

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam. 

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quos culpa dicta veritatis et iure impedit explicabo commodi. Culpa perferendis mollitia rem error veniam. 

```js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 756,
          },
        },
        `gatsby-remark-prismjs`,
      ],
    },
  },
]
```