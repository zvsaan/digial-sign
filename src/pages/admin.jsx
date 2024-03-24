import { Helmet } from 'react-helmet-async';

import { AdminView } from 'src/sections/admin';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Admin Dashboard </title>
      </Helmet>

      <AdminView />
    </>
  );
}
