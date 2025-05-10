import { Job } from "@/types/job";
import axiosClient from "./axiosClient";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await axiosClient.get("remote-jobs");
  return response.data.jobs;
};
