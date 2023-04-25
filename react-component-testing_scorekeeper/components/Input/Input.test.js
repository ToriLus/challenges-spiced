import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const labelText = "Player Names";
  const placeholderText = "e.g. John Doe";
  const inputName = "playerNames";
  const inputValue = "John Doe";
  const onChange = jest.fn();
  const required = true;

  render(
    <Input
      labelText={labelText}
      placeholder={placeholderText}
      name={inputName}
      value={inputValue}
      onChange={onChange}
      required={required}
    />
  );

  expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: labelText })).toHaveAttribute(
    "name",
    inputName
  );
  expect(screen.getByRole("textbox", { name: labelText })).toHaveAttribute(
    "value",
    inputValue
  );
  expect(screen.getByRole("textbox", { name: labelText })).toHaveAttribute(
    "required"
  );
  expect(screen.getByRole("textbox", { name: labelText })).toHaveAttribute(
    "type",
    "text"
  );
});

test("calls callback on every user input", async () => {
  //type(screen.getByLabelText("Player Names"), "John Doe");
  const handle = jest.fn();
  const user = userEvent.setup();

  render(<Input onChange={handle} labelText="something" name="something" />);

  const input = screen.getByLabelText("something");
  await user.type(input, "string");

  expect(handle).toHaveBeenCalledTimes(6);
});
