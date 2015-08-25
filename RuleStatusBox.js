/**
 * Created by synerzip on 23/08/15.
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
    TouchableOpacity,
    TouchableHighlight
    } = React;

class RuleStatusBox extends React.Component{

    render(){
        //var statusIocn = <Image source={require('image!redball')} style={styles.ruleStatusIcon}/>;
        //if(this.props.status == 3){
        //    statusIocn = <Image source={require('image!grayball')} style={styles.ruleStatusIcon}/>;
        //}else if(this.props.status == 1){
        //    statusIocn = <Image source={require('image!yellowball')} style={styles.ruleStatusIcon}/>;
        //}else if(this.props.status == 0){
        //    statusIocn = <Image source={require('image!greenball')} style={styles.ruleStatusIcon}/>;
        //}

        //Other status count box

        var otherStatusCountBox = null;
            if(this.props.status == 3){
                otherStatusCountBox = <View style={styles.siteCountBox}>

                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#bdbdbd'},{borderColor:"#bdbdbd"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                    <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst,{ fontSize:20}]}>500</Text>
                                                        <Text style={[styles.siteLabel,{fontSize:10}]}>Sites</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#f90000'},{borderColor:"#f90000"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                    <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst,{ fontSize:20}]}>500</Text>
                                                        <Text style={[styles.siteLabel,{fontSize:10}]}>Sites</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#ffff51'},{borderColor:"#ffff51"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                <View style={styles.countStatusBox}>
                                                    <Text style={[styles.siteCountWorst,{color:'#777777'},{ fontSize:20}]}>500</Text>
                                                    <Text style={[styles.siteLabel,{color:'#777777'}, {fontSize:10}]}>Sites</Text>
                                                </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#00e676'},{borderColor:"#00e676"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                <View style={styles.countStatusBox}>
                                                    <Text style={[styles.siteCountWorst,{ fontSize:20}]}>500</Text>
                                                    <Text style={[styles.siteLabel, {fontSize:10}]}>Sites</Text>
                                                </View>
                                                </TouchableOpacity>
                                            </View>

                                    </View>;
            }else if(this.props.status == 2){
                otherStatusCountBox = <View style={styles.siteCountBox}>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#f90000'},{borderColor:"#f90000"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                    <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst]}>500</Text>
                                                        <Text style={[styles.siteLabel]}>Sites</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#ffff51'},{borderColor:"#ffff51"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                    <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst,{color:'#777777'}]}>500</Text>
                                                        <Text style={[styles.siteLabel,{color:'#777777'}]}>Sites</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#00e676'},{borderColor:"#00e676"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                    <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst]}>500</Text>
                                                        <Text style={[styles.siteLabel]}>Sites</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                    </View>;
            }
            if(this.props.status == 1){
                otherStatusCountBox = <View style={styles.siteCountBox}>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#ffff51'},{borderColor:"#ffff51"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                    <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst,{color:'#777777'}]}>500</Text>
                                                        <Text style={[styles.siteLabel,{color:'#777777'}]}>Sites</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={[styles.otherStatus1CountBox,{backgroundColor:'#00e676'},{borderColor:"#00e676"}]}>
                                                <TouchableOpacity style={{flex:1}}>
                                                <View style={styles.countStatusBox}>
                                                        <Text style={[styles.siteCountWorst]}>500</Text>
                                                        <Text style={[styles.siteLabel]}>Sites</Text>
                                                </View>
                                                </TouchableOpacity>
                                            </View>
                                     </View>;
            }
            if(this.props.status == 0){
                otherStatusCountBox = <View style={styles.siteCountBox}>
                                        <View style={[styles.otherStatus1CountBox,{backgroundColor:'#00e676'},{borderColor:"#00e676"}]}>
                                            <TouchableOpacity style={{flex:1}}>
                                                <View style={styles.countStatusBox}>
                                                    <Text style={[styles.siteCountWorst]}>500</Text>
                                                    <Text style={[styles.siteLabel]}>Sites</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>;
            }

        return (
            <View style={styles.ruleBox}>
                <View style={styles.ruleNameView}>
                    <Text style={styles.ruleName}>{this.props.ruleName}</Text>
                </View>
                {otherStatusCountBox}

            </View>
        );
    }
}

var styles = StyleSheet.create({
    ruleBox:{
        flex:1,
        margin:5,
        marginLeft:0,
        height:170,
        flexDirection:'row',

    },

    ruleNameView:{
        width:130,
        backgroundColor:'#eeeeee',
        height:30,
        justifyContent:'center',



    },
    ruleName:{
        color:"#777777",
        fontSize:17,
        paddingLeft:5
    },
    redBox:{
        alignSelf:'flex-end'
    },
    ruleStatusIcon:{
        width:16,
        height:16,
    },
    statusValue:{
        color:"#FFFFFF",
        fontSize:12
    },
    siteCountBox:{
        width:320,
        flexDirection:'row',
    },
    countStatusBox:{
        flex:1,
        flexDirection:'row',
        paddingLeft:10,
        alignSelf:'stretch'

    },

    siteCountWorst:{
        color:'#FFFFFF',
        fontSize:20,
        alignSelf:'stretch'
    },
    siteLabel:{
        color:'#FFFFFF',
        fontSize:10,
        alignSelf:'center',
        paddingLeft:2
    },

    otherStatus1CountBox:{
        flex:1,
        marginLeft:5,
        flexDirection:'row',
        borderWidth:1,
        borderRadius:2,
        borderColor:"#f90000",
        height:30,
        alignSelf:'stretch'

    }
});

module.exports = RuleStatusBox;
