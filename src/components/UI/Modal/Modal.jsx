import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Modal = ({ children, onClose }) => {
  const navigate = useNavigate();

  const handleCloseModal = (e) => {
    e.stopPropagation();
    navigate("..");
  };

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/70 z-10"
        onClick={handleCloseModal}
      >
        <button
          className="text-3xl text-slate-100 absolute right-3 top-3"
          onClick={handleCloseModal}
        >
          <IoClose />
        </button>
      </div>
      <dialog
        open
        className="fixed z-10 top-1/2 -translate-y-1/2 rounded-md overflow-hidden"
      >
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
