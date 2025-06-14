import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection'
import { Container, Row ,Col} from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from './../shared/ToursCard'
import Newsletter from './../shared/NewsLetter'

const SearchResultList = () => {

const loaction = useLocation()
const [data] = useState(loaction.state);
// console.log(data);

  return <>
    <CommonSection title={'Tour Search Result'} />
    <section>
    <Container>
      <Row>
      {
        data.length ===0 ? (<h4 className='text-center'>No Tour Found</h4>)
         :
       ( data?.map(tour => <Col lg='3' className='mb-4' key={tour._id}><TourCard tour={tour} /></Col>))
      }
      </Row>
    </Container>
    </section>
    <Newsletter/>

  </>
}

export default SearchResultList
