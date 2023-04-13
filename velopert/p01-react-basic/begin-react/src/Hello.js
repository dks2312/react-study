import React from 'react';

function Hello({ name, color }){
    return <div style={color}>안녕하세요 {name}님</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
