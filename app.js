
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { estilos } from './css/styles';
import firebase from 'firebase';
import firebaseConfig from './database/firebase'
import Register from './pages/RegisterPage'
import Login from './pages/LoginPage'
import Home from './pages/HomePage'
import Library from './pages/LibraryPage'
import Social from './pages/SocialPage'
import Stages from './pages/StagesPage'
import Courses from './pages/CoursesPage'

const HomePage = ({ navigation }) => {
  // Função para navegar para a página de login
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  // Função para navegar para a página de cadastro
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.headerText}>EducApp</Text>
      <View style={estilos.contentContainer}>
      <Animatable.View animation="fadeInUp" style={estilos.containerForm}>
        <Image
          source={require('./imgs/educacao-livro.jpg')}
          style={estilos.image}
        />
        <TouchableOpacity style={estilos.button} onPress={navigateToLogin}>
          <Text style={estilos.buttonText}>Fazer Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={navigateToRegister}>
          <Text style={estilos.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animatable.View>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bem vindo!"
          component={HomePage}
          
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
