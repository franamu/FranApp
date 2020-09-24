import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
const BarsIcon = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
      <View style={{padding: 20}}>
        <Icon
          style={{color: 'black', paddingTop: 3}}
          type="ionicon"
          name="bars"
          size={20}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BarsIcon;