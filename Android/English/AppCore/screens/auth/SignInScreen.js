import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import TextView from '../../components/textView/TextView';
import {AuthContext} from '../../constants/AuthContext';
import {Colors, Size, StyleSheets} from '../../constants/Styles';
import languageReducer from '../../redux/i18n';
import {AlertSevice} from '../../components/alert/Alert';
import {EnumIcon} from '../../constants/constant';
import Loading from '../../components/loading/Loading';
import axios from 'axios';
const SignInScreen = (props) => {
  const {navigation, language, setLanguage} = props;
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const inputElPass = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const {colors} = useTheme();

  const {signIn} = React.useContext(AuthContext);
  useEffect(() => {
    // if (Platform.OS == 'android') {
    //   StatusBar.setBackgroundColor(Colors.primary, true);
    // }
  }, []);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    if (data.username.length == 0 || data.password.length == 0) {
      AlertSevice.alert({
        iconType: EnumIcon.E_WARNING,
        title: 'App_Title_Notify',
        message: 'App_UserName_Password_Not_Empty',
        textRightButton: 'App_Yes',
      });
      return;
    }

    

    setIsLoading(true);
    const uri = `http://quangiuh.azurewebsites.net:80/Login?username=${userName}&password=${password}`;
    // console.log(uri, 'password');
    let config = {
      method: 'get',
      url: uri,
      headers: {},
      data: '',
    };

    axios(config)
      .then(function (response) {
        console.log(response);
        const {data} = response;
        setIsLoading(false);
        if (data && data.result === 'Success') {
          signIn(data);
        } else {
          AlertSevice.alert({
            iconType: EnumIcon.E_WARNING,
            title: 'App_Invalid_UserName',
            message: 'App_UserName_Password_Is_Incorrect',
            textRightButton: 'App_Yes',
          });
        }
      })
      .catch(function (error) {
        alert(JSON.stringify(error));
      });
  };

  const changeLang = () => {
    if (language === 'VN') {
      setLanguage('EN');
    } else {
      setLanguage('VN');
    }
  };

  const clickOutSide = () => {
    Keyboard.dismiss();
  };

  console.log(colors.primary, '');
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={clickOutSide}
      activeOpacity={1}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <SafeAreaView
        style={{flex: 1}}
        forceInset={{bottom: 'never', top: 'never'}}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
      </SafeAreaView>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <TextView
          i18nKey={'App_Username'}
          style={[
            StyleSheets.H3,
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        />
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholderTextColor="#666666"
            style={[
              StyleSheets.H3,
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            onSubmitEditing={() => inputElPass && inputElPass.current.focus()}
            returnKeyType={'next'}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color={Colors.primary} size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <TextView
          i18nKey={'App_Password'}
          style={[
            StyleSheets.H3,
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 10,
            },
          ]}
        />
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            ref={inputElPass}
            onSubmitEditing={() => {
              loginHandle(data.username, data.password);
            }}
            returnKeyType={'done'}
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              StyleSheets.H3,
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}>
            <LinearGradient
              colors={[Colors.blue_5, Colors.primary]}
              style={styles.signIn}>
              <TextView
                i18nKey={'App_Login'}
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}
              />
              <View style={styles.styViewLoading}>
                <Loading
                  isVisible={isLoading}
                  size={'small'}
                  color={Colors.white}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// export default SignInScreen;

const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (language) => {
      dispatch(languageReducer.actions.changeLanguage(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
  styViewLang: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styIconLang: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    // fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: Size.defineHalfSpace,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    position: 'relative',
  },
  styViewLoading: {
    position: 'absolute',
    right: Size.defineHalfSpace,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
