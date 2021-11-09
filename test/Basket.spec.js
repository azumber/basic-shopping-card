import { mount } from '@vue/test-utils'
import Basket from '@/pages/basket.vue'

  /*  BASKET PAGE ROUTING MUST BE TESTED
  test('Basket page routing from navbar is succesfull',() => {
    const wrapper = mount(Navbar)
    const link = wrapper.find('a').props.ref
    expect(link).toBe('bask')
  })
  */


describe('Basket', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Basket)
    expect(wrapper.vm).toBeTruthy()
  })

});