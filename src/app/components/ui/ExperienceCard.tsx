// components/Card.tsx
import React from "react";
import { Experience } from "../../types";

interface CardProps {
  data: Experience;
}

const ExperienceCard: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card gap-8">
      <div>
        <div className="flex flex-row gap-2 mb-2">
          <span
            className={
              data.id === 1
                ? "text-xs text-zinc-50 bg-teal-500 px-2 py-1 rounded-lg"
                : "text-xs text-teal-500 px-2 py-1 rounded-lg border border-teal-500"
            }
          >
            {data.status}
          </span>
          <span className="text-xs text-teal-500 px-2 py-1 rounded-lg border border-teal-500">
            {data.type}
          </span>
        </div>
        <small className="text-zinc-500/80">{data.time}</small>
      </div>

      <div>
        <h2 className="font-bold text-lg">{data.title}</h2>
        <h3 className="mb-4">
          @{" "}
          <a href={data.url} target="_blank">
            {data.company}
          </a>{" "}
        </h3>
        <p className="text-sm">{data.body}</p>
      </div>
      <small className="text-zinc-500/80">{data.language}</small>
    </div>
  );
};

export default ExperienceCard;
