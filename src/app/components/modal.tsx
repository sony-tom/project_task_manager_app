import React, { useEffect } from "react";
import ReactModal from "react-modal";

const Modal = ({
  isOpen,
  onClose,
  width = "500px",
  height = "300px",
  children,
}) => {
  const parsedHeight = height ? parseInt(height, 10) : 0;
  const isHeightLessThanViewport = height
    ? parsedHeight < window.innerHeight
    : true;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="custom-scrollbar bg-base-white"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: isHeightLessThanViewport ? "center" : "start",
          padding: "50px",
        },
        content: {
          backgroundColor: "white",
          padding: "16px",
          borderRadius: "8px",
          overflow: "visible",
          width,
          height,
        },
      }}
    >
      <div className="relative w-full h-full font-inter">
        <button
          type="button"
          className="absolute right-4 top-4 text-black"
          onClick={onClose}
          aria-label="closeIcon"
        >
          close
        </button>
        <div className="w-full h-full">{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
