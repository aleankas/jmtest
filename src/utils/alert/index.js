import {Alert} from 'react-native';
export const alert = (message) => {
  Alert.alert(
    '',
    `${message}`,
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
};
