/**
 * Created by synerzip on 26/08/15.
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

class DataGrid extends React.Component{
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
    loadData(startIndex){
            this.props.loadData(startIndex,(dataObject)=>{
                var canLoadMore = this.calculateCanLoadMore(dataObject);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataObject.data),
                    listLoaded:true,
                    canLoadMore:canLoadMore,
                    loading:false
                });
            });
    }
    componentDidMount(){
        var interval = setInterval(()=>{
                clearInterval(interval);
                this.loadData(0);
        },100);

    }
    onSelected(data){
        this.props.onSelected(data);
    }
    onScroll(){

    }
    loadMore(){
        if(this.state.loading || !this.state.canLoadMore){
            return;
        }
        this.setState({loading:true});

        //Ask to get more data
        var startIndexInReq = this.startIndex + this.props.offset;
        var offset = this.offset;
        this.loadData(startIndexInReq,offset);
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
    renderData(data){
        return (
            <TouchableHighlight style={{flex:1}} onPress={this.onSelected.bind(this,data)}>
                {this.props.renderData(data)}
            </TouchableHighlight>
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

});

module.exports = DataGrid;