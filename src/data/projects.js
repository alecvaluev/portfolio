import vidtalkie_pic from '../images/vidtalkie.png';
import path_pic from '../images/path-search.png';
import sort_pic from '../images/sorting.png';

import path_vid from '../images/pathsearch-vid.mp4';
import sort_vid from '../images/sorting-vid.mp4';
import vidtalkie_vid from '../images/vidtalkie-vid.mp4';

const projects = [
    {
        prj_id: 1,
        image: sort_pic,
        video: sort_vid,
        github: 'https://github.com/alecvaluev/sort-algorithm-visualiser',
        website: 'https://sort-algorithm-visualiser.herokuapp.com',
        tools: ['ReactJs', 'ReduxJs', 'Bootstrap5'],
        completed: 2022
    },
    {
        prj_id: 2,
        image: path_pic,
        video: path_vid,
        github: 'https://github.com/alecvaluev/path-search-visualiser',
        website: 'https://path-finding-visualiser-app.herokuapp.com/',
        tools: ['ReactJs', 'ReduxJs', 'Bootstrap5'],
        completed: 2022
    },
    {
        prj_id: 3,
        image: vidtalkie_pic,
        video: vidtalkie_vid,
        github: 'https://github.com/alecvaluev/vidtalkie',
        website: 'https://vidtalkie.vercel.app',
        tools: ['ReactJs', 'TypeScript', 'NextJs', 'Tailwind CSS', ''],
        completed: 2022
    },
    {
        prj_id: 4,
        image: '',
        github: 'https://github.com/alecvaluev/Grocery-Store-Manager',
        website: '',
        tools: ['C'],
        completed: 2020
    },
    {
        prj_id: 5,
        image: '',
        github: 'https://github.com/alecvaluev/mathGame',
        website: '',
        tools: ['C'],
        completed: 2020
    },
    {
        prj_id: 6,
        image: '',
        github: 'https://github.com/alecvaluev/company-web-app',
        website: '',
        tools: ['Express', 'Mongoose', 'bcryptjs'],
        completed: 2021
    },
    {
        prj_id: 7,
        image: '',
        github: 'https://github.com/alecvaluev/General-Hospital-Pre-Triage-Application',
        website: '',
        tools: ['C++'],
        completed: 2021
    },
    {
        prj_id: 8,
        image: '',
        github: 'https://github.com/alecvaluev/assembly-line-simulation',
        website: '',
        tools: ['C++'],
        completed: 2021
    },
]
export default projects;
