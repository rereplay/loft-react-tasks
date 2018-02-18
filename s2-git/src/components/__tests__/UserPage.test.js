import React from "react";
import { UserPage } from "../UserPage";
import Loader from "../Loader";
import Followers from "../Followers";
import { shallow } from "enzyme";

describe("UserPage component", () => {
  it("checks definition of componentDidMount method", () => {
    const wrapper = shallow(
      <UserPage
        dispatchFetchUserRequest={() => {}}
        location={{ pathname: "/user/testuser" }}
      />
    );
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it("checks definition of componentWillReceiveProps method", () => {
    const wrapper = shallow(
      <UserPage
        dispatchFetchUserRequest={() => {}}
        location={{ pathname: "/user/testuser" }}
      />
    );
    expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
  });

  it("mounts Loader if user is not loaded", () => {
    const wrapper = shallow(
      <UserPage
        isLoaded={false}
        dispatchFetchUserRequest={() => {}}
        location={{ pathname: "/user/testuser" }}
      />
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it("finds user's avatar image", () => {
    const wrapper = shallow(
      <UserPage
        avatarUrl="testavatar"
        isLoaded
        dispatchFetchUserRequest={() => {}}
        info={{}}
        location={{ pathname: "/user/testuser" }}
      />
    );
    expect(wrapper.find('img[src="testavatar"]')).toHaveLength(1);
  });

  it("shows user's login", () => {
    const wrapper = shallow(
      <UserPage
        isLoaded
        dispatchFetchUserRequest={() => {}}
        login="testlogin"
        info={{}}
        location={{ pathname: "/user/testlogin" }}
      />
    );
    expect(wrapper.find("h1").text()).toEqual("testlogin");
  });

  it("shows user's amount of followers", () => {
    const wrapper = shallow(
      <UserPage
        dispatchFetchUserRequest={() => {}}
        isLoaded
        info={{followers: 10}}
        location={{ pathname: "/user/testlogin" }}
      />
    );
    expect(wrapper.find(".user__followers").text()).toEqual("Followers: 10");
  });

  it("shows user's amount of public repositories", () => {
    const wrapper = shallow(
      <UserPage
        dispatchFetchUserRequest={() => {}}
        isLoaded
        info={{publicRepos: 50}}
        location={{ pathname: "/user/testlogin" }}
      />
    );
    expect(wrapper.find(".user__repos").text()).toEqual("Public repos: 50");
  });

  it("contains Followers", () => {
    const wrapper = shallow(
      <UserPage
        isLoaded
        info={{}}
        dispatchFetchUserRequest={() => {}}
        location={{ pathname: "/user/testlogin" }}
      />
    );
    expect(wrapper.find(Followers)).toHaveLength(1);
  });
});
