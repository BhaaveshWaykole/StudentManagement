// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext.js';
import Login from './screens/Login.js';
// import Home from './screens/Home.js'
// import ClassCards from './screens/classMaterial/ClassCard.js';
import Classroom from './screens/Classroom.js';
// import ClassNavbar from './screens/classMaterial/ClassNavbar.js';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={Login} /> */}
          {/* <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="ClassCards" component={ClassCards} /> */}
          {/* <Stack.Screen name="ClassNav" component={ClassNavbar} /> */}
          <Stack.Screen name="Classroom" component={Classroom} />
          {/* Add other screens here */}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
