import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Systems Admin 🖥️",
          "Contractor 📈 ",
          "Cybersecurity Professional 🖥️ ",
          "Data Analyist 📈 ",
          "Remote Troubleshooting 🖥️ ",
          "Web Developer 📈 ",
          "Ticket Closer 📈 ",
          "Open Source Contributor 📈 ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
