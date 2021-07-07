import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/UserServicesContainer.css';
import React from 'react';
import UserService from '../components/UserService'
import Carousel from '../components/Carousel'


export default function UserServicesContainer() {
  return (
    <div>
      <Carousel />
      <UserService />
    </div>
  );
};

