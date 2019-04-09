import {keys} from "../data"
import cleanArray from "./cleanArray"
import {Key} from "../types"

function isTrue(keyNotes: string[], notes: string[]) {
  const a = []

  notes.map((note: string) => {
    if (keyNotes.includes(note)) { a.push(note) }
  })

  return a.length === notes.length
}

const getKeysFromNotes = (notes: string[]): Key[] => {
  const foundKeys: Key[] = []

  const cleanedNotes = cleanArray(notes)
  if (cleanedNotes.length === 0) { return foundKeys }

  keys.map((key: Key) => {
    if (isTrue(key.notes, cleanedNotes)) {
      foundKeys.push(key)
    }
  })

  return foundKeys
}

export default getKeysFromNotes
