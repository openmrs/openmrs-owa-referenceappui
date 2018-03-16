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

import AppCard from '../../presentational/AppView/Appcard.jsx';
import * as stringModifiers from '../../../utility/stringModifiers';

export default class AppView extends React.Component {
renderApps = () => {
  const { appList } = this.props.app;
  if (appList.length > 0){
    return (
      appList.map((app) => (
        <AppCard
          app={app}
          modifiers={{...stringModifiers}}
          key={app.uuid}
          goToAppPage={this.props.goToAppPage}
        />
      ))
    );}
}

render () {
  return (
    <div id="body-wrapper">
      <div className="apps-container">{this.renderApps()}</div>
    </div>
  );
}
}
