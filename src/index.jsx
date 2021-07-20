import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 25,
    name: 'Roman',
  },
  {
    id: 'id-5',
    age: 22,
    name: 'Olya',
  },
  {
    id: 'id-6',
    age: 20,
    name: 'Nastya',
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-8',
    age: 101,
    name: 'Mykola',
  },
  {
    id: 'id-9',
    age: 77,
    name: 'Petro',
  },
  {
    id: 'id-10',
    age: 33,
    name: 'Ivan',
  },
];

ReactDOM.render(<UsersList users={users}/>, rootElement);
