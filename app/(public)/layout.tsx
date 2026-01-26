import Footer from "@/components/shared/Footer";
import NavigationBar from "@/components/shared/NavigationBar";
import { NAVIGATION_MENUS } from "@/constants/initialValue";

const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavigationBar
        menuItems={NAVIGATION_MENUS}
      />
      {children}
      <Footer />
    </>
  );
}

export default BaseLayout;