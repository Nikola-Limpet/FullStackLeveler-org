import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <div
      className={clsx(
        styles.featuresContainer,
        styles.spaceMonoRegular,
        styles.pageBackground
      )}
    >
      <p>
        This is FullStack Leveler. THE BEST WAY TO LEARN FULLSTACK DEVELOPMENT.
        This website was built to help university students learn FullStack
        development through practical projects.
      </p>
      <p>
        I believe that the best way to learn is by doing. That's why I created
        this platform to help you learn by building real-world projects. You
        will learn how to build web applications using React, NodeJS, Express,
        and MongoDB in a practical way, not just theory.
      </p>
      <p>
        You will also learn how to deploy your projects to the cloud. This
        platform is open source and free for everyone. I believe that education
        should be accessible to everyone. I hope you enjoy learning with
        FullStack Leveler.
      </p>
    </div>
  );
}
