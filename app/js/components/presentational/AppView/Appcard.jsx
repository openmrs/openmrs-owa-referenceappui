/* * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */
import React from 'react';

const AppCard = (props) => (
  <div  className="appcard" onClick={() => props.goToAppPage(props.app.url)}>
    <i className={`fa fa-${props.modifiers.iconGetter(props.app.icon)} app-icon`}></i>
    <span className="label-contaimer">
      <span className="app-title">{
        props.modifiers.splitCamelCase(
          props.modifiers.getAppName(props.app.label)
            ? props.modifiers.getAppName(props.app.label)
            : props.modifiers.getAppName(props.app.belongsTo.uuid)).capitalize() }
      </span>
      <p className="label-description">
        {props.modifiers.descriptionModifier(props.app.belongsTo.display)}
      </p>
    </span>
  </div>
);

export default AppCard;
