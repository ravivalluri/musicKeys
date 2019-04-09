import {keys} from "../data"
import {Key} from "../types"

const getKeyFromSlug = (slug: string): Key => {
  return keys.find((key: Key) => {
    return String(key.key) === String(slug)
  })
}

export default getKeyFromSlug
