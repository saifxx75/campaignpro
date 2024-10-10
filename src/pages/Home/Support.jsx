import React from "react";
import "../Assets/css/Support.css";

export default function Support() {
  return (
    <>
      <div className="support">
        <h1>Support</h1>

        <h4>1. Welcome to CampaignPro Support</h4>
        <p>
          Welcome to the CampaignPro Support Center. Our goal is to provide the best customer experience and help you get the most out of our platform. Below you’ll find resources to guide you, answer your questions, and provide the help you need. If you don’t find what you’re looking for, feel free to contact us directly.
        </p>

        <h4>2. Frequently Asked Questions (FAQs)</h4>
        <div className="faq-section">
          <p><strong>Q1:</strong> How do I create a new campaign?</p>
          <p><strong>A:</strong> You can create a new campaign by navigating to the Dashboard, clicking on "New Campaign," and filling in the necessary details.</p>

          <p><strong>Q2:</strong> How do I edit an existing campaign?</p>
          <p><strong>A:</strong> Go to the "My Campaigns" section on your Dashboard, find the campaign you want to edit, and click the "Edit" button.</p>

          <p><strong>Q3:</strong> Can I collaborate with others on a campaign?</p>
          <p><strong>A:</strong> Yes, you can add team members by going to the campaign settings and inviting users via email.</p>
        </div>

        <h4>3. Contact Us</h4>
        <p>
          If you need further assistance, you can reach out to us at:
          <br />
          <strong>Email:</strong> support@campaignpro.com
          <br />
          <strong>Phone:</strong> 1-800-123-4567
        </p>

        <h4>4. Submit a Support Request</h4>
        <p>
          If you encounter an issue or need specific help, you can submit a support request using the following link: <a href="/support-request">Submit Support Request</a>.
        </p>
      </div>
    </>
  );
}
