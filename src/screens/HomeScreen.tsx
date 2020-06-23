import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from '../constants/styles'

export default function Home(props) {
  const navigateMenu = () => props.navigation.navigate('Menu')
    return (
      <View style={styles.container}>
        <Image source={require('../assets/conversation-night-bold.png')} style={{width: 120, height: 100}} />
        <Text style={styles.h1}>Deep and Meaningful</Text>
        <Text style={styles.paragraph}>Ask someone you care about a question.</Text>
        <View style={styles.bottom}> 
          <TouchableOpacity
            onPress={navigateMenu}>
            <Text style={styles.button}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}