import { mount,jest,spyOn } from '@vue/test-utils'
import Index from '@/pages/index.vue'

export default function setItem(id, newJson){
  window.localStorage.setItem(id, JSON.stringify(newJson));
}

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

    test('sets data into local storage',() => {
      const wrapper = mount(Index);
      const jsonId = 'item1';
      const newJson = {
        id: 1,
        productName: "macbook",
        category: "tech",
        price: 2000,
        quantity: 1
      }
      setItem(jsonId, newJson);
      expect(localStorage.getItem(jsonId)).toEqual(JSON.stringify(newJson));
    })

    test('has data in local storage', () => {
      const wrapper = mount(Index);
      const jsonId = '123';
      const newJson = {
        id: 1,
        productName: "macbook",
        category: "tech",
        price: 2000,
        quantity: 1
      }
      window.localStorage.setItem(jsonId, JSON.stringify(newJson));
      // run function
    });
  });

  afterEach(() => {
    window.localStorage.clear();
  });


