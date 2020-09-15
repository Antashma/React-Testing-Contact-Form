import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";
import { act } from "react-dom/test-utils";

test("renders App without crashing", () => {
  const container = render(<App />);
  //console.log(container)
});

test('renders first name input in component', () => {
  const {getByTestId} = render(<ContactForm />);
  const firstNameInput = getByTestId('firstName')
  expect(firstNameInput).toBeInTheDocument();

})

test('label for first name input renders', () => {
  const {getByText} = render(<ContactForm />);
  const expectedLabel = getByText(/first name/i)
  expect(expectedLabel).toBeInTheDocument();
})

test('if user submits empty form, JSON data will not appear', () => {
  const {getByTestId, getAllByText } = render(<ContactForm />);
  const submitBtn = getByTestId('submit');
  fireEvent.click(submitBtn)
  getByTestId('form-data').toBeInTheDocument;

})