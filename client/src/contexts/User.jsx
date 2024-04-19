import { useContext , createContext , useState } from "react";

const userContext = createContext(null);

export function useUserInfo() {
    const userInfo = useContext(userContext);
    console.log(userInfo);
    return userInfo;
}



export default function UserProvider(props) {
    const [user , setUser] = useState({});
    const [loggedIn , setloggedIn] = useState(false);

    return  (
        <userContext.Provider value={{user , setUser ,loggedIn , setloggedIn}}>
            {props.children}
        </userContext.Provider>
    )
    
}