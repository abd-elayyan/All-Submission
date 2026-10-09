export const Header = (course) => {
  return <h1>{course.name}</h1>;
};

export const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

export const Content = (props) => {
  return (
    <>
      <Part part="Fundamentals of React" exercises="10" />
      <Part part="Using props to pass data" exercises="7" />
      <Part part="State of a component" exercises="14" />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Header name="Half Stack application development" />
      <Content />

      {/* I did not know how to create the total component and make sum of the exercises */}
    </div>
  );
};

export default App;
