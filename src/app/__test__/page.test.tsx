import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders a component", () => {
    render(<Home />);
    const heading = screen.getByText("Hello");
    expect(heading).toBeTruthy();
  });
});
