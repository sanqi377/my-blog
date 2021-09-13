module.exports = {
  title: 'Im\'s Sanqi',
  description: '坚持是对平庸最好的打击！',
  port: 8088,
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    plugins: {
      'markdown-it-mark': true,
      'markdown-it-footnote': true,
      'markdown-it-abbr': true,
      'markdown-it-task-lists': true
    }
  },
  theme: require.resolve('../../index'), // 使用本地主题
  themeConfig: require('./config/themeConfig')
}