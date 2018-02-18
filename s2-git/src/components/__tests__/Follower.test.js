import React from "react";
import Follower from "../Follower";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";

describe("Follower component", () => {
  const followerStub = {
    login: "123login",
    avatar_url: "testavatar"
  };

  it("checks login prop", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Follower follower={followerStub} />
      </MemoryRouter>
    );
    expect(wrapper.find(Follower).props().follower.login).toEqual("123login");
  });

  it("checks avatar_url prop", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Follower follower={followerStub} />
      </MemoryRouter>
    );
    expect(wrapper.find(Follower).props().follower.avatar_url).toEqual(
      "testavatar"
    );
  });

  it("finds Link component", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Follower follower={followerStub} />
      </MemoryRouter>
    );
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it("ensures Link component has a valid url", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Follower follower={followerStub} />
      </MemoryRouter>
    );
    expect(wrapper.find(Link).props().to).toEqual("/user/123login");
  });

  it("finds image tag with avatar source", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Follower follower={followerStub} />
      </MemoryRouter>
    );
    expect(wrapper.find('img[src="testavatar"]')).toHaveLength(1);
  });
});
