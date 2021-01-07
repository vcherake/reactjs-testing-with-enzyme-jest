import React from "react";
import { mount } from "../../enzyme";
import List from "../List";

describe("list tests", () => {
  it("render list-items", () => {
    const items = ["one", "two", "three"];

    const wrapper = mount(<List items={items} />);

    console.log(wrapper.debug());

    // Expect wrapper object to be defined
    expect(wrapper.find(".list-items")).toBeDefined();
    expect(wrapper.find(".item")).toHaveLength(items.length);
    expect(wrapper.find("ListItem")).toBeDefined();
    expect(wrapper.find("ListItem")).toHaveLength(items.length);
  });

  it("renders a list item", () => {
    const items = ["Thor", "Loki"];
    const wrapper = mount(<List items={items} />);

    // Check if an element in the Component exists
    expect(
      wrapper.contains(
        <li key="Thor" className="item">
          Thor
        </li>
      )
    ).toBeTruthy();
  });

  it("renders correct text in item", () => {
    const items = ["John", "James", "Luke"];
    const wrapper = mount(<List items={items} />);

    //Expect the child of the first item to be an array
    expect(wrapper.find(".item").get(0).props.children).toEqual("John");
  });
});
