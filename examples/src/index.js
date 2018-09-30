import React from 'react';
import { render } from 'react-dom';
import ExpandBar from '../../src';
const App = () => (
    <ExpandBar time={5}>
        <div style={{ height: '400px', background: 'pink' }}>
            这是一个可以自适应高度的打开和缩回的bar
        </div>
    </ExpandBar>
);
render(<App />, document.getElementById("root"));