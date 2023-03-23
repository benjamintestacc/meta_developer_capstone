import { render, fireEvent, screen } from "@testing-library/react";
import About from "./About";

test("Renders the BookingForm heading", () => {
  // render the App component
  render(<About />);
  const headingElement = screen.getByText("About");
  expect(headingElement).toBeInTheDocument();
});
