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