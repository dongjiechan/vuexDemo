import { ADDEVENT } from './mutation_types'
// import states from './index'
// import { addeventAction } from './action';
// const addEvent = (states, obj) => {
//   states.count += 1
//   obj.items.id = states.count
//   states.events.unshift(obj.items)
// }
// ***********************************************************//
//           2018-1-26 17:23     cdj                            //
//   处理action找不到，把action方法写到export default 里面，   //
//   写在外面用一个方法名代替好像不行                          //
// ********************************************************//

export default {
  [ADDEVENT]: (states, obj) => {
    states.count += 1
    obj.id = states.count
    states.event.unshift(obj)
  }
}
