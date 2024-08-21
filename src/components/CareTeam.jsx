import React, { useState } from 'react';
import ProviderCard from './ProviderCard';
import { Button, Modal, TextField, FormControl, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CareTeam = () => {
  const [providers, setProviders] = useState([
    {
      id: 1,
      name: 'John Doe, MD, MS',
      title: 'Primary Care Provider',
      specialty: 'Internal Medicine',
      imageUrl: 'doctor-image-url',
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: '',
      specialty: 'Physical Therapist',
      imageUrl: 'audiologist-image-url',
    },
    {
      id: 3,
      name: 'Alex Johnson',
      title: '',
      specialty: 'Dentist',
      imageUrl: 'audiologist-image-url',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProvider, setCurrentProvider] = useState(null);
  const [newProvider, setNewProvider] = useState({
    id: null,
    name: '',
    title: '',
    specialty: '',
    imageUrl: '',
  });

  const handleAddProvider = () => {
    if (isEditing) {
      setProviders(providers.map(provider =>
        provider.id === newProvider.id ? newProvider : provider
      ));
      setIsEditing(false);
    } else {
      setProviders([...providers, { ...newProvider, id: Date.now() }]);
    }
    setNewProvider({
      id: null,
      name: '',
      title: '',
      specialty: '',
      imageUrl: '',
    });
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProvider(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (provider) => {
    setNewProvider(provider);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setProviders(providers.filter(provider => provider.id !== id));
  };

  return (
    <div>
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          {...provider}
          onEdit={() => handleEdit(provider)}
          onDelete={() => handleDelete(provider.id)}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => {
          setNewProvider({
            id: null,
            name: '',
            title: '',
            specialty: '',
            imageUrl: '',
          });
          setIsEditing(false);
          setShowModal(true);
        }}
      >
        Add Provider
      </Button>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2>{isEditing ? 'Edit Provider' : 'Add New Provider'}</h2>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={newProvider.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              value={newProvider.title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Specialty"
              variant="outlined"
              name="specialty"
              value={newProvider.specialty}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Image URL"
              variant="outlined"
              name="imageUrl"
              value={newProvider.imageUrl}
              onChange={handleChange}
            />
          </FormControl>
          <div style={{ marginTop: 20 }}>
            <Button variant="outlined" color="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={handleAddProvider}>
              {isEditing ? 'Save Changes' : 'Add Provider'}
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CareTeam;
