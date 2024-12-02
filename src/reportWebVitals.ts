import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export function sendToAnalytics({ id, name, value }: { id: string, name: string, value: number }) {
  // ga('send', 'event', {
  //   eventCategory: 'Web Vitals',
  //   eventAction: name,
  //   eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
  //   eventLabel: id, // id unique to current page load
  //   nonInteraction: true, // avoids affecting bounce rate
  // });
}

export default reportWebVitals;
