import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Colors, Images} from '../../theme';
import {LoginApi} from '../../service';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxiosInstance from '../../service/Instance';
import {SButton} from '../../components';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = async () => {
    const body = {
      email: username,
      password: password,
      fcmToken: 'ABCDEF',
    };
    LoginApi.login(body).then(res => {
      const token = res.data.data.token;
      AsyncStorage.setItem('token', token ?? '').then(() => {
        AxiosInstance.defaults.headers.common.token = token;
        navigation.navigate('BottomTabs');
      });
    });
  };

  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor={Colors.PRIMARY} barStyle="light-content" />
      <View>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.text}>Salhakaar</Text>
      </View>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={Colors.GRAVEL_GREY}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor={Colors.GRAVEL_GREY}
      />
      <SButton title="Login" onPress={login} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  parent: {flex: 1, backgroundColor: Colors.WHITE, paddingHorizontal: 18},
  logo: {
    width: Dimensions.get('window').height / 5,
    height: 'auto',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: 24,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 28,
  },
  textInput: {
    backgroundColor: '#EEEEEE', //TODO color from colors file
    color: Colors.CHARCOAL_GREY,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 18,
  },
});
