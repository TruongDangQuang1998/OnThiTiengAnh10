import I18n from './I18n';
export const Translate = (key) => {

    console.log((I18n.t(key)).indexOf('[missing') == 0, key)
    if (!key) {
        if ((I18n.t(key)).indexOf('[missing') == 0) {
            return key
        }
        return I18n.t(key)
    }

}