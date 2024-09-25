import styleContent from "../CSS/Content.module.css";
import React from "react";

type Props = {
  children: React.ReactElement;
};

export default function Content({ children }: Props) {
  return <div className={styleContent.container}>{children}</div>;
}
