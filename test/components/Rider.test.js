/*global React*/
/*global describe it*/
/*global expect*/
import Rider from "components/Rider";
import { shallow } from "enzyme";

describe("components/Rider", () => {
  it("renders without an issue", () => {
    const subject = <Rider />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

