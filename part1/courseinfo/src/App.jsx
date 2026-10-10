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
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="Using props to pass data" exercises={7} />
      <Part part="State of a component" exercises={14} />
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
  return (
    <div>
      <Header name="Half Stack application development" />
      <Content />
      <Total />
    </div>
  );
};

export default App;
