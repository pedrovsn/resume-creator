import { type Contact } from './contact'
import { type Education } from './education'
import { type Experience } from './experience'

export interface Resume {
  fullName: string
  headline: string
  contacts: Contact[]
  summary: string
  experiences: Experience[]
  educations: Education[]
  skills: string[]
}
