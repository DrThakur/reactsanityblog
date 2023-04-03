import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "osnwbmnn",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-14",
});

export default client;
