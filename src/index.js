import { inject } from 'react-web-component-injector'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import Reducer from './shared/reducer'

import WinnersChapelConfigurator from './components/winners-chapel-configurator/WinnersChapelConfigurator'
import Dashboard from './components/winners-chapel-configurator/protected/Dashboard'

const dev = process.env.NODE_ENV !== 'production'

const createStoreWithMiddleware = compose(
  dev ? applyMiddleware(createLogger()) : f => f
)(createStore)

const store = createStoreWithMiddleware(
  combineReducers({
    WinnersChapelConfiguratorDemo: Reducer,
    DashboardDemo: Reducer
  })
)

inject(
  {
    'winners-chapel-configurator': WinnersChapelConfigurator,
    'Dashboard': Dashboard
  },
  {
    store
  }
)
