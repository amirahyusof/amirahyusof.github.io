export const getimageUrl =(path) => {
    return new URL(`assets/$(path)', import.meta.url).href
}