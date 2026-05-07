import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <article className="prose-page">
      <h1>About</h1>
      <p>Hi, I am Kenneth Rios.</p>
      <p>
        I am an AI engineer and backend developer in David, Chiriqui, Panama. I build LLM
        integrations, retrieval systems, automation, and fast APIs, with a lot of my recent work
        running on Cloudflare Workers.
      </p>
      <p>
        Right now I am a Full Stack Developer at ASSA Compania de Seguros. Before that, I worked at
        Zelta on AI agent platforms, multi-agent review systems, GitHub-integrated coding agents,
        and evaluation pipelines for production agent behavior.
      </p>
      <p>
        My RednBlue work covered no-code AI agent builders, pharmacy customer-service agents, voice
        interview automation, MCP servers, RAG systems, and automation microservices.
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
