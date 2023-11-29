import Link from 'next/link';
import Image from 'next/image';

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <section className="screens">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/404.png"
          alt="404"
          className="w-fit"
          width={500}
          height={500}
        />
        <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
        <Link href="/">Go Home</Link>
      </div>
    </section>
  );
}
