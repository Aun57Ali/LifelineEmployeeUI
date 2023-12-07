import React, { useState } from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardFooter,
} from "reactstrap";

const samplePatientsData = [
  {
    BA_H_ID: "72",
    BA_BloodGroup: "B Postive",
    BA_BottlesAvailable: "23",
    BA_Date: "18-10-2023",
    BA_Time: "09:30 PM",
  },
  {
    BA_H_ID: "72",
    BA_BloodGroup: "A Negative",
    BA_BottlesAvailable: "32",
    BA_Date: "18-10-2023",
    BA_Time: "09:30 PM",
  },
];

const ROWS_PER_PAGE_OPTIONS = [5, 10, 15];

export default function Blood() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPatient = currentPage * rowsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - rowsPerPage;
  const currentPatients = samplePatientsData.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Blood Availability</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Hospital ID</th>
                    <th>BloodGroup</th>
                    <th>Bottles Available</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPatients.map((patient, index) => (
                    <tr key={index}>
                      <td>
                        <p>{patient.BA_H_ID}</p>
                      </td>
                      <td>
                        <p>{patient.BA_BloodGroup}</p>
                      </td>
                      <td>
                        <p>{patient.BA_BottlesAvailable}</p>
                      </td>
                      <td>
                        <p>{patient.BA_Date}</p>
                      </td>
                      <td>
                        <p>{patient.BA_Time}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
            <CardFooter>
              <Row>
                <Col className="pr-md-1" md="3">
                  <span>Rows Per Page:</span>
                  <select
                    className="form-control"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                  >
                    {ROWS_PER_PAGE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col md="6" className="d-flex justify-content-center">
                  <Pagination style={{ marginTop: "40px" }}>
                    {Array.from(
                      {
                        length: Math.ceil(
                          samplePatientsData.length / rowsPerPage
                        ),
                      },
                      (_, i) => i + 1
                    ).map((number) => (
                      <PaginationItem
                        key={number}
                        active={number === currentPage}
                      >
                        <PaginationLink
                          onClick={() => paginate(number)}
                          href="#"
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </Pagination>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
