import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";

const bug = {
  wrong: `
export const getProject = async (req, res) => {
  try {
    const userId = req.userId

    const findProject = await Project.fi({ user })

    if (!findProje) {
      return res.status(404).json({ message: "project not found" })
    }

    res.status(700).json({
      message: "project find sucessfull",
      findProject
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "server error" })
  }
}
  `,
  correct: `
export const getProject = async (req, res) => {
  try {
    const userId = req.userId

    const findProject = await Project.find({ userId })

    if (!findProject) {
      return res.status(404).json({ message: "project not found" })
    }

    res.status(200).json({
      message: "project find sucessfull",
      findProject
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "server error" })
  }
}
  `
};

const Banner = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [fixed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFixed(prev => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
      <div className="grid-overlay" />

      <div className="banner-container">
        {/* LEFT CONTENT */}
        <div className="banner-content">
          <span className="badge">Real-world bug solving platform</span>

          <h1 className="title">
            Solve Real <span className="gradient-text">Development Bugs</span>
          </h1>

          <p className="description">
            FindBug helps developers post real project issues and get
            practical solutions from experienced developers.
          </p>

          <div className="button-group">
            <button className="btn-primary">Post a Bug</button>
            <button className="btn-secondary">Explore Bugs</button>
          </div>
        </div>

        {/* RIGHT CODE SECTION */}
        <div className="code-wrapper">
          <div className="code-header">
            <span>Node.js API Bug</span>
            <span className={`status ${fixed ? "fixed" : "bug"}`}>
              {fixed ? "✔ Fixed Code" : "✖ Bug Found"}
            </span>
          </div>

          <pre
            className={`code-block language-typescript line-numbers ${
              fixed ? "fixed" : "bug"
            }`}
          >
            <code className="language-typescript">
              {fixed ? bug.correct : bug.wrong}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Banner;
