import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardFooter,
} from "reactstrap";

const samplePatientsData = [
  {
    A_PatientName: "Albert Ross",
    A_PatientDOB: "02-10-1969",
    A_Date: "18-10-2023",
    A_Time: "09:30 PM",
    A_Mobile: "0315-2938437",
    A_Email: "aross@gmail.com",
    A_Reason: "Fever",
    A_D_ID: "281",
    A_DoctorName: "Dr Josh",
  },
  {
    A_PatientName: "Tim Miller",
    A_PatientDOB: "05-02-1980",
    A_Date: "18-10-2023",
    A_Time: "07:45 PM",
    A_Mobile: "0336-4239892",
    A_Email: "tim67@gmail.com",
    A_Reason: "Fever",
    A_D_ID: "223",
    A_DoctorName: "Dr Sara",
  },
  {
    A_PatientName: "Emma Watson",
    A_PatientDOB: "12-15-1992",
    A_Date: "22-11-2023",
    A_Time: "10:30 AM",
    A_Mobile: "0555-1234567",
    A_Email: "emma.w@example.com",
    A_Reason: "Headache",
    A_D_ID: "112",
    A_DoctorName: "Dr. Johnson",
  },
  {
    A_PatientName: "Sophia Lee",
    A_PatientDOB: "03-20-1985",
    A_Date: "05-12-2023",
    A_Time: "02:15 PM",
    A_Mobile: "0777-9876543",
    A_Email: "sophia.lee@example.com",
    A_Reason: "Allergy",
    A_D_ID: "325",
    A_DoctorName: "Dr. Brown",
  },
  {
    A_PatientName: "Daniel Johnson",
    A_PatientDOB: "09-08-1976",
    A_Date: "30-11-2023",
    A_Time: "09:00 AM",
    A_Mobile: "0888-1112233",
    A_Email: "daniel.j@example.com",
    A_Reason: "Stomach Pain",
    A_D_ID: "478",
    A_DoctorName: "Dr. Garcia",
  },
  {
    A_PatientName: "Olivia Parker",
    A_PatientDOB: "06-25-1990",
    A_Date: "12-12-2023",
    A_Time: "11:45 AM",
    A_Mobile: "0999-5556677",
    A_Email: "olivia.p@example.com",
    A_Reason: "Cold",
    A_D_ID: "556",
    A_DoctorName: "Dr. Rodriguez",
  },
  {
    A_PatientName: "William Adams",
    A_PatientDOB: "01-10-1982",
    A_Date: "08-12-2023",
    A_Time: "04:20 PM",
    A_Mobile: "0666-7778899",
    A_Email: "will.adams@example.com",
    A_Reason: "Backache",
    A_D_ID: "632",
    A_DoctorName: "Dr. Wilson",
  },
];

const ROWS_PER_PAGE_OPTIONS = [5, 10, 15];

export default function Appointment() {
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
              <CardTitle tag="h4">Appointments</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Patient Name</th>
                    <th>DOB</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Reason</th>
                    <th>D.No.</th>
                    <th>Doctor Name</th>
                    <th>Accept</th>
                    <th>Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPatients.map((patient, index) => (
                    <tr key={index}>
                      <td>
                        <p>{patient.A_PatientName}</p>
                      </td>
                      <td>
                        <p>{patient.A_PatientDOB}</p>
                      </td>
                      <td>
                        <p>{patient.A_Date}</p>
                      </td>
                      <td>
                        <p>{patient.A_Time}</p>
                      </td>
                      <td>
                        <p>{patient.A_Mobile}</p>
                      </td>
                      <td>
                        <p>{patient.A_Email}</p>
                      </td>
                      <td>
                        <p>{patient.A_Reason}</p>
                      </td>
                      <td>
                        <p>{patient.A_D_ID}</p>
                      </td>
                      <td>
                        <p>{patient.A_DoctorName}</p>
                      </td>
                      <td>
                        <button className="btn btn-success">Accept</button>
                      </td>
                      <td>
                        <button className="btn btn-warning">Reject</button>
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
