type StorySchemaType = {
    "Name": string,
    "NumberPages": string,
    "Price": number,
    "UnitsSold": number,
    "Image": {
        "Uri": string
    },
    "Author": string,
    "Publisher": string,
    "PublicationDate": string,
    "TotalSales": number,
    "TotalRevenue": number
}

export type {
    StorySchemaType,
}