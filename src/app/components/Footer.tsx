"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitors");
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>© 2025 Resourcian. All rights reserved.</p>
        <p className="text-sm">Open-source project | Contribute on GitHub</p>
        <p className="text-sm mt-2">
          Real-time Visitors: {visitorCount !== null ? visitorCount : "Loading..."}
        </p>
      </div>
    </footer>
  );
}
