import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import initAuth from '../Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // // Sign Up With Pass
    const signUpWithPass = (email, pass, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    
    //Usual Sign In With Pass
    const signInWithPass = (email, pass, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // State Change
    useEffect( () => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
    if (user) {
    
    setUser(user)
     } else {
    setUser({});
    }
    setIsLoading(false);
    });
    }, [auth])

    // Log Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            
        }).catch((error) => {
    
        })
            .finally(() => setIsLoading(false));
    }

    // Save User In Data
    const saveUser = ( email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://murmuring-brook-36809.herokuapp.com/user', {
            method : method,
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        authError,
        isLoading,
        signInUsingGoogle,
        logOut,
        signInWithPass,
        signUpWithPass
    }
}

export default useFirebase;