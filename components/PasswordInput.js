import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Make sure FontAwesome is imported correctly

const PasswordInput = ({
  value,
  onChangeText,
  placeholder,
  textColor,
  onForgotPassword,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, {color: textColor}]}
          placeholder={placeholder}
          placeholderTextColor="#357ED9"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.icon}>
          <Icon name="eye" size={24} color="#357ED9" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginTop: 10,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#357ED9',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#357ED9',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginTop: 8,
  },
  icon: {
    padding: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#357ED9',
    marginTop: 5,
  },
});

export default PasswordInput;
