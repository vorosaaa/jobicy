import { JobCard } from "@/components/jobCard";
import { useJobs } from "@/hooks/useJobs";
import { Grid } from "@mui/material";

export default function HomePage() {
  const { data: jobs = [] } = useJobs();
  console.log("Jobs:", jobs);

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Grid>
  );
}
