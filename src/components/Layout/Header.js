import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    height: 80,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}
 
export default Header;