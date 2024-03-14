import React from "react";
import { Button as ChakraUiButton } from "@chakra-ui/react";
export default function Button({
    children,
    type = "button",
    fontFamily = '"Lexend Deca", sans-serif',
    fontWeight = 300,
    bg = "#66a2e6",
    color = "white",
    borderRadius = "15px",
    transition= "all 0.2s",
    ...props
}) {
    return (
        <ChakraUiButton bg={bg} fontFamily={fontFamily} color={color} fontWeight={fontWeight} type={type} borderRadius={borderRadius} transition={transition} {...props}>
            {children}
        </ChakraUiButton>
    );
}