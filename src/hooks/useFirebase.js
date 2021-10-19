import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const singInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    return {
        user,
        singInUsingGoogle
    }
}

export default useFirebase;