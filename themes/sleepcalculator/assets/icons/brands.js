import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

library.add(faFacebookF, faLinkedinIn, faTwitter, faYoutube);

dom.watch();
