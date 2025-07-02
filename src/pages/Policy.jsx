import React, { useState } from 'react';

const Policy = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-white">
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded-md text-white font-semibold ${
            activeTab === 'privacy' ? 'bg-green-500' : 'bg-gray-300'
          }`}
          onClick={() => handleTabChange('privacy')}
        >
          Privacy Policy
        </button>
        <button
          className={`py-2 px-4 rounded-md text-white font-semibold ${
            activeTab === 'terms' ? 'bg-green-500' : 'bg-gray-300'
          }`}
          onClick={() => handleTabChange('terms')}
        >
          Terms of Service
        </button>
      </div>

      {activeTab === 'privacy' && (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Privacy Policy</h1>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to StudyNotion. We value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and safeguard the data of instructors and students.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">2. Information We Collect</h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li><strong>Personal Information</strong>: Name, email address, and payment details.</li>
              <li><strong>Course Data</strong>: Course-related content submitted by instructors.</li>
              <li><strong>Usage Data</strong>: How users interact with the platform.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">3. How We Use Your Information</h2>
            <p className="text-gray-600">We use your data for platform functionality, payments, notifications, and analysis.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">4. Data Security</h2>
            <p className="text-gray-600">We use security measures to protect your data, but no system is 100% secure.</p>
          </section>
        </div>
      )}

      {activeTab === 'terms' && (
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Terms of Service</h1>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">1. Introduction</h2>
            <p className="text-gray-600">
              By using StudyNotion, you agree to these Terms of Service.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">2. Account Creation</h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li><strong>Eligibility</strong>: You must be 18 or older to create an instructor account.</li>
              <li><strong>Account Responsibility</strong>: You are responsible for maintaining the confidentiality of your login credentials.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">3. Instructor Responsibilities</h2>
            <p className="text-gray-600">
              Instructors must ensure their courses meet quality standards and comply with applicable laws.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-700">4. Student Responsibilities</h2>
            <p className="text-gray-600">
              Students agree to pay for courses they purchase and follow course rules. Refunds are subject to platform conditions.
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default Policy;
