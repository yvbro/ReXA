import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(() => ({
    alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: grey[500],
    },
    iconDef: {
        fontSize: 80,
    },
}));

export const NoUserData = () => {
    const classes = useStyles();

    return (
        <CardContent className={classes.alignItemsAndJustifyContent}>
            <InfoIcon className={classes.iconDef} />
            <Typography variant="h5" component="h2">
                No users on the platform
            </Typography>
        </CardContent>
    );
};
