import React from "react";
import UserPage from "../UserPage";
import Loader from "../Loader";
import Followers from "../Followers";
// import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("UserPage component", () => {
  it("checks definition of componentDidMount method", () => {
    const store = mockStore({ users: {} });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testuser" }} />
      </Provider>
    );
    expect(wrapper.find(UserPage).instance().componentDidMount).toBeDefined();
  });

  it("checks definition of componentWillReceiveProps method", () => {
    const store = mockStore({ users: {} });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testuser" }} />
      </Provider>
    );
    expect(
      wrapper.find(UserPage).instance().componentWillReceiveProps
    ).toBeDefined();
  });

  it("mounts Loader if user is not loaded", () => {
    const store = mockStore({ users: { isLoaded: false } });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testuser" }} />
      </Provider>
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it("finds user's avatar image", () => {
    const store = mockStore({
      users: { avatarUrl: "testurl", isLoaded: true, info: {} },
      followers: { followers: [], isLoaded: true }
    });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testuser" }} />
      </Provider>
    );
    expect(wrapper.find('img[src="testurl"]')).toHaveLength(1);
  });

  it("shows user's login", () => {
    const store = mockStore({
      users: { login: "testlogin", isLoaded: true, info: {} },
      followers: { followers: [], isLoaded: true }
    });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testlogin" }} />
      </Provider>
    );
    expect(wrapper.find("h1").text()).toEqual("testlogin");
  });

  it("shows user's amount of followers", () => {
    const store = mockStore({
      users: { isLoaded: true, info: { followers: 10 } },
      followers: { followers: [], isLoaded: true }
    });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testlogin" }} />
      </Provider>
    );
    expect(wrapper.find(".user__followers").text()).toEqual("Followers: 10");
  });

  it("shows user's amount of public repositories", () => {
    const store = mockStore({
      users: { isLoaded: true, info: { publicRepos: 50 } },
      followers: { followers: [], isLoaded: true }
    });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testlogin" }} />
      </Provider>
    );
    expect(wrapper.find(".user__repos").text()).toEqual("Public repos: 50");
  });

  it("contains Followers", () => {
    const store = mockStore({
      users: { isLoaded: true, info: {} },
      followers: { followers: [], isLoaded: true }
    });
    const wrapper = mount(
      <Provider store={store}>
        <UserPage location={{ pathname: "/user/testlogin" }} />
      </Provider>
    );
    expect(wrapper.find(Followers)).toHaveLength(1);
  });
});
