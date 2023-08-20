import { shallowMount, createLocalVue } from '@vue/test-utils'
import mountComponent from '../../mount-helper'
import AppHome from '@/pages/AppHome'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  getters: {
    'session/selectedSession': jest.fn(),
    'session/selectedSessionId': jest.fn()
  }
})

describe('AppHome', () => {
  it('renders with the correct components', () => {
    const { wrapper } = mountComponent(shallowMount, AppHome, { localVue, store })

    expect(wrapper.findComponent({ name: 'Sessions' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'NewAssessmentModal' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'Questions' }).exists()).toBe(false)
  })

  it('navigates on clicking list item title', async () => {
    const mockRouterPush = jest.fn()
    const $router = {
      push: mockRouterPush
    }
    const { wrapper } = mountComponent(shallowMount, AppHome, {
      localVue,
      mocks: {
        $router
      },
      store
    })

    await wrapper.find('.list-item-title').trigger('click')

    expect(mockRouterPush).toHaveBeenCalledWith('/')
  })
})
