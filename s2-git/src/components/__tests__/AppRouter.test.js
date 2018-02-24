import React from "react";
import {AppRouter} from "../AppRouter";
import { MemoryRouter, Link, Route, Switch } from "react-router-dom";
import { shallow, mount } from "enzyme";
import PrivateRoute from "../PrivateRoute";
import Login from "../Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("AppRouter component", () => {
  it("finds Switch component", () => {
    const store = mockStore({ auth: { token: null } });
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it("redirects from /user/dex157 path to login without token", () => {
    const store = mockStore({ auth: { token: null } });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/dex157"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("mounts PrivateRoute component for /user/dex157 path when token exists", () => {
    const store = mockStore({ auth: { token: "testtoken" }, users: {} });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/dex157"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(PrivateRoute)).toHaveLength(1);
  });

  it("passes right prop when url is /user/dex157", () => {
    const store = mockStore({ auth: { token: "testtoken" }, users: {} });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/dex157"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(PrivateRoute).props().path).toEqual("/user/dex157");
  });

  it("redirects from /user/:name path to login without token", () => {
    const store = mockStore({ auth: { token: null } });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/testuser"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("mounts PrivateRoute component for /user/:name path when token exists", () => {
    const store = mockStore({ auth: { token: "testtoken" }, users: {} });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/testuser"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(PrivateRoute)).toHaveLength(1);
  });

  it("passes right prop when url is /user/:name", () => {
    const store = mockStore({ auth: { token: "testtoken" }, users: {} });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/user/testuser"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(PrivateRoute).props().path).toEqual("/user/:name");
  });

  it("finds login component for /login path", () => {
    const store = mockStore({ auth: { token: null }, users: {} });
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
