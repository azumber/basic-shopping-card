import { mount } from '@vue/test-utils'
import Basket from '@/pages/basket.vue'

describe('Basket', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Basket)
    expect(wrapper.vm).toBeTruthy()
  })

});