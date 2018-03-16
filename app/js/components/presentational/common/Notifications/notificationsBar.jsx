/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';

import SideBarCard from './sideBarCard';

const NOTIFICATION_LENGTH = 2;
export default class NotificationBar extends React.Component {
  render(){
    const { currentUser } = this.props.authentication;
    const { notification } = this.props;
    return (
      <div>
        { this.props.currentView
          ?
          <div className="classic-top-bar">
            <span className="view-switch classic-view-switch" onClick={() => this.props.selectView()}>
              <span><i className="fa fa-undo view-icon" />New View</span>
            </span>
            <hr className="breaker"/>
          </div>
          :
          <div className="notification-bar">
            <div className="notifications-sidebar">
              <i className="fa fa-bell"/>
              {notification.length >= 1
                ?<sup>
                  <span className="notification-length"></span>
                </sup>
                : null}
              <div className="notifications-sidebar-content">
                {notification.length > 0
                  ?<div>
                    <i className="fa fa-chevron-circle-right sidebar-icon"/>
                    <br/>
                    <SideBarCard
                      notifications={notification[0]}
                    />
                  </div>
                  :<span>No Notifications</span>}
              </div>
            </div>
            <span className="view-switch" onClick={() => this.props.selectView()}>
              <span><i className="fa fa-undo view-icon" /> Classic View</span>
            </span>
          </div>
        }
      </div>
    );
  }
}
