import DefaultHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = ({categories}: {categories: any[]}) => {

  return (
    <>
<DefaultHeader categories={categories} />
    </>
  );
};

export default Header;