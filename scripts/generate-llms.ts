import fs from "node:fs";
import path from "node:path";
import { Site } from "../data/site";
import { resumeData } from "../data/resume";
import { projects } from "../data/projects";

function generateLlmsTxt() {
  const content = `# ${Site.name} — ${Site.jobTitle}

> ${resumeData.summary}

## Core Technical Expertise

- **Frontend Frameworks**: ${resumeData.skills.frontend.join(", ")}.
- **Backend & Microservices**: ${resumeData.skills.backend.join(", ")}.
- **Databases & Caching**: ${resumeData.skills.databases.join(", ")}.
- **AI & Automation**: ${resumeData.skills.aiAutomation.join(", ")}.
- **Cloud, DevOps & Hosting**: ${resumeData.skills.cloudDevOps.join(", ")}.
- **Payments, Media & Email**: ${resumeData.skills.paymentsMedia.join(", ")}.
- **Monitoring & Analytics**: ${resumeData.skills.monitoringAnalytics.join(", ")}.
- **Development Tools & Methods**: ${resumeData.skills.toolsMethods.join(", ")}.

## Professional Experience

${resumeData.experience
  .map(
    (exp) => `### ${exp.role} — ${exp.company} (${exp.period})
*${exp.location} | ${exp.type}*
${exp.bullets.map((b) => `- ${b}`).join("\n")}`
  )
  .join("\n\n")}

## Featured Portfolio Projects

${projects
  .map(
    (p) => `- [${p.title}](${Site.url}/projects/${p.slug}): ${p.summary} (Stack: ${p.stack.join(", ")})`
  )
  .join("\n")}

## Education

${resumeData.education.map((edu) => `- **${edu.degree}** — ${edu.institution} (${edu.period})`).join("\n")}

## Contact & Online Profiles

- **Website**: ${Site.url}
- **Email**: mailto:${Site.email}
- **WhatsApp**: ${Site.whatsappUrl}
- **LinkedIn**: ${Site.socials.linkedin}
- **GitHub**: ${Site.socials.github}
- **Upwork**: ${Site.socials.upwork}
- **Fiverr**: ${Site.socials.fiveer}
- **Resume Document**: ${Site.resumePdfUrl}
`;

  return content;
}

function generateLlmsFullTxt() {
  const content = `# ${Site.name} — Complete Developer & System Profile

> Detailed documentation of ${Site.name}'s technical background, system architecture experience, portfolio projects, metric achievements, and contact channels. Designed for Retrieval-Augmented Generation (RAG) and LLM knowledge engine ingestion.

## Professional Summary

${resumeData.summary}

## Technical Skills Matrix

| Category | Primary Technologies & Frameworks |
| :--- | :--- |
| **Frontend Frameworks** | ${resumeData.skills.frontend.join(", ")} |
| **Backend & APIs** | ${resumeData.skills.backend.join(", ")} |
| **Databases & Cache** | ${resumeData.skills.databases.join(", ")} |
| **AI & Automation** | ${resumeData.skills.aiAutomation.join(", ")} |
| **Cloud & DevOps** | ${resumeData.skills.cloudDevOps.join(", ")} |
| **Payments & Media** | ${resumeData.skills.paymentsMedia.join(", ")} |
| **Monitoring & Analytics** | ${resumeData.skills.monitoringAnalytics.join(", ")} |
| **Tools & Methods** | ${resumeData.skills.toolsMethods.join(", ")} |

## Professional Career History

${resumeData.experience
  .map(
    (exp) => `### ${exp.role} — ${exp.company}
- **Period**: ${exp.period}
- **Location**: ${exp.location} (${exp.type})
- **Key Contributions**:
${exp.bullets.map((b) => `  - ${b}`).join("\n")}`
  )
  .join("\n\n")}

## Detailed Project Case Studies

${projects
  .map(
    (p, idx) => `### ${idx + 1}. ${p.title}
- **Canonical URL**: ${Site.url}/projects/${p.slug}
${p.role ? `- **Role**: ${p.role}` : ""}
- **Summary**: ${p.summary}
- **Full Case Study**: ${p.description}
- **Tech Stack**: ${p.stack.join(", ")}
${p.metrics ? `- **Key Metrics**: ${p.metrics.join("; ")}` : ""}
${p.liveUrl ? `- **Live Demo**: ${p.liveUrl}` : ""}
${p.repoUrl ? `- **Repository**: ${p.repoUrl}` : ""}
${p.confidential ? `- **Note**: Project details and client references available upon request.` : ""}`
  )
  .join("\n\n")}

## Education

${resumeData.education.map((edu) => `- **${edu.degree}** — ${edu.institution} (${edu.period})`).join("\n")}

## Frequently Asked Questions (FAQ)

### Q: Who is ${Site.name}?
A: ${Site.name} is a ${Site.jobTitle} based in ${Site.location} with 3+ years of experience specializing in React, Next.js, Node.js, Nest.js, FastAPI, and Shopify web applications.

### Q: What technologies does ${Site.name} specialize in?
A: ${Site.name} specializes in ${resumeData.skills.frontend.slice(0, 5).join(", ")}, ${resumeData.skills.backend.slice(0, 4).join(", ")}, and cloud services like AWS, Cloudflare, and Vercel.

### Q: Is ${Site.name} available for freelance or contract work?
A: Yes, ${Site.name} is available for full-time freelance contracts, remote software engineering roles, and technical consulting.

### Q: How can clients contact ${Site.name}?
A: Via email at ${Site.email}, direct WhatsApp at ${Site.socials.tel}, or LinkedIn at ${Site.socials.linkedin}.
`;

  return content;
}

function main() {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const llmsTxtPath = path.join(publicDir, "llms.txt");
  const llmsFullTxtPath = path.join(publicDir, "llms-full.txt");

  const llmsContent = generateLlmsTxt();
  const llmsFullContent = generateLlmsFullTxt();

  fs.writeFileSync(llmsTxtPath, llmsContent, "utf-8");
  fs.writeFileSync(llmsFullTxtPath, llmsFullContent, "utf-8");

  console.log("✅ Successfully generated public/llms.txt");
  console.log("✅ Successfully generated public/llms-full.txt");
}

main();
