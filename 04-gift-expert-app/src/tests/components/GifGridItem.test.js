//import { shallow } from "enzyme"
import React from 'react'
import { shallowToJson } from "enzyme-to-json"
import GifGidItem from "../../GifGridItem"

describe('Pruebas en <GifGridItem />', () => { 

    const name = 'Un titulo';
    const url = 'http:/localhost/algo.jpg'; 

    test('debe de mostrar el componente correctamente', () => {
      const wraper =  shallowToJson( <GifGidItem name={ name } url={ url } /> )
      expect( wraper ).toMatchSnapshot();
    })    
 })