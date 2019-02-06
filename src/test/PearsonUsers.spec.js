import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import sinon from 'sinon';
import { PearsonUsers } from "../PearsonUsers";

jest.mock('../service');
describe("PearsonUsers component",() => {



  it("check PearsonUsers is rendered", () => {
    const component = shallow(<PearsonUsers />);
  expect(component.find("h1").text()).toEqual("Pearson User Management");
  });



  it("check componentDidMount is called", () => {
    const onDidMount = jest.fn();
    PearsonUsers.prototype.componentDidMount = onDidMount;
    const component = shallow(<PearsonUsers />);
    expect(onDidMount).toBeCalled();
  });

  it("method checkUniqueValues is called", () => {
    const checkUniqueValues = jest.fn();
    const component = shallow(<PearsonUsers />);
    component.instance().checkUniqueValues([{
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    }]);
    expect(component.state('users')[0].id).toEqual(4);
  });

  it("method deleteUser is called", () => {
    const component = shallow(<PearsonUsers />);
    component.instance().deleteUser(4);
    expect(component.state('id')).toEqual(4);
  });

  it("method deleteUserConfirm is called when clicked on yes", () => {
    const mockedEvent = { target: {innerText:'Yes'} }
    const component = shallow(<PearsonUsers />);
    component.instance().deleteUserConfirm(mockedEvent);
    expect(component.state('style')).toEqual('none');
  });

  it("method deleteUserConfirm is called when clicked on no", () => {
    const mockedEvent = { target: {innerText:'No'} }
    const component = shallow(<PearsonUsers />);
    component.setState({ users:[{
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      }], id:4 });
    component.instance().deleteUserConfirm(mockedEvent);
    expect(component.state('style')).toEqual('none');
  });

})


