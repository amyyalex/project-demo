import React from 'react'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Table from '../../components/Table/Table';
import "./Home.css"



export const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Navbar/>
      <div className='listContainer'>
        <Table/>
      </div>
    </div>
  )
}
export default Home;