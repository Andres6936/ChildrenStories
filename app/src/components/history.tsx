import React from "react";
import type {StorySchemaType} from "@/types/core"

type RootContextProps = {
    model: StorySchemaType,
}

const RootContext = React.createContext<RootContextProps | null>(null);

const useRootContext = () => {
    const context = React.useContext(RootContext);
    if (context === null) {
        throw new Error("useRootContext must be used within a RootContextProvider");
    }
    return context;
}

function Root({ children, model }: { children: React.ReactNode, model: StorySchemaType }) {
    return (
        <RootContext.Provider value={{model: model}}>
            {children}
        </RootContext.Provider>
    )
}

function Image() {

}

export {
    Root,
}