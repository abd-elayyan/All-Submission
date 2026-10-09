export const Header = (course) => {
  return <h1>{course.name}</h1>;
};

export const Content = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const App = () => {
  return (
    <div>
      <Header name="Half Stack application development" />
      <Content part="Fundamentals of React" exercises="10" />
      <Content part="Using props to pass data" exercises="7" />
      <Content part="State of a component" exercises="14" />

      {/* I did not know how to create the total component and make sum of the exercises */}
    </div>
  );
};

export default App;
