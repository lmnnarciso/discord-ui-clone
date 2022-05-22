import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DiscordChat from '../components/DiscordChat'
const Home: NextPage = () => {
  return (<DiscordChat/>)
}

export default Home
