// components/BasicPlanMonthlyTable.js
import React from 'react';

const BasicPlanMonthlyTable = () => {
  // Sample data for the Basic Plan monthly workout
  const weeklyData = [
    {
      week: "Week 1: Building the Basics",
      objective: "Establish a workout routine and become familiar with basic exercises.",
      workouts: [
        { day: "Monday", workout: "20 min full-body workout", notes: "Light cardio warm-up" },
        { day: "Wednesday", workout: "25 min strength + flexibility", notes: "Focus on form" },
        { day: "Friday", workout: "30 min cardio + core", notes: "Track progress after each session" },
      ],
    },
    {
      week: "Week 2: Increasing Intensity",
      objective: "Build endurance and strength.",
      workouts: [
        { day: "Monday", workout: "30 min upper body strength", notes: "Record weights and reps" },
        { day: "Tuesday", workout: "25 min cardio", notes: "Track time/distance covered" },
        { day: "Thursday", workout: "30 min lower body strength", notes: "Increase reps if comfortable" },
        { day: "Saturday", workout: "20 min full-body circuit", notes: "Add 5 mins of stretching" },
      ],
    },
    {
      week: "Week 3: Challenging the Body",
      objective: "Enhance strength and endurance through longer sessions.",
      workouts: [
        { day: "Monday", workout: "35 min upper body + core", notes: "Record any personal bests" },
        { day: "Tuesday", workout: "30 min HIIT (High-Intensity Interval)", notes: "Short bursts, track heart rate" },
        { day: "Thursday", workout: "35 min lower body strength", notes: "Record weights, reps" },
        { day: "Friday", workout: "Rest or stretching", notes: "Reflect on progress" },
        { day: "Saturday", workout: "30 min cardio + core", notes: "Track distance/time improvements" },
      ],
    },
    {
      week: "Week 4: Refining and Reflecting",
      objective: "Solidify progress and set new goals for the next month.",
      workouts: [
        { day: "Monday", workout: "40 min full-body workout", notes: "Challenge with higher weights" },
        { day: "Wednesday", workout: "35 min cardio + upper body", notes: "Track personal improvements" },
        { day: "Friday", workout: "35 min lower body + core", notes: "Push through, add intensity" },
        { day: "Saturday", workout: "Optional light cardio/stretching", notes: "Reflect on overall progress" },
      ],
    },
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-gray-800 p-6 bg-green-100">Basic Plan - Monthly Workout Plan</h2>
        {weeklyData.map((week, index) => (
          <div key={index} className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">{week.week}</h3>
            <p className="text-sm text-gray-500 mb-4">{week.objective}</p>
            <table className="min-w-full text-left bg-white">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-green-200 border-b">Day</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-green-200 border-b">Workout</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-green-200 border-b">Notes</th>
                </tr>
              </thead>
              <tbody>
                {week.workouts.map((workout, workoutIndex) => (
                  <tr key={workoutIndex} className="hover:bg-green-50">
                    <td className="px-6 py-4 text-gray-800 border-b">{workout.day}</td>
                    <td className="px-6 py-4 text-gray-600 border-b">{workout.workout}</td>
                    <td className="px-6 py-4 text-gray-600 border-b">{workout.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicPlanMonthlyTable;
