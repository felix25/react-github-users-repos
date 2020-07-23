import axios from 'axios'
class UserService{
    static async userAll(query){
        let name = query ? `/${query}` : ''
        let result = await axios(`https://api.github.com/users${name}`)
        return result.data
    }
    static async userFilter(query){
        return await axios(`https://api.github.com/search/users?q=${query}`)
    }
    static async userRepo(name){
        let result = await axios(`https://api.github.com/users/${name}/repos`)
        return result.data
    }
}

export default UserService;