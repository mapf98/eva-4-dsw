export default {
    mutations: {
        SET_CART: 'SET_CART',
        ADD_PRODUCT_CHECKOUT: 'ADD_PRODUCT_CHECKOUT',
        REMOVE_PRODUCT_CHECKOUT: 'REMOVE_PRODUCT_CHECKOUT',
        SET_QUANTITY_PRODUCT: 'SET_QUANTITY_PRODUCT',
        REMOVE_PRODUCT_CART: 'REMOVE_PRODUCT_CART',
        SET_PRODUCTS_CART: 'SET_PRODUCTS_CART',
        FALSE_PHOTO_CART: 'FALSE_PHOTO_CART',
        SET_TENTATIVE_POINTS_PRODUCTS_CHECKOUT: 'SET_TENTATIVE_POINTS_PRODUCTS_CHECKOUT',
        SET_INFO_SHIP_THIS_CHECKOUT: 'SET_INFO_SHIP_THIS_CHECKOUT',
    },
    getters: {
        GET_PRODUCTS_CART: 'GET_PRODUCTS_CART',
        GET_CART_OBJECT: 'GET_CART_OBJECT',
        GET_PRODUCTS_CHECKOUT: 'GET_PRODUCTS_CHECKOUT',
        GET_TOTAL_PRICE_CHECKOUT: 'GET_TOTAL_PRICE_CHECKOUT',
        GET_LOAD_PHOTO_CART: 'GET_LOAD_PHOTO_CART',
        GET_DESTINATION: 'GET_DESTINATION',
    },
    actions: {
        ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
        ADD_SERVICE_TO_CART: 'ADD_SERVICE_TO_CART',
        GET_ITEMS_CARS: 'GET_ITEMS_CARS',
        DELETE_PRODUCT_CART: 'DELETE_PRODUCT_CART',
        EMPTY_CART: 'EMPTY_CART',
        FETCH_PRODUCT_CART_PHOTO_BY_NAME: 'FETCH_PRODUCT_CART_PHOTO_BY_NAME',
        GET_PETROMILES_POINTS_ITEMS_CHECKOUT: 'GET_PETROMILES_POINTS_ITEMS_CHECKOUT',
        GET_SHIPTHIS_INFO_PRODUCTS_CHECKOUT: 'FETCH_SHIPTHIS_INFO_PRODUCTS_CHECKOUT',
        FETCH_PAYMENT_CHECKOUT: 'FETCH_PAYMENT_CHECKOUT',
    },
};