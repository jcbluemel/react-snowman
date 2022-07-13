import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";


it("ends game with loss if max guesses reached", function () {
  const { container } = render(
    <Snowman
      images={[img0, img1, img2]}
      words={["test"]}
      maxWrong={2}
    />
  )

  const aBtn = container.querySelector('button[value="a"]');
  const bBtn = container.querySelector('button[value="b"]');

  fireEvent.click(aBtn);
  fireEvent.click(bBtn);

  expect(aBtn).not.toBeInTheDocument();
  expect(container).toContainHTML("You lose");
})