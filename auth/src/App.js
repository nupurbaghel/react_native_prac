import React,{ Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAgNSoClkiDQ38ODKCqPpdd00wL7sb2i7M',
      authDomain: 'auth-native-f3306.firebaseapp.com',
      databaseURL: 'https://auth-native-f3306.firebaseio.com',
      projectId: 'auth-native-f3306',
      storageBucket: 'auth-native-f3306.appspot.com',
      messagingSenderId: '957496464927'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          );
      case false:
        return <LoginForm />
      default:
        return (
          <CardSection style={{ alignItems: 'center', justifyContent: 'center' }} >
            <Spinner size="large" />
          </CardSection>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  };
};

export default App;
