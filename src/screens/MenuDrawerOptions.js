import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-navigation';
import styles from './styles/MenuDrawerOptions.styles';

const MenuDrawerOptions = (props) => {
  console.log('...props', {...props});
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
  )
}

export default MenuDrawerOptions;