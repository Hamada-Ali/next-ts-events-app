import React, { ReactNode } from "react";
import Link from "next/link";
import classes from "./button.module.css";

type linkProps = {
  link?: string;
  children?: ReactNode;
};

const Button = ({ link, children }: linkProps) => {
  const LinkButton = link ? (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  ) : (
    <button className={classes.btn}>
      {children}
    </button>
  );

  return LinkButton
};

export default Button;
