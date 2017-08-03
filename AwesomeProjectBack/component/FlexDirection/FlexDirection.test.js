import 'react-native';
import React from 'react';
import FlexDirection from './FlexDirection';

import Renderer from 'react-test-renderer';

test("Flex Direction Render" , () => {
   const flexDircetion = Renderer.create(
       <FlexDirection/>
   ).toJSON();

   expect(flexDircetion).toMatchSnapshot();

});
