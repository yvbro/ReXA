import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Switch, IconButton, Grid, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import { switchEnabledUser } from '../redux/userDuck';
import RexaDataTable from '../../common/RexaDataTable';
import RexaModal from '../../common/RexaModal';
import RexaCard from '../../common/RexaCard';
import AddUserForm from '../smart/AddUserForm';
import ChangePasswordForm from '../smart/ChangePasswordForm';
import { GoogleIcon } from '../../auth/dumb/SocialLogin';

import { GOOGLE_AUTH_PROVIDER } from '../../../helpers/constants/index';
import { primaryButtonColor } from '../../../helpers/constants/variables.scss';

import classes from './UserListPage.module.scss';

const DEFAULT_MODAL_PASSWORD_STATE = {open: false, userEmail: ''};

const useStyles = makeStyles(() => ({
    button: {
        marginLeft: 'auto',
        height: 40,
        marginRight: 8,
        backgroundColor: primaryButtonColor,
        color: 'white',
    },
}));

const UserListPage = () => {
    const style = useStyles();

    const dispatch = useDispatch();

    const [openModalNewUser, setOpenModalNewUser] = useState(false);
    const [openModalPassword, setOpenModalPassword] = useState(DEFAULT_MODAL_PASSWORD_STATE);

    const { users } = useSelector((state) => ({
        users: state.user.data,
    }));

    const handleChange = (userEmail, enabled) =>
        dispatch(switchEnabledUser(userEmail, !enabled));

    const toSwitch = user => {
        return (
            <Switch
                checked={user.enabled}
                onChange={() => handleChange(user.email, user.enabled)}
                disabled={user.roles.includes('ADMIN')}
                color="primary"
                name="disableUser"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
        );
    };

    const toEditComponent = user => {
        let component = (
            <IconButton color="primary" aria-label="edit password" component="span" onClick={() => setOpenModalPassword({open: true, userEmail: user.email})}> 
                <EditIcon />
            </IconButton>
        );

        if (user.roles.includes('ADMIN')) {
            component = (
                <IconButton color="primary" aria-label="edit password" component="span" disabled > 
                    <EditIcon />
                </IconButton>
            );
        } else if (user.authProvider === GOOGLE_AUTH_PROVIDER) {
            component = <GoogleIcon />;
        }

        return component;
    };

    const data = [
        { name: 'Email', values: users.map((e) => e.email) },
        { name: 'Role', values: users.map((e) => e.roles.join(',')) },
        { name: 'Enabled', values: users.map((e) => toSwitch(e)) },
        { name: 'Edit', values: users.map((e) => toEditComponent(e)) },
    ];

    const action = (
        <Button
            variant="outlined"
            color="primary"
            onClick={() => setOpenModalNewUser(true)}
            className={style.button}
        >
            Add user
        </Button>
    );
    
    return (
        <Grid container className={classes.rootDiv} spacing={3}>
            <Grid item md={12} xs={12}>
                <RexaCard 
                    title='User Management'
                    className={classes.card}
                    actions={action}>
                    <RexaModal
                        open={openModalNewUser}
                        closeModal={() => setOpenModalNewUser(false)}
                        title='addUserModal'>
                        <div>
                            <AddUserForm
                                users={users.map((e) => e.email)}
                                closeAction={() => setOpenModalNewUser(false)}
                            />
                        </div>
                    </RexaModal>
                    <RexaModal
                        open={openModalPassword.open}
                        closeModal={() => setOpenModalPassword(DEFAULT_MODAL_PASSWORD_STATE)}
                        title="editPasswordModal">
                        <div>
                            <ChangePasswordForm
                                userEmail={openModalPassword.userEmail}
                                closeAction={() => setOpenModalPassword(DEFAULT_MODAL_PASSWORD_STATE)}
                            />
                        </div>
                    </RexaModal>
                    <RexaDataTable
                        data={data}
                        loading={false}
                        noDataLabel="No users on the platform!"
                        fullHeight
                    />
                </RexaCard>
            </Grid>
        </Grid>
    );
};

export default UserListPage;
