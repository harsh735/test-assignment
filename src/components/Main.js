import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../App.css';
import '../index.css';

function createData(name, contact, city, state) {
  return {
    name,
    contact,
    city,
    state,
    description: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        contact: '9911894415',
        name: 'Sample Traders',
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        contact: '9911891425',
        name: 'ABC Traders',
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': {borderBottom: 'unset'} }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <Button variant="contained" color="error" sx={{borderRadius: 50}}>Hide Details</Button> : <Button variant="contained" color="error" sx={{borderRadius: 50}}>View Details</Button>}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="center">{row.contact}</TableCell>
        <TableCell align="center">{row.city}</TableCell>
        <TableCell align="center">{row.state}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 5 }}>
              <Typography style={{fontFamily: 'Poppins',fontWeight: 550}} variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography variant='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique</Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{fontFamily: 'Poppins', fontWeight: 600}}>Date</TableCell>
                    <TableCell style={{fontFamily: 'Poppins', fontWeight: 600}}>Customer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.description.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                
                <TableRow>
                    <TableCell style={{fontFamily: 'Poppins', fontWeight: 600}}>Name</TableCell>
                    <TableCell style={{fontFamily: 'Poppins', fontWeight: 600}}>Contact Number</TableCell>
                </TableRow>
                <TableBody>
                  {row.description.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell >{historyRow.name}</TableCell>
                      <TableCell >{historyRow.contact}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Dohini', 9991919198, 'Gurgaon', 'Haryana'),
  createData('ABCD', 9191919191, 'Gurgaon', 'Haryana'),
  createData('ABC', 9191919191, 'Gurgaon', 'Haryana'),
  createData('TEST123', 9191919191, 'Gurgaon', 'Haryana'),
  createData('SAMPLE', 9191919191, 'Gurgaon', 'Haryana'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} id='table-main'>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{fontSize: '120%', fontWeight: '600', fontFamily: 'Poppins'}}>Name</TableCell>
            <TableCell style={{fontSize: '120%', fontWeight: '600', fontFamily: 'Poppins'}} align="center">Contact</TableCell>
            <TableCell style={{fontSize: '120%', fontWeight: '600', fontFamily: 'Poppins'}} align="center">City</TableCell>
            <TableCell style={{fontSize: '120%', fontWeight: '600', fontFamily: 'Poppins'}} align="center">State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>        
      </Table>
    </TableContainer>
    
  );
}