import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/dog">강아지</Link>
            </li>
            <li>
              <Link href="/cat">고양이</Link>
            </li>
            <li>
              <Link href="/lion">사자</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
