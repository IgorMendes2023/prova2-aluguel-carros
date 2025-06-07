// src/screens/FormScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function FormScreen({ navigation }) {
  const [form, setForm] = useState({
     nomeCarro: '',
     nomeCliente: '',
     valorAluguel: '',
     dataAluguel: ''
   });
const { addAluguel } = useFirebase();

  const handleChange = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = async () => {
    try {
      // 1) cadastra no Firestore
      await addAluguel(form);
      Alert.alert('Sucesso', 'Aluguel cadastrado!');
      navigation.navigate('List');
    } catch (error) {
      Alert.alert('Erro', 'Falha no cadastro');
      console.error(error);
    }
  };
  return (
     <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Cadastro</Text>
      {['nomeCarro', 'nomeCliente', 'valorAluguel','dataAluguel'].map((field) => (
        <TextInput
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          style={globalStyles.textInput}
          value={form[field]}
          onChangeText={(v) => handleChange(field, v)}
        />
      ))}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleSubmit}
      >
        <Text style={globalStyles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}