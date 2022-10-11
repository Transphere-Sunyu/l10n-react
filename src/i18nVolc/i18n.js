import reactI18n from '@volcengine/i18n'

const languages = ['en-US','zh-CN']
reactI18n.init({
  lng: 'en-US',
  supportedLngs: languages,
  preload: languages,
  backend: {
    namespace: 39975,
    operatorId: 2100225925,
    apiKey: 'f9a2b06047a811eda330c5849252e15e',
    projectId: 4956,
    
   
    
  },
  react: {
    useSuspense: true,
  }
})
export default reactI18n