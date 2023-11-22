import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const ReviewCard = ({ review }) => {

  return (
    <HStack gap={2} m={"auto"} w={"100%"} align={"flex-start"}>
      <Avatar name={review.name} src={review.image}/>
      <VStack spacing={0} align={"flex-start"}>
        <Text as={'b'} fontFamily={"Outfit"}>{review.name}</Text>
        <Text as={'b'} fontFamily={"Outfit"}>{review.rating}</Text>
        <Text>{review.comment}</Text>
      </VStack>
    </HStack>
  );
};

export default ReviewCard;
