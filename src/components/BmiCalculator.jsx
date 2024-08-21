import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    try {
      setError(null);
      const response = await axios.post(
        'https://bmi.p.rapidapi.com/v1/bmi',
        {
          weight: { value: weight, unit: 'kg' },
          height: { value: height, unit: 'cm' },
          sex: 'm',
          age: '24',
          waist: '34.00',
          hip: '40.00',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Host': 'bmi.p.rapidapi.com',
            'X-RapidAPI-Key': '06f4442320msh202a6df40bc862dp1bb8f7jsn556d090a2b93',
          },
        }
      );
  
      setBmi(response.data.bmi);
    } catch (err) {
      console.error('Error during API call:', err);
      setError(err.response ? err.response.data : err.message);
    }
  };
  

  return (
    <Paper style={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        BMI Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Weight (kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Height (cm)"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculate}
            fullWidth
          >
            Calculate BMI
          </Button>
        </Grid>
      </Grid>
      {bmi && (
        <Typography variant="h6" style={{ marginTop: '16px' }}>
          Your BMI is: {bmi}
        </Typography>
      )}
      {error && (
        <Typography color="error" style={{ marginTop: '16px' }}>
          {error}
        </Typography>
      )}
    </Paper>
  );
};

export default BmiCalculator;
