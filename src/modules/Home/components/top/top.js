import React from 'react';
import Title from './title.js';
import Description from './description.js';
import Links from './links.js';
import '../../../../stylesheets/Home/top.css'

const top = (props) => (
    <div id='top'>
      <Title />
      <Description />
      <Links />
    </div>
)

export default top;

