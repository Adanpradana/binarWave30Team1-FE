import { Container, Table } from "react-bootstrap";
import api from "../../utils/services/api";
import { Children, useEffect, useState } from "react";

export default function Dashboard() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    try {
      const response = await api.get("/players");
      setDatas(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        paddingLeft: "250px",
        paddingTop: "80px",
      }}
    >
      <Container fluid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              datas.map((data, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.Username}</td>
                  <td>{data.Total_Score}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
