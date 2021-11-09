import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

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
  