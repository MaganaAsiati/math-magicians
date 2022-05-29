import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('To test the functionality of calculator component', () => {
  test('should Show 27 if buttons 2,1,+ and 6 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '6' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('27')).toBeTruthy();
  });

  test('should Show 0.25 if buttons .,2 and 5 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));

    expect(screen.getByText('0.25')).toBeTruthy();
  });

  test('should Show 12 if buttons 4,x and 3 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: 'x' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('12')).toBeTruthy();
  });

  test('should Show -91 if buttons 9,1 and +/- are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '+/-' }));

    expect(screen.getByText('-91')).toBeTruthy();
  });


  test('should Show 11 if buttons 1,2,1,+,1 and 1 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '÷' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('11')).toBeTruthy();
  });

  test('should Show 2 if buttons 5,0,%, and 6 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '%' }));
    fireEvent.click(screen.getByRole('button', { name: '6' }));

    expect(screen.getByText('2')).toBeTruthy();
  });

  test('should Show -3 if buttons 2,4,+/-,%, and 7 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '+/-' }));
    fireEvent.click(screen.getByRole('button', { name: '%' }));
    fireEvent.click(screen.getByRole('button', { name: '7' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('-3')).toBeTruthy();
  });

  test('should Show 1.75 if buttons 2,.,2,5,-,. and 5 are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    fireEvent.click(screen.getByRole('button', { name: '.' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('1.75')).toBeTruthy();
  });

  test('should Show -7 if buttons 3,+/-,+,4 and +/- are clicked', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '+/-' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '4' }));
    fireEvent.click(screen.getByRole('button', { name: '+/-' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByText('-7')).toBeTruthy();
  });
});
