import React, { useState } from "react";

const RecordRoutine = () => {
  const [ownerState, setOwnerState] = useState({
    owner: "",
    routine: ""
  });

  const handleOwnerChange = e =>
    setOwnerState({
      ...ownerState,
      [e.target.name]: [e.target.value]
    });

  const blankExercise = { name: "", sets: "", reps: "", weight: "" };
  const [exerciseState, setExerciseState] = useState([{ ...blankExercise }]);

  const addExercise = () => {
    setExerciseState([...exerciseState, { ...blankExercise }]);
  };

  const handleExerciseChange = e => {
    const updatedExercises = [...exerciseState];
    updatedExercises[e.target.dataset.idx][e.target.className] = e.target.value;
    setExerciseState(updatedExercises);
  };

  return (
    <form>
      <label htmlFor="routine">Routine</label>
      <input
        type="text"
        name="routine"
        id="routine"
        value={ownerState.routine}
        onChange={handleOwnerChange}
      />
      <input type="button" value="Add New Exercise" onClick={addExercise} />
      {exerciseState.map((val, idx) => {
        const numId = `name-${idx}`;
        const exerciseId = `exercise-${idx}`;
        return (
          <div key={`cat-${idx}`}>
            <label htmlFor={numId}>{`Exercise #${idx + 1}`}</label>
            <input
              type="text"
              data-idx={idx}
              className="name"
              value={exerciseState[idx].exercise}
              onChange={handleExerciseChange}
            />

            <label htmlFor={exerciseId}>Sets</label>
            <input
              type="text"
              name={exerciseId}
              data-idx={idx}
              id={exerciseId}
              className="sets"
              value={exerciseState[idx].sets}
              onChange={handleExerciseChange}
            />

            <label htmlFor={exerciseId}>Reps</label>
            <input
              type="text"
              name={exerciseId}
              data-idx={idx}
              id={exerciseId}
              className="reps"
              value={exerciseState[idx].reps}
              onChange={handleExerciseChange}
            />

            <label htmlFor={exerciseId}>Weight</label>
            <input
              type="text"
              name={exerciseId}
              data-idx={idx}
              id={exerciseId}
              className="weight"
              value={exerciseState[idx].weight}
              onChange={handleExerciseChange}
            />
          </div>
        );
      })}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default RecordRoutine;
