import { createStore } from 'vuex'
import configure from './configure'
import user from './user'

export const store = createStore({
  modules: {
    user,
    configure,
  }
})
