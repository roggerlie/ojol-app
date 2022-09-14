import { combineReducers } from 'redux';

const initialStateRegister = {
    form: {
        fullName: '',
        email: '',
        password: '',
    },
    title: 'Register Page',
    desc: 'Ini adalah desc untuk Register',
};

const RegisterReducer = (state = initialStateRegister, action) => {
    if (action.type === 'SET_TITLE') {
        return {
            ...state,
            title: 'Register Ganti Title',
        };
    }
    if (action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    }
    return state;
};

const initialStateLogin = {
    form: {
        email: '',
        password: '',
    },
    info: 'Tolong masukkan password anda',
    isLogin: true,
};

const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    }
    return state;
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;
