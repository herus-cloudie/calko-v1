import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const Input = ({
  id,
  value,
  onInputChanged,
  placeholder,
  errorText,
  secureTextEntry = false,
  keyboardType = 'default',
  ...props
}) => {
  const handleInputChange = (text) => {
    // Pass back id and the updated text
    onInputChanged(id, text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, errorText && styles.inputError]}
        value={value}
        onChangeText={handleInputChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...props}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
  },
  inputError: {
    borderColor: COLORS.error,
  },
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: 4,
  },
});

export default Input;
