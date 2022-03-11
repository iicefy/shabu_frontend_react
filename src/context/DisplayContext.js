import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.development";

export const DisplayContext = createContext(null);

export default function DisplayProvider({ children }) {
    const [sideBarVisible, setSideBarVisible] = useState(false)

    const displayData = {
        sideBarVisible,
        setSideBarVisible
    }

    return (
        <DisplayContext.Provider value={displayData}>
            {children}
        </DisplayContext.Provider>
    )
}

export const useDisplayContext = () => {
    const context = useContext(DisplayContext);
    if (context === undefined) {
        throw new Error("Error context undefined");
    }
    return context;
};