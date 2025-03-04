import React from "react";
import WhatsAppButton from "./components/WhatsAppButton";

export const wrapRootElement = ({ element }) => (
  <>
    {element}
    <WhatsAppButton />
  </>
);
