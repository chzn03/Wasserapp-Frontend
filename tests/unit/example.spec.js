import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue'
import BackendSchnittstelleTemp from "@/components/BackendSchnittstelleTemp";

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('BackendSchnitstelleTemp', () => {
  it('adds a row to the table when addRow Button is used', () => {
    const wrapper = mount(BackendSchnittstelleTemp);
    wrapper.vm.addRow();
    const updatedRowCount = wrapper.findAll('#Wasserstand').length;
    expect(updatedRowCount).toBe(1);
  });


  it('deletes a row of the table when deleteRow Button is used after addrow', () => {
    const wrapper = mount(BackendSchnittstelleTemp);
    wrapper.vm.addRow();
    const addedRowId = wrapper.vm.rowId;

    const initialRowCount = wrapper.findAll('#Wasserstand').length;

    wrapper.vm.deleteRow(addedRowId);
    const updatedRowCount = wrapper.findAll('#Wasserstand ').length;
    expect(updatedRowCount).toBe(initialRowCount -1);

  });

  it('calculates a recommendation when using the calculate button', () => {
    const wrapper = mount(BackendSchnittstelleTemp);
    const weight = 80;
    wrapper.setData({ weight });

    wrapper.vm.calculateWeight();

    expect(wrapper.vm.result).toBe(weight * 30 / 1000);
  });



});