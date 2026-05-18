import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <article className="prose-page">
      <h1>About</h1>
      <p>Hi, I am Kenneth Rios.</p>
      <p>
        I am a software engineer based in David, Chiriquí, Panama. Most of my recent work has
        been around AI: agents, retrieval systems, small automation services, and APIs, often on
        Cloudflare Workers, and lately also on Azure.
      </p>
      <p>
        Today I am a Full Stack Developer at <strong>ASSA Compañía de Seguros</strong>, where I
        help bring AI capabilities into the company's existing platforms. The day-to-day is a
        mix of TypeScript, React, .NET / C# ASP.NET, and Python, deployed through Azure and Azure
        DevOps under agile methodology.
      </p>
      <p>
        Before ASSA I was at <strong>Zelta</strong>, working on autonomous agent platforms,
        custom skills for{" "}
        <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noreferrer">
          Claude Code
        </a>{" "}
        and{" "}
        <a href="https://openai.com/index/introducing-codex/" target="_blank" rel="noreferrer">
          Codex
        </a>{" "}
        used internally for repetitive engineering processes and code review, evaluation
        pipelines with{" "}
        <a href="https://github.com/gepa-ai/gepa" target="_blank" rel="noreferrer">
          GEPA
        </a>{" "}
        and{" "}
        <a href="https://www.promptfoo.dev/" target="_blank" rel="noreferrer">
          PromptFoo
        </a>
        , and all of the AI features at{" "}
        <a href="https://nomyt.co" target="_blank" rel="noreferrer">
          Nomyt
        </a>{" "}
        (a recruitment SaaS for Latin America). Earlier, at <strong>RednBlue</strong>, I built a
        no-code agent SaaS, a natural-language data insights system, a few production{" "}
        <a href="https://modelcontextprotocol.io/" target="_blank" rel="noreferrer">
          MCP
        </a>{" "}
        servers, Photowall for{" "}
        <a href="https://relevo.fanlyc.org/" target="_blank" rel="noreferrer">
          FANLYC Chiriquí
        </a>
        , and a handful of small automation services.
      </p>
      <p>
        I have contributed features and bug fixes to open-source projects like{" "}
        <a href="https://www.chatwoot.com" target="_blank" rel="noreferrer">
          Chatwoot
        </a>{" "}
        and the OpenAI Agents SDK. A lot of my personal work runs on Cloudflare: Workers,{" "}
        <a href="https://developers.cloudflare.com/durable-objects/" target="_blank" rel="noreferrer">
          Durable Objects
        </a>
        ,{" "}
        <a href="https://developers.cloudflare.com/d1/" target="_blank" rel="noreferrer">
          D1
        </a>
        ,{" "}
        <a href="https://developers.cloudflare.com/r2/" target="_blank" rel="noreferrer">
          R2
        </a>
        , Vectorize, Workflows, Queues, and AI Gateway.
      </p>
      <p>
        Reach me at{" "}
        <a href="mailto:kennethfi646@gmail.com">kennethfi646@gmail.com</a>,{" "}
        <a href="https://github.com/Kenth06" target="_blank" rel="noreferrer">
          Github
        </a>
        , or{" "}
        <a href="https://linkedin.com/in/kenneth-r-7328b8230" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>
      <p>
        <Link to="/experience">Experience</Link> and <Link to="/skills">skills</Link> are listed
        separately for scanning.
      </p>
    </article>
  );
}
