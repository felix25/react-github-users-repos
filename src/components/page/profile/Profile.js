import React ,{ useState, useEffect}from 'react';
import UserService from '../../../util/services/User'
import RepoGrid from '../../repo/repoGrid'
import { ProfileUser, Aside, AsideAvatar, AsideInfo, AsideList, LinkProfile } from './profile.styles'
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
        <ProfileUser>
           <Aside>
                <AsideAvatar>
                    <img src={user.avatar_url} alt=""/>
                </AsideAvatar>
                <AsideInfo>
                    <LinkProfile href={user.html_url} target='_blank' rel="noopener noreferrer">Visit Github Profile</LinkProfile>
                    <h2>{user.name}</h2>
                    <h3>{user.login}</h3>
                    {user.bio && (<p>{user.bio}</p>)}
                    <AsideList>
                       { user.location && (<li><b>ciudad:</b> {user.location}</li>)}
                       { user.company && ( <li><b>compania:</b> {user.company}</li>)}
                       { user.blog && (<li><b>blog:</b> {user.blog}</li>)}
                       { user.public_repos > 0 && (<li><b>canitdad repos:</b> {user.public_repos}</li>)}
                       { user.followers > 0 && ( <li><b>followers:</b> {user.followers}</li>)}
                       { user.following > 0 && (<li><b>following:</b> {user.following}</li>)}
                    </AsideList>
                </AsideInfo>
           </Aside>
           <RepoGrid repo={repo} isLoading={isLoading}/>
        </ProfileUser>
    )
}
export default Profile;
