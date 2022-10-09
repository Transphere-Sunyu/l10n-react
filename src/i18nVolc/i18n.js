import reactI18n from '@volcengine/i18n'

const languages = ['en-US','zh-CN','ar-AR','th-TH','ko-KR','sw-KE','ja-JP','fr-FR']

reactI18n.init({
  lng: 'en-US',
  supportedLngs: languages,
  preload: languages,
  backend: {
    namespace: 39972,
    operatorId: 2100225925,
    apiKey: '244e3e503e4011edadfba30104a746d8',
    projectId: 4945,
    mode:'test',
    
   
    
  },
  react: {
    useSuspense: true,
  }
})
export default reactI18n