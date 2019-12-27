/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useInjectReducer } from 'utils/injectReducer'
import { useInjectSaga } from 'utils/injectSaga'

import reducer from './reducer'
import saga from './sagas'
import viewReducer from 'containers/View/reducer'
import viewSaga from 'containers/View/sagas'

import { DisplayEditor, DisplayPreview } from './Loadable'

const DisplayIndex: React.FC = () => {
  useInjectReducer({ key: 'display', reducer })
  useInjectSaga({ key: 'display', saga })

  useInjectReducer({ key: 'view', reducer: viewReducer })
  useInjectSaga({ key: 'view', saga: viewSaga })

  return (
    <Switch>
      <Route exact path="/project/:projectId/display/:displayId/slide/:slideId/preview" component={DisplayPreview} />
      <Route exact path="/project/:projectId/display/:displayId/slide/:slideId" component={DisplayEditor} />
    </Switch>
  )
}

export default DisplayIndex
