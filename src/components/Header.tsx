import React from 'react';

const Header = () => {
  return (
    <header className="logo">
      💣 <span>Bomb</span><span className="highlight">Movies</span>
    </header>
  );
};

export default React.memo(Header);
