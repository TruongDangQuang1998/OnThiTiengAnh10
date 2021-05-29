import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, TouchableWithoutFeedback, Platform,
  Animated
} from 'react-native';
import { Size, Colors, StylesToaster } from '../../constants/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import moment from 'moment';
import FunctionCommon from '../../utils/FunctionCommon';
import TextView from '../textView/TextView';
// import { Header } from 'react-navigation-stack';
const headerHeight = 40;
const api = {}
export const ToasterSevice = api;
const iconNameAlter = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}alert`;
const iconNameInfo = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}information-circle`;
const iconNameClose = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}close-circle`;
const iconNameAppove = `${Platform.OS === 'ios' ? 'ios-' : 'md-'}checkmark-circle`;

class ToasterModal extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      fadeDownToaster: new Animated.Value(20),
    }
  }
  componentWillMount() {
    const { modal } = this.props,
      { marginTop } = modal.position;
    if (marginTop && typeof marginTop === 'number') {
      Animated.timing(this.state.fadeDownToaster, {
        toValue: marginTop,
        duration: 130
      }).start();
    }

  }

  render() {
    const { modal, closeModal } = this.props;
    console.log()
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => closeModal(modal.id)}
        style={{
          zIndex: 4,
          position: 'absolute',
          height: Size.deviceheight,
          width: Size.deviceWidth,
        }} >
        <Animated.View
          style={[
            StylesToaster.modal,
            {
              minHeight: modal.height,
              borderColor: modal.color,
              top: modal.position.marginTop ? this.state.fadeDownToaster : null,//modal.position.marginTop,
              bottom: modal.position.marginButtom,
            }]}
          onLayout={(event) => { this.heightToaster = event.nativeEvent.layout.height; }}
        >
          <View style={{ flex: 1, flexDirection: 'column' }} >
            <View style={[StylesToaster.contentToaster]}>
              <View style={StylesToaster.left} >
                <Icon name={modal.iconName} size={35} color={modal.color} />
              </View>
              <View style={StylesToaster.center}>
                {
                  modal.isTranslate ? (<TextView style={{ color: modal.color }} i18nKey={modal.content} value={modal.content} />) :
                    (
                      <Text style={{ color: modal.color, fontSize: Size.text }}>{modal.content}</Text>
                    )
                }

              </View>
              <View style={StylesToaster.right}>
                <TouchableOpacity onPress={() => closeModal(modal.id)} style={{ flex: 1 }}>
                  <Icon name={iconNameClose} size={15} color={modal.color} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}


export default class ToasterComponent extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      Modals: [],
    }
    this.showError = this.showError.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.showWarning = this.showWarning.bind(this);
    //this.heightToaster = null;
    //this.curentMarginToaster = 0 ;
  }

  addModal = (objModal) => {
    this.setState({
      Modals: [
        {
          ...objModal,
          ...{
            isVisible: true,
            height: 50,
          }
        },
        ...this.state.Modals
      ],
    })
  }

  showError = (title, timeOut, modalPosition, isTranslate) => {
    let time = 4000;
    let translate = true;
    ((!FunctionCommon.CheckIsNullOrEmpty(isTranslate) && typeof isTranslate == 'boolean') && (translate = isTranslate));
    let position = {
      'index': 'TOP',
      'marginTop': headerHeight + 5,
      'marginButtom': null,

    };
    // let marginTop = 0;
    if (!FunctionCommon.CheckIsNullOrEmpty(modalPosition) && modalPosition == 'BUTTOM') {
      position.index = 'BUTTOM';
      position.marginTop = null;
      position.marginButtom = 22;
    }
    // if(!FunctionCommon.CheckIsNullOrEmpty(this.heightToaster) && Modals.length > 0){
    //   position.marginTop = this.curentMarginToaster + this.heightToaster + 10;
    // }
    //this.curentMarginToaster = position.marginTop; 
    (!FunctionCommon.CheckIsNullOrEmpty(timeOut) && (time = timeOut))
    const ID = moment(new Date()).format()
    this.addModal({
      id: ID,
      content: title,
      color: Colors.danger,
      position: position,
      iconName: iconNameClose,
      isTranslate: translate
    })

    setTimeout(
      () => {
        let { Modals } = this.state;
        Modals = FunctionCommon.removeObjectInArray(Modals, { id: ID }, 'id')
        this.setState({ Modals: Modals })
      }, time
    )

  }

  showWarning = (title, timeOut, modalPosition, isTranslate) => {
    let time = 4000;
    let translate = true;
    ((!FunctionCommon.CheckIsNullOrEmpty(isTranslate) && typeof isTranslate == 'boolean') && (translate = isTranslate));
    let position = {
      'index': 'TOP',
      'marginTop': headerHeight + 5,
      'marginButtom': null,

    };
    //this.curentMarginToaster = position.marginTop;
    // let marginTop = 0;
    if (!FunctionCommon.CheckIsNullOrEmpty(modalPosition) && modalPosition == 'BUTTOM') {
      position.index = 'BUTTOM';
      position.marginTop = null;
      position.marginButtom = 22;
    }
    (!FunctionCommon.CheckIsNullOrEmpty(timeOut) && (time = timeOut))
    const ID = moment(new Date()).format()
    this.addModal({
      id: ID,
      content: title,
      color: Colors.warning,
      position: position,
      iconName: iconNameAlter,
      isTranslate: translate
    })
    setTimeout(
      () => {
        let { Modals } = this.state;
        Modals = FunctionCommon.removeObjectInArray(Modals, { id: ID }, 'id')
        this.setState({ Modals: Modals })
      }, time
    )
  }

  showInfo = (title, timeOut, modalPosition, isTranslate) => {
    let time = 4000;
    let translate = true;
    ((!FunctionCommon.CheckIsNullOrEmpty(isTranslate) && typeof isTranslate == 'boolean') && (translate = isTranslate));
    let position = {
      'index': 'TOP',
      'marginTop': headerHeight + 5,
      'marginButtom': null,

    };
    //this.curentMarginToaster = position.marginTop;
    // let marginTop = 0;
    if (!FunctionCommon.CheckIsNullOrEmpty(modalPosition) && modalPosition == 'BUTTOM') {
      position.index = 'BUTTOM';
      position.marginTop = null;
      position.marginButtom = 22;
    }
    (!FunctionCommon.CheckIsNullOrEmpty(timeOut) && (time = timeOut))
    const ID = moment(new Date()).format()
    this.addModal({
      id: ID,
      content: title,
      color: Colors.info,
      position: position,
      iconName: iconNameInfo,
      isTranslate: translate
    })
    setTimeout(
      () => {
        let { Modals } = this.state;
        Modals = FunctionCommon.removeObjectInArray(Modals, { id: ID }, 'id')
        this.setState({ Modals: Modals })
      }, time
    )
  }

  showSuccess = (title, timeOut, modalPosition, isTranslate) => {
    let time = 4000;
    let translate = true;
    ((!FunctionCommon.CheckIsNullOrEmpty(isTranslate) && typeof isTranslate == 'boolean') && (translate = isTranslate));
    let position = {
      'index': 'TOP',
      'marginTop': headerHeight + 5,
      'marginButtom': null,

    };
    if (!FunctionCommon.CheckIsNullOrEmpty(modalPosition) && modalPosition == 'BUTTOM') {
      position.index = 'BUTTOM';
      position.marginTop = null;
      position.marginButtom = 22;
    }
    (!FunctionCommon.CheckIsNullOrEmpty(timeOut) && (time = timeOut));
    const ID = moment(new Date()).format();
    this.addModal({
      id: ID,
      content: title,
      color: Colors.success,
      position: position,
      iconName: iconNameAppove,
      isTranslate: translate
    })
    setTimeout(
      () => {
        let { Modals } = this.state;
        Modals = FunctionCommon.removeObjectInArray(Modals, { id: ID }, 'id')
        this.setState({ Modals: Modals })
      }, time
    )
  }

  _closeModal = (ID) => {
    let { Modals } = this.state;
    Modals = FunctionCommon.removeObjectInArray(Modals, { id: ID }, 'id')
    this.setState({ Modals: Modals })

  }

  componentDidMount() {
    api.showError = this.showError;
    api.showSuccess = this.showSuccess;
    api.showWarning = this.showWarning;
    api.showInfo = this.showInfo;
  };

  createModal(_modal) {
    return (
      // <View
      //   //animationIn = { modal.position.index == 'TOP' ? 'slideInDown' : 'slideInUp'}
      //   id={modal.id}
      //   //isVisible={modal.isVisible}
      //  // hasBackdrop={false}
      //   style={[styles.modal, 
      //     { 
      //       minHeight: modal.height, 
      //       borderColor: modal.color ,
      //       top : modal.position.marginTop,
      //       bottom :modal.position.marginButtom
      //     }]}
      //   //ref ='modal'
      //   onLayout={(event) => {  this.heightToaster = event.nativeEvent.layout.height;}}
      // >
      //   <View style={{ flex: 1, flexDirection: 'column' }} >
      //     {/* <View style={{height:(Modals.height / 100 * 20),flexDirection:'row' , justifyContent:'flex-end' }}>
      //         <Icon name={iconNameClose} size={15} color={Colors.danger} />
      //       </View> */}
      //     <View style={[styles.contentToaster]}>
      //       <View style={styles.left} >
      //         <Icon name={iconNameAlter} size={35} color={modal.color} />
      //       </View>
      //       <View style={styles.right}>
      //         <Text style={{ color: modal.color }}>{modal.content}</Text>
      //       </View>
      //     </View>

      //   </View>
      // </View>
      <ToasterModal modal={_modal} />
      // <TouchableOpacity
      //   activeOpacity={1}
      //   onPress={() => this._closeModal(modal.id)}
      //   style={{
      //     zIndex: 4,
      //     position: 'absolute',
      //     height: Size.deviceheight,
      //     width: Size.deviceWidth,
      //   }} >
      //   <Animated.View
      //     style={[
      //       StylesToaster.modal,
      //       {
      //         minHeight: modal.height,
      //         borderColor: modal.color,
      //         top: this.state.fadeDownToaster,//modal.position.marginTop,
      //         bottom: modal.position.marginButtom,
      //       }]}
      //     onLayout={(event) => { this.heightToaster = event.nativeEvent.layout.height; }}
      //   >
      //     <View style={{ flex: 1, flexDirection: 'column' }} >
      //       <View style={[StylesToaster.contentToaster]}>
      //         <View style={StylesToaster.left} >
      //           <Icon name={modal.iconName} size={35} color={modal.color} />
      //         </View>
      //         <View style={StylesToaster.center}>
      //           {
      //             modal.isTranslate ? (<TextView style={{ color: modal.color }} i18nKey={modal.content} value={modal.content} />) :
      //               (
      //                 <Text style={{ color: modal.color, fontSize: Size.text }}>{modal.content}</Text>
      //               )
      //           }

      //         </View>
      //         <View style={StylesToaster.right}>
      //           <TouchableOpacity onPress={() => this._closeModal(modal.id)} style={{ flex: 1 }}>
      //             <Icon name={iconNameClose} size={15} color={modal.color} />
      //           </TouchableOpacity>
      //         </View>
      //       </View>

      //     </View>
      //   </Animated.View>
      // </TouchableOpacity>
    );
  }

  render() {
    const { Modals } = this.state;
    console.log(Modals, 'ModalToster')
    return (
      <View style={Platform.OS == 'ios' && { zIndex: 2, }}>
        {
          Modals.length > 0 && Modals.map((_modal) => <ToasterModal modal={_modal} closeModal={this._closeModal} />)// this.createModal(modal))
        }
      </View>
    );
  }
}

