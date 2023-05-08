import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";
import Button from "../Button";

test("renders player information and two buttons", () => {
  const name = "name";
  const score = "score";
  const onDecrease = jest.fn();
  const onIncrease = jest.fn();

  render(
    <Player
      name={name}
      score={score}
      onDecreasePlayerScore={onDecrease}
      onIncreasePlayerScore={onIncrease}
    />
  );

  expect(screen.getByText("name")).toBeInTheDocument();
  expect(screen.getByText("score")).toBeInTheDocument();
  expect(screen.getByLabelText("Increase Score")).toBeInTheDocument();
  expect(screen.getByLabelText("Decrease Score")).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  const user = userEvent.setup();

  render(
    <Player
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  const decreaseButton = screen.getByLabelText("Decrease Score");
  const increaseButton = screen.getByLabelText("Increase Score");

  await user.click(increaseButton);
  await user.click(decreaseButton);

  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
