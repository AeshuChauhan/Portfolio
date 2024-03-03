"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import React from "react";

export function SkillTooltip({ skills }: any) {
    return (
        <div className="flex flex-row items-start justify-start mb-5 w-full gap-5">
            <AnimatedTooltip items={skills} />
        </div>
    );
}
