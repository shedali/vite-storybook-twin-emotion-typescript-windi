import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import { assert, test, describe, expect, it } from "vitest";
import renderer from "react-test-renderer";

const testRenderer = renderer.create(
  <Button variant="primary" label="hello"></Button>
);
// @vitest-environment happy-dom
describe("<Button/>", () => {
  it("the title is visible", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
    render(<Button variant="primary" label="hello" />);
    expect(screen.getByText(/hello/i)).toBeTruthy();
  });
});
