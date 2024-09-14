// import { Inter, Outfit } from "next/font/google";
// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Toaster } from "@/components/ui/sonner";

// const outfit = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "Wallet Wise",
//   description: " Helping African manage and optimize their spending",
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider
//       publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <html lang="en">
//         <body className={outfit.className}>
//           <Toaster />
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }


import { Outfit } from "next/font/google";
import "./globals.css"; // Make sure this doesn't override the font
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

// Load the font with appropriate subset
const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata = {
  title: "Wallet Wise",
  description: "Helping Africans manage and optimize their spending",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" className={outfit.className}>
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
