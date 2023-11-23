import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { estilos } from '../css/styles';

const HomePage = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.containerHeader}>
        <Text style={estilos.title}>Home</Text>
      </View>
      <View style={estilos.containerForm}>
        <TouchableOpacity style={estilos.button} onPress={() => console.log('Login pressed')}>
          <Text style={estilos.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => console.log('Library pressed')}>
          <Text style={estilos.buttonText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => console.log('Social pressed')}>
          <Text style={estilos.buttonText}>Social</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => console.log('Stages pressed')}>
          <Text style={estilos.buttonText}>Stages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => console.log('Courses pressed')}>
          <Text style={estilos.buttonText}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.button} onPress={() => console.log('App pressed')}>
          <Text style={estilos.buttonText}>App</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.gradientBackground}>
        <TouchableOpacity style={estilos.gradientButton} onPress={() => console.log('Interagir pressed')}>
          <Text style={estilos.gradientButtonText}>Interagir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
