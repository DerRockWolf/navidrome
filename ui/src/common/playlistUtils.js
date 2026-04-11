export const isWritable = (permission) => {
  return (
    permission === "editor" || permission === "owner" || permission === "admin"
  )
}

export const isReadOnly = (permission) => {
  return !isWritable(permission)
}

export const isSmartPlaylist = (pls) => !!pls.rules

export const canChangeTracks = (pls) =>
  isWritable(pls.permission) && !isSmartPlaylist(pls)
