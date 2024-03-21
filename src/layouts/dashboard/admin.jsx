import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import NavAdmin from './nav-admin';
import MainAdmin from './main-admin';
import HeaderAdmin from './header-admin';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <HeaderAdmin onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <NavAdmin openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <MainAdmin>{children}</MainAdmin>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
