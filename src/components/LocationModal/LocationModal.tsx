import { FC } from 'react';
import styles from './LocationModal.module.scss';
import close from '../../assets/icons/close.svg';
import { Location } from '../../types/Chars';

type Props = {
  onClose: () => void;
  location: Location;
}

const Modal:FC<Props> = ({ onClose, location }) => (
  <div className={styles.root}>
    <div className={styles.container} id="modal">
      <div className="flex-justify-end">
        <button id="modal-close-btn" className={styles.button} onClick={onClose}>
          <img src={close} alt="close" className={styles.icon} />
        </button>
      </div>
      <h3 className={styles.title}>Location data</h3>
      <p><span className={styles.text}>Location:</span> {location.name}</p>
      <p><span className={styles.text}>Type:</span>  {location.type}</p>
      <p><span className={styles.text}>Dimension:</span>  {location.dimension}</p>
    </div>
  </div>
);

export default Modal;
