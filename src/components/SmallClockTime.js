import React, { PropTypes } from 'react';

const propTypes = {
  time: PropTypes.number.isRequired,
  elementId: PropTypes.string.isRequired
};

export default function SmallClockTime ({ time, elementId }) {
  return (
    <span id={elementId}>
      {time / 60}
    </span>
  );
}

SmallClockTime.propTypes = propTypes;
