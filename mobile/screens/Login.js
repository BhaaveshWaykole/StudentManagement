import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
//import { useAuth } from '../context/AuthContext.js';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userTypeRef = useRef(null);
  const { login } = useAuth();

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userType = userTypeRef.current.value;

    if (!email || !password) {
      console.error('Please enter email and password');
      return;
    }
    try {
      await login(email, password, userType);
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Id"
        ref={emailRef}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        ref={passwordRef}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
