import { useState } from 'react';
import * as S from './Card.style';
import { CARD_SIZE } from '../../constants/card';
import { MODAL_ACTION_CLOSE } from '../../constants/productDetailModal';
import Badges from './Badges';
import DeliveryBadge from './DeliveryBadge';
import Prices from './Prices';
import ProductDetailModal from '../productDetailModal/ProductDetailModal';
import productDetail from '../../data/productDetail';

const Card = ({ cardSize, dish }) => {
  const { menuName, description, image, originalPrice, saledPrice, event } = dish;

  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  const openProductModal = () => setIsOpenProductModal(true);

  const closeProductModal = e =>
    e.target.dataset.action === MODAL_ACTION_CLOSE && setIsOpenProductModal(false);

  return (
    <>
      {isOpenProductModal && (
        <ProductDetailModal productDetail={productDetail} closeProductModal={closeProductModal} />
      )}

      <S.Container onClick={openProductModal}>
        <S.ImageContainer>
          <S.Image src={image} alt={menuName} cardSize={`${cardSize}`} />
          <DeliveryBadge>
            <p>새벽 배송</p>
            <p>전국 택배</p>
          </DeliveryBadge>
        </S.ImageContainer>
        <S.Title>{menuName}</S.Title>
        <S.Description>{description}</S.Description>
        <Prices originalPrice={originalPrice} saledPrice={saledPrice} />
        {event.length && <Badges badges={event} />}
      </S.Container>
    </>
  );
};

Card.defaultProps = {
  cardSize: CARD_SIZE.MEDIUM,
};

export default Card;
