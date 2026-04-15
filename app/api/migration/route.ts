export async function GET() {
  return Response.json({
    repos: 2,
    branches: 5,
    prs: 10,
  });
}
