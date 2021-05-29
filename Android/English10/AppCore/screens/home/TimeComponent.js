import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Size, Colors, FONTS, StyleSheets} from '../../constants/Styles';

const TimeComponent = (props) => {
  const [minutesLabel, setMinutes] = useState('00');
  const [secondsLabel, setSecond] = useState('00');

  useEffect(() => {
    let totalSeconds = 0;
    let wachhTime = setInterval(setTime, 1000);
    function pad(val) {
      debugger;
      let valString = val + '';
      if (valString.length < 2) {
        return '0' + valString;
      } else {
        return valString;
      }
    }

    function setTime() {
      debugger;
      totalSeconds += 1;
      const secondCount = totalSeconds % 60;
      const minutesCount = parseInt(totalSeconds / 60);

      setSecond(pad(secondCount));
      setMinutes(pad(minutesCount));

      if (minutesCount == 60) {
        clearInterval(wachhTime);
        props.saveAnswer && props.saveAnswer(minutesCount);
      }
    }

    return () => {
      clearInterval(wachhTime);
    };
  }, []);

  return (
    <View style={styles.headerView_Right}>
      <View style={styles.styViewTime}>
        <Text style={styles.styViewTimeText}>{minutesLabel}</Text>
      </View>
      <View style={styles.styViewDot}>
        <Text style={styles.styViewDotText}>:</Text>
      </View>
      <View style={styles.styViewTime}>
        <Text style={styles.styViewTimeText}>{secondsLabel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView_Right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: Size.defineSpace,
  },
  styViewTime: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 32,
    justifyContent: 'center',
  },
  styViewDot: {
    height: 32,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  styViewDotText: {
    fontWeight: '700',
    color: Colors.white,
    fontSize: Size.H1,
  },
  styViewTimeText: {
    fontWeight: '700',
    color: Colors.blue,
  },
});

export default TimeComponent;
