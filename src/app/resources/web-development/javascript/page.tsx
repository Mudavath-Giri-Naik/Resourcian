'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const resources = [
  "Handwritten Notes",
  "Handbooks by Experts",
  "Diagrammatic Explanations",
  "Cheat Sheets",
  "Interview Questions",
  "Top Reference Links"
];

const domains = [
  "Web Development",
  "App Development",
  "Artificial Intelligence",
  "Data Science",
  "Blockchain",
  "Cyber Security"
];

export default function javascriptPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Premium Tech Learning Resources</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
        Get high-quality learning resources for various tech domains at an affordable price.
      </p>

      {/* Resources List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {domains.map((domain, index) => (
          <Card key={index} className="p-5 bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">{domain}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-2">
                {resources.map((resource, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {resource}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">
                  Get for ₹199
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Get All Domains at ₹999</h2>
        <p className="text-gray-600 mt-2">One-time payment for access to all resources</p>
        <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-lg">
          Buy Now for ₹999
        </Button>
      </div>
    </div>
  );
}