//It is in this file we will write and export our query.

//We will use gql for formatting the query and exporting it
import gql from 'graphql-tag';
export const allRecipeQuery = gql`
    query Recipes{
        recipes {
            data {
                attributes {
                    Title
                    Date
                    Bannere
                    Content
                    Recipe
                    Banner {
                        data {
                            attributes {
                                url 
                                alternativeText
                            }
                        }
                    }
                }
            }
        }
    }
`
