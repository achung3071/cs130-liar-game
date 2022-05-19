import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = (props) => {
    const [minsPerRound, setMinsPerRound] = useState(3);
    return (
        <MainContext.Provider value={{ minsPerRound, setMinsPerRound }}>
            {props.children}
        </MainContext.Provider>
    );
};

export default MainProvider;
