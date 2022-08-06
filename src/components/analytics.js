import ReactGA from 'react-ga';

const analyticsEventTracker = (category = 'Event category') => {
    const eventTracker = (action='action', label='label') => {
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}

export default analyticsEventTracker