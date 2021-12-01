import firebase from 'gatsby-plugin-firebase';
import { PRODUCTS_BEST_SELLER_HOME_PAGE } from '../constants/client';
export const increaseSoldNumberProduct = (products) => {
  return new Promise(async (resolve, reject) => {
    try {
      for (let product of products) {
        if (typeof product !== 'object') {
          reject(new Error('Kiểu dữ liệu không phù hợp.'));
        }
        const productRef = firebase
          .firestore()
          .doc(`products/${product.contentful_id}`);
        const productSnap = await productRef.get();
        const _product = { ...product };
        delete _product.description_en;
        delete _product.description_vi;
        delete _product.information_en;
        delete _product.information_vi;
        delete _product.colors;
        delete _product.quantity;
        await productRef.set(
          {
            ..._product,
            sold_number: productSnap.exists
              ? productSnap.data().sold_number + product.quantity
              : product.quantity,
          },
          { merge: true }
        );
      }
      return resolve(true);
    } catch (error) {
      reject(error.message);
    }
  });
};

export const fetchBestSellProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const productsRef = await firebase
        .firestore()
        .collection('products')
        .orderBy('sold_number', 'desc')
        .limit(PRODUCTS_BEST_SELLER_HOME_PAGE)
        .get();
      let productsList = [];
      productsRef.forEach((productSnap) => {
        productsList = [
          ...productsList,
          { id: productSnap.id, ...productSnap.data() },
        ];
      });
      resolve(productsList);
    } catch (error) {
      reject(error.message);
    }
  });
};
