module.exports = {
  siteName: 'website',
  siteUrl: '',
  
  plugins: [
    
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {
          // remark options
        }
      }
    },
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}