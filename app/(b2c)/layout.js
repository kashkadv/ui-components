
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DesktopNavigation from "@/Components/Navigation/DesktopNavigation";
import { AppProvider } from "@/context/AppContext";
import { Cart } from "@/Components/Cart";
import { Menu } from "@/Components/Menu";
import { Wishlist } from "@/Components/Wishlist";

// TODO remove mock data
import { menuItems } from "@/helpers/mockData";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <CartProvider>
        <WishlistProvider>
          <html lang="en" dir='ltr'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden cursor-default`}>
              <DesktopNavigation />

              <main className="p-6 laptop:p-12 desktop:px-24 max-w-full overflow-x-hidden">
                {children}
              </main>
              
              <Menu items={menuItems} />
              <Cart />
              <Wishlist />

            </body>
          </html>
        </WishlistProvider>
      </CartProvider>
    </AppProvider>
  );
}
