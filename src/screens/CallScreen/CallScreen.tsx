import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

const CallScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();
  const route = useRoute<RouteProp<RootStack, 'CallScreen'>>();
  const {meetingLink, user} = route.params.item;
  const url = meetingLink;
  const userInfo = {
    displayName: user.name,
    email: '',
    avatar: user.image,
  };
  const options = {
    audioMuted: false,
    audioOnly: false,
    videoMuted: false,
    subject: '',
    //token: meetingToken,
  };
  const meetFeatureFlags = {
    addPeopleEnabled: false,
    calendarEnabled: false,
    callIntegrationEnabled: false,
    chatEnabled: false,
    closeCaptionsEnabled: false,
    inviteEnabled: false,
    androidScreenSharingEnabled: true,
    liveStreamingEnabled: false,
    meetingNameEnabled: false,
    meetingPasswordEnabled: false,
    pipEnabled: false,
    kickOutEnabled: false,
    conferenceTimerEnabled: true,
    videoShareButtonEnabled: false,
    recordingEnabled: false,
    reactionsEnabled: false,
    raiseHandEnabled: false,
    tileViewEnabled: false,
    toolboxAlwaysVisible: false,
    toolboxEnabled: true,
    welcomePageEnabled: false,
    'car-mode.enabled': false,
    'speakerstats.enabled': false,
    'video-share.enabled': false,
    'lobby-mode.enabled': true,
    'help.enabled': false,
    'security-options.enabled': false,
  };

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent: any) {
    console.log('end');
    JitsiMeet.endCall();
    navigation.goBack();
  }

  function onConferenceJoined(nativeEvent: any) {
    console.log('joined');
  }

  function onConferenceWillJoin(nativeEvent: any) {
    console.log('will');
  }

  return (
    <View style={styles.container}>
      <JitsiMeetView
        onConferenceTerminated={(e: any) => onConferenceTerminated(e)}
        onConferenceJoined={(e: any) => onConferenceJoined(e)}
        onConferenceWillJoin={(e: any) => onConferenceWillJoin(e)}
        style={styles.jitsiView}
        options={{url, userInfo, meetOptions: options, meetFeatureFlags}}
      />
    </View>
  );
};

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  jitsiView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
