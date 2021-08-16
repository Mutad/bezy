// Block Model

import { Model } from '@vuex-orm/core'
import Page from './Page'
import Block from './Block'

export default class BlockPage extends Model {
  static entity = 'blocks_pages'

  static fields() {
    return {
      id: this.number(0),
      page_id: this.number(0),
      block_id: this.number(0),
      order: this.number(0),
      page: this.belongsTo(Page, 'page_id'),
      block: this.belongsTo(Block, 'block_id'),
    }
  }
}
