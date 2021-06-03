import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Size, Colors, FONTS, StyleSheets} from '../../constants/Styles';
const EssayQuestion = (props) => {
  const SiZEICON = Size.iconSize1 + 3;
  const [exam, setExam] = useState(props.data);

  const choseAnswer = (answer, index) => {
    if (props.isShowCorrectAnswer) return;

    const {essayQuestionModels} = exam;
    const objAnswer = essayQuestionModels[index];
    
    if (objAnswer) {
      objAnswer.userAnswer = answer;
      objAnswer.userAnswerApp = answer;
      essayQuestionModels[index] = objAnswer;
      setExam({
        ...exam,
      });
      props.onFinish && props.onFinish(objAnswer.id ,objAnswer.idTask, answer, 1);
    }
  };

  const handleSuggest = (text) => {
    let indexDot = text.indexOf('.');
    if (indexDot > -1) return text.substring(0, indexDot);
    else return text;
  };

  const renderForAnswer = (item, index) => {
    if (item.suggestions) {
      if (item.suggestions.indexOf('.') && item.suggestions.indexOf('_') < 0) {
        return (
          <View style={styles.styListOptions} key={item.questiongNo}>
            <View style={styles.styViewTitleAnwser}>
              <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
                item.questionContent ? item.questionContent : ''
              }`}</Text>
            </View>

            <View style={styles.styViewAnswer}>
              <Text style={styles.styTiteAnswer}>{`=>`}</Text>
              <Text style={styles.styTextSuggest}>
                {item.suggestions ? handleSuggest(item.suggestions) : ''}
              </Text>
              <TextInput
                style={styles.styInput}
                value={item.userAnswerApp ? item.userAnswerApp : ''}
                onChangeText={(text) => choseAnswer(text, index)}
              />
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.styListOptions} key={item.questiongNo}>
            <View style={styles.styViewTitleAnwser}>
              <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
                item.questionContent ? item.questionContent : ''
              }`}</Text>
            </View>

            <View style={styles.styViewAnswer}>
              <Text style={styles.styTiteAnswer}>{`=>`}</Text>
              <Text style={styles.styTextSuggest}>{item.suggestions}</Text>
            </View>

            <View style={styles.styViewAnswer}>
              <Text style={styles.styTiteAnswer}>Đáp án : </Text>
              <TextInput
                style={styles.styInput}
                value={item.userAnswerApp ? item.userAnswerApp : ''}
                onChangeText={(text) => choseAnswer(text, index)}
              />
            </View>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.styListOptions} key={item.questiongNo}>
          <View style={styles.styViewTitleAnwser}>
            <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
              item.questionContent ? item.questionContent : ''
            }`}</Text>
          </View>

          <View style={styles.styViewAnswer}>
            <Text style={styles.styTiteAnswer}>{`=>`}</Text>

            <TextInput
              style={styles.styInput}
              value={item.userAnswerApp ? item.userAnswerApp : ''}
              onChangeText={(text) => choseAnswer(text, index)}
            />
          </View>
        </View>
      );
    }
  };

  const renderConrrectAnswer = (item, index) => {
    if (item.suggestions) {
      if (item.suggestions.indexOf('.') && item.suggestions.indexOf('_') < 0) {
        return (
          <View style={styles.styListOptions} key={item.questiongNo}>
            <View style={styles.styViewTitleAnwser}>
              <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
                item.questionContent ? item.questionContent : ''
              }`}</Text>
            </View>

            <View style={styles.styViewAnswer}>
              <Text style={styles.styTiteAnswer}>{`=>`}</Text>
              <Text style={styles.styTextSuggest}>
                {item.suggestions ? handleSuggest(item.suggestions) : ''}
              </Text>
              <TextInput
                style={[
                  styles.styInput,
                  item.answer !== item.userAnswer
                    ? {
                        color: Colors.danger,
                        borderBottomColor: Colors.danger,
                        borderBottomWidth: 1,
                      }
                    : {
                        color: Colors.blue,
                        borderBottomColor: Colors.blue,
                      },
                ]}
                editable={false}
                value={item.userAnswer ? item.userAnswer : ''}
                onChangeText={(text) => choseAnswer(text, index)}
              />
            </View>

            <View style={styles.styViewAnswerConrect}>
              <Text style={styles.styTextSuggest}>{item.answer}</Text>
            </View>
          </View>
        );
      } else {
        return (
          <View style={styles.styListOptions} key={item.questiongNo}>
            <View style={styles.styViewTitleAnwser}>
              <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
                item.questionContent ? item.questionContent : ''
              }`}</Text>
            </View>

            <View style={styles.styViewAnswer}>
              <Text style={styles.styTiteAnswer}>{`=>`}</Text>
              <Text style={styles.styTextSuggest}>{item.suggestions}</Text>
            </View>

            <View style={styles.styViewAnswer}>
              <Text style={styles.styTiteAnswer}>Đáp án : </Text>
              <TextInput
                style={[
                  styles.styInput,
                  item.answer !== item.userAnswer
                    ? {
                        color: Colors.danger,
                        borderBottomColor: Colors.danger,
                        borderBottomWidth: 1,
                      }
                    : {
                        color: Colors.blue,
                        borderBottomColor: Colors.blue,
                      },
                ]}
                editable={false}
                value={item.userAnswer ? item.userAnswer : ''}
                onChangeText={(text) => choseAnswer(text, index)}
              />
            </View>

            <View style={styles.styViewAnswerConrect}>
              <Text style={styles.styTextSuggest}>{item.answer}</Text>
            </View>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.styListOptions} key={item.questiongNo}>
          <View style={styles.styViewTitleAnwser}>
            <Text style={styles.styTiteAnswer}>{`${item.questiongNo}. ${
              item.questionContent ? item.questionContent : ''
            }`}</Text>
          </View>

          <View style={styles.styViewAnswer}>
            <Text style={styles.styTiteAnswer}>{`=>`}</Text>
            <TextInput
              style={[
                styles.styInput,
                item.answer !== item.userAnswer
                  ? {
                      color: Colors.danger,
                      borderBottomColor: Colors.danger,
                      borderBottomWidth: 1,
                    }
                  : {
                      color: Colors.blue,
                      borderBottomColor: Colors.blue,
                    },
              ]}
              editable={false}
              value={item.userAnswer ? item.userAnswer : ''}
              onChangeText={(text) => choseAnswer(text, index)}
            />
          </View>

          <View style={styles.styViewAnswerConrect}>
            <Text style={styles.styTextSuggest}>{item.answer}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.styContent}>
      <View style={styles.styViewName}>
        <Text style={styles.styTilteName}>{exam.name ? exam.name : ''}</Text>
      </View>
      <ScrollView bounces={false} contentContainerStyle={styles.styScroll}>
        {exam.contentTypeQuestion && (
          <Text style={styles.styQuestion}>{exam.contentTypeQuestion}</Text>
        )}

        {/*         
        {exam.contentTypeQuestion && (
          <Text style={styles.styTilte}>{exam.titleQuestion}</Text>
        )} */}

        <View style={styles.styList}>
          {exam.essayQuestionModels.map((obj, i) =>
            props.isShowCorrectAnswer
              ? renderConrrectAnswer(obj, i)
              : renderForAnswer(obj, i),
          )}
        </View>
      </ScrollView>
      {exam.name == 'Exercise 11' && props.isShowCorrectAnswer === false && (
        <TouchableOpacity
          style={styles.styViewSubmit}
          onPress={() => {
            props.saveAnswer && props.saveAnswer();
          }}>
          <Text style={styles.stySubmitText}>Hoàn thành</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  styViewAnswerConrect: {
    backgroundColor: Colors.blue_3,
    borderRadius: 10,
    borderColor: Colors.blue,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: Size.defineSpace,
    marginTop: 5,
  },
  styViewName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: Colors.blue,
    borderWidth: 1,
    marginHorizontal: Size.defineSpace,
    marginBottom: Size.defineSpace,
    borderRadius: 7,
  },
  styTilteName: {
    fontSize: Size.H1,
    fontWeight: 'bold',
    color: Colors.blue,
    marginBottom: 4,
  },
  styContent: {
    flex: 1,
    backgroundColor: Colors.gray_3,
    paddingVertical: Size.defineSpace,
    width: Size.deviceWidth,
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
    marginBottom: 5,
  },
  styTiteAnswer: {
    fontSize: Size.H2,
    fontWeight: '500',
  },
  styLable: {
    fontSize: Size.H2,
    marginLeft: Size.defineHalfSpace,
    fontWeight: '600',
  },
  styViewAnswer: {
    flexDirection: 'row',
    width: Size.deviceWidth - Size.defineSpace * 2,
    alignItems: 'flex-end',

    marginBottom: Size.defineHalfSpace,
  },
  styInput: {
    height: 'auto',
    flex: 1,
    paddingVertical: -2,
    marginLeft: 7,
    borderBottomColor: Colors.gray_8,
    borderBottomWidth: 0.7,
    fontSize: Size.H2,
  },
  styTextSuggest: {
    marginLeft: 7,
    fontSize: Size.H2,
    fontWeight: '500',
  },
  styViewSubmit: {
    height: 45,
    width: Size.deviceWidth - Size.defineSpace * 2,
    borderRadius: 7,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Size.defineSpace,
  },
  stySubmitText: {
    fontSize: Size.H2,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default EssayQuestion;
