/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';

import Header from './presentational/common/Header/header.jsx';
import * as AuthActions from '../redux/actions/authActions';


class HomePage extends React.Component {

  render() {
    return (
      <div className="container main-container">
        <h1>Welcome to the Home Page</h1>
      </div>
    )
  }
}

export default HomePage;
