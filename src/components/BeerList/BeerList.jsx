import React, {useEffect, useState} from 'react';
import useBeerStore from '../../store/useBeerStore';
import SingleBeer from '../SingleBeer/SingleBeer';
import {Box, Button, Grid, List, ListItem, Typography} from '@mui/material';

const BeerList = () => {
    const recipes = useBeerStore((state) => state.recipes);
    const selectedRecipes = useBeerStore((state) => state.selectedRecipes);
    const toggleRecipeSelection = useBeerStore((state) => state.toggleRecipeSelection);
    const deleteSelectedRecipes = useBeerStore((state) => state.deleteSelectedRecipes);
    const fetchRecipes = useBeerStore((state) => state.fetchRecipes);
    const setSelectedBeer = useBeerStore((state) => state.setSelectedBeer);

    const [showRecipeCard, setShowRecipeCard] = useState(true);

    useEffect(() => {
        if (recipes.length === 0) {
            fetchRecipes();
        }
    }, [recipes.length, fetchRecipes]);

    const handleRecipeClick = (recipeId) => {
        toggleRecipeSelection(recipeId);
    };

    const handleDeleteClick = () => {
        deleteSelectedRecipes();
    };

    const handleRecipeCardOpen = (recipeId) => {
        const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);
        setSelectedBeer(selectedRecipe);
        setShowRecipeCard(true);
    };

    const handleCloseRecipeCard = () => {
        setShowRecipeCard(false);
    };

    return (<Grid container spacing={2} sx={{pb: 7}}>
            <Grid item xs={4}>

                {selectedRecipes.length > 0 && (<Box sx={{textAlign: 'center', pt: 2}}>
                        <Button variant="contained" onClick={handleDeleteClick}>
                            Delete selected
                        </Button>
                    </Box>)}

                <Box sx={{width: '100%', pl: 1, pr: 1}}>
                    <List>
                        {recipes.slice(0, 15).map((recipe) => (<ListItem
                                key={recipe.id}
                                className={selectedRecipes.includes(recipe.id) ? 'selected' : ''}
                                onContextMenu={(event) => {
                                    event.preventDefault();
                                    handleRecipeClick(recipe.id);
                                }}
                                sx={{
                                    backgroundColor: selectedRecipes.includes(recipe.id) ? 'lightblue' : 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    marginBottom: '8px',
                                }}
                                onClick={() => handleRecipeCardOpen(recipe.id)}
                            >
                                <Typography variant="h6" fontWeight='bold' gutterBottom>
                                    {recipe.id} - {recipe.name}
                                </Typography>
                            </ListItem>))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <SingleBeer showRecipeCard={showRecipeCard} handleCloseRecipeCard={handleCloseRecipeCard}/>
            </Grid>
        </Grid>);

};

export default BeerList;






