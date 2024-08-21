import { useEffect, useState } from "react";
import { Typography, Paper, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
		<Grid container spacing={2} sx={{ padding: 5 }}>
			<Paper
				sx={{
					// position: 'absolute',
					// top: '50%',
					// left: '50%',
					// transform: 'translate(-50%, -50%)',
					width: "70%",
					bgcolor: "background.paper",
					boxShadow: 24,
					// maxHeight: '60vh',
					overflowY: "auto",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography variant="h4" gutterBottom>
					Patient Summary
				</Typography>
				<Grid item xs={12}>
					<Typography variant="h5">Last Name: {formData.lastName}</Typography>
					<Typography variant="h5">First Name: {formData.firstName}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6">
						Marital status: {formData.maritalStatus}
					</Typography>
					<Typography variant="h6">
						Street Address: {formData.streetAddress}
					</Typography>
					<Typography variant="h6">City: {formData.city}</Typography>
					<Typography variant="h6">Zip Code: {formData.zipCode}</Typography>
					<Typography variant="h6">DOB: {formData.dateOfBirth}</Typography>
					<Typography variant="h6">Age: {formData.age}</Typography>
					<Typography variant="h6">
						Insurance Policy#: {formData.socialSecurity}
					</Typography>
					<Typography variant="h6">Home#: {formData.homePhone}</Typography>
					<Typography variant="h6">Cell#: {formData.cellPhone}</Typography>
					<Typography variant="h6">Religion: {formData.religion}</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6">Emergency Contacts:</Typography>
					{formData.emergencyContacts.map((contact, index) => (
						<div key={index}>
							<Typography variant="subtitle1">{contact.name}</Typography>
							<Typography variant="body1">
								Relationship: {contact.relationship}
							</Typography>
							<Typography variant="body1">Phone: {contact.phone}</Typography>
							<Typography variant="body1">
								Cell Phone: {contact.cellPhone}
							</Typography>
							<Typography variant="body1">
								Address: {contact.address}
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
