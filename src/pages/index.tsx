//import { JobCard } from "@/components/jobCard";
import { Grid } from "@mui/material";

export default function HomePage() {
  //const { data: jobs = [] } = useJobs();

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/*jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))*/}
    </Grid>
  );
}
