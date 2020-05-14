import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import Navbar from '../src/Navbar';
import Home from '../src/Home';
import SignUp from '../src/SignUp';
import SignIn from '../src/SignIn';
import Dashboard from '../src/Dashboard';

describe('Test Components Renders Suite', () => {
  test('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  test('Navbar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navbar />, div);
  });
  test('Home renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });
  test('SignUp renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUp />, div);
  });
  test('SignIn renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignIn />, div);
  });
  test('Dashboard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
  });
});
