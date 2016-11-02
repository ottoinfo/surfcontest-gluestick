/*global React*/
/*global describe it*/
/*global expect*/
import Results from "components/Results";
import { shallow } from "enzyme";

describe("components/Results", () => {
  it("renders without an issue", () => {
    const subject = <Results />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

