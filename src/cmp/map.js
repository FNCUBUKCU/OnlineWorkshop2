import React, { Component } from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default class Map extends Component{
    render() {
        return(
            <MapView
                style={{height:'100%'}}
                provider={PROVIDER_GOOGLE}
                region= {{
                    latitude:62,
                    longitude:-6.775,
                    latitudeDelta:1,
                    longitudeDelta:1,
                }}>
                <Marker
                    coordinate={{latitude:62,longitude:-6.775,}}
                    pinColor='RED'>
                </Marker>
            </MapView>
        );
    }
}
