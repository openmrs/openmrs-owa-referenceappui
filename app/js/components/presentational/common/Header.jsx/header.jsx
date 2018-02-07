/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */

import React, { Component } from 'react';

const NUMBER_OF_COLUMNS = 3;

export default class Header extends Component {

  render() {
    return (
      <div >
        <header >
          <div className="logo">
            <a href="../../">
              <img src="img/openmrs-with-title-small.png"/>
            </a>
          </div>

          <ul className="navbar-right nav-header">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-user"/>
                <span className="caret"/>
              </a>
              <ul className="dropdown-menu user">
                <li>
                  <a href="#" id="current-user">My Account</a>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-large">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon glyphicon-map-marker"/>
                <span className="caret"/>
              </a>
              <ul className="dropdown-menu dropdown-menu-large row">
              </ul>
            </li>
            <li>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
