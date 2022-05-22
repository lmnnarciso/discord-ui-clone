import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  grid-template-areas:
    'SL SN CI CI'
    'SL CL CD UL'
    'SL UI CD UL';
  height: 100vh;
  background-color: var(--primary);
`;

export const ServerList = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ServerName = styled.div`
  grid-area: SN;
  display: flex;
`

export const ChannelInfo = styled.div`
  grid-area: CI;
  display: flex;
`

export const ChannelList = styled.div`
  grid-area: CI;
`

export const ChannelData = styled.div`
  grid-area: CD;
`

export const UserInfo = styled.div`
  grid-area: UI;
`

export const UserList = styled.div`
  grid-area: UL;
`