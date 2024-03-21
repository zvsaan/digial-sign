import { Helmet } from 'react-helmet-async';

import { AdminView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function AdminPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard Admin </title>
      </Helmet>

      <AdminView />
    </>
  );
}
