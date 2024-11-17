import React from 'react'

function WorkoutCard(props) {
    const title = 'Back Day';
    const description = 'Traps, Rhomboids, Lats, Rear Deltoid, erectors'
    const intensity = 7;

  return (
    <div className="bg-gray-500 w-32 h-40 p-4 rounded-3xl">
        <h1 className="font-bold italic">{title}</h1>
        <p className="text-sm leading-tight">{description}</p>
    </div>
  )
}

export default WorkoutCard