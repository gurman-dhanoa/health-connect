import React from 'react'
import ReviewCard from './ReviewCard'
import { Heading, Stack } from '@chakra-ui/react'

const DoctorReviews = ({reviews}) => {
  return (
    <Stack w={"90%"} m={"auto"} spacing={5}>
        <Heading>Reviews</Heading>
        {reviews.map((review)=>{
          return <ReviewCard review={review}/>
        })}
    </Stack>
  )
}

export default DoctorReviews