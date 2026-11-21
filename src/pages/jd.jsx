import React, { useContext } from "react";
import { UseContext } from "../../contextapi/Context";

const Jd = () => {
  const { jd, setjd } = useContext(UseContext);

  return (
    <section className="w-full min-w-0 bg-neutral-900 text-white px-4 py-10">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-5">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            Job <span className="text-blue-500">Description</span>
          </h1>

          <p className="text-zinc-400 text-sm">
            Paste the job description to compare it with your resume.
          </p>
        </div>

        <div className="w-full min-w-0">
          <textarea
            className="block w-full box-border min-h-56 md:min-h-64 bg-neutral-800 border border-zinc-700 rounded-xl p-4 text-sm text-white outline-none focus:border-blue-500 resize-y"
            placeholder="Paste job description here..."
            value={jd}
            onChange={(e) => setjd(e.target.value)}
          />

          <p className="text-zinc-500 text-xs text-right mt-2">
            Characters: {jd?.length ?? 0}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Jd;
