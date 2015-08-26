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
        this.startIndex = 0;
        this.offset = 0;
        this.currentDataArray = [];

        this.state = {
            dataSource: new ListView.DataSource({
                    rowHasChanged: (row1, row2) =>  row1 !== row2,
             }),
             listLoaded:false,
             scrollEnable:true,
             loading:false,
             canLoadMore:false
        }
    }
    calculateCanLoadMore(dataObject){
        this.totalRecord = dataObject.totalRecord;
        this.startIndex = dataObject.startIndex;
        this.offset = dataObject.offset;
        this.currentDataArray = dataObject.data;
        var canLoadMore = false;
        if((this.startIndex + this.offset) >= this.totalRecord){
            canLoadMore = false;
        }else{
            canLoadMore = true;
        }
        return canLoadMore;
    }
    componentDidMount(){
        var interval = setInterval(()=>{
            clearInterval(interval);

            var canLoadMore = this.calculateCanLoadMore(outdatedData);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(outdatedData.data),
                listLoaded:true,
                canLoadMore:canLoadMore
            });

            },100);

    }
    onSelected(data){

    }
    onScroll(){

    }
    loadMore(){
        if(this.state.loading || !this.state.canLoadMore){
            return;
        }
        this.setState({loading:true});
        //Send eq for:
        var startIndexInReq = this.startIndex + this.offset;
        var offset = this.offset;

        //Dummy Data
        var dataArray = [];
        for(var index=startIndexInReq, dataIndex = 0; dataIndex < offset && index < this.totalRecord; index++,dataIndex++){
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
            startIndex:startIndexInReq,
            offset:10,
            data:this.currentDataArray.concat(dataArray)
        };
        console.log("startIndexInReq:"+startIndexInReq);
        console.log("offset:"+offset);
        console.log("this.totalRecord:"+this.totalRecord);
        console.log("this.currentDataArray:"+this.currentDataArray);

        var interval = setInterval(()=>{
                clearInterval(interval);

                var canLoadMore = this.calculateCanLoadMore(result);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.data),
                    loading:false,
                    canLoadMore:canLoadMore
                });

            },1000);


    }
    renderData(data){
        return (
            <TouchableHighlight style={{flex:1}} onPress={this.onSelected.bind(this,data)}>
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
            </TouchableHighlight>
        );
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
    render(){
        if(!this.state.listLoaded){
            return this.renderLoadingView();
        }
        return (
            <View style={styles.container}>
                <ListView
                onScroll={this.onScroll.bind(this)}
                dataSource={this.state.dataSource}
                onEndReached={this.loadMore.bind(this)}
                renderRow={this.renderData.bind(this)}
                style={styles.listView}
                automaticallyAdjustContentInsets={false}
                contentInset={{bottom:0}}
                scrollEventThrottle={300}
                onEndReachedThreshold={2}
                directionalLockEnabled={true}
                canCancelContentTouches={true}
                />
                {
                    this.state.loading ?
                    <LoadMoreIndicator/>
                :<View></View>
                }

            </View>
        );
    }

}

var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"transparent"
    },
    maskContainer:{
        flex:1,
        justifyContent:'center'
    },
    loadingIndicator:{
        alignSelf:'center'
    },
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