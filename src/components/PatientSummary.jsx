import { useEffect, useState } from "react";
import { Typography, Paper, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { light } from "@mui/material/styles/createPalette";

export const PatientSummary = () => {
	const [formData, setFormData] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		// Retrieve data from local storage
		const savedData = localStorage.getItem("patientData");
		if (savedData) {
			setFormData(JSON.parse(savedData));
		}
	}, []);

	const handleEdit = () => {
		// Navigate to the form page with the current data
		navigate("/patient-info", { state: { formData } });
	};

	if (!formData) {
		return <Typography variant="h6">Loading...</Typography>;
	}

	return (
		<Grid container spacing={3} sx={{ padding: 5 }} justifyContent={"center"}>
			<Paper
				sx={{
					width: "50%",
					boxShadow: 24,
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center"
				}}
			>
				<Typography variant="h3" gutterBottom>
					Patient Summary
				</Typography>
				<Grid item xs={12}>
					<Typography variant="h4">Last Name: {formData.lastName}</Typography>
					<Typography variant="h4">First Name: {formData.firstName}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h5" fontFamily={'Arial'} gutterBottom>
						Marital status: {formData.maritalStatus}
						<br></br>Street Address: {formData.streetAddress}
						<br></br>City: {formData.city}
						<br></br>Zip Code: {formData.zipCode}
						<br></br>DOB: {formData.dateOfBirth}
						<br></br>Age: {formData.age}
						<br></br>Insurance Policy#: {formData.socialSecurity}
						<br></br>Home#: {formData.homePhone}
						<br></br>Cell#: {formData.cellPhone}
						<br></br>Religion: {formData.religion}			
						</Typography>
				</Grid>
				
				<Grid item xs={12}>
					<Typography variant="h4">Emergency Contacts:</Typography>
					{formData.emergencyContacts.map((contact, index) => (
						<div key={index}>
							<Typography variant="h5">{contact.name}</Typography>
							<Typography variant="h5" fontFamily={'Arial'}>
								Relationship: {contact.relationship}
							</Typography>
							<Typography variant="h5" fontFamily={'Arial'}>Phone: {contact.phone}</Typography>
							<Typography variant="h5" fontFamily={'Arial'}>
								Cell Phone: {contact.cellPhone}
							</Typography>
							<Typography variant="h5" fontFamily={'Arial'}>
								Address: {contact.address}<br></br><br></br>
							</Typography>
						</div>
					))}
				</Grid>

				<Grid item xs={12}>
					<Button variant="contained" color="primary" onClick={handleEdit}>
						go back to Edit
					</Button>
				</Grid>
			</Paper>
		</Grid>
	);
};
