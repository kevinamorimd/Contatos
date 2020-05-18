import React,{useState} from 'react';
import {View,TextInput, Button, StyleSheet} from 'react-native'
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'

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
          {/*usuario insere o contato*/}
          <TextInput placeholder="nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
          <TextInput placeholder="telefone"style={styles.contatosInputText} keyboardType="number-pad" maxLength={10}onChangeText={capturaTelefone} value={telefone}/>
          <Button title="Adicionar"
          color={Cores.botao}
          onPress={()=>props.onAdicionarContato(nome, telefone)} />
        </View>
    );
}
const styles = StyleSheet.create({
    contatosView:{
        flexDirection:Medidas.viewFlex,
        justifyContent:Medidas.viewJustify,
        alignItems:Medidas.alignGeral,
        height:Medidas.viewHeight, 
        marginVertical:Medidas.viewMargin
      },
      contatosInputText:{
        width:Medidas.inputWidth,
        borderBottomColor:Cores.borderInputT,
        borderBottomWidth:Medidas.inputBorder,
        padding:Medidas.inputPadding,
        borderRadius:Medidas.inputBorderR
      }
});

export default ContatoInput;