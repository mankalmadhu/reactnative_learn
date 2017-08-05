import 'react-native';
import React from 'react';
import Parividi from './Parividi';

import Renderer from 'react-test-renderer';

jest.mock('../Prakarana/Prakarana');

test("Parividi Render" , () => {

   const parividiRenderer = Renderer.create(
       <Parividi/>
   ).toJSON();

   expect(parividiRenderer).toMatchSnapshot();

});