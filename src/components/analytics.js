import ReactGA from 'react-ga';

const analyticsEventTracker = () => {
    const eventTracker = (category, action, label) => {
        ReactGA.event({category:category, action:action, label:label});
    }
    return eventTracker;
}

export default analyticsEventTracker;