// import { setLanguageCalendar } from '../../i18n/langCalendars';

export const actions = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    changeLanguage: (language) => {
        // set ngon ngu en/vi cho calendar app
        //setLanguageCalendar(language);
        return {
            type: actions.CHANGE_LANGUAGE,
            language,
        };
    },
};