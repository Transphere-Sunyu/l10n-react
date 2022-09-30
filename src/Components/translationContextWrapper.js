import { useTranslation } from "@volcengine/i18n"
import TranslationContext from "../Contexts/translationContext"

function TranslationContextWrapper({children}) {
    const {t  , i18n} = useTranslation() 

    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
        .then(res =>{
          console.log(res);
          console.log(i18n);
        })
        .catch(err =>{
          console.log(err);
        })
        
      }
    
      const languageList =  (i18nObj) => {
        return Object.keys(i18nObj.services.resourceStore.data);
    }

const values = {
    t, i18n , languageList ,changeLang
}
    
    return (
        <TranslationContext.Provider value={values}>
            {children}

        </TranslationContext.Provider>
    )

}

export default TranslationContextWrapper