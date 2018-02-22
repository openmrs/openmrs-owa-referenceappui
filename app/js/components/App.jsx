/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';
import { connect } from 'react-redux';

import * as AuthActions from '../redux/actions/authActions';
import Login from './containers/Login.jsx';
import openmrsLogo from './../../img/openmrs-with-title-small.png';

export default class App extends React.Component {
  render() {
    return (
      <div className="container main-container">

        <header>
          <nav className="navbar navbar-light bg-faded nav-header">
            <img src={(openmrsLogo)} className="omrsButton" alt="Add On manager homepage" />
          </nav>
        </header>

        <div className="col-md-6 offset-md-3">
          <Login />
        </div>
      </div>
    );
  }
}
