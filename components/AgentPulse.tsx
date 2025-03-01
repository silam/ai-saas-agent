'use client'

import React from 'react'

type AgentPulseProps = {
  size?: "small" | "medium" | "large" ;
  color?: "blue" | "green" | "purple";
};


function AgentPulse({size = "medium", color = "blue"}: AgentPulseProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  const colorClasses = {
    blue: "bg-blue-500 shallow-blue-500",
    green: "bg-green-500 shallow-green-500",
    purple: "bg-purple-500 shallow-purple-500"

  };


  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}>
    </div>
  )
}

export default AgentPulse