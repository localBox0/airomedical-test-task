import {create} from 'zustand';

const useBeerStore = create((set) => ({
    recipes: [], selectedRecipes: [], currentPortion: 1, selectedBeer: null,

    fetchRecipes: async () => {
        try {
            const {currentPortion} = useBeerStore.getState();
            const response = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPortion}`);
            const data = await response.json();
            set((state) => ({
                recipes: data, currentPortion: state.currentPortion + 1
            }));
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }, toggleRecipeSelection: (recipeId) => {
        set((state) => {
            const {selectedRecipes} = state;
            const isSelected = selectedRecipes.includes(recipeId);
            const updatedSelectedRecipes = isSelected ? selectedRecipes.filter((id) => id !== recipeId) : [...selectedRecipes, recipeId];

            return {selectedRecipes: updatedSelectedRecipes};
        });
    }, deleteSelectedRecipes: () => {
        set((state) => {
            const {recipes, selectedRecipes} = state;
            const filteredRecipes = recipes.filter((recipe) => !selectedRecipes.includes(recipe.id));

            return {recipes: filteredRecipes, selectedRecipes: []};
        });
    }, setSelectedBeer: (recipe) => {
        set({selectedBeer: recipe});
    }
}));

export default useBeerStore;





