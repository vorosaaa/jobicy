import { fetchJobs } from "@/api/jobApi";
import { Job } from "@/types/job";
import { useQuery } from "@tanstack/react-query";

export const useJobs = () => {
  return useQuery<Job[], Error>({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
};
