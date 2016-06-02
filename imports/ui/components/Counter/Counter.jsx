import React, { Component, PropTypes } from 'react';
import { CounterOne } from './CounterOne/CounterOne.jsx';
import { CounterTwo } from './CounterTwo/CounterTwo.jsx';
import { CounterThree } from './CounterThree/CounterThree.jsx';

export class Counter extends Component {
  clickEventHandler() {}
  render() {
    const {
      totalCount,
    } = this.props;

    return (
      <div className=""
        onClick={this.props.clickRootHandler}
      >
        Total counter: {totalCount}
        <CounterOne {...this.props} />
        <CounterTwo {...this.props} />
        <CounterThree {...this.props} />
      </div>
    );
  }
}

Counter.propTypes = {
  totalCount: PropTypes.number.isRequired,
  clickRootHandler: PropTypes.func,
};
