<template>
  <div>
      <h1>Recipes Page</h1>
        <div v-for="recipe in recipes.data" v-bind:key="recipe.id">
           <pre>{{ recipe.attributes.Title }}</pre>
        </div>
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