type Props = {};

export default function AboutPage({}: Props) {
  return (
    <section className="screens min-h-screen h-full">
      <h2 className="text-center text-2xl font-bold my-5">About the project</h2>
      <p>
        This is a project created with Next.js and Tailwind CSS, using the Rick
        and Morty API.
      </p>
      <p>
        The main purpose of this project is to learn Next.js 14 with the new
        features and Tailwind CSS.
      </p>
      <div>
        <h3 className="text-xl font-bold my-2">Techs and tools used</h3>
        <ul className="list-disc ml-12">
          <li>Next.js 14</li>
          <li>Tailwind CSS</li>
          <li>NextUI</li>
          <li>Next-Themes</li>
          <li>React</li>
          <li>Typescript</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>GitHub</li>
          <li>Vercel</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold my-2">New Features of Next.js</h3>
        <ul className="list-disc ml-12">
          <li>App Router</li>
          <li>Layout and Page Structure</li>
          <li>Dynamic Routes</li>
          <li>Metadata</li>
          <li>Automatic Image Optimization</li>
          <li>Image Optimization</li>
          <li>Server Components</li>
          <li>Streaming of Data</li>
        </ul>
      </div>
    </section>
  );
}
