module.exports = {
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: '搜索', link: 'https://google.com' },
    ],
    sidebar: {
      '/awesome/emijrp-awesome-awesome/': [
        '',
      ],
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