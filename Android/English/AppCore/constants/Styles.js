// https://www.npmjs.com/package/color
// https://github.com/Mottie/javascript-number-formatter
import Color from 'color';
import {Dimensions, StyleSheet, Text, PixelRatio, Platform} from 'react-native';
// import { Header } from 'react-navigation-stack';

const {height, width} = Dimensions.get('window');
// width = 320;

const scale = width / 320;
export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    const size = Math.round(newSize);
    if (width > 700 && size >= 20) {
      return 20;
    }
    if (size >= 17) {
      return 17;
    } else {
      return size;
    }
  } else {
    const size = Math.round(newSize) - 2;
    if (width > 700 && size >= 20) {
      return 20;
    }
    if (size >= 17) {
      return 17;
    } else {
      return size;
    }
  }
};

const primaryColor = '#0971DC';
export const Colors = {
  black: '#000',
  blackTheme1: '#333333',
  primary: primaryColor,
  primary5: '#c1f3e6',
  primary1: '#5edfbe',
  white: '#ffff',
  indigo: '#3f51b5',
  BahamaBlue: '#23527c',
  accent: '#039be5',
  lightAccent: '#b3e5fc',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffa701',
  info: '#17a2b8',
  verdurous: '#56ca09',

  whileOpacity80: Color.rgb(255, 255, 255, 0.95),
  whiteOpacity70: Color.rgb(255, 255, 255, 0.7),
  whiteOpacity60: Color.rgb(255, 255, 255, 0.6),
  whiteOpacity30: Color.rgb(255, 255, 255, 0.3),
  whiteOpacity40: Color.rgb(255, 255, 255, 0.4),

  navy: '#3c4252',
  navy_7: '#354FBF',
  navy_6: '#4F67CE',
  navy_5: '#6F83D7',
  navy_3: '#AFBAE9',

  green_1: '#DCF8CD',
  green_4: '#B7EB8F',
  green_3: '#BBF2A0',
  green_5: '#9BEC73',
  green_6: '#8BE95D',
  green: '#52C41A',

  yellow_1: '#FEF7C8',
  yellow_5: '#FCEA78',
  yellow: '#FADE28',

  orange_1: '#FEE4C8',
  orange_3: '#FDD0A0',
  orange_5: '#FCBC78',
  orange_6: '#FCB364',
  orange: '#FA8C16',

  volcano_1: '#FEDDD2',
  volcano_3: '#FDBFAA',
  volcano_5: '#FC9A78',
  volcano_6: '#FC8A64',
  volcano: '#FA541C',

  red_1: '#FDD3D5',
  red_3: '#FBACB0',
  red_5: '#F9858B',
  red_6: '#F97279',
  red: '#F5222D',

  blue: '#0971DC',
  blue_1: '#CEE5FD',
  blue_3: '#9DCBFB',
  blue_5: '#6CB1F9',
  blue_6: '#54A5F8',
  blue_7: '#3B98F7',
  blue_transparent_8: Color.rgb(9, 113, 220, 0.08),

  neutralGreen_1: '#E6F9F3',
  neutralGreen_3: '#B4ECDC',
  neutralGreen_5: '#81DFC4',
  neutralGreen_6: '#68D9B9',
  neutralGreen: '#04BF8A',

  purple_1: '#F1EAFA',
  purple_3: '#D5C0F1',
  purple_5: '#B896E8',
  purple_6: '#AA82E3',
  purple: '#722ED1',

  gray_1: '#FFFFFF',
  gray_2: '#fafafa',
  gray_2: '#fafafa',
  gray_3: '#f5f5f5',
  gray_4: '#F0F0F0',
  gray_5: '#D9D9D9',
  gray_7: '#8C8C8C',
  gray_8: '#595959',
  gray_9: '#434343',
  gray_10: '#262626',
};

export const Size = {
  iconSize2: normalize(13) + 6,
  iconSize1: normalize(13) + 10,
  heightInput: 50,
  heightButton: 40,
  H5: normalize(12),
  H4: normalize(12.5),
  H3: normalize(14),

  H2: normalize(13) + 3,
  H1: normalize(13) + 5,
  deviceWidth: width,
  deviceheight: height,
  // headerHeight: Header.HEIGHT,
  defineSpace: 16,
  defineHalfSpace: 10,
};

export const StyleSheets = StyleSheet.create({
  H5: {
    fontSize: Size.H5,
    color: Colors.gray_10,
  },
  H4: {
    fontSize: Size.H4,
    color: Colors.gray_10,
    fontWeight: '400',
  },
  H3: {
    fontSize: Size.H3,
    color: Colors.gray_10,
    fontWeight: '500',
  },
  H2: {
    fontSize: Size.H2,
    color: Colors.gray_10,
    fontWeight: '500',
  },
  H1: {
    fontSize: Size.H1,
    color: Colors.gray_10,
    fontWeight: '600',
  },
  radius_5: 5,
  radius_30: 30,
  radius_10: 10,
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
});

export const styleSafeAreaView = {
  style: {flex: 1, backgroundColor: Colors.white},
  forceInset: {top: 'never', bottom: 'always'},
};

export const StylesToaster = StyleSheet.create({
  modal: {
    backgroundColor: Colors.white,
    position: 'absolute',
    width: Size.deviceWidth - Size.defineSpace * 2,
    marginHorizontal: Size.defineSpace,
    borderColor: Colors.danger,
    borderWidth: 1,
    paddingVertical: 0,
    borderRadius: StyleSheets.radius_5,
  },
  contentToaster: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  left: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 8.5,
    justifyContent: 'center',
    paddingVertical: Size.defineHalfSpace,
  },
  right: {
    flex: 0.5,
    alignItems: 'center',
  },
});
