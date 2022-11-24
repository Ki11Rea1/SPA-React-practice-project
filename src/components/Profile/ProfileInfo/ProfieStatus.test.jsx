import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfieStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("react-samurai");
  });

  test("Span with status should be dispayed on initialization", async () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const root = component.root;
    const span = await root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("input should not be displayed", () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("Span should display correct status", async () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const root = component.root;
    const span = await root.findByType("span");
    expect(span.children[0]).toBe("react-samurai");
  });

  test("Input should be displayed in edit mode instead of span", async () => {
    const component = create(<ProfileStatus status="react-samurai" />);
    const root = component.root;
    const span = await root.findByType("span");
    span.props.onDoubleClick();
    const input = await root.findByType("input");
    expect(input.props.value).toBe("react-samurai");
  });

  test("Callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="react-samurai" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
