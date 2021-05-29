import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Size, Colors, FONTS, StyleSheets} from '../../constants/Styles';
import {connect} from 'react-redux';
import NavigationServices from '../../utils/NavigationServices';
import {IconBack} from '../../constants/Icons';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import PickerOption from '../../components/pickerQuestion/PickerOption';
import EssayQuestion from '../../components/pickerQuestion/EssayQuestion';
import TimeComponent from './TimeComponent';
import {dataUser} from '../../constants/AuthContext';
import Loading from '../../components/loading/Loading';
import moment from 'moment';
import FunctionCommon from '../../utils/FunctionCommon';
const DetailScreen = (props) => {
  // Dummy Datas
  const {colors} = useTheme();
  const [dataItem, setDataItem] = useState(null);
  const [index, setIndex] = useState(0);
  const [submitAnswer, setSubmitAnswer] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isShowCorrectAnswer, setIsShowCorrectAnswer] = useState(false);
  const timeStart = moment(new Date());

  const getTimeUp = () => {
    const now = moment(new Date()), //todays date
      end = timeStart, // time check in
      duration = moment.duration(now.diff(end)),
      {minutes} = duration._data;

    return minutes;
  };

  function renderHeader() {
    return (
      <View style={styles.header}>
        <SafeAreaView style={styles.viewSafe}>
          <View style={styles.headerView}>
            <TouchableOpacity
              style={styles.headerView_bnt__back}
              onPress={() => NavigationServices.navigate('HomeScreen')}>
              <IconBack size={Size.iconSize1 + 2} color={Colors.white} />
            </TouchableOpacity>
            <View style={styles.headerView_content}>
              <Text
                numberOfLines={1}
                style={[StyleSheets.H2, styles.headerView_content__text]}>
                {dataItem ? dataItem.name : ''}
              </Text>
              {isShowCorrectAnswer ? (
                <Text
                  style={
                    styles.styTextReview
                  }>{`${dataItem.correctAnswerNo}/40 câu (1/60 phút)`}</Text>
              ) : (
                <Text style={[StyleSheets.H3, styles.viewStatus_text]}>
                  Đang làm
                </Text>
              )}
            </View>
            {!isShowCorrectAnswer ? (
              <TimeComponent saveAnswer={saveAnswer} key={FunctionCommon.MakeId(10)} />
            ) : (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: Colors.blue_5,
                  marginRight: Size.defineSpace,
                  borderRadius: 5,
                }}
                onPress={openAgain}>
                <Text style={styles.styTextReview}>Làm lại</Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }

  const openAgain = () => {
    const {dataForReStart} = props.route.params;
    if (dataForReStart) {
      setLoading(true);
      fetch(
        `http://quangiuh.azurewebsites.net:80/ExamGetById?id=${dataUser.currentUser.userId}&userId=${dataForReStart.id}`,
      )
        .then((response) => response.json())
        .then((res) => {
          console.log(res, 'ExamGetById');
          setLoading(false);
          if (res && res.result == 'Success') {
            const _modelQuestionAnswers = [];
            res.typeQuestionModels.map((item) => {
              item.essayQuestionModels.length > 0
                ? item.essayQuestionModels.map((e) => {
                    _modelQuestionAnswers.push({
                      questionId: e.id,
                      userAnswer: '',
                      isMultipleChoiceOrEssay: 1,
                    });
                  })
                : item.multipleChoiceQuestionModels.map((e) => {
                    _modelQuestionAnswers.push({
                      questionId: e.id,
                      userAnswer: 0,
                      isMultipleChoiceOrEssay: 0,
                    });
                  });
            });


            setDataItem(res);
            setSubmitAnswer({
              userId: dataUser.currentUser.userId,
              examId: res.id,
              modelQuestionAnswers: _modelQuestionAnswers,
            });
            setIsShowCorrectAnswer(false);
          }
        })
        .catch((e) => console.log(e));
    }
  };

  const finishPicker = (idQuestion, answer, isMultipleChoiceOrEssay) => {
    const indexQuestion = submitAnswer.modelQuestionAnswers.findIndex(
      (e) => e.questionId == idQuestion,
    );
    if (indexQuestion > -1) {
      submitAnswer.modelQuestionAnswers[indexQuestion] = {
        questionId: idQuestion,
        userAnswer: `${answer}`,
        isMultipleChoiceOrEssay: isMultipleChoiceOrEssay,
      };
    } else {
      submitAnswer.modelQuestionAnswers.push({
        questionId: idQuestion,
        userAnswer: `${answer}`,
        isMultipleChoiceOrEssay: isMultipleChoiceOrEssay,
      });
    }
    setSubmitAnswer(submitAnswer);
  };

  const renderItemTab = (props) => {
    const {multipleChoiceQuestionModels, id} = props.route;
    if (
      multipleChoiceQuestionModels !== null &&
      multipleChoiceQuestionModels.length > 0
    )
      return (
        <PickerOption
          key={FunctionCommon.MakeId(10)}
          data={props.route}
          onFinish={finishPicker}
          saveAnswer={saveAnswer}
          isShowCorrectAnswer={isShowCorrectAnswer}
        />
      );
    else
      return (
        <EssayQuestion
          key={FunctionCommon.MakeId(10)}
          data={props.route}
          onFinish={finishPicker}
          saveAnswer={saveAnswer}
          isShowCorrectAnswer={isShowCorrectAnswer}
        />
      );
  };

  const renderTab = () => {
    const sceneMapp = {};
    dataItem.typeQuestionModels.map((item, index) => {
      sceneMapp[item.name] = renderItemTab;
    });

    dataItem.typeQuestionModels = dataItem.typeQuestionModels.map((item) => ({
      ...item,
      title: item.name,
      key: item.name,
    }));

    const renderScene = SceneMap(sceneMapp);

    return (
      <View style={styles.styTabContent}>
        <TabView
          navigationState={{index, routes: dataItem.typeQuestionModels}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: Size.deviceWidth * 2}}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              scrollEnabled={true}
              tabStyle={{
                width: 'auto',
              }}
              style={{
                backgroundColor: Colors.white,
              }}
              labelStyle={{
                color: Colors.blue,
                fontWeight: 'bold',
                fontSize: Size.H4,
              }}
              inactiveColor={Colors.gray_7}
              activeColor={Colors.blue}
              pressColor={Colors.gray_2}
              indicatorStyle={{backgroundColor: Colors.blue, height: 2}}
            />
          )}
        />
      </View>
    );
  };

  const saveAnswer = (timeUp) => {
    const {dataItem,reloadHome} = props.route.params;
    if (dataUser.currentUser.userId && submitAnswer) {
      console.log(JSON.stringify(submitAnswer),'submitAnswer')
      setLoading(true);
      fetch('http://quangiuh.azurewebsites.net:80/Submit', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(submitAnswer),
      })
        .then((response) => response.json())
        .then((res) => {        
          setLoading(false);
          if (res && res.result == 'Success') {
            reloadHome && reloadHome();
            NavigationServices.navigate('ResultScreen', {
              data: res,
              dataForReStart: dataItem,
              timeUp: timeUp ? timeUp : getTimeUp(),
            });
          }
        })
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    const {dataItem, isReview} = props.route.params;
    if (isReview && dataItem) {
      setDataItem(dataItem);
      setIsShowCorrectAnswer(true);
    } else if (dataItem) {
      const _modelQuestionAnswers = [];
      dataItem.typeQuestionModels.map((item) => {
        item.essayQuestionModels.length > 0
          ? item.essayQuestionModels.map((e) => {
              _modelQuestionAnswers.push({
                questionId: e.id,
                userAnswer: '',
                isMultipleChoiceOrEssay: 1,
              });
            })
          : item.multipleChoiceQuestionModels.map((e) => {
              _modelQuestionAnswers.push({
                questionId: e.id,
                userAnswer: 0,
                isMultipleChoiceOrEssay: 0,
              });
            });
      });
      setDataItem(dataItem);
      console.log(_modelQuestionAnswers,'_modelQuestionAnswers')
      setSubmitAnswer({
        userId: dataUser.currentUser.userId,
        examId: dataItem.id,
        modelQuestionAnswers: _modelQuestionAnswers,
      });
    }
  }, [props.route.params.dataItem]);

  return (
    <SafeAreaView
      style={{
        ...styles.container,
      }}>
      {renderHeader()}
      {dataItem !== null && renderTab()}
      {isLoading && (
        <View style={styles.styLoading}>
          <Loading size={'large'} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  styTextReview: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '500',
  },
  styLoading: {
    position: 'absolute',
    height: Size.deviceheight,
    width: Size.deviceWidth,
    top: 0,
  },
  header: {
    height: 60,
    width: Size.deviceWidth,
    top: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray_5,
    backgroundColor: Colors.blue,
  },
  styTabContent: {
    flex: 1,
  },
  viewSafe: {
    flex: 1,
    justifyContent: Platform.OS == 'ios' ? 'flex-end' : 'center',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  keyboardContent: {
    flex: 1,
  },
  headerView_content: {
    flex: 1,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerView_content__text: {
    color: Colors.white,
    fontWeight: '700',
  },
  viewStatus_text: {
    fontWeight: '500',
    color: Colors.white,
    marginRight: 3,
    fontSize: Size.H3 - 4,
  },
  viewStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerView_bnt__back: {
    height: '100%',
    width: Size.iconSize1 + 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView_bnt__more: {
    height: '100%',
    width: Size.iconSize1 + 15,
    justifyContent: 'center',
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
