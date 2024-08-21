import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import TobaccoChart from '../components/TobaccoChart';
import BmiCalculator from '../components/BmiCalculator';

export const SummaryPage = () => {

  return (
    <Grid sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxHeight: '70vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
    }}>
      <h1>API renders here</h1>
        {/* <TobaccoChart/> */}
        <BmiCalculator />
    </Grid>
  );
};

export default SummaryPage;
