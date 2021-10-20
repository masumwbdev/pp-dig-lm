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




import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                // setUser(result.user);
            })
    }

    const signInUsingGit = () => {
        const gitProvider = new GithubAuthProvider();
        signInWithPopup(auth, gitProvider)
            .then(res => {
                setUser(res.user)
            })
    }

    const signInUsingEmailPassword = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
            })
    }

    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)
    }

    const handleUser = e => {
        console.log(e.target.value)
    }
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
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInUsingGit,
        signInUsingEmailPassword,
        handleEmail,
        handlePass,
        handleUser
    }
}

export default useFirebase;