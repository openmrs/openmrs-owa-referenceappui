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

import AppView from './AppView/AppView.jsx';
import ClassicView from './classicView/classicView.jsx';
import Header from '../presentational/common/Header/header.jsx';
import * as AuthActions from '../../redux/actions/authActions';
import * as AppActions from '../../redux/actions/appActions';
import  { applicationDistribution } from '../../helpers/apiHelper';

class LandingPage extends React.Component {
  componentDidMount() {
    this.props.currentActiveSession()
      .then(
        this.props.getUserApps()
      );
  }

  goToAppPage = (url) => {
    window.location.href =`/${applicationDistribution}/${url}`;
  }

  render() {
    const { app, authentication } = this.props;
    const { setClassicView } = app;
    return (
      <div>
        <Header
          authentication={authentication}
          app={app}
          currentView={setClassicView}
          authActions={this.props}
        />
        {
          setClassicView
            ?  <ClassicView
              goToAppPage={this.goToAppPage}
              app={app}
            />
            :  <AppView
              goToAppPage={this.goToAppPage}
              app={app}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { app, authentication } = state;
  return { app, authentication };
};


export default connect(mapStateToProps,
  { ...AuthActions, ...AppActions })(LandingPage);
