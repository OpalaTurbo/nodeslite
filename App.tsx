import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { Conexao, createTable, createUsuario, selectUsuario, selectUsuarioId, deleteUsuario, updateUsuario } from './Conf/Banco';
export default function App() {

  // ---- HOOK
  useEffect(()=>{
        async function initDatabase() {
            try {
            let db = await Conexao();
            await createTable(db!);
            console.log('Banco de dados inicializado com sucesso');
            } catch (error) {
            console.error('Erro ao inicializar o banco de dados: ', error);
            }
        }
        initDatabase();

        async function inserirUsuario() {
            try {
                await createUsuario(db!, 'Gio', '@Giovanna');
                console.log('Usuário inserido com sucesso');
            } catch (error) {
                console.log('Erro ao inserir usuário: ', error);
            }

         }
         async function selectusuario() {
            try {
                const usuarios = await selectUsuario(db!);
                console.log('Usuários selecionados: ', usuarios);
            } catch (error) {
                console.log('Erro ao selecionar usuários: ', error);
            }
         }

         async function selectUsuarioid() {
            try {
                const usuario = await selectUsuarioId(db!, 1);
                console.log('Usuário selecionado por ID: ', usuario);
            } catch (error) {
                console.log('Erro ao selecionar usuário por ID: ', error);
            }
         }

         async function deleteusuario(){
            try {
                await deleteUsuario(db!, 1);
                console.log('Usuário deletado com sucesso');
            } catch (error) {
                console.log('Erro ao deletar usuário: ', error);
            }
         }

         async function updateusuario() {
            try {
                await updateUsuario(1, 'Gio Atualizado', '@GiovannaAtualizada');
                console.log('Usuário atualizado com sucesso');
            } catch (error) {
                console.log('Erro ao atualizar usuário: ', error);
            }
          }   

  return (

    <View style={styles.container}> 
      <Button icon="account-alert" mode="contained" onPress={() => await inserirUsuario()}>
        Inserir
      </Button>
      <StatusBar style="auto" />

      <Button icon="account-alert" mode="contained" onPress={() => await selectusuario()}>
        Select
      </Button>
      <StatusBar style="auto" />

      <Button icon="account-alert" mode="contained" onPress={() => await selectUsuarioid()}>
        Inserir
      </Button>
      <StatusBar style="auto" />

      <Button icon="account-alert" mode="contained" onPress={() => console.log('Pressed')}>
        Inserir
      </Button>
      <StatusBar style="auto" />

      <Button icon="account-alert" mode="contained" onPress={() => console.log('Pressed')}>
        Inserir
      </Button>
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
