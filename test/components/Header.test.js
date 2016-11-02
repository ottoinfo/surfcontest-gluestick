/*global React*/
/*global describe it*/
/*global expect*/
import Header from "components/Header";
import { shallow } from "enzyme";

describe("components/Header", () => {
  it("renders without an issue", () => {
    const subject = <Header />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

