import img1 from '../../../assets/images/banner1.svg'
import img2 from '../../../assets/images/banner2.svg'
import img3 from '../../../assets/images/banner3.svg'
import img4 from '../../../assets/images/banner4.svg'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselView.scss';

const CarouselView = () => {
    const infoList = [
        {
            imgsrc: img1,
            caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            imgsrc: img2,
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            imgsrc: img3,
            caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
        {
            imgsrc: img4,
            caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        },
    ]
  return (
    <Carousel>
        {
            infoList.map((info,idx)=>{
                return(
                    <Carousel.Item key={idx} interval={1000}>
                        <img
                        className="d-block w-100"
                        src={info.imgsrc}
                        alt="First slide"/>
                        {/* <Carousel.Caption>
                            <p>{info.caption}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )
            })
        }
        </Carousel>
  )
}

export default CarouselView