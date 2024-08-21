import React, { useState } from "react";
import { TextField, Grid, Typography, Button, Checkbox, FormControlLabel } from "@mui/material";

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
    e.preventDefault();
    console.log(formData);
    // Process form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Patient Information
      </Typography>
      <Grid container spacing={2}>
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
        <Grid item xs={12}>
          <TextField
            name="streetAddress"
            label="Street Address"
            value={formData.streetAddress}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="state"
            label="State"
            value={formData.state}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="zipCode"
            label="Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="dateOfBirth"
            label="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="age"
            label="Age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="socialSecurity"
            label="Social Security #"
            value={formData.socialSecurity}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="homePhone"
            label="Home Phone #"
            value={formData.homePhone}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="cellPhone"
            label="Cell Phone #"
            value={formData.cellPhone}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="bestTimeToCall"
            label="Best Time to Call"
            value={formData.bestTimeToCall}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="religion"
            label="Religion"
            value={formData.religion}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name="race"
            label="Race"
            value={formData.race}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.maritalStatus === "single"}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    maritalStatus: "single",
                  }))
                }
              />
            }
            label="Single"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.maritalStatus === "married"}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    maritalStatus: "married",
                  }))
                }
              />
            }
            label="Married"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.maritalStatus === "divorced"}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    maritalStatus: "divorced",
                  }))
                }
              />
            }
            label="Divorced"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.maritalStatus === "widowed"}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    maritalStatus: "widowed",
                  }))
                }
              />
            }
            label="Widowed"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.maritalStatus === "separated"}
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    maritalStatus: "separated",
                  }))
                }
              />
            }
            label="Separated"
          />
        </Grid>
        {/* Additional fields like Occupation, Emergency Contact, Insurance, etc., can be added similarly */}
      </Grid>

      {/* Add Emergency Contact */}
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

      {/* Add Insurance Information */}
      <Typography variant="h5" gutterBottom>
        Insurance Information
      </Typography>
      {/* Similar structure for insurance information fields */}
      
      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default PatientForm;
