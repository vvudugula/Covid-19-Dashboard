import React, { useState, useEffect } from 'react';
import styles from './Metrics.module.css';
import { Container,Row, Col } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardHeader ,MDBRow,MDBCol} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { MDBBadge } from 'mdb-react-ui-kit';
import Displaylist from '../Displaylist/Displaylist';
import { AppService } from '../../services/ApiService';
import { Summary } from '../../models/Summary';
import { Country } from "../../models/Country";
import { DotLoaderOverlay } from 'react-spinner-overlay';

interface Metrics {
  newConfirmed: Number;
  newRecovered: Number;
  newDeths: Number;
  totalConfirmed: Number;
  totalRecovered: Number;
  totalDeaths: Number
}

function Metrics() {

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState({ newConfirmed: 0, newRecovered: 0, newDeths: 0, totalConfirmed: 0, totalRecovered: 0, totalDeaths: 0 });
  const [country, setCountry] = useState<Country[]>([],);
  const appServ = new AppService();

  useEffect(() => {
    appServ.getSummary()
      .then((response: any) => {
        console.log(response);
        const summary = new Summary(response);
          setData({ newConfirmed: summary.global.newConfirmed, newRecovered: summary.global.newRecovered, newDeths: summary.global.newDeaths, 
          totalConfirmed: summary.global.totalConfirmed, totalRecovered: summary.global.totalRecovered, totalDeaths: summary.global.totalDeaths });
          setCountry(summary.countries)
          setLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);
      });
  }, [])

  return (
  <div className={styles.Metrics} data-testid="Metrics">
       <DotLoaderOverlay
        loading={loading}
        color = "black"
        size = {20}
        overlayColor="rgba(0,153,255,0.2)"
      />
      <Container>
        <Row>
          <Col className='text-left'><MDBCard style={{ textAlign: "left" }}>
            <MDBCardHeader>
              <h3 className='mb-3'>
                <MDBIcon fas icon="check-circle" /> <strong>Confirmed</strong>
              </h3>
              <MDBRow>
                <MDBCol>New <MDBBadge color="info">
                  {data.newConfirmed}
                  </MDBBadge></MDBCol>
                <MDBCol>Total <MDBBadge color="info">{data.totalConfirmed}</MDBBadge></MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
            <Displaylist metrixData = {country} metric = '0' cls = 'info'></Displaylist>
            </MDBCardBody>
          </MDBCard></Col>
          <Col className='text-left'><MDBCard style={{ textAlign: "left" }}>
            <MDBCardHeader>
              <h3 className='mb-3'><MDBIcon fas icon="plus-circle" /> <strong>Recovered</strong> </h3>
              <MDBRow>
                <MDBCol>New <MDBBadge color="success">{data.newRecovered}</MDBBadge></MDBCol>
                <MDBCol>Total <MDBBadge color="success">{data.totalRecovered}</MDBBadge></MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
              <Displaylist metrixData = {country} metric = '1' cls ='success'></Displaylist>
            </MDBCardBody>
          </MDBCard></Col>
          <Col className='text-left'><MDBCard style={{ textAlign: "left" }}>
            <MDBCardHeader>
              <h3 className='mb-3'>
                <MDBIcon fas icon="user-ninja" /> <strong>Deaths</strong>
              </h3>
              <MDBRow>
                <MDBCol>New <MDBBadge color="danger">{data.newDeths}</MDBBadge></MDBCol>
                <MDBCol>Total <MDBBadge color="danger">{data.totalDeaths}</MDBBadge></MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
              <Displaylist metrixData = {country}  metric = '2' cls = 'danger'></Displaylist>
            </MDBCardBody>
          </MDBCard></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Metrics;