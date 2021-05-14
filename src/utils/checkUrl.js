export const  validateYouTubeUrl = (urlToParse) => {
  if (urlToParse) {
    const regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    if (urlToParse.match(regExp)) {
      return true
    }
  }
  return false
}
export const youtubeParser = (url) => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  var match = url.match(regExp)
  return match && match[7].length === 11 ? match[7] : false
}
export const checkImageUrl = url => {
  return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}