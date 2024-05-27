import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders task label", () => {
	render(<App />);
	const labelElement = screen.getByText(/Task:/i);
	expect(labelElement).toBeInTheDocument();
});

test("App component renders without crashing", () => {
	render(<App />);
});

test("App component matches snapshot", () => {
	const { asFragment } = render(<App />);
	expect(asFragment()).toMatchSnapshot();
});
