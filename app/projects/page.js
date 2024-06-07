
'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

const Projects = () => {
  const router = useRouter();

  useEffect(() => {
    // `replace` current entry in the history stack (`push` would create a new history entry, unintentionally allowing the user to navigate back to `/projects`) :
    router.replace('/');
  }, [router]);

  // optionally return null or a loading component here :
  return <Loading />;
}

export default Projects;