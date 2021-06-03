import React from 'react';
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { connect } from 'react-redux';
import networkReducer from '../../redux/network';
import { Colors, StyleSheets } from '../../constants/Styles';
import TextView from '../textView/TextView';
import { EnumIcon } from '../../constants/constant';
import { AlertSevice } from '../alert/Alert';
// import { SafeAreaView } from 'react-navigation';
const TYPE = {
  NONE: 'none',
  UNKNOWN: 'unknown',
  wifi: 'wifi'
};

class NetworkProvider extends React.Component {

  unsubscribe = null;
  constructor(props) {
    super(props);
  }


  componentDidMount() {

    //this.requestLocationPermission();
    requestAnimationFrame(async () => {
      const { type } = await NetInfo.fetch();

      if (type === TYPE.NONE || type === TYPE.UNKNOWN) {
        this.props.setIsConnected(false);
      }
      // if (type != TYPE.wifi) {
      //   this.props.setIsConnected(false);
      // }
    });

    this.unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      NetInfo.fetch()
        .then(res => {
          this.props.setInfoNetwork({ isConnected: isConnected, detailsNetwork: res.details });
        })
    });



  }

  UNSAFE_componentWillMount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    if (this.props.isConnected) {
      return null;
    }
    const { container, textStyle } = styles;
    return (
      // <SafeAreaView forceInset={{ top: 'never', bottom: 'always' }}>
      <View style={container}>
        <TextView i18nKey={'no-connect-internet'} style={[textStyle]}></TextView>
      </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    paddingVertical: 5,
  },
  textStyle: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '500'
  }
});

const mapStateToProps = state => {
  return {
    isConnected: state.network.isConnected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsConnected: isConnected => {
      dispatch(networkReducer.actions.setIsConnected(isConnected))
    },
    setInfoNetwork: (data) => {
      dispatch(networkReducer.actions.setInfoNetwork(data))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkProvider);