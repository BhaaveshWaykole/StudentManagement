import React, { useState, useRef } from 'react';
import { useAuth } from './Context/AuthContext.js';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const data = [
  { label: 'Student', value: 'student' },
  { label: 'Faculty', value: 'faculty' },
];

const Login = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userTypeRef = useRef(null);
  const { login } = useAuth();
  const navigation = useNavigation();
  const pickerRef = useRef();
  const [selectedValue, setSelectedValue] = useState('student');

  const handleButtonPress = () => {
    // Access the current selected value of the Picker using the ref 
    const selectedOption = pickerRef.current.props.selectedValue;

    // Use the selected value in your function 
    console.log('Selected value:', selectedOption);
    // Call your function here with the selectedOption 
    // yourFunction(selectedOption); 
  };
  const renderLabel = () => {
    if (value && isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };
  const handleLogin = async () => {
    const email = emailRef.current?.value; // Access the value directly using emailRef.current.value 
    const password = passwordRef.current?.value; // Access the value directly using passwordRef.current.value 
    const userType = value;

    if (!email && !password) {
      console.error('Please enter email and password');
      return;
    }

    try {
      console.log(password);
      await login(email, password, userType);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Login</Text>
        <View style={styles.underline}></View>
      </View>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <TextInput
            placeholder="Email Id"
            ref={emailRef}
            onChangeText={(e) => emailRef.current.value = e}
            style={styles.inputField}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            ref={passwordRef}
            onChangeText={(e) => passwordRef.current.value = e}
            secureTextEntry={true}
            style={styles.inputField}
          />
        </View>

        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
            ref={userTypeRef} // Assign the userTypeRef 
          />
        </View>
      </View>
      <Text style={styles.forgotPassword}>Forgot Password?<Text style={styles.clickHere}>Click Here!</Text></Text>
      <View style={styles.submitContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: '100%',
    marginTop: 5,
  },
  inputs: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
  },
  forgotPassword: {
    textAlign: 'center',
    marginBottom: 10,
  },
  clickHere: {
    color: 'blue',
  },
  submitContainer: {
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Login;