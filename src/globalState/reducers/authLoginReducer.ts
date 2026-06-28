/**
 * @param state  Current auth state.
 *               Initially this is the initialState.
 *               Afterwards, it is the latest state from the Redux store.
 *
 * @param action Redux action object.
 *               Example:
 *               {
 *                 type: "auth/login",
 *                 payload: { ... }
 *               }
 */
export const authLoginReducer = (state, action) => {
  state.user = {
    "id": 1,
    "name": "Rohan",
    "email": "rohan@example.com"
  }
  
};