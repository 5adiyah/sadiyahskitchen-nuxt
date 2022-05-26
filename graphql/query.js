//It is in this file we will write and export our query.

//We will use gql for formatting the query and exporting it
import gql from 'graphql-tag';
export const allRecipesQuery = gql`
    query Recipes{
        recipes {
            data {
                id
                attributes {
                    Title
                    Date
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
