import {GET_PAGE_LIST} from '../../constants/index';

export function setPageList(pageList) {
  return {
    type: GET_PAGE_LIST,
    payload: [{name: 'raj'}],
  };
}
//reducer is a pure function, and we do not want any asynchronous call
// inside reducer, all the asynchronous actions are called here inside actions.
export const getPageList = () => {
  return async dispatch => {
    try {
      const apiReq = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
      });
      console.log('apiReqapiReq:', apiReq);

      await dispatch(setPageList(apiReq));
      return apiReq || [];
    } catch (error) {
      console.error(error);
    }
  };
};
