console.log('### middleware imported')

export function middleware(request) {
  console.log('### middleware called:', request.url)
}
