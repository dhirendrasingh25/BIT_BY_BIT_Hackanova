import PropTypes from "prop-types";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { useEffect } from "react";

// material-ui
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// third-party
// import { NumericFormat } from 'react-number-format';

// project import
import Dot from "components/@extended/Dot";

// function createData(id, product_name, status, total_amount, total_quantity) {
//   return { id, product_name, status, total_amount, total_quantity };
// }

// const rows = [
//   createData(84564564, 'Camera Lens', 40, 2, 40570),
//   createData(98764564, 'Laptop', 300, 0, 180139),
//   createData(98756325, 'Mobile', 355, 1, 90989),
//   createData(98652366, 'Handset', 50, 1, 10239),
//   createData(13286564, 'Computer Accessories', 100, 1, 83348),
//   createData(86739658, 'TV', 99, 0, 410780),
//   createData(13256498, 'Keyboard', 125, 2, 70999),
//   createData(98753263, 'Mouse', 89, 2, 10570),
//   createData(98753275, 'Desktop', 185, 1, 98063)
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: "id",
    align: "left",
    disablePadding: false,
    label: "Tracking No.",
  },
  {
    id: "product_name",
    align: "left",
    disablePadding: true,
    label: "Product Name",
  },
  {
    id: "status",
    align: "right",
    disablePadding: false,
    label: "Total Order",
  },
  {
    id: "total_amount",
    align: "left",
    disablePadding: false,

    label: "Status",
  },
  {
    id: "total_quantity",
    align: "right",
    disablePadding: false,
    label: "Total Amount",
  },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "warning";
      title = "Pending";
      break;
    case 1:
      color = "success";
      title = "Approved";
      break;
    case 2:
      color = "error";
      title = "Rejected";
      break;
    default:
      color = "primary";
      title = "None";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

// ==============================|| ORDER TABLE ||============================== //

function OrderTable() {
  const [transactions, setTransactions] = useState([]);
  // const [order] = useState('asc');
  // const [orderBy] = useState('id');
  // const [selected] = useState([]);

  // const isSelected = (id) => selected.indexOf(id) !== -1;

  useEffect(() => {
    const callTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      console.log(querySnapshot);
      const transactionsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(transactionsData);
      console.log(transactions);
    };
    callTransactions();
  }, []);

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-of-type": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-of-type": {
              pr: 3,
            },
          }}
        >
          <OrderTableHead />
          <TableBody>
            {transactions.map((row) => {
              // const isItemSelected = isSelected(row.id);
              // const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  role="checkbox"
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  // aria-checked={isItemSelected}
                  // tabIndex={-1}
                  key={row.id}
                  // selected={isItemSelected}
                >
                  <TableCell component="th" scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.id}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.product_name}</TableCell>
                  <TableCell align="right">{row.total_quantity}</TableCell>

                  <TableCell align="left">
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell align="right">
                    <TableCell align="right">{row.total_amount}</TableCell>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default OrderTable;
