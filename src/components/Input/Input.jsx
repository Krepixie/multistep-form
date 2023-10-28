export default function Input({name, type, label, placeholder}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} />
    </>
  );
}
