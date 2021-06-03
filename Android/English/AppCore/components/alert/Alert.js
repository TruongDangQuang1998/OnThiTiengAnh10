import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  StyleSheet,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import moment from 'moment';
import FunctionCommon from '../../utils/FunctionCommon';
import {StyleSheets, Size, Colors} from '../../constants/Styles';
import TextView from '../textView/TextView';
// import TextViewInput from '../TextViewInput/TextViewInput';
import {EnumIcon} from '../../constants/constant';
import {
  IconEdit,
  IconColse,
  IconCheckCirlceo,
  IconMail,
  IconDelete,
  IconMoreHorizontal,
  IconInfo,
  IconConfirm,
  IconCancel,
  IconCheck,
  IconKey,
  IconWarning,
  IconCancelMarker,
} from '../../constants/Icons';
const heightModal = 100;
const api = {};

export const AlertSevice = api;

export default class AlertComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: null,
      keyboardSpace: 0,
      modalAlert: {
        typeInputText: 'E_TEXT',
        isInputText: false,
        isVisible: false,
        placeholder: '',
        title: '',
        message: '',
        icon: null,
        iconColor: null,
        onConfirm: null,
        onCancel: null,
        isValidInputText: false,
        showConfirm: true,
        iconType: null,
      },
      Modals: [],
    };

    //for get keyboard height
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (frames) => {
        if (!frames.endCoordinates) return;
        this.setState({keyboardSpace: frames.endCoordinates.height});
      },
    );

    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      (frames) => {
        this.setState({keyboardSpace: 0});
      },
    );

    this.heightModalLayout = 0;
    this.keyTextConfirm = 'Confirm';
    this.showAlert = this.showAlert.bind(this);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener && this.keyboardDidShowListener.remove();
    this.keyboardDidShowListener && this.keyboardDidHideListener.remove();
  }

  addModal = (objModal) => {
    this.setState({
      Modals: [
        {
          ...objModal,
          ...{
            isVisible: true,
            id: moment(new Date()).format('DD-MM-YYYY HH:mm:ss:SSS'),
          },
        },
        ...this.state.Modals,
      ],
    });
  };

  _closeModal = (ID) => {
    let {Modals} = this.state;
    const modalAlert = Modals.filter((item) => {
      return item.id == ID;
    })[0];

    Modals = FunctionCommon.removeObjectInArray(Modals, {id: ID}, 'id');
    let callbackOnCancel = null;
    modalAlert.isVisible = false;

    if (
      !FunctionCommon.CheckIsNullOrEmpty(modalAlert.onCancel) &&
      typeof modalAlert.onCancel == 'function'
    ) {
      callbackOnCancel = modalAlert.onCancel;
    }
    this.setState({Modals: Modals, inputValue: null}, () => {
      callbackOnCancel != null && callbackOnCancel();
    });
  };

  backDropOnPress = (ID) => {
    let {Modals} = this.state;
    const modalAlert = Modals.filter((item) => {
      return item.id == ID;
    })[0];

    Modals = FunctionCommon.removeObjectInArray(Modals, {id: ID}, 'id');
    let callbackOnBackDrop = null;
    modalAlert.isVisible = false;

    if (
      !FunctionCommon.CheckIsNullOrEmpty(modalAlert.onBackDrop) &&
      typeof modalAlert.onBackDrop == 'function'
    ) {
      callbackOnBackDrop = modalAlert.onBackDrop;
    }
    this.setState({Modals: Modals, inputValue: null}, () => {
      callbackOnBackDrop != null && callbackOnBackDrop();
    });
  };

  _onConfirm = (ID, isValidInputText) => {
    let {Modals, inputValue} = this.state;
    const modalAlert = Modals.filter((item) => {
      return item.id == ID;
    })[0];

    if (
      !isValidInputText ||
      (isValidInputText && !FunctionCommon.CheckIsNullOrEmpty(inputValue))
    ) {
      Modals = FunctionCommon.removeObjectInArray(Modals, {id: ID}, 'id');
    }

    let callbackOnConfirm = null;
    if (
      !FunctionCommon.CheckIsNullOrEmpty(modalAlert.onConfirm) &&
      typeof modalAlert.onConfirm == 'function'
    ) {
      callbackOnConfirm = modalAlert.onConfirm;
    }

    this.setState({Modals: Modals, inputValue: null}, () => {
      callbackOnConfirm != null && callbackOnConfirm(inputValue);
    });
  };

  autoFocusInput = () => {
    setTimeout(() => {
      if (this.refsTextInput) {
        this.refsTextInput.focus();
      }
    }, 500);
  };

  renderButtonAlert = (modal) => {
    const {
      textLeftButton,
      isValidInputText,
      textRightButton,
      id,
      showConfirm,
      showCancel,
      iconType,
    } = modal;

    let _showConfirm = showConfirm === undefined || showConfirm ? true : false,
      _showCancel = showCancel === undefined || showCancel ? true : false,
      colorConfirm = null,
      keyTextConfirm = '';

    switch (iconType) {
      case EnumIcon.E_WARNING:
        keyTextConfirm = 'App_Common_Continue';
        colorConfirm = Colors.orange;
        break;
      case EnumIcon.E_CONFIRM:
        keyTextConfirm = 'Confirm';
        colorConfirm = Colors.blue;
        break;
      case EnumIcon.E_CANCEL:
        keyTextConfirm = 'App_Common_Cancel';
        colorConfirm = Colors.red;
        break;
      case EnumIcon.E_APPROVE:
        keyTextConfirm = 'App_Common_Approve';
        colorConfirm = Colors.success;
        break;
      case EnumIcon.E_REJECT:
        keyTextConfirm = 'App_Common_Reject';
        colorConfirm = Colors.volcano;
        break;
      case EnumIcon.E_SENDMAIL:
        keyTextConfirm = 'App_Common_SendMail';
        colorConfirm = Colors.purple;
        break;
      case EnumIcon.E_DELETE:
        keyTextConfirm = 'App_Common_Delete';
        colorConfirm = Colors.red;
        break;
      case EnumIcon.E_KEY:
        keyTextConfirm = 'Confirm';
        colorConfirm = Colors.blue;
        break;
      case EnumIcon.E_INFO:
        keyTextConfirm = 'Confirm';
        colorConfirm = Colors.blue;
        break;
      case EnumIcon.E_AGREE:
        keyTextConfirm = 'E_AGREE';
        colorConfirm = Colors.blue;
        break;
      default:
        keyTextConfirm = 'App_Common_Continue';
        colorConfirm = Colors.primary;
        break;
    }

    return (
      <View style={stylesAlert.contentButton}>
        {_showCancel && (
          <TouchableOpacity
            onPress={() => {
              this._closeModal(id);
            }}
            style={[
              stylesAlert.bnt_Cancel,
              !_showConfirm && {flex: 10, borderRightWidth: 0},
            ]}>
            <TextView
              style={[StyleSheets.H5, {color: Colors.gray_8}]}
              i18nKey={
                !FunctionCommon.CheckIsNullOrEmpty(textLeftButton)
                  ? textLeftButton
                  : 'App_Common_Close'
              }
            />
          </TouchableOpacity>
        )}
        {_showConfirm && (
          <TouchableOpacity
            onPress={() => {
              this._onConfirm(id, isValidInputText);
            }}
            style={[stylesAlert.bnt_Ok]}>
            <TextView
              style={[
                StyleSheets.H3,
                stylesAlert.bnt_Ok__text,
                {color: colorConfirm},
              ]}
              i18nKey={
                !FunctionCommon.CheckIsNullOrEmpty(textRightButton)
                  ? textRightButton
                  : keyTextConfirm
              }
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  renderTitleIncon = (modal) => {
    const {title, iconType} = modal,
      iconSize = Size.iconSize1 - 2;

    let keyTextConfirm = '',
      iconView = <View />;

    switch (iconType) {
      case EnumIcon.E_WARNING:
        keyTextConfirm = 'App_Common_Continue';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconWarning size={iconSize} color={Colors.orange} />
          </View>
        );
        break;
      case EnumIcon.E_CONFIRM:
        keyTextConfirm = 'Confirm';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconConfirm size={iconSize} color={Colors.blue} />
          </View>
        );
        break;
      // case EnumIcon.E_MODIFY:
      //   this.keyTextConfirm = 'App_System_Resource_Sys_Edit';
      //   return (
      //     <View style={[stylesAlert.icon, { backgroundColor: Colors.warning }]}>
      //       <IconEdit size={iconSize} color={Colors.white} />
      //     </View>
      //   );
      case EnumIcon.E_CANCEL:
        keyTextConfirm = 'App_Common_Cancel';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconCancelMarker size={iconSize} color={Colors.red} />
          </View>
        );
        break;
      case EnumIcon.E_APPROVE:
        keyTextConfirm = 'App_Common_Approve';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconCheckCirlceo size={iconSize} color={Colors.success} />
          </View>
        );
        break;
      case EnumIcon.E_REJECT:
        keyTextConfirm = 'App_Common_Reject';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconColse size={iconSize} color={Colors.volcano} />
          </View>
        );
        break;
      case EnumIcon.E_SENDMAIL:
        keyTextConfirm = 'App_Common_SendMail';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconMail size={iconSize} color={Colors.purple} />
          </View>
        );
        break;
      case EnumIcon.E_DELETE:
        keyTextConfirm = 'App_Common_Delete';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconDelete size={iconSize} color={Colors.red} />
          </View>
        );
        break;
      case EnumIcon.E_KEY:
        keyTextConfirm = 'Confirm';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconKey size={iconSize} color={Colors.Secondary} />
          </View>
        );
        break;
      case EnumIcon.E_INFO:
        keyTextConfirm = 'Confirm';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconInfo size={iconSize} color={Colors.Secondary} />
          </View>
        );
        break;
      default:
        keyTextConfirm = 'Confirm';
        iconView = (
          <View style={stylesAlert.icon}>
            <IconInfo size={iconSize} color={Colors.Secondary} />
          </View>
        );
        break;
    }

    return (
      <View style={stylesAlert.itemTopAlert}>
        {/* {iconView} */}
        <TextView
          style={[StyleSheets.H2, stylesAlert.itemTopAlert_title__text]}
          i18nKey={title ? title : keyTextConfirm}
        />
      </View>
    );
  };

  showAlert = (object) => {
    this.addModal(object);
  };

  componentDidMount() {
    api.alert = this.showAlert;
  }

  // componentDidUpdate(){
  //   this.autoFocusInput();
  // }

  createModal(modal) {
    const {keyboardSpace, inputValue} = this.state,
      {
        isVisible,
        title,
        message,
        isValidInputText,
        id,
        isInputText,
        typeInputText,
        placeholder,
        showConfirm,
        iconType,
        autoFocus,
      } = modal,
      marginTopModal =
        Size.deviceheight / 2 - heightModal / 2 - (isInputText ? 71 : 50),
      marginTopAfterKeyboardShow =
        Size.deviceheight -
        keyboardSpace -
        this.heightModalLayout -
        (isInputText ? 71 : 50);

    if (autoFocus && autoFocus === true) {
      this.autoFocusInput();
    }

    return (
      <Modal
        animationIn="fadeIn"
        animationOut="fadeOut"
        key={id}
        isVisible={isVisible}
        onBackdropPress={() => this.backDropOnPress(id)}
        style={[
          stylesAlert.modal,
          {
            minHeight: heightModal,
            //height: 'auto',
            top:
              keyboardSpace && marginTopAfterKeyboardShow < marginTopModal
                ? marginTopAfterKeyboardShow
                : marginTopModal,
          },
        ]}>
        <View
          style={{flex: 1, flexDirection: 'column'}}
          onLayout={(event) => {
            this.heightModalLayout = event.nativeEvent.layout.height;
          }}>
          <View style={[stylesAlert.contentToaster]}>
            <View style={stylesAlert.topAlert}>
              {this.renderTitleIncon(modal)}
              {message && (
                <View style={stylesAlert.itemTopAlert}>
                  <TextView
                    i18nKey={message}
                    style={[
                      StyleSheets.H5,
                      stylesAlert.itemTopAlert_message__text,
                    ]}
                  />
                </View>
              )}

              {isInputText && (
                <View style={[stylesAlert.itemTopAlert]}>
                  <TextInput
                    ref={(ref) => (this.refsTextInput = ref)}
                    style={[
                      StyleSheets.H5,
                      stylesAlert.itemTopAlert_input,

                      typeInputText == 'E_PASSWORD' && {paddingVertical: 8},
                    ]}
                    // autoFocus={typeInputText == 'E_PASSWORD'}
                    secureTextEntry={
                      typeInputText == 'E_PASSWORD' ? true : false
                    }
                    onSubmitEditing={() =>
                      this._onConfirm(id, isValidInputText)
                    }
                    returnKeyType={'done'}
                    placeholder={placeholder}
                    onChangeText={(text) => this.setState({inputValue: text})}
                    value={inputValue}
                    multiline={typeInputText == 'E_PASSWORD' ? false : true}
                    numberOfLines={2}
                    autoCapitalize={'none'}
                  />
                </View>
              )}
            </View>
            <View style={stylesAlert.buttomAlert}>
              {this.renderButtonAlert(modal)}
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    const {Modals} = this.state;
    return (
      <View style={{zIndex: 2}}>
        {Modals.map((modal) => this.createModal(modal))}
      </View>
    );
  }
}

const stylesAlert = StyleSheet.create({
  modal: {
    backgroundColor: Colors.white,
    position: 'absolute',
    maxWidth: 400,
    width: Size.deviceWidth * 0.8,
    marginHorizontal:
      Size.deviceWidth * 0.8 >= 400
        ? (Size.deviceWidth - 400) / 2
        : (Size.deviceWidth - Size.deviceWidth * 0.8) / 2,
    borderRadius: 8,
    borderColor: Colors.gray_5,
    borderWidth: 0.5,
  },
  contentButton: {
    flex: 1,
    flexDirection: 'row',
    // paddingVertical: StyleSheets.p_10,
  },
  contentToaster: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',

    // paddingVertical: 14
    // paddingTop: 55,
  },
  viewIcon: {
    width: '100%',
    height: '50%',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -20,
  },
  topAlert: {
    width: '100%',
    minHeight: '30%',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: Size.defineSpace,
    // paddingTop: 5,k
    paddingTop: 18,
    paddingBottom: 10,
  },
  itemTopAlert: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    flexDirection: 'row',
  },
  buttomAlert: {
    // width: '100%',
    // height: '20%',
    flex: 1,
    justifyContent: 'center',
    borderTopColor: Colors.gray_5,
    borderTopWidth: 0.5,
    paddingVertical: 3,
    // paddingHorizontal: StyleSheets.p_10,
  },
  bnt_Cancel: {
    minHeight: 44,
    // backgroundColor: Colors.borderColor,
    // borderRadius: StyleSheets.radius_5,
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: Colors.gray_5,
    borderRightWidth: 0.5,
  },

  bnt_Ok: {
    minHeight: 44,
    // backgroundColor: Colors.primary,
    // borderRadius: StyleSheets.radius_5,
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: StyleSheets.m_10,
  },
  bnt_Ok__text: {
    fontWeight: '600',
    fontSize: Size.H5 + 2,
  },
  iconParentCiricle: {
    backgroundColor: Colors.white,
    maxWidth: 100,
    maxHeight: 100,
    height: Size.deviceWidth * 0.22,
    width: Size.deviceWidth * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:
      Size.deviceWidth * 0.22 > 100 ? 50 : (Size.deviceWidth * 0.22) / 2,
    // borderColor : Colors.white,
    // borderWidth : 7,
    padding: 10,
  },
  itemTopAlert_title__text: {
    paddingRight: 11,
    fontSize: Size.H2,
    fontWeight: '600',
  },
  itemTopAlert_message__text: {
    textAlign: 'center',
    fontSize: Size.H3,
    color: Colors.gray_8,
  },
  itemTopAlert_input: {
    width: '100%',
    height: 44,
    fontSize: Size.H5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderWidth: 1,
    borderColor: Colors.gray_5,
    borderRadius: 8,
  },
  icon: {
    paddingRight: 11,
  },
});
