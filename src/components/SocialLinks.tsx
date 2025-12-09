import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SocialLinks() {
  const handleSocialClick = (platform: string, url: string) => {
    toast.success(`Opening ${platform}...`);
    // In a real app, this would open the actual social media link
    console.log(`Navigate to: ${url}`);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleSocialClick('LinkedIn', 'https://linkedin.com/in/alexmorgan')}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleSocialClick('Instagram', 'https://instagram.com/alexmorgan.creates')}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleSocialClick('YouTube', 'https://youtube.com/@alexmorgan')}
        className="text-muted-foreground hover:text-primary transition-colors"
        aria-label="YouTube"
      >
        <Youtube className="w-5 h-5" />
      </button>
    </div>
  );
}
