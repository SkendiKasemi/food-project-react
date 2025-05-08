import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carousel.css';
import { useOtherDishes } from '../../../context/OtherDishesContext';
import CarouselItem from './CarouselItem';
import { Link } from 'react-router-dom';

function Carousel() {
  const { meals } = useOtherDishes();

  return (
    <div className='carousel-container'>
      <h2 className='card-text'>Other Dishes</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        spaceBetween={32}
        grabCursor={true}
        slidesPerView={3}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination',
        }}
        loop={true}
        className='card-container'
      >
        <div className='swiper-wrapper'>
          {meals.map((meal, i) => {
            const {
              strArea,
              strCategory,
              idMeal,
              strMealThumb: image,
              strMeal: name,
            } = meal;
            const description = strArea + ' ' + strCategory;

            return (
              <SwiperSlide key={i}>
                <CarouselItem
                  description={description}
                  name={name}
                  id={idMeal}
                  image={image}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      <div className='swiper-button-prev'>
        <i className='ri-arrow-left-s-line btn'></i>
      </div>
      <div className='swiper-button-next'>
        <i className='ri-arrow-right-s-line btn'></i>
      </div>

      <div className='swiper-pagination'></div>
    </div>
  );
}

export default Carousel;
