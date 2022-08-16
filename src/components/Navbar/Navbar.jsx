import React from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <Stack spacing={2} direction="row">
        <input type='text' placeholder='Product Name or SKU'></input>
        <input type='text' placeholder='Vendor Name or Vendor SKU'></input>
        <Button variant="outlined">on sale</Button>
        <Button variant="outlined">stock status</Button>
        <Button variant="outlined">product status</Button>
        <Button variant="outlined">mm/dd/yy - mm/dd/yy</Button>
        <Button variant="outlined">Apply</Button>
    </Stack>
    
  )
}
export default Navbar;