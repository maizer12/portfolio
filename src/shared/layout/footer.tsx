import styles from './footer.module.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-1.5">
      <p className="text-md text-light-900 container">Copyright ©{year} my portfolio. All rights reserved</p>
    </footer>
  );
};
