import ReactGA from 'react-ga';

const analyticsEventTracker = (category = 'home') => {
    const eventTracker = (action='test', label='label') => {
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}

export default analyticsEventTracker