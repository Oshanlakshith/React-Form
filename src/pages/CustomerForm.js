import {Box, Grid, Paper, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";
import Table from '@mui/material/Table';
import './css/customer.css';
import './css/customerButton.css'
import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";

function CustomerForm() {

    return <div className='customer__navBar'><h2>Customer Registation</h2>

        <div className='color__Form'>
            <div>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className='text__Form'>
                        <TextField
                            id="outlined-textarea"
                            label="Customer Id"
                            placeholder="Customer Id"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Customer Name"
                            placeholder="Name"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Email"
                            placeholder="Email"
                            multiline
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-textarea"
                            label="Password"
                            placeholder="password"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="City"
                            placeholder="city"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="zip Code"
                            placeholder="Placeholder"
                            multiline
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-textarea"
                            label="Street"
                            placeholder="Placeholder"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Street No"
                            placeholder="Placeholder"
                            multiline
                        />
                        <TextField
                            id="outlined-textarea"
                            label="Mobole No"
                            placeholder="mobile No"
                            multiline
                        />
                    </div>
                    <div className='Buttonalign'>
                        <button className='Save'>Save
                        </button>
                        <button className='Delete'>Delete
                        </button>
                        <button className='Update'>Update
                        </button>
                    </div>
                </Box>
            </div>
        </div>
        <div className='customerTable'>
            <Grid container>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} size="small" aria-label="Customer table"/>
                    <TableHead style={{backgroundColor:"#55acc3"}}>
                        <TableRow>
                            <TableCell align="left">Customer Id</TableCell>
                            <TableCell align="left"> Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Password</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="left">Zip-Code</TableCell>
                            <TableCell align="left">Street</TableCell>
                            <TableCell align="left">Street No</TableCell>
                            <TableCell align="left">Mobile No</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">C001</TableCell>
                                <TableCell align="left">Oshan</TableCell>
                                <TableCell align="left">Oshan@Gmail</TableCell>
                                <TableCell align="left">12345</TableCell>
                                <TableCell align="left">Horana</TableCell>
                                <TableCell align="left">12310</TableCell>
                                <TableCell align="left">Govinna</TableCell>
                                <TableCell align="left">299</TableCell>
                                <TableCell align="left">0769856565</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left">C002</TableCell>
                                <TableCell align="left">Oshan</TableCell>
                                <TableCell align="left">Oshan@Gmail</TableCell>
                                <TableCell align="left">12345</TableCell>
                                <TableCell align="left">Horana</TableCell>
                                <TableCell align="left">12310</TableCell>
                                <TableCell align="left">Govinna</TableCell>
                                <TableCell align="left">299</TableCell>
                                <TableCell align="left">0769856565</TableCell>
                            </TableRow>
                        </TableBody>
                </TableContainer>
            </Grid>
        </div>
    </div>
}

export default CustomerForm;