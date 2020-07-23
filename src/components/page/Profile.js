import React ,{ useState, useEffect}from 'react';
import UserService from '../../util/services/User'
import RepoGrid from '../users/repoGrid'

const Profile = props => {
    const [user, setUser] = useState([])
    const [repo, setRepo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { match } = props
    let {username} = match.params
    useEffect(()=>{
        UserService.userAll(username).then(res=>{
            setUser(res)
        })
        UserService.userRepo(username).then(res=>{
            setRepo(res)
            setIsLoading(false)
        })
    },[username])
    return (
        <div className="profile-user">
           <section className="aside">
                <div className="aside__avatar">
                    <img src={user.avatar_url} alt=""/>
                </div>
                <div className="aside__info">
                    <a href={user.html_url} target='_blank' rel="noopener noreferrer" className="link-profile">Visit Github Profile</a>
                    <h2>{user.name}</h2>
                    <h3>{user.login}</h3>
                    {user.bio && (<p>{user.bio}</p>)}
                    <ul>
                       { user.location && (<li><b>ciudad:</b> {user.location}</li>)}
                       { user.company && ( <li><b>compania:</b> {user.company}</li>)}
                       { user.blog && (<li><b>blog:</b> {user.blog}</li>)}
                       { user.public_repos > 0 && (<li><b>canitdad repos:</b> {user.public_repos}</li>)}
                       { user.followers > 0 && ( <li><b>followers:</b> {user.followers}</li>)}
                       { user.following > 0 && (<li><b>following:</b> {user.following}</li>)}
                    </ul>
                </div>
           </section>
           <RepoGrid repo={repo} isLoading={isLoading}/>
        </div>
    )
}
export default Profile;
