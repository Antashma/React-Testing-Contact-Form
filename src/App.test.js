import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

describe('user enters correct name', () => {
  it('name input is Sam', () {
  //arrange (setup)
  let expected = 'Sam';
  
  //act (doing the thing)
  
  
  //assert (having done the thing, did it do it right? / 'what could possibly fail?' )
  });
});
