import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('App', () => {
  it('adds a row to the table when addRow method is called', () => {
    const wrapper = mount(App);
    const initialRowCount = wrapper.findAll('#Wasserstand tbody tr').length;
    wrapper.vm.addRow();
    const updatedRowCount = wrapper.findAll('#Wasserstand tbody tr').length;
    expect(updatedRowCount).toBe(initialRowCount + 1);
  });

  it('deletes a row to the table when deleteRow method is called', () => {
    const wrapper = mount(App);
    const initialRowCount = wrapper.findAll('#Wasserstand tbody tr').length;
    wrapper.vm.deleteRow();
    const updatedRowCount = wrapper.findAll('#Wasserstand tbody tr').length;
    expect(updatedRowCount).toBe(initialRowCount - 1);
  });
  it('adds up', () => {
    const wrapper = mount(App);
    const initialRowCount = wrapper.findAll('#Wasserstand tbody tr').length;
    wrapper.vm.deleteRow();
    const updatedRowCount = wrapper.findAll('#Wasserstand tbody tr').length;
    expect(updatedRowCount).toBe(initialRowCount - 1);
  });


});