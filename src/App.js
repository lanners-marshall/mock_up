import React, { Component } from 'react';
import Auth from './components/auth/Auth.js';

import {withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
       <Auth/>
       

      </div>
    );
  }
}

export default withRouter(App);
