import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';
import Navbar from '../src/components/layout/Navbar';
import Home from '../src/components/homepage/Home';
import SignUp from '../src/components/auth/SignUp';
import SignIn from '../src/components/auth/SignIn';
import Dashboard from '../src/components/dashboard/Dashboard';

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
