import React, {Component} from 'react';
import {Platform, StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import bgImage from '../images/background.png';
import logo from '../images/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux'
const{width: WIDTH }=Dimensions.get('window')
export default class Login extends Component<Props> {
  constructor(){
    super()
    this.state={
      showPass: true,
      press: false
    }
  }


  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>DSAP</Text>
        </View>




                  <TouchableOpacity
                  style={styles.btnLogin}>
                  <Text style={styles.text}>Facebook</Text>

                  </TouchableOpacity>

                  <TouchableOpacity
                  style={styles.btnLogin}>
                  <Text style={styles.text}>Bennett LMS</Text>

                  </TouchableOpacity>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center'

  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 50
  },

  logo: {
    width:120,
    height:120
  },
  logoText:{
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop:-10,
    marginBottom:20,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10

    },

  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top:8,
    left:37

  },
  btnEye:{
    position: 'absolute',
    top:8,
    right:37
  },
  btnLogin:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop:20
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  },
  signupTextCont:{
    flexGrow : 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  signupButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }
});
