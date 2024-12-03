import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://blog.milvus.com.br/wp-content/uploads/tic_nas_empresas.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem-vindo ao App!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(2, 3, 1, 0.4)', // Fundo semi-transparente para melhor contraste
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 34,
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
