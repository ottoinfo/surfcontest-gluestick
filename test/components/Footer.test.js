/*global React*/
/*global describe it*/
/*global expect*/
import Footer from "components/Footer";
import { shallow } from "enzyme";

describe("components/Footer", () => {
  it("renders without an issue", () => {
    const subject = <Footer />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

