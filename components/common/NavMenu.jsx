import { Card, MenuButton } from "theme-ui";
import Modal from "react-modal";
import { useState } from "react";

const modalStyle = {
  content: {
    width: "100%",
    top: "auto",
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    overflow: "visible",
  },
};

export default function NavMenu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuButton
        aria-label="open navigation menu"
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={modalStyle}
        closeTimeoutMS={1000}
        contentLabel="navigation menu"
      >
        <Card m={0}>{children}</Card>
      </Modal>
      <style jsx global>{`
        .ReactModal__Overlay {
          transform: 0;
          transition: opacity 300ms ease-in-out;
        }

        .ReactModal__Overlay--after-open {
          opacity: 1;
        }

        .ReactModal__Overlay--before-close {
          opacity: 0;
        }

        .ReactModal__Content {
          transition: transform 300ms ease-in-out;
          transform: translateY(100%);
        }

        .ReactModal__Content--after-open {
          transform: translateY(0);
        }

        .ReactModal__Content--before-close {
          transform: translateY(100%);
        }
      `}</style>
    </>
  );
}
