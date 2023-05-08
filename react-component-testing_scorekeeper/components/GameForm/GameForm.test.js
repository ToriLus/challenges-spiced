import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  expect(screen.getByLabelText("Name of game")).toBeInTheDocument();

  expect(
    screen.getByLabelText("Player names, separated by comma")
  ).toBeInTheDocument();

  expect(screen.getByText("Create game")).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  expect(screen.getByText("Create a new game")).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const onSubmit = jest.fn();

  render(<GameForm onCreateGame={onSubmit} />);
  const user = userEvent.setup();
  const nameOfGame = screen.getByLabelText("Name of game");

  const playerNames = screen.getByLabelText("Player names, separated by comma");

  const button = screen.getByRole("button");

  await user.type(nameOfGame, "no");
  await user.type(playerNames, "ugh, someone, another");
  await user.click(button);

  expect(onSubmit).toHaveBeenCalledWith({
    nameOfGame: "no",
    playerNames: ["ugh", "someone", "another"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const onSubmit = jest.fn();

  render(<GameForm onCreateGame={onSubmit} />);
  const user = userEvent.setup();
  const nameOfGame = screen.getByLabelText("Name of game");

  const playerNames = screen.getByLabelText("Player names, separated by comma");

  const button = screen.getByRole("button");

  await user.type(nameOfGame, "no");

  await user.click(button);

  expect(onSubmit).not.toHaveBeenCalledWith();
});
