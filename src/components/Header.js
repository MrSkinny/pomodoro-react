import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string.isRequired
};

export default function Header (props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12">
          <header>
            <h1 className="text-center">{props.title}</h1>
          </header>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = propTypes;
