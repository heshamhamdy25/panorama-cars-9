import React from "react";
import styled from "styled-components";

const WhatsAppIcon = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: bounce 1.5s infinite;

  &:hover {
    background-color: #1ebe5d;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const WhatsAppButton = () => {
  return (
    <WhatsAppIcon
      href="https://wa.me/971527900414"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        width="40"
        height="40"
      />
    </WhatsAppIcon>
  );
};

export default WhatsAppButton;
