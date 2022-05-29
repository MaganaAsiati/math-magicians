import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

const MockHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer
    .create(<MockHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});