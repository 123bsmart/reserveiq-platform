import AboutUsHeader from '@/features/about-us/components/AboutUsHeader';
import AboutUsLayout from '@/features/about-us/components/AboutUsLayout';

const AboutUsPage: React.FC = () => {
  return (
    <AboutUsLayout>
      <AboutUsHeader />
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 space-y-12">
        <section>
          <h1 className="text-3xl font-bold mb-4">About ReserveIQ</h1>
          <h2 className="text-2xl font-semibold mb-4">We're Property Managers Who Got Tired of Financial Surprises</h2>
          <p className="mt-4">
            ReserveIQ was founded by property management professionals who experienced the stress of explaining $50,000+
            emergency assessments to shocked owners—crises that could have been predicted years earlier with the right
            tools.
          </p>
          <p className="mt-4">
            After managing hundreds of buildings across Ontario and watching too many communities face devastating
            special assessments, we realized the industry needed better than spreadsheets and outdated software.
            Property managers deserved tools that actually helped them get ahead of problems instead of constantly
            reacting to crises.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            <strong>The Problem We Lived:</strong> As practicing property managers, we spent countless hours crafting
            emails, explaining financial reports, and fielding angry calls from owners about unexpected fees. Meanwhile,
            reserve fund shortfalls were quietly building toward disasters that would devastate communities and destroy
            client relationships.
          </p>
          <p className="mt-4">
            <strong>The Moment of Truth:</strong> After helping three different buildings through emergency assessments
            in one year—each preventable with early warning—we decided to build the platform we wished we'd had all
            along.
          </p>
          <p className="mt-4">
            <strong>The Solution We Built:</strong> ReserveIQ combines the daily efficiency tools property managers
            actually need (professional email templates, automated reporting) with the crisis prevention capabilities
            that protect long-term client relationships (AI-powered reserve analysis, early warning systems).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why We're Different</h2>
          <p className="mb-2 font-semibold">Built BY Property Managers, FOR Property Managers</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Real Industry Experience:</strong> 15+ years managing Ontario properties
            </li>
            <li>
              <strong>Practical Solutions:</strong> Tools designed for actual daily workflows
            </li>
            <li>
              <strong>Crisis Prevention Focus:</strong> Because reactive management destroys client trust
            </li>
            <li>
              <strong>Partnership Approach:</strong> We share revenue because your success is our success
            </li>
          </ul>
          <p className="mt-4 mb-2 font-semibold">We Understand Your Challenges:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Late nights crafting emails for difficult board meetings</li>
            <li>Explaining complex financial reports to frustrated owners</li>
            <li>Managing multiple buildings with different compliance requirements</li>
            <li>Building trust with boards who've been burned by previous managers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-2 font-semibold">
            Transform property management from reactive crisis management to proactive portfolio intelligence.
          </p>
          <p className="mt-4">
            We believe property managers should spend time building relationships and growing their business—not writing
            the same emails over and over or explaining surprise assessments that could have been prevented.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-2 font-semibold">Industry Veterans Who've Been in Your Shoes</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Property Management:</strong> 15+ years across Ontario markets
            </li>
            <li>
              <strong>Technology Expertise:</strong> AI and software development specialists
            </li>
            <li>
              <strong>Regulatory Knowledge:</strong> Deep understanding of Ontario, BC, and Alberta requirements
            </li>
            <li>
              <strong>Professional Networks:</strong> Active members in ACMO and industry associations
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="mb-2 font-semibold">Your Success Is Our Success</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Partnership Revenue Model:</strong> We earn when you earn
            </li>
            <li>
              <strong>Continuous Innovation:</strong> Regular feature updates based on PM feedback
            </li>
            <li>
              <strong>Responsive Support:</strong> 4-hour response times from people who understand your business
            </li>
            <li>
              <strong>Industry Advocacy:</strong> Supporting professional property management standards
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What Drives Us</h2>
          <p>
            Every prevented crisis, every hour saved, every satisfied board member represents a property manager who can
            focus on growing their business instead of fighting fires.
          </p>
          <p className="mt-4">
            We're building the platform we wished we'd had when we were managing buildings full- time—and we won't stop
            until every property manager has the tools to succeed proactively, not reactively.
          </p>
        </section>
      </div>
    </AboutUsLayout>
  );
};

export default AboutUsPage;
