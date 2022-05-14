import auth from '@react-native-firebase/auth';
import {typeAction} from './actions/cart';

export function signInAuth({userName, password, navigation}) {
  return async (dispatch, getState) => {
    dispatch(typeAction({type: 'loading', payload: true}));

    return await auth()
      .signInWithEmailAndPassword(userName, password)
      .then(() => {
        dispatch(typeAction({type: 'loading', payload: false}));
        navigation.navigate('HomeTabs');
        //dispatch(typeAction({type: 'login'}));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

export function createAccount({userName, password, navigation}) {
  return async (dispatch, getState) => {
    //getState().cart.loading = true;

    return await auth()
      .createUserWithEmailAndPassword(userName, password)
      .then(() => {
        dispatch(typeAction({type: 'snackBarAction', payload: true}));
      })
      .catch(error => {
        return false;
      });
  };
}
