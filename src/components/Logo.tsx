import React from "react";

type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className }) => (
  <img
    src="/GANESH.jpg"
    alt="Logo"
    className={`rounded-full object-cover border-2 border-primary/60 ${className ?? "w-8 h-8"}`}
  />
);

export default Logo;
