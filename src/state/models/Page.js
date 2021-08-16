// Page Model

import { Model } from '@vuex-orm/core'
import BlockPage from './BlockPage'

export default class Page extends Model {
  static entity = 'pages'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      application_id: this.attr(null),
      blocks_pages: this.hasMany(BlockPage, 'page_id'),
    }
  }
}
