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




import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

     const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            
    }

    const handleReg = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
          setError('Password should be at least 6 characters')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 uppercase');
          return;
        }
        // isLogin? processSignIn(email, pass): newUser(email, pass)
        // or 
        if (isLogin) {
          processSignIn(email, password);
        }
        else {
          newUser(email, password);
        }
      }

      const newUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
          .then(res => {
            const user = res.user;
            console.log(user)
            setError('')
            verifyUser();
            userName();
          })
          .catch(error => {
            setError(error.message)
          })
      }


      const toggle = e => {
        setIsLogin(e.target.checked)
      }

      const resPass = () => {
        sendPasswordResetEmail(auth, email)
          .then(res => {
    
          })
      }

      const userName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(res => {
    
        })
      }
      const verifyUser = () => {
        sendEmailVerification(auth.currentUser)
          .then(res => {
            console.log(res)
          })
      }
      const processSignIn = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
          .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
          })
          .catch(error => {
            setError(error.message)
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
        handleUser,
        handleReg,
        toggle,
        resPass,
        error
    }
}

export default useFirebase;