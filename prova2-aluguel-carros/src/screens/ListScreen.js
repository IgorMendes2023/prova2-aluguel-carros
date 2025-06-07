// src/screens/ListScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function ListScreen({ navigation }) {
  const [aluguel, setAluguel] = useState([]);
  const { fetchAlugel, deleteAluguel } = useFirebase();

  useEffect(() => {
    (async () => {
      const data = await fetchAlugel();
      setAluguel(data);
    })();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAluguel(id);
      setAluguel((u) => u.filter((x) => x.id !== id));
      Alert.alert('Sucesso', 'Aluguel excluído');
    } catch {
      Alert.alert('Erro', 'Não foi possível excluir');
    }
  };

  const renderItem = ({ item }) => (
    <View style={globalStyles.listItem}>
      <Text>{item.nomeCarro}</Text>
      <Text>{item.nomeCliente}</Text>
      <Text>{item.valorAluguel}</Text>
      <Text>{item.dataAluguel}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={globalStyles.link}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Lista de Alugueis</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.navigate('Form')}      >
        <Text style={globalStyles.buttonText}>Cadastrar Aluguel</Text>
      </TouchableOpacity>
      <FlatList
        data={aluguel}
        keyExtractor={(x) => x.id}
        renderItem={renderItem}
      />
    </View>
  );
}