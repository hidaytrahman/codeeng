'use client';

import { useEffect, useMemo, useState } from 'react';
import useScreenClass from '../../../hooks/useScreenClass';
import { mainNavList } from './data';
import Link from 'next/link';
import { Box, AppBar, Toolbar, Typography, Button, Container, Stack } from '@mui/material';

export default function Header() {
    const getResponsiveClass = useScreenClass();

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (getResponsiveClass() === 'md' || getResponsiveClass() === 'sm') {
            setVisible(false);
        }
    }, [getResponsiveClass]);

    const isMobile = useMemo(
        () => getResponsiveClass() === 'md' || getResponsiveClass() === 'sm',
        [getResponsiveClass]
    );

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <AppBar position="static" color="default" elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 64 }}>
                        <Box sx={{ flex: 1 }}>
                            <Link href="/" passHref legacyBehavior>
                                <Typography
                                    component="a"
                                    variant="h6"
                                    color="primary"
                                    sx={{ textDecoration: 'none', fontWeight: 700 }}
                                >
                                    <span className="sr-only">Home</span>
                                    Codeeng {'</>'}
                                </Typography>
                            </Link>
                        </Box>
                        <Stack direction="row" spacing={2} alignItems="center">
                            {mainNavList.map((nav, index) => (
                                <Link href={nav.url} passHref legacyBehavior key={index}>
                                    <Button
                                        component="a"
                                        color="inherit"
                                        sx={{
                                            textTransform: 'none',
                                            color: 'text.secondary',
                                            '&:hover': { color: 'text.primary' },
                                        }}
                                    >
                                        {nav.name}
                                    </Button>
                                </Link>
                            ))}
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box bgcolor="primary.dark" py={6}>
                <Container maxWidth="lg">
                    <Box maxWidth="sm">
                        <Typography variant="h2" color="common.white" fontWeight={700} gutterBottom>
                            Code Environments
                        </Typography>
                        <Typography variant="body1" color="grey.300" sx={{ mt: 2 }}>
                            Code environment basic and required setup for your project or new machine.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
