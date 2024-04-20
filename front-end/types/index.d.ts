export interface IStatus {
  color: string;
  text: string;
  icon: JSX.Element;
}

export interface IStatusComponentProps {
  dataFromAPI: {
    time: string;
    status: string;
  };
}

export interface IStatusData {
  time: string;
  status: IStatus;
}

export interface IImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface IHeaderContent {
  title: string;
  currentPosition: (string | JSX.Element)[];
  image: IImage;
  statusFromAPI: {
    time: string;
    status: string;
  };
}

export interface IStatusIndicator {
  indicatorBg: string;
  animate: string;
}

export interface ISocial {
  links: {
    id: number;
    title: string;
    href: string;
    icon: JSX.Element;
  }[];
}

export interface IMastodon {
  rel: string;
  text: string;
  link: string;
}

export interface IMadeBy {
  label: string;
  author: string;
}

export interface ICycling {
  currentYear: number;
  distance: string;
}

export interface IAboutMe {
  title: (string | JSX.Element)[];
}