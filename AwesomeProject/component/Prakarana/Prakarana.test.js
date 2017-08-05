import 'react-native';
import React from 'react';
import Prakarana from './Prakarana';

import Renderer from 'react-test-renderer';

const testData = {"picture":{"large":"largepic"}, "name":{"first":"first","last":"last"}};

test("Prakarana Render" , () => {

   const prakaranaRenderer = Renderer.create(
       <Prakarana {...testData}/>
   ).toJSON();

   expect(prakaranaRenderer).toMatchSnapshot();

});