import { mount,RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue'

// Is index.vue a valid component?
describe('Index', () => {
    test('is a Vue instance', () => {
      const wrapper = mount(Index)
      expect(wrapper.vm).toBeTruthy()
    })
   
    // add to list button test 
    test('add product to list', async () => {
      const wrapper = mount(Index)
      wrapper.vm.$emit('add')
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().add.length).toBe(1)
    })
  });