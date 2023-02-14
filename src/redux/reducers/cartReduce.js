import auth from '@react-native-firebase/auth';

const INITIAL_STATE = {
  cartProduct: [],
  postStatus: null,
  loading: false,
  snackBar: false,
};

const cartAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'snackBarAction':
      return {
        ...state,
        snackBar: action.payload,
      };

    case 'addItem':
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      };

    case 'removeItem':
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          item => item.id !== action.payload,
        ),
      };
    case 'createAccount':
      auth()
        .createUserWithEmailAndPassword(
          action.payload.userName,
          action.payload.password,
        )
        .then(() => {
          return {
            ...state,
            postStatus: true,
          };
        })
        .catch(error => {
          return {
            ...state,
            postStatus: false,
          };
        });

      return {
        ...state,
      };
    case 'login':
      const {userName, password, navigation} = action.payload;
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartAction;
