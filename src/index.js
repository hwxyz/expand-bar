import React from 'react';
import PropTypes from 'prop-types';
import './index.less';
class App extends React.Component {
    render() {
        let time = this.props.time || 1;
        return (
            <div className="expandBar">
                <label htmlFor="btn" className="labelbtn" onClick={this.expand}>展开/收起全部信息</label>
                <input type="checkbox" id="btn" />
                <div className="element" style={{ transition: `max-height ${time}s linear` }}>{this.props.children}</div>
            </div>
        );
    }
}

App.propTypes = {
    time: PropTypes.number
};

export default App;
