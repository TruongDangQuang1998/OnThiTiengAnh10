import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Colors, StyleSheets} from '../../constants/Styles';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { container } = stylesLoading.Loading;
    let styleViewLoading = StyleSheets.containerLoading;

    if (this.props.isVisible == false) {
      return null;
    }

    // trường hợp thay đổi style view bao quanh loading
    if (this.props.style) {
      styleViewLoading = this.props.style;
    }

    return (
      <View style={styleViewLoading}>
        <ActivityIndicator
          size={this.props.size}
          color={this.props.color ? this.props.color : Colors.blue}
        />
      </View>
    );
  }
}
