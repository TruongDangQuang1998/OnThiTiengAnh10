import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  ScrollView,
} from 'react-native';
import {Size, Colors, FONTS, StyleSheets} from '../../constants/Styles';
import {IconBack, IconRadioCheck, IconRadioUnCheck} from '../../constants/Icons';
const PickerOption = (props) => {
  const SiZEICON = Size.iconSize1 + 1;
  const [exam, setExam] = useState(props.data);

  const chonseAnswer = (answerSelected, index) => {
    if (props.isShowCorrectAnswer) return;

    const {multipleChoiceQuestionModels} = exam;
    const objAnswer = multipleChoiceQuestionModels[index];

    objAnswer.userAnswerApp = answerSelected;
    objAnswer.userAnswer = answerSelected;
    multipleChoiceQuestionModels[index] = objAnswer;
    setExam({
      ...exam,
    });

    props.onFinish && props.onFinish(objAnswer.id ,objAnswer.idTask, answerSelected, 0);
  };

  const renderForAnswer = (item, index) => {
    return (
      <View style={styles.styListOptions} key={item.questiongNo}>
        <View style={styles.styViewTitleAnwser}>
          <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
            item.questionContent ? item.questionContent : ''
          }`}</Text>
        </View>

        <TouchableOpacity
          style={styles.styOption}
          onPress={() => chonseAnswer(1, index)}>
          {item.userAnswerApp === 1 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.blue} />
          )}
          <View style={styles.styOptionText}>
            <Text style={styles.styLable}>{`A. ${item.answer1}`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.styOption}
          onPress={() => chonseAnswer(2, index)}>
          {item.userAnswerApp === 2 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.blue} />
          )}
          <View style={styles.styOptionText}>
            <Text style={styles.styLable}>{`B. ${item.answer2}`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.styOption}
          onPress={() => chonseAnswer(3, index)}>
          {item.userAnswerApp === 3 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.blue} />
          )}
          <View style={styles.styOptionText}>
            <Text style={styles.styLable}>{`C. ${item.answer3}`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.styOption}
          onPress={() => chonseAnswer(4, index)}>
          {item.userAnswerApp === 4 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.blue} />
          )}
          <View style={styles.styOptionText}>
            <Text style={styles.styLable}>{`D. ${item.answer4}`}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderConrrectAnswer = (item, index) => {
    return (
      <View style={styles.styListOptions} key={item.questiongNo}>
        <View style={styles.styViewTitleAnwser}>
          <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
            item.questionContent ? item.questionContent : ''
          }`}</Text>
        </View>

        <View style={styles.styOption} onPress={() => chonseAnswer(1, index)}>
          {item.userAnswer === 1 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.gray_9} />
          )}
          <View style={styles.styOptionText}>
            <Text
              style={[
                styles.styLable,
                item.userAnswer !== item.answer && item.userAnswer === 1
                  ? {fontWeight: '700', color: Colors.danger}
                  : item.answer === 1
                  ? {fontWeight: '700', color: Colors.blue}
                  : {color: Colors.gray_9},
              ]}>{`A. ${item.answer1}`}</Text>
          </View>
        </View>

        <View style={styles.styOption} onPress={() => chonseAnswer(2, index)}>
          {item.userAnswer === 2 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.gray_9} />
          )}
          <View style={styles.styOptionText}>
            <Text
              style={[
                styles.styLable,
                item.userAnswer !== item.answer && item.userAnswer === 2
                  ? {fontWeight: '700', color: Colors.danger}
                  : item.answer === 2
                  ? {fontWeight: '700', color: Colors.blue}
                  : {color: Colors.gray_9},
              ]}>{`B. ${item.answer2}`}</Text>
          </View>
        </View>

        <View style={styles.styOption} onPress={() => chonseAnswer(3, index)}>
          {item.userAnswer === 3 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.gray_9} />
          )}
          <View style={styles.styOptionText}>
            <Text
              style={[
                styles.styLable,
                item.userAnswer !== item.answer && item.userAnswer === 3
                  ? {fontWeight: '700', color: Colors.danger}
                  : item.answer === 3
                  ? {fontWeight: '700', color: Colors.blue}
                  : {color: Colors.gray_9},
              ]}>{`C. ${item.answer3}`}</Text>
          </View>
        </View>

        <View style={styles.styOption} onPress={() => chonseAnswer(4, index)}>
          {item.userAnswer === 4 ? (
            <IconRadioCheck size={SiZEICON} color={Colors.blue} />
          ) : (
            <IconRadioUnCheck size={SiZEICON} color={Colors.gray_9} />
          )}
          <View style={styles.styOptionText}>
            <Text
              style={[
                styles.styLable,
                item.userAnswer !== item.answer && item.userAnswer === 4
                  ? {fontWeight: '700', color: Colors.danger}
                  : item.answer === 4
                  ? {fontWeight: '700', color: Colors.blue}
                  : {color: Colors.gray_9},
              ]}>{`D. ${item.answer4}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.styContent}>
      <View style={styles.styViewName}>
          <Text style={styles.styTilteName}>
            {exam.name ?exam.name :'' }
          </Text>
      </View>
      <ScrollView bounces={false} contentContainerStyle={styles.styScroll}>

        {exam.tillteTypeQuestion && (
          <Text style={styles.styTilte}>{exam.tillteTypeQuestion}</Text>
        )}

        {exam.contentTypeQuestion && (
          <Text style={styles.styQuestion}>{exam.contentTypeQuestion}</Text>
        )}

        <View style={styles.styList}>
          {exam.multipleChoiceQuestionModels.map((obj, i) =>
            props.isShowCorrectAnswer
              ? renderConrrectAnswer(obj, i)
              : renderForAnswer(obj, i),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  styContent: {
    flex: 1,
    backgroundColor: Colors.gray_3,
    paddingVertical: Size.defineSpace,
    width: Size.deviceWidth
  },
  styViewName:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:40,
    borderColor: Colors.blue,
    borderWidth: 1,
    marginHorizontal: Size.defineSpace,
    marginBottom: Size.defineSpace,
    borderRadius: 7
  },
  styTilteName :{
    fontSize: Size.H1,
    fontWeight: 'bold',
    color: Colors.blue,
    marginBottom: 4,
  },
  styScroll: {
    paddingHorizontal: Size.defineSpace,
  },
  styTilte: {
    fontSize: Size.H2,
    fontWeight: 'bold',
    color: Colors.black,
    marginBottom: 4,
  },
  styQuestion: {
    fontSize: Size.H2,
    fontWeight: '500',
    color: Colors.gray_8,
  },
  styList: {
    flex: 1,
  },
  styListOptions: {
    flexDirection: 'row',
    marginTop: Size.defineSpace,
    flexWrap: 'wrap',
  },
  styViewTitleAnwser: {
    width: Size.deviceWidth - Size.defineSpace * 2,
    marginBottom: Size.defineHalfSpace,
  },
  styTiteAnswer: {
    fontSize: Size.H2,
    fontWeight: '500',
  },
  styOption: {
    width: (Size.deviceWidth - Size.defineSpace * 2) / 2,
    paddingBottom: Size.defineHalfSpace,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  styOptionText: {
    flex: 1,
  },
  styLable: {
    fontSize: Size.H3,
    marginLeft: Size.defineHalfSpace,
    fontWeight: '600',
  },
});

export default PickerOption;
