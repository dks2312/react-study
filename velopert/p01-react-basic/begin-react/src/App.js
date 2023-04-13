import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

function App() {
  return (
    // 정적인 동작 실습
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial={true}/>
    //   <Hello color="pink" />
    // </Wrapper>

    // Hooks - useState 실습
    <Counter />
  );
}

export default App;
