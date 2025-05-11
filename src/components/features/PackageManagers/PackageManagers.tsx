import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid';

interface PackageManager {
  name: string;
  description: string;
  installCommand: string;
  verifyCommand: string;
  website: string;
}

const packageManagers: PackageManager[] = [
  {
    name: 'Node Version Manager (nvm)',
    description: 'Manage multiple Node.js versions on your system',
    installCommand: 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash',
    verifyCommand: 'nvm --version',
    website: 'https://github.com/nvm-sh/nvm'
  },
  {
    name: 'Node Package Manager (npm)',
    description: 'Default package manager for Node.js',
    installCommand: 'comes with Node.js installation',
    verifyCommand: 'npm --version',
    website: 'https://www.npmjs.com/'
  },
  {
    name: 'Yarn',
    description: 'Fast, reliable, and secure dependency management',
    installCommand: 'npm install -g yarn',
    verifyCommand: 'yarn --version',
    website: 'https://yarnpkg.com/'
  }
];

export default function PackageManagers() {
  return (
    <Box p={4}>
      <Typography variant="h3" fontWeight={700} mb={6}>
        Package Managers Setup Guide
      </Typography>
      <Grid container spacing={3}>
        {packageManagers.map((manager) => (
          <Grid key={manager.name}
          sx={{xs: 12, md: 6, lg: 4, display: 'flex', justifyContent: 'center'}}>
            <Card elevation={3} sx={{ borderRadius: 2, height: '100%' }}>
              <CardContent>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {manager.name}
                </Typography>
                <Typography color="text.secondary" mb={2}>
                  {manager.description}
                </Typography>
                <Stack spacing={2} mb={2}>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Installation
                    </Typography>
                    <Box
                      component="code"
                      sx={{
                        display: 'block',
                        bgcolor: 'grey.100',
                        p: 1,
                        borderRadius: 1,
                        mt: 0.5,
                        fontFamily: 'monospace',
                        fontSize: '1rem',
                        wordBreak: 'break-all',
                      }}
                    >
                      {manager.installCommand}
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>
                      Verify Installation
                    </Typography>
                    <Box
                      component="code"
                      sx={{
                        display: 'block',
                        bgcolor: 'grey.100',
                        p: 1,
                        borderRadius: 1,
                        mt: 0.5,
                        fontFamily: 'monospace',
                        fontSize: '1rem',
                        wordBreak: 'break-all',
                      }}
                    >
                      {manager.verifyCommand}
                    </Box>
                  </Box>
                </Stack>
                <Button
                  href={manager.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="text"
                  color="primary"
                  sx={{ textTransform: 'none', fontWeight: 500 }}
                >
                  Official Documentation &rarr;
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}