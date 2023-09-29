import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

const App = () => {
  const handleFacebookLogin = async () => {
    console.log('hiho')
    try {
      console.log( await LoginManager.logInWithPermissions(['public_profile', 'email']))
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      console.log(result)
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const accessTokenData = await AccessToken.getCurrentAccessToken();
        if (accessTokenData) {
          console.log('Logged in with token: ', accessTokenData.accessToken.toString());
          // Do something with the access token
        }
      }
    } catch (error) {
      console.log('Login error: ', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Login with Facebook"
        onPress={handleFacebookLogin}
      />

      <TouchableOpacity onPress={handleFacebookLogin}>
        <Text>Login with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;