import React, { Component } from 'react';
import { View, Text} from 'react-native';

import Desc from './src/cmp/desc';
import Map from './src/cmp/map';

class App extends Component {
  render () {
    return(
      <View>
        <Desc/>
      </View>
    )
  }
}
export default App;