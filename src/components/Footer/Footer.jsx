import React from 'react';
import { Wrapper, Grid } from './styles/Footer.styles';
import Brand from './Brand';
import About from './About';
import LiscencePolicy from './LiscencePolicy';
import Contact from './Contact';
const Footer = () => {
  return (
    <Wrapper>
      <Grid brand>
        <Brand />
      </Grid>
      <Grid>
        <About />
      </Grid>
      <Grid>
        <LiscencePolicy />
      </Grid>
      <Grid>
        <Contact />
      </Grid>
    </Wrapper>
  );
};

export default Footer;
