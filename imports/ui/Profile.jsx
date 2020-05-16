import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActionArea,
    Button,
    Paper,
} from '@material-ui/core';

export class Profile extends React.Component {
    render() {
        return (
            <Card elevation={1} style={this.props.classes.profileDiv}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    title="Contemplative Reptile"
                    height="450px"
                    style={this.props.classes.coverPhoto}
                    image="https://upload.wikimedia.org/wikipedia/commons/2/20/Plini248_300x_RG.jpg"
                />
                <div style={this.props.classes.coverPhotoStyle}></div>
                <Card elevation={12} style={this.props.classes.profileCard}>
                    <div style={this.props.classes.upperProfileCard}>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="500px"
                            title="Contemplative Reptile"
                            image="https://upload.wikimedia.org/wikipedia/commons/2/20/Plini248_300x_RG.jpg"
                        />
                        <div style={this.props.classes.profileCardControls}>
                            <Button
                                style={this.props.classes.profileButton}
                                variant="outlined"
                            >
                                Follow
                            </Button>
                            <Button
                                style={this.props.classes.profileButton}
                                variant="outlined"
                            >
                                Share Profile
                            </Button>
                        </div>
                    </div>

                    <CardContent style={this.props.classes.profileCardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Artist Name
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Description description eueerereDescription
                            description eueerereDescription description
                            eueerereDescription description eueerereDescription
                            description eueerereDescription description
                            eueerereDescription description eueerereDescription
                            description eueerere
                        </Typography>
                    </CardContent>
                </Card>
                <Typography style={this.props.classes.artistName} variant="h2">
                    Plini
                </Typography>
                <Card
                    elevation={12}
                    style={this.props.classes.profileContentCard}
                >
                    {' '}
                    Oy mate goodaye mate
                </Card>
            </Card>
        );
    }
}
