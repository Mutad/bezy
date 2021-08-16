// Block Model

import { Model } from '@vuex-orm/core'
import BlockComponent from './BlockComponent'

export default class Block extends Model {
  static entity = 'blocks'

  static fields() {
    return {
      id: this.number(0),
      name: this.string(''),
      blocks_components: this.hasMany(BlockComponent, 'block_id'),
    }
  }
}
