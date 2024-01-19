import React from "react";

function Footer() {
  return (
    <footer  className="py-16">
      <p className="text-xs font-normal text-zinc-500 text-center">
        { new Date().getFullYear() } © Weiqi Zhuang
      </p>
    </footer>
  );
}

export default Footer;
