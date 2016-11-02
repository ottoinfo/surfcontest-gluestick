/*global React*/
/*global describe it*/
/*global expect*/
import Surfers from "components/Surfers";
import { shallow } from "enzyme";

describe("components/Surfers", () => {
  it("renders without an issue", () => {
    const subject = <Surfers />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

