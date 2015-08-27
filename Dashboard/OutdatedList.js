/**
 * Created by synerzip on 25/08/15.
 */
'use strict';
var React = require('react-native');
var{
    ScrollView,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    StatusBarIOS,
    TouchableOpacity,
    TouchableHighlight,
    ActivityIndicatorIOS
    } = React;

var LoadMoreIndicator = require('../Common/LoadMoreIndicator');
var DataGrid = require('../Common/DataGrid');

var outdatedData = {
    totalRecord:25,
    startIndex:0,
    offset:10,
    data:[
        {
            siteName:'Baltimore #1234',
            siteId:1,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1235',
            siteId:2,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1236',
            siteId:3,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1237',
            siteId:4,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1238',
            siteId:5,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },{
            siteName:'Baltimore #1234',
            siteId:6,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1235',
            siteId:7,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1236',
            siteId:8,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1237',
            siteId:9,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        },
        {
            siteName:'Baltimore #1238',
            siteId:10,
            lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
            staleHrs:'36 Hours',
            noOfOutdatedAssets:3
        }
    ]
};
class OutdatedList extends React.Component{
    constructor(props) {
        super(props);
        this.totalRecord = 0;
        this.offset = 10;
        this.currentDataArray = [];
    }

    componentDidMount(){

    }
    loadData(startIndex, callback){
        if(startIndex == 0){
            this.currentDataArray = outdatedData.data;
            this.totalRecord = outdatedData.totalRecord;
            callback(outdatedData);
        }else{
            //Dummy Data
            var dataArray = [];
            for(var index=startIndex, dataIndex = 0; dataIndex < this.offset && index < this.totalRecord; index++,dataIndex++){
                dataArray.push({
                    siteName:'New Baltimore Site #1234'+index,
                    siteId:index,
                    lastInventoryUpdateDate:'Aug 23 2015 12:45PM',
                    staleHrs:'36 Hours',
                    noOfOutdatedAssets:3
                });
            }

            var result = {
                totalRecord:25,
                startIndex:startIndex,
                offset:10,
                data:this.currentDataArray.concat(dataArray)
            };
            console.log("startIndexInReq:"+startIndex);
            console.log("offset:"+this.offset);
            console.log("this.totalRecord:"+this.totalRecord);
            console.log("this.currentDataArray:"+this.currentDataArray);

            var interval = setInterval(()=>{
                    clearInterval(interval);
                    this.currentDataArray = result.data;
                    this.totalRecord = result.totalRecord;
                    callback(result);

            },1000);
        }
    }
    onSelected(data){
        console.log(data);
    }


    renderData(data){
        return (
                <View style={{flex:1}}>
                    <View style={styles.rowContainer}>
                        <View style={styles.dataContainer}>
                            <View style={styles.siteNameBox}>
                                <Text style={styles.siteName}>{data.siteName}</Text>
                            </View>
                            <View style={styles.extraInfoBox}>
                                <View style={styles.inventoryDateBox}>
                                    <Text style={styles.inventoryDate}>{data.lastInventoryUpdateDate}</Text>
                                </View>
                                <View style={styles.staleHrsBox}>
                                    <Text style={styles.inventoryDate}>{data.staleHrs}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
        );
    }

    render(){

        return (
            <DataGrid loadData={this.loadData.bind(this)}
                      offset={10}
                      renderData={this.renderData}
                        onSelected={this.onSelected.bind(this)}/>
        );
    }

}

var styles = StyleSheet.create({
    rowContainer:{
        flex:1,
        backgroundColor:"#FFFFFF",
        flexDirection:'row',
        padding:7
    },
    goIconBox:{
        alignSelf:'flex-end',
        justifyContent:'center'
    },
    forwardIcon:{
        width:25,
        height:25,
        alignSelf:'center'
    },
    dataContainer:{
        flex:1
    },
    siteNameBox:{
        flex:1
    },
    siteName:{
        color:"#000000",
        fontSize:17
    },
    extraInfoBox:{
        flex:1,
        flexDirection:'row',
    },
    inventoryDateBox:{
        flex:1,
        alignSelf:'flex-start'
    },
    inventoryDate:{
        textAlign: 'left',
        color:'#9e9e9e'
    },
    staleHrsLabel:{
        textAlign: 'right',
        color:'#9e9e9e'
    },
    staleHrsBox:{
        alignSelf:'flex-end'
    },
    listView: {

        flex:1
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
});

module.exports = OutdatedList;