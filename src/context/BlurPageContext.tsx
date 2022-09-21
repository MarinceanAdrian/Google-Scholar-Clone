import { createContext, useState, FC } from "react";
import { Children } from './genericTypes';

type ContextProps = {
    isSidebarVisible: boolean,
    handleSidebarReveal: (e: React.SyntheticEvent) => void,
}

export const BlurContext = createContext<ContextProps>({
    isSidebarVisible: false,
    handleSidebarReveal: () => { },
});

// BlurContextProvider
const BlurContextProvider: FC<Children> = ({ children }) => {
    // STATE
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleSidebarReveal = (e: React.SyntheticEvent) => {
        setIsSidebarVisible(!isSidebarVisible);

    }

    const value = {
        handleSidebarReveal,
        isSidebarVisible,
    }
    return <BlurContext.Provider value={value}>{children}</BlurContext.Provider>;
};
export default BlurContextProvider;