import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  const sayHello = () => {
    setMessage('¡Hola Mundo!');
  };

  return (
    <View style={styles.container}>
      <Button onPress={sayHello} title="Haz clic aquí" />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
