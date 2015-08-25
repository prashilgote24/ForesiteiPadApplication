/**
 * Created by synerzip on 24/08/15.
 */
'use strict';

var React = require('react-native');
var {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    LayoutAnimation,
    ActivityIndicatorIOS,
    StatusBarIOS,
    TextInput
    } = React;

var LandingScreen = require('./LandingScreen');
class PortraitLoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logoWith: 0,
            logoHeight:0,
            isLoading: false,
            loggedIn:false,
            error:false,
            employeeId:null,
            password:null,
            errorMsg:''
        };
    }
    validate(){
        if(this.state.employeeId == null || this.state.employeeId == '' || this.state.employeeId == '111'){
            this.setState({error: true,errorMsg:'Invalid Employee Id'});
            return false;

        }else if(this.state.password == null || this.state.password == ''){
            this.setState({error: true,errorMsg:'Invalid Password'});
            return false;

        }
        return true;
    }
    handleLogin(){

        if(this.validate()) {
            this.setState({isLoading: true,error:false});
            var interval = setInterval(()=>{
                    clearInterval(interval);
            //console.log(new Buffer(this.state.employeeId).toString('base64'));
            this.setState({isLoading: false,loggedIn:true});
                },300);
        }
    }
    onEmpIdChange(event){
        this.setState({employeeId: event.nativeEvent.text});
    }
    onPasswordChange(event){
        this.setState({password: event.nativeEvent.text});
    }
    onPasswordDone(){
        if(this.state.employeeId == null || this.state.employeeId == ''){
            this.refs.empId.focus();
        }else if(this.state.password == null || this.state.password == ''){
            this.setState({error: true,errorMsg:'Invalid Password'});
            this.refs.password.focus();
        }else{
            this.handleLogin();
        }
    }
    onEmpIdDone(){
        this.refs.password.measure((ox, oy, width, height, px, py) => {
            this.refs.password.focus();
            //this.refs.scrollScreen.contentOffset = {x:px, y: py} ;
        });

    }
    componentDidMount() {
        var interval = setInterval(()=>{
                clearInterval(interval);
                LayoutAnimation.easeInEaseOut();
                this.setState({
                    logoWith: 256,
                    logoHeight:65
                });
            },100);

    }
    render(){
        if(this.state.loggedIn){
            return (<LandingScreen />);
        }
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('image!logobig')}
                        style={{width:this.state.logoWith},{height:this.state.logoHeight}}/>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.loginBoxContainer}>

                    <View style={styles.flowRight}>
                        <TextInput style={styles.searchInput} placeholder='User Name'  editable={true} clearButtonMode="always"
                        clearTextOnFocus={false}
                        enablesReturnKeyAutomatically={true}
                        keyboardType="default"
                        ref="empId"
                        returnKeyType="next"
                        onEndEditing={this.onEmpIdDone.bind(this)}
                        initialValue={this.state.employeeId} onChange={this.onEmpIdChange.bind(this)}/>
                    </View>
                    <View style={styles.flowRight}>
                        <TextInput style={styles.searchInput} placeholder='Password' password={true} editable={true}
                        clearTextOnFocus={false}
                        clearButtonMode="always"
                        returnKeyType="go"
                        onEndEditing={this.onPasswordDone.bind(this)}
                        ref="password"
                        initialValue={this.state.password}
                        onChange={this.onPasswordChange.bind(this)}/>
                    </View>
                </View>
                {this.state.error ?
                    <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{this.state.errorMsg}</Text>
                    </View> : <Text></Text>
                }

                <View style={styles.centering}>
                        <ActivityIndicatorIOS
                        animating={this.state.isLoading}
                        style={[styles.loading, {height: 80}]}
                        size="large" />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Product by Fuelquest.com</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9',
        padding:40,
        paddingLeft:5,
        paddingRight:5

    },
    logoContainer:{
        flex:0.3,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5
    },
    separator:{
        backgroundColor:'#37474f',
        height:1,
    },
    loginBoxContainer:{
        flex:0.8,
        justifyContent:'center',
        marginTop:100,
        alignItems:'center',
        borderWidth:0.5,
        borderColor:"#90a4ae",
        width:500,
        alignSelf: 'center',
        padding:30,
        paddingTop:0,
        backgroundColor:"#37474f"
    },

    signinLabelBox:{

    },
    signinText:{
        fontSize:20,
        color:'#FFFFFF'
    },
    flowRight:{
        marginTop:0,
        alignSelf:'flex-start'
    },
    searchInput: {
        height: 40,
        padding: 4,
        marginTop:10,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#E8E7E7',
        alignSelf: 'stretch',
        justifyContent: 'center',
        color: '#263238',
        borderRadius:3,
        backgroundColor:'#FFFFFF',
        width:400
    },
    errorBox:{
        height: 36,
        width:400,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 8,
        marginTop:10,
        marginBottom:0,
        marginLeft:20,
        marginRight:20,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    errorText:{
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'
    },
    centering:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    loading:{
        alignSelf: 'center'
    },
    footerText:{
        fontSize: 17,
        color: '#CCCCCC',
        alignSelf: 'center',
    },
    footer:{
        position:'absolute',
        bottom:10,
        left:0,
        right:0,
        flex:1,
        padding:10,
    }

});

module.exports = PortraitLoginScreen;
