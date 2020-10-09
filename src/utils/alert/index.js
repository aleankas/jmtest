import {Alert} from 'react-native';
export const alert = (id, message) => {
  Alert.alert(
    `[${id}]`,
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
