import React, { useState } from 'react';
import { View, Text, Button, Alert, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import { estilos } from '../css/styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const userLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Digite os detalhes do usuário!');
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          Alert.alert('Seja Bem Vindo!');
          console.log(response);
          console.log('Usuário logado com sucesso!');
          setEmail('');
          setPassword('');
          setIsLoading(false);
          navigation.navigate('Home');
        })
        .catch((error) => {
          setIsLoading(false);
          Alert.alert('Erro ao fazer login', error.message);
        });
    }
  };

  const handleForgotPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(resetEmail)
      .then(() => {
        Alert.alert('Email enviado!', 'Verifique seu email para redefinir sua senha.');
        setResetEmail('');
        setForgotPassword(false);
      })
      .catch((error) => {
        Alert.alert('Erro ao enviar o email', error.message);
      });
  };

  if (isLoading) {
    return (
      <View style={estilos.container}>
        <ActivityIndicator size="large" color="#051b70" />
      </View>
    );
  }

  if (forgotPassword) {
    return (
      <View style={estilos.container}>
        <Animatable.View animation="fadeInUp" style={estilos.containerForm}>
          <Text style={estilos.title}>Esqueceu sua senha?</Text>
          <Text style={estilos.subtitle}>Digite seu email para redefinir sua senha:</Text>

          <TextInput
            style={estilos.input}
            placeholder="Digite seu E-mail"
            value={resetEmail}
            onChangeText={(val) => setResetEmail(val)}
          />

          <TouchableOpacity onPress={handleForgotPassword} style={estilos.button}>
            <Text style={estilos.buttonText}>Enviar Email</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setForgotPassword(false)}>
            <Text style={estilos.loginTexto}>Voltar ao login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      <Animatable.View animation="fadeInUp" style={estilos.containerForm}>
        <Text style={estilos.title}>Email</Text>
        <TextInput
          style={estilos.input}
          placeholder="Digite seu E-mail"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />

        <Text style={estilos.title}>Senha</Text>
        <View style={estilos.inputArea}>
          <TextInput
            style={estilos.input}
            placeholder="Digite Sua Senha"
            value={password}
            onChangeText={(val) => setPassword(val)}
            maxLength={10}
            secureTextEntry={!showPassword}
          />

          <TouchableOpacity style={estilos.icon} onPress={togglePasswordVisibility}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} color="#121212" size={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={userLogin} style={estilos.button}>
          <Text style={estilos.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setForgotPassword(true)}>
          <Text style={estilos.loginTexto}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <Text style={estilos.loginTexto} onPress={() => navigation.navigate('Cadastro')}>
          Não tem conta? Clique aqui para cadastrar!
        </Text>

      </Animatable.View>
    </View>
  );
}
