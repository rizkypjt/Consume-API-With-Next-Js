import Link from 'next/link'

function About() {
  return (
    <div>
      <ul>
        <Link href="/index">Home</Link>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>

      <h1>This is our homepage.</h1>
    </div>
  )
}

export default About