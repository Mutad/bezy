// Endpoint Model

import { Model } from '@vuex-orm/core'

export default class Endpoint extends Model {
  static entity = 'endpoints'

  static fields() {
    return {
      id: this.attr(null),
      path: this.attr(''),
      consumer_id: this.attr(null),
    }
  }
}
