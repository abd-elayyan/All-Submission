export const Header = (course) => {
  return <h1>{course.name}</h1>;
};
let total = 0;
export const Part = (props) => {
  total += props.exercises;
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export const Content = (props) => {
  return (
    <>
      <Part part={props.name} exercises={props.ex} />
    </>
  );
};

export const Total = () => {
  return (
    <>
      <p>{total}</p>
    </>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header name={course} />
      <Content name={part1.name} ex={part1.exercises} />
      <Content name={part2.name} ex={part2.exercises} />
      <Content name={part3.name} ex={part3.exercises} />
      <Total />
    </div>
  );
};

export default App;
