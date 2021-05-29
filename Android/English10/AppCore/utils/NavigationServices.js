// import { NavigationActions } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

let _Navigationcontainer = null,
  _historyRouter = [];

const getNavigationcontainer = () => {
  return _Navigationcontainer;
};

const setNavigationcontainer = (Navigationcontainer) => {
  if (Navigationcontainer != null) {
    _Navigationcontainer = Navigationcontainer;
  }
};

const getCurrentScreen = () => {
  return _historyRouter.length > 0 ? _historyRouter[0] : null;
};

const getBeforeScreen = () => {
  return _historyRouter.length > 1 ? _historyRouter[1] : null;
};

const setHistoryScreen = (value) => {
  let _getHistoryRouter = [..._historyRouter];
  if (value != null && getCurrentScreen() !== value) {
    if (_getHistoryRouter.length == 2) {
      // xoá đi 1 phần tử ở cuối mảng
      _getHistoryRouter.pop();
    }
    // set lịch sử chuyển hướng
    _historyRouter = [...[value], ..._getHistoryRouter];
  }
};

const navigate = (routeName, params) => {
  if (_Navigationcontainer != null) {
    _Navigationcontainer.navigate(routeName, params);
  }
};

const openNavigation = () => {
  if (_Navigationcontainer != null) {
    console.log(_Navigationcontainer)
    // _Navigationcontainer.openNavigation()
  }
}

// const closeNavigation = () => {
//     if (_Navigationcontainer != null) {
//         _Navigationcontainer.dispatch(
//             NavigationActions.closeNavigation()
//         );
//     }
// }

const goBack = () => {
  if (_Navigationcontainer != null) {
    _Navigationcontainer.goBack();
  }
};

export default {
  getNavigationcontainer,
  setNavigationcontainer,
  getCurrentScreen: getCurrentScreen,
  getBeforeScreen: getBeforeScreen,
  setHistoryScreen: setHistoryScreen,
  navigate,
  openNavigation,
  // closeNavigation,
  goBack,
};
