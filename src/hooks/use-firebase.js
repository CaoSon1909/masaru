import {
  getAuth, createUserWithEmailAndPassword, updateProfile,
  signInWithEmailAndPassword, sendPasswordResetEmail,signOut
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { add_user, sign_out, user_info } from "../redux/features/auth-slice";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase/firebase.config";

// initialize firebase app
const app = initializeApp(firebaseConfig, "Masaru");

// declare auth
const auth = getAuth(app);

const useFirebase = () => {
    // dispatch
    const dispatch = useDispatch()
    // register With Email Password
    const registerWithEmailPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            updateProfile(auth.currentUser, {
                displayName: name,
            }).then(() => {
            }).catch((error) => {
            });
            dispatch(add_user({
                name: name,
                email: user.user.email,
                uid: user.user.uid
            }))
            toast.success(`Tài khoản ${name} đăng ký thành công`, {
                position: 'top-left'
            })
        })
        .catch((error) => {
            const errorMessage = error?.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            })
        });

    }

    // login with email and password
    const loginWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            const { displayName: name, email, uid } = user.user;
            dispatch(user_info({
                name: name,
                email: email,
                uid: uid
            }))
                toast.success(`${name} đăng nhập thành công`, {
                position: 'top-left'
            })
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            })
        });

    }

    // password reset email sent
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success(`Đã gửi mật khẩu mới qua email!`, {
                position: 'top-left'
            })
        })
        .catch((error) => {
            const errorMessage = error?.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            })
        });

    }

    // logout
    const logout = () => {
        signOut(auth).then(() => {
        dispatch(sign_out())
        toast.success(`Đăng xuất thành công!`, {
            position: 'top-left'
        })
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        resetPassword,
        logout
    }
}

export default useFirebase;