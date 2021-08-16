// Application Model

import { Model } from '@vuex-orm/core'
import ApiConsumer from '@state/models/ApiConsumer'
import Page from '@state/models/Page'

export default class Application extends Model {
  static entity = 'applications'

  static fields() {
    return {
      id: this.number(0),
      name: this.string(''),
      pages: this.hasMany(Page, 'application_id', 'id'),
      consumers: this.hasMany(ApiConsumer, 'application_id', 'id'),
    }
  }
}
