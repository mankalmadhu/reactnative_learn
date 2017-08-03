import 'react-native';
import React from 'react';
import FlexDirection from './FlexDirection';
import {View, StyleSheet} from 'react-native';

import Renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

const ArticleTitle = props => (
  <span>ArticleTitle {JSON.stringify(props)}</span>
);


jest.mock('react-native', () => {
  const React = require('React');
  class View extends React.Component {
    render() {
      return React.createElement('View' , this.props.style);
    }
  } 
     
  return ({
   View: View,
   StyleSheet: {
      create: () => ({})
    }
  });
});

test("Flex Direction Render" , () => {
   const flexDircetion = Renderer.create(
       <FlexDirection/>
   ).toJSON();

   expect(flexDircetion).toMatchSnapshot();

});

test("Flex Direction Shallow Render" , () => {

   const shallowRenderer = new ShallowRenderer();
   shallowRenderer.render(<FlexDirection/>);
   const result = shallowRenderer.getRenderOutput();
   expect(result.props.children.length).toBe(3);

});
