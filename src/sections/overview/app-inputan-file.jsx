import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function AppWidgetInputan({ onFileChange }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      onFileChange(file);
    } else {
      alert('Hanya file PDF yang dapat diunggah!');
    }
  };

  return (
    <Card
      sx={{
        px: 3,
        py: 4,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: 'background.paper',
        textAlign: 'center',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
          boxShadow: 5,
        },
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h6">Upload File</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            border: '1px dashed',
            borderRadius: 1,
            p: 2,
            bgcolor: 'background.default',
            transition: '0.3s',
            '&:hover': {
              borderColor: 'primary.main',
            },
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 64, color: 'action.active' }} />
          <Typography variant="body2" sx={{ mt: 1 }}>Drag & drop file here</Typography>
          <Typography variant="body2">or</Typography>
          <Button variant="contained" component="label" sx={{ mt: 1 }}>
            Choose File
            <input type="file" hidden onChange={handleFileChange} accept=".pdf" />
          </Button>
        </Box>
        {selectedFile && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            File selected: {selectedFile.name}
          </Typography>
        )}
      </Stack>
    </Card>
  );
}

AppWidgetInputan.propTypes = {
  onFileChange: PropTypes.func.isRequired,
};