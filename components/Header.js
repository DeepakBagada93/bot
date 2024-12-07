// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* Use Link component instead of a tag */}
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/healthcare">Healthcare</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
