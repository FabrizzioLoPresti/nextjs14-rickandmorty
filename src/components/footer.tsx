import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-24 flex items-center justify-center border-t mt-10">
      <p className="text-center text-xl font-bold">
        Made with ❤️ by{' '}
        <Link
          href="https://github.com/FabrizzioLoPresti"
          target="_blank"
          className="text-blue-500"
        >
          @FabrizzioLoPresti
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
