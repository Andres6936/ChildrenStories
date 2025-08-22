import React from "react";
import type { StorySchemaType } from "@/types/core"

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
        <RootContext.Provider value={{ model: model }}>
            {children}
        </RootContext.Provider>
    )
}

function Image() {
    const { model } = useRootContext()

    return (
        <div className="flex min-w:25rem aspect-ratio:3/4">
            <img
                className="r:10 w:100%"
                src={model.Image.Uri}
                alt="Image and cover of the book"
            />
        </div>
    )
}

export {
    Root,
    Image,
}