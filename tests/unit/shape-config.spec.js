import Config from '@/components/settings/configuration.vue'
import {shallowMount} from '@vue/test-utils'

describe('Shape Configuration Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Config)
  })

  it('renders', ()=>{
    expect(wrapper.exists()).toBe(true)
  })
})