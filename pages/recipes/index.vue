<template>
  <div>
      <h1>Recipes Page</h1>
        {{
            !!recipes?.data[0]?.attributes?.Title
            ? recipes.data[0].attributes.Title
            : `The query did not work`
        }}
  </div>
</template>

<script>
import { allRecipesQuery } from '~/graphql/query';

export default {
    name: 'Recipes',

    data(){
        return {
            recipes: [],
        }
    },

    apollo: {
        recipes: {
            prefetch: true,
            query: allRecipesQuery,
        }
    },

    head() {
        return {
            title: 'Recipes',
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: "Recipes List for Sadiyahs Kitchen"
                }
            ]
        }
    },
}
</script>

<style>

</style>