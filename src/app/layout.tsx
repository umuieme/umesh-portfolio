// app/layout.tsx (or _app.tsx in /pages directory)
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="dark bg-neutral-900 text-neutral-100">
        <div className="dark">{children}</div>
      </body>
    </html>
  );
}
