// https://www.mockaroo.com/

const fakeData = [
  {
    exerciseName: "Ab Rollout",
    weight: 8,
    sets: 5,
    reps: 10,
    date: "2019/11/25",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 28,
    sets: 5,
    reps: 10,
    date: "2020/02/06",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 20,
    sets: 5,
    reps: 10,
    date: "2020/05/22",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 18,
    sets: 5,
    reps: 10,
    date: "2020/03/28",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 25,
    sets: 5,
    reps: 10,
    date: "2019/09/21",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 1,
    sets: 5,
    reps: 10,
    date: "2020/04/02",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 28,
    sets: 5,
    reps: 10,
    date: "2020/02/27",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 16,
    sets: 5,
    reps: 10,
    date: "2020/06/22",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 4,
    sets: 5,
    reps: 10,
    date: "2020/03/02",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 7,
    sets: 5,
    reps: 10,
    date: "2019/11/22",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 13,
    sets: 5,
    reps: 10,
    date: "2020/01/03",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 7,
    sets: 5,
    reps: 10,
    date: "2020/07/13",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 25,
    sets: 5,
    reps: 10,
    date: "2020/07/07",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 20,
    sets: 5,
    reps: 10,
    date: "2020/02/02",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 21,
    sets: 5,
    reps: 10,
    date: "2019/09/17",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 24,
    sets: 5,
    reps: 10,
    date: "2020/04/11",
    workoutNumber: 4,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 9,
    sets: 5,
    reps: 10,
    date: "2020/06/29",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 1,
    sets: 5,
    reps: 10,
    date: "2020/02/22",
    workoutNumber: 3,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 5,
    sets: 5,
    reps: 10,
    date: "2019/08/28",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 15,
    sets: 5,
    reps: 10,
    date: "2019/12/28",
    workoutNumber: 3,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 3,
    sets: 5,
    reps: 10,
    date: "2020/07/01",
    workoutNumber: 3,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 7,
    sets: 5,
    reps: 10,
    date: "2020/01/10",
    workoutNumber: 2,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 26,
    sets: 5,
    reps: 10,
    date: "2020/01/07",
    workoutNumber: 1,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 6,
    sets: 5,
    reps: 10,
    date: "2019/10/06",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 28,
    sets: 5,
    reps: 10,
    date: "2020/06/02",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 15,
    sets: 5,
    reps: 10,
    date: "2020/04/23",
    workoutNumber: 4,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 23,
    sets: 5,
    reps: 10,
    date: "2019/08/26",
    workoutNumber: 4,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 15,
    sets: 5,
    reps: 10,
    date: "2020/07/24",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 26,
    sets: 5,
    reps: 10,
    date: "2019/11/15",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 6,
    sets: 5,
    reps: 10,
    date: "2020/04/17",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 12,
    sets: 5,
    reps: 10,
    date: "2019/08/22",
    workoutNumber: 3,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 2,
    sets: 5,
    reps: 10,
    date: "2019/11/26",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 29,
    sets: 5,
    reps: 10,
    date: "2020/04/13",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 14,
    sets: 5,
    reps: 10,
    date: "2019/09/12",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 14,
    sets: 5,
    reps: 10,
    date: "2019/09/21",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 2,
    sets: 5,
    reps: 10,
    date: "2019/12/15",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 12,
    sets: 5,
    reps: 10,
    date: "2019/10/05",
    workoutNumber: 1,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 24,
    sets: 5,
    reps: 10,
    date: "2019/10/21",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 6,
    sets: 5,
    reps: 10,
    date: "2020/02/07",
    workoutNumber: 4,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 7,
    sets: 5,
    reps: 10,
    date: "2020/02/22",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 7,
    sets: 5,
    reps: 10,
    date: "2020/04/28",
    workoutNumber: 1,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 13,
    sets: 5,
    reps: 10,
    date: "2019/12/16",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 19,
    sets: 5,
    reps: 10,
    date: "2020/06/07",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 18,
    sets: 5,
    reps: 10,
    date: "2020/01/30",
    workoutNumber: 4,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 10,
    sets: 5,
    reps: 10,
    date: "2020/03/17",
    workoutNumber: 3,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 19,
    sets: 5,
    reps: 10,
    date: "2020/03/14",
    workoutNumber: 1,
  },
  {
    exerciseName: "Ab Rollout",
    weight: 22,
    sets: 5,
    reps: 10,
    date: "2020/06/09",
    workoutNumber: 3,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 24,
    sets: 5,
    reps: 10,
    date: "2019/10/16",
    workoutNumber: 2,
  },
  {
    exerciseName: "Ab Crunch Machine",
    weight: 9,
    sets: 5,
    reps: 10,
    date: "2020/02/28",
    workoutNumber: 3,
  },
  {
    exerciseName: "Dumbbell Row",
    weight: 22,
    sets: 5,
    reps: 10,
    date: "2019/11/29",
    workoutNumber: 4,
  },
];

export default fakeData;
