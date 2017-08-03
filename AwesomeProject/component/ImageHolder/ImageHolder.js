import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ImageHolder.Styles';

export default class ImageHolder extends Component {
  render() {
    return (
      <image src={this.props.pick} style={styles.dimensions}/>
    );
  }
};

ImageHolder.propTypes = {
  pick : PropTypes.string.isRequired
};
