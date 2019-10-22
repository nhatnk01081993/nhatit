import { myFirebase } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const requestRegister = user => {
    return {
        type: REGISTER_REQUEST
    };
};
const receiveRegister = user => {
    return {
        type: REGISTER_SUCCESS,
        user
    };
};
const registerError = () => {
    return {
        type: REGISTER_FAILURE
    };
};

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};
const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};
const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};
const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};
const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};
const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};
const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

export const registerUser = (email, passwork) => dispatch => {
    dispatch(requestRegister());
    myFirebase
        .auth()
        .createUserWithEmailAndPassword(email, passwork)
        .then(user => {
            dispatch(requestRegister(user));
        })
        .catch(errpr => {
            alert("Register fail!!!");
            dispatch(registerError());
        });
}

export const loginUser = (email, passwork) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, passwork)
        .then(user => {
            dispatch(requestLogin(user));
        })
        .catch(error => {
            alert("Login fail!!!");
            dispatch(loginError());
        });
}
export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            alert("Logout fail !!!");
            dispatch(logoutError());
        });
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user !== null) {
            dispatch(receiveLogin(user));
            dispatch(receiveRegister(user));
        }
        dispatch(verifySuccess());
    });
};
