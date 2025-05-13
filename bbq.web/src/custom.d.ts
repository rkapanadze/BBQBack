declare module '*.png' {
  const value: string
  export default value
}
// src/declarations.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
