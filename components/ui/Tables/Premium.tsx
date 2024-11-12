// components/PremiumPlanMonthlyTable.js
import React from 'react';

const PremiumPlanMonthlyTable = () => {
  // Sample data for the Premium Plan monthly workout
  const weeklyData = [
    {
      week: "Week 1: Setting the Foundation",
      objective: "Establish a personalized workout routine and begin tracking meals with AI guidance.",
      workouts: [
        { day: "Monday", workout: "30 min full-body strength workout", notes: "Track weights and reps in app" },
        { day: "Wednesday", workout: "20 min cardio + core", notes: "Track distance and time" },
        { day: "Friday", workout: "30 min upper body strength", notes: "Record any new exercises or increases" },
        { day: "Sunday", workout: "25 min lower body workout", notes: "Ensure form and technique" },
      ],
      nutrition: "Input dietary preferences and goals into the AI tool for a customized meal plan. Begin tracking daily meals to familiarize with macronutrient recommendations."
    },
    {
      week: "Week 2: Building Consistency and Refining Nutrition",
      objective: "Increase workout intensity and integrate nutrition tracking fully.",
      workouts: [
        { day: "Monday", workout: "35 min upper body + core", notes: "Use recommended weights from AI suggestions" },
        { day: "Tuesday", workout: "30 min cardio (HIIT)", notes: "Note intensity, push through 3-4 intervals" },
        { day: "Thursday", workout: "35 min lower body strength", notes: "Track reps and any strength improvements" },
        { day: "Saturday", workout: "30 min flexibility and mobility", notes: "Focus on stretching, track progress" },
        { day: "Sunday", workout: "30 min full-body strength", notes: "Try increased weight/reps for progressive gains" },
      ],
      nutrition: "Follow AI meal recommendations, focusing on nutrient timing (e.g., protein intake around workouts). Log food for accurate macronutrient tracking and note energy levels."
    },
    {
      week: "Week 3: Challenging the Routine and Adjusting Meals",
      objective: "Increase intensity and assess nutrition's impact on performance.",
      workouts: [
        { day: "Monday", workout: "40 min upper body", notes: "Focus on progressive overload" },
        { day: "Wednesday", workout: "35 min cardio (intervals)", notes: "Increase intervals, note stamina changes" },
        { day: "Thursday", workout: "40 min lower body", notes: "Test new lower body exercises" },
        { day: "Friday", workout: "20 min core + stretching", notes: "Focus on core stability, track improvement" },
        { day: "Sunday", workout: "45 min full-body endurance", notes: "Challenge with higher reps or minimal rest" },
      ],
      nutrition: "AI may adjust the meal plan based on tracked progress, making it more protein-rich or balanced according to goals. Track energy, mood, and performance changes to see if any dietary adjustments are needed."
    },
    {
      week: "Week 4: Consolidating Progress and Monthly Review",
      objective: "Finalize routines, ensure adherence to nutrition, and evaluate overall progress.",
      workouts: [
        { day: "Monday", workout: "40 min upper body + core", notes: "Check for personal bests" },
        { day: "Wednesday", workout: "30 min cardio + lower body", notes: "Use consistent intensity, track endurance" },
        { day: "Friday", workout: "45 min full-body workout", notes: "Challenge strength and stamina" },
        { day: "Sunday", workout: "Optional stretching/recovery", notes: "Focus on relaxation, mental check-in" },
      ],
      nutrition: "AI generates a summary of workout and nutrition adherence, showing any major improvements (e.g., strength gains, weight loss, or muscle gain). Set new goals for the next month, such as increasing strength in specific areas, improving cardio, or refining nutrition further."
    },
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-2xl font-bold text-center text-gray-800 p-6 bg-blue-100">Premium Plan - Monthly Workout Plan</h2>
        {weeklyData.map((week, index) => (
          <div key={index} className="p-4">
            <h3 className="text-xl font-semibold text-gray-700">{week.week}</h3>
            <p className="text-sm text-gray-500 mb-4">{week.objective}</p>
            <table className="min-w-full text-left bg-white mb-4">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-blue-200 border-b">Day</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-blue-200 border-b">Workout</th>
                  <th className="px-6 py-3 text-sm font-semibold text-gray-700 bg-blue-200 border-b">Notes</th>
                </tr>
              </thead>
              <tbody>
                {week.workouts.map((workout, workoutIndex) => (
                  <tr key={workoutIndex} className="hover:bg-blue-50">
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

export default PremiumPlanMonthlyTable;