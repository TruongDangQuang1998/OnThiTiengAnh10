import {useTheme} from 'react-native-paper';
import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  IconLogout,
} from '../../constants/Icons';
import {Size, StyleSheets, Colors} from '../../constants/Styles';
import TextView from '../../components/textView/TextView';
import {
  AuthContext,
  dataUser,
} from '../../constants/AuthContext';

export default function App() {
  const {colors} = useTheme();

  const {signOut} = useContext(AuthContext);

  const logout = () => {
    signOut();
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: colors.backgroundColor}}>
        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={require('../../assets/images/avatar-5.jpg')}
              style={styles.image}
              resizeMode="center"></Image>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text
            style={[
              StyleSheets.H1,
              {fontWeight: '200', fontSize: 36, color: colors.text},
            ]}>
            {dataUser.currentUser.id ? dataUser.currentUser.id : ''}
          </Text>
        </View>

        <TouchableOpacity style={styles.bnt_action} onPress={() => logout()}>
          <View style={styles.bnt_action__left}>
            <View style={[styles.bnt_action__IconLeft, {marginLeft: -3}]}>
              <IconLogout size={Size.iconSize1 - 3} color={colors.text} />
            </View>
            <TextView
              style={[
                StyleSheets.H2,
                styles.bnt_action__text,
                {
                  color: colors.text,
                },
              ]}
              i18nKey={'Đăng xuất'}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.styViewAbout}>
          <Text
            style={[
              StyleSheets.H2,
              styles.styTitle,
            ]}>
            {'Phát triển bởi'}
          </Text>
          <View style={styles.styIemAbout}>
            <View style={styles.styRow}>
              <Text style={styles.styAboutText}>MSSV : </Text>
              <Text style={styles.styAboutTextBold}>17069131</Text>
            </View>

            <View style={styles.styRow}>
              <Text style={styles.styAboutText}>Họ tên : </Text>
              <Text style={styles.styAboutTextBold}>Trương Đăng Quang</Text>
            </View>

            <View style={styles.styRow}>
              <Text style={styles.styAboutText}>Email : </Text>
              <Text style={styles.styAboutTextBold}>
                17069131.quang@student.iuh.edu.vn
              </Text>
            </View>
          </View>

          <View style={styles.styIemAbout}>
            <View style={styles.styRow}>
              <Text style={styles.styAboutText}>MSSV : </Text>
              <Text style={styles.styAboutTextBold}>17028671</Text>
            </View>

            <View style={styles.styRow}>
              <Text style={styles.styAboutText}>Họ tên : </Text>
              <Text style={styles.styAboutTextBold}>Đỗ Thùy Linh</Text>
            </View>

            <View style={styles.styRow}>
              <Text style={styles.styAboutText}>Email : </Text>
              <Text style={styles.styAboutTextBold}>
                dothuylinh2105@gmail.com
              </Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  styRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styTitle: {
    fontWeight: '600',
    fontSize: Size.H1 + 3,
    marginTop: Size.defineSpace *1.5,
    color:Colors.blue
  },
  styViewAbout: {
    flex: 1,
    paddingHorizontal: Size.defineSpace,
    justifyContent:'flex-end',
  },
  styIemAbout: {
    padding: Size.defineSpace,
    marginTop: Size.defineSpace,


    borderTopLeftRadius : 20,
    borderBottomRightRadius : 20,
    borderWidth: 0.7,
    borderColor : Colors.gray_7

  },
  styAboutText: {
    fontSize: Size.H3,
    fontWeight: '500',
    color: Colors.black,
  },
  styAboutTextBold: {
    fontSize: Size.H3,
    fontWeight: 'bold',
    color: Colors.black,
  },
  text: {
    fontFamily: 'HelveticaNeue',
    color: '#52575D',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: Size.defineSpace,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: Size.deviceWidth * 0.37,
    height: Size.deviceWidth * 0.37,
    maxHeight: 200,
    maxWidth: 200,
    borderRadius: (Size.deviceWidth * 0.37) / 2,
    overflow: 'hidden',
    marginTop: Size.defineSpace,
  },
  dm: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#34FFB9',
    position: 'absolute',
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: Size.defineSpace,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: '#41444B',
    position: 'absolute',
    top: '50%',
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: 'rgba(0, 0, 0, 0.38)',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: '#CABFAB',
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  bnt_action: {
    flexDirection: 'row',
    borderBottomColor: Colors.gray_5,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    height: Size.deviceWidth * 0.13,
    maxHeight: 70,
    minHeight: 40,
    alignItems: 'center',
    marginHorizontal: Size.defineSpace,
  },
  bnt_action__left: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  bnt_action__text: {
    // paddingHorizontal: 5,
  },
  bnt_action__IconLeft: {
    width: Size.iconSize1 + 12,
  },
  stybtnRight: {},
});
