import Applications from './applications'

describe('@views/applications', () => {
  it('is a valid view', () => {
    expect(Applications).toBeAViewComponent()
  })
})
