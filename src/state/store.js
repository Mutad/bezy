import Vue from 'vue'
import Vuex from 'vuex'
import dispatchActionForAllModules from '@utils/dispatch-action-for-all-modules'
import VuexORM from '@vuex-orm/core'
import modules from './modules'

import Application from './models/Application'
import ApiConsumer from './models/ApiConsumer'
import Endpoint from './models/Endpoint'
import Page from './models/Page'
import Block from './models/Block'
import Component from './models/Component'
import ChildBlock from './models/ChildBlock'
import BlockPage from './models/BlockPage'
import Element from './models/Element'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Application)
database.register(ApiConsumer)
database.register(Endpoint)
database.register(Page)
database.register(Block)
database.register(Component)
database.register(ChildBlock)
database.register(BlockPage)
database.register(Element)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules('init')
