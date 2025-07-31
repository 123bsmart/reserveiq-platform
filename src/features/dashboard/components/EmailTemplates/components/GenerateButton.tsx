import { Clock, Zap } from 'lucide-react';

interface GenerateButtonProps {
  isGenerating: boolean;
  generateContent: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ isGenerating, generateContent }) => {
  return (
    <button
      onClick={generateContent}
      disabled={isGenerating}
      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      {isGenerating ? (
        <>
          <Clock className="h-4 w-4 mr-2 animate-spin" />
          Generating AI Content...
        </>
      ) : (
        <>
          <Zap className="h-4 w-4 mr-2" />
          Generate Email with AI
        </>
      )}
    </button>
  );
};

export default GenerateButton;
