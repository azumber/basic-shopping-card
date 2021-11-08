import { mount,RouterLinkStub } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import Navbar from '@/components/Navbar.vue'
import Basket from '@/pages/basket.vue'

// Is Card.vue a valid component?
describe('Card', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card)
    expect(wrapper.vm).toBeTruthy()
  })

});

// Is adding product to list event emitting to parent component?
describe('Card', () => {
  test('emits addToList event with one argument',async () => {
    const wrapper = mount(Card)
    wrapper.vm.$emit('add')
    await wrapper.vm.$nextTick() 
    expect(wrapper.emitted().add).toBeTruthy()
  })
});

// Is navbar a valid vue instance ?
describe('Navbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navbar)
    expect(wrapper.vm).toBeTruthy()
  })
});


describe('Navbar', () => {

  test('Product page routing from navbar is succesfull', () => {
    const wrapper = mount(Navbar, {
      stubs:{
        NuxtLink: RouterLinkStub
      }
    })
    // <nuxt-link/> component has 'to' property? 
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/')
  })

  test('Basket page routing from navbar is succesfull',() => {
    const wrapper = mount(Navbar)
    const link = wrapper.find('a').props.ref
    expect(link).toBe('bask')
  })

});

