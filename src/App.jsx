import "./App.css";
import Input from "./components/Input/Input";
import Step from "./components/Step/Step";

export default function App() {
  return (
    <>
      <div className="sidebar">
        <ol>
          <Step number={"1"} description={"Your info"} />
          <Step number={"2"} description={"Select plan"} />
          <Step number={"3"} description={"Add-ons"} />
          <Step number={"4"} description={"Summary"} />
        </ol>
      </div>
      <main>
        <h2>Personal Info</h2>
        <span>Please provide your name, email address, and phone number.</span>
        <form>
          <Input
            name={"name"}
            type={"text"}
            label={"Name"}
            placeholder={"e.g. Stephen King"}
          />
          <Input
            name={"email"}
            type={"email"}
            label={"Email Adress"}
            placeholder={"e.g. stephenking@lorem.com"}
          />
          <Input
            name={"phone"}
            type={"tel"}
            label={"Phone Number"}
            placeholder={"e.g. +0 123 456 789"}
          />
        </form>
      </main>
      <button type="submit">Next Step</button>
    </>
  );
}
