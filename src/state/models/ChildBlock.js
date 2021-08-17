// ChildBlock Model

import { Model } from '@vuex-orm/core'

export default class ChildBlock extends Model {
  static entity = 'child_blocks'

  static fields() {
    return {
      id: this.number(0),
      parent_id: this.number(0),
      parent_type: this.string(''),
      child_id: this.number(0),
      child_type: this.string(''),
      order: this.number(0),
      child: this.morphTo('child_id', 'child_type'),
      // parent: this.morphTo('parent_id', 'parent_type'),
    }
  }
}
