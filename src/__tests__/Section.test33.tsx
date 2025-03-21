import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import  Section  from "../components/Section";

describe("Section2", () => {
    it("renders a section with heading and content 22", () => {
        render(<Section heading="Basic" content="Hello world" />);

        expect(screen.getByText("Basic")).toBeInTheDocument();
        expect(screen.getByText("Hello world")).toBeInTheDocument();
        expect(screen.getByText("Hello world")).toBeInTheDocument();
        expect(screen.getByText("Hello world")).toBeInTheDocument();

    });
});