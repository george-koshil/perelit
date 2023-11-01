import React from 'react';
import { shallow, mount } from 'enzyme';
import TicketsPage from '../page';

describe('TicketsPage Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TicketsPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should open the modal when handleShowDetaildedInfo is called', () => {
    const wrapper = mount(<TicketsPage />);
    const instance = wrapper.instance() as TicketsPage;
    const mockSetState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [false, mockSetState]);
    
    instance.handleShowDetaildedInfo({ /* pass a sample ticket data here */ });
    expect(mockSetState).toHaveBeenCalledWith(true);
  });

  it('should display the Filter component when isOpenFilter is true', () => {
    const wrapper = shallow(<TicketsPage />);
    const instance = wrapper.instance() as TicketsPage;
    const mockSetState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [true, mockSetState]);
    expect(wrapper.find('Filter').exists()).toEqual(true);
  });

  it('should display the Button component when isDesktop is false', () => {
    const wrapper = shallow(<TicketsPage />);
    const instance = wrapper.instance() as TicketsPage;
    const mockSetState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [false, mockSetState]);
    expect(wrapper.find('Button').exists()).toEqual(true);
  });

  it('should call the onClick handler for the Filter Button', () => {
    const wrapper = mount(<TicketsPage />);
    const instance = wrapper.instance() as TicketsPage;
    const mockSetState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [false, mockSetState]);

    const filterButton = wrapper.find('Button');
    filterButton.simulate('click');
    expect(mockSetState).toHaveBeenCalledWith(true);
  });

  it('should call the onClick handler for the TicketCard', () => {
    const wrapper = shallow(<TicketsPage />);
    const instance = wrapper.instance() as TicketsPage;
    const ticketData = { /* pass a sample ticket data here */ };
    instance.handleShowDetaildedInfo(ticketData);
    // You should check if the modal is displayed or if state is updated as expected.
  });
});
