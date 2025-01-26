import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

const GetStarted = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = 'info@i2s.in';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Email copied to clipboard",
        description: "You can now paste it anywhere",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="section-container pt-32 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="section-title bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600">
            We are glad you're interested in reaching out. Send us an email at info@i2s.in, 
            and we'll get back to you promptly to assist with your inquiry.
          </p>
          <div className="flex items-center justify-center space-x-4 p-6 bg-white/5 rounded-lg">
            <span className="text-xl text-white">{email}</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5 text-gray-600" />
                    )}
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{copied ? 'Copied!' : 'Copy'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
