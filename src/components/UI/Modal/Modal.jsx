import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      <motion.dialog
        initial={{ scale: 0.5, opacity: 0, y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
        open
        className="fixed z-10 top-1/2 -translate-y-1/2 rounded-md overflow-hidden"
      >
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
