// Block Model

import { Model } from '@vuex-orm/core'
import Block from './Block'
import Component from './Component'

export default class BlockComponent extends Model {
  static entity = 'blocks_components'

  static fields() {
    return {
      id: this.number(0),
      component_id: this.number(0),
      block_id: this.number(0),
      order: this.number(0),
      content: this.string('lorem ipsum'),
      attrs: this.string(''),
      block: this.belongsTo(Block, 'block_id'),
      component: this.belongsTo(Component, 'component_id'),
    }
  }
}
