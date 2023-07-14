import React from 'react';
import {
    Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText, Divider, Grid,
} from '@mui/material';

const RecipeCard = ({recipe}) => {
    const {
        name,
        tagline,
        first_brewed,
        description,
        image_url,
        abv,
        ibu,
        volume,
        method,
        ingredients,
        food_pairing,
        brewers_tips,
    } = recipe;

    return (<Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <CardMedia
                            component="img"
                            style={{width: 75, objectFit: 'cover', margin: 'auto'}}
                            image={image_url}
                            alt={name}
                        />

                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h4" component="div" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {tagline}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            First Brewed: {first_brewed}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {description}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            ABV: {abv}% | IBU: {ibu}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Volume: {volume.value} {volume.unit}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{margin: '16px 0'}}/>
                <Typography variant="h6" fontWeight='bold' gutterBottom>
                    Method:
                </Typography>
                <List>
                    {method.mash_temp.map((temp, index) => (<ListItem key={index}>
                            <ListItemText
                                primary={`${temp.temp.value} ${temp.temp.unit} - ${temp.duration} min`}
                            />
                        </ListItem>))}
                    <ListItem>
                        <ListItemText
                            primary={`Fermentation: ${method.fermentation.temp.value} ${method.fermentation.temp.unit}`}
                        />
                    </ListItem>
                </List>
                <Divider style={{margin: '16px 0'}}/>
                <Typography variant="h6" fontWeight='bold' gutterBottom>
                    Ingredients:
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6">Malt:</Typography>
                        <List>
                            {ingredients.malt.map((malt, index) => (<ListItem key={index}>
                                    <ListItemText
                                        primary={`${malt.name}: ${malt.amount.value} ${malt.amount.unit}`}
                                    />
                                </ListItem>))}
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">Hops:</Typography>
                        <List>
                            {ingredients.hops.map((hop, index) => (<ListItem key={index}>
                                    <ListItemText
                                        primary={`${hop.name}: ${hop.amount.value} ${hop.amount.unit} - ${hop.add} (${hop.attribute})`}
                                    />
                                </ListItem>))}
                        </List>
                    </Grid>
                </Grid>

                <Divider style={{margin: '16px 0'}}/>
                <Typography variant="h6" fontWeight='bold' gutterBottom>
                    Yeast: {ingredients.yeast}
                </Typography>
                <Divider style={{margin: '16px 0'}}/>
                <Typography variant="h6" fontWeight='bold' gutterBottom>
                    Food Pairing:
                </Typography>
                <List>
                    {food_pairing.map((food, index) => (<ListItem key={index}>
                            <ListItemText primary={food}/>
                        </ListItem>))}
                </List>
                <Divider style={{margin: '16px 0'}}/>
                <Typography variant="body2">
                    Brewer's Tips: {brewers_tips}
                </Typography>
            </CardContent>
        </Card>);
};

export default RecipeCard;
