import React from "react";
import useCounter from "../hooks/useCounter";

export default function ForwardCounter() {
  const counterPlus = useCounter();
  const counterMinus = useCounter(false);
  return (
    <>
      <div>{counterPlus}</div>
      <div>{counterMinus}</div>
    </>
  );
}
