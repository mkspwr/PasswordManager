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
import {Actions} from 'react-native-router-flux';
import NumericInput from 'react-native-numeric-input';

const{width: WIDTH }=Dimensions.get('window')
export default class Register extends Component<Props> {


  constructor(){
    super()
    this.state={
      showPass: true,
      press: false,
      username:'',
      email:'',
      intervalIsSet: false
    }
  }
  

  showPass=()=>{
    if(this.state.press=='false'){
      this.setState({showPass: false,press: true})
    } else{
      this.setState({showPass: true,press: false})
    }
  }

  login(){
    Actions.login()
  }



// componentDidMount(){
//     return fetch('http://10.12.248.37:3000/getData')
//       .then((response) => response.json())
//       .then((responseJson) => {
//
//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.data,
//         }, function(){
//
//         });
//
//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }

// componentWillUnmount() {
//     if (this.state.intervalIsSet) {
//       clearInterval(this.state.intervalIsSet);
//       this.setState({ intervalIsSet: null });
//     }
//   }

// putDataToDB = message => {
//     let currentIds = this.state.data.map(data => data.id);
//     let idToBeAdded = 0;
//     while (currentIds.includes(idToBeAdded)) {
//       ++idToBeAdded;
//     }
//
//     axios.post("http://localhost:3000/api/putData", {
//       id: idToBeAdded,
//       message: message
//     });
//   };


updateValue(text,field){
  if(field=='username'){
    this.setState({
      username:text
    })
  }
  else if(field=='email'){
    this.setState({
      email:text
    })
  }
    else if(field=='password'){
      this.setState({
        password:text
      })
    }
      else if(field=='phone'){
        this.setState({
          phone:text
        })
  }
}
submit(){
    let collection={}
    collection.username=this.state.username,
    collection.email=this.state.email,
    collection.password=this.state.password,
    collection.phone=this.state.phone
      // console.warn(collection);





fetch("http://10.12.248.37:3000/Reg/add", {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(collection), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));

}
  render() {



    return (

      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>DSAP</Text>

        </View>



        <View style={styles.inputContainer}>




          <TextInput
              style={styles.input}

            placeholder={'Username'}
            onChangeText={(text) => this.updateValue(text,'username')}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'

            />


                <TextInput
                style={styles.input}
                placeholder={'Email'}
                  onChangeText={(text) => this.updateValue(text,'email')}
                  placeholderTextColor={'rgba(255,255,255,0.7)'}
                  underlineColorAndroid='transparent'
                  />
                  <TextInput
                  style={styles.input}
                    placeholder={'Password'}
                    onChangeText={(text) => this.updateValue(text,'password')}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    underlineColorAndroid='transparent'
                    />
                    <TextInput
                    style={styles.input}

                      placeholder={'Phone Number'}
                      onChangeText={(text) => this.updateValue(text,'phone')}
                      placeholderTextColor={'rgba(255,255,255,0.7)'}
                      underlineColorAndroid='transparent'
                      keyboardType={'numeric'}
                      />







      </View>





                  <TouchableOpacity
                  onPress={() => this.submit()}
                  style={styles.btnLogin}>
                  <Text style={styles.text}>Register</Text>

                  </TouchableOpacity>
                  <View style={styles.signupTextCont}>
                  <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}>Already Registered? SignIn</Text></TouchableOpacity>
                  </View>

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
    marginTop: 10,
    marginBottom:10
    },

  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    marginBottom:10
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
