import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act } from 'react-dom/test-utils';
import Banner from  '../Banner';

let container = null;
beforeEach(() =>{
    container=document.createElement('div');
    document.body.appendChild(container);
})

afterEach(()=>{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})
describe('The banner renders correctly', ()=> {
it("Text test",() =>{

act(() =>{
   render(<Banner/>, container);
});
expect(container.textContent).toBe("Flop Trumps");

})
})


describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
      expect(true).toBe(true);
    });
  
    test('false is falsy', () => {
      expect(false).toBe(false);
    });
  });

