import React, { Component, PropTypes } from 'react';
import { TestChildOne } from './TestChildOne/TestChildOne.jsx';
import { TestChildTwo } from './TestChildTwo/TestChildTwo.jsx';

export class Test extends Component {
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
        <TestChildOne {...this.props} />
        <TestChildTwo {...this.props} />
      </div>
    );
  }
}

Test.propTypes = {
  totalCount: PropTypes.number.isRequired,
  clickRootHandler: PropTypes.func,
};
