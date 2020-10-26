import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const Board = (props) => {
    return(
        <Card variant="outline">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {props.data.name}
                </Typography>
                <Typography color="textSecondary">
                    {props.data.like}
                </Typography>
            </CardContent>
            <CardActions>
                <Container>
                    <Button size="small" variant="contained" style={{marginLeft:1}} color="primary">Edit</Button>
                    <Button size="small" variant="contained" style={{marginLeft:1}} color="secondary">Delete</Button>
                </Container>
                
            </CardActions>
        </Card>
    );
} 

export default Board;