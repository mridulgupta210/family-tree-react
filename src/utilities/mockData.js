const getMockDataSkeleton = (
    id,
    mother,
    father,
    first,
    middle = '',
    last = '',
    dob = new Date(),
    gender = 'Male',
    comments = '',
    children = [],
    spouse = null
) => ({
    id,
    name: {
        first,
        middle,
        last
    },
    dob,
    gender,
    comments,
    parents: {
        mother,
        father
    },
    children,
    spouse
});

export const generateMockData = () => {
    return [
        getMockDataSkeleton(1, 2, 3, 'Mridul', '', 'Gupta'),
        getMockDataSkeleton(2, null, null, 'Sangeeta', '', 'Gupta', undefined, 'Female', '', [1, 6, 7], 3),
        getMockDataSkeleton(3, 4, 5, 'Jitendra', '', 'Gupta', undefined, 'Male', '', [1, 6, 7], 2),
        getMockDataSkeleton(4, null, null, 'Amma', '', 'Gupta', undefined, 'Female', '', [3], 5),
        getMockDataSkeleton(5, null, null, 'Baba', '', 'Gupta', undefined, 'Male', '', [3], 4),
        getMockDataSkeleton(6, 2, 3, 'Neha', '', 'Gupta'),
        getMockDataSkeleton(7, 2, 3, 'Radhika', '', 'Gupta'),
    ]
};
