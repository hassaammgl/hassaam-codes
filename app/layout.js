import "../styles/important.scss";
import style from "@/styles/App.module.scss";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.body}>{children}</body>
    </html>
  );
}
