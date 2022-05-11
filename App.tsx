import React from 'react';
import Login from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ChatScreen from './src/screens/Chat';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const store = configureStore();

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
