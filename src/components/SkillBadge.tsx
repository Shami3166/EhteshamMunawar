import React from "react";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, className }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Frontend":
        return "bg-blue-500/20 text-blue-600 border-blue-200 hover:bg-blue-500/30";
      case "Backend":
        return "bg-green-500/20 text-green-600 border-green-200 hover:bg-green-500/30";
      case "Database":
        return "bg-purple-500/20 text-purple-600 border-purple-200 hover:bg-purple-500/30";
      case "Tools":
        return "bg-orange-500/20 text-orange-600 border-orange-200 hover:bg-orange-500/30";
      default:
        return "bg-gray-500/20 text-gray-600 border-gray-200 hover:bg-gray-500/30";
    }
  };

  return (
    <Badge
      variant="secondary"
      className={cn(
        "px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-default border",
        getCategoryColor(skill.category),
        className
      )}
    >
      {skill.name}
      <div className="ml-2 w-2 h-2 bg-current rounded-full opacity-70" />
    </Badge>
  );
};
