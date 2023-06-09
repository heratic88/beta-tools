export async function buildVideoUrl(url) {
  if (!url) return

  // redgifs
  if (url.startsWith('https://www.redgifs.com/watch/')) {
    const id = new URL(url).pathname.split('/')[2]

    const tokenResponse = await fetch('https://api.redgifs.com/v2/auth/temporary')
    const token = (await tokenResponse.json()).token

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }

    const gifResponse = await fetch(
      `https://api.redgifs.com/v2/gifs/${id}`,
      { headers, mode: 'cors' }
    )
    const urls = (await gifResponse.json()).gif.urls

    return urls.hd || urls.sd
  }

  return url
}
