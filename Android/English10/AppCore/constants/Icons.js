import React, { Component } from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
//import { Platform } from 'react-native';

export class IconBasket extends Component {
  render() {
    const { color, size } = this.props;
    return <FontAwesome name={'shopping-basket'} size={size} color={color} />;
  }
}

export class IconScore extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'bookmark'} size={size} color={color} />;
  }
}

export class IconAppStore extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'apple-o'} size={size} color={color} />;
  }
}

export class IconAndroid extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'android'} size={size} color={color} />;
  }
}

export class IconNotify extends Component {
  render() {
    const { color, size } = this.props;
    return <FontAwesome name={'bell-o'} size={size} color={color} />;
    //return <Ionicons name={'ios-notifications-outline'} size={size} color={color} />;
  }
}

export class IconOffNotify extends Component {
  render() {
    const { color, size } = this.props;
    return <FontAwesome name={'bell-slash-o'} size={size} color={color} />;
    //return <Ionicons name={'ios-notifications-outline'} size={size} color={color} />;
  }
}

export class IconSetting extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'setting'} size={size} color={color} />;
  }
}

export class IconChat extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'message1'} size={size} color={color} />;
  }
}

export class IconDot extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'dot-single'} size={size} color={color} />;
  }
}

export class IconLocation extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'my-location'} size={size} color={color} />;
  }
}

export class IconLock extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'lock'} size={size} color={color} />;
  }
}

export class IconFinger extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'fingerprint'} size={size} color={color} />;
  }
}

export class IconGenderFemale extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'gender-female'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconGenderMale extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons name={'gender-male'} size={size} color={color} />
    );
  }
}

export class IconGender extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'gender-male-female'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconRadioCheck extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialIcons name={'radio-button-checked'} size={size} color={color} />
    );
  }
}

export class IconRadioUnCheck extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialIcons
        name={'radio-button-unchecked'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconWarning extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <IconAntDesign name={'exclamationcircleo'} size={size} color={color} />
    );
  }
}

export class IconMinus extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'minus'} size={size} color={color} />;
  }
}

export class IconMinusCircle extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'minus-circle'} size={size} color={color} />;
  }
}

export class IconPrev extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'arrow-back'} size={size} color={color} />;
  }
}

export class IconNextForward extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'arrow-forward'} size={size} color={color} />;
  }
}

export class IconEye extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'eye'} size={size} color={color} />;
  }
}

export class IconEyeOff extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'eye-off'} size={size} color={color} />;
  }
}

export class IconConfirm extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'questioncircleo'} size={size} color={color} />;
  }
}

export class IconKey extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'key'} size={size} color={color} />;
  }
}

export class IconInfo extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'infocirlceo'} size={size} color={color} />;
  }
}

export class IconLogout extends Component {
  render() {
    const { color, size } = this.props;
    return <SimpleLineIcons name={'logout'} size={size} color={color} />;
  }
}

export class IconLogin extends Component {
  render() {
    const { color, size } = this.props;
    return <SimpleLineIcons name={'login'} size={size} color={color} />;
  }
}

export class IconCamera extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialCommunityIcons name={'camera'} size={size} color={color} />;
  }
}

export class IconBack extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'chevron-left'} size={size} color={color} />;
  }
}

export class IconBackRadious extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'back'} size={size} color={color} />;
  }
}

export class IconQrcode extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons name={'qrcode-scan'} size={size} color={color} />
    );
  }
}

export class IconNext extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'chevron-right'} size={size} color={color} />;
  }
}

export class IconCreate extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'plus-circle'} size={size} color={color} />;
  }
}

export class IconPlus extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'plus'} size={size} color={color} />;
  }
}

export class IconPublish extends Component {
  render() {
    const { color, size } = this.props;
    return <FontAwesome name={'save'} size={size} color={color} />;
  }
}

export class IconUndo extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons name={'undo-variant'} size={size} color={color} />
    );
  }
}

export class IconFilter extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'filter'} size={size} color={color} />;
  }
}

export class IconEdit extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'edit-3'} size={size} color={color} />;
  }
}

export class IconColse extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'closecircleo'} size={size} color={color} />;
  }
}

export class IconCancel extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'close'} size={size} color={color} />;
  }
}

export class IconCancelMarker extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialCommunityIcons name={'cancel'} size={size} color={color} />;
  }
}

export class IconCheck extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'check'} size={size} color={color} />;
  }
}

export class IconCheckCirlceo extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'checkcircleo'} size={size} color={color} />;
  }
}

export class IconCheckSquare extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'checksquareo'} size={size} color={color} />;
  }
}

export class IconUnCheckSquare extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'square-outline'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconMail extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'mail'} size={size} color={color} />;
  }
}

export class IconDelete extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'delete'} size={size} color={color} />;
  }
}

export class IconCreditCard extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'creditcard'} size={size} color={color} />;
  }
}

export class IconMoreHorizontal extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'more-horizontal'} size={size} color={color} />;
  }
}

export class IconMoreVertical extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'more-vertical'} size={size} color={color} />;
  }
}

export class IconLightDark extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialCommunityIcons name={'theme-light-dark'} size={size} color={color} />;
  }
}



export class IconAttach extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'attach-file'} size={size} color={color} />;
  }
}

export class IconEditSquare extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'edit'} size={size} color={color} />;
  }
}

export class IconLeaveDay extends Component {
  render() {
    const { color, size } = this.props;
    return <IconOcticons name={'calendar'} size={size} color={color} />;
  }
}

export class IconInOut extends Component {
  render() {
    const { color, size } = this.props;
    return <SimpleLineIcons name={'tag'} size={size} color={color} />;
  }
}

export class IconDate extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'date-range'} size={size} color={color} />;
  }
}

export class IconTime extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'access-time'} size={size} color={color} />;
  }
}

export class IconRefresh extends Component {
  render() {
    const { color, size } = this.props;
    return <SimpleLineIcons name={'refresh'} size={size} color={color} />;
  }
}

export class IconMap extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'map-marker-radius-outline'}
        size={size}
        color={color}
      />
    );
  }
}


export class IconMapPin extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <FontAwesome
        name={'map-pin'}
        size={size}
        color={color}
      />
    );
  }
}


export class IconCar extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons name={'car-estate'} size={size} color={color} />
    );
  }
}

export class IconListRow extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'format-list-bulleted'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconListColumn extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'format-columns'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconUpload extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'upload'} size={size} color={color} />;
  }
}

export class IconImage extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'image'} size={size} color={color} />;
  }
}

export class IconDownload extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'download'} size={size} color={color} />;
  }
}

export class IconFile extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'file1'} size={size} color={color} />;
  }
}

export class IconFilePdf extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'pdffile1'} size={size} color={color} />;
  }
}

export class IconFileWord extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'wordfile1'} size={size} color={color} />;
  }
}

export class IconFileExcel extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'exclefile1'} size={size} color={color} />;
  }
}

export class IconDown extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'chevron-down'} size={size} color={color} />;
  }
}

export class IconUp extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'chevron-up'} size={size} color={color} />;
  }
}

export class IconRight extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'chevron-right'} size={size} color={color} />;
  }
}

export class IconFileZipRar extends Component {
  render() {
    const { color, size } = this.props;
    return <FontAwesome name={'file-zip-o'} size={size} color={color} />;
  }
}

export class IconFileCsv extends Component {
  render() {
    const { color, size } = this.props;
    return <Foundation name={'page-csv'} size={size} color={color} />;
  }
}

export class IconSend extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialCommunityIcons name={'send'} size={size} color={color} />;
  }
}

export class IconSave extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'content-save-edit-outline'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconError extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'error-outline'} size={size} color={color} />;
  }
}

export class IconSearch extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'search'} size={size} color={color} />;
  }
}

export class IconSearchOutline extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'feature-search-outline'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconGroupUser extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'account-group-outline'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconPositionName extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'chair-rolling'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconStructure extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'flow-tree'} size={size} color={color} />;
  }
}

export class IconMoney extends Component {
  render() {
    const { color, size } = this.props;
    return <FontAwesome name={'money'} size={size} color={color} />;
  }
}

export class IconUser extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'user'} size={size} color={color} />;
  }
}

export class IconUserPlus extends Component {
  render() {
    const { color, size } = this.props;
    return <IconFeather name={'user-plus'} size={size} color={color} />;
  }
}

export class IconEvaluate extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'like2'} size={size} color={color} />;
  }
}

export class IconProgressCheck extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <MaterialCommunityIcons
        name={'progress-check'}
        size={size}
        color={color}
      />
    );
  }
}

export class IconSuitcase extends Component {
  render() {
    const { color, size } = this.props;
    return <SimpleLineIcons name={'briefcase'} size={size} color={color} />;
  }
}

export class IconHourGlass extends Component {
  render() {
    const { color, size } = this.props;
    return <IconEntypo name={'hour-glass'} size={size} color={color} />;
  }
}

export class IconHome extends Component {
  render() {
    const { color, size } = this.props;
    return <IconAntDesign name={'home'} size={size} color={color} />;
  }
}

export class IconLanguage extends Component {
  render() {
    const { color, size } = this.props;
    return <MaterialIcons name={'language'} size={size} color={color} />;
  }
}
