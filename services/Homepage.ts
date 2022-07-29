const baseURL = 'https://staging-scoopcore.gramedia.com/'

const settings = {
    headers: {
      Accept: 'application/json',
      'api-key': 'eyJpZCI6IjciLCJuYW1lIjoic2Nvb3Bfd2ViX2FwcHMifQ',
    }
}

export const Banner = () => {
    const data = fetch(baseURL + 'banners?query=homepage', settings)
    return data
}
  
export const Layout = (value:number) => {
   const data = fetch(baseURL + `layouts/${value}`, settings)
   return data
}
  