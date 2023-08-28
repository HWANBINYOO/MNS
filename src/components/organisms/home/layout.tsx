import Header from '../../molecules/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* <Header /> */}

      {children}
    </section>
  );
}
