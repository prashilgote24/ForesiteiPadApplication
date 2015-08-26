/**
 * Created by synerzip on 26/08/15.
 */

'use strict';

var React = require('react-native');
var {
    ScrollView,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    StatusBarIOS,
    TouchableOpacity,
    ActivityIndicatorIOS
    } = React;

class LoadMoreIndicator extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <View style={styles.loadingContainer}>
                    <ActivityIndicatorIOS
                        animating={true}
                        style={[styles.loading, {height: 30}]}
                        size="small" />
            </View>
        );
    }

}

var styles = StyleSheet.create({
    loadingContainer:{
        height:20,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',

    },
    loadLabelBox:{
      flex:1,
      alignSelf:'center',
    },
    loadMoreText:{
        color:"#777777"
    }
});

module.exports = LoadMoreIndicator;
