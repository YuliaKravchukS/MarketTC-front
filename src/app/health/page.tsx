'use client';
import React, { useState, useEffect } from 'react';

async function getData(): Promise<any> {
  // const apiUrl = process.env.URL;
  const data = await fetch(`http://localhost:5000/healthcheck`, {
    cache: 'no-cache',
  }).then((res) => res.json());
  return data;
}

const HealthCheckPage: React.FC = () => {
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setApiData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Health Check</h1>
      <h2>Status Code: {apiData?.status_code}</h2>
      <div>Server: {apiData?.result.server}</div>
    </div>
  );
};

export default HealthCheckPage;
