import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/app/ThemeProvider';
import { CopilotKit } from '@copilotkit/react-core';
import Chatbot from '@/components/app/Chatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const title = 'Syntax & Synapse | Durgesh Babu P | AI Engineer';
const description = 'A personal portfolio for Durgesh Babu P, showcasing projects, skills, and professional experience in AI engineering.';
const url = 'https://your-portfolio-url.com'; // Replace with your actual URL

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: 'Syntax & Synapse',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // OG image placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['https://placehold.co/1200x630.png'], // Twitter card image placeholder
  },
  metadataBase: new URL(url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <CopilotKit runtimeUrl="/api/copilotkit">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="absolute top-0 left-0 -z-10 h-full w-full bg-background">
              <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-[rgba(25,103,210,0.2)] opacity-50 blur-[80px]"></div>
            </div>
            {children}
            <Toaster />
            <Chatbot />
          </ThemeProvider>
        </CopilotKit>
      </body>
    </html>
  );
}
