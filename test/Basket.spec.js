import { mount } from '@vue/test-utils'
import Basket from '@/pages/basket.vue'

describe('Basket', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Basket)
    expect(wrapper.vm).toBeTruthy()
  })

  test('adding products quantity on basket', async () => {
    const wrapper = mount(Basket)
    const button = wrapper.find('#addOne')
    const data = wrapper.find('.td-quantity')
    expect(data.text()).toEqual(1)
    await button.trigger('click')
    expect(data.text()).toEqual(2)
  })

});