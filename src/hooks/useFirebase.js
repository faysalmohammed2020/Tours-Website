import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";

initializeAuthentication();
const provider = new GoogleAuthProvider();
const useFirebase = () =>{
    const[user,setUser] =useState({});
    const[error,setError] = useState('');
    const[isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    
    const signInWithGoogle = () =>{
        setIsLoading(true);
        
        return signInWithPopup(auth, provider)
        .then(result =>setUser(result.user))
        .finally(()=> setIsLoading(false))
          
        
    }
    const logOut = () =>{
        setIsLoading(true);
       signOut(auth)
       .then(()=>{
           setUser({});
       })
       .finally(()=> setIsLoading(false))
    }

    useEffect(()=>{
       const unSubscribed = onAuthStateChanged(auth, (user) =>{
         if(user){
             console.log('Inside State Change',user)
             setUser(user);
         }
         else{
             setUser({});
         }
         setIsLoading(false);
        });
        return  () => unSubscribed;
    },[])
    return{
        user,
        signInWithGoogle,
        isLoading,
        logOut,
        error
    }
}

export default useFirebase;