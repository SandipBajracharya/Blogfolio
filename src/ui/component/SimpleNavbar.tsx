import Image from 'next/image';
import Link from 'next/link';

export default function SimpleNavbar() {
  return (
    <div className="px-10 py-5 fixed">
      <div>
        <Link href={'/'}>
          <Image src={'/images/logo.png'} alt="logo" width={40} height={40} priority={true} />
        </Link>
      </div>
    </div>
  );
}
