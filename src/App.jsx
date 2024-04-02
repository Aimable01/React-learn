import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import Greeting from "./Greeting";
import Button from "./Button";
import MyHook from "./MyHook";
import Todo from "./Todo";
import Slider from "./Slider";
import Search from "./Search";
import Fetch from "./Fetch";
import WeatherApp from "./WeatherApp";

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
      <Greeting isLoggedIn={true} username="BroCode" />
      <Food />
      <Button />
      <MyHook />
      <Todo />
      <Slider />
      <Search />
      <Fetch />
      <WeatherApp />
      <Footer />
    </>
  );
}

export default App;
