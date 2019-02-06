import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import sinon from 'sinon';
import  Modal  from "../deleteModal";

describe("Modal component",() => {

  it("check Modal component is rendered", () => {
    const component = shallow(<Modal />);
  expect(component.find("p").text()).toEqual("Are you sure, you want to delete?");
  });

  it("simulate yes button click event ", () => {
    const onUserDelete = jest.fn();
    const component = shallow(<Modal onUserDelete={onUserDelete}/>);
    component.find("button").first().simulate('click');
  expect(onUserDelete.mock.calls.length).toEqual(1);
  });

  it("simulate no button click event ", () => {
    const onUserDelete = jest.fn();
    const component = shallow(<Modal onUserDelete={onUserDelete}/>);
    component.find("button").last().simulate('click');
  expect(onUserDelete.mock.calls.length).toEqual(1);
  });
})
