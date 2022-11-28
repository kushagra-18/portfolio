import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Kushagra Sharma. All Rights Reserved.`,
  author: {
    name: "Kushagra Sharma",
    accounts: [
      {
        url: "https://github.com/kushagra-18",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://www.linkedin.com/in/kushagra-18/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://leetcode.com/giantkillerkushagra/",
        label: "Leetcode Account",
        type: "red",
        icon: <SiLeetcode />,
      },
    ],
  },
};

export default siteConfig;
