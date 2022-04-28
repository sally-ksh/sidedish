import ReactDOM from 'react-dom';
import * as S from './Portal.style';

import { PORTAL_WRAPPER_ID } from '../../constants/productDetailModal';

const Portal = ({ action, closeModal, type, children }) => {
  const wrapperEl = document.getElementById(PORTAL_WRAPPER_ID);
  return ReactDOM.createPortal(
    <S.Background data-action={`${action}`} onClick={closeModal} modalType={type}>
      {children}
    </S.Background>,
    wrapperEl,
  );
};

export default Portal;
