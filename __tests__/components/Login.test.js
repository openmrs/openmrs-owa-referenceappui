import React, { Component } from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import { Login } from '../../app/js/components/Login';
import LoginForm from '../../app/js/components/presentational/LoginForm';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    loginUser: jest.fn()
  }
  const wrapper = mount(<Login  {...props} />);
  return {
    props,
    wrapper
  }
}

const event = {
  target: {
    name: 'name',
    value: 'value',
  },
  preventDefault: () => jest.fn()
};


describe('Login Component', () => {
  const { wrapper, props } = setup();

  it('should have an empty initial state as the component ', () => {
    expect(wrapper.state().username).toEqual('');
    expect(wrapper.state().password).toEqual('');
    expect(wrapper.state().sessionLocation).toEqual('');
  });

  it('should contain a <LoginForm /> component', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it('should render subcomponent', () => {
    const loginFormProps = wrapper.find('LoginForm').props()
    expect(loginFormProps.username).toBe('')
    expect(loginFormProps.password).toBe('')
    expect(loginFormProps.sessionLocation).toBe('')
  });

  it('should render its children', () => {
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(1);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('option').length).toBe(7);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);

  })

  it('should have all the method in the component to be defined', () => {
    wrapper.instance().handleChange(event);
    wrapper.instance().handleSubmit(event);  
  });

  it('should call loginUser action', () => {
    const form = wrapper.find('form');
    const loginProps = jest.spyOn(wrapper.instance().props, 'loginUser');
    form.simulate('submit', event);
    expect(loginProps).toBeCalled();
  });

});
