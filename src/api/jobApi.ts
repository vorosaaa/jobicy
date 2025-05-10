import { Job } from "@/types/job";
import axios from "axios";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await axios.get("https://jobicy.com/api/v2/remote-jobs");
  return response.data.jobs;
};
