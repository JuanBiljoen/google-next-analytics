//importing necasarry things from next
import Link from 'next/link'
//styling links
const linkStyle = {
    marginRight: 15
}
//header for nav with styled jsx
const Header = () => (
    <div>
        <Link legacyBehavior href="/">
            <a className="link">Home</a>
        </Link>
        <Link legacyBehavior href="/about">
            <a className="link">About</a>
        </Link>
        <Link legacyBehavior href="/projects">
            <a className="link">Projects</a>
        </Link>
        <Link legacyBehavior href="/contact">
            <a className="link">Contact</a>
        </Link>
        <style jsx>{`
            .link {
                margin-right: 15px;
                font-size: 1.2rem;
                text-decoration: none;
                color: #000000;
            }
            .link:hover {
                color: blue;
            }
        `}</style>
    </div>
)

export default Header