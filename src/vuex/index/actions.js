// import mutations from './mutations'
// import { ADDEVENT } from './mutation_types'
// import mutations from './mutations'
import { ADDEVENT } from './mutation_types'
// export const addEvent = ({ commit }, params) => commit(ADDEVENT, params)

export default {
  ADDEVENT: ({ commit }, params) => commit(ADDEVENT, params)
}
