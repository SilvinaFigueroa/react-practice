
import bottomNav from '../assets/data/bottom-nav';  

export default function Navigation({ info }) {
    return (
        <div>
            <nav className={info.class} aria-label="Main Navigation" role="navigation">
            <ul>
                {info.elements.map((element) => (
                    <li key={element.li}><a href={element.href}>{element.li}</a></li>
                ))}
            </ul>
            </nav>
            {/* Check if the navigation is the bootomNav and add copyright */}
            {info === bottomNav && (
                <div className="copyright">
                    <p>&copy; 2013 Valet Industries, Inc</p>
                </div>
            )}
        </div>
    )
}
