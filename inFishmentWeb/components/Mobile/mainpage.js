import FishMenu from "./mainpages/fishmenu";
import { MobileMainPageHeader } from "./mainpages/header";

export default function MobileMainPage() {
    return (
        <div className="bg-light-blue">
            <MobileMainPageHeader />
            <FishMenu />
        </div>
    )
}