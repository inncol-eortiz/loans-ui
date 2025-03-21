import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI Imports
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '120px',
  width: '120px',
  overflow: 'hidden',
  display: 'block',
}));

export default function Logo(): React.JSX.Element {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/logo.png" alt="logo" height={120} width={120} priority />
    </LinkStyled>
  );
}
