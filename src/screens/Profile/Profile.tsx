import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors, Images} from '../../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Header} from '../../components';

const Profile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();
  const onPressLogOut = async () => {
    console.log(' beforeee logout ');
    await GoogleSignin.signOut();
    await AsyncStorage.clear();
    navigation.reset({index: 0, routes: [{name: 'Login'}]});
  };

  const onClickPaymentHistory = () => {
    navigation.navigate('PaymentHistory');
  };

  return (
    <View style={styles.parent}>
      <Header
        title={'Profile'}
        canGoBack={false}
        backgroundColor={Colors.SECONDARY}
      />
      <Image source={Images.gs_consultant} style={styles.image} />
      <Text style={styles.walletBalance}>Wallet Balance</Text>
      <View style={styles.flex} />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={onClickPaymentHistory}
          style={styles.optionRow}>
          <MaterialIcons name={'receipt'} color={Colors.LIGHT_BLUE} size={30} />
          <Text style={styles.optionText}>Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('')} style={styles.optionRow}>
          <MaterialIcons
            name={'account-circle'}
            color={Colors.LIGHT_BLUE}
            size={30}
          />
          <Text style={styles.optionText}>Account Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('')} style={styles.optionRow}>
          <MaterialIcons
            name={'privacy-tip'}
            color={Colors.LIGHT_BLUE}
            size={30}
          />
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogOut} style={styles.optionRow}>
          <MaterialIcons name={'logout'} color={Colors.LIGHT_BLUE} size={30} />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  parent: {flex: 1, backgroundColor: Colors.SECONDARY},
  image: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width - 220,
    width: Dimensions.get('window').width - 220,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#faeff9',
    alignSelf: 'center',
    marginTop: 40,
  },
  walletBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 12,
    color: Colors.CHARCOAL_GREY,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  flex: {flex: 1},
  bottomContainer: {
    marginTop: 18,
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingBottom: 80,
  },
  optionRow: {flexDirection: 'row', padding: 18},
  optionImage: {
    height: 32,
    width: 32,
    resizeMode: 'contain',
  },
  optionText: {
    color: Colors.CHARCOAL_GREY,
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginLeft: 20,
    flex: 1,
    marginRight: 36,
  },
});
