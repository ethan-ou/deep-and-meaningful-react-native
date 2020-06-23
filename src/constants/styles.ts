import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1a1a1a',
    padding: 15,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '3%',
    marginBottom: '10%'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  h1: {
    color: '#b5c1ff',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: '3%'
  },
  button: {
    color: '#b5c1ff',
    backgroundColor: 'transparent',
    fontSize: 32,
    paddingVertical: 10,
    paddingHorizontal: 50,
    overflow: 'hidden',
    borderRadius: 14,
    borderWidth: 4,
    borderColor: '#b5c1ff',
    border: 4,
  }

});

export default styles