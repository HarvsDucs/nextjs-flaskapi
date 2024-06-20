'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://flask-hello-world-pi-virid.vercel.app/")
    .then(response => response.json())
    .then(data => 
      setData{data.message};
    };
  }, []);

  return (
    <div>
      <h1>Fetched Data: {data} </h1>
    </div>
  );
}
