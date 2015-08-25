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
    StatusBarIOS,
    TouchableOpacity
    } = React;

var RuleStatusBox = require('./RuleStatusBox');
var RNChart = require('react-native-chart');
var TopBar = require('./Common/TopBar');
var ActionSheetIOS = require('ActionSheetIOS');

var chartData = [
    {
        name:'BarChart',
        type:'bar',
        color:'#cfd8dc',
        widthPercent:0.6,
        data:[
            30, 40, 25, 25, 35, 15, 21,
        ]
    },
    {
        name:'LineChart',
        type:'bar',
        color:'#00e676',
        widthPercent:0.3,
        showDataPoint:false,
        data:[
            10, 12, 14, 20, 31, 10, 10
        ]
    }
];

var xLabels = ['UNL','PRE','DSL','PNL','AVG','DEF','GEN'];

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        //StatusBarIOS.setStyle('light-content');

        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <View style={styles.orgInfo}>
                        <View style={styles.inventoryDetail}>
                            <View style={styles.detailLine}>
                                <Text style={[styles.capacityValue,{color:'#3498db'}]}>1,300</Text>
                                <Text style={[styles.unit,{color:'#3498db'}]}>Sites</Text>
                            </View>
                            <View style={styles.detailLine}>
                                <Text style={styles.capacityValue}>55,0000,000</Text>
                                <Text style={styles.unit}>Capacity</Text>
                            </View>
                            <View style={styles.detailLine}>
                                <Text style={[styles.capacityValue,{color:'#00e676'}]}>55,00,000</Text>
                                <Text style={[styles.unit,{color:'#00e676'}]}>Inventory</Text>
                            </View>
                            <View style={styles.detailLine}>
                                <Text style={[styles.capacityValue,{color:'#aed581'}]}>5,00,00</Text>
                                <Text style={[styles.unit,{color:'#aed581'}]}>Ullage</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.chartBox}>
                        <RNChart style={styles.chart}
                        labelFontSize="5"
                        chartData={chartData}
                        verticalGridStep="5"
                        gridColor='#cfd8dc'
                        gridLineWidth={0.4}
                        xLabels={xLabels}>
                            </RNChart>
                    </View>
                </View>

                <View style={styles.centerBox}>

                        <View>
                        <RuleStatusBox ruleName="Runout" status={1} siteStatusCount={{
                            'warning':800,
                                'normal':200
                        }}/>
                        <RuleStatusBox ruleName="Retain" status={2} siteStatusCount={{
                            'severe':300,
                                'warning':200,
                                'normal':500
                        }}/>
                        <RuleStatusBox ruleName="Delivery Late" status={0} siteStatusCount={{
                            'normal':1000
                        }}/>
                        <RuleStatusBox ruleName="Delivery Early" status={1} siteStatusCount={{
                            'warning':600,
                                'normal':400
                        }}/>
                        <RuleStatusBox ruleName="Low Inventory" status={3} siteStatusCount={{
                            'unknown':580,
                                'severe':300,
                                'warning':20,
                                'normal':100
                        }}/>
                        <RuleStatusBox ruleName="High Inventory" status={2} siteStatusCount={{
                            'severe':200,
                                'warning':600,
                                'normal':200
                        }}/>
                        <RuleStatusBox ruleName="Water level" status={1} siteStatusCount={{
                            'warning':900,
                                'normal':100
                        }}/>
                        <RuleStatusBox ruleName="Manifold" status={2} siteStatusCount={{
                            'severe':200,
                                'warning':200,
                                'normal':600
                        }}/>
                        </View>
                        <View style={styles.outdatedSection}>
                            <View style={styles.outdatedHeaderSection}>
                                <View style={styles.headerLabel}>
                                    <Text style={styles.header}>Outdated</Text>
                                </View>
                                <View style={styles.headerTool}>
                                    <TouchableOpacity>
                                        <Image source={require('image!share')}
                                            style={styles.toolButton}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.outdatedList}>
                            </View>
                        </View>


                </View>
                <View style={styles.bottomBox}>
                    <View style={styles.outdatedSection}>
                        <View style={styles.outdatedHeaderSection}>
                            <View style={styles.headerLabel}>
                                <Text style={styles.header}>Critical Sites</Text>
                            </View>
                            <View style={styles.headerTool}>
                                <TouchableOpacity>
                                    <Image source={require('image!share')}
                                    style={styles.toolButton}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.outdatedList}>
                        </View>
                    </View>
                </View>
            </View>
            );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F9F9F9',
        paddingLeft:5,
        paddingRight:5
    },
    topBox:{
        height:250,
        flexDirection:'row'
    },
    centerBox:{
        height:300,
        padding:5,
        backgroundColor:'transparent',
        flexDirection:'row'
    },
    outdatedSection:{
        backgroundColor:'transparent',
        flex:1,
        paddingTop:5,
    },
    outdatedHeaderSection:{
        backgroundColor:'#eeeeee',
        alignSelf:'stretch',
        flexDirection:'row'
    },
    outdatedList:{
        backgroundColor:'transparent',
        flex:1
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
    bottomBox:{
        flex:1,
        padding:5,
        backgroundColor:'transparent'

    },
    orgInfo:{
        flex:0.2,
    },

    detailLine:{
        paddingTop:0,
        paddingLeft:5,
        alignSelf:'flex-end'
    },
    valueBox:{
        alignSelf:'flex-start',
    },
    unitBox:{
        alignSelf:'flex-end'
    },
    separator:{
        backgroundColor:'#37474f',

        height:1
    },
    inventoryDetail:{
        marginTop:5,
        flex:1,
        alignSelf:'flex-start'
    },
    orgName:{
        color:'#FFFFFF',
        fontSize:12,
    },
    poweredBy:{
        color:'#9e9e9e',
        fontSize:4,

    },
    capacityValue:{
        color:'#cfd8dc',
        fontSize:25,
        fontWeight:'bold'
    },
    unit:{
        color:'#cfd8dc',
        fontSize:12,
        textAlign:'right',
        paddingTop:0,
    },
    chartBox:{
        flex:0.8

    },

    shareScroll:{
        flex:1,
        backgroundColor:'transparent'
    },
    scrollContent:{
        flex:1,

    },
    chart: {
        position: 'absolute', top: 16, left: 4, bottom: 4,right: 16
    },


});

module.exports = Dashboard;
