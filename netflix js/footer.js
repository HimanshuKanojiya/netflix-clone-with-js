//This Script is for loading footer section in all pages
//This script is not depended on other scripts

const footercontentretrieve = () => {
    //this function will return the footer HTML code
    return `
    <div id="footersocialmediaicons">
            <img src="./netflix images/facebook-logo.png" alt="Facebook Logo"/>
            <img src="./netflix images/instagram-logo.png" alt="Instagram Logo"/>
            <img src="./netflix images/twitter-logo.png" alt="Twitter Logo"/>
            <img src="./netflix images/youtube-logo.png" alt="YouTube Logo"/>
        </div>
        <div id="footerlinks">
        <div id="footermenu">
            <ul>
                <li>Audio and Subtitle</li>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div id="footermenu">
            <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notices</li>
            </ul>
        </div>
        <div id="footermenu" class="footermenumob">
            <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
            </ul>
        </div>
        <div id="footermenu">
            <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul>
        </div>
    </div>
        <div id="footerbutton">
        <button>Service Code</button>
    </div>
    <div id="credits">
    <p>Clone Made by </p><a href="./coder-profile.html">Himanshu Kanojiya</a>
    </div>
    
    
    `
}
const putcontentinfootersection = (sectionname) => {
    //This function is for putting content in the targeted container
    //sectionname variable is container ID
    const section = document.getElementById(sectionname);
    section.innerHTML = footercontentretrieve();

}

//Calling function to load footer
putcontentinfootersection("footersection");
