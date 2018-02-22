/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';

import  { applicationDistribution } from '../../../../helpers/apiHelper';
import { getAppName } from '../../../../utility/stringModifiers';


export default (props) => (
  <div
    className="sidebar-card"
    onClick={
      () =>
        window.location.href =`/${applicationDistribution}${props.notifications.action.url}`}>
    <span>{getAppName(props.notifications.label)}</span>
    <p>
    </p>
  </div>
);
