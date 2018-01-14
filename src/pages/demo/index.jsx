import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import ExternalLink from '../../components/ExternalLink';
import { demoList } from '../../../data/SiteConfig';

const DemoItem = ({ href, title }) => (
  <Link to={href} href={href}>
    <p>
      {title}
    </p>
  </Link>
);

DemoItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Demo = () => (
  <div className="demo container">
    <div className="row">
      <div className="col">
        <h2>KUMPULAN DEMO APLIKASI</h2>
        
      </div>
    </div>
  </div>
);

export default Demo;
