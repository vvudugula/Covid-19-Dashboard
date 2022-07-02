import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Line } from "react-chartjs-2";
import { AppService } from '../../services/ApiService';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn } from 'mdb-react-ui-kit';
import { DotLoaderOverlay } from 'react-spinner-overlay';

export default function CountryComp(prop: any) {
  const appServ = new AppService();

  let dateLbl: any = [];
  let confirmed: any = [];
  let recovered: any = [];
  let deaths: any = [];
  let navigate = useNavigate();

  let param = useParams();
  const [countryLbl, setCountryLbl] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [confirmData, serConfirmData] = useState({ labels: dateLbl, datasets: [{ label: "Confirmed", data: [], fill: false, borderColor: "blue" }] });
  const [recoveredData, setRecoveredData] = useState({ labels: dateLbl, datasets: [{ label: "Recovered", data: [], fill: false, borderColor: "green" }] });
  const [deathData, setDeathData] = useState({ labels: dateLbl, datasets: [{ label: "Deaths", data: [], fill: false, borderColor: "red" }] });

  useEffect(() => {
    appServ.getByCountry(param.id as string)
      .then((response: any) => {
        setCountryLbl(response[0].Country);
        response.slice(-31).forEach((cntry: any) => {
          dateLbl.push(cntry.Date.split('T')[0]);
          confirmed.push(cntry.Confirmed);
          recovered.push(cntry.Recovered);
          deaths.push(cntry.Deaths);
        });
        serConfirmData({ labels: dateLbl.slice(-30), datasets: [{ label: "Confirmed", data: diff(confirmed).slice(-30), fill: false, borderColor: "blue" }] })
        setRecoveredData({ labels: dateLbl.slice(-30), datasets: [{ label: "Recovered", data: diff(recovered).slice(-30), fill: false, borderColor: "green" }] })
        setDeathData({ labels: dateLbl.slice(-30), datasets: [{ label: "Deaths", data: diff(deaths).slice(-30), fill: false, borderColor: "red" }] })
        setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });

  }, [])

  function diff(data: any) {
    let temp: any = [];
    data.forEach((cntry: number, index: number) => {
      if (index == 0) {
        temp.push(cntry);
      } else {
        temp.push(cntry - data[index - 1]);
      }
    });
    return temp;
  }

  return (
    <>
      <DotLoaderOverlay
        loading={loading}
        color = "black"
        size = {20}
        overlayColor="rgba(0,153,255,0.2)"
      />
      <MDBContainer>
        <MDBRow >
          <MDBCol md="12" className='text-center'><strong>Last 30 days metrics of {countryLbl}</strong></MDBCol>
        </MDBRow>
        <hr />
      </MDBContainer>
      <MDBContainer>
        <MDBRow >
          <MDBCol md="4" className='text-left'>
            <MDBCard style={{ textAlign: "left" }}>
              <Line data={confirmData} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className='text-left'>
            <MDBCard style={{ textAlign: "left" }}>
              <Line data={recoveredData} />
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className='text-left'>
            <MDBCard style={{ textAlign: "left" }}>
              <Line data={deathData} />
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBBtn color="dark" onClick={() => navigate('/')}>Back</MDBBtn>
      </MDBContainer>
    </>
  );
}