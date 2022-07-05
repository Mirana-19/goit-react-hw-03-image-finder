import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ imgUrl, tag }) {
  return createPortal(
    <div className={s.backdrop}>
      <div className={s.modal}>
        <img src={imgUrl} alt={tag} width="1280px" />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
