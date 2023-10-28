import "./Step.css";

export default function Step({ number, description }) {
  return (
    <li>
        <span>Step {number}</span>
        <span>{description}</span>
    </li>
  );
}
