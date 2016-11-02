/*global React*/
/*global describe it*/
/*global expect*/
import { Contest } from "containers/Contest";
import { shallow } from "enzyme";

describe("containers/Contest", () => {
  it("renders without an issue", () => {
    const subject = <Contest />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

