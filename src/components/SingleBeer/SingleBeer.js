import React from 'react';
import {Box, Button, Typography} from '@mui/material';
import useBeerStore from '../../store/useBeerStore';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from '../../styles/SingleBeerStyles/singleBeer.module.scss';

const SingleBeer = ({showRecipeCard, handleCloseRecipeCard}) => {
    const selectedBeer = useBeerStore((state) => state.selectedBeer);

    return (<div className={styles['single-beer']}>

            {showRecipeCard && selectedBeer ? (<div>
                    <Box sx={{textAlign: 'center', pb: 2, mt: -4}}>
                        <Button variant="contained" onClick={handleCloseRecipeCard}>
                            Close Info
                        </Button>
                    </Box>
                    <RecipeCard recipe={selectedBeer}/>
                </div>) : (<div>
                    <Typography variant="h4" gutterBottom>
                        No beer selected
                    </Typography>
                    <Typography variant="body1">Please select a beer</Typography>
                </div>)}
        </div>);
};

export default SingleBeer;


