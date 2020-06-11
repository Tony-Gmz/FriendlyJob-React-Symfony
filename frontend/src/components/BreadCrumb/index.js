import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { NavLink } from 'react-router-dom';

import './breadCrumbs.scss';

const routes = [
  { path: '/services/:slug/jobworkers/jobworker_:id', breadcrumb: 'JobWorker Détails' },
  { path: '/services/:slug/jobworker_:id', breadcrumb: 'JobWorker Détails' },
  { path: '/services/:slug/jobworkers', breadcrumb: 'JobWorkers Liste' },
  { path: '/services/:slug' },
  { path: '/services', breadcrumb: ' Nos Services' },
  { path: '/demandes', breadcrumb: 'Mes demandes' },
  { path: '/profil', breadcrumb: 'Mon profil' },
  { path: '/contact', breadcrumb: 'Contact' },
  { path: '/', breadcrumb: 'Accueil' },
  { path: '*', breadcrumb: "Page d'erreur" },
];

const Breadcrumbs = withBreadcrumbs(routes)(({ breadcrumbs }) => (
  <div className="breadCrumb">
    {breadcrumbs.map(({ match, breadcrumb }) => (
      // other props are available during render, such as `location`
      // and any props found in your route objects will be passed through too
      <NavLink to={match.url}>
        <span key={match.url}>
          {breadcrumb}  >
        </span>
      </NavLink>
    ))}
  </div>
));

export default Breadcrumbs;