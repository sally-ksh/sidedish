import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import * as S from './ProductDetailModal.style';

import { COLOR, LINE_SIZE, MODAL_ACTION_CLOSE } from '../../constants/productDetailModal';
import { CARD_SIZE } from '../../constants/card';
import { MODAL_TYPE } from '../../constants/portal';
import { dish10 } from '../../data/dishes';

import Portal from '../portal/Portal';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductOrder from './ProductOrder';
import Category from '../category/Category';
import AlertModal from '../modal/AlertModal';

const ProductDetailModal = ({ productDetail, menuId, closeProductModal }) => {
  const fetchUrl = `/api/sidedish/menu/}`;

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const { orderable, images, menuName, originalPrice, discountedPrice, point, event } =
    useFetch(fetchUrl);

  // const { orderable, images, menuName, originalPrice, discountedPrice, point, event } =
  //   productDetail;

  const openAlertModal = () => setIsAlertModalOpen(true);

  return (
    <>
      {productDetail && (
        <Portal
          action={MODAL_ACTION_CLOSE}
          closeModal={closeProductModal}
          type={MODAL_TYPE.PRODUCT}
        >
          <S.Modal>
            <S.CloseButton onClick={closeProductModal} data-action={MODAL_ACTION_CLOSE}>
              닫기
            </S.CloseButton>
            <S.ProductDetailContainer>
              <ProductImages images={images} />
              <ProductInfo
                menuName={menuName}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
                point={point}
                event={event}
              />
              <ProductOrder
                orderable={orderable}
                price={discountedPrice ? discountedPrice : originalPrice}
                openAlertModal={openAlertModal}
              />
            </S.ProductDetailContainer>

            <S.HorizontalLine color={COLOR.BLACK} size={LINE_SIZE.THICK} />

            <S.RelateProductContainer>
              <Category cardSize={CARD_SIZE.SMALL} {...dish10} />
            </S.RelateProductContainer>
          </S.Modal>
          {isAlertModalOpen && (
            <AlertModal
              alertContent={`오류가 발생했습니다.\n다시 주문해주세요.`}
              setIsAlertModalOpen={setIsAlertModalOpen}
            />
          )}
        </Portal>
      )}
    </>
  );
};

export default ProductDetailModal;
