import { Social } from "./social";
import { Badge} from "./Badge";

export interface Presentateur {
    id: number;
    name: string;
    featured: boolean;
    company: string;
    companyLogo: string;
    country: string;
    photoUrl: string;
    shortBio: string;
    bio: string;
    tags: string[];
    badges: Badge[];
    socials: Social[];
}
