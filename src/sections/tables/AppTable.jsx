import { styled } from "@mui/material";

import SimpleCard from "src/components/tabel";

import PaginationTable from "./PaginationTable";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppTable() {
  return (
    <Container>
      <SimpleCard title="Pagination Table">
        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
