import * as React from "react"
import * as footerStyles from "../styles/footer.module.css"

const Footer = () => (
    <footer>
        <div id={footerStyles.container}>
            <div class={footerStyles.stack}>
                <span><a href="#INTERSCOPERECORDS">© Interscope Records</a></span>
                <span><a href="#PRIVACYPOLICY">Privacy Policy</a></span>
                <span><a href="#TERMSANDCONDITIONS">Terms & Conditions</a></span>
            </div>
            <div class={footerStyles.stack}>
                <span><a href="#COOKIES">Cookie Choices</a></span>
                <span><a href="#PERSONALDATA">Do Not Sell My Personal Information</a></span>
            </div>
        </div>
    </footer>
)

export default Footer