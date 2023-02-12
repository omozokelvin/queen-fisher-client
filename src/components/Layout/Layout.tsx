import { Fragment, type ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
