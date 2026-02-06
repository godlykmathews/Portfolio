import resumePdf from "@/assets/Godly_K_Mathews_Resume.pdf";
import { Download, ExternalLink } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/40 to-background flex items-center justify-center p-6">
      
      {/* Card Container */}
      <div className="w-full max-w-5xl bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-border bg-muted/30">
          
          {/* Title Section */}
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Godly K Mathews
            </h1>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer • Resume
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            
            <a
              href={resumePdf}
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              <Download size={16} />
              Download
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted transition"
            >
              <ExternalLink size={16} />
              Open
            </a>

          </div>
        </div>

        {/* PDF Viewer */}
        <div className="p-4 md:p-6 bg-muted/20">
          <iframe
            src={resumePdf}
            title="Resume PDF"
            className="
              w-full 
              h-[75vh] 
              md:h-[80vh] 
              rounded-xl 
              border 
              border-border 
              shadow-inner 
              bg-white
            "
          />
        </div>

      </div>
    </div>
  );
};

export default Resume;
