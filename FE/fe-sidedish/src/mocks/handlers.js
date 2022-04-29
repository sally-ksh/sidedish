import { rest } from 'msw';

const GET_MAIN = rest.get(`${process.env.REACT_APP_BASE_URL}/api/sidedish`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      exhibition: {
        exhibitionTitle: '한 번 주문하면 두 번 반하는 반찬',
        categoryNameList: [
          {
            id: 1,
            title: '풍성한 고기 반찬',
          },
          {
            id: 2,
            title: '편리한 반찬 세트',
          },
          {
            id: 3,
            title: '맛있는 제철 요리',
          },
          {
            id: 4,
            title: '우리아이 영양 반찬',
          },
        ],
        specialCategories: {
          categoryId: 1,
          categoryTitle: '풍성한 고기 반찬',
          subCategoryList: [
            {
              menuId: 1,
              menuName: '오리 주물럭_반조리',
              description: '감칠맛 나는 매콤한 양념',
              price: 15800,
              discountedPrice: 12800,
              image: [
                'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B5+%E1%84%8C%E1%85%AE%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%A5%E1%86%A8.png',
              ],
              event: ['런칭특가'],
            },
            {
              menuId: 3,
              menuName: '새콤달콤 오징어 무침',
              description: '국내산 오징어를 새콤달콤하게',
              price: 7500,
              discountedPrice: 0,
              image: [
                'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%84%8E%E1%85%B5%E1%86%B7.png',
              ],
              event: [],
            },
          ],
        },
      },
      categories: {
        categoryId: 2,
        categoryTitle: '메인',
        subCategoryList: [
          {
            menuId: 3,
            menuName: '새콤달콤 오징어 무침',
            description: '국내산 오징어를 새콤달콤하게',
            price: 7500,
            discountedPrice: 0,
            image: [
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%84%8E%E1%85%B5%E1%86%B7.png',
            ],
            event: [],
          },
          {
            menuId: 4,
            menuName: '한돈 달콤 안심 장조림',
            description: '부드러운 안심살의 달콤함',
            price: 6900,
            discountedPrice: 0,
            image: [
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%83%E1%85%A9%E1%86%AB+%E1%84%86%E1%85%A2%E1%84%8F%E1%85%A9%E1%86%B7.png',
            ],
            event: [],
          },
        ],
      },
    }),
  );
});

const GET_MENU = rest.get(
  `${process.env.REACT_APP_BASE_URL}/api/sidedish/menu/1`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        menu: {
          menuId: 1,
          menuName: '새콤달콤 오징어무침',
          description: '국내산 오징어를 새콤달콤하게',
          originalPrice: 7500,
          discountedPrice: 4500,
          image: [
            'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%84%8E%E1%85%B5%E1%86%B7.png',
            'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%84%8E%E1%85%B5%E1%86%B7.png',
          ],
          event: ['런칭특가'],
          savedCharge: 45,
          deliveryInfo: '서울 경기 새벽배송, 전국 택배 배송',
          deliveryCharge: {
            default: 2500,
            freeCondition: 40000,
          },
          orderStatus: 'sold out', // "sale"
        },
        with: [
          {
            menu_id: 1,
            menu_name: '새콤달콤 오징어 무침',
            description: '국내산 오징어를 새콤달콤하게',
            original_price: 7500,
            discounted_price: 6000,
            image:
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%84%8E%E1%85%B5%E1%86%B7.png',
          },
          {
            menu_id: 2,
            menu_name: '호두 멸치 볶음',
            description: '잔멸치와 호두가 만나 짭조롬하지만 고소하게!',
            original_price: 5800,
            discounted_price: 5220,
            image:
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A9%E1%84%83%E1%85%AE+%E1%84%86%E1%85%A7%E1%86%AF%E1%84%8E%E1%85%B5%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B3%E1%86%B7.png',
          },
          {
            menu_id: 3,
            menu_name: '한돈 매콤 안심 장조림',
            description: '부드러운 안심살의 매콤함',
            original_price: 6900,
            discounted_price: 6210,
            image:
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A1%E1%86%AB%E1%84%83%E1%85%A9%E1%86%AB+%E1%84%86%E1%85%A2%E1%84%8F%E1%85%A9%E1%86%B7+%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%89%E1%85%B5%E1%86%B7%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%8C%E1%85%A9%E1%84%85%E1%85%B5%E1%86%B7.png',
          },
          {
            menu_id: 4,
            menu_name: '야채 어묶볶음',
            description: '첨가물 없는 순수 어묶과 야채의 만남',
            original_price: 4900,
            discounted_price: 4410,
            image:
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A3%E1%84%8E%E1%85%A2+%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B3%E1%86%B7.png',
          },
          {
            menu_id: 5,
            menu_name: '야채 어묶볶음',
            description: '첨가물 없는 순수 어묶과 야채의 만남',
            original_price: 4900,
            discounted_price: 4410,
            image:
              'https://sidedish.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A3%E1%84%8E%E1%85%A2+%E1%84%8B%E1%85%A5%E1%84%86%E1%85%AE%E1%86%A8%E1%84%87%E1%85%A9%E1%86%A9%E1%84%8B%E1%85%B3%E1%86%B7.png',
          },
        ],
      }),
    );
  },
);

export const handlers = [GET_MAIN, GET_MENU];
