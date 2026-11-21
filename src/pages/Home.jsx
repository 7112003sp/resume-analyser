import React, { useContext } from "react";
import { UseContext } from "../../contextapi/Context";

const Home = () => {
  const { file, setfile } = useContext(UseContext);

  const handleFile = (event) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setfile(selectedFile);
    }
  };

  return (
    <section className="w-full px-4 pt-12">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-6 text-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Resume <span className="text-blue-500">Analyzer</span>
          </h1>

          <p className="text-zinc-400 text-sm mt-3">
            Upload your resume and discover how well it matches the job
            requirements.
          </p>
        </div>

        <div className="w-full border-2 border-dashed border-zinc-700 bg-neutral-800/50 rounded-2xl p-8 flex flex-col items-center gap-5">
          <h2 className="text-lg font-semibold text-white">
            Upload Your Resume
          </h2>

          <p className="text-zinc-400 text-sm">Supported format: PDF</p>

          <label className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer transition">
            Choose PDF File
            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFile}
              className="hidden"
            />
          </label>

          {file && (
            <div className="w-full bg-neutral-700/50 rounded-lg p-3">
              <p className="text-green-400 text-xs">File Selected</p>

              <p className="text-white text-sm truncate">{file.name}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
