import React from 'react';

import { Grid } from '@material-ui/core';

import { getUnusableScans } from '../../../helpers/xnat';
import ScanTypesDetails from './ScanTypesDetails';
import UnusableScans from './UnusableScans';
import { Scan } from '../../../models/project/Scan';

interface ScanGridProps {
    scans: Scan[];
}

function ScanGrid({ scans }: ScanGridProps) {
    const unusableScans = getUnusableScans(scans);

    return (
        <>
            <Grid item md={unusableScans.length > 0 ? 6 : 9} xs={12}>
                <ScanTypesDetails scans={scans} />
            </Grid>
            {unusableScans.length > 0 && (
                <Grid item md={3} xs={12}>
                    <UnusableScans unusableScans={unusableScans} />
                </Grid>
            )}
        </>
    );
}

export default ScanGrid;
