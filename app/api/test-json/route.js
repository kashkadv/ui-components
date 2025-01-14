export async function GET() {
  // Create the JSON data
  const jsonData = {
    name: 'John Doe',
    age: 30,
    location: 'New York',
  };

  // Return the JSON data as a response
  return new Response(JSON.stringify(jsonData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}