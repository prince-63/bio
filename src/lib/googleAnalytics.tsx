import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-92DHJ8KG28');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};