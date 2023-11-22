import React from 'react'
import { useSelector } from 'react-redux';
import DoctorReviews from '../../components/review/DoctorReviews';

const Reviews = () => {
    const {doctor} = useSelector((state) => state.doctor);
  return (
    <DoctorReviews reviews={doctor.reviews}/>
  )
}

export default Reviews