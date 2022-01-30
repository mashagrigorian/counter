import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

export type UsersType = Array<[number, number]>

test('renders learn react link', () => {
  const users: UsersType = [
    [40, 20],
    [10, 10],
    [1,2]
  ]
  render(< App users={users} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
