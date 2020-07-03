import React from 'react'
import flags from './flags'
import { getAlphaTwoCode } from './country'

const Flag = (props) => {
  const { code, fallback = null, ...rest } = props
  const alphaTwo = getAlphaTwoCode(code)
  const flag = flags[alphaTwo.replace('-', '_')]
  return flag ? <img {...rest} src={flag} alt='' loading='lazy' /> : fallback
}

export default Flag
