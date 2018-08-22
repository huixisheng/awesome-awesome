module.exports = {
  title: 'awesome',
  base: '/awesome-awesome/',
  markdown: {
    // https://www.npmjs.com/package/markdown-it-linkify-images
    lineNumbers: true,
    config: md => {
      // /Users/huixisheng/.config/yarn/global/node_modules/markdown-it/lib/rules_core/linkify.js
      // Skip content of html tag links
      // md.options.linkify = true;
      // md.configure({
      //   options: {
      //     linkify: true,
      //   }
      // });
      // md.set({
      //   options: {
      //     linkify: true,
      //   },
      //   linkify: true,
      // });
      // // https://github.com/markdown-it/markdown-it/issues/367
      // md.enable('linkify');
      // md.linkify(md);
      // console.log(md);
    }
  },
  themeConfig: {
    nav: [
      { text: '常用手册', link: '/manual' },
      {
        text: '资源',
        items: [
          { text: 'submodule说明', link: '/docs/git/submodule' },
          { text: '在线ppt平台', link: '/slide-ppt' },
          { text: 'vue-admin后台模板', link: '/vue-admin' },
        ]
      }
    ],
    sidebar: {
      '/awesome/emijrp-awesome-awesome/': [
        '',
      ],
      '/docs/git/': genSidebarGitConfig('git操作'),
      '/fe/vuejs-awesome-vue/': [''],
    },
    // sidebar: true,
    // sidebar: [
    //   '/',
    //   '/fe/vuejs-awesome-vue',
    //   ['/page-b', 'Explicit link text']
    // ],
    search: true,
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 10,
    repo: 'huixisheng/awesome-awesome',
    repoLabel: '查看源码',
    docsRepo: 'huixisheng/awesome-awesome',
    docsDir: '',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
  }
}

function genSidebarGitConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'subtree',
        'submodule',
      ]
    }
  ]
}