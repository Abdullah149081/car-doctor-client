import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useMemo, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserData = (newUser, name) => {
    return updateProfile(newUser, {
      displayName: name,
    });
  };
  const validationEmail = (newUser) => {
    return sendEmailVerification(newUser);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // jwt
      if (currentUser && currentUser.email) {
        const logUser = {
          email: currentUser.email,
        };

        fetch("https://car-doctor-server-beta-five.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("car-doctor-access", data.token);
          });
      } else {
        localStorage.removeItem("car-doctor-access");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = useMemo(() => ({ user, createUser, signInUser, googleSignIn, loading, logOut, updateUserData, validationEmail }), [loading, user]);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
