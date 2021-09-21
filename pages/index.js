import { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles';
import Head from 'next/head'
import Image from 'next/image'
import {
  Hero,
  Works,
  Info,
  Technologies,
  BigTitle
} from '../screens';
import {
  Navbar,
  Sidebar
} from '../components';
import { defaultData } from '../pages_data/home_data/data';

const Home = () => {
  const [english, setEnglish] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const toggleSwitch = () => {
    setEnglish(!english)
  }
  const {
    hero,
    works,
    worksTextStartFalse,
    info,
    infoTextStartFalse,
    technologies,
    infoTitle,
    technologiesTitle,
    worksTitle,
  } = defaultData

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} english={english} toggleSwitch={toggleSwitch} />
      <Navbar setEnglish={setEnglish} toggle={toggle} english={english} toggleSwitch={toggleSwitch} />
      <Hero {...hero} english={english} />
      <Wrapper id='works'>
        <BigTitle {...worksTitle} english={english} />
        <Works {...works} src='/AdminSitePick.png' english={english} />
        <Works {...worksTextStartFalse} src='/AdminSitePick.png' english={english} id='works' />
      </Wrapper>
      <Wrapper id='habilities'>
        <BigTitle {...infoTitle} english={english} />
        <Info {...info} src='/ClientSide.svg' english={english} />
        <Info {...infoTextStartFalse} src='/ClientSide.svg' english={english} />
      </Wrapper>
      <Wrapper id='technologies'>
        <BigTitle {...technologiesTitle} english={english} />
        <Technologies {...technologies} src='/frontend.svg' english={english} />
      </Wrapper>
    </>
  )
}

export default Home;

const Wrapper = styled.div`
  background:${colors.background};
`