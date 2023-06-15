import githubIcon from '../assets/images/github.svg'
import linkedInIcon from '../assets/images/linkedin.svg'

const styles = {
    icon: {
        height: '100px'
    }
}

export default function Footer () {
    return (
        <section id="footer">
            <p>Made with ❤️ in Charlotte, NC</p>
            <img style={styles.icon} src={githubIcon} />         
            <img style={styles.icon} src={linkedInIcon} />         
        </section>
    )
}