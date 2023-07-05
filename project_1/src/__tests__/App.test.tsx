import { render, screen, fireEvent } from "@testing-library/react";
import { List } from "../List";
import App from "../App";

import { birthdayData as mockPeople } from "../data";

describe("List component", () => {
  test("Renders list of people correctly", () => {
    render(<List people={mockPeople} />);
    let articleElement = document.querySelectorAll(".person");
    console.log(articleElement.length);
    expect(articleElement.length).toBe(mockPeople.length);

    mockPeople.forEach((person, index) => {                   
      const { name, age, image } = person;

      expect(articleElement[index]).toContainHTML(
        `<img src="${image}" alt="${name}" />`
      );
      expect(articleElement[index]).toContainHTML(`<h4>${name}</h4>`);
      expect(articleElement[index]).toContainHTML(`<p>${age} years</p>`);
    });
  });

  test("Does not render any person when no people provided", () => {
    render(<List people={[]} />);
    const personElements = screen.queryAllByRole("article");
    expect(personElements.length).toBe(0);
  });


});

describe("App component",  () => {
  test("App render",  async () => {
    render(<App />);
    const h3Element =  await screen.getByRole("heading", { level: 3 });
    expect(h3Element.textContent).toBe(`${mockPeople.length} birthday`);

    const buttonElement = await screen.findByRole('button');
    // const buttonElement=await screen.findByRole('button');
    fireEvent.click(buttonElement);
    expect(h3Element.textContent).toBe("0 birthday");
  });
});
