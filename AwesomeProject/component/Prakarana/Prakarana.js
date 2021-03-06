import React from 'react';
import { View, Image, Text } from 'react-native';
import prakaranaVinyasa from './Prakarana.Styles';

const Prakarana = (props) => (
  <View style={prakaranaVinyasa.container}>
    <Image source={{ uri: props.picture.large}} style={prakaranaVinyasa.photo} />
    <Text style={prakaranaVinyasa.text}>
      {`${props.name.first} ${props.name.last}`}
    </Text>
  </View>
);

export default Prakarana;