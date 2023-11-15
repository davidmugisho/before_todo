import react, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity,ImageBackground  } from "react-native";
import axios from 'axios';

const Signup = ({navigation}) => {

    // REACT HOOK
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    // Create a function to post the signup
    // Issues from Backend! Always the API return code 400
    const signupHandler = () => {

        axios.post('http://test.ecoforest.green/api/v1/auth/create-account', {
            full_name: fullName,
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                // setError(response)
            })
            .catch(function (error) {
                const {
                    data,
                    status,
                    statusText,
                } = error.response;

                console.log('error: ', data.message);
                setError(data.message)
            });
    }

    return (
        <ImageBackground
        blurRadius={5}
        source={{uri:'https://i.pinimg.com/564x/e0/f4/c3/e0f4c333452fba5ba5bd9a6d7c6ea455.jpg'}}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}}
        >
    
    <View style={{
        flex:1,
        // backgroundColor: '#eee',
        // flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    }} >


        <Text style={{color:'#00ffff', fontWeight:'bold', fontSize:20}}>
            welcome onboard!
        </Text>
        <Text style={{color:'#00ffff', fontWeight:'bold', fontSize:40, textAlign:'center', top:40}}> Lets help you in completing your tasks🐕</Text>

<View style={{
    backgroundColor:'#3D2B1F',
    top:30,
    width:250,
    borderRadius:10,
    alignItems:'center',
    padding: 10
}}>
        <View style={{ width:'100%' }}>
            <Text style={{color:'#808080', fontSize:17, top:'auto'}}>Full Name</Text>
            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setFullname}
                value={fullName}
                placeholder="Mary Eliot"
            />

            <Text style={{color:'#808080', fontSize:17, top:'auto'}}>Email</Text>

            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setEmail}
                value={email}
                placeholder="mary.elliot@mail.com"
            />


            <Text style={{color:'#808080', fontSize:17, top:'auto'}}>Password</Text>

            <TextInput
                style={{
                    padding: 10,
                    borderRadius: 15,
                    backgroundColor: '#fff',
                    width: '100%',
                    fontWeight: 'bold'
                }}
                onChangeText={setPassword}
                value={password}
                placeholder="*********"
                secureTextEntry
            />
            </View>

            {/* TODO : confirmPassword */}
            <Text style={{ color: 'red' }}>{error}</Text>
            <Button style={{ marginTop: 10 }} title="Sign up" onPress={() => {
                console.log('ok');
                signupHandler();
            }} ></Button>


            <TouchableOpacity onPress={() => {
                navigation.navigate('Login')
            }}
            >
                <Text style={{textAlign:'center'}}>Do you want to <Text 
                style={{
                    color:'red', fontStyle:"normal", fontSize:20 , fontWeight:'bold'
                }}>sign in? </Text></Text>

            </TouchableOpacity>


        </View>


    </View>
    </ImageBackground>
);
}

export default Signup;
