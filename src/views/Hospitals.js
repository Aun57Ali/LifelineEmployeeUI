import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Card,
  Row,
  Col,
} from "reactstrap";

const Hospitals = () => {
  const dummyData = [
    {
      A_D_ID: 1,
      A_PatientName: "Albert Ross",
      A_PatientDOB: "02-10-1969",
      A_Date: "18-10-2023",
      A_Time: "09:30 PM",
      A_Mobile: "0315-2938437",
      A_Email: "aross@gmail.com",
      A_Reason: "Fever",
    },
    {
      A_D_ID: 2,
      A_PatientName: "Albert Ross",
      A_PatientDOB: "02-10-1969",
      A_Date: "18-10-2023",
      A_Time: "09:30 PM",
      A_Mobile: "0315-2938437",
      A_Email: "aross@gmail.com",
      A_Reason: "Fever",
    },
  ];

  const columns = [
    { field: "A_D_ID", headerName: "Doctor ID" },
    {
      field: "A_PatientName",
      headerName: "Patient Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "A_PatientDOB",
      headerName: "DOB",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "A_Date",
      headerName: "Date",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "A_Time",
      headerName: "Time",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "A_Mobile",
      headerName: "Contact No.",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    { field: "A_Email", headerName: "Email", flex: 1 },
    {
      field: "A_Reason",
      headerName: "Reason",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Accept",
      headerName: "",
      flex: 1,
      renderCell: ({ row: { A_D_ID } }) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-success" style={{ textAlign: "center" }}>
            Accept
          </button>
        </div>
      ),
    },
    {
      field: "Reject",
      headerName: "",
      flex: 1,
      renderCell: ({ row: { A_D_ID } }) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="btn btn-warning" style={{ textAlign: "center" }}>
            Reject
          </button>
        </div>
      ),
    },
  ];

  const getRowId = (row) => row.A_D_ID;

  const getRowClassName = (params) => {
    return 'custom-row'; // Add a custom class to each row
  };

  // CSS styles for the custom-row class
  const customRowStyles = `
    .custom-row .MuiDataGrid-cell {
      color: #FFFFFFCC !important; // Change text color to white
    }
  `;

  return (
    <div className="content">
      <Row>
        <Col xs="12">
          <Card>
          <Box m="20px">
            <Box style={{ display: "flex" }}>
              <div style={{ marginLeft: "auto" }}>
                <button className="btn btn-success">Add Appointment</button>
              </div>
            </Box>

            <Box
              m="0px 0 0 0"
              height="70vh"
              sx={
                {
                  
                  // Styles for DataGrid components
                }
              }
            >
              <style>{customRowStyles}</style>
              <DataGrid
                rows={dummyData}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                getRowId={getRowId}
                getRowClassName={getRowClassName}
              />
            </Box>
          </Box>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Hospitals;
