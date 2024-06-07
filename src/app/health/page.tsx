const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("failed to fetch API data");
  return response.json();
};

type User = {
  id: string;
  name: string;
};

const HealthCheckPage = async () => {
  const apiData = await getData();
  return (
    <div>
      <h1>Health Check</h1>

      <div>
        {apiData.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckPage;
