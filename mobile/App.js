// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthProvider } from './context/AuthContext.js';
// import Navbar from './screens/Navbar.js';
//import ClassNavbar from './screens/ClassNavbar.js';
import Navbar from './screens/Navbar';
import { View } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //   <AuthProvider>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Login" component={Login} />
    //       {/* Add other screens here */}
    //     </Stack.Navigator>
    //   </AuthProvider>
    // </NavigationContainer>
    <View>
      <Navbar/>
    </View>
  );
};

export default App;
