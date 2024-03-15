import '@/app/ui/global.css';
import NavBar from './ui/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavBar/>
      <body>{children}</body>
    </html>
  );
}
