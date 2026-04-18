import { useEffect } from 'react';

export default function BugPage() {
  useEffect(() => {
    window.location.href = 'https://guileless-fox-6d54b9.netlify.app';
  }, []);
  return null;
}