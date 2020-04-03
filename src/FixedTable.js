import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import ModalDetail from './ModalDetail.js'



const columns = [
    { id: 'index', label: 'No', minWidth: 20 },
    { id: 'image', label: '', minWidth: 30 }, 
    { id: 'name', label: 'Name', minWidth: 30 }, 
    { id: 'button', label: '', minWidth: 10 }, 
    
];



const useStyles = makeStyles({
  root: {
    width: '50%',
  },
  container: {
    maxHeight: 600,
  },
});


export default function StickyHeadTable(props) {
  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState({
    state:false,
    data:{}
  });


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const detailOpen = (param) => {
  
    setOpen({state:true,data:param});
  };

  const detailClose = () => {
    setOpen({state:false,data:{}});
  };


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.detail.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,idx) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row.data[column.id];
                    const img = row.data.sprites.back_default
                    if(column.id === 'index'){
                        return (
                        <TableCell key={column.id}  style={{ minWidth: column.minWidth }}>
                            {page*rowsPerPage+idx+1}
                        </TableCell>
                        );
                    }
                    if(column.id === 'button'){
                        return(
                        <TableCell key={column.id}  style={{ minWidth: column.minWidth }}>
                            <Button onClick={()=>detailOpen(row.data)} style={{backgroundColor:"#cf4e60", color:'white', marginTop:'0.5em', width:'60%', fontWeight:'bolder',fontSize:'0.77rem'}} >
                            Detail
                            </Button>
                        </TableCell>
                        );
                    }
                    if(column.id === 'image'){
                      return(
                        <TableCell key={column.id}  style={{ minWidth: column.minWidth }}>
                         <img src = {img} />
                        </TableCell>
                        );
                    }
                    return (
                      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                        {column.format && typeof value === 'number' ? column.format(value) : value.charAt(0).toUpperCase() + value.slice(1)}
                      </TableCell>
                      
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.rows.pokemon.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <ModalDetail open={open} detailClose ={()=>detailClose()} ></ModalDetail>
    </Paper>
  );
}
