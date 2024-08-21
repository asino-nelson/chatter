const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-violet-500/50 items-center justify-center md:py-32 py-24 px-4">
      <div className="md:w-3/5 md:m-auto">
        <h1 className="md:text-6xl text-3xl text-center font-bold mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">Last updated: 21/08/2024</p>
        <p className="text-gray-800 mb-4">
          This Privacy Policy outlines how we collect, use, and protect personal
          information obtained through our website and services, in accordance
          with the European General Data Protection Regulation (GDPR). By using
          our website and services, you consent to the practices described in
          this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-800 mb-4">
          We may collect and process the following categories of personal
          information:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>
            <strong>Contact Information:</strong> Name, email address, phone
            number, and other contact details
          </li>
          <li>
            <strong>Account Information:</strong> Usernames, passwords, and
            other credentials used to access our services.
          </li>
          <li>
            <strong> Usage Information:</strong> Information about how you
            interact with our website and services, including IP address,
            browser type, referring pages, and pages visited.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          2. Purpose of Processing Personal Information
        </h2>
        <p className="text-gray-800 mb-4">
          We collect and process personal information for the following
          purposes:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>Providing and improving our services.</li>
          <li>
            TCommunicating with you, including responding to inquiries and
            providing support.
          </li>
          <li>
            Personalizing and tailoring your experience with our services.
          </li>
          <li>
            Conducting analytics to understand usage patterns and enhance our
            website and services.
          </li>
          <li>
            Complying with legal obligations and protecting our rights and
            interests.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          3. Lawful Basis for Processing
        </h2>
        <p className="text-gray-800 mb-4">
          We rely on the following lawful bases for processing personal
          information:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>
            <strong> Contractual Necessity:</strong> Processing is necessary to
            fulfill a contract with you or take pre-contractual steps at your
            request.
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Processing is necessary for
            our legitimate interests, provided that your rights and freedoms do
            not override those interests.
          </li>
          <li>
            <strong>Consent: </strong> Processing is based on your explicit
            consent, which you may withdraw at any time.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          4. Data Sharing and Transfers
        </h2>
        <p className="text-gray-800 mb-4">
          We may share personal information with third parties in the following
          circumstances:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>
            <strong>Service Providers:</strong> We engage trusted service
            providers who assist us in delivering our services and processing
            personal information on our behalf.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may share personal information
            to comply with legal obligations, enforce our rights, or respond to
            lawful requests from public authorities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
        <p className="text-gray-800 mb-4">
          We retain personal information for as long as necessary to fulfill the
          purposes outlined in this Privacy Policy, unless a longer retention
          period is required or permitted by law. When personal information is
          no longer needed, we will securely dispose of or anonymize it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p className="text-gray-800 mb-4">
          You have certain rights regarding your personal information, subject
          to applicable laws. These rights may include the right to access,
          rectify, restrict, or delete personal information we hold about you.
          To exercise your rights, please contact us using the information
          provided below.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
        <p className="text-gray-800 mb-4">
          We implement appropriate technical and organizational measures to
          safeguard personal information against loss, unauthorized access, and
          misuse. However, please note that no data transmission over the
          internet or electronic storage method is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          8. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-800 mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. We encourage you to review this
          policy periodically.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p className="text-gray-800 mb-4">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at info@chatterbot.com
        </p>
        <address className="text-gray-800">
          ChatterBot
          <br />
          info@chatterbot.com
        </address>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
