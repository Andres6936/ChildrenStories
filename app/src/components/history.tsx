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
    value: string
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
    return (
        <Line
            label="Name"
            value="Children Atlas Book"
        />
    )
}

function NumberPages() {
    return (
        <Line
            label="Number Pages"
            value="21"
        />
    )
}

function Price() {
    return (
        <Line
            label="Price"
            value="$123"
        />
    )
}

function UnitsSold() {
    return (
        <Line
            label="Units Sold"
            value="3"
        />
    )
}

function Author() {
    return (
        <Line
            label="Author"
            value="The Martir"
        />
    )
}

function Publisher() {
    return (
        <Line
            label="Publisher"
            value="National Library"
        />
    )
}

function PublicationDate() {
    return (
        <Line
            label="Publication Date"
            value="2025-05-17"
        />
    )
}

function TotalSales() {
    return (
        <Line
            label="Total Sales"
            value="$1,451"
        />
    )
}

function TotalRevenuew() {
    return (
        <Line
            label="Total Revenue"
            value="$341"
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