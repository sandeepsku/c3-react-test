import React from "react";
import { shallow } from "enzyme";
import axios from 'axios';
import sinon from 'sinon';
import  List  from "../UserList";

const user = [
  {
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
];

describe("UserList component",() => {

  it("without props loading should be rendred", () => {
    const component = shallow(<List />);
  expect(component.find("div").text()).toEqual("Loading...");
  });

  it("with props profile should be rendred", () => {

    const component = shallow(<List user={user}/>);
  expect(component.find("img")).toHaveLength(3);
  });



})
