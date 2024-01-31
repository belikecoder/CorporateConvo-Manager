import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../assets/css/events.css'
import Eventers from './eventers';
import { productData, responsive } from "../services/data"
function Events() {
    const product = productData.map((item) => (
        <Eventers
          name={item.name}
          url={item.imageurl}
          price={item.price}
          description={item.description}
        />
        ));
    return (
        <>
          <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div className="Ap">
      <h1>Events That We Provide</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
        </>
      );
}

export default Events;