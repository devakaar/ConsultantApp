import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title?: string;
  canGoBack?: boolean;
  rightIcon?: string;
  onPressRightIcon?: () => void;
  backgroundColor?: string;
};
const Header: React.FC<Props> = ({
  title,
  canGoBack = true,
  rightIcon,
  onPressRightIcon,
  backgroundColor,
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.parent,
        {backgroundColor: backgroundColor ? backgroundColor : Colors.WHITE},
      ]}>
      <StatusBar
        backgroundColor={backgroundColor ? backgroundColor : Colors.WHITE}
        barStyle="dark-content"
      />
      {canGoBack && (
        <MaterialIcons
          name="arrow-back"
          color={Colors.BLACK}
          size={24}
          onPress={() => navigation.goBack()}
          style={styles.arrow}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      {rightIcon && (
        <MaterialIcons
          name={rightIcon}
          color={Colors.BLACK}
          size={30}
          onPress={onPressRightIcon}
          style={styles.rightIcon}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  parent: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  arrow: {},
  rightIcon: {},
  title: {
    color: Colors.BLACK,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});
