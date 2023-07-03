import React from 'react';
import { render, screen } from '@testing-library/react';
import { List } from '../List';

test('renders a list of people', () => {
  const people = [
    { id: 1, name: 'John Doe', age: 25, image: 'john.jpg' },
    { id: 2, name: 'Jane Smith', age: 30, image: 'jane.jpg' },
  ];

  render(<List people={people} />);

  const nameElements = screen.getAllByRole('heading', { level: 4 });
  expect(nameElements).toHaveLength(2);
  expect(nameElements[0]).toHaveTextContent('John Doe');
  expect(nameElements[1]).toHaveTextContent('Jane Smith');

  const ageElements = screen.getAllByRole('paragraph');
  expect(ageElements).toHaveLength(2);
  expect(ageElements[0]).toHaveTextContent('25 years');
  expect(ageElements[1]).toHaveTextContent('30 years');
});