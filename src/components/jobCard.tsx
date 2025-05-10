import { Job } from "@/types/job";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

type Props = {
  job: Job;
};

export const JobCard = ({ job }: Props) => {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }} key={job.id}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="140"
          image={job.companyLogo}
          alt={`${job.jobTitle} logo`}
        />
        <CardContent>
          <Typography variant="h6">{job.jobTitle}</Typography>
          <Typography variant="body2">
            {job.jobType} | {job.jobLevel}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {job.jobDescription.slice(0, 100)}...
          </Typography>
          <Button
            href={job.jobUrl}
            target="_blank"
            rel="noopener"
            sx={{ mt: 2 }}
          >
            View Job
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
