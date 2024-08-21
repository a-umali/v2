import React, { useState } from "react";
import { TextField, Grid, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    initial: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    age: "",
    socialSecurity: "",
    homePhone: "",
    cellPhone: "",
    bestTimeToCall: "",
    religion: "",
    race: "",
    maritalStatus: "",
    occupation: "",
    workNumber: "",
    employerAddress: "",
    emergencyContacts: [{ name: "", relationship: "", phone: "", cellPhone: "", address: "" }],
    insurance: {
      primary: {
        company: "",
        policy: "",
        group: "",
        claimsAddress: "",
        policyHolderEmployer: "",
        relationshipToInsured: "",
        policyHolderName: "",
        subscriberSocialSecurity: "",
        gender: "",
        dateOfBirth: "",
      },
      secondary: {
        company: "",
        policy: "",
        group: "",
        claimsAddress: "",
        relationshipToInsured: "",
        policyHolderName: "",
        subscriberSocialSecurity: "",
        gender: "",
        dateOfBirth: "",
      }
    },
    referralInfo: {
      name: "",
      phone: ""
    }
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmergencyContactChange = (index, e) => {
    const { name, value } = e.target;
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      emergencyContacts: updatedContacts,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log(formData); // Handle the form data here

    // Navigate to the new route after form submission
    navigate("/patient-summary");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Patient Information
      </Typography>
      <Grid container spacing={2}>
        {/* Input fields here */}
        <Grid item xs={12} sm={4}>
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="initial"
            label="Initial"
            value={formData.initial}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* Additional fields here */}
        <Grid item xs={12}>
          <TextField
            name="streetAddress"
            label="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        {/* More fields */}
      </Grid>

      {/* Emergency Contact */}
      <Typography variant="h5" gutterBottom>
        Emergency Contact
      </Typography>
      {formData.emergencyContacts.map((contact, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              value={contact.name}
              onChange={(e) => handleEmergencyContactChange(index, e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="relationship"
              label="Relationship to Patient"
              value={contact.relationship}
              onChange={(e) => handleEmergencyContactChange(index, e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone #"
              value={contact.phone}
              onChange={(e) => handleEmergencyContactChange(index, e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="cellPhone"
              label="Cell Phone #"
              value={contact.cellPhone}
              onChange={(e) => handleEmergencyContactChange(index, e)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Street Address"
              value={contact.address}
              onChange={(e) => handleEmergencyContactChange(index, e)}
              fullWidth
            />
          </Grid>
        </Grid>
      ))}

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default PatientForm;
