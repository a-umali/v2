import React from 'react';
import { Grid, Paper, Typography, Button, List, ListItem, ListItemText, Avatar, TextField, Badge } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const MessageCenter = () => {
  const messages = [
    { subject: 'Title', sender: 'Customer Service', content: 'Good morning, Great to hear. Have a great day!', date: '5/8/2023', avatar: '' },
    { subject: 'Billing', sender: 'Customer Service', content: 'Thank you for contacting our Customer Service Department regarding your hospital billing...', date: '4/3/2023', avatar: '' },
    { subject: 'Billing', sender: 'Customer Service', content: 'Thank you for contacting our Customer Service Department regarding your physician billing...', date: '23/3/2023', avatar: '' },
    { subject: 'Referral', sender: 'Dr. John Doe', content: 'I suggest you go to a specialist today. Let me know.', date: '12/2/2023', avatar: 'doctor-avatar-url' },
    { subject: 'Referral', sender: 'Dr. Jane Smith', content: 'Dr. Doe would like to inquire if you would like a dentist Referral? If so...', date: '5/2/2023', avatar: '' },
    { subject: 'Referral request', sender: 'Dr. Doe', content: 'Request for an an appointment.', date: '10/1/2023', avatar: '' },
  ];

  return (
    <Grid container spacing={2} sx={{ height: '100vh', padding: 2 }}>
      {/* Sidebar */}
      <Grid item xs={3}>
        <Paper sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Button variant="contained" color="success" fullWidth sx={{ marginBottom: 2 }}>
            Send a message
          </Button>
          <List>
            <ListItem button>
              <InboxIcon />
              <ListItemText primary="Conversations" sx={{ marginLeft: 2 }} />
            </ListItem>
            <ListItem button>
              <BookmarkIcon />
              <ListItemText primary="Bookmarked" sx={{ marginLeft: 2 }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Appointments" sx={{ marginLeft: 2 }} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Automated messages" sx={{ marginLeft: 2 }} />
              <Badge badgeContent={3} color="primary" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Trash" sx={{ marginLeft: 2 }} />
            </ListItem>
          </List>
        </Paper>
      </Grid>

      {/* Message List */}
      <Grid item xs={9}>
        <Paper sx={{ padding: 2, height: '100%', overflowY: 'auto' }}>
          <Typography variant="h6" gutterBottom>
            Conversations
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search conversations"
            size="small"
            fullWidth
            sx={{ marginBottom: 2 }}
            InputProps={{
              startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
            }}
          />
          <List>
            {messages.map((message, index) => (
              <ListItem key={index} alignItems="flex-start">
                <Avatar alt={message.sender} src={message.avatar} />
                <ListItemText
                  primary={message.subject}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {message.sender}
                      </Typography>
                      {` — ${message.content}`}
                    </>
                  }
                  sx={{ marginLeft: 2 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {message.date}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessageCenter;
