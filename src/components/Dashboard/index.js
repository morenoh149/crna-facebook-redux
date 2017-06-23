import React from 'react';
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.getUserName = this.getUserName.bind(this)
    this.signUserOut = this.signUserOut.bind(this)
    this.state = {
      username: '',
    }
  }
  async getUserName() {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  }
  signUserOut() {
    AsyncStorage.removeItem('@YourApp:fbToken')
    .then(() => {
      this.props.dispatchLogOut()
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, paddingTop: 100 }}>
          <Text>Dashboard</Text>
          <Button
            onPress={this.signUserOut}
            title="Sign out"
            color="#841584"
            accessibilityLabel="Sign out button"
          />
        </View>
      </View>
    );
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
