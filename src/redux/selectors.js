export const isAuthSel = state => state.loginReducer.isAuth;
export const isCheckingAuthSel = state => state.loginReducer.isCheckingAuth;
export const isSuccessLoggedSel = state => state.loginReducer.isSuccessLogged;
export const isSendingAuthFormSel = state => state.loginReducer.isSendingAuthForm;

export const isFetchingSuperheroesSel = state => state.superheroReducer.isFetchingSuperheroes;
export const superheroesSel = state => state.superheroReducer.superheroes;
export const superheroesErrorSel = state => state.superheroReducer.error;
