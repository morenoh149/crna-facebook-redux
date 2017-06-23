import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';
import { Facebook } from 'expo';
import { fbAppId } from '../../constants/secrets';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.logIn = this.logIn.bind(this)
  }
  async logIn() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbAppId);
    if (type === 'success') {
      AsyncStorage.setItem('@YourApp:fbToken', token)
      .then(() => {
        this.props.dispatchLogIn(token)
      })
    }
  }
  componentDidMount() {
    console.log('login cdm');
    if (this.props.loggedIn === undefined) {
      AsyncStorage.getItem('@YourApp:fbToken')
      .then((token) => {
        console.log('login cdm callback', token);
        if (token) {
          this.props.dispatchLogIn(token)
        } else {
          this.props.dispatchLoggedInPristine()
        }
      })
    }
  }
  render() {
    if (this.props.loggedIn === undefined) {
      return <View />
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1, paddingTop: 100 }}>
            <Text>YourApp</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={this.logIn}
              title="Sign up with Facebook"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
