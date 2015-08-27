/**
 * Created by synerzip on 21/08/15.
 */
'use strict';

var React = require('react-native');
var {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBarIOS,
    ActivityIndicatorIOS
    } = React;


var PortraitLoginScreen = require('./PortraitLoginScreen');
//var Orientation = require('react-native-orientation');
var Keychain = require('react-native-keychain');

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyChainLoaded:false,
            loggedIn:false
        };
    }
    componentWillMount(){

    }
    renderLoadingView(){
        return (
            <View style={styles.maskContainer}>
                <ActivityIndicatorIOS
                    animating={true}
                    style={[styles.loadingIndicator,{height: 80}]}
                    size="large" />
            </View>
        );
    }
    componentDidMount(){
            Keychain
                .getGenericPassword()
                .then((credentials)=> {
                    console.log('Credentials successfully loaded for user ' + credentials.username +" : "+credentials.password);
                    this.setState({keyChainLoaded:true,loggedIn:true});
                })
                .catch((err) => {
                    console.log('Credentials not available....');
                    this.setState({keyChainLoaded:true,loggedIn:false});
                });
    }
    resetPassword(){
        Keychain
            .resetGenericPassword()
            .then(function() {
                console.log('Credentials successfully deleted');
            });
    }
    render(){
       if(!this.state.keyChainLoaded){
            return (this.renderLoadingView());
       }

        return (
           <PortraitLoginScreen loggedIn={this.state.loggedIn}/>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#263238',
        padding:25,
        paddingLeft:5,
        paddingRight:5
    },
    separator:{
        backgroundColor:'#37474f',

        height:1
    },
    maskContainer:{
        flex:1,
        justifyContent:'center'
    },
    loadingIndicator:{
        alignSelf:'center'
    },
});

module.exports = LoginScreen;
