import { Container, Table } from "react-bootstrap";
import api from "../../utils/services/api";
import { Children, useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
export default function Dashboard() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/players");
      setDatas(response.data.payload);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
          <tbody className="w-100">
            {loading ? (
              <tr>
                <td colSpan={3}>
                  <div className="d-flex justify-content-center w-100">
                    <Blocks
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                    />
                  </div>
                </td>
              </tr>
            ) : datas.length === 0 ? (
              <tr>
                <td colSpan={3}>no data available 🙌</td>
              </tr>
            ) : (
              Children.toArray(
                datas.map((data, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{data.Username}</td>
                    <td>{data.Total_Score}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
