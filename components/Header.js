import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar">
      <Link href="/">Accueil</Link>
      <Link href="/projects">Projets</Link>
    </nav>
  );
}