import './globals.css';

export const metadata = {
  title: 'Jack Charles | Portfolio',
  description: 'One-page portfolio showcasing projects, experience, and ways to connect.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
