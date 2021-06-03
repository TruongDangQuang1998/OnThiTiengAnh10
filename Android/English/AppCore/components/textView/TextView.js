import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../i18n/I18n';
import { StyleSheets } from '../../constants/Styles';
import FunctionCommon from '../../utils/FunctionCommon';

class TextView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            i18n: I18n
        };
    }

    UNSAFE_componentWillMount() {
        const { language } = this.props;
        if (language) this.setMainLocaleLanguage(language);
    }

    UNSAFE_componentWillReceiveProps = nextProps => {
        const { language } = nextProps;
        if (language) this.setMainLocaleLanguage(language);
    }

    setMainLocaleLanguage = (language) => {
        let { i18n } = this.state;
        i18n.locale = language;
        this.setState({ i18n });
    }

    translate = () => {
        const { i18nKey, value, uppercase } = this.props;
        const { i18n } = this.state;

        if (!FunctionCommon.CheckIsNullOrEmpty(i18nKey)) {
            if ((i18n.t(i18nKey)).indexOf('[missing') == 0) {
                return i18nKey
            }
            return i18n.t(i18nKey)
        }
        else {
            return value
        }
    }

    render() {
        const { style } = this.props;
        return (
            <Text style={[StyleSheets.H5, style]} {...this.props} >
                {
                    this.translate()
                }
            </Text>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.languageReducer.language
    };
};

export default connect(mapStateToProps, null)(TextView);
