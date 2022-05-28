import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = (props) => {
    const [numPlayers, setNumPlayers] = useState(3);
    const [numSpies, setNumSpies] = useState(1);
    const [minsPerRound, setMinsPerRound] = useState(3);
    return (
        <MainContext.Provider
            value={{
                numPlayers,
                setNumPlayers,
                numSpies,
                setNumSpies,
                minsPerRound,
                setMinsPerRound,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
};

export default MainProvider;
