
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div>
            <section className="relative min-h-screen w-full overflow-hidden text-white flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%),linear-gradient(180deg,#020617,#020617)]">

                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="relative z-10 max-w-5xl w-full px-6 pt-32 pb-20 flex flex-col items-center gap-20 text-center">

                    {/* Top Content */}
                    <div className="max-w-3xl">
                        <span className="inline-block mb-7 px-4 py-1.5 rounded-full text-sm font-semibold text-indigo-300 border border-indigo-400/30 bg-indigo-400/15">
                            Real-world bug solving platform
                        </span>

                        <h1 className="text-[3.8rem] leading-tight font-extrabold tracking-tight mb-7 max-sm:text-[2.6rem]">
                            Solve Real{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                Development Bugs
                            </span>
                            <br />
                            Not Fake Coding Questions
                        </h1>

                        <p className="text-lg leading-relaxed text-slate-300 mb-10">
                            FindBug helps developers post real project issues and get practical
                            solutions from the community. Learn debugging, improve problem-solving,
                            and build real experience beyond DSA challenges.
                        </p>

                        <div className="flex justify-center gap-5">
                            <button className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-indigo-400 shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(99,102,241,0.5)] transition cursor-pointer">
                                Get Start
                            </button>

                            <button className="px-8 py-3.5 rounded-xl font-semibold border border-slate-600 text-slate-200 hover:border-indigo-400 hover:text-white hover:-translate-y-0.5 transition cursor-pointer">
                                Explore Bugs
                            </button>
                        </div>
                    </div>

                    {/* Bottom Code Section */}
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-[#020617] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                            <pre className="language-typescript overflow-x-auto text-[0.95rem] leading-relaxed font-mono">
                                <code className="language-typescript">
                                    {`
import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  greeting: publicProcedure.query(() => {
    return "Hello from tRPC";
  }),
});`}
                                </code>
                            </pre>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Banner
