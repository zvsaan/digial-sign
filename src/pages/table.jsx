import { Helmet } from 'react-helmet-async';

import { AppTable } from 'src/sections/tables';

// ----------------------------------------------------------------------

export default function TablePage() {
  return (
    <>
      <Helmet>
        <title> Register </title>
      </Helmet>

      <AppTable />
    </>
  );
}
