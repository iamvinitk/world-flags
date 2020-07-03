import React from 'react'
import Flag from '.'
import Enzyme from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(Flag).toBeTruthy()
  })

  it('should render the flag', () => {
    const wrapper = Enzyme.shallow(<Flag code='IN' />)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('should render the flag', () => {
    const wrapper = Enzyme.shallow(
      <Flag code='XX' fallback={<span>Unknown code</span>} />
    )
    expect(wrapper.find('span').exists()).toBe(true)
  })
})
