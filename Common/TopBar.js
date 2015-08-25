/**
 * Created by synerzip on 22/08/15.
 */
'use restrict';
var React = require('react-native');
var {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    StatusBarIOS,
    SegmentedControlIOS,
    LayoutAnimation,
    TouchableOpacity
    } = React;

class TopBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logoWidth:0,
            logoHeight:0
        }
    }
    componentDidMount() {
        var interval = setInterval(()=>{
                clearInterval(interval);
        LayoutAnimation.linear();
        this.setState({
            logoWith: 100,
            logoHeight:25
            });
        },100);

    }
    _onChange(event) {
        this.props.onViewChange(event.nativeEvent.selectedSegmentIndex);

    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.orgDetail}>
                    <Image source={require('image!logo')} style={{width:this.state.logoWidth},{height:this.state.logoHeight}}/>
                </View>
                <View style={[{width:200},{margin: 10},{marginTop:0}]}>
                    <SegmentedControlIOS onChange={this._onChange.bind(this)} tintColor="#3892D3" values={['Dashboard', 'Map']} selectedIndex={0} />
                 </View>
                <View style={styles.logOut}>
                    <TouchableOpacity onPress={this.props.actionSheetCall} style={[styles.logOut,{flex:1}]}>
                     <Image source={require('image!menu')} style={styles.logOutIcon}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        backgroundColor:'transparent',
        height:30,
        flexDirection:'row',
        marginBottom:5,
        alignSelf:'stretch',
        justifyContent:'flex-end',
        paddingBottom:5,
    },
    orgDetail:{
        padding:5,
        position:'absolute',
        left:0,
        borderWidth:1,
        borderColor:"#01579b",
        backgroundColor:'#01579b',
        borderRadius:4
    },
    logOut:{
        alignSelf:'flex-end',
        padding:5,
        paddingTop:0,
        paddingBottom:0
    },
    logOutIcon:{
        width:25,
        height:25,

    },
    logoImg:{
        width:100,
        height:25,

    },
});

module.exports = TopBar;
