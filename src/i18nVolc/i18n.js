import reactI18n from '@volcengine/i18n'

const languages = ['en-US','zh-CN','ar-AR','th-TH','ko-KR','sw-KE','ja-JP','fr-FR']

reactI18n.init({
  lng: 'en-US',
  supportedLngs: languages,
  preload: languages,
  backend: {
    namespace: 39975,
    operatorId: 2100225925,
    apiKey: '290351a047a611ed9fd18180304709ab',
    projectId: 4956,
    mode:'test',
    
   
    
  },
  react: {
    useSuspense: true,
  }
})
export default reactI18n