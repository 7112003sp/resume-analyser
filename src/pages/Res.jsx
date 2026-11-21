import React, { useContext, useState } from "react";
import { UseContext } from "../../contextapi/Context";
import { api } from "../api/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Res = () => {
  const { file, jd, setresponse } = useContext(UseContext);
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const handleResume = async () => {
    if (!file) {
      toast.error("Please select a PDF file");
      return;
    }

    if (!jd?.trim()) {
      toast.error("Please paste the job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jd", jd);

    try {
      setloading(true);

      const response1 = await api.post("/analyse", formData);

      const result = response1.data?.message ?? response1.data;

      setresponse(result);

      toast.success("Resume analysed successfully");

      navigate("/result");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Unable to analyse resume");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 pb-12">
      <button
        type="button"
        onClick={handleResume}
        disabled={loading}
        className="w-full max-w-xl bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {loading ? "Analysing Resume..." : "Analyse Resume"}
      </button>
    </div>
  );
};

export default Res;
