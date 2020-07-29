import React ,{createContext,useState,useEffect} from "react";
import {AsyncStorage} from "react-native";
import userData from "../json/user.json";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const SIGN_PERSISTENCE_KEY = "SIGN_PERSISTENCE_KEY";
const SIGN_HAS_SET_KEY = "SIGN_HAS_SET_KEY";

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [user,setUser] = useState(userData);
    const store = {
        isLoginState: [isLogin, setIsLogin],
        userState: [user,setUser]
    };
    

    return(
        <StoreContext.Provider value={store}> 
            {children} 
        </StoreContext.Provider> //value要傳遞給childrean
    );
};