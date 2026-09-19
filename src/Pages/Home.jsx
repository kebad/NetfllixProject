import React from 'react'
import { Header } from '../Component/header/Header'
import { Footer } from '../Component/footer/Footer'
import Banner from '../Component/Banner/Banner';
import RowList from '../Component/Rows/Row/RowList/RowList';

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}
