import React, { PropsWithChildren } from "react";

interface ModalProps {
  show: boolean;
}

export default function Modal({
  show,
  children
}: PropsWithChildren<ModalProps>): JSX.Element {
  return <div>{show && children}</div>;
}
