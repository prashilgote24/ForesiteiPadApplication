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
    TouchableOpacity,
    MapView
    } = React;

class MapViewScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mapRegion: null,
            mapRegionInput: null,
            annotations: null,
            isFirstLoad: true,
        }
    }
    _getAnnotations(region) {
        return [{
            longitude: region.longitude,
            latitude: region.latitude,
            title: 'You Are Here',
        }];
    }

    _onRegionChange(region) {
        this.setState({
            mapRegionInput: region,
        });
    }

    _onRegionChangeComplete(region) {
        if (this.state.isFirstLoad) {
            this.setState({
                mapRegionInput: region,
                annotations: this._getAnnotations(region),
                isFirstLoad: false,
            });
        }
    }

    _onRegionInputChanged(region) {
        this.setState({
            mapRegion: region,
            mapRegionInput: region,
            annotations: this._getAnnotations(region),
        });
    }
    render (){
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    onRegionChange={this._onRegionChange.bind(this)}
                    onRegionChangeComplete={this._onRegionChangeComplete.bind(this)}
                    pitchEnabled={true}
                    annotations={[{
                            latitude: 45.65,
                            longitude: -78.90,
                        animateDrop:true,
                        hasRightCallout:true,
                            title: 'Chicago-2765',
                            subtitle: '1234 Foo Drive'
                    }]}/>
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
    map: {
        flex: 1,
    },

});

module.exports = MapViewScreen;
