import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";

export default function Banner() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="banner">
      <div className="grid-overlay"></div>

      <div className="banner-container">
        {/* Top Content */}
        <div className="banner-content">
          <span className="badge">
            Real-world bug solving platform
          </span>

          <h1 className="title">
            Solve Real{" "}
            <span className="gradient-text">Development Bugs</span>
            <br />
            Not Fake Coding Questions
          </h1>

          <p className="description">
            FindBug helps developers post real project issues and get practical
            solutions from the community. Learn debugging, improve problem-solving,
            and build real experience beyond DSA challenges.
          </p>

          <div className="button-group">
            <button className="btn-primary">Post a Bug</button>
            <button className="btn-secondary">Explore Bugs</button>
          </div>
        </div>

        {/* Code Section */}
        <div className="code-wrapper">
          <pre className="code-block">
            <code className="language-typescript">
{`// React bug example
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1);
}, []);

console.log(count); // ❌ Expected: 1, Actual: 0

// Why does this happen and how to fix it?`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
