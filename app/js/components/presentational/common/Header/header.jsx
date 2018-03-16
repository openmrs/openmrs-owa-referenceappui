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
import NotificationBar from '../Notifications/notificationsBar.jsx';

const NUMBER_OF_COLUMNS = 3;

export default class Header extends Component {

handleClick = (e, locationTags) => {
  e.preventDefault();
  this.props.authActions.setCurrentLocation(e.target.id);
  let locationUuid;
  let locationDisplay = e.target.id;
  locationTags.map((locationArray) => {
    if (locationArray.display === e.target.id) {
      locationUuid = locationArray.uuid;
    }
  });
  this.props.authActions.setOpenMRSLocation(locationUuid);
}

dropDownMenu = (locationTags, currentLocation) => {
  const menuDisplay = [];
  const numPerColumn = Math.ceil(locationTags.length / NUMBER_OF_COLUMNS);
  const styles = {
    marginTop: '5px',
    fontSize: '14px',
  };

  for (let cols = 0; cols < NUMBER_OF_COLUMNS; cols++) {
    const menuInColumns = [];
    let colStart = cols * numPerColumn;
    let colEnd = (cols + 1) * numPerColumn;
    for (let menuIndex = colStart; menuIndex < colEnd; menuIndex++) {
      if (locationTags[menuIndex] == currentLocation) {
        menuInColumns.push(
          <a href="#"
            key={menuIndex}
            id={locationTags[menuIndex]}
            style={styles}
            className="current-location text-center location"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick(e, locationTags);
            }}><span id="current-location">{locationTags[menuIndex]}</span></a>
        );
      } else {
        menuInColumns.push(
          <a href="#"
            key={menuIndex}
            id={locationTags[menuIndex]}
            style={styles}
            className="text-center location"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick(e, locationTags);
            }}>{locationTags[menuIndex]}</a>
        );
      }
    }
    let filteredMenuInColumns = menuInColumns.filter((item) => item.props.id != undefined);
    menuDisplay.push(
      <li id="location-dropdown" className="col-sm-4" key={cols}>{filteredMenuInColumns}</li>
    );
  }

  return menuDisplay;
}

render() {
  const {
    currentUser,
    currentLocation,
    locationResponse,
  } = this.props.authentication;
  return (
    <div >
      <header>
        <div className="logo">
          <a href="../../">
            <img src="img/openmrs-with-title-small.png"/>
          </a>
        </div>

        <ul className="navbar-right nav-header">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <span className="fa fa-user"/> {`  ${currentUser.capitalize()}  `}
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
              <span className="fa fa-map-marker-alt"/> {` ${currentLocation} `}
              <span className="caret"/>
            </a>
            <ul className="dropdown-menu dropdown-menu-large row">
              {this.dropDownMenu(locationResponse.map(location =>
              {return location.display;}), currentLocation)}
            </ul>
          </li>
          <li>
            <a href={this.props.authentication.customLogoutURL} >Logout {' '}
              <span className="fa fa-sign-out-alt"/></a>
          </li>
        </ul>
      </header>
      <NotificationBar
        authentication={this.props.authentication}
        currentView={this.props.currentView}
        selectView={this.props.authActions.selectView}
        notification={this.props.app.notifications}
      />
    </div>
  );
}
}
