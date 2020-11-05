import Home from '@/views/Home.vue'
import {shallowMount} from '@vue/test-utils'

describe('Shape Configuration Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home)
  })

  it('shape rendering screen exists', ()=>{
    expect(wrapper.find('.render-screen').exists).toBe(true)
  })
})