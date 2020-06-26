import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import Counter from '@/components/Counter.vue'

const wrapper = mount(App)

it('App name exists', () => {
  const title = wrapper.find('h1').text()
  expect(title).toBe('Count It')
})

it('Counter is mounted', () => {
  const counter = wrapper.findComponent(Counter).exists()
  expect(counter).toBe(true)
})
