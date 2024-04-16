import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  // const { user, logout } = useAuth();
  // const navigation = useNavigation();

  // const handleLogout = () => {
  //   logout();
  //   // You may perform additional logout-related actions here, such as navigating to the login page
  //   navigation.navigate('Login');
  // };

  // const createClassHandle = () => {
  //   // You may perform additional actions related to creating a class here
  //   navigation.navigate('CreateClassroom');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <TouchableOpacity /*onPress={() => navigation.navigate('/')}*/>
          <Text style={styles.logoText}>LMS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        {/*user && user.role === 'faculty' &&*/ (
          <TouchableOpacity style={styles.button} /*onPress={createClassHandle}*/>
            <Text>Create Class</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} /*onPress={() => navigation.navigate('/profile')}*/>
          <Image source={require('../assets/profilePic.jpeg')} style={styles.profilePic} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} /*onPress={handleLogout}*/>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    paddingLeft: 10,
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  button: {
    padding: 5,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
};
