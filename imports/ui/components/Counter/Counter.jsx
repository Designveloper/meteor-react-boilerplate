import React, { Component, PropTypes } from 'react';
import { CounterOne } from './CounterOne/CounterOne.jsx';
import { CounterTwo } from './CounterTwo/CounterTwo.jsx';
import { CounterThree } from './CounterThree/CounterThree.jsx';

export class Counter extends Component {
  clickEventHandler() {}
  render() {
    const {
      totalCount,
      totalCountMultiplied,
    } = this.props;

    return (
      <div onClick={this.props.clickRootHandler}>
        <div>
          Total counter: {totalCount}
        </div>
        <div>
          Multiplied total counter: {totalCountMultiplied}
        </div>
        <CounterOne {...this.props} />
        <CounterTwo {...this.props} />
        <CounterThree {...this.props} />
      </div>
    );
  }
}

Counter.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalCountMultiplied: PropTypes.number.isRequired,
  clickRootHandler: PropTypes.func,
};
