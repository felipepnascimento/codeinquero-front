import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/pages/Home'
import mountComponent from '../../mount-helper'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home Component', () => {
  it('renders correctly', () => {
    const { wrapper } = mountComponent(shallowMount, Home, { localVue })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays initial h1 text', () => {
    const { wrapper } = mountComponent(shallowMount, Home, { localVue })
    const h1 = wrapper.find('.header')
    expect(h1.text()).toBe('')
  })

  it('displays initial h2 text', () => {
    const { wrapper } = mountComponent(shallowMount, Home, { localVue })
    const h2 = wrapper.find('.header2')
    expect(h2.text()).toBe('')
  })

  it('navigates when button is clicked', async () => {
    const $router = {
      push: jest.fn()
    }
    const { wrapper } = mountComponent(shallowMount, Home, {
      localVue,
      mocks: {
        $router
      }
    })

    await wrapper.setData({ enableButton: true })
    await wrapper.find('v-btn').trigger('click')
    expect($router.push).toHaveBeenCalledWith({ path: '/app', query: { start: 'true' } })
  })
})
