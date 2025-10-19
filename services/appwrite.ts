import { Client, Databases, Query } from "react-native-appwrite";

//track the searches made by users
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);


export const updateSearchCount = async (query: string , movie : Movie) => {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.equal("searchTerm", query)
    ])
    
};
//check if a record of that search has already been strored
//if a document is found increament the searchCount field
//if no document is found create a new document in Appwrite database -> 1