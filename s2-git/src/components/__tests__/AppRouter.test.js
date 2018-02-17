import React from "react";
import AppRouter from "../AppRouter";
import { MemoryRouter, Link, Route, Switch } from "react-router-dom";
import { shallow, mount } from "enzyme";
import PrivateRoute from "../PrivateRoute";

it("finds Switch component", () => {
  const wrapper = mount(
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(Switch)).toHaveLength(1);
});

it("mounts PrivateRoute component for /user/dex157 path", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/user/dex157']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(PrivateRoute)).toHaveLength(1);
});

it("passes right prop when url is /user/dex157", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/user/dex157']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(PrivateRoute).props().path).toEqual('/user/dex157');
});

it("mounts PrivateRoute component for /user/:name path", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/user/testuser']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(PrivateRoute)).toHaveLength(1);
});

it("passes right prop when url is /user/:name", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/user/testuser']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(PrivateRoute).props().path).toEqual('/user/:name');
});

it("mount Route component for /login path", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/login']}>
      <AppRouter />
    </MemoryRouter>
  );
  expect(wrapper.find(Route)).toHaveLength(1);
});
