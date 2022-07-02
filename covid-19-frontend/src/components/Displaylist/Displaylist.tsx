import { useState, useEffect, useId } from 'react';
import { Link } from 'react-router-dom';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBCardText, MDBInputGroup, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Country } from "../../models/Country";

function Displaylist(props: any) {
  const id = useId();
  const [countryTop, setCountryTop] = useState<Country[]>([],);
  const args = ["newConfirmed", "newRecovered", "newDeaths"] as const;
  const idx = Number(props.metric);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let cn = props.metrixData.sort((cntry1: Country, cntry2: Country) => Number(cntry2[args[idx]]) - Number(cntry1[args[idx]]));
    setCountryTop(cn);
  }, [props.metrixData]);

  return (
    <><MDBRow>
      <MDBCol md='8'>
        <MDBInputGroup className='mb-3' noBorder textBefore={<MDBIcon fas icon='search' />}>
          <input className='form-control' id={id} type='text' placeholder='By Country' value={search} onInput={e => setSearch((e.target as HTMLTextAreaElement).value)} />
        </MDBInputGroup>
      </MDBCol>
    </MDBRow>
      <hr />
      <MDBCardText>
        <MDBListGroup>
          {countryTop.
            filter(cntry => cntry.country.toLowerCase().includes(search.toLowerCase())).
            slice(0, 10).
            map(cntry =>
              <>
                <Link to={`/country/${cntry.countryCode}`}>
                  <MDBListGroupItem className='d-flex justify-content-between align-items-center' key="{cntry.ID}">
                    {cntry.country}
                    <MDBBadge color={props.cls} href='#'>{String(cntry[args[idx]])}</MDBBadge>
                  </MDBListGroupItem>
                </Link>
              </>)}
        </MDBListGroup>
      </MDBCardText>
    </>
  )
}
export default Displaylist;
