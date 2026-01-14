import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { fetchProjects, fetchTemplates } from "@/lib/server-api";

import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Templates from "@/components/Templates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const queryClient = getQueryClient();

  // 서버에서 데이터 병렬 prefetch
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["projects"],
      queryFn: () => fetchProjects(),
    }),
    queryClient.prefetchQuery({
      queryKey: ["templates"],
      queryFn: () => fetchTemplates(),
    }),
  ]);

  return (
    <main>
      <Navigation />
      <Header />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Projects />
        <Templates />
      </HydrationBoundary>
      <Contact />
      <Footer />
    </main>
  );
}
