import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation players={[{ name: "John" }]} />);

  const playerLink = screen.getByRole("link", { name: "Play" });
  const historyLink = screen.getByRole("link", { name: "History" });

  expect(playerLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});
