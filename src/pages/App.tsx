import './App.css'
import React, { useState, useEffect } from 'react'
import ResumeViewer from '../components/ResumeViewer'
import { type Resume } from '../types/resume'
import ResumeService from '../services/ResumeService'

export default function App () {
  const [resume, setResume] = useState<Resume>()

  useEffect(() => {
    new ResumeService().getResume().then(r => {
      setResume(r)
    }).catch(err => {
      alert(err)
    })
  }, [])

  return (
    <ResumeViewer resume={resume}></ResumeViewer>
  )
}
