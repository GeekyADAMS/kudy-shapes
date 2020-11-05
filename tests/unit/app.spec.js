import { mount, RouterLinkStub } from '@vue/test-utils'
import App from '@/App.vue'

describe('Mounted App', () => {
  const wrapper = mount(App);

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})