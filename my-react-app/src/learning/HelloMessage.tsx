

type HelloMessageProps = {
  name: string;
};

export function HelloMessage({ name }: HelloMessageProps) {
  return (
    <h1>Hello, {name}!</h1>;
  )
}