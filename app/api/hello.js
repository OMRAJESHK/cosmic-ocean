export async function GET(request) {
  console.log("requestrequest", request);
  res.status(200).json({ message: "Hello from Next.js!" });
}
