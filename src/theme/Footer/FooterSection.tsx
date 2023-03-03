import React from 'react';
import LinkGroup from '@skatteetaten/frontend-components/LinkGroup';
import styles from './FooterSection.module.scss';

interface Props {
  heading: string;
  subHeading?: string;
  links: { text: string; path: string }[];
}
export function FooterSection ({ heading, subHeading, links }: Props): JSX.Element {
  return (
    <>
    <h2>{heading}</h2>
    {subHeading && <p className={styles.subheading}>{subHeading}</p>}
    <LinkGroup links={links} className={styles.link} />
  </>
  );
};
