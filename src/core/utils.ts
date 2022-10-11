export const msToMinutesAndSeconds = (ms: number) => {
  const seconds = parseInt(String((ms / 1000) % 60))
  const minutes = parseInt(String((ms / (1000 * 60)) % 60))

  return {
    seconds: seconds < 10 ? `0${seconds}` : seconds,
    minutes,
  }
}

export const getSplitPath = (path: string) => path.split('/').filter((path) => !!path)