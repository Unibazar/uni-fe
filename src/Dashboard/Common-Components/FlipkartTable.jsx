// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   fontWeight: "bold",
//   backgroundColor: "black",
//   color: "white",
// }));

// const OrderTable = ({ orders, onRowClick }) => {
//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Order ID</StyledTableCell>
//             <StyledTableCell>Platform</StyledTableCell>
//             <StyledTableCell>Order Date</StyledTableCell>
//             <StyledTableCell>Status</StyledTableCell>
//             <StyledTableCell>Total Amount</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {orders?.length > 0 ? (
//             orders?.map((order) => (
//               <TableRow onClick={onRowClick} key={order?.AmazonOrderId}>
//                 <TableCell>{order?.AmazonOrderId}</TableCell>
//                 <TableCell>{order?.SalesChannel || "Amazon.in"}</TableCell>
//                 <TableCell>{new Date(order?.PurchaseDate).toLocaleDateString()}</TableCell>
//                 <TableCell>{order?.OrderStatus}</TableCell>
//                 <TableCell>{`${order?.OrderTotal?.CurrencyCode} ${order?.OrderTotal?.Amount}`}</TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={5} align="center">
//                 No orders found
//               </TableCell>
//             </TableRow>
//           )}

//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default OrderTable;
import * as React from "react";
import {
  alpha,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/system";
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteIcon from '@mui/icons-material/Delete';

// Styled TableCell for header
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: "white",
  color: "gray",
}));

// Define the head cells for the table
const headCells = [
  {
    id: "OrderId",
    numeric: false,
    disablePadding: true,
    label: "Order ID",
  },
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Title",
  },
  {
    id: "SalesChannel",
    numeric: false,
    disablePadding: false,
    label: "Platform",
  },
  {
    id: "PurchaseDate",
    numeric: false,
    disablePadding: false,
    label: "Order Date",
  },
  {
    id: "diapatchbydate",
    numeric: false,
    disablePadding: false,
    label: "Dispatch By Date",
  },
  {
    id: "deliverydate",
    numeric: false,
    disablePadding: false,
    label: "Delivery By Date",
  },
  {
    id: "OrderStatus",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "OrderTotal",
    numeric: true,
    disablePadding: false,
    label: "Total Amount",
  },
];

// Enhanced Table Head Component
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all orders",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// Enhanced Table Toolbar Component
function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: "1 1 100%" }} variant="h6" id="tableTitle" component="div">
          Orders
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

// Main OrderTable Component
export default function FlipkartOrderTable({ orders, onRowClick }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("PurchaseDate");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = orders.map((order) => order.OrderId); // Change to OrderId for both platforms
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const visibleRows = React.useMemo(() => {
    return [...orders]
      .sort((a, b) => {
        if (order === "asc") {
          return a[orderBy] > b[orderBy] ? 1 : -1;
        } else {
          return a[orderBy] < b[orderBy] ? 1 : -1;
        }
      })
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [order, orderBy, page, rowsPerPage, orders]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Shipped":
        return "green";
      case "Delivered":
        return "blue";
      case "Pending":
        return "orange";
      case "CANCELLED":
        return "red";
      default:
        return "black";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={orders.length}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(row?.OrderId); // Use OrderId for both platforms
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row?.OrderId)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row?.OrderId}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row?.orderItemId} {/* Adjusted for both platforms */}
                    </TableCell>
                    <TableCell>
                        {row?.title.toUpperCase()}
                    </TableCell>
                    <TableCell>{row?.platform || "Unknown"}</TableCell> {/* Default to "Unknown" if not provided */}
                    <TableCell>{new Date(row?.orderDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(row?.dispatchByDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(row?.deliverByDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(row?.updatedAt).toLocaleDateString()}</TableCell>
                    <TableCell sx={{ color: getStatusColor(row?.status) }}>{row?.status}</TableCell>
                    {/* <TableCell align="right">{`${row?.OrderTotal?.CurrencyCode || ''} ${row?.OrderTotal?.Amount || 0}`}</TableCell> */}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}