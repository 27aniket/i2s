import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const navigate = useNavigate();

  return (
    <section id="case-studies" className="section-container bg-black">
      <h2 className="section-title">Case Studies</h2>
      <p className="section-subtitle">
        Discover how we turn challenges into innovative solutions that create measurable impact. 
        Explore the stories behind our success.
      </p>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={() => navigate('/case-studies')}
          className="button-primary"
        >
          View Our Work
        </Button>
      </div>
    </section>
  );
};

export default CaseStudies;