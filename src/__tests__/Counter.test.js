import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

let wrapper = null

beforeEach(() => {
  wrapper = mount(Counter)
  wrapper.setData({ count: 0 })
})

it('Count initial value = 0', () => {
  expect(wrapper.vm.count).toEqual(0)
})

it('Count increment', () => {
  const button = wrapper.findAll('button').at(0).trigger('click')
  expect(wrapper.vm.count).toEqual(1)
})

it('Count decrement', () => {
  const button = wrapper.findAll('button').at(1).trigger('click')
  expect(wrapper.vm.count).toEqual(-1)
})
