import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../../contextapi/Context";

const Result = () => {
  const { response, setresponse, setfile, setjd } = useContext(UseContext);

  const navigate = useNavigate();

  const handleBack = () => {
    setfile(null);
    setjd("");
    setresponse(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white px-4 py-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Back Button - Top Left */}
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-2 text-zinc-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-zinc-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
        >
          <span className="text-lg">←</span>
          Back to Home
        </button>

        <div className="flex flex-col gap-10 pt-10">
          {/* Resume Score */}
          <div className="text-center">
            <h1 className="text-zinc-400 text-xl md:text-2xl">Resume Score</h1>

            <h2 className="text-6xl md:text-7xl font-bold mt-3">
              {response?.score ?? 0}
              <span className="text-zinc-500 text-2xl md:text-3xl">/100</span>
            </h2>
          </div>

          {/* Matching Skills */}
          <section>
            <h2 className="text-zinc-300 text-xl md:text-2xl font-semibold mb-5 text-center">
              Matching Skills
            </h2>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {response?.matching_skills?.map((item, index) => (
                <li
                  key={index}
                  title={item}
                  className="bg-green-700/25 border border-green-700 text-green-300 rounded-lg p-3 text-sm text-center truncate"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Missing Skills */}
          <section>
            <h2 className="text-zinc-300 text-xl md:text-2xl font-semibold mb-5 text-center">
              Missing Skills
            </h2>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {response?.missing_skills?.map((item, index) => (
                <li
                  key={index}
                  title={item}
                  className="bg-red-700/20 border border-red-800 text-red-300 rounded-lg p-3 text-sm text-center truncate"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Suggestions */}
          <section className="bg-neutral-800 rounded-xl p-5 md:p-7">
            <h2 className="text-zinc-200 text-xl md:text-2xl font-semibold mb-4">
              Suggestions
            </h2>

            {Array.isArray(response?.suggestions) ? (
              <ul className="list-disc pl-5 space-y-3 text-zinc-300 text-sm md:text-base leading-relaxed">
                {response.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
                {response?.suggestions}
              </p>
            )}
          </section>

          {/* Summary */}
          <section className="bg-neutral-800 rounded-xl p-5 md:p-7">
            <h2 className="text-zinc-200 text-xl md:text-2xl font-semibold mb-4">
              Summary
            </h2>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {response?.summary}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Result;
