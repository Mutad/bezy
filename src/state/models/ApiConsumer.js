// ApiConsumer Model

import { Model } from '@vuex-orm/core'
import Endpoint from './Endpoint'

export default class ApiConsumer extends Model {
  static entity = 'api_consumers'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      lang: this.attr('json'),
      url: this.attr(''),
      application_id: this.attr(null),
      endpoints: this.hasMany(Endpoint, 'consumer_id', 'id'),
    }
  }
}
