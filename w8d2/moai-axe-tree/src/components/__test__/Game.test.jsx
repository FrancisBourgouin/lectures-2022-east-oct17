import { render, fireEvent, waitForElement } from "@testing-library/react";

import Game from "../Game";

describe("Testing the Game component", () => {
  it("should load without any issues", () => {
    // ...
    const { queryByText } = render(<Game />);

    const waitingMessage = queryByText("Waiting for your choice !");

    expect(waitingMessage).toBeInTheDocument();
  });
  it("should show the computer winning when we click on an option (cheating)", () => {
    // ...
    // Click on a choice (onClick / handleClick)
    const { queryByTestId, getByText } = render(<Game />);

    const computer = getByText("🤖");

    expect(computer).toHaveClass("cheating");

    const optionToClick = queryByTestId("🌳");

    fireEvent.click(optionToClick);

    waitForElement(() => getByText("Skynet has won.")).then(() => {
      // Result message changing to Skynet has won.
      const resultMessage = getByText("Skynet has won.");
      expect(resultMessage).toBeInTheDocument();
    });
  });
  // it("should show the computer winning when we click on an option (cheating)", () => {
  //   // ...
  //   // Click on a choice (onClick / handleClick)
  //   const { queryByTestId, getByText } = render(<Game />);

  //   const computer = getByText("🤖");

  //   expect(computer).toHaveClass("cheating");

  //   const optionToClick = queryByTestId("🌳");

  //   fireEvent.click(optionToClick);

  //   const resultMessage = getByText("Skynet has won.");
  //   // Result message changing to Skynet has won.

  //   expect(resultMessage).toBeInTheDocument();
  // });
});

// urlDatabase = {
//   b2xVn2: "http://lighthouselabs.com",
// };
// urlDatabase = {
//   b2xVn2: {
//     longURL: "http://lighthouselabs.com",
//     userId: "dcowkdo",
//   },
// };
