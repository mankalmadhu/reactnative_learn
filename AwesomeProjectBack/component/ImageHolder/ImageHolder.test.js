import 'react-native';
import React from 'react';
import ImageHolder from './ImageHolder';

import Renderer from 'react-test-renderer';

test("Image Render" , () => {

   const imageRenderer = Renderer.create(
       <ImageHolder pick={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}/>
   ).toJSON();

   expect(imageRenderer).toMatchSnapshot();

});