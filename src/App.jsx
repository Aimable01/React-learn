import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";

function App() {
  return (
    <>
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
      <Student name="Spongebob" age={32} isStudent={true} />
      <Student name="Patrick" age={23} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <Food />
      <Footer />
    </>
  );
}

export default App;
