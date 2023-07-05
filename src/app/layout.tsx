import "../styles/globals.css";

export const metadata = {
  title: "JAK Google Shopping Clone",
  description: "Done with Tutorial by Sonny Sangha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
