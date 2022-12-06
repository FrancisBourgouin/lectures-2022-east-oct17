import { render } from "@testing-library/react";
import Result from "../Result";

describe("Resting the Result component behaviour based off props", () => {
  it("should show 'YOU CAN TRY AGAIN' if it's a tie", () => {
    // ...
    const { queryByText, debug } = render(<Result result="tie" />);

    const resultMessage = queryByText("YOU CAN TRY AGAIN!");
    const waitingMessage = queryByText("Waiting for your choice !");

    // debug();
    expect(resultMessage).toBeInTheDocument();
    expect(waitingMessage).not.toBeInTheDocument();
  });
  it("should show 'Woohoo ! MAN OVER MACHINE' if it's a player win", () => {
    // ...
    const { getByText, queryByText, debug } = render(<Result result="player" />);

    const result = getByText("Woohoo ! MAN OVER MACHINE");
    // const waitingMessage = getByText("Waiting for your choice !");

    // debug();
    expect(result).toBeInTheDocument();
    // expect(waitingMessage).not.toBeInTheDocument();
  });
  it("should show 'Skynet has won.' if it's a player lose", () => {
    // ...
    const { queryByText, debug } = render(<Result result="computer" />);

    const resultMessage = queryByText("Skynet has won.");
    const waitingMessage = queryByText("Waiting for your choice !");

    // debug();
    expect(resultMessage).toBeInTheDocument();
    expect(waitingMessage).not.toBeInTheDocument();
  });
  it("should show 'Waiting for your choice !' if it's waiting", () => {
    // ...
    const { queryByText, debug } = render(<Result />);

    const waitingMessage = queryByText("Waiting for your choice !");

    // debug();
    expect(waitingMessage).toBeInTheDocument();
  });
});
