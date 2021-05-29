import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Size, Colors, FONTS, StyleSheets} from '../../constants/Styles';
import {connect} from 'react-redux';
import NavigationServices from '../../utils/NavigationServices';
import {Rating} from 'react-native-ratings';
import Loading from '../../components/loading/Loading';
import {dataUser} from '../../constants/AuthContext';

const Home = (props) => {
  // Dummy Datas
  const {colors} = useTheme();

  const [listExam, setlistExam] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function renderHeader() {
    return (
      <View style={styles.styHeaders}>
        <Text style={styles.text_header}>Luyện thi tiếng anh vào lớp 10</Text>
      </View>
    );
  }

  const motoDetail = (item) => {
    NavigationServices.navigate('DetailScreen', {
      dataItem: item,
      reloadHome : reloadData
    });
  };

  const renderItem = ({item, index}) => {
    const answerSuccess = item.correctAnswerNo;
    return (
      <TouchableOpacity
        style={styles.styContain}
        onPress={() => motoDetail(item)}>
        {/* Image */}
        <View style={styles.styViewbox}>
          <View style={styles.styViewInfo}>
            <Text style={{...StyleSheets.H1, color: colors.text}}>
              {item.name}
            </Text>
          </View>
        </View>

        <View style={styles.styViewAddress}>
          <Text style={[StyleSheets.H3, styles.styTextTime]}>
            <Text style={styles.styBold}>Đúng</Text>{' '}
            {`${answerSuccess}/40 câu , `}
            <Text style={styles.styBold}> làm trong</Text> 60 phút
          </Text>
          <Rating
            readonly={true}
            ratingCount={5}
            size={13}
            startingValue={(((answerSuccess * 100) / 40) * 5) / 100}
          />
        </View>

        {answerSuccess > 0 && (
          <View style={styles.styViewDone}>
            <Text style={styles.styTextDone}>Đã làm</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  function reloadData() {
    console.log(reloadData,'reloadData')
    if (dataUser.currentUser.userId) {
      setLoading(true);
      fetch(
        `http://quangiuh.azurewebsites.net:80/ExamGetAll?userId=${dataUser.currentUser.userId}`,
      )
        .then((response) => response.json())
        .then((res) => {
          setLoading(false);
          if (res && res.result == 'Success') {
            setlistExam(res);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  }

  useEffect(() => {
    reloadData();
  }, []);

  let viewContent = <View />;
  if (isLoading || listExam == null) {
    viewContent = <Loading size={'large'} />;
  } else if (listExam && listExam.examList) {
    viewContent = (
      <FlatList
        data={listExam.examList}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: Size.defineHalfSpace * 2,
          paddingBottom: 30,
        }}
      />
    );
  }
  return (
    <SafeAreaView
      style={{
        ...styles.container,
      }}>
      {renderHeader()}

      {viewContent}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  styViewDone: {
    backgroundColor: Colors.blue,
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: StyleSheets.radius_10,
    paddingHorizontal: Size.defineHalfSpace,
    paddingVertical: Size.defineHalfSpace,
    borderBottomLeftRadius: StyleSheets.radius_10,
  },
  styTextDone: {
    fontSize: Size.H3,
    color: Colors.white,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
    marginBottom: Size.defineSpace,
    padding: Size.defineSpace,
    paddingBottom: Size.defineSpace - 3,
    borderRadius: StyleSheets.radius_10,
    borderWidth: 0.5,
    borderColor: Colors.gray_7,
  },
  styViewbox: {
    borderRadius: StyleSheets.radius_10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: Colors.gray_7,
    paddingBottom: Size.defineSpace,
  },

  styImages: {
    width: Size.deviceWidth * 0.27,
    height: Size.deviceWidth * 0.27,
    resizeMode: 'cover',
    maxWidth: 120,
    maxHeight: 130,
    borderRadius: StyleSheets.radius_10,
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
    flex: 1,
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
  return {
    // listOrder: state.orders.listOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // addItemToCart: (data) => {
    //   dispatch(orderReducer.actions.addItemToCart(data));
    // },
    // removeItemToCart: (data) => {
    //   dispatch(orderReducer.actions.removeItemToCart(data));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
