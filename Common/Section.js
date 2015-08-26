/**
 * Created by synerzip on 25/08/15.
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
    TouchableOpacity
    } = React;

class Section extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <View style={styles.headerLabel}>
                        <Text style={styles.header}>{this.props.headerTitle}</Text>
                    </View>
                    <View style={styles.headerTool}>
                        <TouchableOpacity onPress={this.props.onShare}>
                            <Image source={require('image!share')}
                            style={styles.toolButton}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    {this.props.children}
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        backgroundColor:'transparent',
        flex:1,
        paddingTop:5,
    },
    headerSection:{
        backgroundColor:'#eeeeee',
        alignSelf:'stretch',
        flexDirection:'row'
    },
    headerLabel:{
        alignSelf:'flex-start',
        flex:1
    },
    header:{
        fontSize:17,
        color:"#777777",
        padding:5
    },
    headerTool:{
        alignSelf:'flex-end',
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
    },
    toolButton:{
        width:20,
        height:20,
        margin:5
    },
    content:{
        backgroundColor:'transparent',
        flex:1
    }
});

module.exports = Section;