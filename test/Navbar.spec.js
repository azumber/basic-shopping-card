import { mount,RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

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