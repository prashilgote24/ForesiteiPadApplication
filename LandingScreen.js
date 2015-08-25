/**
 * Created by synerzip on 24/08/15.
 */
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
    Navigator
    } = React;

//var {
//    ReactChart
//    } = require('NativeModules');
var BUTTONS = [
    'Supervisor View',
    'Inventory Control',
    'Admin',
    'Logout',
    'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;


var TopBar = require('./Common/TopBar');
var Dashboard = require('./Dashboard');
var ActionSheetIOS = require('ActionSheetIOS');


class LandingScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    showActionSheet() {
        console.log("Action Sheet Call");
        ActionSheetIOS.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
            },
            (buttonIndex) => {
            if(buttonIndex == 0){

            }else if(buttonIndex == 1){

            }
        });
        console.log("Action Sheet Call-End");
    }
    _renderScene(route, navigator){
        this.navigator = navigator;
        if(route.index == 0){
            return (<Dashboard />);
        }else if(route.index == 1){
            var MapViewScreen = require('./MapViewScreen');
            return (<MapViewScreen />);
        }
    }
    onViewChange(index){
        if(index == 0){
            this.navigator.pop();
        }else{
            this.navigator.push({name: 'Map', index: 1});
        }
    }
    render(){
        //StatusBarIOS.setStyle('light-content');

        return (

                <View style={styles.container}>
                    <TopBar onViewChange={this.onViewChange.bind(this)} actionSheetCall={this.showActionSheet.bind(this)}/>
                    <View style={styles.separator}><Text>{''}</Text></View>
                    <Navigator
                        initialRoute={{name: 'Dashboard', index: 0}}
                        renderScene={(route, navigator)=>{
                            return this._renderScene(route, navigator)
                        }}/>
                </View>
            );
        }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9',
        padding:25,
        paddingLeft:5,
        paddingRight:5
    },
    separator:{
        backgroundColor:'#F99426',

        height:2
    },
});

module.exports = LandingScreen;

