import { GitPullRequest, Trophy } from "lucide-react";

const contributions = [
  {
    repo: "IraSoro/peri",
    pr: 435,
    link: "https://github.com/IraSoro/peri/pull/435",
  },
  {
    repo: "CodeChefVIT/clueminati-2025",
    pr: 94,
    link: "https://github.com/CodeChefVIT/clueminati-2025/pull/94",
  },
  {
    repo: "InsForge/InsForge",
    pr: 409,
    link: "https://github.com/InsForge/InsForge/pull/409",
  },
  {
    repo: "EbookFoundation/free-programming-books",
    pr: 12190,
    link: "https://github.com/EbookFoundation/free-programming-books/pull/12190",
  },
  {
    repo: "EbookFoundation/free-programming-books",
    pr: 12186,
    link: "https://github.com/EbookFoundation/free-programming-books/pull/12186",
  },
  {
    repo: "EbookFoundation/free-programming-books",
    pr: 12184,
    link: "https://github.com/EbookFoundation/free-programming-books/pull/12184",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Achievements & <span className="gradient-text">Contributions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievements Card */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-primary" />
                Hackathon Wins
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">&#10003;</span>
                  <span>
                    Winner of{" "}
                    <span className="font-medium text-foreground">
                      Build for Thrissur
                    </span>{" "}
                    hackathon.
                  </span>
                </li>
              </ul>
            </div>

            {/* Open Source Card */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <GitPullRequest className="w-6 h-6 text-primary" />
                Open Source
              </h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start">
                  <span className="text-primary mr-2 mt-1">&#10003;</span>
                  <span>
                    Proud winner of{" "}
                    <span className="font-medium text-foreground">
                      Hacktoberfest 2025
                    </span>{" "}
                    with 6 merged PRs.
                  </span>
                </p>
                <div className="pl-7 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                  {contributions.map((contrib, index) => (
                    <a
                      key={index}
                      href={contrib.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline truncate"
                      title={`${contrib.repo}#${contrib.pr}`}
                    >
                      {contrib.repo}#{contrib.pr}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
