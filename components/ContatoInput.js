import React,{useState} from 'react';
import {View,TextInput, Button, StyleSheet} from 'react-native'

const ContatoInput = (props)=>{
  const[nome, setNome]=useState('');
  const[telefone, setTelefone]=useState('');
  //captura o texto digitado
  const capturaNome=(nome)=>{
    setNome(nome)
  };
  const capturaTelefone=(telefone)=>{
    setTelefone(telefone)
  };
    return(
        <View style={styles.contatosView}>
        
        <TextInput placeholder="nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
        <TextInput placeholder="telefone"style={styles.contatosInputText} onChangeText={capturaTelefone} value={telefone}/>
        <Button title="Adicionar" color="#5ab00e"
        onPress={()=>props.onAdicionarContato(id,nome, telefone)} />
      </View>
    );
}
const styles = StyleSheet.create({
    contatosView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
      },
      contatosInputText:{
        width:'40%',
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding:2,
        borderRadius:5
      }
});

export default ContatoInput;