import React from "react";
import { Followers } from "../Followers";
import Loader from "../Loader";
import Follower from "../Follower";
import { shallow } from "enzyme";

describe("Followers component", () => {
  it("checks definition of componentDidMount method", () => {
    const wrapper = shallow(
      <Followers dispatchFetchFollowersRequest={() => {}} />
    );
    expect(wrapper.instance().componentDidMount).toBeDefined();
  });

  it("checks definition of componentWillReceiveProps method", () => {
    const wrapper = shallow(
      <Followers dispatchFetchFollowersRequest={() => {}} />
    );
    expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
  });

  it("mounts Loader if followers are not loaded", () => {
    const wrapper = shallow(
      <Followers isLoaded={false} dispatchFetchFollowersRequest={() => {}} />
    );
    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it("checks amount of followers", () => {
    const wrapper = shallow(
      <Followers
        isLoaded
        isError={false}
        dispatchFetchFollowersRequest={() => {}}
        followers={[{ login: "1" }, { login: "2" }, { login: "50" }]}
      />
    );
    expect(wrapper.find(Follower)).toHaveLength(3);
  });
});
