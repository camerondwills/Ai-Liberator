import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - AI Liberator</title>
      </Helmet>

      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Card>
            <CardContent className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
              
              <div className="prose prose-gray dark:prose-invert">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>Overview</h2>
                <p>
                  AI Liberator ("we", "us", or "our") does not collect, store, or process any personal information from its users. This app is designed to function without requiring any user data.
                </p>

                <h2>No Data Collection</h2>
                <p>
                  Our app operates entirely on your device and does not:
                  <ul>
                    <li>Collect personal information</li>
                    <li>Track user behavior</li>
                    <li>Use cookies or similar tracking technologies</li>
                    <li>Share any data with third parties</li>
                  </ul>
                </p>

                <h2>Changes to Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page.
                </p>

                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  hello@ailiberator.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
