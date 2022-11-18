import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act } from 'react-dom/test-utils';
import NoPage from  '../pages/NoPage';

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
describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
      expect(true).toBe(true);
    });
  
    test('false is falsy', () => {
      expect(false).toBe(false);
    });
  });

describe('The text renders correctly', ()=> {
it("Text test",() =>{

act(() =>{
   render(<NoPage/>, container);
});
expect(container.textContent).toBe("Error:404*gasp*Oh, uh hello, I didn't see you there. Umm, I dont think you should be hereYou should probably leave");

})
})


//   <h1 style={{textAlign: 'center'}}>Error:404</h1>
//     <br />
//     <h1 style={{textAlign: 'center'}}>
//       <strong>*gasp*</strong>
//     </h1>
//     <p style={{textAlign: 'center'}}>Oh, uh hello, I didn't see you there. </p>
//     <p style={{textAlign: 'center'}}>Umm, I dont think you should be here</p>

//     <p style={{textAlign: 'center'}}>You should probably leave</p>