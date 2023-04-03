import { Sandpack } from '@codesandbox/sandpack-react';

export default function SandpackComponent() {
  const files = {};
  return <Sandpack files={files} theme='dark' template='static' />;
}
