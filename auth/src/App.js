import React,{ Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // copy paste your details from your firebase account after creating a project 
    firebase.initializeApp({
      apiKey: APIKEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE__BUCKET,
      messagingSenderId: SENDER_ID
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
