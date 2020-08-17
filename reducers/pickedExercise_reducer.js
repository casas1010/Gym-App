import { ADD_EXERCISE, REMOVE_EXERCISE } from "../actions/types";
import _ from "lodash";
// import { connect } from "react-redux";

const tempState = {
  //DELETE MEEE
  anatomyPicture:
    "https://cdn.britannica.com/s:1500x700,q:85/19/125819-004-39548B68/Muscles-back.jpg",
  animation: "-koP10y1qZI",
  description: "Place on a dumbbell on each side of a flat bench.... deleted",
  equipmentPicture:
    "https://p1.hiclipart.com/preview/947/521/144/fitness-bench-weight-training-body-solid-flat-incline-decline-bench-gfid-bodysolid-inc-fitness-centre-power-rack-physical-fitness-png-clipart.jpg,https://p7.hiclipart.com/preview/371/420/880/dumbbell-icon-dumbbells-png.jpg",
  exerciseName: "Dumbbell Row",
  primaryMuscle: "Back",
  secondaryMuscle: "Shoulders, Biceps",
};

const tempState2 = {
  //DELETE MEEE
  anatomyPicture:
    "https://cdn.britannica.com/s:1500x700,q:85/19/125819-004-39548B68/Muscles-back.jpg",
  animation: "-koP10y1qZI",
  description: "Place on a dumbbell on each side of a flat bench.... deleted",
  equipmentPicture:
    "https://p1.hiclipart.com/preview/947/521/144/fitness-bench-weight-training-body-solid-flat-incline-decline-bench-gfid-bodysolid-inc-fitness-centre-power-rack-physical-fitness-png-clipart.jpg,https://p7.hiclipart.com/preview/371/420/880/dumbbell-icon-dumbbells-png.jpg",
  exerciseName: "china tacos",
  primaryMuscle: "FOREHEAD",
  secondaryMuscle: "Shoulders, Biceps",
};
const tempState3 = {
  //DELETE MEEE
  anatomyPicture:
    "https://cdn.britannica.com/s:1500x700,q:85/19/125819-004-39548B68/Muscles-back.jpg",
  animation: "-koP10y1qZI",
  description: "Place on a dumbbell on each side of a flat bench.... deleted",
  equipmentPicture:
    "https://p1.hiclipart.com/preview/947/521/144/fitness-bench-weight-training-body-solid-flat-incline-decline-bench-gfid-bodysolid-inc-fitness-centre-power-rack-physical-fitness-png-clipart.jpg,https://p7.hiclipart.com/preview/371/420/880/dumbbell-icon-dumbbells-png.jpg",
  exerciseName: "china tacos",
  primaryMuscle: "FOREHEAD",
  secondaryMuscle: "Shoulders, Biceps",
};
const tempState4 = {
  //DELETE MEEE
  anatomyPicture:
    "https://cdn.britannica.com/s:1500x700,q:85/19/125819-004-39548B68/Muscles-back.jpg",
  animation: "-koP10y1qZI",
  description: "Place on a dumbbell on each side of a flat bench.... deleted",
  equipmentPicture:
    "https://p1.hiclipart.com/preview/947/521/144/fitness-bench-weight-training-body-solid-flat-incline-decline-bench-gfid-bodysolid-inc-fitness-centre-power-rack-physical-fitness-png-clipart.jpg,https://p7.hiclipart.com/preview/371/420/880/dumbbell-icon-dumbbells-png.jpg",
  exerciseName: "china tacos",
  primaryMuscle: "FOREHEAD",
  secondaryMuscle: "Shoulders, Biceps",
};
const tempState5 = {
  //DELETE MEEE
  anatomyPicture:
    "https://cdn.britannica.com/s:1500x700,q:85/19/125819-004-39548B68/Muscles-back.jpg",
  animation: "-koP10y1qZI",
  description: "Place on a dumbbell on each side of a flat bench.... deleted",
  equipmentPicture:
    "https://p1.hiclipart.com/preview/947/521/144/fitness-bench-weight-training-body-solid-flat-incline-decline-bench-gfid-bodysolid-inc-fitness-centre-power-rack-physical-fitness-png-clipart.jpg,https://p7.hiclipart.com/preview/371/420/880/dumbbell-icon-dumbbells-png.jpg",
  exerciseName: "china tacos",
  primaryMuscle: "asdasdas",
  secondaryMuscle: "Shoulders, Biceps",
};
const all = [tempState, tempState2];

const pickedExercise_reducer = (state = [...all], action) => {
  switch (action.type) {
    case ADD_EXERCISE:
      console.log("ADD_EXERCISE reducer invoked with:  ", action.payload);
      return _.uniqBy([action.payload, ...state], "exerciseName");

    case REMOVE_EXERCISE: // NOT SURE IF THIS WILL WORK
      return state.filter((item) => item.exersieName !== action.payload);

    default:
      return state;
  }
};

// function mapStateToProps({ exercise }) {
//   // return { pickedExercise: pickedExercise.pickedExercises };
//   return { exercise };
// }

export default pickedExercise_reducer;
// export default connect(mapStateToProps, null)(pickedExercise_reducer);
