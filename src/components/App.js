import React from 'react';
import { View } from 'react-native';
import Header from './Layout/Header';
import AlbumList from './Album/AlbumList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums!'}/>
    <AlbumList />
  </View>
)
 
export default App;