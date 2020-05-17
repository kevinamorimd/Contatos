import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [id, setId] = useState(10);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);

  const capturaNome = (nome) => {
    setNome(nome)
  };
  const capturaTelefone = (telefone) => {
    setTelefone(telefone)
  };
  contato = (id, nome, telefone);
  
  const adicionarContato = () => {
    setContatos((contatos) => {
      console.log(contatos);
      setId(id + 2);
      setContadorContatos(contadorContatos + 1);
      return [...contatos, {
        key: contadorContatos.toString(), value: contato = (id), value2:
          contato = (nome), value3: contato = (telefone)
      }];
    });
  }
  return (
    <View style={styles.telaPrincipalView}>
      <View style={{ padding: 12, backgroundColor: '#ccd9ff', borderColor: '#000', borderRadius: 4 }}><Text>Lista de Contatos</Text></View>
      <View style={styles.contatosView}>
        {/*usuario insere o contato*/}
        <TextInput placeholder="nome" style={styles.contatosInputText} onChangeText={capturaNome} value={nome} />
        <TextInput placeholder="telefone" style={styles.contatosInputText} onChangeText={capturaTelefone} value={telefone} />
        <Button title="Adicionar" color="#5ab00e" onPress={adicionarContato} />
      </View>
      <FlatList
        data={contatos}
        renderItem={
          contato => (
            <View style={styles.itemNaLista}>
              <Text>({contato.item.value})Nome: {contato.item.value2}</Text>
              <Text>       Telefone: {contato.item.value3}</Text>
            </View>
          )} />
    </View>
  );
}
const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50,
  },
  contatosView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  contatosInputText: {
    width: '40%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    borderRadius: 5
  },
  itemNaLista: {
    padding: 5,
    backgroundColor: '#ccd9ff',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5
  }
});