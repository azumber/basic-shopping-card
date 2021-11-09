import { mount,RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import assert from 'assert'

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
});


describe('Navbar', () => {
  test('Basket page routing from navbar is succesfull', () => {
    const wrapper = mount(Navbar, {
      stubs:{
        NuxtLink: RouterLinkStub
      }
    })
    const links = wrapper.findAll(RouterLinkStub)
    assert(links.at(1).props().to === '/')
    // basket page routing handled
    expect(links.at(2).props().to === '/basket')
  })
});
