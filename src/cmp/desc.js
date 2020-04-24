import React, { Component } from 'react';
import {ScrollView, Image, StyleSheet, Text} from 'react-native';

class Desc extends Component{
    render() {
        const {text, img, wrapper} =styles;
        return(
            <ScrollView style={wrapper}>
                <Image source={require('../img/ss.jpg')} style={img}/>
                <Text style={text} > Northern lights, or Polar auroras, are natural radiations that appear in the sky in the Arctic regions, resulting from the interaction of earth's magnetic field and charged particles from the Sun. In northern latitudes, this effect is called Aurora Borealis or northern lights. The formation in the southern latitudes, Aurora Australis (southern polar lights), has similar properties. However, in Antarctica, South America and Australia, they can be seen from higher latitudes. These glows are usually observed at night, mainly occur in the ionosphere. This phenomenon commonly appears between 60 and 72 degrees north and south latitudes, which falls into the arctic and antarctic polar circles. The probability of the appearance of Aurora borealis increases as it approaches the north magnetic pole. The auroras formed near the magnetic pole are illuminated exactly 90 degrees, but in the distance they illuminate the northern horizon with a greenish glow, sometimes with a pale red as if the sun was rising from an unconventional direction. Northern lights, or Polar auroras, are natural radiations that appear in the sky in the Arctic regions, resulting from the interaction of earth's magnetic field and charged particles from the Sun. In northern latitudes, this effect is called Aurora Borealis or northern lights. The formation in the southern latitudes, Aurora Australis (southern polar lights), has similar properties. However, in Antarctica, South America and Australia, they can be seen from higher latitudes. These glows are usually observed at night, mainly occur in the ionosphere. This phenomenon commonly appears between 60 and 72 degrees north and south latitudes, which falls into the arctic and antarctic polar circles. The probability of the appearance of Aurora borealis increases as it approaches the north magnetic pole. The auroras formed near the magnetic pole are illuminated exactly 90 degrees, but in the distance they illuminate the northern horizon with a greenish glow, sometimes with a pale red as if the sun was rising from an unconventional direction.</Text>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:'#c7dee0'
    },
    text: {
        margin:20,
        padding:15,
        fontSize:16,
        color:'black'
    },
    img: {
        margin:50
    }
})
export default Desc;