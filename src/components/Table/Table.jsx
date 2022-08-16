import React from 'react'
import './Table.css'

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReactPaginate from  "react-paginate";
//import { useState } from "react";

const List = () => {
    
    const rows = [
        {
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          product: "Until We Meet Again bracelet",
          status: "Active",
          quantity: 42,
          category: "Men",
          on_sale: "Yes",
          vendor: "Signature Gifts",
        },
        {
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          product: "Personalized Cafetiere And Cup Set for One",
          status: "Acknowledged",
          quantity: 3,
          category: "Children",
          on_sale: "No",
          vendor: "Plush World", 
        },
        {
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          product: "Doggo tent pet boho design",
          status: "Pending",
          quantity: 9,
          category: "Home",
          on_sale: "No",
          vendor: "Plush World",
        },
    ];

    const handlePageClick = (data) => {
        console.log(data.selected);
    }

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow className="table_head">
                        <TableCell className="tableCell">Product Name</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                        <TableCell className="tableCell">Qty</TableCell>
                        <TableCell className="tableCell">Category</TableCell>
                        <TableCell className="tableCell">On Sale</TableCell>
                        <TableCell className="tableCell">Vendor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                            <TableCell className="tableCell">{row.quantity}</TableCell>
                            <TableCell className="tableCell">{row.category}</TableCell>
                            <TableCell className="tableCell">{row.on_sale}</TableCell>
                            <TableCell className="tableCell">{row.vendor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ReactPaginate 
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={4}
              onPageChange={handlePageClick}
              previousClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item'}
              nextLinkClassName={'page-link'}
              containerClassName={'pagination'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              activeClassName={'paginationActive'}
              
            />
        </TableContainer>
        
    )
}

export default List