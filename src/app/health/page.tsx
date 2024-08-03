import { Api } from '@/services/api-client';

const HealthCheckPage: React.FC = async () => {
  const data = await Api.healthcheck.getAll();

  if (!data) {
    return <div>error</div>;
  }

  return (
    <div>
      <h1>Health Check</h1>
      <h2>Status Code: {data?.statusCode}</h2>
      <div>Server: {data?.result.server}</div>
    </div>
  );
};

export default HealthCheckPage;
