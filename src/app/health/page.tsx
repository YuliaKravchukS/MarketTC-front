interface HealthCheckPromise {
  statusCode: number;
  message: string;
  result: Result;
}

type Result = {
  database: string;
  server: string;
};

async function getData(): Promise<HealthCheckPromise> {
  try {
    const data = await fetch(
      `https://proactive-flexibility-production.up.railway.app/healthcheck`,
      {
        cache: 'no-cache',
      },
    ).then((res) => res.json());
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
}

const HealthCheckPage: React.FC = async () => {
  const data = await getData();

  return (
    <div>
      <h1>Health Check</h1>
      <h2>Status Code: {data?.statusCode}</h2>
      <div>Server: {data?.result.server}</div>
    </div>
  );
};

export default HealthCheckPage;
