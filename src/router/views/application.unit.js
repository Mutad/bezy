import Application from './application'

describe('@views/application', () => {
  it('is a valid view', () => {
    expect(Application).toBeAViewComponent()
  })
})
