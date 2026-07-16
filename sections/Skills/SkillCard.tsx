"use client";

import { Skill } from "../../lib/skill";

interface Props {
  skill: Skill;
}

export default function SkillCard({
  skill,
}: Props) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-6">
      <h4 className="text-lg font-semibold text-white">
        {skill.name}
      </h4>

      <p className="mt-2 text-gray-400">
        {skill.percentage}%
      </p>
    </div>
  );
}