import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfieStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("react-samurai");
  });

  test("Span with status should be dispayed on initialization", () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.props.children).toBe("react-samurai");
  });
});
