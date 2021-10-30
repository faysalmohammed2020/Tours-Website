import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const useFirebase = () =>{
    const[user,setUser] =useState({});
    const[error,setError] = useState('');
    const auth = getAuth();
    
    const signInWithGoogle = () =>{
        
        return signInWithPopup(auth, provider)
        // .then((result) =>{
        // const user = result.user;
        // console.log(user);
        // })
        // .catch(error =>{
        //     setError(error.message);
        // })
          
        
    }
    const logOut = () =>{
       signOut(auth)
       .then(()=>{
           setUser({});
       })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
         if(user){
             console.log('Inside State Change',user)
             setUser(user);
         }
        })
    },[])
    return{
        user,
        signInWithGoogle,
        logOut,
        error
    }
}

export default useFirebase;