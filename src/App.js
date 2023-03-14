import { Button, color, Flex, Text } from "@chakra-ui/react";
import "./App.css"

import React, { useState } from "react";
import { transform } from "framer-motion";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else if (counter === 0) {
      alert("Você não pode diminuir o contador");
    }
  };

  return (
    <Flex
      flexDirection="column"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#282c34"
    >
      <Text fontSize="4rem" marginBottom="1rem" color="#61dafb">{counter}</Text>
      <Flex w="10rem" justifyContent="space-between" alignItems="center"  marginBottom="1rem">
        <Text color="#61dafb">AUMENTAR</Text>
        <Button onClick={handleIncrement} w="3rem" h="3rem" fontSize="2rem">
          +
        </Button>
      </Flex>
      <Flex w="10rem" justifyContent="space-between" alignItems="center">
        <Button onClick={handleDecrement} w="3rem" h="3rem" fontSize="2rem">-</Button>
        <Text color="#61dafb">DIMINUIR</Text>
      </Flex>
    </Flex>
  );
}
