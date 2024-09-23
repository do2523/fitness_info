"use client";

import { useState } from "react";

import { api } from "note/trpc/react";
type Exercise = {
    equipment: string;
    // Add any other properties needed, e.g.,
    // name: string;
    // type: string;
  };
export default function Exercises() {
  const { data, isLoading, error } = api.exercise.getExercises.useQuery({ muscle: 'biceps' })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data?.map((exercise: Exercise) => (
        <div key={exercise.equipment}>{exercise.equipment}</div>
      ))}
    </div>
  );
}
