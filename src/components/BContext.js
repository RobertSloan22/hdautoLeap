import { createContext } from "react";

export const BContext = createContext(null);
export const BContextProvider = ({ children }) => {
        return (
            <BContext.Provider>
               {children}
            </BContext.Provider>
        );
}