'use client';

import { Pagination } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

type Props = {
  pages: number;
  actualPage: number;
};

const PaginationComponent = ({ pages, actualPage }: Props) => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center">
      <Pagination
        showControls
        total={pages}
        initialPage={actualPage}
        color="success"
        size="sm"
        onChange={(page) => {
          router.push(`/?page=${page}`);
        }}
      />
    </div>
  );
};

export default PaginationComponent;
