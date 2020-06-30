import Link from 'next/link';
import Head from 'next/head';

export default function Layout({
    children,
    title = 'Default Title'
}) {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet='utf-8' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
            </Head>
            <nav>
                <div className='nav-wrapper'>
                    <ul className='right hide-on-med-and-down'>
                        <li>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {children}
            
            {/* Footer to go in here */}

            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </div>
    )
}