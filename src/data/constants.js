export const DEFAULT_LANG_CODE = 'en';

export const screenMode = {
    light: {
        bg: 'bg-white',
        sidebar: 'bg-gray-50',
        text: 'text-slate-900',
        border: 'border-gray-200',
        card: 'bg-white/80',
        secondary: 'text-slate-600'
    },
    dark: {
        bg: 'bg-slate-950',
        sidebar: 'bg-slate-900',
        text: 'text-slate-100',
        border: 'border-slate-800',
        card: 'bg-slate-900/80',
        secondary: 'text-slate-400'
    },
    highlight: {
        bg: 'bg-gradient-to-r from-blue-600 to-purple-600',
        text: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
        border: 'border-blue-600',
        shadow: 'shadow-blue-600/30',
        hover: {
            text: 'hover:text-blue-600',
            border: 'hover:border-blue-600',
            bg: 'hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600'
        },
        md: {
            bg : 'md:bg-gradient-to-r md:from-blue-600 md:to-purple-600'
        }
    }
}

export const programming_languages = ['C', 'C++', 'Python', 'Kotlin'];
export const web_technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'NodeJs', 'ReactJs', 'ReduxJs', 'Vue.js', 'NextJs', 'Bootstrap', 'Tailwind CSS', 'MUI', 'GraphQL', 'Jest', 'Playwright'];
export const databases = ['MongoDB', 'Oracle','Microsoft Server'];

export const projectEmptyTemplate = {
        "prj_id": 0,
        "name": "",
        "description": ""
    };

export const linkedInUrl = 'https://www.linkedin.com/in/aleks-valuev/';
export const gitHubUrl = 'https://github.com/alecvaluev';
