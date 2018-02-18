import React from "react";
import Followers from "../Followers";
import Loader from "../Loader";
import Follower from "../Follower";
import { MemoryRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Followers component", () => {
  it("checks definition of componentDidMount method", () => {
    const store = mockStore({ followers: {} });
    const wrapper = mount(
      <Provider store={store}>
        <Followers />
      </Provider>
    );
    expect(wrapper.find(Followers).instance().componentDidMount).toBeDefined();
  });

  it("checks definition of componentWillReceiveProps method", () => {
    const store = mockStore({ followers: {} });
    const wrapper = mount(
      <Provider store={store}>
        <Followers />
      </Provider>
    );
    expect(
      wrapper.find(Followers).instance().componentWillReceiveProps
    ).toBeDefined();
  });

  it("mounts Loader if followers are not loaded", () => {
    const store = mockStore({ followers: { followers: [], isLoaded: false } });
    const wrapper = mount(
      <Provider store={store}>
        <Followers />
      </Provider>
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it("checks amount of followers", () => {
    const store = mockStore({
      followers: {
        followers: [1, 2, 3].map(login => {
          return { login: login };
        }),
        isLoaded: true
      }
    });
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Followers />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Follower)).toHaveLength(3);
  });
});
