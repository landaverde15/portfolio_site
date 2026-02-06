import React from 'react';

const EducaToroPrivacy: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>EducaToro SMS Privacy Policy</h1>
      <p><em>Last Updated: February 5, 2026</em></p>

      <h2>1. Overview</h2>
      <p>
        This Privacy Policy describes how EducaToro ("we," "us," or "our") collects, uses, and protects information when you receive SMS text messages from our educational notification service.
      </p>

      <h2>2. Information We Collect</h2>
      <p>When you enroll as a parent in EducaToro through your child's teacher, we collect:</p>
      <ul>
        <li><strong>Phone Number:</strong> Your mobile phone number to send SMS notifications</li>
        <li><strong>Student Information:</strong> Your child's name and enrollment details</li>
        <li><strong>Message Data:</strong> Records of messages sent to you (attendance, grades, exam notifications)</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your phone number solely to send you transactional SMS notifications about your child's education, including:</p>
      <ul>
        <li>Attendance alerts (absent, present, tardy)</li>
        <li>Grade updates and exam results</li>
        <li>Important academic notifications from teachers</li>
      </ul>
      <p><strong>We do NOT:</strong></p>
      <ul>
        <li>Send marketing or promotional messages</li>
        <li>Share your phone number with third parties for marketing</li>
        <li>Use your data for purposes unrelated to your child's education</li>
      </ul>

      <h2>4. Message Frequency</h2>
      <p>
        Message frequency varies based on your child's school activity and teacher communications. You may receive multiple messages per week during active school periods.
      </p>

      <h2>5. Opt-Out Rights</h2>
      <p>
        You can stop receiving SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation message, and no further messages will be sent to your number. You may also reply <strong>HELP</strong> for assistance.
      </p>

      <h2>6. Message and Data Rates</h2>
      <p>
        Standard message and data rates from your mobile carrier may apply. EducaToro does not charge for SMS messages, but your carrier may charge you for receiving texts.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use industry-standard security measures to protect your phone number and message data. However, no method of electronic transmission is 100% secure. We use Twilio, a trusted third-party SMS provider, to deliver messages.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your phone number and message history for as long as your child is enrolled in a class using EducaToro, plus one year for record-keeping. After opting out, we maintain your number in an opt-out list to honor your preference.
      </p>

      <h2>9. Third-Party Service Providers</h2>
      <p>
        We use Twilio to send SMS messages. Twilio's privacy practices are governed by their own privacy policy. We do not share your data with any other third parties except as required by law.
      </p>

      <h2>10. Children's Privacy</h2>
      <p>
        EducaToro is designed for use by teachers and parents. We do not knowingly collect personal information directly from children under 13. Parents provide consent for student information when enrolling through teachers.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted at this URL with an updated "Last Updated" date. Continued use of SMS services after changes constitutes acceptance of the updated policy.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For questions about this Privacy Policy or to exercise your rights, contact us at:
      </p>
      <p>
        <strong>Email:</strong> landaverde.erik10@gmail.com<br/>
        <strong>Reply to SMS:</strong> Reply HELP to any message<br/>
        <strong>Mailing Address:</strong> 22555 Nadine Cir, Torrance CA 90505
      </p>

      <h2>13. Your Rights</h2>
      <p>Depending on your location, you may have rights including:</p>
      <ul>
        <li>Right to access your data</li>
        <li>Right to request deletion of your phone number</li>
        <li>Right to opt-out of communications (via STOP)</li>
        <li>Right to data portability</li>
      </ul>

      <h2>14. Consent</h2>
      <p>
        By providing your phone number to your child's teacher for EducaToro notifications, you consent to receive transactional SMS messages as described in this Privacy Policy. This consent is not a condition of purchase or enrollment.
      </p>
    </div>
  );
};

export default EducaToroPrivacy;