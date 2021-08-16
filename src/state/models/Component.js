// Component Model

import { Model } from '@vuex-orm/core'

export default class Component extends Model {
  static entity = 'components'

  static fields() {
    return {
      id: this.number(0),
      name: this.string(''),
      type: this.string('pre'),
    }
  }
}
