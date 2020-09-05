import React from 'react'
import { NativeRouter, Route } from "react-router-native"

import Home from '../pages/home'
import Photo from '../pages/photo'
import Result from '../pages/result'

const Routes = () => (
  <NativeRouter>
    <Route exact path='/' component={Home} />
    <Route path='/photo' component={Photo} />
    <Route path='/result' component={Result} />
  </NativeRouter>
)

export default Routes
