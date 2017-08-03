import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import styles from './FlexDirection.Styles';
import ImageHolder from '../ImageHolder/ImageHolder';

export default class FlexDirection extends Component {
  render() {
    return (
      <View style={styles.viewtop}>
        <View style={styles.viewinner1} >
          <ImageHolder pick={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}/>
        </View>
        <View style={styles.viewinner2} />
        <View style={styles.viewinner3} />
      </View>
    );
  }
};