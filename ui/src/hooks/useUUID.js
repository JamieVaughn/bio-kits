export default function useUUID() {
  let url = URL.createObjectURL(new Blob())
  URL.revokeObjectURL(url)
  return url.split('/')[3]
}
