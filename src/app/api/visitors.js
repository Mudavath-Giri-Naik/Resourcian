let visitorCount = 0;

export default function handler(req, res) {
  if (req.method === "GET") {
    visitorCount += 1;
    res.status(200).json({ count: visitorCount });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
