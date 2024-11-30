import { Poppins, Open_Sans } from 'next/font/google'; // Import Google Fonts
import '@/styles/css/global.scss'; // Your global styles
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Shakti',
  description: 'Empowering Artisans',
};

// Define Poppins and Open Sans fonts
const poppins = Poppins({
  weight: ['400', '500', '700'], // Specify weights you need
  subsets: ['latin'], // Add subsets as per your language requirements
  variable: '--font-poppins', // Optional: Add a CSS variable for the font
});

const openSans = Open_Sans({
  weight: ['300', '700'], // Specify weights you need
  subsets: ['latin'], // Add subsets as per your language requirements
  variable: '--font-open-sans', // Optional: Add a CSS variable for the font
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable}`} // Add both fonts
        style={{ margin: 0, padding: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
