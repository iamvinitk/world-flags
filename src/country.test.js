import { getAlphaTwoCode } from './country'

describe('getAlphaTwoCode', () => {
  it('supports alpha two as input', () => {
    const code = getAlphaTwoCode('IN')
    expect(code).toBe('IN')
  })
  it('supports lowercase alpha two as input', () => {
    const code = getAlphaTwoCode('in')
    expect(code).toBe('IN')
  })
  it('supports alpha three as input', () => {
    const code = getAlphaTwoCode('IND')
    expect(code).toBe('IN')
  })
  it('supports lowercase alpha three as input', () => {
    const code = getAlphaTwoCode('ind')
    expect(code).toBe('IN')
  })
  it('supports numeric input', () => {
    const code = getAlphaTwoCode(356)
    expect(code).toBe('IN')
  })
  it('supports numeric string input', () => {
    const code = getAlphaTwoCode('356')
    expect(code).toBe('IN')
  })
  it('supports non country codes', () => {
    const code = getAlphaTwoCode('GB-ENG')
    expect(code).toBe('GB-ENG')
  })
})
