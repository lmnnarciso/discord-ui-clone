import styled from "styled-components"
import {Grid, ChannelData, ChannelInfo, ChannelList, ServerList, ServerName, UserInfo, UserList} from "../styles/layout"



const ServerPill = styled.div`
    position: absolute;
    background-color: white;
    height: 6px;
    width: 6px;
    top: 45%;
    left: -12px;
    border-radius: 9999px;

`

const ServerPlaceholder = styled.div`
    width: 48px;
    height: 48px;
    background-color: var(--secondary);
    border-radius: 9999px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    position: relative;
    
    :hover {
        border-radius: 10px;
    }

    :hover ${ServerPill} {
        height: 12px;
        top: 40%;
    }
`

function DiscordChat(){
    return <Grid>
        <ServerList>
            {Array(10).fill(null).map((_, i) => (<ServerPlaceholder key={i} >
                <ServerPill />
            </ServerPlaceholder>))}
        </ServerList>
        <ServerName></ServerName>
        <ChannelInfo></ChannelInfo>
        <ChannelList></ChannelList>
        <UserInfo></UserInfo>
        <ChannelData></ChannelData>
        <UserList></UserList>
    </Grid>
}

export default DiscordChat