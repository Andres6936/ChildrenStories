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

function Section(props: React.ComponentPropsWithRef<'div'>) {
    return (
        <div {...props} className="flex flex:col p:1rem min-w:25rem"/>
    )
}

function Container(props: React.ComponentPropsWithRef<'div'>) {
    return (
        <div {...props} className="flex flex:1 flex:col gap:0.5rem"/>
    )
}

type LineProps = {
    label: string
    value: string | number
}

function Line(props: LineProps) {
    return (
        <div className="flex align-items:center">
            <p className="flex flex:1">{props.label}:</p>
            <p className="flex flex:1">{props.value}</p>
        </div>
    )
}

function Name() {
    const { model } = useRootContext()

    return (
        <Line
            label="Name"
            value={model.Name}
        />
    )
}

function NumberPages() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Number Pages"
            value={model.NumberPages}
        />
    )
}

function Price() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Price"
            value={model.Price}
        />
    )
}

function UnitsSold() {
    const { model } = useRootContext()

    return (
        <Line
            label="Units Sold"
            value={model.UnitsSold}
        />
    )
}

function Author() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Author"
            value={model.Author}
        />
    )
}

function Publisher() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Publisher"
            value={model.Publisher}
        />
    )
}

function PublicationDate() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Publication Date"
            value={model.PublicationDate}
        />
    )
}

function TotalSales() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Total Sales"
            value={model.TotalSales}
        />
    )
}

function TotalRevenuew() {
    const { model } = useRootContext()
    
    return (
        <Line
            label="Total Revenue"
            value={model.TotalRevenue}
        />
    )
}

export {
    Root,
    Image,
    Section,
    Container,
    Name,
    NumberPages,
    Price,
    UnitsSold,
    Author,
    Publisher,
    PublicationDate,
    TotalSales,
    TotalRevenuew,
}