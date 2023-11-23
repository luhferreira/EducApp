import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import firebase from 'firebase';
import { estilos } from '../css/styles';

export default class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    this.setState({ [prop]: val });
  };

  cadastraUsuario = () => {
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('Por favor, preencha todos os campos!');
    } else {
      this.setState({ isLoading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: this.state.displayName,
          });
          Alert.alert('Usuário cadastrado com sucesso!');
          this.setState({
            isLoading: false,
            displayName: '',
            email: '',
            password: '',
          });
          this.props.navigation.navigate('Login');
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
            errorMessage: error.message,
          });
        });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={estilos.container}>
        <Animatable.View animation="fadeInUp" style={estilos.containerForm}>
          <TextInput
            style={estilos.input}
            placeholder="Nome Completo"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />

          <TextInput
            style={estilos.input}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />

          <TextInput
            style={estilos.input}
            placeholder="Crie sua Senha"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            secureTextEntry={true}
            maxLength={15}
          />

          <TouchableOpacity onPress={this.cadastraUsuario} style={estilos.button}>
            <Text style={estilos.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={estilos.loginTexto} onPress={() => this.props.navigation.navigate('Login')}>
            Já está cadastrado? Clique aqui para fazer login!
          </Text>
        </Animatable.View>
      </View>
    );
  }
}
