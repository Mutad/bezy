// Element Model

import { Model } from '@vuex-orm/core'
import ChildBlock from './ChildBlock'

export default class Element extends Model {
  static entity = 'elements'

  static fields() {
    return {
      id: this.number(0),
      name: this.string(''),
      type: this.string(''),
      children: this.morphMany(ChildBlock, 'parent_id', 'parent_type'),
      parent: this.morphMany(ChildBlock, 'child_id', 'child_type'),
    }
  }
}
