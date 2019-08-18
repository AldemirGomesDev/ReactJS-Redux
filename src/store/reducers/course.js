const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        {
            id: 1,
            title: 'React Native',
            lessons: [
                {
                    id: 1,
                    title: 'Iniciando com React Native',
                    url: 'https://www.youtube.com/embed/XcU9GEUZTQA'
                },
                {
                    id: 2,
                    title: 'FlexBox no React Native',
                    url: 'https://www.youtube.com/embed/dUkkOdhyO1w'
                },
            ],
        },
        {
            id: 2,
            title: 'ReactJS',
            lessons: [
                {
                    id: 1,
                    title: 'Iniciando no ReactJS',
                    url: 'https://www.youtube.com/embed/7A4UQGrFU9Q'
                },
                {
                    id: 2,
                    title: 'Autenticação em rotas',
                    url: 'https://www.youtube.com/embed/sYe4r8WXGQg'
                },
            ]
        }
    ]
};

export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {
            ...state,
            activeLesson: action.lesson,
            activeModule: action.module
        }
    }
    return state;
}