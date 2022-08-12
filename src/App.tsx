import React, {ReactElement, ReactNode} from 'react';
import './App.css';

// Conventional props
function Heading({ title }: { title: string}){
  return <h1>{title}</h1>
}
//Using ReactNode as type for children to pass through more than string, say JSX or more 
function HeadingWithContent({ children }: { children: ReactNode }): ReactElement{
  return <h1>{children}</h1>
}

//Default Props
const defaultContainerProps = {
  heading: <strong> My Heading </strong>
}
//merging two types together, adding on the types defined in the constant above
function Container ({ heading, children }: { children: ReactNode } & typeof defaultContainerProps): ReactElement{
  return <div><h1>{heading}</h1>{children}</div>
}
Container.defaultProps = defaultContainerProps;
function App() {
  return (
    <div>
      <Heading title="Hello World" />
      <HeadingWithContent>Hello World 2</HeadingWithContent>
      <Container>World</Container>
    </div>
  );
}

export default App;
