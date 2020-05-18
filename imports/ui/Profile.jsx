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
import { Profiles } from '../api/profiles';
import { withTracker } from 'meteor/react-meteor-data';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            artistName: '',
            description: '',
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props != prevProps) {
            const profile = this.props.profiles.find(
                (profile) => profile._id === this.props.userId
            );
            if (profile) {
                this.setState({
                    name: profile.name,
                    artistName: profile.artistName,
                    description: profile.description,
                });
            }
        }
    }
    userLoggedInRender() {
        if (Meteor.user()) {
            return (
                <React.Fragment>
                    <Button
                        style={this.props.classes.profileButton}
                        variant="outlined"
                    >
                        Follow
                    </Button>
                </React.Fragment>
            );
        }
    }

    notLoggedInRender() {}

    ownerLoggedInRender() {
        if (Meteor.userId() === this.props.userId) {
            return (
                <Button
                    style={this.props.classes.profileButton}
                    variant="outlined"
                >
                    Edit Profile
                </Button>
            );
        }
    }

    render() {
        return (
            <Card elevation={6} style={this.props.classes.profileDiv}>
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
                            {this.userLoggedInRender()}
                            <Button
                                style={this.props.classes.profileButton}
                                variant="outlined"
                            >
                                Share Profile
                            </Button>
                            {this.ownerLoggedInRender()}
                        </div>
                    </div>

                    <CardContent style={this.props.classes.profileCardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {this.state.description}
                        </Typography>
                    </CardContent>
                </Card>
                <div
                    style={{
                        position: 'relative',
                        width: 'fit-content',
                        height: 'fit-content',
                    }}
                >
                    <Typography
                        style={this.props.classes.artistName}
                        variant="h2"
                    >
                        {this.state.artistName}
                    </Typography>
                    <Card
                        elevation={12}
                        style={this.props.classes.profileContentCard}
                    >
                        {' '}
                        Oy mate goodaye mate Oy mate goodaye mate Oy mate
                        goodaye mate Oy mate goodaye mate Oy mate goodaye mate
                        Oy mate goodaye mate Oy mate goodaye mate Oy mate
                        goodaye mate Oy
                    </Card>
                </div>
            </Card>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('profiles');
    return {
        profiles: Profiles.find({}).fetch(),
    };
})(Profile);
