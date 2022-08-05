import ReactGA from 'react-ga';

const analyticsEventTracker = (category = 'User') => {
    const eventTracker = (action='test', label='label') => {
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}

export default analyticsEventTracker