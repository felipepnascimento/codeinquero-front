import Vuex from 'vuex'

function mountComponent (method, component, {
  localVue, state, actions, getters, propsData, methods, stubs, mocks, data, modules, listeners, slots,
}) {
  const vuexParams = { state, actions, getters, modules };
  let store = {}

  if (!mocks) {
    mocks = {}
  }
  mocks.$tracker = {
    logEvent: jest.fn(),
    updateContext: jest.fn()
  }

  if (Object.keys(vuexParams).length > 0) {
    store = new Vuex.Store(vuexParams)
  }

  const vueParams = {
    localVue, store, stubs, propsData, mocks, data, methods, listeners, slots
  }

  const wrapper = method(component, vueParams)
  const { vm } = wrapper

  return {
    wrapper, vm, store, propsData, state, actions, methods, stubs
  }
}

export default mountComponent
