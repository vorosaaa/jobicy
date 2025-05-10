import { JobCard } from "@/components/jobCard";
import { useJobs } from "@/hooks/useJobs";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import he from "he";
import { Job } from "@/types/job";

export default function HomePage() {
  const { data: jobs = [], isLoading, isSuccess } = useJobs();

  // Just checked the API that it can filter by location and industry, maybe I'll implement it tomorrow
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (isLoading) return;
    if (isSuccess) {
      setFilteredJobs(jobs);
    }
  }, [isLoading, isSuccess, jobs]);

  const industries = useMemo(() => {
    const allIndustries = jobs.flatMap((job) => job.jobIndustry || []);
    const unique = new Set(allIndustries);
    return Array.from(unique).sort();
  }, [jobs]);

  const handleSearch = () => {
    const filtered = jobs.filter((job) => {
      const matchesLocation = locationFilter
        ? job.jobGeo.toLowerCase().includes(locationFilter.toLowerCase())
        : true;

      const matchesIndustry = selectedIndustry
        ? job.jobIndustry?.includes(selectedIndustry)
        : true;

      return matchesLocation && matchesIndustry;
    });

    setFilteredJobs(filtered);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Remote Job Listings
      </Typography>

      <Box display="flex" gap={2} alignItems="center" mb={4}>
        <TextField
          fullWidth
          label="Helyszín"
          variant="outlined"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
        <Select
          fullWidth
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          displayEmpty
          sx={{ minWidth: 200 }}
        >
          <MenuItem value="">Összes iparág</MenuItem>
          {industries.map((ind) => (
            <MenuItem key={ind} value={ind}>
              {he.decode(ind)}
            </MenuItem>
          ))}
        </Select>

        <Button fullWidth variant="contained" onClick={handleSearch}>
          Keresés
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </Grid>
    </Container>
  );
}
