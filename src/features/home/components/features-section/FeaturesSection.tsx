import React from 'react';
import { BarChart3, Shield, Calculator, FileText, MessageSquare, TrendingUp } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-3 bg-primary-50 rounded-lg text-primary-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Financial Analytics',
      description:
        'Comprehensive analytics and visualizations of your reserve fund status and projections.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Compliance Tracking',
      description: 'Automated tracking of regulatory compliance requirements and deadlines.',
    },
    {
      icon: <Calculator size={24} />,
      title: 'Assessment Calculator',
      description: 'AI-powered calculator to determine optimal reserve fund contributions.',
    },
    {
      icon: <FileText size={24} />,
      title: 'Document Analysis',
      description: 'Intelligent analysis of reserve fund studies and financial documents.',
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Board Communication',
      description: 'Tools to simplify communication between board members and owners.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Predictive Planning',
      description: 'AI predictions for future expenses and maintenance requirements.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Smarter Management</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform provides comprehensive tools to help you make data-driven decisions for
            your condo's financial health and long-term sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
