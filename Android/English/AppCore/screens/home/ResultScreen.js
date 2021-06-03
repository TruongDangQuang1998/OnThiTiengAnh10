import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Size, Colors, FONTS, StyleSheets} from '../../constants/Styles';
import {connect} from 'react-redux';
import {Rating} from 'react-native-ratings';
import NavigationServices from '../../utils/NavigationServices';

const ResultScreen = (props) => {
  // Dummy Datas
  const {colors} = useTheme();

  const renderItem = () => {
    const {data, dataForReStart, timeUp} = props.route.params;
    const answerSuccess = data.correctAnswerNo;
    return (
      <View style={styles.styContain}>
        {/* Image */}
        <View style={styles.styViewbox}>
          <View style={styles.styViewInfo}>
            <Text style={{...StyleSheets.H1, color: colors.text, fontSize: 30}}>
              {data.name}
            </Text>
          </View>
        </View>

        <View style={styles.styViewAddress}>
          <Text style={[StyleSheets.H3, styles.styTextTime]}>
            {`Đúng ${answerSuccess}/40 câu`}
          </Text>
          <Rating
            readonly={true}
            ratingCount={5}
            size={13}
            startingValue={(((answerSuccess * 100) / 40) * 5) / 100}
          />
        </View>

        <View style={styles.stylistButton}>
          <TouchableOpacity
            style={[
              styles.styViewSubmit,
              {
                backgroundColor: Colors.orange,
              },
            ]}
            onPress={() => {
              NavigationServices.navigate('DetailScreen', {
                isReview: true,
                dataItem: data,
                dataForReStart: dataForReStart,
              });
            }}>
            <Text style={styles.stySubmitText}>Xem lại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.styViewSubmit}
            onPress={() => {
              NavigationServices.navigate('HomeScreen');
            }}>
            <Text style={styles.stySubmitText}>Trang chủ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
      }}>
      {renderItem()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styHeadersLeft: {
    width: 50,
    paddingLeft: Size.defineHalfSpace * 2,
    justifyContent: 'center',
  },
  styHeadersRight: {
    width: 50,
    paddingRight: Size.defineHalfSpace * 2,
    justifyContent: 'center',
  },
  styHeaders: {
    flexDirection: 'row',
    paddingVertical: Size.defineSpace,
    paddingHorizontal: Size.defineSpace,
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  styContain: {
    flex: 1,
    marginBottom: Size.defineHalfSpace,
    borderRadius: StyleSheets.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styViewbox: {
    borderRadius: StyleSheets.radius_10,
    flexDirection: 'row',
  },
  stylistButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Size.deviceWidth,
    paddingHorizontal: Size.defineSpace + 7,
    marginTop: Size.defineSpace + 7,
  },
  styImages: {
    width: Size.deviceWidth * 0.27,
    height: Size.deviceWidth * 0.27,
    resizeMode: 'cover',
    maxWidth: 120,
    maxHeight: 130,
    borderRadius: StyleSheets.radius_10,
  },
  styViewSubmit: {
    height: 42,
    width: (Size.deviceWidth - Size.defineSpace * 4) / 2,
    borderRadius: 7,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stySubmitText: {
    fontSize: Size.H2,
    fontWeight: '600',
    color: Colors.white,
  },
  styViewInfo: {
    flex: 1,
    marginLeft: Size.defineSpace,
    alignItems: 'center',
  },
  styBoxListCategories: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  styCategories: {
    paddingHorizontal: Size.defineHalfSpace,
    paddingTop: 4,
    paddingBottom: 5,
    borderRadius: StyleSheets.radius_5,
    marginRight: Size.defineHalfSpace,
    backgroundColor: Colors.primary5,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  styBoxMass: {
    // marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flex: 1,
  },
  styBoxMassItem: {
    width: '50%',
  },
  styBoxMassItemRight: {
    width: '50%',
    alignItems: 'flex-end',
  },
  styTitleMass: {
    marginTop: 6,
  },

  styViewAddress: {
    marginTop: Size.defineHalfSpace,
    alignItems: 'center',
  },
  styIconTo: {
    height: '100%',
    justifyContent: 'center',
  },
  styAddFrom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignItems: 'center',
  },
  styAddTo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styCicleIcon: {
    height: Size.iconSize1 + 7,
    width: Size.iconSize1 + 7,
    backgroundColor: Colors.primary5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Size.defineHalfSpace,
    borderRadius: (Size.iconSize1 + 7) / 2,
  },
  styTextAddress: {
    fontWeight: '400',
  },
  styViewBadge: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.red,
    position: 'absolute',
    top: 5,
    right: Size.defineSpace,
    borderWidth: 0.5,
    borderColor: Colors.white,
  },
  styViewBadgeText: {
    fontSize: Size.H5 - 2,
    color: Colors.white,
  },
  bnt_icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  icon: {
    flex: 1,
    maxHeight: 60,
    maxWidth: 80,
    width: Size.deviceWidth * 0.16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Size.defineSpace * 0.5,
  },
  viewIcon: {
    marginHorizontal: Size.defineHalfSpace,
  },

  viewIconAddOrder: {
    marginLeft: Size.defineHalfSpace,
  },
  styTextAdd: {
    fontWeight: '600',
  },
  text_header: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.blue,
  },
  styBold: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  styTextTime: {
    marginBottom: Size.defineHalfSpace,
  },
});

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen);
