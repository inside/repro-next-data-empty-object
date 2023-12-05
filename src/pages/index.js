import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/page1">go to page1</Link>
      </li>
      <li>
        <Link href="/page2">go to page2</Link>
      </li>
      <li>
        <Link href="/page3">go to page3</Link>
      </li>
      <li>
        <Link href="/page4">go to page4</Link>
      </li>
      <li>
        <Link href="/page5">go to page5</Link>
      </li>
    </ul>
  )
}
