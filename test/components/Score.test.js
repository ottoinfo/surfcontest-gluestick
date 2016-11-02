/*global React*/
/*global describe it*/
/*global expect*/
import Score from "components/Score";
import { shallow } from "enzyme";

describe("components/Score", () => {
  it("renders without an issue", () => {
    const subject = <Score />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

