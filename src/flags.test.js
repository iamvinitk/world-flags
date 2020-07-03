import flags from './flags'

describe('flags', () => {
  it('exports the Indian flag', () => {
    expect(flags.IN).toBeDefined()
  })
  it('exports the EU flag', () => {
    expect(flags.EU).toBeDefined()
  })
  it('exports the English flag', () => {
    expect(flags.GB_ENG).toBeDefined()
  })
  it('exports the English flag', () => {
    expect(flags.XX).toBeUndefined()
  })
})
