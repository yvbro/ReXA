import React from 'react';

import {useSelector} from 'react-redux';

import {Grid} from '@material-ui/core';

import {ProjectInfo} from './ProjectInfo';
import {ProcessorGrid} from './ProcessorGrid';
import {ScanGrid} from './ScanGrid';

import LoadingIndicator from '../../common/LoadingIndicator';
import NoData from "../../common/NoData";

const ProjectDetails = () => {
    const {project, loading, parentLoading} = useSelector((state) => ({
        project: state.project.selectedProject.data,
        loading: state.project.selectedProject.loading,
        parentLoading: state.project.projectsList.loading,
    }));

    return (
        <>
            {loading || parentLoading ? (
                <LoadingIndicator/>
            ) : project && project.assessors ? (
                <>
                    <Grid container spacing={3}>
                        <Grid item md={3} xs={12}>
                            <ProjectInfo project={project}/>
                        </Grid>
                        <ScanGrid scans={project.scans}/>
                    </Grid>
                    <ProcessorGrid processors={project.assessors}/>
                </>
            ) : (
                <>
                    <Grid container spacing={3}>
                        <Grid item md={12} xs={12}>
                            <NoData label='No project selected or no data found !'/>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default ProjectDetails;
