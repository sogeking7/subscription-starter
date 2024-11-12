// components/ProPlanMonthlyTable.js
import React from 'react';

const ProPlanMonthlyTable = () => {
  // Sample data for the Pro Plan monthly workout
  const weeklyData = [
    {
      week: "Week 1: Personalized Setup and Virtual Coaching Introduction",
      objective: "Establish baseline goals, start using 24/7 coaching, and engage with exclusive content.",
      workouts: [
        { day: "Monday", workout: "30 min upper body + cardio", notes: "Virtual coach feedback on form and intensity" },
        { day: "Wednesday", workout: "25 min lower body + flexibility", notes: "Coach suggestions on range of motion" },
        { day: "Friday", workout: "30 min cardio (HIIT) + core", notes: "Use exclusive HIIT routines" },
        { day: "Sunday", workout: "40 min full-body strength", notes: "Review form with coach via video analysis" },
      ],
      nutrition: "Get personalized feedback on meal plans from the coach and AI. Begin using enhanced tracking features for macronutrients and hydration."
    },
    {
      week: "Week 2: Intensifying Workouts with Virtual Support",
      objective: "Increase workout intensity and utilize coach advice for meal and exercise adjustments.",
      workouts: [
        { day: "Monday", workout: "40 min upper body + core", notes: "Coach advice on progressive overload" },
        { day: "Tuesday", workout: "30 min cardio (incline/intermediate)", notes: "Adjust resistance per coach feedback" },
        { day: "Thursday", workout: "35 min lower body + flexibility", notes: "Monitor joint stability with coach tips" },
        { day: "Saturday", workout: "30 min recovery and stretching", notes: "Virtual coach for mobility and flexibility guidance" },
        { day: "Sunday", workout: "45 min endurance workout", notes: "Track performance improvements with coach support" },
      ],
      nutrition: "Coach helps adjust macronutrients based on workout performance. Log meals consistently, and engage in meal planning tips provided in member features."
    },
    {
      week: "Week 3: Exclusive Programs and Community Engagement",
      objective: "Challenge limits through exclusive programs and join a special event.",
      workouts: [
        { day: "Monday", workout: "45 min full-body circuit (exclusive)", notes: "Coach checks form, gives interval tips" },
        { day: "Wednesday", workout: "40 min endurance + flexibility", notes: "Review stamina with coach, make adjustments" },
        { day: "Thursday", workout: "45 min strength training (upper)", notes: "Exclusive advanced routine for upper body" },
        { day: "Friday", workout: "Special Event Workout", notes: "Virtual challenge or live Q&A with trainer" },
        { day: "Sunday", workout: "30 min recovery and core", notes: "Coach tips for core engagement and recovery" },
      ],
      nutrition: "Coach assesses dietary habits and suggests any necessary modifications. Implement tips from virtual coach for meal timing around workout sessions."
    },
    {
      week: "Week 4: Final Review and Goal Setting for Next Month",
      objective: "Assess overall progress with the coach and make future adjustments.",
      workouts: [
        { day: "Monday", workout: "40 min strength (lower body)", notes: "Track any personal bests achieved" },
        { day: "Wednesday", workout: "30 min cardio (coach-led)", notes: "Assess endurance improvements" },
        { day: "Friday", workout: "50 min full-body with challenges", notes: "Exclusive full-body wrap-up with intervals" },
        { day: "Sunday", workout: "Optional stretching/recovery", notes: "Reflect with coach, celebrate progress" },
      ],
      nutrition: "Coach provides a comprehensive review of progress in fitness and nutrition. Discuss next month’s goals, potential changes to the plan, and new targets for both strength and nutrition."
    },
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-gray-800 p-6 bg-purple-100">Pro Plan - Monthly Workout Plan</h2>
        {weeklyData.map((week, index) => (
          <div key={index} className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">{week.week}</h3>
            <p className="text-sm text-gray-500 mb-4">{week.objective}</p>
            <table className="min-w-full text-left bg-white mb-4">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-purple-200 border-b">Day</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-purple-200 border-b">Workout</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-purple-200 border-b">Notes</th>
                </tr>
              </thead>
              <tbody>
                {week.workouts.map((workout, workoutIndex) => (
                  <tr key={workoutIndex} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-gray-800 border-b">{workout.day}</td>
                    <td className="px-6 py-4 text-gray-600 border-b">{workout.workout}</td>
                    <td className="px-6 py-4 text-gray-600 border-b">{workout.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-sm text-gray-600 mb-6">
              <strong>Nutrition Guidance:</strong> {week.nutrition}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProPlanMonthlyTable;