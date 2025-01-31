export default function handler(req, res) {
  res.status(200).json({
    message: "Hello, API is working!",
    status: "success",
    timestamp: new Date().toISOString(),
  });
}
