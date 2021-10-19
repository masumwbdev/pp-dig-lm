// import { useState } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

// initializeAuthentication();


// const useFirebase = () => {
//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();
//     const [user, setUser] = useState({});

//     const singInUsingGoogle = () => {
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 setUser(result.user)
//             })
//     }
//     return {
//         user,
//         singInUsingGoogle
//     }
// }

// export default useFirebase;




import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;