import React, { useEffect, useState } from 'react'
import { iPost } from '../data/iPost'
import PostSection from '../components/PostSection'
import Posts from '../components/Posts'

const Blog = () => {
  const [result, setResult] = useState<iPost[]>([
    { id: 0, title: '', userId: 0, body: ' ', tags: [], reactions: 0 },
  ])
  const [crimeData, setCrimeData] = useState<iPost[]>()
  const [historyData, setHistoryData] = useState<iPost[]>()
  const [frenchData, setFrenchData] = useState<iPost[]>()
  const [magicalData, setMagicalData] = useState<iPost[]>()
  const [americanData, setAmericanData] = useState<iPost[]>()

  const getPosts = async () => {
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    setResult(data.posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    getSections()
  }, [result])

  const TAGS = ['History', 'Magical', 'French', 'American', 'Crime']
  
  const getSections = () => {
    if (result === undefined) return <h1>Loading...</h1>
    const filteredCrime = result.filter((item) => item.tags.includes('crime'))
    const filteredHistory = result.filter((item) =>
      item.tags.includes('history')
    )
    const filteredAmerican = result.filter((item) =>
      item.tags.includes('american')
    )
    const filteredFrench = result.filter((item) => item.tags.includes('french'))
    const filteredMagical = result.filter((item) =>
      item.tags.includes('magical')
    )
    setCrimeData(filteredCrime)
    setHistoryData(filteredHistory)
    setAmericanData(filteredAmerican)
    setFrenchData(filteredFrench)
    setMagicalData(filteredMagical)
  }

  return (
    <div className='Container'>
      {TAGS.map((tag) => (
        <section id={tag.toLowerCase()}>
          {<Posts posts={historyData} filter={tag.toLowerCase()} />}
        </section>
      ))}
    </div>
  )
}

export default Blog
