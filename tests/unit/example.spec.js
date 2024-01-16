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


  it('deletes a row of the table when deleteRow Button is used ', () => {
    // Create a fake table
    const fakeTable = document.createElement('table');
    fakeTable.setAttribute('id', 'Wasserstand');
    // Create a fake row and add it to the table
    const fakeRow = document.createElement('tr');
    fakeRow.setAttribute('id', 'fakeRowId'); // Set a fake ID for testing
    fakeTable.appendChild(fakeRow);

    document.body.appendChild(fakeTable);
    // Mount the component with the fake table
    const wrapper = mount(BackendSchnittstelleTemp);
    // Get the initial row count
    const initialRowCount = wrapper.findAll('table ').length;

    // Delete the fake row using the deleteRow method
    wrapper.vm.deleteRow('fakeRowId'); // Pass the fake ID used in the fake table

    // Get the updated row count
    const updatedRowCount = wrapper.findAll('table ').length;

    // Assert that the row count is decreased by 1
    expect(updatedRowCount).toBe(0 );
  });


  it('calculates a recommendation when using the calculate button', () => {
    const wrapper = mount(BackendSchnittstelleTemp);
    const weight = 80;
    wrapper.setData({ weight });

    wrapper.vm.calculateWeight();

    expect(wrapper.vm.result).toBe(weight * 30 / 1000);
  });



});