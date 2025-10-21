import request from './req'

const getProjects = () => {
    return request({
        url: '/projects',
        method: 'GET',
    })
}
