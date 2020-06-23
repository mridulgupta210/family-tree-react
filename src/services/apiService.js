const apiService = (function () {
    const createApiUrl = (baseUrl, parameters) => {
        const apiUrl = '';

        let queryString = '';
        if (parameters) {
            Object.keys(parameters).forEach(parameter => {
                queryString = queryString + (parameter + '=' + parameters[parameter] + '&');
            });

            queryString = queryString.length > 0 ? `?${queryString.substr(0, queryString.length - 1)}` : '';
        }

        return apiUrl + baseUrl + queryString;
    };

    return {
        
    };
}());

export { apiService };
