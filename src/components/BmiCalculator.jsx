import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Alert,
} from '@mui/material';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('m');
  const [age, setAge] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/bmi', {
        weight: { value: weight, unit: 'kg' },
        height: { value: height, unit: 'cm' },
        sex,
        age,
        waist,
        hip
      });
      setBmiResult(response.data);
      setError(null);
    } catch (err) {
      setError('An error occurred while calculating BMI.');
      setBmiResult(null);
    }
  };
  

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper sx={{ p: 2, maxWidth: 600, width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          BMI Calculator
        </Typography>
        <TextField
          label="Weight (kg)"
          type="number"
          fullWidth
          margin="normal"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <TextField
          label="Height (cm)"
          type="number"
          fullWidth
          margin="normal"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <TextField
          label="Age"
          type="number"
          fullWidth
          margin="normal"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          label="Waist (cm)"
          type="number"
          fullWidth
          margin="normal"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
        />
        <TextField
          label="Hip (cm)"
          type="number"
          fullWidth
          margin="normal"
          value={hip}
          onChange={(e) => setHip(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Calculate BMI
        </Button>
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {bmiResult && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">BMI Result:</Typography>
            <pre>{JSON.stringify(bmiResult, null, 2)}</pre>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default BmiCalculator;
