import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { startClock, stopClock, resetClock } from '../actions';

const propTypes = {
  elementId: PropTypes.string.isRequired,
  intervalId: PropTypes.number,
  startClock: PropTypes.func.isRequired,
  stopClock: PropTypes.func.isRequired,
  resetClock: PropTypes.func.isRequired
};

// HELPERS
function genLabel (id) {
  return `${id[0].toUpperCase()}${id.slice(1)}`;
}

function isDisabled (elementId, intervalId) {
  if (elementId === 'start') {
    return intervalId !== null;
  } else if (elementId === 'pause') {
    return intervalId === null;
  }

  return false;
}
// COMPONENT
function Control ({ intervalId, elementId, startClock, stopClock, resetClock }) {
  const clickPair = { onClick: null };

  switch (elementId) {
    case 'start':
      clickPair.onClick = startClock;
      break;
    case 'pause':
      clickPair.onClick = stopClock;
      break;
    case 'reset':
    default:
      clickPair.onClick = resetClock;
  }

  return (
    <button
      { ...clickPair }
      className="btn btn-lg buttons"
      id={elementId}
      disabled={isDisabled(elementId, intervalId)}
    >
      {genLabel(elementId)}
    </button>
  );
}

Control.propTypes = propTypes;

export default connect(
  ({ intervalId }) => ({ intervalId }),
  { startClock, stopClock, resetClock }
)(Control);
