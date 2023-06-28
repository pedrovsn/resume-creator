import { type Resume } from '../types/resume'

class ResumeService {
  async getResume (): Promise<Resume> {
    const url = './data/resume.json'
    return await fetch(url)
      .then(async response => {
        console.log(response)
        return await response.json()
      }).then(data => {
        return data as Resume
      })
  }
}

export default ResumeService
