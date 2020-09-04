import React from 'react'
import { NativeRouter, Route } from "react-router-native"

import PageContainer from '../components/pageContainer'
import Home from '../pages/home'
import Photo from '../pages/photo'

const Routes = () => (
  <NativeRouter>
      <Route exact path='/' render={() => (
        <PageContainer pageNumber={1}>
          <Home />
        </PageContainer>
      )} />

      <Route path='/photo' render={() => (
        <PageContainer pageNumber={2}>
          <Photo />
        </PageContainer>
      )} />
  </NativeRouter>
)

export default Routes
