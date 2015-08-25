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
    StatusBarIOS
    } = React;


var PortraitLoginScreen = require('./PortraitLoginScreen');
var Orientation = require('react-native-orientation');

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    _orientationDidChange(orientation) {
        console.log(orientation);
        if(orientation == 'LANDSCAPE'){
            //do something with landscape layout
        }else{
            //do something with portrait layout
        }
    }
    componentDidMount(){
       //Orientation.lockToPortrait(); //this will lock the view to Portrait
        //Orientation.lockToLandscape(); //this will lock the view to Landscape
        //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations

        //Orientation.addOrientationListener(this._orientationDidChange);
    }
    componentWillUnmount() {
        //Orientation.removeOrientationListener(this._orientationDidChange);
    }
    render(){
       //StatusBarIOS.setStyle('light-content');

        return (
           <PortraitLoginScreen />
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
});

module.exports = LoginScreen;
