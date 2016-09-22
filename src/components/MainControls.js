import React from 'react';

import Control from './Control';

function MainControls () {
  return (
    <section id="btnsTime">
      <Control elementId="start" /><br />
      <Control elementId="pause" /><br />
      <Control elementId="reset" /><br />
    </section>
  );
}

export default MainControls;
