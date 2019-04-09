import KeyType from "../enums/KeyType"

interface Key {
  key: string,
  notes: string[],
  relative: string,
  type: KeyType
}

export default Key
