import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import SelectedPageButton from '../../components/SelectedPageButton';
import SubSectionNavButton from '../../components/SubSectionNavButton';

import colors from '../../config/colors';

const HumanRights = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Human Rights Screen</Text>
    </View>

    // <View style={styles.pageContainer}>
    //   <View style={styles.BottomNavigation}>
    //     <SubSectionNavButton style={styles.navButton}>OHS</SubSectionNavButton>
    //     <SelectedPageButton style={styles.navButton}>
    //       Human Rights
    //     </SelectedPageButton>
    //     <SubSectionNavButton style={styles.navButton}>
    //       Employment Standards
    //     </SubSectionNavButton>
    //   </View>
    // </View>
  );
};
export default HumanRights;
const styles = StyleSheet.create({
  BottomNavigation: {
    width: '100%',
    height: 160,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 5,
  },

  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
  },
  ohsButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 60,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
    backgroundColor: colors.primary,
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sectionDetails: {
    width: '100%',
    height: 230,
    backgroundColor: colors.pageDetailsBackground,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  sectionDetailsText: {
    marginTop: 30,
    alignSelf: 'flex-start',
    lineHeight: Platform.OS === 'android' ? 25 : 22,
  },
  sectionTitleText: {
    width: 200,
    textAlign: 'center',
  },
  textContainer: {
    width: Platform.OS === 'android' ? 265 : 200,
    alignSelf: 'flex-start',
    paddingRight: Platform.OS === 'android' ? 20 : 0,
  },
});
